#!/usr/bin/env node
/**
 * Quita Argentina de adicción al juego, pasa geo a Chile PRESENCE
 * y agrega negativas de hotline/JA (solo esa campaña).
 *
 *   node --env-file=.env.local scripts/google-ads-juego-chile-presence.mjs
 *   node --env-file=.env.local scripts/google-ads-juego-chile-presence.mjs --apply
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
const isApply = process.argv.includes("--apply");

const CAMPAIGN_ID = "24172229213";
const ARGENTINA_CRITERION = `customers/${CUSTOMER_ID}/campaignCriteria/${CAMPAIGN_ID}~2032`;
const CAMPAIGN_RN = `customers/${CUSTOMER_ID}/campaigns/${CAMPAIGN_ID}`;

const NEGATIVES = [
  "anonimos",
  "numero de ayuda",
  "numero de telefono",
  "dejar solo",
  "linea de ayuda",
  "telefono de ayuda",
  "lineas de ayuda",
  "senda",
  "12 pasos",
  "juego responsable",
  "autoexclusion",
  "residencial",
];

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

const normalize = (text) => text.trim().toLowerCase();

async function main() {
  const customer = loadCustomer();

  const [existingRows, locationRows, campaignRows] = await Promise.all([
    customer.query(`
      SELECT campaign_criterion.keyword.text
      FROM campaign_criterion
      WHERE campaign.id = ${CAMPAIGN_ID}
        AND campaign_criterion.type = 'KEYWORD'
        AND campaign_criterion.negative = TRUE
    `),
    customer.query(`
      SELECT campaign_criterion.resource_name, campaign_criterion.criterion_id
      FROM campaign_criterion
      WHERE campaign.id = ${CAMPAIGN_ID}
        AND campaign_criterion.type = 'LOCATION'
    `),
    customer.query(`
      SELECT campaign.geo_target_type_setting.positive_geo_target_type
      FROM campaign
      WHERE campaign.id = ${CAMPAIGN_ID}
    `),
  ]);

  const existing = new Set(
    (existingRows ?? [])
      .map((row) => normalize(row.campaign_criterion?.keyword?.text ?? ""))
      .filter(Boolean),
  );
  const toAdd = NEGATIVES.filter((term) => !existing.has(normalize(term)));
  const hasArgentina = (locationRows ?? []).some(
    (row) => String(row.campaign_criterion?.criterion_id) === "2032",
  );
  const geoType = campaignRows?.[0]?.campaign?.geo_target_type_setting?.positive_geo_target_type;
  const needsPresence =
    geoType !== enums.PositiveGeoTargetType.PRESENCE && geoType !== "PRESENCE";

  const ops = [
    ...(hasArgentina
      ? [
          {
            entity: "campaign_criterion",
            operation: "remove",
            resource: ARGENTINA_CRITERION,
          },
        ]
      : []),
    ...(needsPresence
      ? [
          {
            entity: "campaign",
            operation: "update",
            resource: {
              resource_name: CAMPAIGN_RN,
              geo_target_type_setting: {
                positive_geo_target_type: enums.PositiveGeoTargetType.PRESENCE,
              },
            },
          },
        ]
      : []),
    ...toAdd.map((text) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: CAMPAIGN_RN,
        negative: true,
        keyword: {
          text,
          match_type: enums.KeywordMatchType.BROAD,
        },
      },
    })),
  ];

  if (ops.length === 0) {
    console.log("Nada que cambiar: Chile PRESENCE y negativas ya están.");
    return;
  }

  console.log(`Campaña: adiccion-al-juego-online (${CAMPAIGN_ID})`);
  console.log(`Quitar geo: Argentina (${ARGENTINA_CRITERION})`);
  console.log("Geo type: PRESENCE (solo Chile físico)");
  console.log(`Negativas nuevas BROAD: ${toAdd.length ? toAdd.join(", ") : "(ninguna, ya existían)"}`);
  console.log(`Ops: ${ops.length} · ${isApply ? "APLICAR" : "DRY-RUN (validate_only)"}`);

  const result = await customer.mutateResources(ops, isApply ? undefined : { validate_only: true });
  console.log(isApply ? "\nAplicado." : "\nValidate_only OK. Corre con --apply para escribir.");
  if (isApply && result?.results) {
    console.log(`Resultados: ${result.results.length}`);
  }
}

main().catch((err) => {
  console.error(err?.message || err);
  if (err?.errors) console.error(JSON.stringify(err.errors, null, 2));
  process.exit(1);
});
