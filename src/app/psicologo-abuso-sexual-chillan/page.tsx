import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  SITE_URL,
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Acompañamiento psicológico confidencial para abuso sexual en Chillán u online. EMDR y TCC, a tu ritmo, con reserva discreta y espacio seguro.";

export const metadata: Metadata = {
  title: "Psicólogo por abuso sexual en Chillán | Atención confidencial",
  description,
  alternates: {
    canonical: "/psicologo-abuso-sexual-chillan",
  },
  openGraph: {
    title: "Psicólogo por abuso sexual en Chillán | Gonzalo Pedrosa",
    description,
    url: `${SITE_URL}/psicologo-abuso-sexual-chillan`,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo por abuso sexual en Chillán",
    description: getTwitterDescription(
      "Atención psicológica confidencial por abuso sexual en Chillán u online. EMDR y TCC, a tu ritmo, con reserva discreta."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo abuso sexual Chillán" },
];

const abusoFAQs = [
  {
    question: "¿Tengo que contar todo lo que pasó?",
    answer:
      "No. Trabajamos a tu ritmo. Puedes compartir lo que te sientas cómodo/a compartiendo. El proceso respeta tus límites.",
  },
  {
    question: "¿Aunque haya pasado hace muchos años?",
    answer:
      "Sí. El trauma puede afectar durante décadas si no se procesa. Nunca es tarde para buscar ayuda y sanar.",
  },
  {
    question: "¿Es realmente confidencial?",
    answer:
      "100%. Todo está protegido por secreto profesional. La única excepción es si hay riesgo vital o se trata de un menor en peligro actual.",
  },
];

const faqSchema = getFAQSchema(abusoFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicología trauma por abuso sexual",
  description:
    "Acompañamiento psicológico confidencial para procesar trauma por abuso sexual en Chillán o por videollamada.",
  areaServed: "Chillán",
});

export default function PsicologoAbusoSexualChillanPage() {
  return (
    <>
      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        <Breadcrumb items={breadcrumbItems} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={64} height={64} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Chillán, Chile</p>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo por abuso sexual en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Si buscas psicólogo por abuso sexual en Chillán, ofrezco un espacio confidencial para procesar
        el trauma a tu ritmo, con{" "}
        <Link href="/terapia-emdr-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          EMDR
        </Link>{" "}
        y TCC, presencial u{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          online
        </Link>
        . No fue tu culpa; no tienes que cargarlo solo/a.
      </p>

      <div style={{ marginBottom: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
        <Link
          href="/agendar"
          style={{
            display: "inline-flex",
            padding: "0.75rem 1.25rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}
        >
          Agendar consulta confidencial →
        </Link>
      </div>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Si estás en crisis</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Fono Denuncia: 600 400 0101 (24/7)<br />
          Fono Familia Carabineros: 149 (24/7)<br />
          Si necesitas ayuda urgente, no dudes en llamar.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Efectos comunes del trauma
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Flashbacks, pesadillas o recuerdos intrusivos",
            "Vergüenza, culpa o sentirte \"sucio/a\"",
            "Dificultad para confiar en otros",
            "Problemas en relaciones íntimas",
            "Ansiedad, depresión o disociación",
            "Evitación de situaciones que recuerdan el trauma",
            "Problemas con la imagen corporal",
            "Sensación de estar dañado/a o ser diferente",
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
          Cómo trabajamos
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El proceso es a tu ritmo. No hay obligación de hablar de detalles si
          no quieres. Trabajamos con:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Crear un espacio seguro y de confianza",
            "Estabilización emocional primero",
            "Procesamiento del trauma cuando estés listo/a",
            "Reconstruir tu sentido de seguridad",
            "Trabajar la culpa y la vergüenza",
            "Recuperar tu vida y relaciones",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tengo que contar todo lo que pasó?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. Trabajamos a tu ritmo. Puedes compartir lo que te sientas
              cómodo/a compartiendo. El proceso respeta tus límites.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Aunque haya pasado hace muchos años?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. El trauma puede afectar durante décadas si no se procesa.
              Nunca es tarde para buscar ayuda y sanar.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es realmente confidencial?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              100%. Todo está protegido por secreto profesional. La única
              excepción es si hay riesgo vital o se trata de un menor en
              peligro actual.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Mereces sanar
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No fue tu culpa. Y no tienes que cargar esto solo/a.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
          <Link href="/agendar" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
            Agendar en el sitio →
          </Link>
          <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", textDecoration: "underline" }}>
            O escribir por WhatsApp
          </a>
        </div>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Trauma infancia", href: "/superar-trauma-infancia-chillan" },
            { label: "Estrés postraumático", href: "/estres-postraumatico-chillan" },
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



