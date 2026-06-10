#!/usr/bin/env node

/**
 * Informe 100% Google Ads (paid).
 * Separa landings /ads/* vs tráfico paid que cae fuera de ads (sitelinks, etc.).
 * No mezcla datos de Search Console.
 */

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
  process.argv[2] ?? `docs/google-ads-informe-ads-${REPORT_DATE}.md`,
);

const ADS_LANDING_INVENTORY = [
  "/ads/psicologo-cognitivo-conductual-online",
  "/ads/psicologo-online",
  "/ads/psicologo-ansiedad-online",
  "/ads/psicologo-ataques-de-panico-online",
  "/ads/agendar-psicologo-online",
  "/ads/terapia-online",
  "/ads/terapia-pareja",
  "/ads/adolescentes",
  "/ads/compin",
];

const allowedDuring = new Set([7, 14, 30, 90, 180, 365]);
const duringDays = allowedDuring.has(DAYS) ? DAYS : 30;
const dateFilter = `segments.date DURING LAST_${duringDays}_DAYS`;

const microsToUnits = (micros) => Number(micros ?? 0) / 1_000_000;

const fmtMoney = (micros, currency = "CLP") => {
  const value = microsToUnits(micros);
  return value.toLocaleString("es-CL", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
};

const fmtNum = (value, decimals = 0) =>
  Number(value ?? 0).toLocaleString("es-CL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

const fmtPct = (value) => `${(Number(value ?? 0) * 100).toFixed(2)}%`;

const DEVICE_LABELS = {
  2: "Móvil",
  3: "Tablet",
  4: "Escritorio",
  5: "TV conectada",
  6: "Otro",
};

const CAMPAIGN_STATUS = {
  2: "Activa",
  3: "Pausada",
  4: "Eliminada",
};

const MATCH_TYPE = {
  2: "EXACT",
  3: "PHRASE",
  4: "BROAD",
};

const labelDevice = (device) => DEVICE_LABELS[device] ?? String(device ?? "-");
const labelStatus = (status) => CAMPAIGN_STATUS[status] ?? String(status ?? "-");
const labelMatch = (match) => MATCH_TYPE[match] ?? String(match ?? "-");

const classifyPaidUrl = (url) => {
  if (!url) return { bucket: "desconocido", path: "-" };
  try {
    const path = new URL(url).pathname;
    if (path.startsWith("/ads/")) return { bucket: "ads", path };
    if (path.startsWith("/sitelink/")) return { bucket: "sitelink", path };
    if (path === "/" || path === "") return { bucket: "home", path: "/" };
    return { bucket: "otro-organico", path };
  } catch {
    return { bucket: "desconocido", path: url };
  }
};

const foldMetrics = (rows, pickMetrics) =>
  rows.reduce(
    (acc, row) => {
      const m = pickMetrics(row);
      acc.clicks += Number(m.clicks ?? 0);
      acc.impressions += Number(m.impressions ?? 0);
      acc.cost_micros += Number(m.cost_micros ?? 0);
      acc.conversions += Number(m.conversions ?? 0);
      return acc;
    },
    { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 },
  );

const cpa = (costMicros, conversions) =>
  conversions > 0 ? microsToUnits(costMicros) / conversions : null;

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
  const options = {
    customer_id: CUSTOMER_ID,
    refresh_token: tokens.refresh_token,
  };
  if (LOGIN_CUSTOMER_ID) options.login_customer_id = LOGIN_CUSTOMER_ID;
  return client.Customer(options);
};

const queryRows = async (customer, gaql) => customer.query(gaql);

const buildMarkdown = (data) => {
  const t = data.totals;
  const ctr = t.impressions > 0 ? t.clicks / t.impressions : 0;
  const cpc = t.clicks > 0 ? microsToUnits(t.cost_micros) / t.clicks : 0;
  const costPerConv = cpa(t.cost_micros, t.conversions);

  const lines = [
    "# Informe Google Ads (solo paid)",
    "",
    "> **Alcance:** únicamente campañas de pago en Google Ads. No incluye orgánico (GSC).",
    "",
    `- Cuenta: \`${data.customerId}\``,
    `- Moneda: **${data.currency}**`,
    `- Periodo: últimos **${duringDays}** días`,
    `- Generado: \`${data.generatedAt}\``,
    `- Conversión trackeada: \`whatsapp_lead\` vía GTM → \`AW-17861931009\``,
    "",
    "## Resumen ejecutivo (paid)",
    "",
    "| Métrica | Valor |",
    "| --- | --- |",
    `| Clics | ${fmtNum(t.clicks)} |`,
    `| Impresiones | ${fmtNum(t.impressions)} |`,
    `| CTR | ${fmtPct(ctr)} |`,
    `| Costo total | ${fmtMoney(t.cost_micros, data.currency)} |`,
    `| CPC medio | ${fmtMoney(cpc * 1_000_000, data.currency)} |`,
    `| Conversiones | ${fmtNum(t.conversions, 1)} |`,
    `| CPA (costo / conversión) | ${costPerConv != null ? fmtMoney(costPerConv * 1_000_000, data.currency) : "n/d"} |`,
    "",
    "## Ads vs no-ads (dentro del tráfico paid)",
    "",
    "Clasificación de **URLs finales** donde aterriza el tráfico de pago:",
    "",
    "| Bucket | Qué es | Clics | Impresiones | Costo | Conversiones | CPA |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...data.landingBuckets.map((bucket) => {
      const c = cpa(bucket.cost_micros, bucket.conversions);
      return `| **${bucket.label}** | ${bucket.description} | ${fmtNum(bucket.clicks)} | ${fmtNum(bucket.impressions)} | ${fmtMoney(bucket.cost_micros, data.currency)} | ${fmtNum(bucket.conversions, 1)} | ${c != null ? fmtMoney(c * 1_000_000, data.currency) : "n/d"} |`;
    }),
    "",
    "### Lectura rápida",
    "",
    ...data.landingInsights.map((item) => `- ${item}`),
    "",
    "## Campañas",
    "",
    "| Campaña | Estado | Clics | Impresiones | CTR | Costo | Conv. | CPA |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ...data.campaigns.map((row) => {
      const m = row.metrics ?? {};
      const c = cpa(m.cost_micros, m.conversions);
      return `| ${row.campaign?.name ?? "-"} | ${labelStatus(row.campaign?.status)} | ${fmtNum(m.clicks)} | ${fmtNum(m.impressions)} | ${fmtPct(m.ctr)} | ${fmtMoney(m.cost_micros, data.currency)} | ${fmtNum(m.conversions, 1)} | ${c != null ? fmtMoney(c * 1_000_000, data.currency) : "n/d"} |`;
    }),
    "",
    "## Grupos de anuncios",
    "",
    "| Campaña | Grupo | Clics | Impresiones | Costo | Conv. |",
    "| --- | --- | --- | --- | --- | --- |",
    ...data.adGroups.map((row) => {
      const m = row.metrics ?? {};
      return `| ${row.campaign?.name ?? "-"} | ${row.ad_group?.name ?? "-"} | ${fmtNum(m.clicks)} | ${fmtNum(m.impressions)} | ${fmtMoney(m.cost_micros, data.currency)} | ${fmtNum(m.conversions, 1)} |`;
    }),
    "",
    "## Palabras clave (puja)",
    "",
    "| Keyword | Match | Clics | Impresiones | Costo | Conv. |",
    "| --- | --- | --- | --- | --- | --- |",
    ...data.keywords.map((row) => {
      const m = row.metrics ?? {};
      const kw = row.ad_group_criterion?.keyword;
      return `| ${kw?.text ?? "-"} | ${labelMatch(kw?.match_type)} | ${fmtNum(m.clicks)} | ${fmtNum(m.impressions)} | ${fmtMoney(m.cost_micros, data.currency)} | ${fmtNum(m.conversions, 1)} |`;
    }),
    "",
    "## Términos de búsqueda reales (search terms)",
    "",
    "| Término | Clics | Impresiones | Costo | Conv. |",
    "| --- | --- | --- | --- | --- |",
    ...data.searchTerms.map((row) => {
      const m = row.metrics ?? {};
      return `| ${row.search_term_view?.search_term ?? "-"} | ${fmtNum(m.clicks)} | ${fmtNum(m.impressions)} | ${fmtMoney(m.cost_micros, data.currency)} | ${fmtNum(m.conversions, 1)} |`;
    }),
    "",
    "## Desperdicio paid (clics sin conversión)",
    "",
    "Términos con **costo > 0** y **0 conversiones** en el periodo:",
    "",
    "| Término | Clics | Costo |",
    "| --- | --- | --- |",
    ...(data.wastedTerms.length > 0
      ? data.wastedTerms.map(
          (row) =>
            `| ${row.term} | ${fmtNum(row.clicks)} | ${fmtMoney(row.cost_micros, data.currency)} |`,
        )
      : ["| - | - | - |"]),
    "",
    "## Landings `/ads/*` (canon paid)",
    "",
    "| URL ads | Clics | Impresiones | Costo | Conv. | CPA | En inventario |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...data.adsLandings.map((row) => {
      const c = cpa(row.cost_micros, row.conversions);
      return `| ${row.url} | ${fmtNum(row.clicks)} | ${fmtNum(row.impressions)} | ${fmtMoney(row.cost_micros, data.currency)} | ${fmtNum(row.conversions, 1)} | ${c != null ? fmtMoney(c * 1_000_000, data.currency) : "n/d"} | ${row.inInventory ? "sí" : "revisar"} |`;
    }),
    "",
    "## Paid fuera de `/ads/*` (fugas / sitelinks)",
    "",
    "| URL | Tipo | Clics | Impresiones | Costo | Conv. |",
    "| --- | --- | --- | --- | --- | --- |",
    ...(data.nonAdsLandings.length > 0
      ? data.nonAdsLandings.map(
          (row) =>
            `| ${row.url} | ${row.bucket} | ${fmtNum(row.clicks)} | ${fmtNum(row.impressions)} | ${fmtMoney(row.cost_micros, data.currency)} | ${fmtNum(row.conversions, 1)} |`,
        )
      : ["| - | - | - | - | - | - |"]),
    "",
    "## Dispositivos (paid)",
    "",
    "| Dispositivo | Clics | Impresiones | Costo | Conv. |",
    "| --- | --- | --- | --- | --- |",
    ...data.devices.map((row) => {
      const m = row.metrics ?? {};
      return `| ${labelDevice(row.segments?.device)} | ${fmtNum(m.clicks)} | ${fmtNum(m.impressions)} | ${fmtMoney(m.cost_micros, data.currency)} | ${fmtNum(m.conversions, 1)} |`;
    }),
    "",
    "## Acciones recomendadas (solo Ads)",
    "",
    ...data.actions.map((item, i) => `${i + 1}. ${item}`),
    "",
    "## Inventario de landings ads en el repo",
    "",
    ...ADS_LANDING_INVENTORY.map((path) => `- \`${path}\``),
    "",
    "## Notas",
    "",
    "- Este informe **no** sustituye al de Search Console; son canales distintos.",
    "- `/ads/*` lleva `noindex` y está pensado solo para paid.",
    "- `/sitelink/*` también es noindex; si recibe mucho paid, revisar extensiones y URLs finales.",
    "- Regenerar: `npm run google-ads:informe`",
    "",
  ];

  return `${lines.join("\n")}\n`;
};

