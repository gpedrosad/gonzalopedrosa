import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gonzalo Pedrosa | Psicólogo",
  description:
    "Psicólogo con más de 7 años de experiencia. Atención profesional para ansiedad, depresión, estrés y más. Terapia cognitivo-conductual. Sesiones online y presenciales.",
  alternates: {
    canonical: "/",
  },
};

const testimonios = [
  {
    texto:
      "Me ayudó mucho a entender mis patrones de pensamiento. Muy profesional y cercano.",
    autor: "M.C.",
  },
  {
    texto:
      "Después de varias sesiones pude manejar mejor mi ansiedad. Recomendado.",
    autor: "P.R.",
  },
  {
    texto:
      "Un espacio seguro donde pude hablar sin sentirme juzgado. Gracias por la ayuda.",
    autor: "J.S.",
  },
  {
    texto:
      "La terapia online funcionó muy bien para mí. Flexible y efectiva.",
    autor: "A.M.",
  },
];

export default function HomePage() {
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
      {/* Hero */}
      <section style={{ textAlign: "center", marginBottom: "4rem" }}>
        <Image
          src="/yo.png"
          alt="Gonzalo Pedrosa - Psicólogo"
          width={120}
          height={120}
          priority
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
            marginBottom: "1.5rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
            lineHeight: 1.1,
          }}
        >
          Gonzalo Pedrosa
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "0.5rem",
          }}
        >
          Psicólogo
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ color: "#fbbf24", fontSize: "1.125rem" }}>★</span>
          <span style={{ fontWeight: 600 }}>4.8</span>
          <span style={{ color: "#999", fontSize: "0.875rem" }}>
            · 280+ experiencias
          </span>
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "#444",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 2rem",
          }}
        >
          Acompañamiento profesional para tu bienestar. Espacio seguro,
          confidencial y con enfoque práctico basado en evidencia.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
            }}
          >
            Agendar sesión →
          </a>
          <Link
            href="/terapia-online"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 1.75rem",
              backgroundColor: "transparent",
              color: "#000",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
            }}
          >
            Terapia online
          </Link>
        </div>
      </section>

      {/* Servicio principal */}
      <section
        style={{
          padding: "1.5rem",
          backgroundColor: "#fafafa",
          borderRadius: "16px",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
              Sesión individual
            </h2>
            <p style={{ color: "#666", fontSize: "0.875rem" }}>50 minutos · Online o presencial</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>$35.000</p>
            <p style={{ color: "#666", fontSize: "0.75rem" }}>CLP</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <span
            style={{
              padding: "0.375rem 0.75rem",
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              color: "#666",
            }}
          >
            Presencial
          </span>
          <span
            style={{
              padding: "0.375rem 0.75rem",
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              fontSize: "0.8125rem",
              color: "#666",
            }}
          >
            Online
          </span>
        </div>
      </section>

      {/* Áreas de trabajo */}
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
          Áreas de trabajo
        </h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            "Ansiedad",
            "Crisis de pánico",
            "Depresión",
            "Estrés",
            "Autoestima",
            "Duelo",
            "Relaciones",
            "Hábitos",
          ].map((item, i) => (
            <span
              key={i}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                color: "#444",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Sobre mí */}
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
          Sobre mí
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Soy psicólogo con más de 7 años de experiencia en atención clínica.
          Trabajo principalmente con terapia cognitivo-conductual, un enfoque
          práctico y basado en evidencia.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Creo en una terapia cercana, sin juicios, donde puedas sentirte
          cómodo para explorar lo que necesitas trabajar. Cada proceso es
          único y lo adaptamos a tus necesidades y ritmo.
        </p>
      </section>

      {/* Testimonios */}
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
          Lo que dicen quienes han consultado
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {testimonios.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "1.25rem",
                backgroundColor: "#fafafa",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  color: "#444",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                  fontSize: "0.9375rem",
                }}
              >
                &ldquo;{t.texto}&rdquo;
              </p>
              <p style={{ color: "#999", fontSize: "0.8125rem" }}>— {t.autor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
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
          ¿Listo para dar el primer paso?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Escríbeme y coordinamos tu primera sesión.
        </p>
        <a
          href="https://wa.me/56968257817"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.75rem",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.9375rem",
          }}
        >
          Contactar por WhatsApp →
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid #eaeaea",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#999", fontSize: "0.8125rem" }}>
          © 2025 Gonzalo Pedrosa · Psicólogo
        </p>
      </footer>
    </main>
  );
}
