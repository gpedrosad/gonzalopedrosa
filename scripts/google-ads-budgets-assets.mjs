#!/usr/bin/env node
/**
 * Ajuste 16 oct: presupuestos + pausa cambio de nombre + assets (callouts,
 * fragmentos estructurados y precio) en las 4 campañas Search activas.
 * Bariátrica pasa a $50.000 (evaluación + informe): RSA nueva ENABLED y la de
 * $75.000 PAUSED (el texto del RSA no se edita: create + pause).
 *
 *   npm run google-ads:budgets-assets             # validate_only
 *   npm run google-ads:budgets-assets -- --apply
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

const SITE = "https://www.gonzalopedrosa.cl";

const BUDGETS = [
  { campaign: "adiccion-al-juego-online", budgetId: "15818396121", usd: 2 },
  { campaign: "evaluacion-bariatrica-online", budgetId: "15813275039", usd: 1 },
  { campaign: "psicologo-adolescentes-online", budgetId: "15927332141", usd: 1 },
];

const PAUSE_CAMPAIGNS = [
  { id: "24298829243", name: "informe-cambio-nombre-apellido-online" },
];

const PRICE_ITEMS = {
  juego: {
    header: "Terapia ludopatía",
    description: "Sesión online 50 min",
    clp: 35000,
    url: `${SITE}/ads/adiccion-al-juego`,
  },
  adolescentes: {
    header: "Terapia adolescentes",
    description: "Sesión online 50 min",
    clp: 35000,
    url: `${SITE}/ads/adolescentes`,
  },
  os10: {
    header: "Informe OS10",
    description: "Evaluación + informe PDF",
    clp: 40000,
    url: `${SITE}/ads/informe-psicologico-os10`,
  },
  bariatrica: {
    header: "Evaluación bariátrica",
    description: "Evaluación + informe",
    clp: 50000,
    url: `${SITE}/ads/evaluacion-bariatrica`,
  },
};

const COMMON_CALLOUTS = [
  "Online en todo Chile",
  "Respuesta por WhatsApp",
  "Psicólogo registrado",
  "Boleta electrónica",
];

// Precio propio primero; el resto completa el mínimo de 3 ítems.
const CAMPAIGNS = [
  {
    id: "24172229213",
    name: "adiccion-al-juego-online",
    callouts: [...COMMON_CALLOUTS, "100% confidencial", "Terapia TCC"],
    snippet: [
      "Ludopatía",
      "Apuestas online",
      "Casino",
      "Manejo de impulsos",
      "Prevención de recaídas",
    ],
    price: ["juego", "adolescentes", "os10", "bariatrica"],
  },
  {
    id: "24172472867",
    name: "evaluacion-bariatrica-online",
    callouts: [...COMMON_CALLOUTS, "Certificado el mismo día", "Boleta Fonasa e Isapre"],
    snippet: [
      "Evaluación prequirúrgica",
      "Certificado psicológico",
      "Manga gástrica",
      "Cirugía bariátrica",
    ],
    price: ["bariatrica", "os10", "juego", "adolescentes"],
  },
  {
    id: "24291587680",
    name: "informe-psicologico-os10-online",
    callouts: [...COMMON_CALLOUTS, "PDF el mismo día", "Horarios de turno"],
    snippet: [
      "Control de impulsos",
      "Guardias de seguridad",
      "Operador CCTV",
      "Informe en PDF",
    ],
    price: ["os10", "bariatrica", "juego", "adolescentes"],
  },
  {
    id: "24334063436",
    name: "psicologo-adolescentes-online",
    callouts: [...COMMON_CALLOUTS, "Desde 14 años", "Sesiones de 50 min"],
    snippet: [
      "Ansiedad",
      "Depresión",
      "Ataques de pánico",
      "Problemas escolares",
      "Cambios de conducta",
    ],
    price: ["adolescentes", "juego", "os10", "bariatrica"],
  },
];

const SNIPPET_HEADER = "Servicios";

const BARIATRIC_AD_GROUP = "199819157735";
const BARIATRIC_OLD_PRICE = "$75.000";
const BARIATRIC_NEW_PRICE = "$50.000";
const BARIATRIC_PRICE_HEADLINE = "Evaluación + informe $50.000";

const loadConfig = () => {
  if (!DEVELOPER_TOKEN) throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN en .env.local");
  if (!existsSync(OAUTH_TOKEN_PATH)) throw new Error("Ejecuta: npm run google-ads:auth");
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  if (!tokens.refresh_token) throw new Error("Token sin refresh_token");
  return { oauth, tokens };
};

const getCustomer = () => {
  const { oauth, tokens } = loadConfig();
  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: DEVELOPER_TOKEN,
  });
  const options = { customer_id: CUSTOMER_ID, refresh_token: tokens.refresh_token };
  if (LOGIN_CUSTOMER_ID) options.login_customer_id = LOGIN_CUSTOMER_ID;
  return client.Customer(options);
};

const checkLengths = () => {
  const errors = [];
  for (const c of CAMPAIGNS) {
    c.callouts.forEach((t) => t.length > 25 && errors.push(`callout >25: ${t}`));
    c.snippet.forEach((t) => t.length > 25 && errors.push(`snippet >25: ${t}`));
    if (c.snippet.length < 3) errors.push(`snippet <3 valores: ${c.name}`);
  }
  for (const p of Object.values(PRICE_ITEMS)) {
    if (p.header.length > 25) errors.push(`precio header >25: ${p.header}`);
    if (p.description.length > 25) errors.push(`precio desc >25: ${p.description}`);
  }
  if (errors.length) throw new Error(errors.join("\n"));
};

// Evita duplicar si ya hay assets de estos tipos en las campañas.
const existingAssetLinks = async (customer) => {
  const ids = CAMPAIGNS.map((c) => c.id).join(",");
  const rows = await customer.query(`
    SELECT campaign.id, campaign.status, campaign_asset.field_type
    FROM campaign_asset
    WHERE campaign.id IN (${ids})
      AND campaign_asset.status = 'ENABLED'
      AND campaign_asset.field_type IN ('CALLOUT', 'STRUCTURED_SNIPPET', 'PRICE')
  `);
  return rows.map(
    (r) => `${r.campaign.id} ${enums.AssetFieldType[r.campaign_asset.field_type]}`,
  );
};

// RSA vigente de bariátrica con $75.000 → copia con $50.000 + pausa de la vieja.
const bariatricAdOps = async (customer) => {
  const rows = await customer.query(`
    SELECT ad_group_ad.resource_name, ad_group_ad.ad.final_urls,
      ad_group_ad.ad.responsive_search_ad.headlines,
      ad_group_ad.ad.responsive_search_ad.descriptions,
      ad_group_ad.ad.responsive_search_ad.path1,
      ad_group_ad.ad.responsive_search_ad.path2
    FROM ad_group_ad
    WHERE ad_group.id = ${BARIATRIC_AD_GROUP} AND ad_group_ad.status = 'ENABLED'
  `);
  const old = rows.find((r) =>
    JSON.stringify(r.ad_group_ad.ad.responsive_search_ad).includes(BARIATRIC_OLD_PRICE),
  );
  if (!old) return { ops: [], preview: null };

  const rsa = old.ad_group_ad.ad.responsive_search_ad;
  const swap = (t) => t.replaceAll(BARIATRIC_OLD_PRICE, BARIATRIC_NEW_PRICE);
  const asset = ({ text, pinned_field }) => {
    const out = { text };
    if (pinned_field) out.pinned_field = pinned_field;
    return out;
  };
  const headlines = rsa.headlines.map((h) =>
    asset({
      ...h,
      text: h.text.includes(BARIATRIC_OLD_PRICE) ? BARIATRIC_PRICE_HEADLINE : swap(h.text),
    }),
  );
  const descriptions = rsa.descriptions.map((d) => asset({ ...d, text: swap(d.text) }));
  const tooLong = [
    ...headlines.filter((h) => h.text.length > 30),
    ...descriptions.filter((d) => d.text.length > 90),
  ];
  if (tooLong.length) throw new Error(`RSA bariátrica muy largo: ${tooLong.map((t) => t.text)}`);

  const newRsa = { headlines, descriptions };
  if (rsa.path1) newRsa.path1 = rsa.path1;
  if (rsa.path2) newRsa.path2 = rsa.path2;

  return {
    preview: { old: old.ad_group_ad.resource_name, headlines, descriptions },
    ops: [
      {
        entity: "ad_group_ad",
        operation: "create",
        resource: {
          ad_group: `customers/${CUSTOMER_ID}/adGroups/${BARIATRIC_AD_GROUP}`,
          status: enums.AdGroupAdStatus.ENABLED,
          ad: {
            final_urls: old.ad_group_ad.ad.final_urls,
            responsive_search_ad: newRsa,
          },
        },
      },
      {
        entity: "ad_group_ad",
        operation: "update",
        resource: {
          resource_name: old.ad_group_ad.resource_name,
          status: enums.AdGroupAdStatus.PAUSED,
        },
      },
    ],
  };
};

const buildOps = () => {
  const ops = [];
  let tempId = -1;
  const assetRn = () => `customers/${CUSTOMER_ID}/assets/${tempId--}`;

  for (const b of BUDGETS) {
    ops.push({
      entity: "campaign_budget",
      operation: "update",
      resource: {
        resource_name: `customers/${CUSTOMER_ID}/campaignBudgets/${b.budgetId}`,
        amount_micros: b.usd * 1_000_000,
      },
    });
  }

  for (const c of PAUSE_CAMPAIGNS) {
    ops.push({
      entity: "campaign",
      operation: "update",
      resource: {
        resource_name: `customers/${CUSTOMER_ID}/campaigns/${c.id}`,
        status: enums.CampaignStatus.PAUSED,
      },
    });
  }

  const link = (campaignId, asset, fieldType) => ({
    entity: "campaign_asset",
    operation: "create",
    resource: {
      campaign: `customers/${CUSTOMER_ID}/campaigns/${campaignId}`,
      asset,
      field_type: fieldType,
    },
  });

  for (const c of CAMPAIGNS) {
    for (const text of c.callouts) {
      const rn = assetRn();
      ops.push({
        entity: "asset",
        operation: "create",
        resource: { resource_name: rn, callout_asset: { callout_text: text } },
      });
      ops.push(link(c.id, rn, enums.AssetFieldType.CALLOUT));
    }

    const snippetRn = assetRn();
    ops.push({
      entity: "asset",
      operation: "create",
      resource: {
        resource_name: snippetRn,
        structured_snippet_asset: { header: SNIPPET_HEADER, values: c.snippet },
      },
    });
    ops.push(link(c.id, snippetRn, enums.AssetFieldType.STRUCTURED_SNIPPET));

    const priceRn = assetRn();
    ops.push({
      entity: "asset",
      operation: "create",
      resource: {
        resource_name: priceRn,
        price_asset: {
          type: enums.PriceExtensionType.SERVICES,
          language_code: "es",
          price_offerings: c.price.map((key) => {
            const p = PRICE_ITEMS[key];
            return {
              header: p.header,
              description: p.description,
              price: { amount_micros: p.clp * 1_000_000, currency_code: "CLP" },
              final_url: p.url,
            };
          }),
        },
      },
    });
    ops.push(link(c.id, priceRn, enums.AssetFieldType.PRICE));
  }

  return ops;
};

async function main() {
  checkLengths();
  const customer = getCustomer();

  const existing = await existingAssetLinks(customer);
  if (existing.length) {
    console.log("Ya hay assets de estos tipos (no duplico):");
    existing.forEach((e) => console.log(`  ${e}`));
    process.exit(1);
  }

  const bariatric = await bariatricAdOps(customer);
  const ops = [...buildOps(), ...bariatric.ops];

  console.log("Presupuestos:");
  BUDGETS.forEach((b) => console.log(`  ${b.campaign} → US$${b.usd}/día`));
  console.log("Pausar:");
  PAUSE_CAMPAIGNS.forEach((c) => console.log(`  ${c.name} (${c.id})`));
  for (const c of CAMPAIGNS) {
    console.log(`\n${c.name}`);
    console.log(`  Callouts: ${c.callouts.map((t) => `${t} [${t.length}]`).join(" · ")}`);
    console.log(`  ${SNIPPET_HEADER}: ${c.snippet.join(" · ")}`);
    console.log(
      `  Precio: ${c.price
        .map((k) => `${PRICE_ITEMS[k].header} $${PRICE_ITEMS[k].clp.toLocaleString("es-CL")}`)
        .join(" · ")}`,
    );
  }
  if (bariatric.preview) {
    console.log(`\nRSA bariátrica ${BARIATRIC_NEW_PRICE} (ENABLED) · pausa ${bariatric.preview.old}`);
    bariatric.preview.headlines.forEach((h) =>
      console.log(`  H [${h.text.length}]${h.pinned_field ? " PIN" : ""} ${h.text}`),
    );
    bariatric.preview.descriptions.forEach((d) => console.log(`  D [${d.text.length}] ${d.text}`));
  } else {
    console.log(`\nRSA bariátrica: sin anuncio ENABLED con ${BARIATRIC_OLD_PRICE} (nada que cambiar)`);
  }
  console.log(`\nOps: ${ops.length} · ${isApply ? "APLICAR" : "DRY-RUN (validate_only)"}`);

  const result = await customer.mutateResources(ops, isApply ? undefined : { validate_only: true });
  console.log(isApply ? "\nAplicado." : "\nValidate_only OK. Corre con --apply para aplicar.");
  if (isApply && result) {
    console.log(JSON.stringify(result, null, 2).slice(0, 2500));
  }
}

main().catch((err) => {
  console.error(err?.message || err);
  if (err?.errors) console.error(JSON.stringify(err.errors, null, 2));
  process.exit(1);
});
