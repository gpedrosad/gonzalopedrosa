#!/usr/bin/env node
/**
 * Alinea final_urls de RSA por grupo de anuncios.
 * final_urls es inmutable en UPDATE — crea anuncio nuevo y pausa el anterior.
 *
 *   npm run google-ads:align-landings
 *   npm run google-ads:align-landings -- --apply
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enums, GoogleAdsApi } from "google-ads-api";

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(/-/g, "");
const LOGIN_CUSTOMER_ID = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.replace(/-/g, "") || undefined;
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client-ads.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json",
);
const isDryRun = !process.argv.includes("--apply");

/** Grupo → landing canónica (www). */
const LANDING_BY_AD_GROUP = {
  "agendar-psicologo-online": "https://www.gonzalopedrosa.cl/ads/agendar-psicologo-online",
  "psicologo-ansiedad-online": "https://www.gonzalopedrosa.cl/ads/psicologo-ansiedad-online",
  "psicologo-ataques-de-panico-online":
    "https://www.gonzalopedrosa.cl/ads/psicologo-ataques-de-panico-online",
  "psicologo-cognitivo-conductual-online":
    "https://www.gonzalopedrosa.cl/ads/psicologo-cognitivo-conductual-online",
  "psicologo-adolescentes-online": "https://www.gonzalopedrosa.cl/ads/adolescentes",
  "terapia-pareja": "https://www.gonzalopedrosa.cl/ads/terapia-pareja",
  compin: "https://www.gonzalopedrosa.cl/ads/compin",
};

const normalizeUrl = (url) => {
  try {
    const u = new URL(url);
    u.hash = "";
    u.search = "";
    return u.toString().replace(/\/$/, "");
  } catch {
    return String(url ?? "").replace(/\/$/, "");
  }
};

const loadCustomer = () => {
  if (!DEVELOPER_TOKEN) throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN");
  if (!existsSync(OAUTH_TOKEN_PATH)) throw new Error("Ejecuta: npm run google-ads:auth");
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: DEVELOPER_TOKEN,
  });
  const options = { customer_id: CUSTOMER_ID, refresh_token: tokens.refresh_token };
  if (LOGIN_CUSTOMER_ID) options.login_customer_id = LOGIN_CUSTOMER_ID;
  return client.Customer(options);
};

const mapHeadline = (h) => {
  const item = { text: h.text };
  if (h.pinned_field != null) item.pinned_field = h.pinned_field;
  return item;
};

const fetchEnabledRsa = async (customer) => {
  const rows = await customer.query(`
    SELECT
      ad_group.name,
      ad_group.resource_name,
      ad_group_ad.resource_name,
      ad_group_ad.status,
      ad_group_ad.ad.final_urls,
      ad_group_ad.ad.responsive_search_ad.headlines,
      ad_group_ad.ad.responsive_search_ad.descriptions,
      ad_group_ad.ad.responsive_search_ad.path1,
      ad_group_ad.ad.responsive_search_ad.path2
    FROM ad_group_ad
    WHERE ad_group_ad.ad.type = 'RESPONSIVE_SEARCH_AD'
      AND ad_group_ad.status = 'ENABLED'
      AND ad_group.status != 'REMOVED'
    ORDER BY ad_group.name
  `);
  return rows ?? [];
};

const buildReplaceOps = (row, targetUrl) => {
  const rsa = row.ad_group_ad.ad.responsive_search_ad;
  const headlines = (rsa?.headlines ?? []).map(mapHeadline);
  const descriptions = (rsa?.descriptions ?? []).map((d) => ({ text: d.text }));
  const responsiveSearchAd = { headlines, descriptions };
  if (rsa?.path1) responsiveSearchAd.path1 = rsa.path1;
  if (rsa?.path2) responsiveSearchAd.path2 = rsa.path2;

  return [
    {
      entity: "ad_group_ad",
      operation: "create",
      resource: {
        ad_group: row.ad_group.resource_name,
        status: enums.AdGroupAdStatus.ENABLED,
        ad: {
          final_urls: [targetUrl],
          responsive_search_ad: responsiveSearchAd,
        },
      },
    },
    {
      entity: "ad_group_ad",
      operation: "update",
      resource: {
        resource_name: row.ad_group_ad.resource_name,
        status: enums.AdGroupAdStatus.PAUSED,
      },
      update_mask: ["status"],
    },
  ];
};