async function main() {
  const customer = getCustomer();

  const [
    currencyRows,
    campaigns,
    adGroups,
    keywords,
    searchTerms,
    landingPages,
    devices,
  ] = await Promise.all([
    queryRows(customer, `SELECT customer.currency_code FROM customer LIMIT 1`),
    queryRows(
      customer,
      `SELECT campaign.name, campaign.status, metrics.clicks, metrics.impressions, metrics.ctr, metrics.cost_micros, metrics.conversions
       FROM campaign
       WHERE ${dateFilter}
       ORDER BY metrics.cost_micros DESC`,
    ),
    queryRows(
      customer,
      `SELECT campaign.name, ad_group.name, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM ad_group
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC
       LIMIT 30`,
    ),
    queryRows(
      customer,
      `SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM keyword_view
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC
       LIMIT 40`,
    ),
    queryRows(
      customer,
      `SELECT search_term_view.search_term, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM search_term_view
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC
       LIMIT 60`,
    ),
    queryRows(
      customer,
      `SELECT landing_page_view.unexpanded_final_url, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM landing_page_view
       WHERE ${dateFilter}
       ORDER BY metrics.impressions DESC
       LIMIT 50`,
    ),
    queryRows(
      customer,
      `SELECT segments.device, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM campaign
       WHERE ${dateFilter}`,
    ),
  ]);

  const currency = currencyRows[0]?.customer?.currency_code ?? "CLP";
  const totals = foldMetrics(campaigns, (row) => row.metrics ?? {});

  const landingByUrl = new Map();
  for (const row of landingPages) {
    const url = row.landing_page_view?.unexpanded_final_url ?? "-";
    const m = row.metrics ?? {};
    const prev = landingByUrl.get(url) ?? {
      url,
      clicks: 0,
      impressions: 0,
      cost_micros: 0,
      conversions: 0,
      ...classifyPaidUrl(url),
    };
    prev.clicks += Number(m.clicks ?? 0);
    prev.impressions += Number(m.impressions ?? 0);
    prev.cost_micros += Number(m.cost_micros ?? 0);
    prev.conversions += Number(m.conversions ?? 0);
    landingByUrl.set(url, prev);
  }

  const allLandings = [...landingByUrl.values()];
  const bucketDefs = {
    ads: { label: "Landings `/ads/*`", description: "URLs de conversión paid (noindex)" },
    sitelink: { label: "Sitelinks `/sitelink/*`", description: "Extensiones / apoyo, no landings money" },
    home: { label: "Home", description: "Paid que cae en la portada" },
    "otro-organico": { label: "Otras URLs", description: "Paid en páginas orgánicas u otras rutas" },
    desconocido: { label: "Desconocido", description: "URL no parseable" },
  };

  const landingBuckets = Object.keys(bucketDefs).map((key) => {
    const rows = allLandings.filter((row) => row.bucket === key);
    const folded = foldMetrics(rows, (r) => r);
    return { key, ...bucketDefs[key], ...folded };
  }).filter((b) => b.impressions > 0 || b.clicks > 0);

  const adsLandings = allLandings
    .filter((row) => row.bucket === "ads")
    .sort((a, b) => b.clicks - a.clicks)
    .map((row) => ({
      ...row,
      inInventory: ADS_LANDING_INVENTORY.some((path) => row.url.includes(path)),
    }));

  const nonAdsLandings = allLandings
    .filter((row) => row.bucket !== "ads")
    .sort((a, b) => b.clicks - a.clicks);

  const wastedTerms = searchTerms
    .map((row) => ({
      term: row.search_term_view?.search_term ?? "-",
      clicks: Number(row.metrics?.clicks ?? 0),
      cost_micros: Number(row.metrics?.cost_micros ?? 0),
      conversions: Number(row.metrics?.conversions ?? 0),
    }))
    .filter((row) => row.cost_micros > 0 && row.conversions === 0)
    .sort((a, b) => b.cost_micros - a.cost_micros)
    .slice(0, 15);

  const landingInsights = [];
  const adsBucket = landingBuckets.find((b) => b.key === "ads");
  const sitelinkBucket = landingBuckets.find((b) => b.key === "sitelink");
  if (adsBucket && sitelinkBucket) {
    const adsShare = totals.clicks > 0 ? (adsBucket.clicks / totals.clicks) * 100 : 0;
    landingInsights.push(
      `**${fmtNum(adsShare, 1)}%** de los clics paid van a landings \`/ads/*\` (${fmtNum(adsBucket.clicks)} de ${fmtNum(totals.clicks)}).`,
    );
    if (sitelinkBucket.clicks > 0) {
      landingInsights.push(
        `Sitelinks captan **${fmtNum(sitelinkBucket.clicks)}** clics paid — revisar si compiten con la landing principal.`,
      );
    }
  }
  const nonWww = allLandings.filter((row) => row.url.includes("://gonzalopedrosa.cl"));
  if (nonWww.length > 0) {
    landingInsights.push(
      `Hay paid aterrizando en **host sin www** (${nonWww.length} URL(s)); unificar a \`www.gonzalopedrosa.cl\`.`,
    );
  }
  if (landingInsights.length === 0) {
    landingInsights.push("Sin alertas fuertes en la distribución de landings paid.");
  }

  const actions = [];
  if (wastedTerms.length > 0) {
    actions.push(
      `Revisar negativas para términos con gasto y 0 conversiones (top: «${wastedTerms[0].term}»).`,
    );
  }
  if (sitelinkBucket && sitelinkBucket.cost_micros > adsBucket?.cost_micros * 0.15) {
    actions.push("Evaluar extensiones de sitelink: mucho gasto fuera de `/ads/*`.");
  }
  if (nonWww.length > 0) {
    actions.push("Forzar URLs finales y sitelinks solo con `https://www.gonzalopedrosa.cl/ads/...`.");
  }
  const topTerm = searchTerms[0]?.search_term_view?.search_term;
  if (topTerm && !topTerm.toLowerCase().includes("chillan")) {
    actions.push(
      "Intención paid es **online genérica**, no local Chillán — alinea copy de anuncios y landing con esa intención.",
    );
  }
  if (actions.length === 0) {
    actions.push("Mantener monitor semanal con `npm run google-ads:informe`.");
  }

  const markdown = buildMarkdown({
    customerId: CUSTOMER_ID,
    currency,
    generatedAt: new Date().toISOString(),
    totals,
    campaigns,
    adGroups,
    keywords,
    searchTerms,
    landingBuckets,
    landingInsights,
    adsLandings,
    nonAdsLandings,
    wastedTerms,
    devices,
    actions,
  });

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, markdown, "utf8");

  console.log(`\n📣 Informe ADS-only — cuenta ${CUSTOMER_ID}`);
  console.log(`Clics paid: ${totals.clicks} | Conversiones: ${totals.conversions}`);
  console.log(`Guardado en ${OUTPUT_PATH}\n`);
}

main().catch((error) => {
  const message = error?.errors?.[0]?.message ?? error.message ?? String(error);
  console.error(`Error: ${message}`);
  process.exit(1);
});
