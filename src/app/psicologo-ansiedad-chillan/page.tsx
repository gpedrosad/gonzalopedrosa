import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Psicólogo Ansiedad en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en ansiedad en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-ansiedad-chillan",
  },
};

export default function PsicologoAnsiedadChillanPage() {
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
        Psicólogo para Ansiedad
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La ansiedad es una respuesta natural, pero cuando se vuelve persistente
        puede afectar tu calidad de vida. El acompañamiento profesional te ayuda
        a recuperar el equilibrio.
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
          Señales comunes
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
            "Preocupación excesiva o anticipación de lo peor",
            "Tensión muscular, dolores de cabeza o fatiga",
            "Dificultad para concentrarse",
            "Problemas de sueño",
            "Irritabilidad o sensación de estar al límite",
            "Evitación de situaciones que generan malestar",
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
          Enfoque de trabajo
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Trabajo principalmente con{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual (TCC)
          </Link>
          , un enfoque con amplio respaldo en investigación. Las sesiones se
          adaptan a tus necesidades y ritmo personal.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          El proceso incluye comprender los patrones que mantienen la ansiedad,
          desarrollar herramientas concretas y trabajar gradualmente en las
          situaciones que te generan malestar.
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
          Modalidades
        </h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <span
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "9999px",
              fontSize: "0.875rem",
            }}
          >
            Presencial en Chillán
          </span>
          <Link
            href="/terapia-online"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            Terapia online →
          </Link>
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
              ¿Cuánto dura un tratamiento para ansiedad?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La duración varía según cada persona. Algunos notan cambios en
              pocas semanas, mientras otros requieren un proceso más extenso. Lo
              evaluamos juntos durante el tratamiento.
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
              ¿La ansiedad puede derivar en crisis de pánico?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              En algunos casos, la ansiedad sostenida puede manifestarse en{" "}
              <Link
                href="/psicologo-crisis-de-panico-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                crisis de pánico
              </Link>
              . Identificarla tempranamente puede ayudar a prevenir su escalada.
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
              ¿Es confidencial la terapia?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí. Todo lo conversado está protegido por secreto profesional,
              salvo excepciones legales que se explican al inicio del proceso.
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
          Da el primer paso
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Si la ansiedad está afectando tu día a día, conversemos.
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
            href="/psicologo-cognitivo-conductual-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            TCC
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
          >
            Online
          </Link>
        </div>
      </nav>
    </main>
  );
}
