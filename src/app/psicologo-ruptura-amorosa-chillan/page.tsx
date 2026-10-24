import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { RelatedReading } from "@/app/components/RelatedReading";
import { getTwitterDescription } from "@/lib/schemas";

const description =
  "Si la relación terminó, si tu estado depende del otro o si hay control y miedo, no es el mismo momento. En Chillán se explican los tres, con el Fono Familia 149.";

export const metadata: Metadata = {
  title: "Ruptura, dependencia y una relación tóxica en Chillán",
  description,
  alternates: {
    canonical: "/psicologo-ruptura-amorosa-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Ruptura, dependencia y una relación tóxica en Chillán",
    description,
    url: "https://www.gonzalopedrosa.cl/psicologo-ruptura-amorosa-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruptura, dependencia y una relación tóxica en Chillán",
    description: getTwitterDescription(description),
  },
};



const psicologo_ruptura_amorosa_chillanFAQs = [
  {
    question: "¿Cuánto tiempo toma superar una ruptura?",
    answer:
      "No hay un tiempo fijo. Depende de la duración de la relación, cómo terminó y tus recursos emocionales. La terapia puede acelerar el proceso al trabajarlo activamente.",
  },
  {
    question: "¿Es normal seguir pensando en mi ex?",
    answer:
      "Sí, es parte del proceso de duelo. El problema es cuando estos pensamientos te impiden funcionar o avanzar. Trabajamos técnicas para manejarlos.",
  },
  {
    question: "¿Sirve si la ruptura fue hace mucho?",
    answer:
      "Sí. A veces el dolor se estanca y no se procesa. Se puede conversar ese capítulo aunque haya pasado tiempo. No hay un plazo único.",
  },
  {
    question: "¿Tengo que terminar la relación?",
    answer:
      "No necesariamente. A veces el vínculo mejora y a veces decides que no te conviene. La dependencia no obliga a una ruptura.",
  },
  {
    question: "¿Por qué cuesta salir si hay control?",
    answer:
      "El ciclo de maltrato y reconciliación hace difícil cortar. Si hay violencia física o psicológica grave, llama al Fono Familia 149. Atiende las 24 horas.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Ruptura, dependencia y relación tóxica" },
];

export default function PsicologoRupturaAmorosaChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_ruptura_amorosa_chillanFAQs}
        serviceType="Psicología Ruptura Amorosa"
        serviceDescription={description}
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
          style={{ borderRadius: "9999px", objectFit: "cover" }}
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
        Ruptura, dependencia y una relación tóxica en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        No es lo mismo que la relación haya terminado, que tu estado quede
        tomado por el otro, o que haya control y miedo. Esta página separa esos
        tres momentos. Si siguen juntos y el tema es la pelea, eso es{" "}
        <Link href="/terapia-de-pareja-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          terapia de pareja
        </Link>
        . Cómo se busca cercanía está en la guía de{" "}
        <Link href="/guias/estilos-de-apego" style={{ color: "#000", textDecoration: "underline" }}>
          estilos de apego
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
          Si ya terminó
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dolor intenso y vacío emocional",
            "Pensamientos constantes sobre tu ex",
            "Dificultad para dormir o comer",
            "Culpa o rabia hacia ti mismo/a o hacia el otro",
            "Idealización de la relación pasada",
            "Miedo a estar solo/a",
            "Pérdida de sentido o motivación",
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
          Si tu estado depende del otro
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La dependencia emocional es sentir que no puedes estar sin el otro:
          el miedo al abandono, la aprobación constante, postergarte, tolerar
          lo que te daña o perder el nombre propio dentro de la relación. No
          obliga a terminarla. A veces el vínculo mejora y a veces decides que
          no te conviene.
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Miedo intenso al abandono o al rechazo",
            "Necesidad constante de aprobación",
            "Dificultad para decidir sin el otro",
            "Vacío cuando no estás en pareja",
            "Celos o control que se te van de las manos",
          ].map((item) => (
            <li
              key={item}
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
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Si hay control o miedo
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Una relación con manipulación, control de tus amistades, críticas que
          te achican, ciclos de idealización y desprecio, o aislamiento de tu
          red, no se explica solo como apego. Salir puede ser el primer paso.
          El ciclo de maltrato y reconciliación hace difícil cortar.
        </p>
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#fef3c7",
            borderRadius: "12px",
            border: "1px solid #fcd34d",
          }}
        >
          <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>
            Si hay violencia
          </p>
          <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
            Si estás en una relación con violencia física o psicológica grave,
            busca ayuda especializada. Fono Familia: 149, las 24 horas.
          </p>
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
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Cuánto tiempo toma superar una ruptura?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No hay un tiempo fijo. Depende de la duración de la relación, cómo
              terminó y tus recursos emocionales. La terapia puede acelerar el
              proceso al trabajarlo activamente.
            </p>
          </details>

          <details
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Es normal seguir pensando en mi ex?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, es parte del proceso de duelo. El problema es cuando estos
              pensamientos te impiden funcionar o avanzar. Trabajamos técnicas
              para manejarlos.
            </p>
          </details>

          <details
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Sirve si la ruptura fue hace mucho?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. A veces el dolor se estanca y no se procesa. Se puede
              conversar ese capítulo aunque haya pasado tiempo. No hay un plazo
              único.
            </p>
          </details>

          <details
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Tengo que terminar la relación?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No necesariamente. A veces el vínculo mejora y a veces decides que
              no te conviene. La dependencia no obliga a una ruptura.
            </p>
          </details>

          <details
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Por qué cuesta salir si hay control?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El ciclo de maltrato y reconciliación hace difícil cortar. Si hay
              violencia física o psicológica grave, llama al Fono Familia 149.
              Atiende las 24 horas.
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
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Mereces sanar y avanzar
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          El dolor de una ruptura es real. Permítete recibir ayuda.
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
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Estilos de apego", href: "/guias/estilos-de-apego" },
            { label: "Duelo", href: "/psicologo-duelo-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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
      <RelatedReading currentPath="/psicologo-ruptura-amorosa-chillan" />
    </main>
    </>
  );
}




