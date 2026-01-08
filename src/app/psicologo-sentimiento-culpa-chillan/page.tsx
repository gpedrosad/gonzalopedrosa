import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Sentimiento de Culpa en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para trabajar sentimientos de culpa en Chillán. Terapia para liberarte de la culpa excesiva y vivir con más paz interior.",
  alternates: {
    canonical: "/psicologo-sentimiento-culpa-chillan",
  },
  openGraph: {
    title: "Psicólogo Sentimiento de Culpa en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para trabajar sentimientos de culpa en Chillán. Terapia para liberarte de la culpa excesiva y vivir con más paz interior.",
    url: "https://gonzalopedrosa.cl/psicologo-sentimiento-culpa-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Sentimiento de Culpa en Chillán",
    description: "Psicólogo para trabajar sentimientos de culpa en Chillán. Terapia para liberarte de la culpa excesiva y vivir con más paz interior.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿La culpa siempre es mala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. La culpa sana nos ayuda a reconocer cuando herimos a otros y a reparar. El problema es la culpa excesiva, que te paraliza o te hace sentir mal sin razón real."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede estar relacionada con depresión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La culpa excesiva es un síntoma común de{\" \"} depresión . Si sientes culpa constante junto con tristeza, vale la pena explorarlo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo perdonarme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El autoperdón es un proceso que trabajamos en terapia. Implica aceptar tu humanidad, aprender del error y soltar la autocastigo."
      }
    }
  ]
};

export default function PsicologoSentimientoCulpaChillanPage() {
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
        Psicólogo Sentimiento de Culpa en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La culpa puede ser útil cuando nos señala que hicimos algo malo. Pero
        cuando es excesiva o injustificada, se vuelve una carga que te impide
        vivir en paz.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Tipos de culpa que trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Culpa por decisiones pasadas",
            "Culpa por no cumplir expectativas de otros",
            "Culpa de sobreviviente (duelo, accidentes)",
            "Culpa por cuidarte o poner límites",
            "Culpa constante sin motivo claro",
            "Culpa por pensamientos o sentimientos",
            "Culpa relacionada con la crianza",
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
          Cómo trabajamos la culpa
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Distinguir culpa real de culpa neurótica",
            "Entender de dónde viene (familia, religión, etc.)",
            "Cuestionar estándares imposibles",
            "Desarrollar autocompasión",
            "Procesar eventos del pasado",
            "Aprender a perdonarte",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La culpa siempre es mala?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. La culpa sana nos ayuda a reconocer cuando herimos a otros y
              a reparar. El problema es la culpa excesiva, que te paraliza o te
              hace sentir mal sin razón real.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puede estar relacionada con depresión?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. La culpa excesiva es un síntoma común de{" "}
              <Link href="/psicologo-depresion-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                depresión
              </Link>
              . Si sientes culpa constante junto con tristeza, vale la pena
              explorarlo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cómo puedo perdonarme?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El autoperdón es un proceso que trabajamos en terapia. Implica
              aceptar tu humanidad, aprender del error y soltar la
              autocastigo.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Libérate de la culpa
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Mereces vivir en paz contigo mismo/a.
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
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Perfeccionismo", href: "/psicologo-perfeccionismo-autoexigencia-chillan" },
            { label: "Duelo", href: "/psicologo-duelo-chillan" },
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




