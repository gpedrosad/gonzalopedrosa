import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { RelatedReading } from "@/app/components/RelatedReading";
import {
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const title = "Terapia EMDR en Chillán: especialista en TEPT, qué es";
const description =
  "Terapia EMDR en Chillán: qué es el método y cómo entra si buscas especialista en TEPT. Las fases están en la guía. El ejercicio gratuito no es esa sesión.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/terapia-emdr-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title,
    description,
    url: "https://www.gonzalopedrosa.cl/terapia-emdr-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: getTwitterDescription(description),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Terapia EMDR Chillán" },
];

const emdrFAQs = [
  {
    question: "¿Qué es EMDR?",
    answer:
      "EMDR significa desensibilización y reprocesamiento por movimientos oculares. Es una psicoterapia para cuando un recuerdo sigue activo. La estimulación bilateral es una parte del procedimiento, no el tratamiento entero. Las fases están en la guía de qué es el EMDR.",
  },
  {
    question: "¿El ejercicio bilateral del sitio es una sesión de EMDR?",
    answer:
      "No. Es un recurso gratuito para un malestar leve. No procesa un abuso, un accidente ni un TEPT. La pregunta sobre el ejercicio y la terapia marca ese límite.",
  },
  {
    question: "¿Cuántas sesiones de EMDR se necesitan?",
    answer:
      "No hay un número que sirva para todos. Un recuerdo único y un trauma complejo no se abordan igual. Esta página no promete un plazo.",
  },
  {
    question: "¿Se puede hacer EMDR online?",
    answer:
      "La atención de esta página existe en Chillán y por videollamada. La modalidad se conversa. El ejercicio gratuito no es esa sesión.",
  },
];

const faqSchema = getPageFAQSchema(emdrFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Terapia EMDR",
  description:
    "Tratamiento EMDR para trauma y estrés postraumático en Chillán o por videollamada.",
  areaServed: "Chillán",
});

