import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estrés Postraumático (TEPT) en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Tratamiento para estrés postraumático (TEPT) en Chillán. Terapia especializada para superar traumas y recuperar tu vida.",
  alternates: {
    canonical: "/estres-postraumatico-chillan",
  },
  openGraph: {
    title: "Estrés Postraumático (TEPT) en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento para estrés postraumático (TEPT) en Chillán. Terapia especializada para superar traumas y recuperar tu vida.",
    url: "https://gonzalopedrosa.cl/estres-postraumatico-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estrés Postraumático (TEPT) en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento para estrés postraumático (TEPT) en Chillán. Terapia especializada para superar traumas y recuperar tu vida.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo después del evento puede aparecer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puede aparecer semanas, meses o incluso años después del evento. A veces se gatilla por otro evento estresante que reactiva el trauma original."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito medicación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No siempre. La terapia sola puede ser suficiente. En casos severos, la medicación puede ayudar y se coordina con psiquiatría."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede superar completamente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Muchas personas se recuperan completamente del TEPT con el tratamiento adecuado. Los síntomas pueden reducirse significativamente o desaparecer."
      }
    }
  ]
};

export default function EstresPostraumaticoChillanPage() {
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
        Estrés Postraumático en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El TEPT (Trastorno de Estrés Postraumático) ocurre cuando el impacto de
        una experiencia traumática persiste en el tiempo. Con tratamiento
        adecuado, es posible recuperarte.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Síntomas del TEPT
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { tipo: "Reexperimentación", desc: "Flashbacks, pesadillas, recuerdos intrusivos del evento." },
            { tipo: "Evitación", desc: "Evitar lugares, personas o situaciones que recuerdan el trauma." },
            { tipo: "Alteraciones cognitivas", desc: "Culpa, vergüenza, pensamientos negativos sobre ti o el mundo." },
            { tipo: "Hiperactivación", desc: "Sobresalto fácil, insomnio, irritabilidad, hipervigilancia." },
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
          Eventos que pueden causar TEPT
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Accidentes graves o desastres naturales",
            "Violencia física o sexual",
            "Experiencias de guerra o violencia",
            "Pérdida traumática de un ser querido",
            "Diagnóstico médico grave",
            "Ser testigo de eventos traumáticos",
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
          El tratamiento más efectivo para TEPT es la{" "}
          <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            Terapia Cognitivo-Conductual
          </Link>{" "}
          enfocada en trauma:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Psicoeducación sobre el trauma y el TEPT",
            "Técnicas de estabilización y regulación",
            "Procesamiento del evento traumático",
            "Reestructuración de creencias dañinas",
            "Exposición gradual (cuando sea apropiado)",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo después del evento puede aparecer?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Puede aparecer semanas, meses o incluso años después del evento.
              A veces se gatilla por otro evento estresante que reactiva el
              trauma original.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Necesito medicación?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No siempre. La terapia sola puede ser suficiente. En casos severos,
              la medicación puede ayudar y se coordina con psiquiatría.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Se puede superar completamente?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Muchas personas se recuperan completamente del TEPT con el
              tratamiento adecuado. Los síntomas pueden reducirse significativamente
              o desaparecer.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          El trauma tiene tratamiento
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No tienes que seguir viviendo atrapado/a en el pasado.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Trauma infancia", href: "/superar-trauma-infancia-chillan" },
            { label: "Abuso sexual", href: "/psicologo-abuso-sexual-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "EMDR", href: "/terapia-emdr-chillan" },
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


