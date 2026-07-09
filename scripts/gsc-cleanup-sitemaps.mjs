#!/usr/bin/env node
/**
 * Elimina sitemaps erróneos enviados manualmente a GSC.
 * Requiere scope de escritura: ejecutar `npm run gsc:cleanup:auth` una vez.
 */
import { createServer } from "node:http";
import { exec } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { google } from "googleapis";

const SITE_URL = process.env.GSC_SITE_URL ?? "sc-domain:gonzalopedrosa.cl";
const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GSC_OAUTH_WRITE_TOKEN_PATH ?? ".secrets/gsc-oauth-write-token.json",
);
const OAUTH_REDIRECT_PORT = Number(process.env.GSC_CLEANUP_OAUTH_PORT ?? 53683);
const OAUTH_REDIRECT_URI = `http://127.0.0.1:${OAUTH_REDIRECT_PORT}/oauth2callback`;
const SCOPES = ["https://www.googleapis.com/auth/webmasters"];
const isAuthOnly = process.argv.includes("--auth");

const INVALID_SITEMAPS = [
  "https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan",
];

function openBrowser(url) {
  const command =
    process.platform === "darwin"
      ? `open "${url}"`
      : process.platform === "win32"
        ? `start "" "${url}"`
        : `xdg-open "${url}"`;
  exec(command);
}

function loadOAuthClientSecrets() {
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
}

function createOAuthClient() {
  const { client_id, client_secret } = loadOAuthClientSecrets();
  return new google.auth.OAuth2(client_id, client_secret, OAUTH_REDIRECT_URI);
}

async function runOAuthFlow() {
  const oauth2Client = createOAuthClient();
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });

  console.log("\n🔐 Autoriza escritura en Search Console (eliminar sitemaps).\n");

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
        res.end("<h1>Error de autorización</h1><p>Cierra esta ventana.</p>");
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
      res.end(
        "<h1>✓ Autorizado</h1><p>Ya puedes cerrar esta pestaña y volver a la terminal.</p>",
      );
      server.close();
      resolvePromise(authCode);
    });

    server.listen(OAUTH_REDIRECT_PORT, "127.0.0.1", () => {
      console.log(`Abriendo navegador… Si no abre, visita:\n${authUrl}\n`);
      openBrowser(authUrl);
    });

    server.on("error", reject);
  });

  const { tokens } = await oauth2Client.getToken(code);
  writeFileSync(OAUTH_TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf8");
  console.log(`\n✓ Token de escritura guardado en ${OAUTH_TOKEN_PATH}`);
  console.log("Ejecuta: npm run gsc:cleanup:sitemaps\n");
}

function loadOAuth() {
  const client = createOAuthClient();
  if (!existsSync(OAUTH_TOKEN_PATH)) {
    console.error("Falta token de escritura. Ejecuta: npm run gsc:cleanup:auth");
    process.exit(1);
  }
  client.setCredentials(JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8")));
  client.on("tokens", (tokens) => {
    const current = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
    writeFileSync(
      OAUTH_TOKEN_PATH,
      JSON.stringify({ ...current, ...tokens }, null, 2),
      "utf8",
    );
  });
  return client;
}

async function deleteInvalidSitemaps() {
  const auth = loadOAuth();
  const searchconsole = google.searchconsole({ version: "v1", auth });

  for (const feedpath of INVALID_SITEMAPS) {
    try {
      await searchconsole.sitemaps.delete({
        siteUrl: SITE_URL,
        feedpath,
      });
      console.log(`✓ Eliminado: ${feedpath}`);
    } catch (error) {
      console.error(
        `✗ ${feedpath}:`,
        error?.response?.data?.error?.message ?? error.message,
      );
    }
  }

  const list = await searchconsole.sitemaps.list({ siteUrl: SITE_URL });
  console.log("\nSitemaps restantes:");
  for (const entry of list.data.sitemap ?? []) {
    console.log(`  ${entry.path} (errors: ${entry.errors ?? 0})`);
  }
}

if (isAuthOnly) {
  await runOAuthFlow();
} else {
  await deleteInvalidSitemaps();
}
