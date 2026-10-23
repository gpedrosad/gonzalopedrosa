import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProfessionalCredentials } from "@/app/components/ProfessionalCredentials";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { RelatedReading } from "@/app/components/RelatedReading";
import { getTwitterDescription } from "@/lib/schemas";

const description =
  "Psicólogo para adultos en Chillán: ansiedad, ánimo, relaciones, duelo y trabajo. El primer proceso parte por el contexto, sin diagnóstico ni plazo.";

export const metadata: Metadata = {
  title: "Psicólogo para adultos en Chillán: temas de consulta",
  description,
  alternates: {
    canonical: "/psicologo-adulto-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Psicólogo para adultos en Chillán: temas de consulta",
    description,
    url: "https://www.gonzalopedrosa.cl/psicologo-adulto-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo para adultos en Chillán: temas de consulta",
    description: getTwitterDescription(description),
  },
};



const psicologo_adulto_chillanFAQs = [
  {
    question: "¿Con qué frecuencia son las sesiones?",
    answer:
      "Generalmente comenzamos con sesiones semanales. A medida que avanza el proceso, la frecuencia puede espaciarse según tus avances.",
  },
  {
    question: "¿Puedo elegir entre presencial y online?",
    answer:
      "Sí, ofrezco ambas modalidades. Puedes elegir la que mejor se adapte e incluso alternarlas. Más info en terapia online.",
  },
  {
    question: "¿Cómo elegir un buen psicólogo?",
    answer:
      "Es importante sentirte cómodo con tu terapeuta y que te explique el proceso con claridad.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo para adultos y hombres" },
];

