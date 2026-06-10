#!/usr/bin/env node

import { createServer } from "node:http";
import { exec } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { google } from "googleapis";
import { GoogleAdsApi } from "google-ads-api";

const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ??
    process.env.GOOGLE_OAUTH_CLIENT_PATH ??
    ".secrets/gcp-oauth-client-ads.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json",
);
const OAUTH_REDIRECT_PORT = Number(process.env.GOOGLE_ADS_OAUTH_PORT ?? 53683);
const OAUTH_REDIRECT_URI = `http://localhost:${OAUTH_REDIRECT_PORT}/oauth2callback`;
const SCOPES = ["https://www.googleapis.com/auth/adwords"];

const isListAccounts = process.argv.includes("--list-accounts");

const openBrowser = (url) => {
  const command =
    process.platform === "darwin"
      ? `open "${url}"`
      : process.platform === "win32"
        ? `start "" "${url}"`
        : `xdg-open "${url}"`;
  exec(command);
};

const loadOAuthClientSecrets = () => {
  if (!existsSync(OAUTH_CLIENT_PATH)) {
    console.error(`No existe el cliente OAuth: ${OAUTH_CLIENT_PATH}`);
    process.exit(1);
  }
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const config = raw.installed ?? raw.web ?? raw;
  if (!config.client_id || !config.client_secret) {
    console.error("El JSON OAuth debe tener client_id y client_secret.");
    process.exit(1);
  }
  return config;
};

const createOAuthClient = () => {
  const { client_id, client_secret } = loadOAuthClientSecrets();
  return new google.auth.OAuth2(client_id, client_secret, OAUTH_REDIRECT_URI);
};

const runOAuthFlow = async () => {
  const oauth2Client = createOAuthClient();
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });

  console.log("\n🔐 Inicia sesión con el Gmail que administra Google Ads (MCC).\n");
  console.log(
    "Si el navegador falla, agrega este redirect en GCP OAuth:\n",
    OAUTH_REDIRECT_URI,
    "\n",
  );

  const code = await new Promise((resolvePromise, reject) => {
    const server = createServer((req, res) => {
      const requestUrl = new URL(req.url ?? "/", OAUTH_REDIRECT_URI);
      if (requestUrl.pathname !== "/oauth2callback") {
        res.writeHead(404);
        res.end();
        return;
      }

      const authError = requestUrl.searchParams.get("error");
      if (authError) {
        res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Error de autorización</h1>");
        server.close();
        reject(new Error(authError));
        return;
      }

      const authCode = requestUrl.searchParams.get("code");
      if (!authCode) {
        res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Código no recibido</h1>");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>✓ Autorizado</h1><p>Cierra esta pestaña.</p>");
      server.close();
      resolvePromise(authCode);
    });

    server.listen(OAUTH_REDIRECT_PORT, "127.0.0.1", () => {
      console.log(`Abriendo navegador…\n${authUrl}\n`);
      openBrowser(authUrl);
    });

    server.on("error", reject);
  });

  const { tokens } = await oauth2Client.getToken(code);
  writeFileSync(OAUTH_TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf8");
  console.log(`\n✓ Token guardado en ${OAUTH_TOKEN_PATH}`);
  console.log("Siguiente: npm run google-ads:list-accounts\n");
};

const listAccessibleAccounts = async () => {
  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  if (!developerToken) {
    console.error("Falta GOOGLE_ADS_DEVELOPER_TOKEN en .env.local");
    process.exit(1);
  }
  if (!existsSync(OAUTH_TOKEN_PATH)) {
    console.error("No hay token. Ejecuta: npm run google-ads:auth");
    process.exit(1);
  }

  const { client_id, client_secret } = loadOAuthClientSecrets();
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  if (!tokens.refresh_token) {
    console.error("El token no tiene refresh_token. Vuelve a ejecutar google-ads:auth con prompt=consent.");
    process.exit(1);
  }

  const client = new GoogleAdsApi({
    client_id,
    client_secret,
    developer_token: developerToken,
  });

  const response = await client.listAccessibleCustomers(tokens.refresh_token);
  const names = response.resource_names ?? response.resourceNames ?? [];
  console.log("\nCuentas accesibles con este OAuth:\n");
  for (const resource of names) {
    const id = String(resource).replace("customers/", "");
    console.log(`  - ${id}`);
  }
  console.log(
    "\nPon en .env.local:\n  GOOGLE_ADS_CUSTOMER_ID=5930583968  (cuenta con campañas)\n  GOOGLE_ADS_LOGIN_CUSTOMER_ID=<ID del MCC sin guiones>\n",
  );
};

if (isListAccounts) {
  listAccessibleAccounts().catch((error) => {
    console.error(error.message ?? error);
    process.exit(1);
  });
} else {
  runOAuthFlow().catch((error) => {
    console.error(error.message ?? error);
    process.exit(1);
  });
}
