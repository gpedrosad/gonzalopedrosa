#!/usr/bin/env node
/**
 * Crea campaña Search para evaluación psicolaboral (empresas) + grupo + RSA +
 * keywords + negativas + assets (callouts, snippet, precio). US$2/día, lun–vie.
 * Por defecto PAUSED; con --enabled se crea activa (desplegar la landing antes).
 *
 *   npm run google-ads:create-evaluacion-psicolaboral
 *   npm run google-ads:create-evaluacion-psicolaboral -- --apply
 *   npm run google-ads:create-evaluacion-psicolaboral -- --apply --enabled
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
const isEnabled = process.argv.includes("--enabled");

const CAMPAIGN_NAME = "evaluacion-psicolaboral-online";
const AD_GROUP_NAME = "evaluacion-psicolaboral";
const FINAL_URL = "https://www.gonzalopedrosa.cl/ads/evaluacion-psicolaboral";
const DAILY_BUDGET_MICROS = 2_000_000;
const AD_GROUP_BID_MICROS = 10_000;
const GEO_CHILE = "geoTargetConstants/2152";
const LANG_ES = "languageConstants/1003";

const HEADLINES = [
  { text: "Evaluación Psicolaboral Online", pinned_field: enums.ServedAssetFieldType?.HEADLINE_1 ?? 2 },
  { text: "Desde $45.000 por Candidato" },
  { text: "Informe en 48 Horas Hábiles" },
  { text: "Evaluaciones Psicolaborales" },
  { text: "Entrevista por Competencias" },
  { text: "Pruebas Psicométricas Online" },
  { text: "Para Empresas y Pymes" },
  { text: "Todo Chile por Videollamada" },
  { text: "Informe con Recomendación" },
  { text: "Cotiza por WhatsApp" },
  { text: "Psicólogo Registrado" },
  { text: "Ps. Gonzalo Pedrosa" },
  { text: "Sin Contrato ni Mínimo" },
  { text: "Selección de Personal" },
  { text: "Boleta Electrónica" },
];

const DESCRIPTIONS = [
  { text: "Entrevista por competencias, pruebas psicométricas e informe PDF en 48 horas hábiles." },
  { text: "Desde $45.000 por candidato. Operativos, profesionales y jefaturas. Todo Chile online." },
  { text: "Informe con recomendación clara para decidir la contratación. Cotiza por WhatsApp." },
  { text: "Psicólogo registrado en la Superintendencia de Salud. Boleta electrónica. Sin contrato." },
];

const KEYWORDS = [
  { text: "evaluacion psicolaboral online", match: "PHRASE" },
  { text: "evaluaciones psicolaborales empresas", match: "PHRASE" },
  { text: "evaluacion psicolaboral para empresas", match: "PHRASE" },
  { text: "evaluacion psicolaboral precio", match: "PHRASE" },
  { text: "evaluacion psicolaboral valor", match: "PHRASE" },
  { text: "servicio evaluacion psicolaboral", match: "PHRASE" },
  { text: "empresa evaluaciones psicolaborales", match: "PHRASE" },
  { text: "consultora evaluaciones psicolaborales", match: "PHRASE" },
  { text: "psicologo evaluacion psicolaboral", match: "PHRASE" },
  { text: "evaluacion psicolaboral online", match: "EXACT" },
  { text: "evaluaciones psicolaborales", match: "EXACT" },
  { text: "evaluaciones psicolaborales online", match: "EXACT" },
  { text: "informe psicolaboral", match: "EXACT" },
  { text: "evaluacion psicolaboral candidatos", match: "EXACT" },
];

// Filtra postulantes que preparan su propia evaluación y otros servicios de la cuenta.
const EXTRA_NEGATIVES = [
  "que es",
  "como es",
  "como aprobar",
  "aprobar",
  "reprobe",
  "reprobé",
  "preguntas",
  "que preguntan",
  "respuestas",
  "ejemplo",
  "ejemplos",
  "pdf",
  "tips",
  "consejos",
  "preparar",
  "preparacion",
  "gratis",
  "gratuito",
  "trabajo",
  "empleo",
  "ofertas",
  "sueldo",
  "practica",
  "curso",
  "diplomado",
  "magister",
  "resultado",
  "resultados",
  "cuanto dura",
  "duracion",
  "dibujo",
  "wartegg",
  "zulliger",
  "rorschach",
  "persona bajo la lluvia",
  "os10",
  "guardia",
  "seguridad privada",
  "porte de armas",
  "licencia de conducir",
  "bariatrica",
  "cambio de nombre",
  "ludopatia",
];

const CALLOUTS = [
  "Informe en 48 h hábiles",
  "Todo Chile online",
  "Psicólogo registrado",
  "Sin contrato ni mínimo",
  "Boleta electrónica",
  "Precio por volumen",
];

const SNIPPET = {
  header: "Servicios",
  values: [
    "Entrevista competencias",
    "Pruebas psicométricas",
    "Informe con recomendación",
    "Cargos operativos",
    "Jefaturas",
  ],
};

const PRICE_ITEMS = [
  { header: "Operativo/administrativo", description: "Por candidato", clp: 45000 },
  { header: "Técnico/profesional", description: "Por candidato", clp: 60000 },
  { header: "Jefatura/supervisión", description: "Por candidato", clp: 85000 },
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
  for (const c of CALLOUTS) if (c.length > 25) throw new Error(`Callout >25: "${c}"`);
  for (const v of SNIPPET.values) if (v.length > 25) throw new Error(`Snippet >25: "${v}"`);
  for (const p of PRICE_ITEMS) {
    if (p.header.length > 25) throw new Error(`Precio header >25: "${p.header}"`);
    if (p.description.length > 25) throw new Error(`Precio desc >25: "${p.description}"`);
  }
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

const assetOps = (campaignRn) => {
  const ops = [];
  let tempId = -10;
  const link = (asset, fieldType) => ({
    entity: "campaign_asset",
    operation: "create",
    resource: { campaign: campaignRn, asset, field_type: fieldType },
  });
  for (const text of CALLOUTS) {
    const rn = `customers/${CUSTOMER_ID}/assets/${tempId--}`;
    ops.push({ entity: "asset", operation: "create", resource: { resource_name: rn, callout_asset: { callout_text: text } } });
    ops.push(link(rn, enums.AssetFieldType.CALLOUT));
  }
  const snippetRn = `customers/${CUSTOMER_ID}/assets/${tempId--}`;
  ops.push({ entity: "asset", operation: "create", resource: { resource_name: snippetRn, structured_snippet_asset: SNIPPET } });
  ops.push(link(snippetRn, enums.AssetFieldType.STRUCTURED_SNIPPET));
  const priceRn = `customers/${CUSTOMER_ID}/assets/${tempId--}`;
  ops.push({
    entity: "asset",
    operation: "create",
    resource: {
      resource_name: priceRn,
      price_asset: {
        type: enums.PriceExtensionType.SERVICES,
        price_qualifier: enums.PriceExtensionPriceQualifier.FROM,
        language_code: "es",
        price_offerings: PRICE_ITEMS.map((p) => ({
          header: p.header,
          description: p.description,
          price: { amount_micros: p.clp * 1_000_000, currency_code: "CLP" },
          final_url: `${FINAL_URL}#precio`,
        })),
      },
    },
  });
  ops.push(link(priceRn, enums.AssetFieldType.PRICE));
  return ops;
};

const buildOps = () => {
  const budgetRn = `customers/${CUSTOMER_ID}/campaignBudgets/-1`;
  const campaignRn = `customers/${CUSTOMER_ID}/campaigns/-2`;
  const adGroupRn = `customers/${CUSTOMER_ID}/adGroups/-3`;

  const campaignResource = {
    resource_name: campaignRn,
    name: CAMPAIGN_NAME,
    status: isEnabled ? enums.CampaignStatus.ENABLED : enums.CampaignStatus.PAUSED,
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
        status: isEnabled ? enums.AdGroupStatus.ENABLED : enums.AdGroupStatus.PAUSED,
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
            path1: "psicolaboral",
            path2: "empresas",
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
    ...assetOps(campaignRn),
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

  const estado = isEnabled ? "ENABLED" : "PAUSED";
  console.log(`Campaña: ${CAMPAIGN_NAME} · ${estado} · budget US$${DAILY_BUDGET_MICROS / 1e6}/día · Chile PRESENCE · lun–vie`);
  console.log(`Grupo: ${AD_GROUP_NAME} · ${estado}`);
  console.log(`Assets: ${CALLOUTS.length} callouts · snippet ${SNIPPET.header} · precio ${PRICE_ITEMS.length} ítems`);
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
  console.log(`\nNegativas (${EXTRA_NEGATIVES.length}): ${EXTRA_NEGATIVES.join(", ")}`);

  const result = await customer.mutateResources(ops, isApply ? undefined : { validate_only: true });
  console.log(isApply ? `\nCreada (campaña y grupo ${estado}).` : "\nValidate_only OK. Corre con --apply para crear.");
  if (isApply && result) {
    console.log(JSON.stringify(result, null, 2).slice(0, 2500));
  }
}

main().catch((err) => {
  console.error(err?.message || err);
  if (err?.errors) console.error(JSON.stringify(err.errors, null, 2));
  process.exit(1);
});
