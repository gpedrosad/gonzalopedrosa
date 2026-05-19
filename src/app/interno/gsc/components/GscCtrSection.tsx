import type { GscDashboardData } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";
import { fmt, pct } from "./gsc-format";

export function GscCtrSection({ data }: { data: GscDashboardData }) {
  const benchmarks: string[][] = [
    ["1", "25–35 %", "~19 %"],
    ["2", "12–18 %", "~12 %"],
    ["3", "8–12 %", "~7 %"],
    ["4–5", "5–7 %", "~5 %"],
    ["6–10", "2–5 %", "2–5 %"],
  ];

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Análisis de CTR · benchmarks y huecos</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "1rem" }}>
          Tabla cualitativa de la skill: úsala como benchmark relativo porque fragmentos SERP avanzados (incluyendo
          resultados que satisfacen intención sin clic) modifican el CTR observado.
          El pipeline local usa interpolación desde la librería de análisis para estimar CTR esperado antes de destacar huecos grandes.
          Rich results habitualmente muestran +10–20 % más de CTR frente a sólo enlaces estándar cuando hay confianza y relevancia.
        </p>
        <div style={{ overflowX: "auto", border: "1px solid #eaeaea", borderRadius: 12 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                {[
                  "Posición agregada",
                  "CTR esperado (baseline textual skill)",
                  "Con AI Overviews (orden de magnitud menor)",
                ].map((h) => (
                  <th key={h} style={{ padding: "0.5rem 0.75rem", color: "#666", fontWeight: 500 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((row) => (
                <tr key={row[0]} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: "0.5rem 0.75rem" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GscCard>

      <div style={{ marginTop: "1rem" }}>
        <GscCard>
          <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#444", marginBottom: "0.75rem" }}>
            URLs con CTR inferior al modelo interpolado por posición
          </p>
          {data.lowCtrOpportunities.length === 0 ? (
            <p style={{ fontSize: "0.875rem", color: "#999" }}>
              No hay páginas con impresiones mínimas, posiciones accesibles y brecha suficientemente grande en este período.
            </p>
          ) : (
            <>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                      {[
                        "URL",
                        "Impresiones",
                        "Clics",
                        "CTR real",
                        "Pos.",
                        "CTR modelo",
                        "Brecha",
                        "Clics potenciales*",
                        "Acción recomendada",
                      ].map((h) => (
                        <th key={h} style={{ padding: "0.45rem 0.5rem", color: "#666", fontWeight: 500 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.lowCtrOpportunities.slice(0, 15).map((op) => (
                      <tr key={op.page} style={{ borderBottom: "1px solid #f0f0f0" }}>
                        <td style={{ padding: "0.45rem 0.5rem", wordBreak: "break-all", maxWidth: 220 }}>{op.page}</td>
                        <td style={{ padding: "0.45rem 0.5rem" }}>{fmt(op.impressions)}</td>
                        <td style={{ padding: "0.45rem 0.5rem" }}>{fmt(op.clicks)}</td>
                        <td style={{ padding: "0.45rem 0.5rem" }}>{pct(op.actualCtr)}</td>
                        <td style={{ padding: "0.45rem 0.5rem" }}>{op.position.toFixed(1)}</td>
                        <td style={{ padding: "0.45rem 0.5rem" }}>{pct(op.expectedCtr)}</td>
                        <td style={{ padding: "0.45rem 0.5rem", fontWeight: 600 }}>{pct(op.gap)}</td>
                        <td style={{ padding: "0.45rem 0.5rem" }}>{fmt(Math.round(op.upliftPotential))}</td>
                        <td style={{ padding: "0.45rem 0.5rem", color: "#444", lineHeight: 1.45, maxWidth: 280 }}>
                          Reescribir título y meta descripción con intención SERP alineada (skills title-tag /
                          meta-description); validar fragmento en vivo y añadir datos estructurados sólo si reflejan el contenido real.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: "0.72rem", color: "#999", marginTop: "0.75rem", lineHeight: 1.45 }}>
                *Potencial estimado (impresiones × brecha de CTR) si el snippet alcanzara el CTR modelo; no proyecta impacto de
                cambios algorítmicos ni competencia dinámica.
              </p>
            </>
          )}
        </GscCard>
      </div>
    </section>
  );
}
