/**
 * Análisis puro de datos de Search Console (benchmarks CTR según skill google-search-console).
 */

export type GscAnalyticsRow = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export type LowCtrOpportunity = {
  page: string;
  impressions: number;
  clicks: number;
  position: number;
  actualCtr: number;
  expectedCtr: number;
  /** expectedCtr - actualCtr (positivo = por debajo del benchmark) */
  gap: number;
  /** Clics adicionales estimados si el CTR alcanzara expectedCtr en el período */
  upliftPotential: number;
};

export type TrendingItem = {
  key: string;
  currentClicks: number;
  previousClicks: number;
  deltaClicks: number;
};

/** Alias para componentes Insights (misma forma que fila de tendencia por clics). */
export type TrendItem = TrendingItem;

export type TrendingResult = {
  up: TrendingItem[];
  down: TrendingItem[];
};

export type BrandMetricTotals = {
  clicks: number;
  impressions: number;
  ctr: number;
  /** Posición media ponderada por impresiones en el bucket */
  position: number;
};

export type BrandedSplit = {
  branded: BrandMetricTotals;
  nonBranded: BrandMetricTotals;
  /** Filas en el dataset de consultas (p. ej. top 50) por bucket */
  queryRowCounts: { branded: number; nonBranded: number };
};

export type ActionPlanPriority = "alta" | "media" | "baja";

export type ActionPlanItem = {
  priority: ActionPlanPriority;
  title: string;
  detail: string;
};

export type GscTrendingBundle = {
  queries: TrendingResult;
  pages: TrendingResult;
};

/** Subconjunto de datos necesario para generateActionPlan (evita import circular con gsc.ts). */
export type GscActionPlanInput = {
  siteUrl: string;
  summary: {
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
  };
  pages: GscAnalyticsRow[];
  sitemaps: Array<{
    path?: string | null;
    lastSubmitted?: string | null;
    lastDownloaded?: string | null;
    warnings?: string | number | null;
    errors?: string | number | null;
  }>;
  lowCtrOpportunities: LowCtrOpportunity[];
  trending: GscTrendingBundle;
  brandedSplit: BrandedSplit;
};

const EXPECTED_CTR_POINTS: Array<[number, number]> = [
  [1, 0.3],
  [2, 0.15],
  [3, 0.1],
  [5, 0.06],
  [10, 0.035],
  [20, 0.01],
];

/**
 * CTR esperado (baseline SERP “limpia”) según posición media; interpolación lineal entre puntos del skill.
 */
export function getExpectedCtr(position: number): number {
  if (!Number.isFinite(position) || position < 1) {
    return 0.01;
  }

  const p = position;
  if (p <= EXPECTED_CTR_POINTS[0][0]) {
    return EXPECTED_CTR_POINTS[0][1];
  }

  for (let i = 1; i < EXPECTED_CTR_POINTS.length; i++) {
    const [p0, c0] = EXPECTED_CTR_POINTS[i - 1];
    const [p1, c1] = EXPECTED_CTR_POINTS[i];
    if (p <= p1) {
      const t = (p - p0) / (p1 - p0);
      return c0 + t * (c1 - c0);
    }
  }

  return EXPECTED_CTR_POINTS[EXPECTED_CTR_POINTS.length - 1][1];
}

function rowKey(row: GscAnalyticsRow, keyIndex: number): string {
  return row.keys[keyIndex] ?? "";
}

/** Benchmark CTR “serp limpio” por posición media redondeada (skill, tabla fija). */
function skillFixedBenchmarkCtr(position: number): number | undefined {
  const r = Math.round(position);
  if (r < 1 || r > 10) return undefined;
  if (r === 1) return 0.25;
  if (r === 2) return 0.15;
  if (r === 3) return 0.1;
  if (r <= 5) return 0.06;
  return 0.035;
}

/**
 * Páginas en primera página con impresiones suficientes y CTR por debajo del benchmark fijo del skill.
 */
export function analyzeLowCtrPages(
  pages: GscAnalyticsRow[],
  minImpressions = 10,
): LowCtrOpportunity[] {
  const out: LowCtrOpportunity[] = [];

  for (const row of pages) {
    const page = rowKey(row, 0);
    if (!page || row.impressions < minImpressions) continue;

    const expectedCtr = skillFixedBenchmarkCtr(row.position);
    if (expectedCtr === undefined) continue;

    const actualCtr = row.ctr;
    if (actualCtr >= expectedCtr) continue;

    const gap = expectedCtr - actualCtr;
    const upliftPotential = Math.max(0, row.impressions * gap);

    out.push({
      page,
      impressions: row.impressions,
      clicks: row.clicks,
      position: row.position,
      actualCtr,
      expectedCtr,
      gap,
      upliftPotential,
    });
  }

  return out.sort((a, b) => b.upliftPotential - a.upliftPotential);
}

/**
 * Compara clics entre dos períodos por la dimensión en keys[keyIndex].
 */
