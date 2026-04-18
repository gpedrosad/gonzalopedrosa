import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Señales de cuándo conviene ir al psicólogo en Chillán: malestar que no cede, impacto en sueño o trabajo y más. Orientación con TCC y opción de agendar primera sesión.";

export const metadata: Metadata = {
  title: "Cuándo ir al psicólogo en Chillán | Señales y primer paso | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/cuando-ir-al-psicologo-chillan",
  },
  openGraph: {
    title: "Cuándo ir al psicólogo en Chillán | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/cuando-ir-al-psicologo-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuándo ir al psicólogo en Chillán",
    description: getTwitterDescription(
      "Reconoce si es momento de pedir ayuda psicológica. Chillán y online. Agenda cuando te sientas listo."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Cuándo ir al psicólogo" },
];

const cuandoFAQs = [
  {
    question: "¿Es normal sentir vergüenza por ir al psicólogo?",
    answer:
      "Es muy frecuente. Pedir ayuda no es debilidad: es una decisión práctica para cuidar tu salud mental, igual que ir al médico por un dolor persistente.",
  },
  {
    question: "Si no estoy seguro, ¿puedo conversar una sola sesión?",
    answer:
      "Sí. La primera sesión sirve para aclarar tu situación y ver si encaja el trabajo conjunto, sin compromiso de continuar si no te sientes cómodo.",
  },
  {
    question: "¿Las preocupaciones del día a día cuentan como motivo válido?",
    answer:
      "Sí. No hace falta estar en crisis para consultar: estrés sostenido, cambios de vida o sensación de estar estancado ya son motivos legítimos.",
  },
  {
    question: "¿Atiendes solo en Chillán?",
    answer:
      "Tengo consulta presencial en Chillán y también trabajo por videollamada con personas de otras comunas o regiones.",
  },
];

const faqSchema = getFAQSchema(cuandoFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Orientación sobre cuándo consultar psicología clínica",
  description:
    "Información y primera evaluación para personas que dudan si es momento de iniciar psicoterapia. Enfoque cognitivo-conductual en Chillán y online.",
  areaServed: "Chillán",
});

export default function CuandoIrAlPsicologoChillanPage() {
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
      <main
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "4rem 1.5rem",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <Breadcrumb items={breadcrumbItems} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <Image
            src="/yo.png"
            alt="Gonzalo Pedrosa - Psicólogo"
            width={64}
            height={64}
            priority
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
            }}
          />
          <div>
            <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
            <p style={{ fontSize: "0.875rem", color: "#666" }}>
              Psicólogo Clínico · +7 años de experiencia
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "0.75rem",
          }}
        >
          Chillán y online
        </p>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Cuándo ir al psicólogo en Chillán
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "3rem",
            lineHeight: 1.6,
          }}
        >
          Muchas personas esperan a estar “muy mal” para pedir ayuda. En la práctica clínica, quienes
          llegan antes suelen recuperar rutinas y relaciones con menos desgaste. Esta página resume
          señales frecuentes —no un diagnóstico— para que decidas con información.
        </p>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Señales de que puede ser buen momento
          </h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
            {[
              "El malestar lleva semanas o meses y no mejora con descanso o cambios pequeños.",
              "Lo que te pasa afecta el sueño, el apetito o la concentración de forma sostenida.",
              "Evitas situaciones importantes (trabajo, estudios, reuniones familiares) por miedo o vergüenza.",
              "Sientes que “arrastras” el ánimo o la energía la mayor parte del día.",
              "Discutís más de lo habitual o te aislás de personas que antes te importaban.",
              "Pensamientos angustiantes o recuerdos intrusivos aparecen varias veces al día.",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  fontSize: "0.9375rem",
                  color: "#444",
                }}
              >
                <span style={{ color: "#000", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Diferencia entre un mal rato y algo que conviene abordar
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            Un mal día o una semana cargada son parte de la vida. Se suele plantear consulta cuando el
            patrón se repite, cuando perdés funciones que antes te resultaban naturales (dormir,
            relacionarte, rendir) o cuando la angustia aparece sin un desencadenante claro y no se
            calma solo. Si no estás seguro, una{" "}
            <Link
              href="/primera-consulta-psicologo-chillan"
              style={{ color: "#000", textDecoration: "underline" }}
            >
              primera consulta
            </Link>{" "}
            puede aclararlo en una sola sesión.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Cómo trabajo si decides empezar
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            Utilizo principalmente{" "}
            <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              Terapia Cognitivo-Conductual (TCC)
            </Link>
            , con foco en hábitos, pensamientos y conductas que mantienen el malestar. El objetivo no
            es eternizar el proceso: es darte herramientas que puedas usar fuera de la sesión.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Preguntas frecuentes
          </h2>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            {cuandoFAQs.map((faq, index) => (
              <details
                key={index}
                style={{
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                }}
              >
                <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
                  {faq.question}
                </summary>
                <p
                  style={{
                    marginTop: "0.75rem",
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: "0.9375rem",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "2rem",
            backgroundColor: "#000",
            borderRadius: "16px",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              color: "#fff",
            }}
          >
            Si te identificas con varias señales, conversemos
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
              fontSize: "0.9375rem",
            }}
          >
            Respondo en menos de 24 horas. También puedes{" "}
            <Link href="/agendar" style={{ color: "#fff", textDecoration: "underline" }}>
              agendar por el sitio
            </Link>
            .
          </p>
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
            }}
          >
            Escribir por WhatsApp →
          </a>
        </section>

        <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "0.75rem",
            }}
          >
            Te puede interesar
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Primera consulta", href: "/primera-consulta-psicologo-chillan" },
              { label: "Online vs presencial", href: "/terapia-online-vs-presencial-chillan" },
              { label: "Terapia online", href: "/terapia-online" },
              { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{
                  color: "#666",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  padding: "0.375rem 0.75rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "9999px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </>
  );
}
