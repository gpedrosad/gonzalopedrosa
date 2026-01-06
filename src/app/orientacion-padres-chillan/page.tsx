import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orientación a Padres en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Orientación psicológica para padres en Chillán. Apoyo profesional para crianza, conducta de hijos, comunicación familiar y desafíos parentales.",
  alternates: {
    canonical: "/orientacion-padres-chillan",
  },
  openGraph: {
    title: "Orientación a Padres en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Orientación psicológica para padres en Chillán. Apoyo profesional para crianza, conducta de hijos, comunicación familiar y desafíos parentales.",
    url: "https://gonzalopedrosa.cl/orientacion-padres-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orientación a Padres en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Orientación psicológica para padres en Chillán. Apoyo profesional para crianza, conducta de hijos, comunicación familiar y desafíos parentales.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Tienen que venir ambos padres?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo ideal es que vengan ambos, pero si no es posible, puede venir uno. Lo importante es que haya consistencia en casa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Sirve si estamos separados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. De hecho, la co-parentalidad después de una separación es uno de los temas que más trabajamos. Pueden venir juntos o por separado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es culpa nuestra el problema de nuestro hijo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No se trata de culpas. Todos los padres hacemos lo mejor que podemos. El objetivo es entender qué está pasando y encontrar mejores formas de responder."
      }
    }
  ]
};

export default function OrientacionPadresChillanPage() {
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
        Orientación a Padres en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Ser padre o madre no viene con manual. La orientación profesional te
        ayuda a entender mejor a tus hijos, mejorar la comunicación y manejar
        situaciones difíciles.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Temas que trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Problemas de conducta en hijos",
            "Dificultades de comunicación padres-hijos",
            "Manejo de rabietas y límites",
            "Adolescencia y sus desafíos",
            "Hijos con ansiedad, miedos o tristeza",
            "Separación de los padres y su impacto",
            "Rivalidad entre hermanos",
            "Uso de tecnología y redes sociales",
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
          ¿Cómo funciona?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Sesiones con los padres (sin el niño/a)",
            "Entender la situación desde tu perspectiva",
            "Estrategias concretas para aplicar en casa",
            "Seguimiento y ajustes según resultados",
            "Derivación si el niño/a requiere atención directa",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Nota importante</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Mi trabajo es con adultos. Ofrezco orientación a padres, pero no
          atiendo directamente a niños. Si tu hijo/a necesita terapia, puedo
          derivarte a un especialista infanto-juvenil.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tienen que venir ambos padres?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Lo ideal es que vengan ambos, pero si no es posible, puede venir
              uno. Lo importante es que haya consistencia en casa.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Sirve si estamos separados?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. De hecho, la co-parentalidad después de una separación es uno
              de los temas que más trabajamos. Pueden venir juntos o por
              separado.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es culpa nuestra el problema de nuestro hijo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No se trata de culpas. Todos los padres hacemos lo mejor que
              podemos. El objetivo es entender qué está pasando y encontrar
              mejores formas de responder.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Mejora tu relación con tus hijos
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Pequeños cambios pueden hacer una gran diferencia.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Estrés", href: "/psicologo-estres-laboral-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Crisis vital", href: "/psicologo-crisis-vital-chillan" },
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

