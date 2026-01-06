import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo en Chillán Viejo | Gonzalo Pedrosa - Atención Cercana",
  description:
    "Psicólogo en Chillán Viejo y alrededores. Atención presencial cercana y terapia online. Ansiedad, depresión, estrés y más. Agenda tu hora.",
  alternates: {
    canonical: "/psicologo-chillan-viejo",
  },
};

export default function PsicologoChillanViejoPage() {
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
            Chillán Viejo y alrededores
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
        Psicólogo en Chillán Viejo
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Si vives en Chillán Viejo o sus alrededores y buscas atención
        psicológica cercana, puedo ayudarte. Ofrezco sesiones presenciales en
        Chillán y{" "}
        <Link
          href="/terapia-online"
          style={{ color: "#000", textDecoration: "underline" }}
        >
          terapia online
        </Link>{" "}
        para mayor comodidad.
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
          Ubicación y acceso
        </h2>
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            Atiendo en Chillán centro, a pocos minutos de Chillán Viejo. Si
            prefieres evitar el traslado, la modalidad online es una excelente
            alternativa con la misma efectividad.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <span
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                borderRadius: "9999px",
                fontSize: "0.875rem",
              }}
            >
              Presencial en Chillán
            </span>
            <span
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fff",
                border: "1px solid #eaeaea",
                borderRadius: "9999px",
                fontSize: "0.875rem",
              }}
            >
              Online desde cualquier lugar
            </span>
          </div>
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
          Motivos de consulta
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
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Depresión", href: null },
            { label: "Estrés", href: null },
            { label: "Problemas de pareja", href: null },
            { label: "Duelo", href: null },
            { label: "Autoestima", href: null },
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
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Trabajo principalmente con{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>
          , un enfoque práctico y basado en evidencia. Las sesiones son un
          espacio seguro y confidencial donde trabajamos juntos hacia tus
          objetivos.
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
          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Atiende directamente en Chillán Viejo?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La consulta presencial está en Chillán centro. Si el traslado es
              un inconveniente, la terapia online es una alternativa cómoda y
              efectiva.
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
              ¿Qué horarios tiene disponibles?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Tengo horarios de mañana y tarde. Consulta disponibilidad por
              WhatsApp y buscamos el que mejor te acomode.
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
              ¿Necesito hora para hoy?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Si necesitas atención urgente, revisa mi{" "}
              <Link
                href="/hora-psicologo-chillan-hoy"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                disponibilidad para hoy
              </Link>
              .
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
          Agenda tu sesión
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Atención cercana para Chillán Viejo y alrededores.
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
          Contactar por WhatsApp →
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
          Más servicios
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Adultos", href: "/psicologo-adulto-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
            { label: "Online", href: "/terapia-online" },
            { label: "Hora hoy", href: "/hora-psicologo-chillan-hoy" },
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

