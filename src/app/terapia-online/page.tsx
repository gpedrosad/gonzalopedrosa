import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Terapia Online | Psicólogo en Chillán, Chile - Gonzalo Pedrosa",
  description:
    "Sesiones de psicoterapia online desde Chillán, Chile. Atención profesional por videollamada, cómoda, confidencial y flexible. Agenda tu primera sesión.",
  alternates: {
    canonical: "/terapia-online",
  },
};

export default function TerapiaOnlinePage() {
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
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>
            Psicólogo · Chillán
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
        Terapia Online
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Accede a acompañamiento profesional desde cualquier lugar. Flexible,
        cómoda y con la misma efectividad que las sesiones presenciales.
      </p>

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
          <li
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1.25rem",
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
              1
            </span>
            <div>
              <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                Contacto inicial
              </strong>
              <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                Me escribes por{" "}
                <a
                  href="https://wa.me/56968257817"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  WhatsApp
                </a>{" "}
                o correo para coordinar un horario.
              </span>
            </div>
          </li>
          {[
            {
              title: "Confirmación",
              desc: "Te envío el enlace de videollamada junto con instrucciones básicas.",
            },
            {
              title: "Sesión",
              desc: "Nos conectamos en el horario acordado. Duración: 50 minutos.",
            },
            {
              title: "Seguimiento",
              desc: "Acordamos la frecuencia según tus necesidades.",
            },
          ].map((step, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.25rem",
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
                {i + 2}
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
          Ventajas
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
            "Sin traslados",
            "Mayor flexibilidad horaria",
            "Acceso desde cualquier ubicación",
            "Mismo nivel de confidencialidad",
            "Comodidad de tu propio espacio",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#444",
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
          Requisitos técnicos
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
          {["Internet estable", "Cámara y micrófono", "Espacio privado"].map(
            (item, i) => (
              <li
                key={i}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                }}
              >
                {item}
              </li>
            )
          )}
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
              ¿Es igual de efectiva que la terapia presencial?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Diversos estudios indican que la terapia online puede ser tan
              efectiva como la presencial para muchas problemáticas, siempre que
              se mantengan las condiciones adecuadas.
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
              ¿Qué plataforma utilizan?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Utilizo plataformas seguras de videollamada (Zoom, Google Meet u
              otra según preferencia). El enlace se envía antes de cada sesión.
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
              ¿Puedo combinar sesiones online y presenciales?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, es posible alternar modalidades según tu disponibilidad y
              preferencia.
            </p>
          </details>
        </div>
      </section>

      <section
        style={{
          padding: "2rem",
          backgroundColor: "#fafafa",
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
          }}
        >
          ¿Listo para comenzar?
        </h2>
        <p
          style={{
            color: "#666",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Agenda tu primera sesión online y da el primer paso.
        </p>
        <Button href="/agendar">Agendar sesión</Button>
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
        </div>
      </nav>
    </main>
  );
}
