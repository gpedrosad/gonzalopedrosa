import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento Anorexia y Bulimia en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Tratamiento psicológico para anorexia y bulimia en Chillán. Terapia especializada para recuperar tu salud y tu relación con la comida.",
  alternates: {
    canonical: "/tratamiento-anorexia-bulimia-chillan",
  },
  openGraph: {
    title: "Tratamiento Anorexia y Bulimia en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento psicológico para anorexia y bulimia en Chillán. Terapia especializada para recuperar tu salud y tu relación con la comida.",
    url: "https://gonzalopedrosa.cl/tratamiento-anorexia-bulimia-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamiento Anorexia y Bulimia en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento psicológico para anorexia y bulimia en Chillán. Terapia especializada para recuperar tu salud y tu relación con la comida.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto dura el tratamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un proceso largo, generalmente de meses a años. La recuperación no es lineal pero es posible. Vamos a tu ritmo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito otros profesionales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente sí: psiquiatra (para medicación si es necesaria) y nutricionista especializado. Puedo ayudarte a armar tu equipo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si recaigo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las recaídas son parte del proceso, no un fracaso. Lo importante es retomar el tratamiento y aprender de lo que pasó."
      }
    }
  ]
};

export default function TratamientoAnorexiaBulimiaChillanPage() {
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
        Tratamiento Anorexia y Bulimia en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La anorexia y la bulimia son trastornos graves pero tratables. Con el
        apoyo profesional adecuado, la recuperación es posible.
      </p>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Si estás en crisis</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Si hay riesgo vital (desnutrición severa, conductas purgativas
          extremas), es necesaria atención médica urgente. Salud Responde: 600
          360 7777.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales de alerta
        </h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#000" }}>Anorexia</p>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.25rem" }}>
              {["Restricción severa de comida", "Miedo intenso a engordar", "Verse gordo/a aunque estés bajo peso", "Ejercicio excesivo"].map((item, i) => (
                <li key={i} style={{ fontSize: "0.875rem", color: "#666" }}>• {item}</li>
              ))}
            </ul>
          </div>
          <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#000" }}>Bulimia</p>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.25rem" }}>
              {["Atracones de comida", "Vómitos autoprovocados", "Uso de laxantes o diuréticos", "Ayunos o ejercicio compensatorio"].map((item, i) => (
                <li key={i} style={{ fontSize: "0.875rem", color: "#666" }}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Tratamiento psicológico
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Psicoeducación sobre el trastorno",
            "Trabajo en imagen corporal distorsionada",
            "Regulación emocional (comer/restringir como regulador)",
            "Identificar y cambiar pensamientos disfuncionales",
            "Reconstruir patrones alimentarios normales",
            "Abordar factores mantenedores",
            "Prevención de recaídas",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto dura el tratamiento?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es un proceso largo, generalmente de meses a años. La recuperación
              no es lineal pero es posible. Vamos a tu ritmo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Necesito otros profesionales?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Generalmente sí: psiquiatra (para medicación si es necesaria) y
              nutricionista especializado. Puedo ayudarte a armar tu equipo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Qué pasa si recaigo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Las recaídas son parte del proceso, no un fracaso. Lo importante
              es retomar el tratamiento y aprender de lo que pasó.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          La recuperación es posible
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Mereces una vida libre de esto.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Trastornos alimenticios", href: "/psicologo-trastornos-alimenticios-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
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


