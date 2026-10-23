import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { getBreadcrumbSchema, getPageFAQSchema } from "@/lib/schemas";
import { toCanonicalUrl } from "@/lib/site-config";
import { guides } from "./_content/guides";
import {
  OG_IMAGE,
  QUESTION_HUB,
  informationalPath,
  pagesByCluster,
} from "@/lib/informational-content";

const title = QUESTION_HUB.title;
const description = QUESTION_HUB.description;
const path = "/preguntas";
const url = toCanonicalUrl(path);

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Preguntas" },
];

const faqs = [
  {
    question: "¿Estas páginas reemplazan una consulta?",
    answer:
      "No. Cada guía ordena una pregunta frecuente con información general. Una evaluación escucha tu historia, tu contexto y el riesgo. Eso no cabe en un texto igual para todo el mundo.",
  },
  {
    question: "¿Las respuestas describen pacientes de este sitio?",
    answer:
      "No. No hay cifras de resultados ni relatos de personas atendidas. Cuando un dato clínico aparece, viene de clasificaciones públicas como el DSM-5-TR o la CIE-11, no de una estadística del consultorio.",
  },
  {
    question: "¿Por dónde sigo si ya tengo un tema concreto?",
    answer:
      "Al final de cada guía hay enlaces a páginas del sitio sobre ese tema, como ansiedad, duelo, ludopatía o terapia online. Esas páginas bajan al motivo. Estas preguntas se quedan en la explicación.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Gonzalo Pedrosa - Psicólogo",
    locale: "es_CL",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

const blurbs: Record<string, string> = {
  "cuanto-dura-una-terapia-psicologica":
    "Qué factores alargan o acortan un proceso, sin un número mágico de sesiones.",
  "que-es-la-terapia-cognitivo-conductual":
    "Qué mira la TCC en una sesión y qué puedes esperar de los ejercicios entre semana.",
  "la-terapia-online-funciona":
    "En qué condiciones la videollamada se parece a la sala, y cuándo el formato queda corto.",
  "ansiedad-o-estres":
    "Cómo distinguir una alarma pegada a una exigencia de una preocupación que sigue después.",
  "la-ludopatia-es-una-enfermedad":
    "Por qué las clasificaciones hablan de trastorno adictivo y la familia dice enfermedad.",
  "pareja-con-adiccion-al-juego":
    "Límites con la plata, cómo hablar con hechos y por qué tu desgaste también importa.",
  "cada-cuanto-ir-al-psicologo":
    "Por qué al inicio suele servir una vez por semana y cuándo tiene sentido espaciar.",
  "que-es-un-ataque-de-panico":
    "Qué es el pico de minutos, en qué se diferencia de la ansiedad del día y cuándo ver a un médico.",
  "cuanto-dura-un-duelo":
    "Por qué no hay una fecha para estar bien y qué umbrales usan las clasificaciones para evaluar.",
};

const extraQuestions = pagesByCluster("preguntas");

export default function PreguntasIndexPage() {
  return (
    <>
      <JsonLd id="breadcrumb" data={getBreadcrumbSchema(breadcrumbItems) as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={getPageFAQSchema(faqs) as Record<string, unknown>} />
      <main
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 4rem",
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          color: "#1c1c1c",
        }}
      >
        <Breadcrumb items={breadcrumbItems} />
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#888",
            margin: "0 0 0.75rem",
          }}
        >
          Guía informativa
        </p>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 7vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 1rem",
          }}
        >
          {QUESTION_HUB.h1}
        </h1>
        <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#222", margin: "0 0 1.5rem" }}>
          Aquí hay respuestas directas a preguntas que la gente escribe antes de entender un malestar o un
          tratamiento. Cada página contesta una sola cosa en el primer párrafo y después explica los matices.
          El texto es general: no diagnostica, no promete un plazo y no cuenta casos de personas atendidas. Si
          quieres una lectura más larga, parte por las <Link href="/guias">guías</Link>.
        </p>

        <h2 style={{ fontSize: "1.35rem", fontWeight: 650, margin: "2rem 0 0.75rem" }}>Cómo leer estas guías</h2>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0 0 1rem" }}>
          Parte por la pregunta que más se parece a la tuya. Si dudas entre dos, lee las dos: ansiedad y
          estrés se tocan, y lo mismo pasa con el duelo y el ánimo bajo. Si la duda es el ánimo,{" "}
          <Link href="/preguntas/senales-de-depresion" style={{ color: "#111", textDecoration: "underline" }}>
            cómo saber si tengo depresión
          </Link>{" "}
          lista señales sin poner un diagnóstico. Quédate con los criterios, no con una
          etiqueta puesta a la rápida.
        </p>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0 0 1rem" }}>
          Cuando una guía menciona el DSM-5-TR o la CIE-11, está citando clasificaciones públicas para ubicar
          un término. Esos manuales no se aplican solos. Un profesional mira duración, intensidad, contexto y
          riesgo. Una coincidencia con un párrafo no confirma un trastorno.
        </p>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0 0 1rem" }}>
          Al final de cada texto hay enlaces a páginas ya publicadas en este sitio, por ejemplo sobre terapia
          online, ludopatía o la primera consulta. Esas páginas bajan al motivo. Estas preguntas se quedan en
          la explicación. Quien escribe es{" "}
          <Link href="/perfil" style={{ color: "#111", textDecoration: "underline" }}>
            Gonzalo Pedrosa, psicólogo clínico en Chillán
          </Link>
          . El sitio también atiende por videollamada. Esta sección no es un llamado a reservar hora.
        </p>

        <h2 style={{ fontSize: "1.35rem", fontWeight: 650, margin: "2rem 0 0.75rem" }}>Qué puedes hacer con una respuesta</h2>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0 0 1rem" }}>
          Usa el primer párrafo como mapa corto y sigue leyendo si el caso tiene más de una capa. Anota qué parte
          te calza y qué parte no. Llevar esas frases a una evaluación ahorra tiempo: llegas con un relato más
          ordenado y con preguntas concretas sobre frecuencia, modalidad o el tipo de profesional.
        </p>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0 0 1rem" }}>
          Hay temas que este índice no cubre, como informes, certificados o el valor de una sesión. Esos
          contenidos ya viven en otras rutas del sitio. Si tu búsqueda es un nombre de comuna más un problema,
          entra a la página de ese problema. Si tu búsqueda es una pregunta, empieza por esta lista.
        </p>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0 0 1rem" }}>
          La lectura también tiene un límite de cuidado. Si hay riesgo para ti o para otra persona, deja la guía
          y llama al 131, a Salud Responde (600 360 7777) o al Fono de la Esperanza (717 200 200). Si hay
          violencia, Carabineros atiende en el 133. Una explicación clara no reemplaza esa llamada.
        </p>

        <h2 style={{ fontSize: "1.35rem", fontWeight: 650, margin: "2rem 0 0.75rem" }}>Las preguntas</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem" }}>
          {guides.map((guide) => (
            <li key={guide.slug} style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
              <Link href={guide.path} style={{ color: "#111", fontWeight: 650, textDecoration: "underline" }}>
                {guide.h1}
              </Link>
              <p style={{ margin: "0.25rem 0 0", color: "#333" }}>{blurbs[guide.slug]}</p>
            </li>
          ))}
          {extraQuestions.map((page) => (
            <li key={page.slug} style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
              <Link
                href={informationalPath(page)}
                style={{ color: "#111", fontWeight: 650, textDecoration: "underline" }}
              >
                {page.h1}
              </Link>
              <p style={{ margin: "0.25rem 0 0", color: "#333" }}>{page.description}</p>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: "1.35rem", fontWeight: 650, margin: "2rem 0 0.75rem" }}>Otras dudas frecuentes</h2>
        <div>
          {faqs.map((faq) => (
            <details key={faq.question} style={{ borderTop: "1px solid #eee", padding: "0.85rem 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, lineHeight: 1.45 }}>{faq.question}</summary>
              <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "#333", margin: "0.75rem 0 0" }}>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#444", marginTop: "2rem" }}>
          Si tú o alguien cercano está en riesgo, llama al 131, a Salud Responde (600 360 7777) o al Fono de la
          Esperanza (717 200 200). Si hay violencia, Carabineros atiende en el 133. La diferencia entre psicólogo
          y psiquiatra está en la guía{" "}
          <Link href="/guias/psicologo-o-psiquiatra" style={{ color: "#111" }}>
            psicólogo y psiquiatra
          </Link>
          .
        </p>
      </main>
    </>
  );
}
