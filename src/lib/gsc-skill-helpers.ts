import type { GscSearchAnalyticsRow } from "./gsc";

/** Benchmarks “serp limpio” (skill GSC). Valores 0–1. */
export type CtrBand = { min: number; max: number; label: string };

export function expectedCtrBandForPosition(position: number): CtrBand {
  const p = Math.round(position);
  if (p <= 1) return { min: 0.25, max: 0.35, label: "Pos. 1 (25–35%)" };
  if (p === 2) return { min: 0.12, max: 0.18, label: "Pos. 2 (12–18%)" };
  if (p === 3) return { min: 0.08, max: 0.12, label: "Pos. 3 (8–12%)" };
  if (p <= 5) return { min: 0.05, max: 0.07, label: "Pos. 4–5 (5–7%)" };
  if (p <= 10) return { min: 0.02, max: 0.05, label: "Pos. 6–10 (2–5%)" };
  return { min: 0.01, max: 0.02, label: "Fuera de top 10 (referencia baja)" };
}

export type TrendItem = {
  key: string;
  currentClicks: number;
  previousClicks: number;
  deltaClicks: number;
};

function rowKeyMap(rows: GscSearchAnalyticsRow[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const row of rows) {
    const k = row.keys[0]?.trim();
    if (k) m.set(k, row.clicks);
  }
  return m;
}

