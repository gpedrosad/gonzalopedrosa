import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { google, type searchconsole_v1 } from "googleapis";

import type {
  ActionPlanItem,
  BrandedSplit,
  GscTrendingBundle,
  LowCtrOpportunity,
  TrendItem,
} from "./gsc-analysis";
import {
  analyzeLowCtrPages,
  computeTrending,
  detectBrandedQueries,
  generateActionPlan,
  resolveBrandTerms,
} from "./gsc-analysis";

const SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"];
const GSC_API_TIMEOUT_MS = Number(process.env.GSC_API_TIMEOUT_MS ?? 15000);
const GSC_OPTIONAL_TIMEOUT_MS = Number(process.env.GSC_OPTIONAL_TIMEOUT_MS ?? 8000);

export type GscSearchAnalyticsRow = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};
export type GscTrendComparison = {
  key: string;
  currentClicks: number;
  previousClicks: number;
  currentImpressions: number;
  previousImpressions: number;
  deltaClicks: number;
  deltaImpressions: number;
  currentCtr: number;
  previousCtr: number;
  currentPosition: number;
  previousPosition: number;
};

export type GscSitemapContentEntry = {
  type?: string | null;
  submitted?: string | null;
  indexed?: string | null;
};

export type GscSitemapDashboardEntry = {
  path?: string | null;
  lastSubmitted?: string | null;
  lastDownloaded?: string | null;
  warnings?: string | number | null;
  errors?: string | number | null;
  isPending?: boolean | null;
  isSitemapsIndex?: boolean | null;
  type?: string | null;
  contents?: GscSitemapContentEntry[];
};

/** Alias usado por el panel de detalle de sitemaps. */
export type GscSitemapEntry = GscSitemapDashboardEntry;

export type GscUrlInspectionDashboardItem = {
  inspectionUrl: string;
  error?: string;
  indexVerdict?: string | null;
  coverageState?: string | null;
  indexingState?: string | null;
  googleCanonical?: string | null;
  userCanonical?: string | null;
  pageFetchState?: string | null;
  inspectionResultLink?: string | null;
};

export type GscBrandedBuckets = {
  branded: {
    clicks: number;
    impressions: number;
    ctr: number;
    matchedQueryRows: number;
  };
  nonBranded: {
    clicks: number;
    impressions: number;
    ctr: number;
    matchedQueryRows: number;
  };
};

export type GscDashboardInsights = {
  trendingUpQueries: TrendItem[];
  trendingDownQueries: TrendItem[];
  trendingUpPages: TrendItem[];
  trendingDownPages: TrendItem[];
};

export type GscDashboardData = {
  siteUrl: string;
  period: { start: string; end: string; days: number };
  previousPeriod: { start: string; end: string };
  generatedAt: string;
  sites: Array<{ siteUrl: string; permissionLevel?: string | null }>;
  summary: {
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  };
  previousSummary: {
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
  };
  daily: GscSearchAnalyticsRow[];
  queries: GscSearchAnalyticsRow[];
  pages: GscSearchAnalyticsRow[];
  devices: GscSearchAnalyticsRow[];
  countries: GscSearchAnalyticsRow[];
  searchAppearance: GscSearchAnalyticsRow[];
  queryPageCombosTop25: GscSearchAnalyticsRow[];
  trendingUpQueries: GscTrendComparison[];
  trendingDownQueries: GscTrendComparison[];
  trendingUpPages: GscTrendComparison[];
  trendingDownPages: GscTrendComparison[];
  /** Panel Insights (subset clics Δ). */
  insights: GscDashboardInsights;
  /** Tendencias simples intersectadas período anterior (uso en planes). */
  trending: GscTrendingBundle;
  lowCtrOpportunities: LowCtrOpportunity[];
  brandedSplit: BrandedSplit;
  brandedVsNonBranded: GscBrandedBuckets;
  /** Términos efectivos tras host + opcional CSV GSC_BRAND_TERMS */
  appliedBrandTerms: string[];
  sitemaps: GscSitemapDashboardEntry[];
  urlInspectionSamples: GscUrlInspectionDashboardItem[];
  /** Plan priorizado (gsc-analysis): CTR, www, sitemaps, tendencias, marca/no marca */
  actionPlan: ActionPlanItem[];
};

