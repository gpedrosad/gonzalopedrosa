import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import { RelatedReading } from "@/app/components/RelatedReading";
import { Button } from "../components/Button";
import {
  ONLINE_CLUSTER,
  getClusterBreadcrumb,
} from "@/lib/intent-clusters";
import {
  SITE_URL,
  getBreadcrumbSchema,
  getPageFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Terapia online y psicoterapia online en Chile: videollamada para cualquier región. También terapias online, terapia psicológica online y psicólogo online.";

export const metadata: Metadata = {
  title: "Terapia online y psicoterapia online en Chile",
  description,
  alternates: {
    canonical: "/terapia-online",
  },
  robots: { index: true, follow: true },
  openGraph: {
    locale: "es_CL",
    title: "Terapia online y psicoterapia online en Chile",
    description,
    url: `${SITE_URL}/terapia-online`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia online y psicoterapia online en Chile",
    description: getTwitterDescription(description),
  },
};

const breadcrumbItems = getClusterBreadcrumb(
  ONLINE_CLUSTER,
  "/terapia-online",
);

const terapiaOnlineFAQs = [
  {
    question: "¿Qué es la terapia online y la psicoterapia online?",
    answer:
      "En esta página son la misma videollamada para cualquier región de Chile: una hora, un enlace y un lugar privado. Terapias online, terapia psicológica online y terapia con psicólogo online nombran ese formato. No es un chat ni una urgencia. La consulta presencial está en Chillán. El proceso, la hora y si puede servir están en tres preguntas distintas.",
  },
  {
    question: "¿Terapias online y terapia psicológica online son lo mismo?",
    answer:
      "En esta página, sí, igual que la psicoterapia online. Terapias online, terapia psicológica online y psicoterapia online buscan la videollamada en Chile, no una sede en otra ciudad. El paso a paso de la hora, cómo funciona el proceso y si puede servir están en tres preguntas distintas.",
  },
  {
    question: "¿Qué es la terapia con psicólogo online?",
    answer:
      "Cuando la búsqueda dice terapia psicólogo online, en esta página es la misma videollamada: un psicólogo, una hora y un enlace, para cualquier región de Chile. No es un directorio de sedes ni un chat.",
  },
  {
    question: "¿El reembolso Isapre aplica a la terapia online?",
    answer:
      "Las fichas ya publicadas dicen que la boleta sirve para la videollamada y para la sala, sin convenio directo. El porcentaje lo define tu plan. El detalle, sin un precio, está en la pregunta de reembolso Isapre en la terapia online.",
  },
  {
    question: "¿Dónde está el detalle, sin mezclar las preguntas?",
    answer:
      "Cómo funciona el proceso está en la pregunta de la terapia psicológica online. Cómo es la hora, paso a paso, está en la pregunta de la sesión. Si puede servir, con la evidencia y sus límites, está en la pregunta de si la terapia online funciona.",
  },
  {
    question: "¿Puedo combinar la videollamada con una sala en Chillán?",
    answer:
      "Sí se pueden alternar, si hay una sala a la que puedas ir. La ficha local es la de psicólogo online en Chillán. Esta página explica el formato para cualquier región y no reserva una hora.",
  },
];

const faqSchema = getPageFAQSchema(terapiaOnlineFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Terapia online y psicoterapia online en Chile",
  url: `${SITE_URL}/terapia-online`,
  provider: { "@id": `${SITE_URL}/#persona` },
  areaServed: { "@type": "Country", name: "Chile" },
  description:
    "Terapia online y psicoterapia online en Chile: videollamada para cualquier región. La atención local está en Chillán.",
};

export default function TerapiaOnlinePage() {
  return (
    <>
      <JsonLd id="breadcrumb" data={breadcrumbSchema as Record<string, unknown>} />
      <JsonLd id="service" data={serviceSchema as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={faqSchema as Record<string, unknown>} />
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
            marginBottom: "1.5rem",
          }}
        >
          <Image
            src="/yo.png"
            alt="Retrato de Gonzalo Pedrosa, psicólogo clínico"
            width={56}
            height={56}
            sizes="56px"
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
            }}
          loading="lazy"
        />
          <div>
            <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
            <p style={{ fontSize: "0.875rem", color: "#666" }}>
              Psicólogo · Chillán
            </p>
          </div>
        </div>

        <section
          style={{
            marginBottom: "1.5rem",
            padding: "1rem 1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#444", lineHeight: 1.6, margin: 0 }}>
            Página de Chile, para cualquier región. La consulta local está en{" "}
            <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              psicólogo online en Chillán
            </Link>
            .
          </p>
        </section>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Terapia online y psicoterapia online en Chile
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          Terapia online y psicoterapia online, en Chile, son la misma
          videollamada para cualquier región: una hora, un enlace y un lugar
          privado. Terapias online, terapia psicológica online y terapia con
          psicólogo online nombran ese formato en esta página. No es un chat ni
          una urgencia. Cómo funciona el proceso, cómo es la hora y si puede
          servir tienen pregunta propia, más abajo. La consulta presencial, y
          la ficha local, están en{" "}
          <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            psicólogo online en Chillán
          </Link>
          .
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {terapiaOnlineFAQs[0].question}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            {terapiaOnlineFAQs[0].answer}
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {terapiaOnlineFAQs[1].question}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            {terapiaOnlineFAQs[1].answer}
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {terapiaOnlineFAQs[2].question}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            {terapiaOnlineFAQs[2].answer}
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            Tres preguntas, tres páginas
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            Esta página no repite el proceso, la hora ni la evidencia. Cada
            búsqueda tiene su ficha:
          </p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#444", lineHeight: 1.7 }}>
            <li>
              <Link href="/preguntas/como-funciona-la-terapia-psicologica-online" style={{ color: "#000", textDecoration: "underline" }}>
                ¿Cómo funciona la terapia psicológica online?
              </Link>
              : el proceso, de una semana a la siguiente.
            </li>
            <li>
              <Link href="/preguntas/como-es-una-sesion-de-psicologia-online" style={{ color: "#000", textDecoration: "underline" }}>
                ¿Cómo es una sesión de psicología online?
              </Link>
              : la hora, paso a paso.
            </li>
            <li>
              <Link href="/preguntas/la-terapia-online-funciona" style={{ color: "#000", textDecoration: "underline" }}>
                ¿La terapia online funciona?
              </Link>
              : qué se puede decir de la evidencia, y qué no.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            La sala en Chillán es otra ficha
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            La videollamada de esta página es para quien está en Chile, con
            horario compatible y un lugar donde nadie más escuche. La consulta
            presencial está en Chillán. Si puedes ir a esa sala y quieres
            comparar, está en{" "}
            <Link href="/terapia-online-vs-presencial-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              terapia online y presencial
            </Link>
            . Esta página no abre sedes en otras ciudades.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {terapiaOnlineFAQs[3].question}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            {terapiaOnlineFAQs[3].answer}
          </p>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            <Link
              href="/preguntas/reembolso-isapre-terapia-online"
              style={{ color: "#000", textDecoration: "underline" }}
            >
              Reembolso Isapre en la terapia online
            </Link>
            {" "}
            ordena la boleta y el plan. No copia un precio.
          </p>
        </section>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <Button href="/agendar">Agendar sesión</Button>
          <Link
            href="/psicologo-online-chillan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.25rem",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "#000",
            }}
          >
            Psicólogo online en Chillán
          </Link>
        </div>

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
            {terapiaOnlineFAQs.slice(4).map((faq, index) => (
              <details
                key={index}
                style={{
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                }}
              >
                <summary
                  style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
                >
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

        <RelatedReading currentPath="/terapia-online" />

        <IntentClusterSection currentPath="/terapia-online" />
      </main>
    </>
  );
}
