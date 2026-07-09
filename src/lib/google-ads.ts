import { getCustomer, queryRows } from "./google-ads-client";

import {
  buildLandingOpportunityRank,
  type AdsLandingRankRow,
  type AdsTermRankRow,
} from "./google-ads-landing-rank";

export const ADS_LANDING_INVENTORY = [
  "/ads/psicologo-cognitivo-conductual-online",
  "/ads/psicologo-online",
  "/ads/psicologo-ansiedad-online",
  "/ads/psicologo-ataques-de-panico-online",
  "/ads/agendar-psicologo-online",
  "/ads/terapia-online",
  "/ads/terapia-pareja",
  "/ads/adolescentes",
  "/ads/compin",
] as const;

export type AdsMetrics = {
  clicks: number;
  impressions: number;
  cost_micros: number;
  conversions: number;
  ctr?: number;
};

export type AdsCampaignRow = {
  name: string;
  status: string;
  metrics: AdsMetrics;
  cpa: number | null;
};

export type AdsAdGroupRow = {
  campaignName: string;
  adGroupName: string;
  metrics: AdsMetrics;
};

export type AdsKeywordRow = {
  text: string;
  matchType: string;
  metrics: AdsMetrics;
};

export type AdsSearchTermRow = {
  term: string;
  metrics: AdsMetrics;
};

export type AdsLandingRow = {
  url: string;
  path: string;
  bucket: string;
  bucketLabel: string;
  metrics: AdsMetrics;
  cpa: number | null;
  inInventory?: boolean;
};

export type AdsLandingBucket = {
  key: string;
  label: string;
  description: string;
  metrics: AdsMetrics;
  cpa: number | null;
  clickShare: number;
};

export type AdsDeviceRow = {
  device: string;
  metrics: AdsMetrics;
};

export type AdsNetworkRow = {
  network: string;
  metrics: AdsMetrics;
};

export type AdsDailyRow = {
  date: string;
  clicks: number;
  impressions: number;
  cost_micros: number;
  conversions: number;
};

export type AdsDashboardData = {
  customerId: string;
  currency: string;
  conversionTag: string;
  period: { days: number; label: string; range: string };
  previousPeriod: { days: number; label: string; range: string };
  generatedAt: string;
  summary: AdsMetrics & { ctr: number; cpc: number; cpa: number | null };
  previousSummary: AdsMetrics & { ctr: number; cpc: number; cpa: number | null };
  landingBuckets: AdsLandingBucket[];
  landingInsights: string[];
  campaigns: AdsCampaignRow[];
  adGroups: AdsAdGroupRow[];
  keywords: AdsKeywordRow[];
  searchTerms: AdsSearchTermRow[];
  wastedTerms: Array<{ term: string; clicks: number; cost_micros: number }>;
  adsLandings: AdsLandingRow[];
  nonAdsLandings: AdsLandingRow[];
  devices: AdsDeviceRow[];
  networks: AdsNetworkRow[];
  daily: AdsDailyRow[];
  negatives: { campaignCount: number; adGroupCount: number; uniqueTerms: number };
  proposedNegatives: string[];
  actions: string[];
  landingRank: {
    byLanding: AdsLandingRankRow[];
    topTerms: AdsTermRankRow[];
  };
};

const DEVICE_LABELS: Record<number, string> = {
  2: "Móvil",
  3: "Tablet",
  4: "Escritorio",
  5: "TV conectada",
  6: "Otro",
};

const CAMPAIGN_STATUS: Record<number, string> = {
  2: "Activa",
  3: "Pausada",
  4: "Eliminada",
};

const MATCH_TYPE: Record<number, string> = {
  2: "EXACT",
  3: "PHRASE",
  4: "BROAD",
};

const NETWORK_LABELS: Record<number, string> = {
  2: "Search",
  3: "Search partners",
  4: "Display",
  7: "Mixed",
  8: "YouTube",
};

const BUCKET_DEFS: Record<
  string,
  { label: string; description: string }