export type { ActionPlanItem, LowCtrOpportunity } from "./gsc-analysis";

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, label: string): Promise<T> {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    return promise;
  }

  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`${label} excedió ${timeoutMs}ms.`));
      }, timeoutMs);
    }),
  ]);
}

async function bestEffort<T>(
  promise: Promise<T>,
  fallback: T,
  timeoutMs: number,
  label: string,
): Promise<T> {
  try {
    return await withTimeout(promise, timeoutMs, label);
  } catch {
    return fallback;
  }
}

const loadJson = (envVar: string, filePath: string) => {
  const fromEnv = process.env[envVar];
  if (fromEnv) {
    return JSON.parse(fromEnv) as Record<string, unknown>;
  }

  const absolutePath = resolve(process.cwd(), filePath);
  if (!existsSync(absolutePath)) {
    throw new Error(
      `No se encontró ${envVar} ni el archivo ${absolutePath}. Ejecuta npm run gsc:auth.`,
    );
  }

  return JSON.parse(readFileSync(absolutePath, "utf8")) as Record<string, unknown>;
};

const getOAuthClient = () => {
  const raw = loadJson(
    "GOOGLE_OAUTH_CLIENT_JSON",
    process.env.GOOGLE_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client.json",
  );
  const config = (raw.installed ?? raw.web ?? raw) as {
    client_id: string;
    client_secret: string;
  };

  if (!config.client_id || !config.client_secret) {
    throw new Error("Cliente OAuth inválido: falta client_id o client_secret.");
  }

  const oauth2Client = new google.auth.OAuth2(config.client_id, config.client_secret);
  const token = loadJson(
    "GSC_OAUTH_TOKEN_JSON",
    process.env.GSC_OAUTH_TOKEN_PATH ?? ".secrets/gsc-oauth-token.json",
  );
  oauth2Client.setCredentials(token);
  return oauth2Client;
};

export const getSearchConsoleClient = () => {
  const authMode = process.env.GSC_AUTH_MODE ?? "oauth";

  if (authMode === "service_account") {
    const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!credentialsPath) {
      throw new Error("Falta GOOGLE_APPLICATION_CREDENTIALS.");
    }
    process.env.GOOGLE_APPLICATION_CREDENTIALS = resolve(process.cwd(), credentialsPath);
    const auth = new google.auth.GoogleAuth({ scopes: SCOPES });
    return google.searchconsole({ version: "v1", auth });
  }

  return google.searchconsole({ version: "v1", auth: getOAuthClient() });
};

const mapRows = (
  rows: searchconsole_v1.Schema$ApiDataRow[] | undefined,
): GscSearchAnalyticsRow[] =>
  (rows ?? []).map((row) => ({
    keys: row.keys ?? [],
    clicks: row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    ctr: row.ctr ?? 0,
    position: row.position ?? 0,
  }));

const aggregate = (rows: GscSearchAnalyticsRow[]) => {
  if (rows.length === 0) {
    return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  }

  const clicks = rows.reduce((sum, row) => sum + row.clicks, 0);
  const impressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const ctr = impressions > 0 ? clicks / impressions : 0;
  const position =
    rows.reduce((sum, row) => sum + row.position * row.impressions, 0) /
    (impressions || 1);

  return { clicks, impressions, ctr, position };
};

const queryAnalytics = async (
  client: searchconsole_v1.Searchconsole,
  siteUrl: string,
  startDate: string,
  endDate: string,
  dimensions: string[],
  rowLimit = 25,
) => {
  const response = await withTimeout(
    client.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions,
        rowLimit,
      },
    }),
    GSC_API_TIMEOUT_MS,
    `searchanalytics.query(${dimensions.join(",") || "summary"})`,
  );

  return mapRows(response.data.rows);
};

