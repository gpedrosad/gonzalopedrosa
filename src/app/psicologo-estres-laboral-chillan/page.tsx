import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Psicólogo Estrés Laboral en Chillán | Presión y Agotamiento Laboral",
  description:
    "Psicólogo para estrés laboral en Chillán. Presión del trabajo, exigencias constantes y agotamiento por la carga laboral. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-estres-laboral-chillan",
  },
  openGraph: {
    title: "Psicólogo Estrés Laboral en Chillán | Presión y Agotamiento Laboral",
    description:
      "Psicólogo para estrés laboral en Chillán. Presión del trabajo, exigencias constantes y agotamiento por la carga laboral. Sesiones presenciales y online.",
    url: "https://www.gonzalopedrosa.cl/psicologo-estres-laboral-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Estrés Laboral en Chillán | Presión y Agotamiento Laboral",
    description: getTwitterDescription("Psicólogo para estrés laboral en Chillán. Presión del trabajo, exigencias constantes y agotamiento por la carga laboral. Sesiones presenciales y online."),
  },
};



const psicologo_estres_laboral_chillanFAQs = [
  {
    question: "¿Debería renunciar a mi trabajo?",
    answer:
      "No necesariamente. En terapia trabajamos para que puedas tomar decisiones informadas sobre tu carrera, desarrollando herramientas que pueden ayudarte en tu trabajo actual o prepararte para un cambio si es lo mejor para ti.",
  },
  {
    question: "¿Cuántas sesiones necesito?",
    answer:
      "Depende de la severidad del cuadro y tus objetivos. Muchas personas notan mejoría significativa en 8-12 sesiones, aunque el proceso puede ser más breve o extenso según cada caso.",
  },
  {
    question: "¿Puedo tener sesiones fuera del horario de oficina?",
    answer:
      "Sí, tengo horarios flexibles. La terapia online ofrece aún más flexibilidad para adaptarse a tu agenda.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Estres Laboral Chillán" },
];

export default function PsicologoEstresLaboralChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_estres_laboral_chillanFAQs}
        serviceType="Psicología Estres Laboral"
        serviceDescription={"Psicólogo para estrés laboral en Chillán. Presión del trabajo, exigencias constantes y agotamiento por la carga laboral. Sesiones presenciales y online."}
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
          alt="Gonzalo Pedrosa - Psicólogo"
          width={56}
          height={56}
          priority
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
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
        Psicólogo Estrés Laboral en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1rem",
          lineHeight: 1.6,
        }}
      >
        El estrés laboral crónico puede afectar seriamente tu salud física y
        mental. Si sientes que el trabajo te está sobrepasando, es momento de
        buscar ayuda profesional.
      </p>

      <p
        style={{
          fontSize: "0.9375rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Aquí trabajamos la presión y el agotamiento ligados al trabajo, no el
        síndrome de estar quemado: si llevas meses con agotamiento crónico,
        cinismo y sensación de ineficacia, revisa el{" "}
        <Link
          href="/tratamiento-burnout-chillan"
          style={{ color: "#000", textDecoration: "underline" }}
        >
          tratamiento para burnout en Chillán
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
          Señales de estrés laboral
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            "Agotamiento constante",
            "Irritabilidad",
            "Dificultad para desconectar",
            "Insomnio",
            "Dolores de cabeza",
            "Falta de motivación",
            "Problemas de concentración",
            "Cinismo hacia el trabajo",
          ].map((item, i) => (
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
              {item}
            </div>
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
            marginBottom: "1rem",
          }}
        >
          ¿Qué es el burnout?
        </h2>
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            El síndrome de burnout o &quot;estar quemado&quot; es un estado de
            agotamiento físico, emocional y mental causado por estrés laboral
            crónico. Se caracteriza por:
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
            {[
              "Agotamiento extremo que no mejora con descanso",
              "Distanciamiento mental del trabajo (cinismo)",
              "Reducción de la eficacia profesional",
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
          Cómo puedo ayudarte
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar fuentes de estrés y patrones disfuncionales",
            "Desarrollar estrategias de afrontamiento efectivas",
            "Establecer límites saludables en el trabajo",
            "Técnicas de manejo del tiempo y priorización",
            "Recuperar el equilibrio vida-trabajo",
            "Trabajar la ansiedad asociada",
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
              <span style={{ color: "#000" }}>✓</span>
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Debería renunciar a mi trabajo?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No necesariamente. En terapia trabajamos para que puedas tomar
              decisiones informadas sobre tu carrera, desarrollando herramientas
              que pueden ayudarte en tu trabajo actual o prepararte para un
              cambio si es lo mejor para ti.
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
              ¿Cuántas sesiones necesito?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Depende de la severidad del cuadro y tus objetivos. Muchas
              personas notan mejoría significativa en 8-12 sesiones, aunque el
              proceso puede ser más breve o extenso según cada caso.
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
              ¿Puedo tener sesiones fuera del horario de oficina?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, tengo horarios flexibles. La{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>{" "}
              ofrece aún más flexibilidad para adaptarse a tu agenda.
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
          Recupera tu bienestar
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          El trabajo no debería costarte la salud.
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
          Agendar sesión →
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
          Servicios relacionados
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Tratamiento de burnout", href: "/tratamiento-burnout-chillan" },
            { label: "Hombres", href: "/psicologo-hombres-chillan" },
            { label: "Adultos", href: "/psicologo-adulto-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
            { label: "Psicólogo online", href: "/psicologo-online-chillan" },
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

