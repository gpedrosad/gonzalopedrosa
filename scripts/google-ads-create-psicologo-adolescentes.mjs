#!/usr/bin/env node
/**
 * Crea campaña Search PAUSADA para terapia adolescentes + grupo + RSA + keywords.
 *
 *   npm run google-ads:create-psicologo-adolescentes
 *   npm run google-ads:create-psicologo-adolescentes -- --apply
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enums, GoogleAdsApi } from "google-ads-api";

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(
  /-/g,
  "",
);
const LOGIN_CUSTOMER_ID =
  process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.replace(/-/g, "") || undefined;
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

const CAMPAIGN_NAME = "psicologo-adolescentes-online";
const AD_GROUP_NAME = "psicologo-adolescentes";
const FINAL_URL = "https://www.gonzalopedrosa.cl/ads/adolescentes";
const DAILY_BUDGET_MICROS = 1_000_000;
const AD_GROUP_BID_MICROS = 10_000;
const GEO_CHILE = "geoTargetConstants/2152";
const LANG_ES = "languageConstants/1003";

const HEADLINES = [
  { text: "Sesión $35.000", pinned_field: enums.ServedAssetFieldType?.HEADLINE_3 ?? 3 },
  { text: "Ps. Gonzalo Pedrosa" },
  { text: "Agenda por WhatsApp Hoy" },
  { text: "Sesiones Online 50 Min" },
  { text: "Psicólogo Online Adolescentes" },
  { text: "Terapia Online Adolescentes" },
  { text: "Psicólogo Ansiedad Online" },
  { text: "Terapia Ansiedad Adolescentes" },
  { text: "Empezar terapia online" },
  { text: "Psicólogo para Adolescentes" },
  { text: "Psicólogo Juvenil Online" },
  { text: "Terapia Psicológica Online" },
  { text: "Terapia Juvenil videollamada" },
  { text: "Ansiedad Adolescentes Terapia" },
  { text: "Sesión Psicólogo Online" },
];

const DESCRIPTIONS = [
  { text: "Terapia online para adolescentes con ansiedad, depresión o cambios de conducta" },
  { text: "Psicólogo online para adolescentes. Atención a ansiedad, pánico, depresión" },
  { text: "Sesiones online para adolescentes. Evaluación, plan y seguimiento por videollamada" },
  { text: "Ayuda profesional para adolescentes con ansiedad, depresión o problemas escolares" },
];

const KEYWORDS = [
  { text: "terapia emocional adolescentes", match: "PHRASE" },
  { text: "psicologo adolescentes", match: "PHRASE" },
  { text: "psicologo juvenil online", match: "PHRASE" },
  { text: "psicologo para adolescentes online", match: "PHRASE" },
  { text: "psicologo adolescentes online", match: "EXACT" },
  { text: "psicologo para adolescentes online", match: "EXACT" },
  { text: "psicologo para jovenes online", match: "EXACT" },
  { text: "terapia adolescente online", match: "EXACT" },
  { text: "terapia para adolescentes online", match: "EXACT" },
  { text: "psicologo ansiedad adolescente", match: "EXACT" },
  { text: "ansiedad adolescente psicologo", match: "EXACT" },
  { text: "psicologo depresion adolescente", match: "EXACT" },
  { text: "depresion adolescente psicologo", match: "EXACT" },
  { text: "psicologo panico adolescente", match: "EXACT" },
  { text: "psicologo ataques de panico adolescente", match: "EXACT" },
  { text: "psicologo conducta adolescente", match: "EXACT" },
  { text: "bullying adolescente psicologo", match: "EXACT" },
];

const EXTRA_NEGATIVES = [
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
  "24/7",
  "infantil",
  "pediatrico",
  "ninos",
  "os10",
  "control de impulsos",
  "guardia",
  "bariatrica",
  "bariatrico",
  "adiccion",
  "ludopatia",
  "apuestas",
  "pareja",
  "cambio de nombre",
  "cambio de apellido",
  "compin",
  "peritaje",
  "hablemos de todo",
  "ana galan",
];

const MATCH_ENUM = {
  EXACT: enums.KeywordMatchType.EXACT,
  PHRASE: enums.KeywordMatchType.PHRASE,
  BROAD: enums.KeywordMatchType.BROAD,
};

const WEEKDAYS = [
  enums.DayOfWeek.MONDAY,
  enums.DayOfWeek.TUESDAY,
  enums.DayOfWeek.WEDNESDAY,
  enums.DayOfWeek.THURSDAY,
  enums.DayOfWeek.FRIDAY,
];

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

const buildOps = () => {
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
      positive_geo_target_type: enums.PositiveGeoTargetType.PRESENCE,
    },
  };

  if (enums.EuPoliticalAdvertisingStatus?.DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING) {
    campaignResource.contains_eu_political_advertising =
      enums.EuPoliticalAdvertisingStatus.DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING;
  }

  return [
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
    ...WEEKDAYS.map((day) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignRn,
        ad_schedule: {
          day_of_week: day,
          start_hour: 0,
          start_minute: enums.MinuteOfHour.ZERO,
          end_hour: 24,
          end_minute: enums.MinuteOfHour.ZERO,
        },
      },
    })),
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
            path1: "adolescentes",
            path2: "terapia",
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
    ...EXTRA_NEGATIVES.map((text) => ({
      entity: "campaign_criterion",
      operation: "create",
      resource: {
        campaign: campaignRn,
        negative: true,
        keyword: {
          text,
          match_type: enums.KeywordMatchType.BROAD,
        },
      },
    })),
  ];
};

async function main() {
  assertAdLimits();
  const customer = loadCustomer();

  const existing = await alreadyExists(customer);
  if (existing) {
    console.log(`Ya existe: ${existing.name} (${existing.id}) status=${existing.status}`);
    process.exit(0);
  }

  const ops = buildOps();

  console.log(`Campaña: ${CAMPAIGN_NAME} · PAUSED · budget US$1/día · Chile PRESENCE · lun–vie`);
  console.log(`Grupo: ${AD_GROUP_NAME} · PAUSED`);
  console.log(`Landing: ${FINAL_URL}`);
  console.log(`Headlines: ${HEADLINES.length} · descriptions: ${DESCRIPTIONS.length}`);
  console.log(`Keywords: ${KEYWORDS.length} · negativas: ${EXTRA_NEGATIVES.length}`);
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
    console.log(JSON.stringify(result, null, 2).slice(0, 2500));
  }
}

main().catch((err) => {
  console.error(err?.message || err);
  if (err?.errors) console.error(JSON.stringify(err.errors, null, 2));
  process.exit(1);
});