/** Tendencia por clics vs período anterior (alineado al informe Insights). */
export function computeClickTrends(
  current: GscSearchAnalyticsRow[],
  previous: GscSearchAnalyticsRow[],
  topN = 8,
): { up: TrendItem[]; down: TrendItem[] } {
  const prevMap = rowKeyMap(previous);
  const items: TrendItem[] = [];

  for (const row of current) {
    const key = row.keys[0]?.trim();
    if (!key) continue;
    const currentClicks = row.clicks;
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
    .slice(0, topN);

  const down = [...items]
    .filter((i) => i.deltaClicks < 0)
    .sort((a, b) => a.deltaClicks - b.deltaClicks)
    .slice(0, topN);

  return { up, down };
}

export type BrandedSummary = {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

function aggregateWeighted(rows: GscSearchAnalyticsRow[]): BrandedSummary {
  if (rows.length === 0) {
    return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  }
  const clicks = rows.reduce((s, r) => s + r.clicks, 0);
  const impressions = rows.reduce((s, r) => s + r.impressions, 0);
  const ctr = impressions > 0 ? clicks / impressions : 0;
  const position =
    rows.reduce((s, r) => s + r.position * r.impressions, 0) / (impressions || 1);
  return { clicks, impressions, ctr, position };
}

function normalizeBrandTerms(siteUrl: string, extra?: string): string[] {
  const fromEnv = extra
    ?.split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  if (fromEnv && fromEnv.length > 0) return fromEnv;

  let host = siteUrl.replace(/^sc-domain:/i, "").replace(/^https?:\/\//i, "");
  host = host.split("/")[0] ?? host;
  host = host.replace(/^www\./i, "");
  const first = host.split(".")[0]?.toLowerCase() ?? "";
  return first ? [first, host.replace(/\.[^.]+$/, "").toLowerCase()].filter(Boolean) : [];
}

function queryMatchesBrand(query: string, terms: string[]): boolean {
  const q = query.toLowerCase();
  return terms.some((t) => t.length >= 3 && q.includes(t));
}

/** Aproximación marca / no marca desde consultas (la UI de GSC usa etiquetado automático). */
export type BrandedQuerySplit = {
  branded: BrandedSummary;
  nonBranded: BrandedSummary;
  brandTerms: string[];
  /** Filas clasificadas en la tabla de consultas usada como entrada */
  brandedQueryRows: number;
  nonBrandedQueryRows: number;
};

export function splitBrandedQueries(
  queries: GscSearchAnalyticsRow[],
  siteUrl: string,
  envTerms?: string,
): BrandedQuerySplit {
  const brandTerms = normalizeBrandTerms(siteUrl, envTerms);
  const brandedRows: GscSearchAnalyticsRow[] = [];
  const nonBrandedRows: GscSearchAnalyticsRow[] = [];

  for (const row of queries) {
    const q = row.keys[0]?.trim() ?? "";
    if (!q) continue;
    if (brandTerms.length && queryMatchesBrand(q, brandTerms)) brandedRows.push(row);
    else nonBrandedRows.push(row);
  }

  return {
    branded: aggregateWeighted(brandedRows),
    nonBranded: aggregateWeighted(nonBrandedRows),
    brandTerms,
    brandedQueryRows: brandedRows.length,
    nonBrandedQueryRows: nonBrandedRows.length,
  };
}

export type CtrOpportunity = {
  page: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  expectedMin: number;
  expectedMax: number;
  gapMid: number;
  suggestedAction: string;
};

/** Páginas con muchas impresiones y CTR por debajo del mínimo esperado para su posición. */
export function buildLowCtrOpportunities(
  pages: GscSearchAnalyticsRow[],
  options?: { minImpressions?: number; maxPosition?: number; limit?: number },
): CtrOpportunity[] {
  const minImpressions = options?.minImpressions ?? 200;
  const maxPosition = options?.maxPosition ?? 10;
  const limit = options?.limit ?? 15;

  const out: CtrOpportunity[] = [];

  for (const row of pages) {
    const page = row.keys[0]?.trim();
    if (!page) continue;
    if (row.impressions < minImpressions) continue;
    if (row.position > maxPosition) continue;

    const band = expectedCtrBandForPosition(row.position);
    if (row.ctr >= band.min) continue;

    const gapMid = Math.max(0, (band.min + band.max) / 2 - row.ctr);
    out.push({
      page,
      impressions: row.impressions,
      clicks: row.clicks,
      ctr: row.ctr,
      position: row.position,
      expectedMin: band.min,
      expectedMax: band.max,
      gapMid,
      suggestedAction:
        "Revisar title y meta description (skill title-tag / meta-description); valorar datos estructurados para rich results.",
    });
  }

  return out.sort((a, b) => b.gapMid * b.impressions - a.gapMid * a.impressions).slice(0, limit);
}

/** Texto fijo de la skill para placeholders en UI. */
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

export type PrioritizedAction = {
  rank: number;
  title: string;
  detail: string;
  source: "ctr" | "tendencia" | "sitemap" | "indicación";
};

export function buildPrioritizedActions(input: {
  ctrOpportunities: CtrOpportunity[];
  trendingDownQueries: TrendItem[];
  trendingDownPages: TrendItem[];
  sitemaps: Array<{
    path?: string | null;
    errors?: string | number | null;
    warnings?: string | number | null;
  }>;
}): PrioritizedAction[] {
  const items: PrioritizedAction[] = [];
  let rank = 1;

  for (const op of input.ctrOpportunities.slice(0, 3)) {
    items.push({
      rank: rank++,
      title: `Mejorar CTR en URL con alto volumen`,
      detail: `${op.page} — pos. ${op.position.toFixed(1)}, CTR ${(op.ctr * 100).toFixed(2)}% vs esperado ${(op.expectedMin * 100).toFixed(0)}–${(op.expectedMax * 100).toFixed(0)}%. ${op.suggestedAction}`,
      source: "ctr",
    });
  }

  const qDown = input.trendingDownQueries[0];
  if (qDown) {
    items.push({
      rank: rank++,
      title: `Investigar caída de consulta: “${qDown.key}”`,
      detail: `Clics ${qDown.currentClicks} vs ${qDown.previousClicks} en el período anterior (Δ ${qDown.deltaClicks}). Correlacionar con releases o cambios de contenido.`,
      source: "tendencia",
    });
  }

  const pDown = input.trendingDownPages[0];
  if (pDown) {
    items.push({
      rank: rank++,
      title: `Revisar página con tendencia a la baja`,
      detail: `${pDown.key} — clics ${pDown.currentClicks} vs ${pDown.previousClicks} (Δ ${pDown.deltaClicks}).`,
      source: "tendencia",
    });
  }

  const badSitemaps = input.sitemaps.filter(
    (s) => Number(s.errors ?? 0) > 0 || Number(s.warnings ?? 0) > 0,
  );
  for (const sm of badSitemaps.slice(0, 2)) {
    items.push({
      rank: rank++,
      title: `Sitemap con incidencias: ${sm.path ?? "—"}`,
      detail: `Errores: ${sm.errors ?? 0} · Advertencias: ${sm.warnings ?? 0}. En GSC: Indexación → Sitemaps y corregir según skill xml-sitemap.`,
      source: "sitemap",
    });
  }

  if (items.length === 0) {
    items.push({
      rank: 1,
      title: "Mantener monitorización mensual",
      detail:
        "No se detectaron oportunidades automáticas fuertes en este snapshot. Sigue el checklist mensual y exporta datos al cierre de mes.",
      source: "indicación",
    });
  }

  return items.map((it, i) => ({ ...it, rank: i + 1 }));
}
