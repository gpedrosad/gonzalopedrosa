import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Soledad y Aislamiento en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para soledad y aislamiento social en Chillán. Terapia para reconectar contigo mismo y con otros, superando el aislamiento.",
  alternates: {
    canonical: "/psicologo-soledad-aislamiento-chillan",
  },
  openGraph: {
    title: "Psicólogo Soledad y Aislamiento en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para soledad y aislamiento social en Chillán. Terapia para reconectar contigo mismo y con otros, superando el aislamiento.",
    url: "https://gonzalopedrosa.cl/psicologo-soledad-aislamiento-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Soledad y Aislamiento en Chillán",
    description: "Psicólogo para soledad y aislamiento social en Chillán. Terapia para reconectar contigo mismo y con otros, superando el aislamiento.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué me siento solo/a si tengo gente alrededor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La soledad no es cuestión de cantidad de personas, sino de calidad de conexión. Puedes estar rodeado y sentirte profundamente solo/a si no hay conexión real."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es malo querer estar solo/a?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. La soledad elegida (tiempo para ti) es sana. El problema es cuando el aislamiento es por miedo, evitación o te hace sufrir."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede estar relacionado con depresión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el aislamiento social es síntoma y factor de riesgo de{\" \"} depresión . Si además sientes tristeza persistente, lo exploramos juntos."
      }
    }
  ]
};

export default function PsicologoSoledadAislamientoChillanPage() {
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
        Psicólogo Soledad y Aislamiento en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Sentirse solo/a incluso rodeado de gente es una experiencia dolorosa.
        La terapia te ayuda a entender esta desconexión y a construir vínculos
        más significativos.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Formas de soledad
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Soledad emocional (falta de conexión profunda)",
            "Soledad social (pocos o ningún amigo/a)",
            "Aislamiento voluntario (evitar a otros)",
            "Sentirse incomprendido/a",
            "Soledad en pareja o en familia",
            "Soledad después de una pérdida o cambio de vida",
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
          Qué trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Entender qué te lleva a aislarte",
            "Trabajar miedos sociales o de rechazo",
            "Mejorar habilidades de conexión",
            "Reconstruir tu red de apoyo",
            "Aprender a estar bien contigo mismo/a",
            "Diferenciar soledad elegida de aislamiento dañino",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué me siento solo/a si tengo gente alrededor?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              La soledad no es cuestión de cantidad de personas, sino de calidad
              de conexión. Puedes estar rodeado y sentirte profundamente solo/a
              si no hay conexión real.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es malo querer estar solo/a?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. La soledad elegida (tiempo para ti) es sana. El problema es
              cuando el aislamiento es por miedo, evitación o te hace sufrir.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puede estar relacionado con depresión?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, el aislamiento social es síntoma y factor de riesgo de{" "}
              <Link href="/psicologo-depresion-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                depresión
              </Link>
              . Si además sientes tristeza persistente, lo exploramos juntos.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          No tienes que seguir solo/a
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          El primer paso es hablar con alguien.
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
            { label: "Fobia social", href: "/psicologo-fobia-social-chillan" },
            { label: "Timidez", href: "/psicologo-timidez-chillan" },
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

