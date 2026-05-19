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
        Interno · No indexable
      </p>

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "0.75rem",
        }}
      >
        Google Search Console · laboratorio interno
      </h1>

      <p style={{ color: "#666", marginBottom: "2rem", lineHeight: 1.6 }}>
        Cargando métricas desde Search Console. Esto puede tardar unos segundos si Google
        responde lento.
      </p>

      <section style={{ ...cardStyle, marginBottom: "1rem" }}>
        <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#333" }}>
          Preparando resumen ejecutivo
        </p>
        <p style={{ color: "#777", lineHeight: 1.6 }}>
          Estamos consultando rendimiento, CTR, sitemaps e inspecciones básicas.
        </p>
      </section>

      <section style={cardStyle}>
        <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#333" }}>
          Si esto queda colgado
        </p>
        <p style={{ color: "#777", lineHeight: 1.6 }}>
          Revisa credenciales, cuota de la API y la variable <code>GSC_SKIP_URL_INSPECTION</code>.
        </p>
      </section>
    </main>
  );
}
