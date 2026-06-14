#!/usr/bin/env node
/**
 * Elimina sitemaps erróneos enviados manualmente a GSC.
 * Requiere scope de escritura: ejecutar `npm run gsc:cleanup:auth` una vez.
 */
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
const SCOPES = ["https://www.googleapis.com/auth/webmasters"];

const INVALID_SITEMAPS = [
  "https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan",
];

function loadOAuth() {
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const config = raw.installed ?? raw.web ?? raw;
  const client = new google.auth.OAuth2(
    config.client_id,
    config.client_secret,
    "http://127.0.0.1:53683/oauth2callback",
  );
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

const auth = loadOAuth();
const searchconsole = google.searchconsole({ version: "v1", auth });

for (const feedpath of INVALID_SITEMAPS) {
  try {
    await searchconsole.sitemaps.delete({
      siteUrl: SITE_URL,
      feedpath: encodeURIComponent(feedpath),
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