export default function TerapiaEmdrChillanPage() {
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
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/yo.png"
          alt="Retrato de Gonzalo Pedrosa, psicólogo clínico"
          width={64}
          height={64}
            sizes="64px"
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
        loading="lazy"
        />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>
            Psicólogo Clínico · +7 años · EMDR y trauma
          </p>
        </div>
      </div>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
          lineHeight: 1.1,
        }}
      >
        Qué mirar si buscas un especialista en TEPT
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        Si buscas un especialista en TEPT, primero conviene saber qué es el
        trastorno y qué terapias se nombran para adultos. En Chillán trabajo
        trauma y estrés postraumático con EMDR, presencial o{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          online
        </Link>
        . Esta página es la de atención. No reemplaza la guía que explica el cuadro.
      </p>

      <section
        style={{
          padding: "1.25rem",
          backgroundColor: "#fafafa",
          borderRadius: "12px",
          marginBottom: "2.5rem",
          border: "1px solid #eaeaea",
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
          Trauma y TEPT
        </p>
        <p style={{ color: "#444", fontSize: "0.875rem", lineHeight: 1.6 }}>
          EMDR es una de las técnicas que uso para trauma. Qué es el trastorno
          de estrés postraumático, y qué suele buscar quien escribe especialista
          en TEPT, está en la{" "}
          <Link href="/guias/que-es-el-tept" style={{ color: "#000", textDecoration: "underline" }}>
            qué es el TEPT
          </Link>
          . Las fases del método están en{" "}
          <Link href="/guias/que-es-el-emdr" style={{ color: "#000", textDecoration: "underline" }}>
            qué es la terapia EMDR
          </Link>
          . Qué es un trauma psicológico, antes del nombre TEPT, está en{" "}
          <Link href="/preguntas/que-es-un-trauma-psicologico" style={{ color: "#000", textDecoration: "underline" }}>
            qué es un trauma psicológico
          </Link>
          . El ejercicio gratuito de estimulación bilateral es para un malestar leve y no procesa un trauma: está en{" "}
          <Link href="/emdr-autoadministrado" style={{ color: "#000", textDecoration: "underline" }}>
            el ejercicio de estimulación bilateral
          </Link>{" "}
          y sus límites en{" "}
          <Link href="/preguntas/emdr-autoadministrado-y-terapia" style={{ color: "#000", textDecoration: "underline" }}>
            límites del ejercicio bilateral
          </Link>
          . La ficha local sigue en{" "}
          <Link href="/estres-postraumatico-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            estrés postraumático en Chillán
          </Link>
          .
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
          Especialista en estrés postraumático
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          Si la frase que escribiste es especialista en estrés postraumático, es
          la misma búsqueda que especialista en TEPT: alguien que evalúe un
          recuerdo que sigue activo. Qué hace en ese trabajo está en{" "}
          <Link href="/preguntas/que-hace-un-especialista-en-estres-postraumatico" style={{ color: "#000", textDecoration: "underline" }}>
            esta pregunta
          </Link>
          . Qué es el cuadro está en la{" "}
          <Link href="/guias/que-es-el-tept" style={{ color: "#000", textDecoration: "underline" }}>
            guía de TEPT
          </Link>
          . Esta página sigue siendo la de atención con EMDR en Chillán.
        </p>
      </section>

      <div
        style={{
          marginBottom: "2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
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
          Agendar evaluación EMDR →
        </Link>
        <Link
          href="/psicologo-abuso-sexual-chillan"
          style={{ fontSize: "0.875rem", color: "#666", textDecoration: "underline" }}
        >
          Trauma y abuso sexual
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
          Qué es el EMDR
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          EMDR significa desensibilización y reprocesamiento por movimientos
          oculares. Se usa cuando un recuerdo sigue disparando miedo, vergüenza
          o imágenes. La estimulación bilateral (ojos, sonidos o golpes suaves
          alternados) es una parte del procedimiento, no el tratamiento entero.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La guía de la OMS de 2013 sobre condiciones relacionadas con el estrés
          nombra, para adultos con TEPT, terapias centradas en el trauma, entre
          ellas la cognitivo-conductual y el EMDR, cuando las aplica personal de
          salud capacitado. Que una guía lo nombre no dice cuántas horas te
          corresponden ni un resultado. El detalle de las fases está en{" "}
          <Link href="/guias/que-es-el-emdr" style={{ color: "#000", textDecoration: "underline" }}>
            qué es el EMDR
          </Link>
          . El cuadro está en la{" "}
          <Link href="/guias/que-es-el-tept" style={{ color: "#000", textDecoration: "underline" }}>
            guía de TEPT
          </Link>
          . Qué cuenta como trauma, antes del nombre del trastorno, está en{" "}
          <Link href="/preguntas/que-es-un-trauma-psicologico" style={{ color: "#000", textDecoration: "underline" }}>
            qué es un trauma psicológico
          </Link>
          .
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          El sitio tiene un{" "}
          <Link href="/emdr-autoadministrado" style={{ color: "#000", textDecoration: "underline" }}>
            ejercicio de estimulación bilateral
          </Link>{" "}
          gratuito para emoción cotidiana o estrés leve. No es una sesión de
          EMDR y no se usa para reprocesar un abuso, un accidente o un TEPT. Ese
          límite está en{" "}
          <Link href="/preguntas/emdr-autoadministrado-y-terapia" style={{ color: "#000", textDecoration: "underline" }}>
            la pregunta del ejercicio y la terapia
          </Link>
          .
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
          ¿Para qué sirve?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Estrés postraumático", href: "/estres-postraumatico-chillan" },
            { label: "Trauma infantil", href: "/superar-trauma-infancia-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Abuso sexual", href: "/psicologo-abuso-sexual-chillan" },
            { label: "Duelo complicado", href: "/psicologo-duelo-chillan" },
            { label: "Ataques de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Fobias", href: "/psicologo-fobia-social-chillan" },
            { label: "Baja autoestima", href: "/psicologo-baja-autoestima-chillan" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "0.75rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                fontSize: "0.875rem",
                color: "#444",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1.25rem",
          }}
        >
          Cómo funciona
        </h2>
        <ol style={{ listStyle: "none", padding: 0, counterReset: "step" }}>
          {[
            {
              title: "Historia clínica",
              desc: "Evaluación inicial y preparación del plan de tratamiento",
            },
            {
              title: "Preparación",
              desc: "Aprendizaje de técnicas de regulación emocional",
            },
            {
              title: "Evaluación",
              desc: "Identificación de recuerdos objetivo a procesar",
            },
            {
              title: "Desensibilización",
              desc: "Procesamiento con estimulación bilateral",
            },
            {
              title: "Instalación",
              desc: "Fortalecimiento de creencias positivas",
            },
            {
              title: "Cierre",
              desc: "Estabilización y evaluación del progreso",
            },
          ].map((step, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1.75rem",
                  height: "1.75rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <div>
                <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                  {step.title}
                </strong>
                <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                  {step.desc}
                </span>
              </div>
            </li>
          ))}
        </ol>
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
          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Qué es EMDR?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Es una psicoterapia para un recuerdo que sigue activo. La
              estimulación bilateral es una parte, no el procedimiento completo.
              Las fases están en la guía de qué es el EMDR. Esta página no
              promete un resultado.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿El ejercicio bilateral del sitio es una sesión de EMDR?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. Es un recurso gratuito para un malestar leve. No procesa un
              abuso, un accidente ni un TEPT. Si al usarlo aparecen imágenes que
              no puedes guardar, la propia página pide que lo pares.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Cuántas sesiones de EMDR se necesitan?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No hay un número que sirva para todos. Un recuerdo único y un
              trauma complejo no se abordan igual. Esta página no promete un
              plazo.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Se puede hacer EMDR online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La atención existe en Chillán y por{" "}
              <Link
                href="/psicologo-online-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                videollamada
              </Link>
              . La modalidad se conversa. El ejercicio gratuito no es esa sesión.
            </p>
          </details>
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
          Procesa tu pasado, libera tu presente
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Consulta si EMDR puede ayudarte con lo que estás viviendo.
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}
        >
          <Link
            href="/agendar"
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
            Agendar en el sitio →
          </Link>
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.875rem",
              textDecoration: "underline",
            }}
          >
            O escribir por WhatsApp
          </a>
        </div>
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
          Servicios relacionados
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Trauma infancia", href: "/superar-trauma-infancia-chillan" },
            { label: "Estrés postraumático", href: "/estres-postraumatico-chillan" },
            { label: "Abuso sexual", href: "/psicologo-abuso-sexual-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Online", href: "/psicologo-online-chillan" },
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
    <RelatedReading currentPath="/terapia-emdr-chillan" />
    </main>
    </>
  );
}

