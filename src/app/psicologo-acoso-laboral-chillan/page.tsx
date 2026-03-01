import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Acoso Laboral en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para víctimas de acoso laboral (mobbing) en Chillán. Apoyo psicológico para superar el trauma y recuperar tu bienestar.",
  alternates: {
    canonical: "/psicologo-acoso-laboral-chillan",
  },
  openGraph: {
    title: "Psicólogo Acoso Laboral en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para víctimas de acoso laboral (mobbing) en Chillán. Apoyo psicológico para superar el trauma y recuperar tu bienestar.",
    url: "https://www.gonzalopedrosa.cl/psicologo-acoso-laboral-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Acoso Laboral en Chillán",
    description: "Psicólogo para víctimas de acoso laboral (mobbing) en Chillán. Apoyo psicológico para superar el trauma y recuperar tu bienestar.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo sé si es acoso o solo un mal jefe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acoso es sistemático, sostenido en el tiempo y dirigido a dañarte. Un mal jefe puede ser difícil pero no necesariamente busca destruirte. En terapia lo exploramos juntos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Debería renunciar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una decisión personal compleja. En terapia te ayudo a evaluar opciones (quedarte, denunciar, irte) y sus consecuencias, sin presionarte en ninguna dirección."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo superar esto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El acoso laboral deja secuelas, pero con tratamiento adecuado puedes recuperarte y volver a confiar en ti y en ambientes laborales."
      }
    }
  ]
};

export default function PsicologoAcosoLaboralChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={64} height={64} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Chillán, Chile</p>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo Acoso Laboral en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El acoso laboral (mobbing) puede destruir tu salud mental, autoestima y
        carrera. La terapia te ayuda a procesar lo vivido, recuperarte y tomar
        las mejores decisiones.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Formas de acoso laboral
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Humillaciones públicas o privadas",
            "Aislamiento y exclusión del equipo",
            "Sobrecarga de trabajo imposible o quitarte funciones",
            "Críticas constantes e injustificadas",
            "Rumores y desprestigio",
            "Amenazas veladas o explícitas",
            "Bloquear tu desarrollo profesional",
            "Ignorarte sistemáticamente",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Consecuencias psicológicas
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Ansiedad y ataques de pánico",
            "Depresión",
            "Pérdida de autoestima y confianza",
            "Problemas de sueño",
            "Aislamiento social",
            "Dudas sobre tu propia percepción",
            "Síntomas de estrés postraumático",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Cómo te puedo ayudar
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Validar tu experiencia (no estás loco/a)",
            "Procesar el trauma del acoso",
            "Reconstruir tu autoestima",
            "Manejar la ansiedad y otros síntomas",
            "Tomar decisiones informadas sobre tu situación",
            "Prepararte para procesos legales si decides denunciar",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Tus derechos</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El acoso laboral está penalizado en Chile. Si necesitas orientación
          legal, puedo emitir un{" "}
          <Link href="/informe-psicologico-chillan" style={{ color: "#0369a1", textDecoration: "underline" }}>
            informe psicológico
          </Link>{" "}
          que documente las consecuencias.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cómo sé si es acoso o solo un mal jefe?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El acoso es sistemático, sostenido en el tiempo y dirigido a
              dañarte. Un mal jefe puede ser difícil pero no necesariamente
              busca destruirte. En terapia lo exploramos juntos.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Debería renunciar?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es una decisión personal compleja. En terapia te ayudo a
              evaluar opciones (quedarte, denunciar, irte) y sus consecuencias,
              sin presionarte en ninguna dirección.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puedo superar esto?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. El acoso laboral deja secuelas, pero con tratamiento adecuado
              puedes recuperarte y volver a confiar en ti y en ambientes
              laborales.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          No tienes que aguantar esto
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Lo que te pasa es real y mereces apoyo.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Burnout", href: "/tratamiento-burnout-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
    </>
  );
}




