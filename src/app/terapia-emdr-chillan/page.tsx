import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terapia EMDR en Chillán, Chile | Gonzalo Pedrosa - Psicólogo",
  description:
    "Terapia EMDR en Chillán, Chile. Tratamiento para trauma, ansiedad y estrés postraumático con EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares).",
  alternates: {
    canonical: "/terapia-emdr-chillan",
  },
};

export default function TerapiaEmdrChillanPage() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
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
        Terapia EMDR en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        EMDR (Eye Movement Desensitization and Reprocessing) es una terapia
        reconocida internacionalmente para el tratamiento del trauma y otras
        dificultades emocionales.
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
          ¿Qué es EMDR?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          EMDR es una psicoterapia integradora que utiliza estimulación
          bilateral (movimientos oculares u otras formas) para ayudar al cerebro
          a procesar recuerdos traumáticos o perturbadores que no se han
          integrado adecuadamente.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Desarrollada por Francine Shapiro en 1987, EMDR está reconocida por la
          OMS y diversas organizaciones de salud mental como tratamiento
          efectivo para el trauma.
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
            "Estrés postraumático",
            "Trauma infantil",
            "Ansiedad",
            "Fobias",
            "Duelo complicado",
            "Ataques de pánico",
            "Experiencias difíciles",
            "Baja autoestima",
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
              ¿EMDR es seguro?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, EMDR es una terapia segura cuando es aplicada por un
              profesional entrenado. Es reconocida por la OMS y otras
              organizaciones de salud a nivel mundial.
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
              ¿Cuántas sesiones se necesitan?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El número de sesiones varía según el caso. Traumas únicos pueden
              procesarse en pocas sesiones, mientras que traumas complejos o
              múltiples requieren más tiempo.
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
              Sí, EMDR puede adaptarse al formato{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                online
              </Link>{" "}
              utilizando diferentes formas de estimulación bilateral. Evaluamos
              juntos la modalidad más adecuada.
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
          Consultar →
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
            { label: "Especialista ansiedad", href: "/psicologo-especialista-ansiedad-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
            { label: "Online", href: "/terapia-online" },
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
  );
}

