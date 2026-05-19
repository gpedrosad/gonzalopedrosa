import { GSC_API_LIMITS_ES } from "@/lib/gsc-dashboard-copy";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";
import { MonthlyAuditChecklist } from "./MonthlyAuditChecklist";

export function GscIndexingSection() {
  return (
    <>
      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>API de Search Console · límites útiles</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "0.85rem" }}>
            Método principal: <code style={{ fontSize: "0.82rem" }}>searchanalytics.query</code>.
            Sugerencias de optimización desde la skill: compresión gzip, parámetro{" "}
            <code style={{ fontSize: "0.82rem" }}>fields</code> para respuestas parciales y paginación (
            <code style={{ fontSize: "0.82rem" }}>startRow</code>, <code style={{ fontSize: "0.82rem" }}>rowLimit</code>).
            Los datos suelen ir con {GSC_API_LIMITS_ES.dataLagDays} días de retraso.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                  {["Límite", "Valor"].map((h) => (
                    <th key={h} style={{ padding: "0.5rem 0.75rem", color: "#666", fontWeight: 500 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "0.5rem 0.75rem" }}>Filas por día / tipo de búsqueda / propiedad</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>
                    {GSC_API_LIMITS_ES.rowsPerDayPerProperty.toLocaleString("es-CL")}
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "0.5rem 0.75rem" }}>Filas por respuesta (paginar si hace falta)</td>
                  <td style={{ padding: "0.5rem 0.75rem" }}>
                    {GSC_API_LIMITS_ES.rowsPerResponse.toLocaleString("es-CL")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </GscCard>
      </section>

      <MonthlyAuditChecklist />

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Indexación · cobertura · noindex · redirecciones</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.75rem" }}>
            <strong>Vistas complementarias:</strong> “Indexadas” y “No indexadas” se entienden mejor mirando cada
            vista por separado en la UI oficial.
          </p>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.75rem" }}>
            No todo lo no indexado es un error de SEO: páginas de cuenta, checkout, previews o contenido muy delgado
            suelen estar <strong>noindex</strong> por diseño — audita sólo cuando las URLs monetizables aparecen fuera sin motivo documentado.
            Indexadas y no indexadas coexisten dentro de una misma marca (robots vs sitemap / enlaces siguen funcionando entre ellas según configuración técnica).
          </p>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0.75rem" }}>
            Patrones recurrentes cuando las URLs “no están en Google”: duplicidad y canonicalización, etiquetas{" "}
            <strong>noindex</strong>, errores en cadenas de redirección, errores servidor 5xx, 404 verdaderos, bloques en{" "}
            <strong>robots.txt</strong> o URLs descubiertas/rastreadas pero dejadas sin indexación por calidad/señal débil según Google.
          </p>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65, marginBottom: "0" }}>
            Para priorizar enfoque cuando el tiempo es limitado, sigue las columnas/tendencias dentro de Coverage: si una causa clave apenas se mueve, invierte segundos; si la tendencia se rompe abruptamente después de releases, revisa patrones repetidos antes de caso a caso (“descubierta pero no indexada”, “canonical alternativo seleccionado”, etc.).
          </p>
        </GscCard>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Enlaces y desautorización</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.65 }}>
            El informe de <strong>Enlaces</strong> resume enlaces de referencia distribuidos por URL;
            usa el archivo <strong>disavow</strong> solo cuando el riesgo de enlaces manipuladores lo justifique (skills de backlinks). Excesos de bloqueos artificiales debilitan señales legítimos.
          </p>
        </GscCard>
      </section>
    </>
  );
}
