/**
 * Texto estático (español) alineado a la skill google-search-console para la UI interna.
 */

export const GSC_API_LIMITS_ES = {
  rowsPerDayPerProperty: 50_000,
  rowsPerResponse: 25_000,
  dataLagDays: "2–3",
} as const;

export const GSC_INSIGHTS_UI_COPY = {
  trendingNote:
    "En Search Console, Insights etiqueta tarjetas con tendencias vs el período anterior. Aquí proyectamos métricas similares con reglas algo más estrictas que un simple Δ de clics.",
  placeholderUpQuery: "consultas informativas largas tipo “cómo…” que ganan cobertura",
  placeholderDownQuery: "consultas estacionales o afectadas por cambios recientes en título/meta",
} as const;

export const CHART_READING_ROWS: [string, string][] = [
  ["Enfoca una métrica a las vez", "En barras apiladas se pierden fluctuaciones; apaga métricas extra."],
  ["No compares solo dos puntos", "Fin de mes vs mes anterior puede esconder picos intermedios."],
  ["Ve más allá del top 10", "Pagina/exporta cuando el problema esté oculto en colas largas."],
  ["Captura pantallas / export", "Histórico de GSC es limitado; guarda snapshots y correla con releases."],
];

export const INVESTIGATION_WORKFLOW_ES = [
  "Localiza fecha en que cambió la métrica.",
  "Correlaciona releases, CMS, mantenimiento, terceros.",
  "Decide si investigas, corrige, observas u omites.",
  "Escala a producto/engineering si sospechas causa técnica.",
];
