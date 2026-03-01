import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificado de Salud Mental en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Certificado de salud mental en Chillán. Documento profesional para trámites laborales, licencias, permisos y otros requerimientos.",
  alternates: {
    canonical: "/certificado-salud-mental-chillan",
  },
  openGraph: {
    title: "Certificado de Salud Mental en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Certificado de salud mental en Chillán. Documento profesional para trámites laborales, licencias, permisos y otros requerimientos.",
    url: "https://www.gonzalopedrosa.cl/certificado-salud-mental-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificado de Salud Mental en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Certificado de salud mental en Chillán. Documento profesional para trámites laborales, licencias, permisos y otros requerimientos.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto demora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente se entrega el mismo día de la evaluación o al día siguiente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es lo mismo que un informe psicológico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El certificado es más breve y general. El{\" \"} informe{\" \"} es más detallado y requiere más sesiones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Me pueden rechazar el certificado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si la evaluación muestra condiciones que contraindican lo que necesitas (ej: porte de armas), el certificado lo reflejará. No puedo emitir un documento falso."
      }
    }
  ]
};

export default function CertificadoSaludMentalChillanPage() {
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
        Certificado de Salud Mental en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Emito certificados de salud mental para diversos trámites. Documento
        profesional con evaluación del estado psicológico actual.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Para qué se usa?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Trámites laborales y postulaciones",
            "Licencia de conducir (en algunos casos)",
            "Porte de armas",
            "Adopción",
            "Trámites migratorios",
            "Seguros y previsión",
            "Otros requerimientos institucionales",
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
          El proceso
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Entrevista clínica breve (30-45 min)",
            "Evaluación del estado mental actual",
            "Aplicación de instrumentos si es requerido",
            "Emisión del certificado",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Importante</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El certificado refleja el estado psicológico al momento de la
          evaluación. Si necesitas un{" "}
          <Link href="/informe-psicologico-chillan" style={{ color: "#0369a1", textDecoration: "underline" }}>informe más detallado</Link>,
          el proceso es diferente.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto demora?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Generalmente se entrega el mismo día de la evaluación o al día
              siguiente.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es lo mismo que un informe psicológico?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. El certificado es más breve y general. El{" "}
              <Link href="/informe-psicologico-chillan" style={{ color: "#000", textDecoration: "underline" }}>informe</Link>{" "}
              es más detallado y requiere más sesiones.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Me pueden rechazar el certificado?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Si la evaluación muestra condiciones que contraindican lo que
              necesitas (ej: porte de armas), el certificado lo reflejará.
              No puedo emitir un documento falso.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Agenda tu evaluación
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Certificado profesional con entrega rápida.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Informe psicológico", href: "/informe-psicologico-chillan" },
            { label: "Evaluación bariátrica", href: "/evaluacion-bariatrica-chillan" },
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




