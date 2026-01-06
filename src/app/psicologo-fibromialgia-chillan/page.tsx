import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Fibromialgia en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en fibromialgia en Chillán. Terapia para manejo del dolor crónico, fatiga y aspectos emocionales de la enfermedad.",
  alternates: {
    canonical: "/psicologo-fibromialgia-chillan",
  },
  openGraph: {
    title: "Psicólogo Fibromialgia en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en fibromialgia en Chillán. Terapia para manejo del dolor crónico, fatiga y aspectos emocionales de la enfermedad.",
    url: "https://gonzalopedrosa.cl/psicologo-fibromialgia-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Fibromialgia en Chillán",
    description: "Psicólogo especializado en fibromialgia en Chillán. Terapia para manejo del dolor crónico, fatiga y aspectos emocionales de la enfermedad.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿La fibromialgia es psicológica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, es una condición médica real. Pero los factores psicológicos influyen en cómo experimentas el dolor. Por eso el tratamiento psicológico ayuda tanto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede reducir mi dolor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Estudios muestran que la TCC puede reducir la percepción de dolor y mejorar significativamente el funcionamiento diario."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es compatible con mi tratamiento médico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. La terapia es complementaria a la medicación y otros tratamientos. No reemplaza la atención médica."
      }
    }
  ]
};

export default function PsicologoFibromialgiaChillanPage() {
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
        Psicólogo Fibromialgia en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La fibromialgia es una condición real que causa dolor crónico y otros
        síntomas. La terapia psicológica es parte fundamental del tratamiento,
        ayudándote a manejar mejor la enfermedad y mejorar tu calidad de vida.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Síntomas que afectan la vida diaria
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dolor generalizado y persistente",
            "Fatiga extrema que no mejora con descanso",
            "Problemas de sueño",
            "\"Niebla mental\" (dificultad para concentrarse)",
            "Ansiedad y depresión asociadas",
            "Aislamiento social por las limitaciones",
            "Frustración por la incomprensión de otros",
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
          Cómo ayuda la terapia
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La{" "}
          <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            Terapia Cognitivo-Conductual
          </Link>{" "}
          es el tratamiento psicológico con más evidencia para fibromialgia:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Técnicas de manejo del dolor",
            "Regulación del sueño y la actividad",
            "Manejar pensamientos catastróficos sobre el dolor",
            "Técnicas de relajación",
            "Aceptación activa de la condición",
            "Mejorar la calidad de vida pese al dolor",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La fibromialgia es psicológica?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No, es una condición médica real. Pero los factores psicológicos
              influyen en cómo experimentas el dolor. Por eso el tratamiento
              psicológico ayuda tanto.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puede reducir mi dolor?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Estudios muestran que la TCC puede reducir la percepción de
              dolor y mejorar significativamente el funcionamiento diario.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es compatible con mi tratamiento médico?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Absolutamente. La terapia es complementaria a la medicación y
              otros tratamientos. No reemplaza la atención médica.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Mejora tu calidad de vida
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No tienes que enfrentar esto solo/a.
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
            { label: "Insomnio", href: "/tratamiento-insomnio-chillan" },
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