export function computeTrending(
  currentRows: GscAnalyticsRow[],
  previousRows: GscAnalyticsRow[],
  keyIndex: number,
): TrendingResult {
  const prevMap = new Map<string, number>();
  for (const row of previousRows) {
    const k = rowKey(row, keyIndex);
    if (!k) continue;
    prevMap.set(k, row.clicks);
  }

  const currMap = new Map<string, number>();
  for (const row of currentRows) {
    const k = rowKey(row, keyIndex);
    if (!k) continue;
    currMap.set(k, row.clicks);
  }

  const items: TrendingItem[] = [];
  for (const key of new Set([...currMap.keys(), ...prevMap.keys()])) {
    const currentClicks = currMap.get(key) ?? 0;
    const previousClicks = prevMap.get(key) ?? 0;
    items.push({
      key,
      currentClicks,
      previousClicks,
      deltaClicks: currentClicks - previousClicks,
    });
  }

  const up = [...items]
    .filter((i) => i.deltaClicks > 0)
    .sort((a, b) => b.deltaClicks - a.deltaClicks)
    .slice(0, 15);

  const down = [...items]
    .filter((i) => i.deltaClicks < 0)
    .sort((a, b) => a.deltaClicks - b.deltaClicks)
    .slice(0, 15);

  return { up, down };
}

/**
 * Términos marca: si viene CSV en env sólo ese listado; si no, etiquetas del host (comportamiento alineado al helper anterior).
 */
export function resolveBrandTerms(siteUrl: string, envCsv?: string): string[] {
  const fromCsv =
    envCsv
      ?.split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean) ?? [];
  if (fromCsv.length > 0) {
    return Array.from(new Set(fromCsv));
  }

  let host = siteUrl.replace(/^sc-domain:/i, "").replace(/^https?:\/\//i, "");
  host = (host.split("/")[0] ?? host).replace(/^www\./i, "");
  const first = host.split(".")[0]?.toLowerCase() ?? "";
  if (!first) return [];
  const withoutTld = host.includes(".") ? host.replace(/\.[^.]+$/, "").toLowerCase() : "";
  return Array.from(new Set([first, withoutTld].filter(Boolean)));
}

function foldTotals(rows: GscAnalyticsRow[]): BrandMetricTotals {
  const clicks = rows.reduce((sum, r) => sum + r.clicks, 0);
  const impressions = rows.reduce((sum, r) => sum + r.impressions, 0);
  const ctr = impressions > 0 ? clicks / impressions : 0;
  const position =
    impressions > 0
      ? rows.reduce((sum, r) => sum + r.position * r.impressions, 0) / impressions
      : 0;
  return { clicks, impressions, ctr, position };
}

function queryLooksBranded(query: string, terms: string[]): boolean {
  const q = query.toLowerCase();
  return terms.some((t) => t.length >= 3 && q.includes(t));
}

/**
 * Reparte consultas en branded / no branded usando el host de la propiedad (o sc-domain).
 * Sin términos coincidibles, todo queda en no marca.
 */
export function detectBrandedQueries(
  queries: GscAnalyticsRow[],
  siteUrl: string,
  brandTermsCsv?: string,
): BrandedSplit {
  const terms = resolveBrandTerms(siteUrl, brandTermsCsv);
  const brandedRows: GscAnalyticsRow[] = [];
  const nonBrandedRows: GscAnalyticsRow[] = [];

  for (const row of queries) {
    const q = rowKey(row, 0);
    if (!q) {
      nonBrandedRows.push(row);
      continue;
    }
    if (terms.length > 0 && queryLooksBranded(q, terms)) {
      brandedRows.push(row);
    } else {
      nonBrandedRows.push(row);
    }
  }

  return {
    branded: foldTotals(brandedRows),
    nonBranded: foldTotals(nonBrandedRows),
    queryRowCounts: {
      branded: brandedRows.length,
      nonBranded: nonBrandedRows.length,
    },
  };
}

