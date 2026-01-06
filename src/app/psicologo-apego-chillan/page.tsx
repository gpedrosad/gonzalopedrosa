import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Apego en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en estilos de apego en Chillán. Terapia para entender tus patrones relacionales y construir vínculos más seguros.",
  alternates: {
    canonical: "/psicologo-apego-chillan",
  },
  openGraph: {
    title: "Psicólogo Apego en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en estilos de apego en Chillán. Terapia para entender tus patrones relacionales y construir vínculos más seguros.",
    url: "https://gonzalopedrosa.cl/psicologo-apego-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Apego en Chillán",
    description: "Psicólogo especializado en estilos de apego en Chillán. Terapia para entender tus patrones relacionales y construir vínculos más seguros.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Se puede cambiar el estilo de apego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Aunque se forma en la infancia, el apego es modificable con experiencias correctivas y trabajo terapéutico. Puedes desarrollar un apego más seguro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué siempre elijo parejas que me hacen mal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tendemos a buscar lo familiar, aunque sea dañino. Si creciste con vínculos inseguros, inconscientemente puedes buscar lo mismo en adultos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura este proceso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modificar patrones de apego es un trabajo profundo que toma tiempo. Generalmente varios meses, pero los cambios son significativos para toda tu vida."
      }
    }
  ]
};

export default function PsicologoApegoChillanPage() {
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
        Psicólogo Apego en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Tu estilo de apego determina cómo te relacionas con los demás. Entenderlo
        te permite romper patrones dañinos y construir relaciones más
        satisfactorias.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Estilos de apego
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { tipo: "Apego Seguro", desc: "Comodidad con la intimidad y la independencia. Relaciones equilibradas." },
            { tipo: "Apego Ansioso", desc: "Miedo al abandono, necesidad de cercanía constante, celos e inseguridad." },
            { tipo: "Apego Evitativo", desc: "Incomodidad con la intimidad, tendencia a alejarse cuando hay cercanía." },
            { tipo: "Apego Desorganizado", desc: "Mezcla de ansiedad y evitación, relaciones caóticas e impredecibles." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>{item.tipo}</p>
              <p style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Qué trabajamos?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar tu estilo de apego predominante",
            "Entender cómo se formó en tu infancia",
            "Reconocer patrones en tus relaciones actuales",
            "Desarrollar un apego más seguro",
            "Mejorar tu capacidad de intimidad y autonomía",
            "Elegir mejor tus parejas y amistades",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Se puede cambiar el estilo de apego?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Aunque se forma en la infancia, el apego es modificable con
              experiencias correctivas y trabajo terapéutico. Puedes desarrollar
              un apego más seguro.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué siempre elijo parejas que me hacen mal?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Tendemos a buscar lo familiar, aunque sea dañino. Si creciste con
              vínculos inseguros, inconscientemente puedes buscar lo mismo en
              adultos.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto dura este proceso?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Modificar patrones de apego es un trabajo profundo que toma tiempo.
              Generalmente varios meses, pero los cambios son significativos
              para toda tu vida.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Transforma tus relaciones
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Entender tu apego es el primer paso para relacionarte mejor.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Dependencia emocional", href: "/psicologo-dependencia-emocional-chillan" },
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
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


