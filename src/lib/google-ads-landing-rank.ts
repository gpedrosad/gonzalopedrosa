import {
  ADS_LANDING_INVENTORY,
  type AdsKeywordRow,
  type AdsLandingRow,
  type AdsMetrics,
  type AdsSearchTermRow,
} from "./google-ads";

export type AdsLandingPriority = "escalar" | "optimizar" | "preparar";

export type AdsLandingRankRow = {
  rank: number;
  theme: string;
  suggestedLanding: string;
  score: number;
  priority: AdsLandingPriority;
  metrics: AdsMetrics;
  ctr: number;
  cpa: number | null;
  landingClicks: number;
  landingConversions: number;
  landingStatus: "recibe tráfico" | "en inventario" | "sin tráfico paid";
  topTerms: string[];
  rationale: string;
};

export type AdsTermRankRow = {
  rank: number;
  term: string;
  source: "keyword" | "search_term";
  theme: string;
  suggestedLanding: string;
  score: number;
  priority: AdsLandingPriority;
  metrics: AdsMetrics;
  ctr: number;
  rationale: string;
};

type TermInput = {
  term: string;
  source: "keyword" | "search_term";
  metrics: AdsMetrics;
};

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();

const IRRELEVANT = [
  "sexolog",
  "familia",
  "emdr",
  "dbt",
  "adicion",
  "infantil",
  "bariatric",
  "injuv",
  "conversemos",
  "linea libre",
  "santiago",
  "mexico",
  "argentina",
  "tarot",
  "gratis",
  "gratuito",
];

const THEME_RULES: Array<{
  theme: string;
  landing: string;
  match: (n: string) => boolean;
}> = [
  {
    theme: "Agendar / cita online",
    landing: "/ads/agendar-psicologo-online",
    match: (n) => /agendar|reservar|hora|cita|sesion/.test(n),
  },
  {
    theme: "Adolescentes online",
    landing: "/ads/adolescentes",
    match: (n) => /adolescent|juvenil|joven/.test(n),
  },
  {
    theme: "Ansiedad online",
    landing: "/ads/psicologo-ansiedad-online",
    match: (n) => /ansiedad|ansios|preocupacion/.test(n),
  },
  {
    theme: "Ataques de pánico online",
    landing: "/ads/psicologo-ataques-de-panico-online",
    match: (n) => /panico|ataque|agorafob/.test(n),
  },
  {
    theme: "Terapia de pareja online",
    landing: "/ads/terapia-pareja",
    match: (n) => /pareja|matrimon|conyugal|infidel|celos/.test(n),
  },
  {
    theme: "TCC / cognitivo conductual online",
    landing: "/ads/psicologo-cognitivo-conductual-online",
    match: (n) => /cognitiv|conductual|tcc|terapia cognitivo/.test(n),
  },
  {
    theme: "Terapia online (genérico)",
    landing: "/ads/terapia-online",
    match: (n) => /terapia online|terapia virtual|terapia a distancia/.test(n),
  },
  {
    theme: "Psicólogo a distancia",
    landing: "/ads/psicologo-cognitivo-conductual-online",
    match: (n) => /distancia|remot/.test(n),
  },
  {
    theme: "Psicólogo online (genérico)",
    landing: "/ads/psicologo-online",
    match: (n) =>
      /psicolog|psicoterap|terapeuta/.test(n) &&
      /online|linea|virtual|videollamada/.test(n),
  },
];

const classifyTerm = (term: string) => {
  const n = normalize(term);
  for (const rule of THEME_RULES) {
    if (rule.match(n)) return { theme: rule.theme, landing: rule.landing };
  }
  if (/online|linea|virtual|distancia/.test(n)) {
    return { theme: "Online genérico", landing: "/ads/psicologo-online" };
  }
  return { theme: "Otros / revisar", landing: "/ads/psicologo-online" };
};

const isRelevant = (term: string) => {
  const n = normalize(term);
  if (!n || n.length < 3) return false;
  return !IRRELEVANT.some((needle) => n.includes(needle));
};

const fold = (a: AdsMetrics, b: AdsMetrics): AdsMetrics => ({
  clicks: a.clicks + b.clicks,
  impressions: a.impressions + b.impressions,
  cost_micros: a.cost_micros + b.cost_micros,
  conversions: a.conversions + b.conversions,
});

const scoreMetrics = (m: AdsMetrics) => {
  const cost = m.cost_micros / 1_000_000;
  const waste = m.conversions === 0 && m.clicks > 0 ? cost * 20 : 0;
  const convBonus = m.conversions * 55;
  return m.clicks * 4 + m.impressions * 0.12 + convBonus + waste;
};

const priorityFrom = (m: AdsMetrics): AdsLandingPriority => {
  if (m.conversions >= 1 && m.clicks >= 3) return "escalar";
  if (m.clicks >= 2 && m.conversions === 0) return "optimizar";
  return "preparar";
};

const priorityLabel: Record<AdsLandingPriority, string> = {
  escalar: "Escalar",
  optimizar: "Optimizar landing",
  preparar: "Preparar",
};