const buildPauseOps = (resourceName) => [
  {
    entity: "ad_group_ad",
    operation: "update",
    resource: {
      resource_name: resourceName,
      status: enums.AdGroupAdStatus.PAUSED,
    },
    update_mask: ["status"],
  },
];

async function main() {
  const customer = loadCustomer();
  const rows = await fetchEnabledRsa(customer);

  /** @type {{ group: string, action: string, from: string, to: string, ops: object[] }[]} */
  const plan = [];

  // Por grupo: si ya hay un ENABLED con URL correcta, solo pausar los ENABLED incorrectos.
  const byGroup = new Map();
  for (const row of rows) {
    const name = row.ad_group?.name ?? "";
    if (!byGroup.has(name)) byGroup.set(name, []);
    byGroup.get(name).push(row);
  }

  for (const [groupName, groupRows] of byGroup) {
    const target = LANDING_BY_AD_GROUP[groupName];
    if (!target) {
      console.log(`⊘ Sin mapping para grupo "${groupName}" — se omite`);
      continue;
    }
    const targetNorm = normalizeUrl(target);
    const correct = groupRows.filter(
      (r) => normalizeUrl(r.ad_group_ad?.ad?.final_urls?.[0] ?? "") === targetNorm,
    );
    const wrong = groupRows.filter(
      (r) => normalizeUrl(r.ad_group_ad?.ad?.final_urls?.[0] ?? "") !== targetNorm,
    );

    if (wrong.length === 0) {
      console.log(`✓ ${groupName} ya apunta a ${target}`);
      continue;
    }

    if (correct.length > 0) {
      for (const row of wrong) {
        const from = row.ad_group_ad.ad.final_urls?.[0] ?? "—";
        plan.push({
          group: groupName,
          action: "pause-wrong",
          from,
          to: target,
          ops: buildPauseOps(row.ad_group_ad.resource_name),
        });
      }
      continue;
    }

    // Un reemplazo: clonar el primer incorrecto → URL correcta, pausar todos los incorrectos.
    const [first, ...rest] = wrong;
    const from = first.ad_group_ad.ad.final_urls?.[0] ?? "—";
    plan.push({
      group: groupName,
      action: "replace",
      from,
      to: target,
      ops: buildReplaceOps(first, target),
    });
    for (const row of rest) {
      plan.push({
        group: groupName,
        action: "pause-extra",
        from: row.ad_group_ad.ad.final_urls?.[0] ?? "—",
        to: target,
        ops: buildPauseOps(row.ad_group_ad.resource_name),
      });
    }
  }

  if (plan.length === 0) {
    console.log("\nNada que cambiar.\n");
    return;
  }

  console.log(`\nPlan (${plan.length} paso(s)) · ${isDryRun ? "DRY-RUN" : "APLICAR"}\n`);
  for (const step of plan) {
    console.log(`- [${step.action}] ${step.group}`);
    console.log(`    ${step.from} → ${step.to}`);
  }

  const operations = plan.flatMap((step) => step.ops);

  if (isDryRun) {
    await customer.mutateResources(operations, { validate_only: true });
    console.log("\nvalidate_only OK. Ejecuta con --apply para aplicar.\n");
    return;
  }

  const result = await customer.mutateResources(operations);
  console.log(`\n✓ ${result?.results?.length ?? operations.length} mutación(es) aplicadas.\n`);
}

main().catch((error) => {
  const message = error?.errors?.[0]?.message ?? error.message ?? String(error);
  console.error(`\nError: ${message}`);
  process.exit(1);
});