export default function PsicologoAdultoChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_adulto_chillanFAQs}
        serviceType="Psicología Adulto"
        serviceDescription={"Psicólogo para adultos y hombres en Chillán. Ansiedad, estrés, depresión y crisis vital. Sesiones presenciales y online."}
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
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "0.125rem",
            }}
          >
            Chillán, Chile
          </p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
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
        Psicólogo para adultos en Chillán: temas de consulta
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Si buscas psicólogo para adultos en Chillán, aquí ves qué temas se
        trabajan y cómo suele partir un proceso. También cubre la búsqueda de
        psicólogo para hombres. El enfoque es cognitivo-conductual, presencial
        u online. No es un ranking de profesionales.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.3 }}>
          Qué temas traen los adultos
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          En la adultez la consulta suele mezclar más de un tema: ansiedad que
          no baja al terminar la jornada, un ánimo plano durante semanas, una
          relación que se repite, un duelo o la sensación de estar estancado en
          el trabajo. No es una lista de diagnósticos. El ánimo, sin un test,
          está en{" "}
          <Link href="/preguntas/senales-de-depresion" style={{ color: "#000", textDecoration: "underline" }}>
            cómo saber si tengo depresión
          </Link>
          . La diferencia entre alarma y exigencia está en{" "}
          <Link href="/preguntas/ansiedad-o-estres" style={{ color: "#000", textDecoration: "underline" }}>
            ansiedad o estrés
          </Link>
          .
        </p>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.3 }}>
          Cómo suele ir un primer proceso
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          No necesitas llegar con un diagnóstico ni con el relato ordenado. En
          la primera conversación se mira el contexto y se acuerda qué quieres
          cambiar. La frecuencia de partida suele ser semanal y después puede
          espaciarse. El detalle de esa hora está en{" "}
          <Link href="/primera-consulta-psicologo-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            qué pasa en la primera consulta
          </Link>
          . Cada cuánto seguir está en{" "}
          <Link href="/preguntas/cada-cuanto-ir-al-psicologo" style={{ color: "#000", textDecoration: "underline" }}>
            cada cuánto ir al psicólogo
          </Link>
          . Si dudas entre psicólogo y psiquiatra, la{" "}
          <Link href="/guias/psicologo-o-psiquiatra" style={{ color: "#000", textDecoration: "underline" }}>
            guía
          </Link>{" "}
          los separa. Cuándo tiene sentido pedir compañía está en{" "}
          <Link href="/cuando-ir-al-psicologo-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            cuándo ir al psicólogo
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
          Motivos frecuentes de consulta
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            {
              label: "Crisis de pánico",
              href: "/psicologo-crisis-de-panico-chillan",
            },
            { label: "Síntomas depresivos", href: "/psicologo-depresion-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Relaciones interpersonales", href: "/psicologo-apego-chillan" },
            { label: "Duelo y pérdidas", href: "/psicologo-duelo-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Adicciones", href: "/psicologo-adicciones-chillan" },
          ].map((item, i) =>
            item.href ? (
              <Link
                key={i}
                href={item.href}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {item.label} →
              </Link>
            ) : (
              <div
                key={i}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "#444",
                }}
              >
                {item.label}
              </div>
            )
          )}
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
            marginBottom: "1rem",
          }}
        >
          Enfoque de trabajo
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Mi aproximación se basa principalmente en la{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>
          , complementada con técnicas de otras corrientes según tus
          necesidades. El proceso es colaborativo: trabajamos hacia objetivos
          que tú defines.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Las sesiones ofrecen un espacio confidencial donde explorar tus
          dificultades y desarrollar herramientas prácticas.
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
          ¿Cuándo buscar ayuda?
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "0.5rem",
          }}
        >
          {[
            "Malestar emocional que persiste en el tiempo",
            "Dificultad para manejar situaciones cotidianas",
            "Problemas que afectan tu trabajo o relaciones",
            "Sensación de estar estancado o sin dirección",
            "Patrones de comportamiento que quieres cambiar",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#444",
                fontSize: "0.9375rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#000",
                  borderRadius: "9999px",
                  flexShrink: 0,
                }}
              />
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
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Con qué frecuencia son las sesiones?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Generalmente comenzamos con sesiones semanales. A medida que
              avanza el proceso, la frecuencia puede espaciarse según tus
              avances.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Puedo elegir entre presencial y online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, ofrezco ambas modalidades. Puedes elegir la que mejor se
              adapte e incluso alternarlas. Más info en{" "}
              <Link
                href="/psicologo-online-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>
              .
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Cómo elegir un buen psicólogo?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Es importante sentirte cómodo con tu terapeuta y que te explique el
              proceso con claridad.
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
          Comienza tu proceso
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Si es momento de buscar apoyo profesional, te invito a dar el primer
          paso.
        </p>
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
          Agendar sesión <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
          Una primera consulta para adultos y hombres
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Si es tu primera vez en terapia, puedes comenzar contando qué te trae
          a consulta y qué te gustaría cambiar. No necesitas llegar con un
          diagnóstico ni saber cómo explicar todo. En la primera sesión
          revisamos tu contexto y acordamos objetivos para el trabajo posterior.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La sesión individual dura 50 minutos y cuesta $35.000. Puedes elegir
          atención presencial en Chillán o videollamada desde Chile. Emito
          boleta para solicitar reembolso Isapre según las condiciones de tu plan.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Revisa el{" "}
          <Link href="/consulta-psicologica-precio-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            valor y las formas de pago
          </Link>
          {" "}antes de{" "}
          <Link href="/agendar" style={{ color: "#000", textDecoration: "underline" }}>
            agendar sesión
          </Link>
          .
        </p>
      </section>

      <ProfessionalCredentials />

      <nav
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid #eaeaea",
        }}
      >
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
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "TOC / ERP", href: "/tratamiento-toc-chillan" },
            { label: "EMDR", href: "/terapia-emdr-chillan" },
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Obesidad", href: "/psicologo-obesidad-chillan" },
            { label: "Psicólogo online", href: "/psicologo-online-chillan" },
          ].map((item) => (
            <Link
              key={item.href}
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
      <RelatedReading currentPath="/psicologo-adulto-chillan" />
    </main>
    </>
  );
}
