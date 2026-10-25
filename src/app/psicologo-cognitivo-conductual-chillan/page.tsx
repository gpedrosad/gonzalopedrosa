import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";
import { RelatedReading } from "@/app/components/RelatedReading";

const title = "Psicólogo cognitivo conductual en Chillán y online";
const description =
  "Psicólogo cognitivo conductual en Chillán y por videollamada. La TCC mira pensamiento, emoción y conducta. Una sesión revisa la semana, un punto y un paso.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/psicologo-cognitivo-conductual-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title,
    description,
    url: "https://www.gonzalopedrosa.cl/psicologo-cognitivo-conductual-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: getTwitterDescription(description),
  },
};



const psicologo_cognitivo_conductual_chillanFAQs = [
  {
    question: "¿Qué es la terapia cognitivo-conductual?",
    answer:
      "Mira la relación entre una situación, un pensamiento, una emoción y lo que haces después. El foco está en el presente. La definición larga está en la pregunta, sin la ficha de atención.",
  },
  {
    question: "¿Cómo suele ir una sesión?",
    answer:
      "Se revisa la semana, se trabaja un punto y queda un paso para la siguiente. No hay un número de sesiones que sirva para todos.",
  },
  {
    question: "¿La TCC se puede hacer online?",
    answer:
      "Sí. Esta atención existe en Chillán y por videollamada. En qué condiciones el formato se parece a la sala está en la pregunta de si la terapia online funciona. Esta página no publica una tasa de resultado.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Cognitivo Conductual Chillán" },
];

export default function PsicologoCognitivoConductualChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_cognitivo_conductual_chillanFAQs}
        serviceType="Psicología Cognitivo Conductual"
        serviceDescription={"Psicólogo con enfoque cognitivo-conductual (TCC) en Chillán. Terapia para ansiedad, depresión y más. Sesiones presenciales y online."}
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
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>
            Gonzalo Pedrosa
          </p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo</p>
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
        Chillán, Chile
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
        Psicólogo cognitivo conductual en Chillán y online
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Si buscas psicólogo o psicóloga cognitivo conductual, esta página es la
        atención en Chillán y por videollamada. La TCC mira cómo un pensamiento,
        una emoción y una conducta se empujan. La definición, sin esta ficha,
        está en{" "}
        <Link href="/preguntas/que-es-la-terapia-cognitivo-conductual" style={{ color: "#000", textDecoration: "underline" }}>
          qué es la terapia cognitivo-conductual
        </Link>
        . Cuando el tema son obsesiones y rituales, una forma de TCC es la ERP:{" "}
        <Link href="/preguntas/que-es-la-erp-para-el-toc" style={{ color: "#000", textDecoration: "underline" }}>
          qué es la ERP para el TOC
        </Link>{" "}
        y la atención en{" "}
        <Link href="/tratamiento-toc-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          terapia ERP para el TOC en Chillán
        </Link>
        .
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
          ¿Qué es la TCC?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La terapia cognitivo-conductual parte de la idea de que nuestros
          pensamientos influyen en cómo nos sentimos y actuamos. A través de
          técnicas específicas, aprendemos a identificar patrones poco útiles y
          desarrollar formas más adaptativas de afrontar las situaciones.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Es un enfoque activo y colaborativo: se acuerdan objetivos que se
          pueden observar y hay tareas entre sesiones. Si una herramienta no
          calza, se ajusta. La definición larga sigue en la pregunta de arriba.
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
          Cómo suele ir un proceso
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          En una sesión se elige un problema concreto y se arma un mapa: qué
          situación lo dispara, qué pensamiento aparece, qué emoción sube y qué
          haces después. El trabajo mira el presente. Si una historia antigua
          sigue empujando ese círculo, se nombra, y el énfasis queda en lo que
          puedes ensayar esta semana.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Una hora ordenada revisa la semana, trabaja un punto y deja un paso
          para la siguiente. No hay un número de sesiones que sirva para todos.
          Esa duda está en{" "}
          <Link href="/preguntas/cuanto-dura-una-terapia-psicologica" style={{ color: "#000", textDecoration: "underline" }}>
            cuánto dura una terapia psicológica
          </Link>
          .
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Si el tema es la ansiedad, la página de{" "}
          <Link href="/psicologo-ansiedad-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            ansiedad en Chillán
          </Link>{" "}
          sigue desde ahí. Si aparece un pico de miedo de minutos, la guía{" "}
          <Link href="/guias/ataque-de-panico-que-hacer" style={{ color: "#000", textDecoration: "underline" }}>
            qué hacer en un ataque de pánico
          </Link>{" "}
          y la pregunta{" "}
          <Link href="/preguntas/que-es-un-ataque-de-panico" style={{ color: "#000", textDecoration: "underline" }}>
            qué es un ataque de pánico
          </Link>{" "}
          lo separan de la preocupación del día.
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
          Efectiva para
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
              label: "Trastorno de pánico",
              href: "/psicologo-crisis-de-panico-chillan",
            },
            { label: "Depresión", href: null },
            { label: "TOC", href: "/tratamiento-toc-chillan" },
            { label: "Estrés postraumático", href: null },
            { label: "Problemas de sueño", href: null },
            { label: "Adicciones", href: "/psicologo-adicciones-chillan" },
            { label: "Baja autoestima", href: null },
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
          Características
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "0.75rem",
          }}
        >
          {[
            {
              title: "Basado en evidencia",
              desc: "Técnicas validadas en investigación científica",
            },
            {
              title: "Orientado a objetivos",
              desc: "Metas concretas y medibles",
            },
            {
              title: "Limitado en el tiempo",
              desc: "Generalmente de duración definida",
            },
            {
              title: "Práctico",
              desc: "Herramientas aplicables en la vida cotidiana",
            },
            {
              title: "Colaborativo",
              desc: "El paciente es parte activa del cambio",
            },
          ].map((item, i) => (
            <li
              key={i}
              style={{
                padding: "1rem",
                backgroundColor: "#fafafa",
                borderRadius: "12px",
              }}
            >
              <strong
                style={{ display: "block", marginBottom: "0.25rem", color: "#000" }}
              >
                {item.title}
              </strong>
              <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                {item.desc}
              </span>
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
              ¿Qué es la terapia cognitivo-conductual?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Mira la relación entre una situación, un pensamiento, una emoción
              y lo que haces después. El foco está en el presente. La definición
              larga está en la pregunta, sin la ficha de atención.
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
              ¿Cómo suele ir una sesión?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Se revisa la semana, se trabaja un punto y queda un paso para la
              siguiente. No hay un número de sesiones que sirva para todos.
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
              ¿La TCC se puede hacer online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí. Esta atención existe en Chillán y por{" "}
              <Link
                href="/psicologo-online-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                videollamada
              </Link>
              . En qué condiciones el formato se parece a la sala está en la
              pregunta de si la terapia online funciona. Esta página no publica
              una tasa de resultado.
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
          Inicia tu proceso con TCC
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Si buscas un enfoque práctico y basado en evidencia.
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
          <Link
            href="/psicologo-ansiedad-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Ansiedad
          </Link>
          <Link
            href="/psicologo-crisis-de-panico-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Crisis de pánico
          </Link>
          <Link
            href="/psicologo-adulto-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Adultos
          </Link>
          <Link
            href="/psicologo-adicciones-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Adicciones
          </Link>
          <Link
            href="/terapia-online"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >Psicólogo online</Link>
        </div>
      </nav>
    <RelatedReading currentPath="/psicologo-cognitivo-conductual-chillan" />
    </main>
    </>
  );
}
