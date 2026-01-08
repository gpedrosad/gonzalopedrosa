import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento Burnout en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Tratamiento para burnout y agotamiento laboral en Chillán. Recupera tu energía, establece límites y vuelve a disfrutar tu trabajo.",
  alternates: {
    canonical: "/tratamiento-burnout-chillan",
  },
  openGraph: {
    title: "Tratamiento Burnout en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento para burnout y agotamiento laboral en Chillán. Recupera tu energía, establece límites y vuelve a disfrutar tu trabajo.",
    url: "https://gonzalopedrosa.cl/tratamiento-burnout-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamiento Burnout en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento para burnout y agotamiento laboral en Chillán. Recupera tu energía, establece límites y vuelve a disfrutar tu trabajo.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Tengo que renunciar a mi trabajo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesariamente. A veces con cambios en cómo trabajas y en límites es suficiente. Otras veces sí es necesario un cambio mayor. Lo evaluamos juntos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es lo mismo que estrés laboral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El{\" \"} estrés laboral{\" \"} puede llevar al burnout si es crónico. El burnout es un estado más severo de agotamiento total."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma recuperarse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de la severidad. Algunos notan mejoras en semanas, pero una recuperación completa puede tomar meses. Lo importante es no volver al mismo patrón."
      }
    }
  ]
};

export default function TratamientoBurnoutChillanPage() {
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
        Tratamiento Burnout en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El burnout es un agotamiento físico, emocional y mental causado por el
        estrés laboral crónico. No es debilidad: es una señal de que algo tiene
        que cambiar.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Síntomas de burnout
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Agotamiento extremo que no se recupera con descanso",
            "Cinismo o desapego hacia el trabajo",
            "Sensación de ineficacia o falta de logro",
            "Dificultad para concentrarse",
            "Problemas de sueño",
            "Irritabilidad o cambios de humor",
            "Síntomas físicos (dolores, problemas digestivos)",
            "Aislamiento social",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ No ignores estas señales</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El burnout no tratado puede llevar a depresión, problemas de salud
          graves y colapso. Pedir ayuda es el primer paso para recuperarte.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Tratamiento
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar las causas de tu agotamiento",
            "Establecer límites saludables en el trabajo",
            "Recuperar energía y motivación",
            "Técnicas de manejo del estrés",
            "Trabajo en autoexigencia y perfeccionismo",
            "Planificar cambios sostenibles",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tengo que renunciar a mi trabajo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No necesariamente. A veces con cambios en cómo trabajas y en
              límites es suficiente. Otras veces sí es necesario un cambio mayor.
              Lo evaluamos juntos.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es lo mismo que estrés laboral?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El{" "}
              <Link href="/psicologo-estres-laboral-chillan" style={{ color: "#000", textDecoration: "underline" }}>estrés laboral</Link>{" "}
              puede llevar al burnout si es crónico. El burnout es un estado más
              severo de agotamiento total.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo toma recuperarse?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Depende de la severidad. Algunos notan mejoras en semanas, pero
              una recuperación completa puede tomar meses. Lo importante es no
              volver al mismo patrón.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Recupera tu energía
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No tienes que seguir funcionando en vacío.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Perfeccionismo", href: "/psicologo-perfeccionismo-autoexigencia-chillan" },
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




