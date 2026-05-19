import type { GscDashboardData } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";
import { deltaPct, fmt, pct } from "./gsc-format";

export function GscExecutiveSummary({ data }: { data: GscDashboardData }) {
  const kpis = [
    {
      label: "Clics",
      value: fmt(data.summary.clicks),
      change: deltaPct(data.summary.clicks, data.previousSummary.clicks),
      hint: "Tráfico desde resultados estándar (no aisla AI Overview).",
    },
    {
      label: "Impresiones",
      value: fmt(data.summary.impressions),
      change: deltaPct(data.summary.impressions, data.previousSummary.impressions),
      hint: "Visibilidad aproximada en SERPs.",
    },
    {
      label: "CTR medio",
      value: pct(data.summary.ctr),
      change: deltaPct(data.summary.ctr, data.previousSummary.ctr),
      hint: "Clics / impresiones agregadas (no igual a CTR micro por URL).",
    },
    {
      label: "Posición media ponderada",
      value: data.summary.position.toFixed(1),
      change: deltaPct(data.previousSummary.position, data.summary.position),
      hint: "Delta usando (pos_anterior − pos_actual) / pos_actual: positivos suelen correlacionar con mejora al bajar número.",
    },
  ];

  const clickDeltaPhrase =
    data.summary.clicks >= data.previousSummary.clicks ? "incrementan" : "caen";

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Resumen ejecutivo</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.9375rem", color: "#333", lineHeight: 1.65, marginBottom: "1rem" }}>
          Entre <strong>{data.period.start}</strong> y <strong>{data.period.end}</strong> ({data.period.days} días) frente a{" "}
          <strong>{data.previousPeriod.start}</strong> → <strong>{data.previousPeriod.end}</strong>, los clics totales{" "}
          {clickDeltaPhrase} un <strong>{deltaPct(data.summary.clicks, data.previousSummary.clicks)}</strong> y las impresiones{" "}
          <strong>{deltaPct(data.summary.impressions, data.previousSummary.impressions)}</strong>.
          {data.lowCtrOpportunities.length > 0
            ? " Detectamos URLs con benchmark inferior al CTR esperado para su posición — prioriza la sección CTR abajo."
            : " No hay filas que superen el umbral automático de oportunidad CTR en este corte."}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "#777", lineHeight: 1.5 }}>
          Recuerda combinar tendencias con contexto externo: fechas de release, migraciones, experimentos de título o canonicals, y validar en la UI completa de GSC para diagnósticos finos.
        </p>
      </GscCard>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "0.75rem",
          marginTop: "1rem",
        }}
      >
        {kpis.map((card) => (
          <GscCard key={card.label}>
            <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>{card.label}</p>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>{card.value}</p>
            <p style={{ fontSize: "0.8125rem", color: "#666" }}>vs anterior: {card.change}</p>
            <p style={{ fontSize: "0.72rem", color: "#aaa", marginTop: "0.35rem" }}>{card.hint}</p>
          </GscCard>
        ))}
      </div>
    </section>
  );
}
