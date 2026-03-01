import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo TDAH Adulto en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en TDAH adulto en Chillán. Evaluación y estrategias para manejar la desatención, impulsividad y mejorar tu productividad.",
  alternates: {
    canonical: "/psicologo-tdah-adulto-chillan",
  },
  openGraph: {
    title: "Psicólogo TDAH Adulto en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en TDAH adulto en Chillán. Evaluación y estrategias para manejar la desatención, impulsividad y mejorar tu productividad.",
    url: "https://www.gonzalopedrosa.cl/psicologo-tdah-adulto-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo TDAH Adulto en Chillán",
    description: "Psicólogo especializado en TDAH adulto en Chillán. Evaluación y estrategias para manejar la desatención, impulsividad y mejorar tu productividad.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo tener TDAH si no me lo diagnosticaron de niño?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Muchos adultos descubren su TDAH tarde, especialmente quienes compensaron bien o tienen el tipo predominantemente inatento (sin hiperactividad visible)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito medicación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del caso. La medicación la evalúa un psiquiatra. La terapia es complementaria y trabaja estrategias conductuales que son fundamentales con o sin medicación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es lo mismo que ser distraído?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El TDAH es un trastorno neurobiológico que afecta funciones ejecutivas. Todos nos distraemos, pero en el TDAH es un patrón persistente que impacta significativamente la vida."
      }
    }
  ]
};

export default function PsicologoTdahAdultoChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={56} height={56} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.125rem" }}>Chillán, Chile</p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
        </div>
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo TDAH Adulto en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El TDAH en adultos suele pasar desapercibido. Si sientes que siempre has
        funcionado &quot;diferente&quot;, que te cuesta concentrarte o terminar proyectos,
        podemos explorarlo juntos.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales de TDAH en adultos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dificultad para mantener la atención en tareas",
            "Procrastinación crónica",
            "Problemas de organización y planificación",
            "Olvidos frecuentes de citas o compromisos",
            "Impulsividad en decisiones o gastos",
            "Dificultad para terminar proyectos",
            "Sensación de inquietud o necesidad de movimiento",
            "Problemas para regular emociones",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Importante</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El diagnóstico formal de TDAH requiere evaluación psiquiátrica. Como
          psicólogo, trabajo el manejo y estrategias, y puedo derivarte para
          evaluación si es necesario.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Cómo te puedo ayudar
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Estrategias de organización y productividad",
            "Técnicas para mejorar la concentración",
            "Manejo de la procrastinación",
            "Regulación emocional",
            "Trabajo en autoestima (muchos adultos con TDAH la tienen baja)",
            "Estrategias para el trabajo y relaciones",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puedo tener TDAH si no me lo diagnosticaron de niño?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Muchos adultos descubren su TDAH tarde, especialmente quienes
              compensaron bien o tienen el tipo predominantemente inatento (sin
              hiperactividad visible).
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Necesito medicación?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Depende del caso. La medicación la evalúa un psiquiatra. La
              terapia es complementaria y trabaja estrategias conductuales que
              son fundamentales con o sin medicación.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es lo mismo que ser distraído?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. El TDAH es un trastorno neurobiológico que afecta funciones
              ejecutivas. Todos nos distraemos, pero en el TDAH es un patrón
              persistente que impacta significativamente la vida.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Trabaja con tu cerebro, no contra él
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          El TDAH no es un defecto. Es una forma diferente de funcionar.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Perfeccionismo", href: "/psicologo-perfeccionismo-autoexigencia-chillan" },
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




