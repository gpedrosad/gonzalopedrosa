import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Centro Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo en el centro de Chillán. Ubicación céntrica de fácil acceso. Atención presencial y online. Agenda tu hora.",
  alternates: {
    canonical: "/psicologo-centro-chillan",
  },
  openGraph: {
    title: "Psicólogo Centro Chillán | Gonzalo Pedrosa",
    description: "Psicólogo en el centro de Chillán. Ubicación céntrica de fácil acceso. Atención presencial y online. Agenda tu hora.",
    url: "https://www.gonzalopedrosa.cl/psicologo-centro-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Centro Chillán",
    description: "Psicólogo en el centro de Chillán. Ubicación céntrica de fácil acceso. Atención presencial y online. Agenda tu hora.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué horarios tienen disponibles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Atiendo de lunes a viernes en horarios de mañana y tarde. Escríbeme por{\" \"} WhatsApp {\" \"} para coordinar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo elegir entre presencial y online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tienes flexibilidad total. Puedes combinar sesiones presenciales en el centro con{\" \"} sesiones online {\" \"} según te acomode cada semana."
      }
    },
    {
      "@type": "Question",
      "name": "¿Aceptan Isapre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emito boleta para{\" \"} reembolso Isapre . Recuperas entre el 50-80% según tu plan."
      }
    }
  ]
};

export default function PsicologoCentroChillanPage() {
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
        Psicólogo Centro Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Atención psicológica en el centro de Chillán. Ubicación de fácil acceso
        para quienes trabajan o viven en el centro de la ciudad.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Ventajas de la ubicación
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Zona céntrica de fácil acceso",
            "Cerca de transporte público",
            "Estacionamiento disponible en la zona",
            "Ideal si trabajas en el centro",
            "También disponible modalidad online",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>📍 Ubicación</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          La dirección exacta se coordina al agendar tu primera sesión por{" "}
          <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ color: "#0369a1", textDecoration: "underline" }}>
            WhatsApp
          </a>
          . El espacio es privado y cómodo para tu sesión.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Servicios disponibles
        </h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#444", fontSize: "0.875rem", textDecoration: "none", padding: "0.5rem 1rem", backgroundColor: "#fafafa", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Qué horarios tienen disponibles?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Atiendo de lunes a viernes en horarios de mañana y tarde. Escríbeme
              por{" "}
              <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ color: "#000", textDecoration: "underline" }}>
                WhatsApp
              </a>{" "}
              para coordinar.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puedo elegir entre presencial y online?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, tienes flexibilidad total. Puedes combinar sesiones
              presenciales en el centro con{" "}
              <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                sesiones online
              </Link>{" "}
              según te acomode cada semana.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Aceptan Isapre?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Emito boleta para{" "}
              <Link href="/psicologo-reembolso-isapre-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                reembolso Isapre
              </Link>
              . Recuperas entre el 50-80% según tu plan.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Agenda tu sesión
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Atención en el centro de Chillán o desde donde estés.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar por WhatsApp →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Otras ubicaciones</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Chillán Viejo", href: "/psicologo-chillan-viejo" },
            { label: "Online", href: "/psicologo-online-chillan" },
            { label: "Precios", href: "/consulta-psicologica-precio-chillan" },
            { label: "Particular", href: "/psicologo-particular-chillan" },
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




