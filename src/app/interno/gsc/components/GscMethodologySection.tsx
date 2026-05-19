import {
  CHART_READING_ROWS,
  INVESTIGATION_WORKFLOW_ES,
} from "@/lib/gsc-dashboard-copy";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";

export function GscMethodologySection() {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Análisis · lectura de gráficos · flujo de investigación</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.8125rem", fontWeight: 600, marginBottom: "0.65rem", color: "#444" }}>
          Buenas prácticas al leer gráficos (skill)
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                <th style={{ padding: "0.5rem 0.65rem", color: "#666", fontWeight: 500 }}>Práctica</th>
                <th style={{ padding: "0.5rem 0.65rem", color: "#666", fontWeight: 500 }}>Por qué importa</th>
              </tr>
            </thead>
            <tbody>
              {CHART_READING_ROWS.map(([practice, why]) => (
                <tr key={practice} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "0.55rem 0.65rem", fontWeight: 500 }}>{practice}</td>
                  <td style={{ padding: "0.55rem 0.65rem", color: "#555", lineHeight: 1.5 }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.8125rem", fontWeight: 600, color: "#444" }}>
          Flujo cuando algo se mueve
        </p>
        <ol style={{ margin: "0.35rem 0 0", paddingLeft: "1.2rem", color: "#555", fontSize: "0.875rem", lineHeight: 1.65 }}>
          {INVESTIGATION_WORKFLOW_ES.map((step, i) => (
            <li key={i} style={{ marginBottom: "0.35rem" }}>
              {step}
            </li>
          ))}
        </ol>
      </GscCard>
    </section>
  );
}