async function fetchSearchAnalyticsKeyedPaged(
  client: searchconsole_v1.Searchconsole,
  siteUrl: string,
  startDate: string,
  endDate: string,
  dimension: string,
  maxRows: number,
): Promise<GscSearchAnalyticsRow[]> {
  const out: GscSearchAnalyticsRow[] = [];
  let startRow = 0;
  const PAGE = Math.min(5000, Math.max(1, maxRows));

  while (out.length < maxRows) {
    const rowLimit = Math.min(PAGE, maxRows - out.length);
    const response = await withTimeout(
      client.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: [dimension],
          rowLimit,
          startRow,
        },
      }),
      GSC_API_TIMEOUT_MS,
      `searchanalytics.query(${dimension}) lote ${startRow}`,
    );
    const batch = mapRows(response.data.rows);
    out.push(...batch);
    if (batch.length < rowLimit || batch.length === 0) break;
    startRow += rowLimit;
  }

  return out;
}

const publicSiteOrigin = (siteUrl: string): string => {
  if (siteUrl.startsWith("sc-domain:")) {
    return `https://${siteUrl.slice("sc-domain:".length)}`;
  }
  try {
    const u = new URL(siteUrl.includes("://") ? siteUrl : `https://${siteUrl}`);
    return `${u.origin}/`;
  } catch {
    return siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  }
};

function rowMapsByPrimaryKey(rows: GscSearchAnalyticsRow[]) {
  const m = new Map<string, GscSearchAnalyticsRow>();
  for (const row of rows) {
    const k = row.keys[0]?.trim();
    if (k) m.set(k, row);
  }
  return m;
}

/** Umbral combinado clic/impresión según briefing (vs período previo intersectado por clave). */
function computeInsightTrendSlices(
  current: GscSearchAnalyticsRow[],
  previous: GscSearchAnalyticsRow[],
  opts: { kind: "up" | "down"; limit: number },
): GscTrendComparison[] {
  const cm = rowMapsByPrimaryKey(current);
  const pm = rowMapsByPrimaryKey(previous);
  const keys = new Set([...cm.keys(), ...pm.keys()]);
  const ZERO: GscSearchAnalyticsRow = {
    keys: [],
    clicks: 0,
    impressions: 0,
    ctr: 0,
    position: 0,
  };

  const items: GscTrendComparison[] = [];
  for (const key of keys) {
    const c = cm.get(key) ?? ZERO;
    const p = pm.get(key) ?? ZERO;
    const dc = c.clicks - p.clicks;
    const di = c.impressions - p.impressions;
    let pass = false;
    if (opts.kind === "up") {
      pass = dc >= 1 || (dc >= 0 && di >= 5);
    } else {
      pass = dc <= -1 || (dc <= 0 && di <= -5);
    }
    if (!pass) continue;

    items.push({
      key,
      currentClicks: c.clicks,
      previousClicks: p.clicks,
      currentImpressions: c.impressions,
      previousImpressions: p.impressions,
      deltaClicks: dc,
      deltaImpressions: di,
      currentCtr: c.ctr,
      previousCtr: p.ctr,
      currentPosition: c.position,
      previousPosition: p.position,
    });
  }

  const sortMult = opts.kind === "up" ? -1 : 1;
  items.sort((a, b) => {
    const d = sortMult * (a.deltaClicks - b.deltaClicks);
    if (d !== 0) return d;
    return sortMult * (a.deltaImpressions - b.deltaImpressions);
  });

  return items.slice(0, opts.limit);
}

function toTrendSliceItem(row: GscTrendComparison): TrendItem {
  return {
    key: row.key,
    currentClicks: row.currentClicks,
    previousClicks: row.previousClicks,
    deltaClicks: row.deltaClicks,
  };
}