const landingTrafficFor = (adsLandings: AdsLandingRow[], path: string) => {
  const rows = adsLandings.filter((row) => row.path === path || row.url.includes(path));
  return rows.reduce(
    (acc, row) => fold(acc, row.metrics),
    { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 },
  );
};

const buildRationale = (
  priority: AdsLandingPriority,
  m: AdsMetrics,
  landingClicks: number,
  topTerm: string,
) => {
  const ctr = m.impressions > 0 ? ((m.clicks / m.impressions) * 100).toFixed(1) : "0";
  if (priority === "escalar") {
    return `${m.conversions} conv. con «${topTerm}» — landing dedicada para escalar lo que ya convierte.`;
  }
  if (priority === "optimizar") {
    return `${m.clicks} clics, CTR ${ctr}%, 0 conv. — alto volumen sin conversión; alinear landing y anuncio.`;
  }
  if (landingClicks === 0) {
    return `${m.impressions} imp., poco clic — landing en inventario sin tráfico paid aún.`;
  }
  return `Demanda emergente (${m.impressions} imp.) — validar mensaje en landing antes de subir puja.`;
};

export const buildLandingOpportunityRank = (input: {
  keywords: AdsKeywordRow[];
  searchTerms: AdsSearchTermRow[];
  adsLandings: AdsLandingRow[];
}): { byLanding: AdsLandingRankRow[]; topTerms: AdsTermRankRow[] } => {
  const terms: TermInput[] = [];

  for (const row of input.keywords) {
    if (!isRelevant(row.text)) continue;
    if (row.metrics.clicks === 0 && row.metrics.impressions === 0) continue;
    terms.push({ term: row.text, source: "keyword", metrics: row.metrics });
  }

  for (const row of input.searchTerms) {
    if (!isRelevant(row.term)) continue;
    if (row.metrics.clicks === 0 && row.metrics.impressions === 0) continue;
    terms.push({ term: row.term, source: "search_term", metrics: row.metrics });
  }

  const byLandingMap = new Map<
    string,
    {
      theme: string;
      landing: string;
      metrics: AdsMetrics;
      terms: Array<{ term: string; score: number }>;
    }
  >();

  const scoredTerms: AdsTermRankRow[] = [];

  for (const item of terms) {
    const { theme, landing } = classifyTerm(item.term);
    const score = scoreMetrics(item.metrics);
    const priority = priorityFrom(item.metrics);
    const ctr = item.metrics.impressions > 0 ? item.metrics.clicks / item.metrics.impressions : 0;

    scoredTerms.push({
      rank: 0,
      term: item.term,
      source: item.source,
      theme,
      suggestedLanding: landing,
      score,
      priority,
      metrics: item.metrics,
      ctr,
      rationale: buildRationale(priority, item.metrics, 0, item.term),
    });

    const bucket = byLandingMap.get(landing) ?? {
      theme,
      landing,
      metrics: { clicks: 0, impressions: 0, cost_micros: 0, conversions: 0 },
      terms: [],
    };
    bucket.metrics = fold(bucket.metrics, item.metrics);
    bucket.terms.push({ term: item.term, score });
    byLandingMap.set(landing, bucket);
  }

  const byLanding: AdsLandingRankRow[] = [...byLandingMap.values()]
    .map((bucket) => {
      const landingStats = landingTrafficFor(input.adsLandings, bucket.landing);
      const score = scoreMetrics(bucket.metrics);
      const priority = priorityFrom(bucket.metrics);
      const ctr = bucket.metrics.impressions > 0 ? bucket.metrics.clicks / bucket.metrics.impressions : 0;
      const cpa =
        bucket.metrics.conversions > 0
          ? bucket.metrics.cost_micros / 1_000_000 / bucket.metrics.conversions
          : null;
      const topTerms = [...bucket.terms]
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map((t) => t.term);
      const inInventory = ADS_LANDING_INVENTORY.includes(
        bucket.landing as (typeof ADS_LANDING_INVENTORY)[number],
      );
      const landingStatus: AdsLandingRankRow["landingStatus"] =
        landingStats.clicks > 0
          ? "recibe tráfico"
          : inInventory
            ? "en inventario"
            : "sin tráfico paid";

      return {
        rank: 0,
        theme: bucket.theme,
        suggestedLanding: bucket.landing,
        score,
        priority,
        metrics: bucket.metrics,
        ctr,
        cpa,
        landingClicks: landingStats.clicks,
        landingConversions: landingStats.conversions,
        landingStatus,
        topTerms,
        rationale: buildRationale(
          priority,
          bucket.metrics,
          landingStats.clicks,
          topTerms[0] ?? bucket.theme,
        ),
      };
    })
    .sort((a, b) => b.score - a.score)
    .map((row, index) => ({ ...row, rank: index + 1 }));

  const topTerms = scoredTerms
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((row, index) => ({ ...row, rank: index + 1 }));

  return { byLanding, topTerms };
};

export const landingPriorityLabel = (p: AdsLandingPriority) => priorityLabel[p];
