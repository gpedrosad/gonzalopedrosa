import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Toma de Decisiones en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para ayudarte a tomar decisiones difíciles en Chillán. Terapia para clarificar opciones, superar la parálisis y decidir con confianza.",
  alternates: {
    canonical: "/psicologo-toma-decisiones-chillan",
  },
  openGraph: {
    title: "Psicólogo Toma de Decisiones en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para ayudarte a tomar decisiones difíciles en Chillán. Terapia para clarificar opciones, superar la parálisis y decidir con confianza.",
    url: "https://www.gonzalopedrosa.cl/psicologo-toma-decisiones-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Toma de Decisiones en Chillán",
    description: "Psicólogo para ayudarte a tomar decisiones difíciles en Chillán. Terapia para clarificar opciones, superar la parálisis y decidir con confianza.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué no puedo simplemente decidir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las decisiones difíciles suelen involucrar emociones intensas, miedos al error, conflictos de valores o presiones externas. Todo eso dificulta la claridad mental."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas sesiones necesito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de la complejidad. A veces basta con pocas sesiones para ganar claridad. Otras veces hay que trabajar más a fondo lo que subyace."
      }
    },
    {
      "@type": "Question",
      "name": "¿Y si después me arrepiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El miedo al arrepentimiento es uno de los bloqueos más comunes. Trabajamos eso: tomar buenas decisiones con la información disponible y aceptar la incertidumbre."
      }
    }
  ]
};

export default function PsicologoTomaDecisionesChillanPage() {
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
        Psicólogo Toma de Decisiones en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Hay momentos en la vida donde las decisiones se sienten imposibles.
        La terapia te ayuda a clarificar lo que realmente quieres y a decidir
        con más seguridad.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Decisiones que generan bloqueo
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Terminar o continuar una relación",
            "Cambiar o dejar un trabajo",
            "Mudarse a otra ciudad o país",
            "Tener o no tener hijos",
            "Elegir una carrera o cambio profesional",
            "Decisiones sobre cuidado de padres mayores",
            "Operarse o no (cirugías electivas)",
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
          Cómo te puedo ayudar
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Clarificar tus valores y prioridades reales",
            "Identificar miedos que distorsionan tu juicio",
            "Separar lo que tú quieres de lo que otros esperan",
            "Trabajar la tolerancia a la incertidumbre",
            "Reducir la parálisis por análisis",
            "Aceptar que toda decisión implica renuncias",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Importante</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          No te voy a decir qué decidir. Mi rol es ayudarte a encontrar claridad
          para que tomes TU decisión, la que sea correcta para ti.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué no puedo simplemente decidir?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Las decisiones difíciles suelen involucrar emociones intensas,
              miedos al error, conflictos de valores o presiones externas.
              Todo eso dificulta la claridad mental.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuántas sesiones necesito?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Depende de la complejidad. A veces basta con pocas sesiones
              para ganar claridad. Otras veces hay que trabajar más a fondo
              lo que subyace.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Y si después me arrepiento?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El miedo al arrepentimiento es uno de los bloqueos más comunes.
              Trabajamos eso: tomar buenas decisiones con la información
              disponible y aceptar la incertidumbre.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Encuentra tu claridad
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Deja de dar vueltas. Conversemos.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Crisis vital", href: "/psicologo-crisis-vital-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Burnout", href: "/tratamiento-burnout-chillan" },
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




