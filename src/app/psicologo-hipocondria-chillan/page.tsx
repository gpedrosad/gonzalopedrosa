import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Psicólogo Hipocondría en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para hipocondría y ansiedad por la salud en Chillán. Tratamiento para dejar de preocuparte constantemente por enfermedades.",
  alternates: {
    canonical: "/psicologo-hipocondria-chillan",
  },
  openGraph: {
    title: "Psicólogo Hipocondría en Chillán | Gonzalo Pedrosa",
    description: "Tratamiento especializado para ansiedad por la salud. Terapia cognitivo-conductual efectiva para hipocondría.",
    url: "https://gonzalopedrosa.cl/psicologo-hipocondria-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo especialista en hipocondría" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Hipocondría en Chillán",
    description: "Tratamiento efectivo para ansiedad por la salud con TCC.",
  },
};

// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Y si realmente tengo algo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es importante que un médico descarte cosas primero. Pero si ya te han dicho que estás bien y sigues preocupado/a, es señal de que el problema es la ansiedad, no tu salud.",
      },
    },
    {
      "@type": "Question",
      name: "¿No es normal preocuparse por la salud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, pero hay un límite. Cuando la preocupación es constante, desproporcionada y afecta tu vida, ya no es normal, es un trastorno de ansiedad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene cura la hipocondría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con tratamiento adecuado, la mayoría de las personas mejoran significativamente. Aprenden a manejar la ansiedad y recuperan su tranquilidad.",
      },
    },
  ],
};

export default function PsicologoHipocondriaChillanPage() {
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
        Psicólogo Hipocondría en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La ansiedad por la salud (hipocondría) es agotadora. Vives
        preocupado/a por enfermedades, revisándote constantemente, buscando en
        internet. Hay tratamiento efectivo.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales de hipocondría
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Preocupación constante por tener una enfermedad grave",
            "Revisar el cuerpo frecuentemente buscando síntomas",
            "Buscar en internet síntomas y enfermedades",
            "Ir al médico repetidamente sin encontrar nada",
            "Sensaciones normales te parecen señales de algo grave",
            "Evitar temas relacionados con enfermedades",
            "Pedir tranquilización pero el alivio dura poco",
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
          Tratamiento
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La{" "}
          <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            Terapia Cognitivo-Conductual
          </Link>{" "}
          es muy efectiva para la hipocondría:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Entender cómo funciona la ansiedad por la salud",
            "Reducir conductas de chequeo y búsqueda de seguridad",
            "Cambiar pensamientos catastróficos sobre síntomas",
            "Tolerar la incertidumbre sobre la salud",
            "Recuperar tu vida más allá de la preocupación",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Y si realmente tengo algo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es importante que un médico descarte cosas primero. Pero si ya te
              han dicho que estás bien y sigues preocupado/a, es señal de que
              el problema es la ansiedad, no tu salud.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿No es normal preocuparse por la salud?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, pero hay un límite. Cuando la preocupación es constante,
              desproporcionada y afecta tu vida, ya no es normal, es un
              trastorno de ansiedad.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tiene cura?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Con tratamiento adecuado, la mayoría de las personas mejoran
              significativamente. Aprenden a manejar la ansiedad y recuperan
              su tranquilidad.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Deja de vivir con miedo
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Recupera tu tranquilidad.
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
            { label: "TOC", href: "/tratamiento-toc-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
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

