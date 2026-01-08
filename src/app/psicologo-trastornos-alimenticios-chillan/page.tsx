import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Trastornos Alimenticios en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en trastornos alimenticios en Chillán. Tratamiento para anorexia, bulimia, atracones y relación problemática con la comida.",
  alternates: {
    canonical: "/psicologo-trastornos-alimenticios-chillan",
  },
  openGraph: {
    title: "Psicólogo Trastornos Alimenticios en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en trastornos alimenticios en Chillán. Tratamiento para anorexia, bulimia, atracones y relación problemática con la comida.",
    url: "https://gonzalopedrosa.cl/psicologo-trastornos-alimenticios-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Trastornos Alimenticios en Chillán",
    description: "Psicólogo especializado en trastornos alimenticios en Chillán. Tratamiento para anorexia, bulimia, atracones y relación problemática con la comida.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Solo atiendes casos graves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. También trabajo con personas que tienen una relación problemática con la comida sin llegar a un diagnóstico completo. La prevención es importante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito ver también a un nutricionista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente sí, especialmente en casos más severos. El trabajo conjunto psicólogo-nutricionista es lo más efectivo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede recuperar completamente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Muchas personas se recuperan completamente y desarrollan una relación sana con la comida y su cuerpo. Requiere compromiso pero es posible."
      }
    }
  ]
};

export default function PsicologoTrastornosAlimenticiosChillanPage() {
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
        Psicólogo Trastornos Alimenticios en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Los trastornos de la conducta alimentaria van más allá de la comida.
        Afectan tu relación contigo mismo/a, tu cuerpo y tus emociones. El
        tratamiento psicológico es fundamental para la recuperación.
      </p>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Importante</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Los trastornos alimenticios severos requieren tratamiento
          multidisciplinario (psicólogo, psiquiatra, nutricionista). Puedo
          coordinar con tu equipo médico.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Trastornos que trato
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { tipo: "Anorexia nerviosa", desc: "Restricción alimentaria, miedo intenso a subir de peso." },
            { tipo: "Bulimia nerviosa", desc: "Atracones seguidos de conductas compensatorias." },
            { tipo: "Trastorno por atracón", desc: "Episodios de comer en exceso sin control." },
            { tipo: "Otros TCANE", desc: "Relación problemática con comida que no cumple todos los criterios." },
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
          Enfoque de tratamiento
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Entender la función del trastorno en tu vida",
            "Trabajo en imagen corporal",
            "Regulación emocional (la comida como regulador)",
            "Identificar y cambiar pensamientos distorsionados",
            "Reconstruir una relación sana con la comida",
            "Trabajar autoestima y autocrítica",
            "Abordar traumas o experiencias relacionadas",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Solo atiendes casos graves?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. También trabajo con personas que tienen una relación
              problemática con la comida sin llegar a un diagnóstico completo.
              La prevención es importante.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Necesito ver también a un nutricionista?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Generalmente sí, especialmente en casos más severos. El trabajo
              conjunto psicólogo-nutricionista es lo más efectivo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Se puede recuperar completamente?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Muchas personas se recuperan completamente y desarrollan una
              relación sana con la comida y su cuerpo. Requiere compromiso pero
              es posible.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Da el primer paso
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          La recuperación es posible. Pide ayuda.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Anorexia y bulimia", href: "/tratamiento-anorexia-bulimia-chillan" },
            { label: "Obesidad", href: "/psicologo-obesidad-chillan" },
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




