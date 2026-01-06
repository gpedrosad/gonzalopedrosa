import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamiento TLP en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Tratamiento para Trastorno Límite de Personalidad (TLP) en Chillán. Terapia especializada para regular emociones y mejorar relaciones.",
  alternates: {
    canonical: "/tratamiento-tlp-chillan",
  },
  openGraph: {
    title: "Tratamiento TLP en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento para Trastorno Límite de Personalidad (TLP) en Chillán. Terapia especializada para regular emociones y mejorar relaciones.",
    url: "https://gonzalopedrosa.cl/tratamiento-tlp-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamiento TLP en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Tratamiento para Trastorno Límite de Personalidad (TLP) en Chillán. Terapia especializada para regular emociones y mejorar relaciones.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El TLP tiene cura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muchas personas mejoran significativamente con tratamiento y ya no cumplen los criterios diagnósticos. Se puede llevar una vida plena y satisfactoria."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito medicación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La terapia es el tratamiento principal para TLP. La medicación puede ayudar con síntomas específicos y se evalúa caso a caso con psiquiatría."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo dura el tratamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un proceso más largo que otros trastornos, generalmente de 1-2 años. Pero las mejoras se notan mucho antes de completar el tratamiento."
      }
    }
  ]
};

export default function TratamientoTlpChillanPage() {
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
        Tratamiento TLP en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El Trastorno Límite de Personalidad (TLP) implica dificultades en la
        regulación emocional y las relaciones. Con el tratamiento adecuado,
        es posible mejorar significativamente.
      </p>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Importante</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El diagnóstico de TLP debe realizarlo un profesional de salud mental
          calificado. Si sospechas que podrías tenerlo, lo evaluamos juntos.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Características del TLP
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Emociones intensas y difíciles de controlar",
            "Miedo intenso al abandono",
            "Relaciones inestables (idealización y devaluación)",
            "Imagen de sí mismo/a inestable",
            "Impulsividad que puede ser dañina",
            "Sensación crónica de vacío",
            "Ira intensa o dificultad para controlarla",
            "En casos graves, autolesiones o ideación suicida",
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
          Enfoque de tratamiento
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El tratamiento se enfoca en desarrollar habilidades para:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Regular las emociones intensas",
            "Tolerar el malestar sin actuar impulsivamente",
            "Mejorar las relaciones interpersonales",
            "Ser más efectivo en conseguir lo que quieres",
            "Aumentar la conciencia del momento presente",
            "Desarrollar una identidad más estable",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿El TLP tiene cura?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Muchas personas mejoran significativamente con tratamiento y ya no
              cumplen los criterios diagnósticos. Se puede llevar una vida
              plena y satisfactoria.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Necesito medicación?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              La terapia es el tratamiento principal para TLP. La medicación
              puede ayudar con síntomas específicos y se evalúa caso a caso
              con psiquiatría.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo dura el tratamiento?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es un proceso más largo que otros trastornos, generalmente de 1-2
              años. Pero las mejoras se notan mucho antes de completar el
              tratamiento.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Es posible mejorar
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Con el tratamiento adecuado, puedes llevar una vida más estable.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Regulación emocional", href: "/psicologo-manejo-frustracion-chillan" },
            { label: "Dependencia emocional", href: "/psicologo-dependencia-emocional-chillan" },
            { label: "Trauma", href: "/superar-trauma-infancia-chillan" },
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


