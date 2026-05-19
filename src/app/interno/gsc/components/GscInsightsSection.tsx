import { GSC_INSIGHTS_UI_COPY } from "@/lib/gsc-dashboard-copy";
import type { GscDashboardInsights } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";
import { fmt } from "./gsc-format";

function TrendBlock({
  title,
  rows,
}: {
  title: string;
  rows: import("@/lib/gsc-analysis").TrendItem[];
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#444", marginBottom: "0.45rem" }}>{title}</p>
      {rows.length === 0 ? (
        <p style={{ fontSize: "0.875rem", color: "#999", lineHeight: 1.55 }}>
          Sin filas en este período. {GSC_INSIGHTS_UI_COPY.trendingNote}
          <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.8125rem" }}>
            Placeholder ejemplo alza: {GSC_INSIGHTS_UI_COPY.placeholderUpQuery}.
            <br />
            Placeholder caída: {GSC_INSIGHTS_UI_COPY.placeholderDownQuery}.
          </span>
        </p>
      ) : (
        <div style={{ overflowX: "auto", border: "1px solid #eaeaea", borderRadius: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                {["Clave", "Clics actuales", "Clics previos", "Δ clics"].map((h) => (
                  <th key={h} style={{ padding: "0.5rem 0.65rem", color: "#666", fontWeight: 500 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={{ padding: "0.5rem 0.65rem", wordBreak: "break-word", maxWidth: 340 }}>{row.key}</td>
                  <td style={{ padding: "0.5rem 0.65rem" }}>{fmt(row.currentClicks)}</td>
                  <td style={{ padding: "0.5rem 0.65rem" }}>{fmt(row.previousClicks)}</td>
                  <td style={{ padding: "0.5rem 0.65rem", fontWeight: 600 }}>
                    {row.deltaClicks > 0 ? "+" : ""}
                    {fmt(row.deltaClicks)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function GscInsightsSection({ insights }: { insights: GscDashboardInsights }) {
  const rowCount =
    insights.trendingUpQueries.length +
    insights.trendingDownQueries.length +
    insights.trendingUpPages.length +
    insights.trendingDownPages.length;
  const anyTrend = rowCount > 0;

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Insights · tendencias proyectadas</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "1rem" }}>
          Tomamos grandes tablas keyed del mismo período y del previo, aplicamos reglas inspiradas en las tarjetas de
          Search Console Insights (no es un espejo exacto de la UI). Las filas “top” se cruzan con volumen reciente de clics.
          {!anyTrend ? (
            <span style={{ display: "block", marginTop: "0.5rem", color: "#777" }}>
              {GSC_INSIGHTS_UI_COPY.trendingNote}
            </span>
          ) : null}
        </p>
        <TrendBlock title="Consultas · en alza" rows={insights.trendingUpQueries} />
        <TrendBlock title="Consultas · en baja" rows={insights.trendingDownQueries} />
        <TrendBlock title="Páginas · en alza" rows={insights.trendingUpPages} />
        <TrendBlock title="Páginas · en baja" rows={insights.trendingDownPages} />
      </GscCard>
    </section>
  );
}
