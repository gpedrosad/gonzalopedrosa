import type { GscDashboardData } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscDataTable } from "./GscDataTable";
import { GscSectionTitle } from "./GscSectionTitle";
import { analyticsRows } from "./gsc-table-rows";
import { fmt, pct } from "./gsc-format";

export function GscPerformanceSection({ data }: { data: GscDashboardData }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Rendimiento principal</GscSectionTitle>

      <GscDataTable
        title="Serie diaria"
        headers={["Fecha", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={analyticsRows(data.daily)}
      />

      <GscDataTable
        title="Consultas destacadas (top 50 en panel)"
        headers={["Consulta", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={analyticsRows(data.queries)}
      />

      <GscDataTable
        title="Páginas destacadas (top 50)"
        headers={["URL", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={analyticsRows(data.pages)}
      />

      <GscDataTable
        title="Dispositivo"
        headers={["Dispositivo", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={analyticsRows(data.devices)}
      />

      <GscDataTable
        title="País"
        headers={["País", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={analyticsRows(data.countries)}
      />

      <GscDataTable
        title="Aparición en búsqueda (dimension searchAppearance)"
        headers={["Tipo", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={analyticsRows(data.searchAppearance)}
      />

      <GscDataTable
        title="Consulta + URL (combinadas, top 25)"
        headers={["Consulta", "URL", "Clics", "Impresiones", "CTR", "Posición"]}
        rows={data.queryPageCombosTop25.map((row) => [
          row.keys[0] ?? "—",
          row.keys[1] ?? "—",
          fmt(row.clicks),
          fmt(row.impressions),
          pct(row.ctr),
          row.position.toFixed(1),
        ])}
      />

      <div style={{ marginBottom: "2rem" }}>
        <GscSectionTitle>Marca vs no marca (heurística del pipeline interno)</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "0.85rem" }}>
            Heurística basada en host de la propiedad y, si defines <code style={{ fontSize: "0.8rem" }}>GSC_BRAND_TERMS</code> en el entorno (CSV), sólo esos términos. Términos en uso:{" "}
            <strong>
              {data.appliedBrandTerms.length ? data.appliedBrandTerms.join(", ") : "(derivados del dominio)"}
            </strong>
            . La UI de GSC puede etiquetar distinto.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                  {["Segmento", "Clics", "Impresiones", "CTR med.", "Pos. med.", "Filas consultas"].map((h) => (
                    <th key={h} style={{ padding: "0.5rem 0.75rem", color: "#666", fontWeight: 500 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "0.5rem 0.75rem" }}>Marca</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{fmt(data.brandedSplit.branded.clicks)}</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>
                    {fmt(data.brandedSplit.branded.impressions)}
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{pct(data.brandedSplit.branded.ctr)}</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{data.brandedSplit.branded.position.toFixed(1)}</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{fmt(data.brandedSplit.queryRowCounts.branded)}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "0.5rem 0.75rem" }}>No marca</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{fmt(data.brandedSplit.nonBranded.clicks)}</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>
                    {fmt(data.brandedSplit.nonBranded.impressions)}
                  </td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{pct(data.brandedSplit.nonBranded.ctr)}</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{data.brandedSplit.nonBranded.position.toFixed(1)}</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>{fmt(data.brandedSplit.queryRowCounts.nonBranded)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GscCard>
      </div>

      <GscSectionTitle>AI Overviews y filtrado heurístico</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.75rem" }}>
          Google aún combina estos clics dentro del mismo bloque Performance; cuando quieras aproximar intenciones
          potencialmente “overview-heavy”, puedes filtrar en la UI usando la siguiente expresión regular sugerida en la skill (no es causal, sólo exploratory):
        </p>
        <pre
          style={{
            fontSize: "0.72rem",
            lineHeight: 1.45,
            padding: "0.85rem",
            background: "#fff",
            borderRadius: 10,
            border: "1px solid #e5e5e5",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {`(?i)^(who|what|where|when|why|how|which|is|are|can|does|should)|\\b(vs|versus|compare|difference|pros and cons|guide|tutorial|best|top|list)\\b`}
        </pre>
      </GscCard>

      <div style={{ marginTop: "1rem" }}>
        <GscSectionTitle>Experiencia: Core Web Vitals y Enhancements</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.45rem" }}>
            <strong>Core Web Vitals</strong> en GSC muestra URLs buenas / mejorables / malas agrupadas; prioriza móvil. Los gráficos de histórico acotados se benefician cuando exportas a planilla cada mes como recomienda el skill core-web-vitals.
          </p>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, margin: 0 }}>
            <strong>Enhancements</strong> separa estados inválidos frente a válidos con advertencias no bloqueantes; los listados siguen siendo muestrales — ante dudas, inspeccionar cada URL importante manualmente dentro de Experience → Enhancements antes de lanzar grandes refactors sobre schema-markup genéricos.
          </p>
        </GscCard>
      </div>
    </section>
  );
}