function summarizeInspection(
  inspectionUrl: string,
  data?: searchconsole_v1.Schema$InspectUrlIndexResponse,
  error?: string,
): GscUrlInspectionDashboardItem {
  const index = data?.inspectionResult?.indexStatusResult;
  return {
    inspectionUrl,
    error,
    indexVerdict: index?.verdict,
    coverageState: index?.coverageState,
    indexingState: index?.indexingState,
    googleCanonical: index?.googleCanonical,
    userCanonical: index?.userCanonical,
    pageFetchState: index?.pageFetchState,
    inspectionResultLink: data?.inspectionResult?.inspectionResultLink ?? undefined,
  };
}

async function runUrlInspectionSample(
  client: searchconsole_v1.Searchconsole,
  siteUrl: string,
  inspectionUrls: string[],
): Promise<GscUrlInspectionDashboardItem[]> {
  const results = await Promise.all(
    inspectionUrls.map(async (inspectionUrl) => {
      try {
        const res = await withTimeout(
          client.urlInspection.index.inspect({
            requestBody: {
              siteUrl,
              inspectionUrl,
              languageCode: "es-419",
            },
          }),
          GSC_OPTIONAL_TIMEOUT_MS,
          `urlInspection(${inspectionUrl})`,
        );
        return summarizeInspection(inspectionUrl, res.data);
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : String(e);
        return summarizeInspection(inspectionUrl, undefined, message);
      }
    }),
  );

  return results.filter((row, index) => {
    if (!row.error) return true;

    const error = row.error.toLowerCase();
    const quotaExceeded =
      error.includes("quota") ||
      error.includes("rate limit") ||
      error.includes("429");

    if (!quotaExceeded) return true;

    return results.slice(0, index + 1).some((item) => !item.error);
  });
}

const sortRowsByClicksDesc = (rows: GscSearchAnalyticsRow[]) =>
  [...rows].sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);