function num(v: string | number | null | undefined): number {
  if (v == null) return 0;
  if (typeof v === "number") return Number.isFinite(v) ? v : 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

export function findHostVariantPageUrls(
  pages: GscAnalyticsRow[],
  siteUrl: string,
  limit = 12,
): string[] {
  if (siteUrl.startsWith("sc-domain:")) {
    return [];
  }

  let wantWww: boolean;
  try {
    const normalized = siteUrl.match(/^https?:\/\//i) ? siteUrl : `https://${siteUrl}`;
    const u = new URL(normalized.endsWith("/") ? normalized : `${normalized}/`);
    wantWww = u.hostname.startsWith("www.");
  } catch {
    return [];
  }

  const mismatched: string[] = [];
  for (const row of pages) {
    const url = rowKey(row, 0);
    if (!url?.startsWith("http")) continue;
    try {
      const pu = new URL(url);
      const hasWww = pu.hostname.startsWith("www.");
      if (wantWww !== hasWww) {
        mismatched.push(url);
        if (mismatched.length >= limit) break;
      }
    } catch {
      continue;
    }
  }

  return mismatched;
}

const priorityOrder: Record<ActionPlanPriority, number> = {
  alta: 0,
  media: 1,
  baja: 2,
};

/**
 * Plan de acción priorizado en español (indexación/redirecciones, CTR, tendencias, sitemaps).
 */
export function generateActionPlan(data: GscActionPlanInput): ActionPlanItem[] {
  const items: ActionPlanItem[] = [];

  const badSitemaps = data.sitemaps.filter(
    (s) => num(s.errors) > 0 || num(s.warnings) > 0,
  );
  if (badSitemaps.length > 0) {
    const names = badSitemaps
      .map((s) => s.path)
      .filter(Boolean)
      .slice(0, 5)
      .join(", ");
    items.push({
      priority: "alta",
      title: "Revisar sitemaps con errores o advertencias",
      detail: `En Search Console → Indexación → Sitemaps, corrige estados con problemas. Detectados: ${names || "varios"}. Los fallos pueden retrasar descubrimiento e indexación.`,
    });
  }

  const hostMismatches = findHostVariantPageUrls(data.pages, data.siteUrl);
  if (hostMismatches.length > 0) {
    items.push({
      priority: "alta",
      title: "Unificar versión con/sin www en URLs que reciben clics",
      detail: `Hay URLs en el informe de páginas que no coinciden con el host preferido de la propiedad (${data.siteUrl}). Configura redirección 301 y canónico consistente para evitar señales duplicadas y pérdida de consolidación.`,
    });
  }

  const topLowCtr = data.lowCtrOpportunities.slice(0, 5);
  if (topLowCtr.length > 0) {
    const ejemplo = topLowCtr[0];
    items.push({
      priority: "alta",
      title: "Optimizar títulos y meta descripción en páginas con CTR bajo",
      detail: `${topLowCtr.length} URL(s) con impresiones en primera página y CTR por debajo del benchmark por posición. Ejemplo: ${ejemplo.page.slice(0, 80)}${ejemplo.page.length > 80 ? "…" : ""} — CTR real ${(ejemplo.actualCtr * 100).toFixed(2)}% vs esperado ~${(ejemplo.expectedCtr * 100).toFixed(2)}%.`,
    });
  }

  const downPages = data.trending.pages.down.filter((i) => i.deltaClicks <= -3);
  if (downPages.length > 0) {
    items.push({
      priority: "media",
      title: "Investigar páginas con caída clara de clics vs período anterior",
      detail: `Varias páginas pierden clics respecto al período previo. Revisa cambios recientes (contenido, plantilla, bloqueos, canonical). Ejemplos: ${downPages
        .slice(0, 3)
        .map((d) => d.key)
        .join(" · ")}.`,
    });
  }

  const downQueries = data.trending.queries.down.filter((i) => i.deltaClicks <= -2);
  if (downQueries.length > 0) {
    items.push({
      priority: "media",
      title: "Consultas en tendencia a la baja",
      detail: `Hay consultas con menos clics que en el período anterior. Cruza con rankings, intención y competencia en SERP (incl. rich results / AI Overviews).`,
    });
  }

  const totalImp = data.summary.impressions;
  const brandedShare =
    totalImp > 0 ? data.brandedSplit.branded.impressions / totalImp : 0;
  if (
    totalImp > 500 &&
    brandedShare < 0.15 &&
    data.brandedSplit.queryRowCounts.nonBranded > 0
  ) {
    items.push({
      priority: "baja",
      title: "Crecimiento: reforzar captación no marca",
      detail:
        "La mayor parte del rendimiento parece no marca según este corte heurístico. Prioriza contenido orientado a intenciones amplias y enlazado interno hacia páginas pilar.",
    });
  }

  if (items.length === 0) {
    items.push({
      priority: "baja",
      title: "Mantener monitorización mensual",
      detail:
        "No se detectaron alertas automáticas fuertes en este snapshot. Exporta datos a fin de mes, revisa indexación y CWV periódicamente (checklist del skill GSC).",
    });
  }

  return items.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

/** Copia de texto reutilizable en UI Insights (skill GSC). */
export const GSC_SKILL_PLACEHOLDER_INSIGHTS_ES = {
  trendingNote:
    "En Search Console, las tarjetas Insights comparan clics vs el período anterior. Si aquí no hay filas, suele faltar volumen o estabilidad entre períodos.",
  exampleUpQuery: "consultas informativas tipo “cómo…” o “qué es…”",
  exampleDownQuery: "consultas estacionales o afectadas por cambios de título/canonical",
};

export const GSC_API_LIMITS_ES = {
  rowsPerDayPerProperty: 50_000,
  rowsPerResponse: 25_000,
  dataLagDays: "2–3",
};
