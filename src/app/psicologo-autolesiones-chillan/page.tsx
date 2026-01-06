import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Autolesiones en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para autolesiones en Chillán. Tratamiento confidencial y sin juicios para dejar de hacerte daño y encontrar otras formas de alivio.",
  alternates: {
    canonical: "/psicologo-autolesiones-chillan",
  },
  openGraph: {
    title: "Psicólogo Autolesiones en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para autolesiones en Chillán. Tratamiento confidencial y sin juicios para dejar de hacerte daño y encontrar otras formas de alivio.",
    url: "https://gonzalopedrosa.cl/psicologo-autolesiones-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Autolesiones en Chillán",
    description: "Psicólogo para autolesiones en Chillán. Tratamiento confidencial y sin juicios para dejar de hacerte daño y encontrar otras formas de alivio.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Me vas a juzgar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Entiendo que la autolesión es una forma de sobrevivir a dolor emocional. Mi trabajo es ayudarte a encontrar formas más seguras, no juzgarte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tengo que dejar de hacerlo inmediatamente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No te voy a obligar. La reducción es gradual, a medida que desarrollamos otras herramientas. Ir demasiado rápido puede empeorar las cosas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede superar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Muchas personas logran dejar la autolesión completamente. Es un proceso, pero es posible."
      }
    }
  ]
};

export default function PsicologoAutolesionesChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <section style={{ padding: "1.25rem", backgroundColor: "#fef2f2", borderRadius: "12px", marginBottom: "2rem", border: "1px solid #fecaca" }}>
        <p style={{ fontWeight: 600, color: "#991b1b", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>🚨 Si estás en peligro ahora</p>
        <p style={{ color: "#7f1d1d", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
          Si te has hecho daño severo o piensas en quitarte la vida:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.375rem", color: "#7f1d1d", fontSize: "0.875rem" }}>
          <li><strong>Urgencias:</strong> 131</li>
          <li><strong>Salud Responde:</strong> 600 360 7777</li>
          <li><strong>Fono de la Esperanza:</strong> 717 200 200</li>
        </ul>
      </section>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={64} height={64} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Chillán, Chile</p>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo Autolesiones en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La autolesión es una forma de lidiar con dolor emocional intenso. No
        estás loco/a ni eres malo/a. Pero hay formas más seguras de aliviar ese
        dolor.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Por qué las personas se autolesionan
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Para liberar emociones inmanejables",
            "Para sentir algo cuando te sientes vacío/a",
            "Para castigarte o expresar odio hacia ti mismo/a",
            "Para tener control sobre algo",
            "Para comunicar dolor que no puedes expresar",
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
          Cómo trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Sin juicios ni sermones",
            "Entender qué función cumple la autolesión",
            "Desarrollar otras formas de manejar emociones",
            "Trabajar lo que hay debajo (trauma, dolor, etc.)",
            "Reducir gradualmente las conductas",
            "Plan de seguridad para momentos difíciles",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Me vas a juzgar?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. Entiendo que la autolesión es una forma de sobrevivir a dolor
              emocional. Mi trabajo es ayudarte a encontrar formas más seguras,
              no juzgarte.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tengo que dejar de hacerlo inmediatamente?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No te voy a obligar. La reducción es gradual, a medida que
              desarrollamos otras herramientas. Ir demasiado rápido puede
              empeorar las cosas.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Se puede superar?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Muchas personas logran dejar la autolesión completamente.
              Es un proceso, pero es posible.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Hay otra forma de aliviar el dolor
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Puedo ayudarte a encontrarla.
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
            { label: "Trauma", href: "/superar-trauma-infancia-chillan" },
            { label: "TLP", href: "/tratamiento-tlp-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
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

