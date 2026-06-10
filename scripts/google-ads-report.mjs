#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { GoogleAdsApi } from "google-ads-api";

const DAYS = Number(process.env.GOOGLE_ADS_REPORT_DAYS ?? 30);
const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(/-/g, "");
const LOGIN_CUSTOMER_ID = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.replace(/-/g, "") || undefined;
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
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

const REPORT_DATE = new Date().toISOString().slice(0, 10);
const OUTPUT_PATH = resolve(
  process.cwd(),
  process.argv[2] ?? `docs/google-ads-informe-${REPORT_DATE}.md`,
);

const microsToCurrency = (micros) => {
  const value = Number(micros ?? 0) / 1_000_000;
  return value.toLocaleString("es-CL", { maximumFractionDigits: 0 });
};

const loadConfig = () => {
  if (!DEVELOPER_TOKEN) {
    throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN en .env.local");
  }
  if (!existsSync(OAUTH_TOKEN_PATH)) {
    throw new Error("No hay token OAuth. Ejecuta: npm run google-ads:auth");
  }
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  if (!tokens.refresh_token) {
    throw new Error("Token sin refresh_token. Ejecuta de nuevo: npm run google-ads:auth");
  }
  return { oauth, tokens };
};

const getCustomer = () => {
  const { oauth, tokens } = loadConfig();
  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: DEVELOPER_TOKEN,
  });

  const options = {
    customer_id: CUSTOMER_ID,
    refresh_token: tokens.refresh_token,
  };
  if (LOGIN_CUSTOMER_ID) {
    options.login_customer_id = LOGIN_CUSTOMER_ID;
  }

  return client.Customer(options);
};

const queryRows = async (customer, gaql) => {
  const rows = await customer.query(gaql);
  return rows ?? [];
};

const buildMarkdown = (data) => {
  const lines = [
    "# Informe Google Ads",
    "",
    `- Cuenta: \`${data.customerId}\``,
    `- Login customer (MCC): \`${data.loginCustomerId ?? "no configurado"}\``,
    `- Periodo: últimos ${DAYS} días`,
    `- Generado: \`${data.generatedAt}\``,
    "",
    "## Resumen de campañas",
    "",
    "| Campaña | Clics | Impresiones | Costo (CLP aprox.) | Conversiones |",
    "| --- | --- | --- | --- | --- |",
    ...data.campaigns.map((row) => {
      const m = row.metrics ?? {};
      return `| ${row.campaign?.name ?? "-"} | ${m.clicks ?? 0} | ${m.impressions ?? 0} | ${microsToCurrency(m.cost_micros)} | ${m.conversions ?? 0} |`;
    }),
    "",
    "## Términos de búsqueda (top)",
    "",
    "| Término | Clics | Impresiones | Costo | Conversiones |",
    "| --- | --- | --- | --- | --- |",
    ...data.searchTerms.map((row) => {
      const m = row.metrics ?? {};
      return `| ${row.search_term_view?.search_term ?? "-"} | ${m.clicks ?? 0} | ${m.impressions ?? 0} | ${microsToCurrency(m.cost_micros)} | ${m.conversions ?? 0} |`;
    }),
    "",
    "## Landing pages",
    "",
    "| URL | Clics | Impresiones | Costo | Conversiones |",
    "| --- | --- | --- | --- | --- |",
    ...data.landingPages.map((row) => {
      const m = row.metrics ?? {};
      return `| ${row.landing_page_view?.unexpanded_final_url ?? "-"} | ${m.clicks ?? 0} | ${m.impressions ?? 0} | ${microsToCurrency(m.cost_micros)} | ${m.conversions ?? 0} |`;
    }),
    "",
    "## Notas",
    "",
    "- Costos desde `cost_micros` de la API (moneda de la cuenta).",
    "- Si falla con error de permisos MCC, configura `GOOGLE_ADS_LOGIN_CUSTOMER_ID` en `.env.local`.",
    "- Ejecuta `npm run google-ads:list-accounts` para ver IDs accesibles.",
    "",
  ];
  return `${lines.join("\n")}\n`;
};

async function main() {
  const customer = getCustomer();
  const allowedDuring = new Set([7, 14, 30, 90, 180, 365]);
  const duringDays = allowedDuring.has(DAYS) ? DAYS : 30;
  const dateFilter = `segments.date DURING LAST_${duringDays}_DAYS`;

  const [campaigns, searchTerms, landingPages] = await Promise.all([
    queryRows(
      customer,
      `SELECT campaign.name, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM campaign
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC`,
    ),
    queryRows(
      customer,
      `SELECT search_term_view.search_term, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM search_term_view
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC
       LIMIT 50`,
    ),
    queryRows(
      customer,
      `SELECT landing_page_view.unexpanded_final_url, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM landing_page_view
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC
       LIMIT 30`,
    ),
  ]);

  const markdown = buildMarkdown({
    customerId: CUSTOMER_ID,
    loginCustomerId: LOGIN_CUSTOMER_ID,
    generatedAt: new Date().toISOString(),
    campaigns,
    searchTerms,
    landingPages,
  });

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, markdown, "utf8");

  console.log(`\n📊 Google Ads — cuenta ${CUSTOMER_ID}`);
  console.log(`Campañas: ${campaigns.length} | Search terms: ${searchTerms.length}`);
  console.log(`Informe guardado en ${OUTPUT_PATH}\n`);
}

main().catch((error) => {
  const message = error?.errors?.[0]?.message ?? error.message ?? String(error);
  console.error(`Error: ${message}`);
  if (!LOGIN_CUSTOMER_ID) {
    console.error(
      "Sugerencia: ejecuta npm run google-ads:list-accounts y define GOOGLE_ADS_LOGIN_CUSTOMER_ID (MCC).",
    );
  }
  process.exit(1);
});