> = {
  ads: { label: "Landings /ads/*", description: "URLs de conversión paid (noindex)" },
  sitelink: { label: "Sitelinks /sitelink/*", description: "Extensiones; no son landings money" },
  home: { label: "Home", description: "Paid que cae en la portada" },
  "otro-organico": { label: "Otras URLs", description: "Paid en páginas orgánicas u otras rutas" },
  desconocido: { label: "Desconocido", description: "URL no parseable" },
};

const PROTECTED_TERMS = new Set([
  "psicologo online",
  "psicólogo online",
  "psicologos online",
  "psicólogos online",
  "terapia online",
  "psicologo en linea",
  "psicólogo en linea",
  "psicologo a distancia",
  "terapia a distancia",
]);

const CURATED_SAFE_NEGATIVES = [
  "sexologo",
  "sexólogo",
  "terapia de familia",
  "psicoanalisis",
  "psicoanálisis",
  "emdr",
  "dbt",
  "adicciones",
  "infantil",
  "bariatrico",
  "bariátrico",
  "ia",
  "inteligencia artificial",
  "santiago",
  "mexico",
  "conversemos",
  "injuv",
  "linea libre",
];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();

const microsToUnits = (micros: number) => micros / 1_000_000;

const cpaFrom = (costMicros: number, conversions: number) =>
  conversions > 0 ? microsToUnits(costMicros) / conversions : null;

const labelDevice = (device: number | string | undefined) =>
  DEVICE_LABELS[Number(device)] ?? String(device ?? "-");

const labelStatus = (status: number | string | undefined) =>
  CAMPAIGN_STATUS[Number(status)] ?? String(status ?? "-");

const labelMatch = (match: number | string | undefined) =>
  MATCH_TYPE[Number(match)] ?? String(match ?? "-");

const labelNetwork = (network: number | string | undefined) =>
  NETWORK_LABELS[Number(network)] ?? String(network ?? "-");

