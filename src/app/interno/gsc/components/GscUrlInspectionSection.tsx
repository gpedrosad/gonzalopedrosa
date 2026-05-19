import type { GscDashboardData } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";

export function GscUrlInspectionSection({ data }: { data: GscDashboardData }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Inspección de URL · muestra automática</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "0.85rem" }}>
          Cuota de la API de inspección es limitada; este dashboard toma pocas URLs (home,
          agenda y top rendimiento cuando aplica). Útil para verificar canonizales y cobertura alineados
          a la skill (“URL está en Google”, incidencias, etc.).
        </p>
        {data.urlInspectionSamples.length === 0 ? (
          <p style={{ color: "#999", fontSize: "0.875rem" }}>
            Muestra vacía (<code style={{ fontSize: "0.8rem" }}>GSC_SKIP_URL_INSPECTION=1</code> o cuota/error).
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.urlInspectionSamples.map((row) => (
              <li
                key={row.inspectionUrl}
                style={{
                  padding: "0.85rem 0",
                  borderBottom: "1px solid #eee",
                  fontSize: "0.84rem",
                }}
              >
                <p style={{ fontWeight: 600, wordBreak: "break-all", marginBottom: "0.35rem" }}>
                  {row.inspectionUrl}
                </p>
                {row.error ? (
                  <p style={{ color: "#b00020" }}>Error: {row.error}</p>
                ) : (
                  <>
                    <p style={{ color: "#444" }}>
                      Índice: <strong>{row.indexVerdict ?? "—"}</strong>
                      {" · Cobertura: "}
                      <strong>{row.coverageState ?? "—"}</strong>
                      {" · Rastreo: "}
                      <strong>{row.pageFetchState ?? "—"}</strong>
                    </p>
                    <p style={{ color: "#666", marginTop: "0.25rem" }}>
                      Canónico usuario: {row.userCanonical ?? "—"}
                      <br />
                      Canónico Google: {row.googleCanonical ?? "—"}
                    </p>
                    {row.inspectionResultLink ? (
                      <p style={{ marginTop: "0.35rem" }}>
                        <a href={row.inspectionResultLink} style={{ color: "#1565c0" }} target="_blank" rel="noreferrer">
                          Abrir resultado en Search Console ↗
                        </a>
                      </p>
                    ) : null}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </GscCard>
    </section>
  );
}
