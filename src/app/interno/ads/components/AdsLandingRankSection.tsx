import type { AdsDashboardData } from "@/lib/google-ads";
import { landingPriorityLabel } from "@/lib/google-ads-landing-rank";

import { GscCard } from "../../gsc/components/GscCard";
import { GscDataTable } from "../../gsc/components/GscDataTable";
import { GscSectionTitle } from "../../gsc/components/GscSectionTitle";

import { cpaLabel, fmt, money, pct } from "./ads-format";

const priorityColor: Record<string, string> = {
  escalar: "#1a7f37",
  optimizar: "#b45309",
  preparar: "#666",
};

export function AdsLandingRankSection({ data }: { data: AdsDashboardData }) {
  const { byLanding, topTerms } = data.landingRank;

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Ranking · landings a potenciar</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.9375rem", color: "#333", lineHeight: 1.65, margin: 0 }}>
          Cruce de <strong>keywords de puja</strong> y <strong>search terms reales</strong> del periodo.
          Prioriza dónde conviene una landing dedicada en <code>/ads/*</code>: escalar lo que ya convierte,
          optimizar lo que gasta sin conversión, o preparar demanda con impresiones.
        </p>
        <p style={{ fontSize: "0.8125rem", color: "#888", marginTop: "0.75rem", marginBottom: 0 }}>
          Score = volumen + conversiones + penalización por gasto sin conv. Términos irrelevantes (sexología,
          familia, EMDR, etc.) excluidos.
        </p>
      </GscCard>

      <div style={{ marginTop: "1rem" }}>
        <GscDataTable
          title="Por landing sugerida (ranking principal)"
          headers={[
            "#",
            "Intención",
            "Landing /ads/*",
            "Prioridad",
            "Clics",
            "Imp.",
            "Conv.",
            "CPA",
            "Tráfico landing",
            "Términos top",
            "Por qué",
          ]}
          rows={byLanding.map((row) => [
            String(row.rank),
            row.theme,
            row.suggestedLanding,
            landingPriorityLabel(row.priority),
            fmt(row.metrics.clicks),
            fmt(row.metrics.impressions),
            fmt(row.metrics.conversions, 1),
            cpaLabel(row.cpa, data.currency),
            row.landingClicks > 0
              ? `${row.landingClicks} clics · ${fmt(row.landingConversions, 1)} conv.`
              : row.landingStatus,
            row.topTerms.join(" · "),
            row.rationale,
          ])}
        />
      </div>

      {byLanding.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          {byLanding.slice(0, 3).map((row) => (
            <GscCard key={row.suggestedLanding}>
              <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                #{row.rank} · {landingPriorityLabel(row.priority)}
              </p>
              <p style={{ fontWeight: 700, marginBottom: "0.35rem", fontSize: "0.95rem" }}>
                {row.theme}
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#666", marginBottom: "0.5rem" }}>
                <code>{row.suggestedLanding}</code>
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: priorityColor[row.priority] ?? "#444",
                  fontWeight: 600,
                  marginBottom: "0.35rem",
                }}
              >
                {fmt(row.metrics.clicks)} clics · {fmt(row.metrics.conversions, 1)} conv. · CTR{" "}
                {pct(row.ctr)}
              </p>
              <p style={{ fontSize: "0.78rem", color: "#777", lineHeight: 1.5, margin: 0 }}>
                {row.rationale}
              </p>
            </GscCard>
          ))}
        </div>
      ) : null}

      <div style={{ marginTop: "1.5rem" }}>
        <GscDataTable
          title="Términos individuales (top 20)"
          headers={[
            "#",
            "Término",
            "Fuente",
            "Landing",
            "Prioridad",
            "Clics",
            "Imp.",
            "CTR",
            "Conv.",
            "Costo",
          ]}
          rows={topTerms.map((row) => [
            String(row.rank),
            row.term,
            row.source === "keyword" ? "Keyword" : "Search term",
            row.suggestedLanding,
            landingPriorityLabel(row.priority),
            fmt(row.metrics.clicks),
            fmt(row.metrics.impressions),
            pct(row.ctr),
            fmt(row.metrics.conversions, 1),
            money(row.metrics.cost_micros, data.currency),
          ])}
        />
      </div>
    </section>
  );
}
