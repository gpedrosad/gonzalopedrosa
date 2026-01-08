import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Superar Trauma de Infancia en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Psicólogo para superar traumas de infancia en Chillán. Terapia para sanar heridas del pasado que afectan tu presente.",
  alternates: {
    canonical: "/superar-trauma-infancia-chillan",
  },
  openGraph: {
    title: "Superar Trauma de Infancia en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Psicólogo para superar traumas de infancia en Chillán. Terapia para sanar heridas del pasado que afectan tu presente.",
    url: "https://gonzalopedrosa.cl/superar-trauma-infancia-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superar Trauma de Infancia en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Psicólogo para superar traumas de infancia en Chillán. Terapia para sanar heridas del pasado que afectan tu presente.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es posible superar un trauma de la infancia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. No significa olvidar, sino integrar la experiencia de forma que deje de controlar tu vida. Muchas personas logran cambios profundos con terapia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tengo que recordar todo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Trabajamos con lo que está presente ahora. No es necesario recuperar recuerdos perdidos. Respetamos tu proceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de la complejidad del trauma. Es un proceso más largo que otros, pero los cambios son profundos y duraderos."
      }
    }
  ]
};

export default function SuperarTraumaInfanciaChillanPage() {
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
        Superar Trauma de Infancia en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Las experiencias difíciles de la infancia pueden seguir afectándote en
        la adultez. La terapia te ayuda a procesar el pasado para vivir mejor
        el presente.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Tipos de trauma infantil
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Negligencia o abandono emocional",
            "Maltrato físico o psicológico",
            "Abuso sexual",
            "Violencia intrafamiliar",
            "Pérdida de un padre o cuidador",
            "Padres con adicciones o enfermedades mentales",
            "Bullying severo",
            "Cambios traumáticos (divorcios, mudanzas, accidentes)",
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
          Cómo se manifiesta en adultos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dificultad en relaciones (apego inseguro)",
            "Baja autoestima y autocrítica excesiva",
            "Ansiedad o depresión recurrente",
            "Problemas de confianza",
            "Patrones repetitivos en relaciones",
            "Dificultad para regular emociones",
            "Sensación de vacío o desconexión",
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
          El proceso de sanación
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Entender cómo el pasado afecta tu presente",
            "Validar tus experiencias y emociones",
            "Procesar recuerdos dolorosos de forma segura",
            "Cambiar creencias negativas sobre ti mismo/a",
            "Desarrollar un apego más seguro",
            "Construir una narrativa integradora de tu historia",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es posible superar un trauma de la infancia?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. No significa olvidar, sino integrar la experiencia de forma
              que deje de controlar tu vida. Muchas personas logran cambios
              profundos con terapia.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tengo que recordar todo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. Trabajamos con lo que está presente ahora. No es necesario
              recuperar recuerdos perdidos. Respetamos tu proceso.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo toma?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Depende de la complejidad del trauma. Es un proceso más largo que
              otros, pero los cambios son profundos y duraderos.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Tu pasado no define tu futuro
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Es posible sanar y construir una vida diferente.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Abuso sexual", href: "/psicologo-abuso-sexual-chillan" },
            { label: "TEPT", href: "/estres-postraumatico-chillan" },
            { label: "Apego", href: "/psicologo-apego-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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




