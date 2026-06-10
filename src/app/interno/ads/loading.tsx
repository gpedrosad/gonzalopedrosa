const shellStyle = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

const cardStyle = {
  padding: "1.25rem",
  backgroundColor: "#fafafa",
  borderRadius: 12,
  border: "1px solid #eaeaea",
} as const;

export default function Loading() {
  return (
    <main style={shellStyle}>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#999",
          marginBottom: "0.5rem",
        }}
      >
        Interno · No indexable · Solo paid
      </p>

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "0.75rem",
        }}
      >
        Google Ads · laboratorio interno
      </h1>

      <p style={{ color: "#666", marginBottom: "2rem", lineHeight: 1.6 }}>
        Cargando métricas desde Google Ads API. Puede tardar unos segundos.
      </p>

      <section style={{ ...cardStyle, marginBottom: "1rem" }}>
        <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#333" }}>
          Consultando campañas, keywords y landings
        </p>
        <p style={{ color: "#777", lineHeight: 1.6 }}>
          Incluye buckets /ads/* vs sitelinks, search terms y comparación con periodo anterior.
        </p>
      </section>
    </main>
  );
}
