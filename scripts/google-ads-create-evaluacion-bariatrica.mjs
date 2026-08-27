#!/usr/bin/env node
/**
 * Crea campaña Search PAUSADA para evaluación bariátrica + grupo + RSA + keywords.
 *
 *   npm run google-ads:create-evaluacion-bariatrica
 *   npm run google-ads:create-evaluacion-bariatrica -- --apply
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

const CAMPAIGN_NAME = "evaluacion-bariatrica-online";
const AD_GROUP_NAME = "evaluacion-bariatrica";
const FINAL_URL = "https://www.gonzalopedrosa.cl/ads/evaluacion-bariatrica";
const DAILY_BUDGET_MICROS = 1_000_000;
const AD_GROUP_BID_MICROS = 10_000;
const GEO_CHILE = "geoTargetConstants/2152";
const LANG_ES = "languageConstants/1003";

// RSA = src/app/ads/evaluacion-bariatrica/CAMPAIGN.md (fuente de verdad)
const HEADLINES = [
  { text: "Pack bariátrico $180.000", pinned_field: enums.ServedAssetFieldType?.HEADLINE_1 ?? 1 },
  { text: "Psicólogo bariátrico" },
  { text: "Informe para cirugía" },
  { text: "Boleta Fonasa e Isapre" },
  { text: "2 sesiones + informe" },
  { text: "Agenda hoy por WhatsApp" },
  { text: "No es un pase express" },
  { text: "Evaluación confidencial" },
  { text: "Online en todo Chile" },
  { text: "Ps. Gonzalo Pedrosa" },
  { text: "Informe PDF firmado" },
  { text: "Evaluación bariátrica" },
  { text: "Aptitud para cirugía" },
  { text: "2 sesiones de 50 min" },
  { text: "Escríbeme y coordinamos" },
];

const DESCRIPTIONS = [
  { text: "Pack $180.000: 2 sesiones de 50 min + informe PDF firmado + boleta. Online Chile." },
  { text: "Evaluación de aptitud. No es un pase express ni garantiza que te aprueben la cirugía." },
  { text: "Psicólogo clínico. Informe firmado para tu equipo quirúrgico. Agenda por WhatsApp." },
  { text: "Online en todo Chile. Confidencial. 2 sesiones de 50 min, informe PDF y boleta." },
];

const KEYWORDS = [
  { text: "evaluacion psicologica bariatrica", match: "EXACT" },
  { text: "psicologo bariatrico", match: "EXACT" },
  { text: "informe psicologico bariatrica", match: "EXACT" },
  { text: "psicologo para cirugia bariatrica", match: "EXACT" },
  { text: "evaluacion bariatrica online", match: "EXACT" },
  { text: "evaluacion psicologica bariatrica", match: "PHRASE" },
  { text: "psicologo bariatrico", match: "PHRASE" },
  { text: "informe psicologico bariatrica", match: "PHRASE" },
  { text: "informe para cirugia bariatrica", match: "PHRASE" },
  { text: "evaluacion para manga gastrica", match: "PHRASE" },
  { text: "evaluacion psicologica manga gastrica", match: "PHRASE" },
  { text: "informe psicologico bypass", match: "PHRASE" },
  { text: "psicologo cirugia bariatrica", match: "PHRASE" },
  { text: "certificado psicologico bariatrica", match: "PHRASE" },
];

const EXTRA_NEGATIVES = [
  "cirujano",
  "operarme",
  "precio bypass",
  "precio manga",
  "costo manga",
  "costo operacion",
  "hospital",
  "pabellon",
  "infantil",
  "pediatrico",
  "ninos",
  "gratis",
  "gratuito",
  "ia",
  "inteligencia artificial",
  "betterhelp",
  "unobravo",
  "sexologo",
  "emdr",
  "dbt",
  "psicoanalisis",
  "plantilla",
  "ejemplo",
  "curso",
  "vacante",
  "24/7",
  "fonasa",
];

const MATCH_ENUM = {
  EXACT: enums.KeywordMatchType.EXACT,
  PHRASE: enums.KeywordMatchType.PHRASE,
  BROAD: enums.KeywordMatchType.BROAD,
};

const assertAdLimits = () => {
  for (const h of HEADLINES) {
    if (h.text.length > 30) throw new Error(`Headline >30: "${h.text}" (${h.text.length})`);
  }
  for (const d of DESCRIPTIONS) {
    if (d.text.length > 90) throw new Error(`Description >90: "${d.text}" (${d.text.length})`);
  }
  if (HEADLINES.length < 3 || HEADLINES.length > 15) throw new Error("RSA: 3–15 headlines");
  if (DESCRIPTIONS.length < 2 || DESCRIPTIONS.length > 4) throw new Error("RSA: 2–4 descriptions");
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

const alreadyExists = async (customer) => {
  const rows = await customer.query(`
    SELECT campaign.id, campaign.name, campaign.status
    FROM campaign
    WHERE campaign.name = '${CAMPAIGN_NAME}' AND campaign.status != 'REMOVED'
  `);
  return rows?.[0]?.campaign ?? null;
};

const buildNegatives = () =>
  EXTRA_NEGATIVES.map((text) => ({
    text,
    matchType: enums.KeywordMatchType.BROAD,
  }));

const buildOps = (negatives) => {
  const budgetRn = `customers/${CUSTOMER_ID}/campaignBudgets/-1`;
  const campaignRn = `customers/${CUSTOMER_ID}/campaigns/-2`;
  const adGroupRn = `customers/${CUSTOMER_ID}/adGroups/-3`;

  const campaignResource = {
    resource_name: campaignRn,
    name: CAMPAIGN_NAME,
    status: enums.CampaignStatus.PAUSED,
    advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
    campaign_budget: budgetRn,
    maximize_conversions: {},
    network_settings: {
      target_google_search: true,
      target_search_network: false,
      target_content_network: false,
    },
    geo_target_type_setting: {
      // Solo personas que están físicamente en Chile; no "presencia o interés".
      positive_geo_target_type: enums.PositiveGeoTargetType.PRESENCE,
    },
  };

  if (enums.EuPoliticalAdvertisingStatus?.DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING) {
    campaignResource.contains_eu_political_advertising =
      enums.EuPoliticalAdvertisingStatus.DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING;
  }

  const ops = [
    {
      entity: "campaign_budget",
      operation: "create",
      resource: {
        resource_name: budgetRn,
        name: `${CAMPAIGN_NAME} #${Date.now()}`,
        amount_micros: DAILY_BUDGET_MICROS,
        delivery_method: enums.BudgetDeliveryMethod.STANDARD,
        explicitly_shared: false,
      },
    },
    {
      entity: "campaign",
      operation: "create",
      resource: campaignResource,
    },
    {
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignRn,
        language: { language_constant: LANG_ES },
      },
    },
    {
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignRn,
        location: { geo_target_constant: GEO_CHILE },
      },
    },
    {
      entity: "ad_group",
      operation: "create",
      resource: {
        resource_name: adGroupRn,
        campaign: campaignRn,
        name: AD_GROUP_NAME,
        status: enums.AdGroupStatus.PAUSED,
        type: enums.AdGroupType.SEARCH_STANDARD,
        cpc_bid_micros: AD_GROUP_BID_MICROS,
      },
    },
    {
      entity: "ad_group_ad",
      operation: "create",
      resource: {
        ad_group: adGroupRn,
        status: enums.AdGroupAdStatus.ENABLED,
        ad: {
          final_urls: [FINAL_URL],
          responsive_search_ad: {
            headlines: HEADLINES,
            descriptions: DESCRIPTIONS,
            path1: "evaluacion",
            path2: "bariatrica",
          },
        },
      },
    },
    ...KEYWORDS.map((kw) => ({
      entity: "ad_group_criterion",
      operation: "create",
      resource: {
        ad_group: adGroupRn,
        status: enums.AdGroupCriterionStatus.ENABLED,
        keyword: {
          text: kw.text,
          match_type: MATCH_ENUM[kw.match],
        },
      },
      exempt_policy_violation_keys: [
        {
          policy_name: "HEALTH_IN_PERSONALIZED_ADS",
          violating_text: kw.text,
        },
      ],
    })),
    ...negatives.map((neg) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignRn,
        negative: true,
        keyword: {
          text: neg.text,
          match_type: neg.matchType,
        },
      },
    })),
  ];

  return ops;
};

async function main() {
  assertAdLimits();
  const customer = loadCustomer();

  const existing = await alreadyExists(customer);
  if (existing) {
    console.log(`Ya existe: ${existing.name} (${existing.id}) status=${existing.status}`);
    process.exit(0);
  }

  // Esta campaña no hereda negativas de TCC: varias chocan con la intención
  // bariátrica y además inflarían innecesariamente el lote de operaciones.
  const negatives = buildNegatives();
  const ops = buildOps(negatives);

  console.log(`Campaña: ${CAMPAIGN_NAME} · PAUSED · budget US$1/día`);
  console.log(`Grupo: ${AD_GROUP_NAME} · PAUSED`);
  console.log(`Landing: ${FINAL_URL}`);
  console.log(`Headlines: ${HEADLINES.length} · descriptions: ${DESCRIPTIONS.length}`);
  console.log(
    `Keywords: ${KEYWORDS.length} · negativas propias: ${negatives.length}`,
  );
  console.log(`Ops: ${ops.length} · ${isApply ? "APLICAR" : "DRY-RUN (validate_only)"}`);
  console.log("\nHeadlines:");
  HEADLINES.forEach((h) => console.log(`  [${h.text.length}] ${h.text}`));
  console.log("\nDescriptions:");
  DESCRIPTIONS.forEach((d) => console.log(`  [${d.text.length}] ${d.text}`));
  console.log("\nKeywords:");
  KEYWORDS.forEach((k) => console.log(`  ${k.match} · ${k.text}`));

  const result = await customer.mutateResources(ops, isApply ? undefined : { validate_only: true });
  console.log(isApply ? "\nCreada (campaña y grupo PAUSED)." : "\nValidate_only OK. Corre con --apply para crear.");
  if (isApply && result) {
    console.log(JSON.stringify(result, null, 2).slice(0, 2000));
  }
}

main().catch((err) => {
  console.error(err?.message || err);
  if (err?.errors) console.error(JSON.stringify(err.errors, null, 2));
  process.exit(1);
});
