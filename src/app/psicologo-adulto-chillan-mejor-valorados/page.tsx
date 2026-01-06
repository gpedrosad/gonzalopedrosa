import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title:
    "Cómo Elegir un Psicólogo Bien Valorado en Chillán, Chile | Guía Práctica",
  description:
    "Guía para elegir un psicólogo bien valorado en Chillán, Chile. Qué considerar al buscar un profesional de salud mental: formación, enfoque, experiencia y más.",
  alternates: {
    canonical: "/psicologo-adulto-chillan-mejor-valorados",
  },
};

export default function PsicologoMejorValoradosChillanPage() {
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
        Guía • Chillán, Chile
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
        Cómo Elegir un Psicólogo Bien Valorado
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Encontrar un profesional con quien te sientas cómodo es fundamental.
        Esta guía te ayudará a identificar aspectos importantes al momento de
        elegir.
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
          Qué considerar
        </h2>

        <div style={{ display: "grid", gap: "1rem" }}>
          {[
            {
              num: "01",
              title: "Formación y credenciales",
              desc: "Verifica que tenga título de psicólogo y esté habilitado. Puedes consultar el Registro Nacional de Prestadores de la Superintendencia de Salud.",
            },
            {
              num: "02",
              title: "Enfoque terapéutico",
              desc: (
                <>
                  El{" "}
                  <Link
                    href="/psicologo-cognitivo-conductual-chillan"
                    style={{ color: "#000", textDecoration: "underline" }}
                  >
                    enfoque cognitivo-conductual
                  </Link>{" "}
                  es uno de los más respaldados, pero otros enfoques también
                  pueden ser efectivos.
                </>
              ),
            },
            {
              num: "03",
              title: "Especialización",
              desc: (
                <>
                  Si tienes un motivo específico ({" "}
                  <Link
                    href="/psicologo-ansiedad-chillan"
                    style={{ color: "#000", textDecoration: "underline" }}
                  >
                    ansiedad
                  </Link>
                  ,{" "}
                  <Link
                    href="/psicologo-crisis-de-panico-chillan"
                    style={{ color: "#000", textDecoration: "underline" }}
                  >
                    pánico
                  </Link>
                  ,{" "}
                  <Link
                    href="/psicologo-adicciones-chillan"
                    style={{ color: "#000", textDecoration: "underline" }}
                  >
                    adicciones
                  </Link>
                  ), busca experiencia en esa área.
                </>
              ),
            },
            {
              num: "04",
              title: "Modalidad",
              desc: (
                <>
                  Considera si prefieres sesiones presenciales o{" "}
                  <Link
                    href="/terapia-online"
                    style={{ color: "#000", textDecoration: "underline" }}
                  >
                    terapia online
                  </Link>
                  . Ambas pueden ser efectivas.
                </>
              ),
            },
            {
              num: "05",
              title: "Vínculo terapéutico",
              desc: "La relación con tu terapeuta es uno de los factores más importantes. Es válido tener una sesión exploratoria.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem",
                backgroundColor: "#fafafa",
                borderRadius: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#999",
                  flexShrink: 0,
                }}
              >
                {item.num}
              </span>
              <div>
                <strong
                  style={{
                    display: "block",
                    marginBottom: "0.375rem",
                    color: "#000",
                  }}
                >
                  {item.title}
                </strong>
                <span
                  style={{
                    color: "#666",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </span>
              </div>
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
          Señales de un buen profesional
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
            "Es claro sobre su forma de trabajar",
            "Respeta la confidencialidad",
            "Escucha activamente sin emitir juicios",
            "Establece objetivos en conjunto contigo",
            "Responde tus preguntas sobre el proceso",
            "No hace promesas de resultados garantizados",
            "Deriva cuando es necesario",
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
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Los rankings de &quot;mejores psicólogos&quot; son confiables?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Ten precaución con rankings sin metodología clara. Las reseñas
              pueden ser útiles como referencia, pero tu propia experiencia con
              el profesional es lo más importante.
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
              ¿Qué hago si no me siento cómodo con mi psicólogo?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Es válido cambiar de profesional si no sientes conexión. Un buen
              psicólogo entenderá y puede ayudarte a buscar un colega más
              adecuado.
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
              ¿Debería elegir según precio?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El precio no refleja necesariamente la calidad. Lo importante es
              encontrar un profesional competente con quien puedas trabajar
              bien.
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
        }}
      >
        <h2
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Atención para adultos en Chillán
        </h2>
        <p
          style={{
            color: "#666",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
          }}
        >
          Si buscas atención psicológica para{" "}
          <Link
            href="/psicologo-adulto-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            adultos en Chillán
          </Link>
          , te invito a conocer mi forma de trabajo. Ofrezco una primera sesión
          donde podemos evaluar juntos si soy el profesional adecuado.
        </p>
        <Button href="/agendar">Contactar</Button>
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
          Servicios disponibles
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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