export const getGscDashboardData = async (
  days = Number(process.env.GSC_DASHBOARD_DAYS ?? 28),
): Promise<GscDashboardData> => {
  const siteUrl = process.env.GSC_SITE_URL ?? "sc-domain:gonzalopedrosa.cl";
  const client = getSearchConsoleClient();

  const keyedMaxRows = Number(process.env.GSC_ANALYTICS_KEYED_MAX_ROWS ?? 2500);
  const trendInsightLimit = Number(process.env.GSC_TRENDING_ROWS ?? 25);
  const lowCtrPagedMax = Number(process.env.GSC_LOW_CTR_PAGES_MAX_ROWS ?? 15000);
  const rawBrand = process.env.GSC_BRAND_TERMS?.trim();
  const brandTermsCsv = rawBrand || undefined;

  const skipInspection = process.env.GSC_SKIP_URL_INSPECTION === "1";

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - days);

  const prevEnd = new Date(start);
  prevEnd.setDate(prevEnd.getDate() - 1);
  const prevStart = new Date(prevEnd);
  prevStart.setDate(prevStart.getDate() - days);

  const startDate = formatDate(start);
  const endDate = formatDate(end);
  const prevStartDate = formatDate(prevStart);
  const prevEndDate = formatDate(prevEnd);

  const needTail = keyedMaxRows < lowCtrPagedMax;
  const lowCtrPagesPromise = needTail
    ? fetchSearchAnalyticsKeyedPaged(client, siteUrl, startDate, endDate, "page", lowCtrPagedMax)
    : Promise.resolve<GscSearchAnalyticsRow[] | null>(null);

  const sitesPromise = bestEffort(
    client.sites.list(),
    null,
    GSC_OPTIONAL_TIMEOUT_MS,
    "sites.list",
  );
  const sitemapsListPromise = bestEffort(
    client.sitemaps.list({ siteUrl }),
    null,
    GSC_OPTIONAL_TIMEOUT_MS,
    "sitemaps.list",
  );

  const [
    daily,
    devices,
    countries,
    currentTotals,
    previousTotals,
    queriesCurrKeyed,
    pagesCurrKeyed,
    queriesPrevKeyed,
    pagesPrevKeyed,
    searchAppearance,
    queryPageCombosTop25,
    sitesResponse,
    sitemapsListResponse,
    lowCtrPagesMaybe,
  ] = await Promise.all([
    queryAnalytics(client, siteUrl, startDate, endDate, ["date"], 400),
    queryAnalytics(client, siteUrl, startDate, endDate, ["device"], 10),
    queryAnalytics(client, siteUrl, startDate, endDate, ["country"], 15),
    queryAnalytics(client, siteUrl, startDate, endDate, [], 1),
    queryAnalytics(client, siteUrl, prevStartDate, prevEndDate, [], 1),
    fetchSearchAnalyticsKeyedPaged(client, siteUrl, startDate, endDate, "query", keyedMaxRows),
    fetchSearchAnalyticsKeyedPaged(client, siteUrl, startDate, endDate, "page", keyedMaxRows),
    fetchSearchAnalyticsKeyedPaged(client, siteUrl, prevStartDate, prevEndDate, "query", keyedMaxRows),
    fetchSearchAnalyticsKeyedPaged(client, siteUrl, prevStartDate, prevEndDate, "page", keyedMaxRows),
    queryAnalytics(client, siteUrl, startDate, endDate, ["searchAppearance"], 100),
    queryAnalytics(client, siteUrl, startDate, endDate, ["query", "page"], 25),
    sitesPromise,
    sitemapsListPromise,
    lowCtrPagesPromise,
  ]);

  const pagesAccumForLowCtr = lowCtrPagesMaybe ?? pagesCurrKeyed;

  const queriesSorted = sortRowsByClicksDesc(queriesCurrKeyed);
  const pagesSorted = sortRowsByClicksDesc(pagesCurrKeyed);

  const trendUpQueries = computeInsightTrendSlices(queriesCurrKeyed, queriesPrevKeyed, {
    kind: "up",
    limit: trendInsightLimit,
  });
  const trendDownQueries = computeInsightTrendSlices(queriesCurrKeyed, queriesPrevKeyed, {
    kind: "down",
    limit: trendInsightLimit,
  });
  const trendUpPages = computeInsightTrendSlices(pagesCurrKeyed, pagesPrevKeyed, {
    kind: "up",
    limit: trendInsightLimit,
  });
  const trendDownPages = computeInsightTrendSlices(pagesCurrKeyed, pagesPrevKeyed, {
    kind: "down",
    limit: trendInsightLimit,
  });

  const queriesTop50 = queriesSorted.slice(0, 50);
  const pagesTop50 = pagesSorted.slice(0, 50);

  const lowCtrOpportunities = analyzeLowCtrPages(pagesAccumForLowCtr, 10);

  const trending: GscTrendingBundle = {
    queries: computeTrending(queriesTop50, queriesPrevKeyed, 0),
    pages: computeTrending(pagesTop50, pagesPrevKeyed, 0),
  };

  const insights: GscDashboardInsights = {
    trendingUpQueries: trendUpQueries.map(toTrendSliceItem),
    trendingDownQueries: trendDownQueries.map(toTrendSliceItem),
    trendingUpPages: trendUpPages.map(toTrendSliceItem),
    trendingDownPages: trendDownPages.map(toTrendSliceItem),
  };

  const appliedBrandTerms = resolveBrandTerms(siteUrl, brandTermsCsv);
  const brandedSplit = detectBrandedQueries(queriesCurrKeyed, siteUrl, brandTermsCsv);

  const brandedVsNonBranded: GscBrandedBuckets = {
    branded: {
      clicks: brandedSplit.branded.clicks,
      impressions: brandedSplit.branded.impressions,
      ctr: brandedSplit.branded.ctr,
      matchedQueryRows: brandedSplit.queryRowCounts.branded,
    },
    nonBranded: {
      clicks: brandedSplit.nonBranded.clicks,
      impressions: brandedSplit.nonBranded.impressions,
      ctr: brandedSplit.nonBranded.ctr,
      matchedQueryRows: brandedSplit.queryRowCounts.nonBranded,
    },
  };

  const origin = publicSiteOrigin(siteUrl);
  const homeUrl = new URL("/", origin).toString().replace(/\/?$/, "/");
  const agendarUrl = new URL("agendar", origin).toString();

  let topPerformingUrl: string | undefined;
  const topPaged = pagesSorted[0]?.keys[0]?.trim();
  if (topPaged && topPaged !== homeUrl && topPaged !== agendarUrl) {
    topPerformingUrl = topPaged;
  }

  const inspectCandidates = [homeUrl, agendarUrl];
  if (topPerformingUrl) inspectCandidates.push(topPerformingUrl);
  const uniqueInspection = [...new Set(inspectCandidates)].slice(0, 5);

  const sitemapList = sitemapsListResponse?.data.sitemap ?? [];
  const sitemapsPromise = Promise.all(
    sitemapList.map(async (sitemap): Promise<GscSitemapDashboardEntry> => {
      const feedpath = sitemap.path;
      const detailed = feedpath
        ? await bestEffort(
            client.sitemaps.get({ siteUrl, feedpath }),
            null,
            GSC_OPTIONAL_TIMEOUT_MS,
            `sitemaps.get(${feedpath})`,
          )
        : null;

      const contents = (detailed?.data.contents ?? []).map((c): GscSitemapContentEntry => ({
        type: c.type,
        submitted: c.submitted,
        indexed: c.indexed,
      }));

      const base: GscSitemapDashboardEntry = {
        path: sitemap.path,
        lastSubmitted: sitemap.lastSubmitted,
        lastDownloaded: sitemap.lastDownloaded,
        warnings: sitemap.warnings,
        errors: sitemap.errors,
        isPending: sitemap.isPending,
        isSitemapsIndex: sitemap.isSitemapsIndex,
        type: sitemap.type,
      };

      if (contents.length > 0) base.contents = contents;
      return base;
    }),
  );

  const urlInspectionSamplesPromise = skipInspection
    ? Promise.resolve<GscUrlInspectionDashboardItem[]>([])
    : bestEffort(
        runUrlInspectionSample(client, siteUrl, uniqueInspection),
        [],
        GSC_OPTIONAL_TIMEOUT_MS,
        "urlInspection.batch",
      );

  const [sitemaps, urlInspectionSamples] = await Promise.all([
    sitemapsPromise,
    urlInspectionSamplesPromise,
  ]);

  const actionPlan = generateActionPlan({
    siteUrl,
    summary: aggregate(currentTotals),
    pages: pagesTop50,
    sitemaps,
    lowCtrOpportunities,
    trending,
    brandedSplit,
  });

  return {
    siteUrl,
    period: { start: startDate, end: endDate, days },
    previousPeriod: { start: prevStartDate, end: prevEndDate },
    generatedAt: new Date().toISOString(),
    sites: (sitesResponse?.data.siteEntry ?? []).map((site) => ({
      siteUrl: site.siteUrl ?? "",
      permissionLevel: site.permissionLevel,
    })),
    summary: aggregate(currentTotals),
    previousSummary: aggregate(previousTotals),
    daily: daily.sort((a, b) => a.keys[0].localeCompare(b.keys[0])),
    queries: queriesSorted.slice(0, 50),
    pages: pagesSorted.slice(0, 50),
    devices,
    countries,
    searchAppearance: sortRowsByClicksDesc(searchAppearance),
    queryPageCombosTop25: sortRowsByClicksDesc(queryPageCombosTop25).slice(0, 25),
    trendingUpQueries: trendUpQueries,
    trendingDownQueries: trendDownQueries,
    trendingUpPages: trendUpPages,
    trendingDownPages: trendDownPages,
    insights,
    trending,
    lowCtrOpportunities,
    brandedSplit,
    brandedVsNonBranded,
    appliedBrandTerms,
    sitemaps,
    urlInspectionSamples,
    actionPlan,
  };
};

export const isGscDashboardAuthorized = (key: string | null | undefined) => {
  const secret = process.env.GSC_DASHBOARD_SECRET;
  if (!secret) return true;
  return key === secret;
};
