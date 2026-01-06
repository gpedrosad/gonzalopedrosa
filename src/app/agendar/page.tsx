import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Agendar Sesión | Psicólogo en Chillán, Chile - Gonzalo Pedrosa",
  description:
    "Agenda tu sesión de psicoterapia en Chillán, Chile. Atención presencial y online. Contacto directo por WhatsApp o correo electrónico.",
  alternates: {
    canonical: "/agendar",
  },
};

export default function AgendarPage() {
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
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/yo.png"
          alt="Gonzalo Pedrosa - Psicólogo"
          width={80}
          height={80}
          priority
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
        />
        <div>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "0.25rem",
              lineHeight: 1.1,
            }}
          >
            Agenda tu sesión
          </h1>
          <p style={{ color: "#666", fontSize: "0.9375rem" }}>
            Gonzalo Pedrosa · Psicólogo
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Dar el primer paso es lo más importante. Escríbeme para coordinar una
        sesión inicial, resolver tus dudas o consultar disponibilidad.
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
          Contacto directo
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.25rem",
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#000",
              transition: "border-color 150ms ease",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>💬</span>
            <span>
              <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                WhatsApp
              </strong>
              <span style={{ fontSize: "0.875rem", color: "#666" }}>
                +56 9 6825 7817
              </span>
            </span>
          </a>

          <a
            href="mailto:gpedrosadom@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.25rem",
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#000",
              transition: "border-color 150ms ease",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>✉️</span>
            <span>
              <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                Email
              </strong>
              <span style={{ fontSize: "0.875rem", color: "#666" }}>
                gpedrosadom@gmail.com
              </span>
            </span>
          </a>
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
          ¿Qué esperar?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Respondo dentro de 24 horas hábiles. En el primer contacto
          conversaremos brevemente sobre tu situación y acordaremos un horario.
          La primera sesión es para conocernos y evaluar juntos si el proceso
          puede ayudarte.
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
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <li
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "9999px",
              fontSize: "0.875rem",
            }}
          >
            Presencial en Chillán
          </li>
          <li
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "9999px",
              fontSize: "0.875rem",
            }}
          >
            Online
          </li>
        </ul>
      </section>

      <nav
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid #eaeaea",
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <Button href="/terapia-online" variant="secondary">
          Terapia Online
        </Button>
        <Button href="/psicologo-ansiedad-chillan" variant="secondary">
          Ansiedad
        </Button>
        <Button href="/psicologo-adulto-chillan" variant="secondary">
          Adultos
        </Button>
      </nav>
    </main>
  );
}
