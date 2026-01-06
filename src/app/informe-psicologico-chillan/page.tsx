import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Informe Psicológico en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Informes psicológicos profesionales en Chillán. Evaluación para cirugías, trámites legales, laborales y otros fines. Entrega rápida.",
  alternates: {
    canonical: "/informe-psicologico-chillan",
  },
  openGraph: {
    title: "Informe Psicológico en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Informes psicológicos profesionales en Chillán. Evaluación para cirugías, trámites legales, laborales y otros fines. Entrega rápida.",
    url: "https://gonzalopedrosa.cl/informe-psicologico-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Informe Psicológico en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Informes psicológicos profesionales en Chillán. Evaluación para cirugías, trámites legales, laborales y otros fines. Entrega rápida.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un informe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del tipo y complejidad. Contáctame con los detalles de lo que necesitas y te doy un presupuesto exacto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Lo puedo hacer online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Algunas evaluaciones sí, otras requieren presencialidad. Depende del propósito del informe y sus requerimientos."
      }
    },
    {
      "@type": "Question",
      "name": "¿El informe tiene validez legal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es un documento profesional formal con firma y timbre de psicólogo titulado. Válido para los fines que lo requieras."
      }
    }
  ]
};

export default function InformePsicologicoChillanPage() {
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
        Informe Psicológico en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Realizo informes psicológicos profesionales para diversos fines:
        médicos, legales, laborales y personales. Documento formal con
        evaluación completa.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Tipos de informes
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { tipo: "Evaluación bariátrica", desc: "Para cirugía de manga gástrica, bypass y otros.", link: "/evaluacion-bariatrica-chillan" },
            { tipo: "Certificado de salud mental", desc: "Para trámites laborales, licencias o permisos.", link: "/certificado-salud-mental-chillan" },
            { tipo: "Informe clínico", desc: "Estado actual, diagnóstico y recomendaciones de tratamiento." },
            { tipo: "Informe para tribunales", desc: "Evaluaciones requeridas en procesos judiciales." },
            { tipo: "Aptitud psicológica", desc: "Para porte de armas, trabajos específicos u otros." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>
                {item.link ? (
                  <Link href={item.link} style={{ color: "#000", textDecoration: "underline" }}>{item.tipo}</Link>
                ) : item.tipo}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Qué incluye?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Datos de identificación",
            "Motivo de la evaluación",
            "Antecedentes relevantes",
            "Técnicas y métodos utilizados",
            "Resultados de la evaluación",
            "Conclusiones profesionales",
            "Recomendaciones (cuando aplica)",
            "Firma y timbre profesional",
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
          Proceso
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "1. Contacto inicial para definir el tipo de informe",
            "2. Sesión(es) de evaluación (1-3 según complejidad)",
            "3. Elaboración del informe",
            "4. Entrega del documento (generalmente en 1 semana)",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto cuesta un informe?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Depende del tipo y complejidad. Contáctame con los detalles de lo
              que necesitas y te doy un presupuesto exacto.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Lo puedo hacer online?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Algunas evaluaciones sí, otras requieren presencialidad. Depende
              del propósito del informe y sus requerimientos.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿El informe tiene validez legal?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, es un documento profesional formal con firma y timbre de
              psicólogo titulado. Válido para los fines que lo requieras.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Solicita tu informe
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Cuéntame qué necesitas y te oriento.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Consultar →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Evaluación bariátrica", href: "/evaluacion-bariatrica-chillan" },
            { label: "Certificado salud mental", href: "/certificado-salud-mental-chillan" },
            { label: "Consulta precio", href: "/consulta-psicologica-precio-chillan" },
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