const classifyPaidUrl = (url: string) => {
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

const foldMetrics = (
  rows: Array<{ metrics?: Partial<AdsMetrics> }>,
): AdsMetrics =>
  rows.reduce(
    (acc, row) => {
      const m = row.metrics ?? {};
      acc.clicks += Number(m.clicks ?? 0);
      acc.impressions += Number(m.impressions ?? 0);
      acc.cost_micros += Number(m.cost_micros ?? 0);
      acc.conversions += Number(m.conversions ?? 0);
      return acc;
    },
    { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 },
  );

const toSummary = (metrics: AdsMetrics) => ({
  ...metrics,
  ctr: metrics.impressions > 0 ? metrics.clicks / metrics.impressions : 0,
  cpc: metrics.clicks > 0 ? microsToUnits(metrics.cost_micros) / metrics.clicks : 0,
  cpa: cpaFrom(metrics.cost_micros, metrics.conversions),
});

const getDuringDays = () => {
  const days = Number(process.env.GOOGLE_ADS_REPORT_DAYS ?? process.env.ADS_DASHBOARD_DAYS ?? 30);
  return [7, 14, 30, 90].includes(days) ? days : 30;
};

const formatYmd = (date: Date) => {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

/** LAST_N_DAYS para el periodo actual; BETWEEN para el periodo anterior (PREVIOUS_PERIOD no existe en GAQL). */
const getPeriodFilters = (days: number) => {
  const endCurrent = new Date();
  endCurrent.setUTCHours(0, 0, 0, 0);
  endCurrent.setUTCDate(endCurrent.getUTCDate() - 1);

  const startCurrent = new Date(endCurrent);
  startCurrent.setUTCDate(startCurrent.getUTCDate() - (days - 1));

  const endPrevious = new Date(startCurrent);
  endPrevious.setUTCDate(endPrevious.getUTCDate() - 1);

  const startPrevious = new Date(endPrevious);
  startPrevious.setUTCDate(startPrevious.getUTCDate() - (days - 1));

  return {
    currentFilter: `segments.date DURING LAST_${days}_DAYS`,
    previousFilter: `segments.date BETWEEN '${formatYmd(startPrevious)}' AND '${formatYmd(endPrevious)}'`,
    currentLabel: `${formatYmd(startCurrent)} → ${formatYmd(endCurrent)}`,
    previousLabel: `${formatYmd(startPrevious)} → ${formatYmd(endPrevious)}`,
  };
};

const fetchNegativesSummary = async (
  customer: ReturnType<typeof getCustomer>["customer"],
) => {
  const [campaignRows, adGroupRows] = await Promise.all([
    queryRows<{ campaign_criterion?: { keyword?: { text?: string } } }>(
      customer,
      `SELECT campaign_criterion.keyword.text
       FROM campaign_criterion
       WHERE campaign_criterion.type = 'KEYWORD' AND campaign_criterion.negative = TRUE`,
    ),
    queryRows<{ ad_group_criterion?: { keyword?: { text?: string } } }>(
      customer,
      `SELECT ad_group_criterion.keyword.text
       FROM ad_group_criterion
       WHERE ad_group_criterion.type = 'KEYWORD' AND ad_group_criterion.negative = TRUE`,
    ),
  ]);

  const texts = new Set<string>();
  for (const row of campaignRows) {
    const t = row.campaign_criterion?.keyword?.text;
    if (t) texts.add(normalize(t));
  }
  for (const row of adGroupRows) {
    const t = row.ad_group_criterion?.keyword?.text;
    if (t) texts.add(normalize(t));
  }

  return {
    campaignCount: campaignRows.length,
    adGroupCount: adGroupRows.length,
    uniqueTerms: texts.size,
    allTexts: texts,
  };
};

export const getAdsDashboardData = async (): Promise<AdsDashboardData> => {
  const { customer, customerId } = getCustomer();
  const duringDays = getDuringDays();
  const { currentFilter, previousFilter, currentLabel, previousLabel } =
    getPeriodFilters(duringDays);

  type CampaignRow = {
    campaign?: { name?: string; status?: number };
    metrics?: AdsMetrics;
  };
  type AdGroupRow = {
    campaign?: { name?: string };
    ad_group?: { name?: string };
    metrics?: AdsMetrics;
  };
  type KeywordRow = {
    ad_group_criterion?: { keyword?: { text?: string; match_type?: number } };
    metrics?: AdsMetrics;
  };
  type SearchTermRow = {
    search_term_view?: { search_term?: string };
    metrics?: AdsMetrics;
  };
  type LandingRow = {
    landing_page_view?: { unexpanded_final_url?: string };
    metrics?: AdsMetrics;
  };
  type SegmentRow = {
    segments?: { device?: number; ad_network_type?: number; date?: string };
    metrics?: AdsMetrics;
  };

  const [
    currencyRows,
    campaignsCurrent,
    campaignsPrevious,
    adGroups,
    keywords,
    searchTerms,
    landingPages,
    devices,
    networks,
    dailyRows,
    negativesRaw,
  ] = await Promise.all([
    queryRows<{ customer?: { currency_code?: string } }>(
      customer,
      "SELECT customer.currency_code FROM customer LIMIT 1",
    ),
    queryRows<CampaignRow>(
      customer,
      `SELECT campaign.name, campaign.status, metrics.clicks, metrics.impressions, metrics.ctr, metrics.cost_micros, metrics.conversions
       FROM campaign WHERE ${currentFilter} ORDER BY metrics.cost_micros DESC`,
    ),
    queryRows<CampaignRow>(
      customer,
      `SELECT campaign.name, campaign.status, metrics.clicks, metrics.impressions, metrics.ctr, metrics.cost_micros, metrics.conversions
       FROM campaign WHERE ${previousFilter} ORDER BY metrics.cost_micros DESC`,
    ),
    queryRows<AdGroupRow>(
      customer,
      `SELECT campaign.name, ad_group.name, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM ad_group WHERE ${currentFilter} ORDER BY metrics.impressions DESC LIMIT 30`,
    ),
    queryRows<KeywordRow>(
      customer,
      `SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM keyword_view WHERE ${currentFilter} ORDER BY metrics.impressions DESC LIMIT 40`,
    ),
    queryRows<SearchTermRow>(
      customer,
      `SELECT search_term_view.search_term, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM search_term_view WHERE ${currentFilter} ORDER BY metrics.impressions DESC LIMIT 100`,
    ),
    queryRows<LandingRow>(
      customer,
      `SELECT landing_page_view.unexpanded_final_url, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM landing_page_view WHERE ${currentFilter} ORDER BY metrics.impressions DESC LIMIT 50`,
    ),
    queryRows<SegmentRow>(
      customer,
      `SELECT segments.device, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM campaign WHERE ${currentFilter}`,
    ),
    queryRows<SegmentRow>(
      customer,
      `SELECT segments.ad_network_type, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM campaign WHERE ${currentFilter}`,
    ),
    queryRows<SegmentRow>(
      customer,
      `SELECT segments.date, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions
       FROM campaign WHERE ${currentFilter} ORDER BY segments.date ASC`,
    ),
    fetchNegativesSummary(customer),
  ]);

  const currency = currencyRows[0]?.customer?.currency_code ?? "USD";
  const totals = foldMetrics(campaignsCurrent);
  const previousTotals = foldMetrics(campaignsPrevious);
  const summary = toSummary(totals);
  const previousSummary = toSummary(previousTotals);

  const landingByUrl = new Map<string, AdsLandingRow>();
  for (const row of landingPages) {
    const url = row.landing_page_view?.unexpanded_final_url ?? "-";
    const m: Partial<AdsMetrics> = row.metrics ?? {};
    const classified = classifyPaidUrl(url);
    const prev = landingByUrl.get(url) ?? {
      url,
      path: classified.path,
      bucket: classified.bucket,
      bucketLabel: BUCKET_DEFS[classified.bucket]?.label ?? classified.bucket,
      metrics: { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 },
      cpa: null,
    };
    prev.metrics.clicks += Number(m.clicks ?? 0);
    prev.metrics.impressions += Number(m.impressions ?? 0);
    prev.metrics.cost_micros += Number(m.cost_micros ?? 0);
    prev.metrics.conversions += Number(m.conversions ?? 0);
    prev.cpa = cpaFrom(prev.metrics.cost_micros, prev.metrics.conversions);
    landingByUrl.set(url, prev);
  }

  const allLandings = [...landingByUrl.values()];
  const landingBuckets: AdsLandingBucket[] = Object.keys(BUCKET_DEFS)
    .map((key) => {
      const rows = allLandings.filter((row) => row.bucket === key);
      const metrics = foldMetrics(rows.map((r) => ({ metrics: r.metrics })));
      return {
        key,
        label: BUCKET_DEFS[key].label,
        description: BUCKET_DEFS[key].description,
        metrics,
        cpa: cpaFrom(metrics.cost_micros, metrics.conversions),
        clickShare: totals.clicks > 0 ? (metrics.clicks / totals.clicks) * 100 : 0,
      };
    })
    .filter((b) => b.metrics.impressions > 0 || b.metrics.clicks > 0);

  const adsLandings = allLandings
    .filter((row) => row.bucket === "ads")
    .sort((a, b) => b.metrics.clicks - a.metrics.clicks)
    .map((row) => ({
      ...row,
      inInventory: ADS_LANDING_INVENTORY.some((path) => row.url.includes(path)),
    }));

  const nonAdsLandings = allLandings
    .filter((row) => row.bucket !== "ads")
    .sort((a, b) => b.metrics.clicks - a.metrics.clicks);

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

  const landingInsights: string[] = [];
  const adsBucket = landingBuckets.find((b) => b.key === "ads");
  const sitelinkBucket = landingBuckets.find((b) => b.key === "sitelink");
  if (adsBucket) {
    landingInsights.push(
      `${adsBucket.clickShare.toFixed(1)}% de los clics paid van a landings /ads/* (${adsBucket.metrics.clicks} de ${totals.clicks}).`,
    );
  }
  if (sitelinkBucket && sitelinkBucket.metrics.clicks > 0) {
    landingInsights.push(
      `Sitelinks captan ${sitelinkBucket.metrics.clicks} clics paid — revisar si compiten con la landing principal.`,
    );
  }
  const nonWww = allLandings.filter((row) => row.url.includes("://gonzalopedrosa.cl"));
  if (nonWww.length > 0) {
    landingInsights.push(
      `Hay paid aterrizando en host sin www (${nonWww.length} URL(s)); unificar a www.gonzalopedrosa.cl.`,
    );
  }
  if (landingInsights.length === 0) {
    landingInsights.push("Sin alertas fuertes en la distribución de landings paid.");
  }

  const fromWaste = wastedTerms
    .map((row) => row.term)
    .filter((term) => {
      const n = normalize(term);
      if (!n || PROTECTED_TERMS.has(n) || negativesRaw.allTexts.has(n)) return false;
      return true;
    });

  const curated = CURATED_SAFE_NEGATIVES.filter((term) => !negativesRaw.allTexts.has(normalize(term)));
  const proposedNegatives = [...new Set([...fromWaste, ...curated])].slice(0, 25);

  const actions: string[] = [];
  if (wastedTerms.length > 0) {
    actions.push(
      `Revisar negativas para términos con gasto y 0 conversiones (top: «${wastedTerms[0].term}»).`,
    );
  }
  if (sitelinkBucket && adsBucket && sitelinkBucket.metrics.cost_micros > adsBucket.metrics.cost_micros * 0.15) {
    actions.push("Evaluar extensiones de sitelink: mucho gasto fuera de /ads/*.");
  }
  if (nonWww.length > 0) {
    actions.push("Forzar URLs finales y sitelinks solo con https://www.gonzalopedrosa.cl/ads/...");
  }
  const topTerm = searchTerms[0]?.search_term_view?.search_term;
  if (topTerm && !topTerm.toLowerCase().includes("chillan")) {
    actions.push(
      "Intención paid es online genérica, no local Chillán — alinea copy de anuncios y landing con esa intención.",
    );
  }
  if (proposedNegatives.length > 0) {
    actions.push(
      `${proposedNegatives.length} negativas sugeridas listas — usa npm run google-ads:negatives -- propose.`,
    );
  }
  if (actions.length === 0) {
    actions.push("Mantener monitor semanal con npm run google-ads:informe.");
  }

  const deviceMap = new Map<string, AdsMetrics>();
  for (const row of devices) {
    const key = labelDevice(row.segments?.device);
    const prev = deviceMap.get(key) ?? { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 };
    const m: Partial<AdsMetrics> = row.metrics ?? {};
    prev.clicks += Number(m.clicks ?? 0);
    prev.impressions += Number(m.impressions ?? 0);
    prev.cost_micros += Number(m.cost_micros ?? 0);
    prev.conversions += Number(m.conversions ?? 0);
    deviceMap.set(key, prev);
  }

  const networkMap = new Map<string, AdsMetrics>();
  for (const row of networks) {
    const key = labelNetwork(row.segments?.ad_network_type);
    const prev = networkMap.get(key) ?? { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 };
    const m: Partial<AdsMetrics> = row.metrics ?? {};
    prev.clicks += Number(m.clicks ?? 0);
    prev.impressions += Number(m.impressions ?? 0);
    prev.cost_micros += Number(m.cost_micros ?? 0);
    prev.conversions += Number(m.conversions ?? 0);
    networkMap.set(key, prev);
  }

  const dailyMap = new Map<string, AdsDailyRow>();
  for (const row of dailyRows) {
    const date = row.segments?.date ?? "-";
    const prev = dailyMap.get(date) ?? {
      date,
      clicks: 0,
      impressions: 0,
      cost_micros: 0,
      conversions: 0,
    };
    const m: Partial<AdsMetrics> = row.metrics ?? {};
    prev.clicks += Number(m.clicks ?? 0);
    prev.impressions += Number(m.impressions ?? 0);
    prev.cost_micros += Number(m.cost_micros ?? 0);
    prev.conversions += Number(m.conversions ?? 0);
    dailyMap.set(date, prev);
  }

  const keywordsMapped = keywords.map((row) => {
    const m: Partial<AdsMetrics> = row.metrics ?? {};
    const kw = row.ad_group_criterion?.keyword;
    return {
      text: kw?.text ?? "-",
      matchType: labelMatch(kw?.match_type),
      metrics: {
        clicks: Number(m.clicks ?? 0),
        impressions: Number(m.impressions ?? 0),
        cost_micros: Number(m.cost_micros ?? 0),
        conversions: Number(m.conversions ?? 0),
      },
    };
  });

  const searchTermsMapped = searchTerms.map((row) => {
    const m: Partial<AdsMetrics> = row.metrics ?? {};
    return {
      term: row.search_term_view?.search_term ?? "-",
      metrics: {
        clicks: Number(m.clicks ?? 0),
        impressions: Number(m.impressions ?? 0),
        cost_micros: Number(m.cost_micros ?? 0),
        conversions: Number(m.conversions ?? 0),
      },
    };
  });

  const landingRank = buildLandingOpportunityRank({
    keywords: keywordsMapped,
    searchTerms: searchTermsMapped,
    adsLandings,
  });

  return {
    customerId,
    currency,
    conversionTag: "whatsapp_lead · AW-17861931009",
    period: {
      days: duringDays,
      label: `Últimos ${duringDays} días`,
      range: currentLabel,
    },
    previousPeriod: {
      days: duringDays,
      label: `Periodo anterior (${duringDays} días)`,
      range: previousLabel,
    },
    generatedAt: new Date().toISOString(),
    summary,
    previousSummary,
    landingBuckets,
    landingInsights,
    campaigns: campaignsCurrent.map((row) => {
      const m = row.metrics ?? { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 };
      return {
        name: row.campaign?.name ?? "-",
        status: labelStatus(row.campaign?.status),
        metrics: {
          clicks: Number(m.clicks ?? 0),
          impressions: Number(m.impressions ?? 0),
          cost_micros: Number(m.cost_micros ?? 0),
          conversions: Number(m.conversions ?? 0),
          ctr: Number(m.ctr ?? 0),
        },
        cpa: cpaFrom(Number(m.cost_micros ?? 0), Number(m.conversions ?? 0)),
      };
    }),
    adGroups: adGroups.map((row) => {
      const m: Partial<AdsMetrics> = row.metrics ?? {};
      return {
        campaignName: row.campaign?.name ?? "-",
        adGroupName: row.ad_group?.name ?? "-",
        metrics: {
          clicks: Number(m.clicks ?? 0),
          impressions: Number(m.impressions ?? 0),
          cost_micros: Number(m.cost_micros ?? 0),
          conversions: Number(m.conversions ?? 0),
        },
      };
    }),
    keywords: keywordsMapped,
    searchTerms: searchTermsMapped,
    wastedTerms,
    adsLandings,
    nonAdsLandings,
    devices: [...deviceMap.entries()].map(([device, metrics]) => ({ device, metrics })),
    networks: [...networkMap.entries()].map(([network, metrics]) => ({ network, metrics })),
    daily: [...dailyMap.values()],
    negatives: {
      campaignCount: negativesRaw.campaignCount,
      adGroupCount: negativesRaw.adGroupCount,
      uniqueTerms: negativesRaw.uniqueTerms,
    },
    proposedNegatives,
    actions,
    landingRank,
  };
};
