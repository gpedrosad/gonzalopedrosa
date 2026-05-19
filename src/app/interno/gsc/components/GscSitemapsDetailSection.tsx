import type { GscDashboardData, GscSitemapDashboardEntry } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";

function ContentsTable({ contents }: { contents: NonNullable<GscSitemapDashboardEntry["contents"]> }) {
  if (!contents.length) {
    return (
      <p style={{ fontSize: "0.8125rem", color: "#999", marginTop: "0.35rem" }}>
        Este feed no devolvió líneas dentro de{" "}
        <code style={{ fontSize: "0.76rem" }}>contents</code> al pedir{" "}
        <code style={{ fontSize: "0.76rem" }}>sitemaps.get</code> — puede ser normal según tipo de feed y permisos.
      </p>
    );
  }
  return (
    <div style={{ marginTop: "0.65rem", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
            {["Tipo de recurso", "Enviadas", "Indexadas"].map((h) => (
              <th key={h} style={{ padding: "0.35rem 0.5rem", color: "#666", fontWeight: 500 }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents.map((c, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f3f3f3" }}>
              <td style={{ padding: "0.35rem 0.5rem" }}>{c.type ?? "—"}</td>
              <td style={{ padding: "0.35rem 0.5rem" }}>{c.submitted ?? "—"}</td>
              <td style={{ padding: "0.35rem 0.5rem" }}>{c.indexed ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GscSitemapsDetailSection({ data }: { data: GscDashboardData }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Sitemaps XML · detalle enriquecido</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "1rem" }}>
          Cada entrada combina metadata de lista + payload detallado (cuando existe). Vigila valores <strong>errors</strong>{" "}
          y <strong>warnings</strong> distintos de cero, además del recuento de URLs indexadas reportado por recurso dentro de GSC cuando cae de golpe después de infra/cambios de plantilla.
          En entornos enterprise, un sitemap índice roto puede arrastrar descubrimiento de regiones completas.
        </p>
        {data.sitemaps.length === 0 ? (
          <p style={{ color: "#999", fontSize: "0.875rem" }}>No hay sitemaps declarados en API para esta propiedad.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.sitemaps.map((sm, idx) => (
              <li
                key={`${sm.path ?? idx}-${idx}`}
                style={{
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: 12,
                  marginBottom: "0.65rem",
                  fontSize: "0.875rem",
                  backgroundColor: "#fff",
                }}
              >
                <p style={{ fontWeight: 700, wordBreak: "break-all", marginBottom: "0.35rem" }}>{sm.path ?? "—"}</p>
                <p style={{ color: "#555", lineHeight: 1.55 }}>
                  Índice de sitemap: <strong>{sm.isSitemapsIndex == null ? "—" : sm.isSitemapsIndex ? "sí" : "no"}</strong>
                  {sm.type != null ? ` · Tipo: ${sm.type}` : ""}
                  {sm.isPending != null ? ` · Pendiente: ${sm.isPending ? "sí" : "no"}` : ""}
                </p>
                <p style={{ color: "#555", lineHeight: 1.55 }}>
                  Último envío: <strong>{sm.lastSubmitted ?? "—"}</strong>
                  {" · "}
                  Última descarga G: <strong>{sm.lastDownloaded ?? "—"}</strong>
                </p>
                <p style={{ color: "#555", lineHeight: 1.55 }}>
                  Errores: <strong>{sm.errors ?? 0}</strong>
                  {" · "}Advertencias: <strong>{sm.warnings ?? 0}</strong>
                </p>
                <ContentsTable contents={sm.contents ?? []} />
              </li>
            ))}
          </ul>
        )}
      </GscCard>
    </section>
  );
}
