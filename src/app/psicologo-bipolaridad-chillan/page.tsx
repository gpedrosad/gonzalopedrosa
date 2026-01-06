import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Bipolaridad en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo de apoyo para trastorno bipolar en Chillán. Terapia complementaria para manejar episodios, mejorar adherencia y calidad de vida.",
  alternates: {
    canonical: "/psicologo-bipolaridad-chillan",
  },
  openGraph: {
    title: "Psicólogo Bipolaridad en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo de apoyo para trastorno bipolar en Chillán. Terapia complementaria para manejar episodios, mejorar adherencia y calidad de vida.",
    url: "https://gonzalopedrosa.cl/psicologo-bipolaridad-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Bipolaridad en Chillán",
    description: "Psicólogo de apoyo para trastorno bipolar en Chillán. Terapia complementaria para manejar episodios, mejorar adherencia y calidad de vida.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿La terapia reemplaza la medicación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. La medicación es fundamental en el trastorno bipolar. La terapia es un complemento que mejora los resultados, pero no sustituye el tratamiento farmacológico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan con mi psiquiatra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cuando es necesario y con tu consentimiento, me coordino con tu psiquiatra para un tratamiento integral."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo ir aunque esté estabilizado/a?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, de hecho es el mejor momento para trabajar prevención. Aprender a identificar señales tempranas puede evitar futuras crisis."
      }
    }
  ]
};

export default function PsicologoBipolaridadChillanPage() {
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
        Psicólogo Bipolaridad en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El trastorno bipolar requiere tratamiento psiquiátrico, pero la terapia
        psicológica es un complemento fundamental para mejorar la calidad de
        vida y prevenir recaídas.
      </p>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Importante</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El trastorno bipolar requiere diagnóstico y tratamiento psiquiátrico.
          La terapia psicológica es complementaria, no reemplaza la medicación
          ni la atención psiquiátrica.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Cómo ayuda la terapia
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Psicoeducación: entender tu condición",
            "Identificar señales tempranas de episodios",
            "Mejorar adherencia a la medicación",
            "Regular rutinas de sueño y actividad",
            "Manejar el estrés (gatillante común)",
            "Trabajar problemas interpersonales",
            "Prevenir conductas de riesgo en manía",
            "Manejar síntomas depresivos residuales",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Por qué agregar terapia al tratamiento?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Estudios muestran que la combinación de medicación + terapia tiene
          mejores resultados que solo medicación:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Menos recaídas y hospitalizaciones",
            "Mejor funcionamiento social y laboral",
            "Mayor adherencia al tratamiento",
            "Mejor calidad de vida general",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#22c55e" }}>✓</span>
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La terapia reemplaza la medicación?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. La medicación es fundamental en el trastorno bipolar. La
              terapia es un complemento que mejora los resultados, pero no
              sustituye el tratamiento farmacológico.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Trabajan con mi psiquiatra?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, cuando es necesario y con tu consentimiento, me coordino con
              tu psiquiatra para un tratamiento integral.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puedo ir aunque esté estabilizado/a?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, de hecho es el mejor momento para trabajar prevención.
              Aprender a identificar señales tempranas puede evitar futuras
              crisis.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Mejora tu calidad de vida
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          La bipolaridad se puede manejar con el apoyo adecuado.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Regulación emocional", href: "/psicologo-manejo-frustracion-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
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

