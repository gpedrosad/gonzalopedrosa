import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Superar Relación Tóxica en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Psicólogo en Chillán para superar relaciones tóxicas. Recupera tu bienestar, autoestima y aprende a construir vínculos saludables.",
  alternates: {
    canonical: "/superar-relacion-toxica-chillan",
  },
  openGraph: {
    title: "Superar Relación Tóxica en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Psicólogo en Chillán para superar relaciones tóxicas. Recupera tu bienestar, autoestima y aprende a construir vínculos saludables.",
    url: "https://gonzalopedrosa.cl/superar-relacion-toxica-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superar Relación Tóxica en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Psicólogo en Chillán para superar relaciones tóxicas. Recupera tu bienestar, autoestima y aprende a construir vínculos saludables.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué me cuesta tanto salir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las relaciones tóxicas generan un vínculo traumático difícil de romper. El ciclo de maltrato y reconciliación crea una adicción emocional. Es más común de lo que crees."
      }
    },
    {
      "@type": "Question",
      "name": "¿Voy a volver a confiar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, pero lleva tiempo. La terapia te ayuda a distinguir señales de alerta y a confiar gradualmente en personas que lo merecen."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué me atraen este tipo de personas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Suele estar relacionado con patrones de{\" \"} apego y experiencias tempranas. En terapia trabajamos para cambiar estos patrones."
      }
    }
  ]
};

export default function SuperarRelacionToxicaChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={56} height={56} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.125rem" }}>Chillán, Chile</p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
        </div>
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Superar Relación Tóxica en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Salir de una relación tóxica es solo el primer paso. La terapia te
        ayuda a sanar las heridas, entender por qué entraste en esa dinámica
        y evitar repetirla.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales de una relación tóxica
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Manipulación emocional o chantaje",
            "Control sobre tu vida, amistades o decisiones",
            "Críticas constantes que dañan tu autoestima",
            "Ciclos de idealización y devaluación",
            "Sentirte culpable de todo lo malo",
            "Aislamiento de tu red de apoyo",
            "Miedo a la reacción del otro",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Importante</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Si estás en una relación con violencia física o psicológica grave,
          busca ayuda especializada. Fono Familia: 149 (24/7).
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Cómo trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Procesar el trauma de la relación",
            "Reconstruir tu autoestima dañada",
            "Identificar patrones que te llevan a estas relaciones",
            "Trabajar límites y asertividad",
            "Sanar el apego y la dependencia",
            "Prepararte para relaciones saludables",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué me cuesta tanto salir?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Las relaciones tóxicas generan un vínculo traumático difícil de
              romper. El ciclo de maltrato y reconciliación crea una adicción
              emocional. Es más común de lo que crees.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Voy a volver a confiar?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, pero lleva tiempo. La terapia te ayuda a distinguir señales
              de alerta y a confiar gradualmente en personas que lo merecen.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué me atraen este tipo de personas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Suele estar relacionado con patrones de{" "}
              <Link href="/psicologo-apego-chillan" style={{ color: "#000", textDecoration: "underline" }}>apego</Link> y
              experiencias tempranas. En terapia trabajamos para cambiar estos
              patrones.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Recupera tu vida
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Mereces relaciones que te sumen, no que te destruyan.
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
            { label: "Ruptura amorosa", href: "/psicologo-ruptura-amorosa-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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

