import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo para Hombres en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en terapia para hombres en Chillán. Espacio seguro para hablar de emociones, relaciones, estrés y salud mental masculina.",
  alternates: {
    canonical: "/psicologo-hombres-chillan",
  },
  openGraph: {
    title: "Psicólogo para Hombres en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en terapia para hombres en Chillán. Espacio seguro para hablar de emociones, relaciones, estrés y salud mental masculina.",
    url: "https://gonzalopedrosa.cl/psicologo-hombres-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo para Hombres en Chillán",
    description: "Psicólogo especializado en terapia para hombres en Chillán. Espacio seguro para hablar de emociones, relaciones, estrés y salud mental masculina.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué un psicólogo &quot;para hombres&quot;?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No es que necesites algo diferente, sino que muchos hombres se sienten más cómodos sabiendo que el espacio entiende sus dificultades particulares para hablar de emociones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa en la primera sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversamos sobre qué te trae, qué esperas del proceso y definimos objetivos. No hay presión. Vas a tu ritmo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es confidencial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100%. Todo lo que conversamos está protegido por secreto profesional. Nadie se enterará de que vienes ni de lo que hablamos."
      }
    }
  ]
};

export default function PsicologoHombresChillanPage() {
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
        Psicólogo para Hombres en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Muchos hombres crecieron con el mensaje de que pedir ayuda es debilidad.
        La realidad es que reconocer que necesitas apoyo es un acto de fortaleza
        y responsabilidad.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Temas que trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dificultad para expresar o identificar emociones",
            "Estrés laboral y presión por el éxito",
            "Problemas de pareja y comunicación",
            "Ira, frustración o impulsividad",
            "Ansiedad o depresión no reconocida",
            "Crisis de identidad o propósito",
            "Paternidad y nuevos roles",
            "Adicciones o conductas de riesgo",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Un espacio sin juicio</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          No tienes que tener todo claro antes de venir. Muchos hombres llegan
          sin saber exactamente qué les pasa, solo sabiendo que algo no está
          bien. Eso es suficiente para empezar.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Mi enfoque
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Conversación directa y práctica",
            "Sin juzgar ni imponer lo que deberías sentir",
            "Herramientas concretas que puedes aplicar",
            "Trabajo en regulación emocional",
            "Espacio confidencial y seguro",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué un psicólogo &quot;para hombres&quot;?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No es que necesites algo diferente, sino que muchos hombres se
              sienten más cómodos sabiendo que el espacio entiende sus
              dificultades particulares para hablar de emociones.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Qué pasa en la primera sesión?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Conversamos sobre qué te trae, qué esperas del proceso y definimos
              objetivos. No hay presión. Vas a tu ritmo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es confidencial?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              100%. Todo lo que conversamos está protegido por secreto
              profesional. Nadie se enterará de que vienes ni de lo que hablamos.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Pedir ayuda es parte de ser fuerte
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Da el primer paso. Es más fácil de lo que parece.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Control de ira", href: "/terapia-control-ira-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Adicciones", href: "/psicologo-adicciones-chillan" },
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

