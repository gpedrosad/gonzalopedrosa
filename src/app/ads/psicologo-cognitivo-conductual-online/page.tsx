import type { Metadata } from "next";
import {
  CLINICAL_STATS,
  healthProviderIdentifierSchema,
  toCanonicalUrl,
} from "@/lib/site-config";
import {
  ClinicalAdsLanding,
  type ClinicalFaq,
} from "../components/ClinicalAdsLanding";

const LANDING_PATH = "/ads/psicologo-cognitivo-conductual-online";
const LANDING_URL = toCanonicalUrl(LANDING_PATH);
const PRICE_TEXT = new Intl.NumberFormat("es-CL").format(
  CLINICAL_STATS.sessionPriceClp,
);
const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP || "56968257817"
).replace(/\D/g, "");
const WHATSAPP_MESSAGE =
  "Hola, me interesa agendar una sesión de terapia cognitivo-conductual online.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
const CTA_TEXT = "Agendar sesión por WhatsApp";

export const metadata: Metadata = {
  title: "Psicólogo Cognitivo Conductual Online | Gonzalo Pedrosa",
  description: `Terapia cognitivo-conductual online con psicólogo clínico. Sesiones individuales de ${CLINICAL_STATS.sessionMinutes} minutos por videollamada. Agenda por WhatsApp.`,
  robots: { index: false, follow: false },
  alternates: { canonical: LANDING_URL },
  openGraph: {
    title: "Psicólogo Cognitivo Conductual Online",
    description:
      "Terapia online con objetivos claros y herramientas concretas para trabajar ansiedad, estrés, ánimo y patrones que se repiten.",
    url: LANDING_URL,
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/yo.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa, psicólogo clínico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Cognitivo Conductual Online",
    description: `Sesiones online de ${CLINICAL_STATS.sessionMinutes} minutos por $${PRICE_TEXT} CLP.`,
    images: ["/yo.png"],
  },
};

const faqs = [
  {
    question: "¿Cuánto cuesta una sesión?",
    answer: `La sesión online cuesta $${PRICE_TEXT} CLP y dura ${CLINICAL_STATS.sessionMinutes} minutos.`,
  },
  {
    question: "¿Qué es la terapia cognitivo-conductual?",
    answer:
      "Es un enfoque que ayuda a reconocer la relación entre pensamientos, emociones y conductas. En sesión definimos objetivos y trabajamos herramientas concretas para abordar las situaciones que hoy te generan malestar.",
  },
  {
    question: "¿Cómo son las sesiones online?",
    answer:
      "Nos conectamos por videollamada en el horario acordado. Antes de la sesión te envío el enlace. Solo necesitas conexión a internet y un lugar donde puedas conversar con tranquilidad.",
  },
  {
    question: "¿La atención es confidencial?",
    answer:
      "Sí. La atención se rige por la confidencialidad profesional. Para cuidar tu privacidad durante la videollamada, procura conectarte desde un lugar tranquilo y usa audífonos si los necesitas.",
  },
  {
    question: "¿Cuántas sesiones voy a necesitar?",
    answer:
      "Depende de tu motivo de consulta, tus objetivos y cómo avance el proceso. Lo conversamos desde la primera sesión y revisamos el progreso durante el tratamiento.",
  },
  {
    question: "¿Cómo agendo?",
    answer:
      "Escríbeme por WhatsApp. Te respondo directamente con los horarios disponibles, eliges el que te acomode y te envío la información para conectarte.",
  },
] as const satisfies readonly ClinicalFaq[];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Terapia cognitivo-conductual online",
  description:
    "Atención psicológica individual online con enfoque cognitivo-conductual.",
  url: LANDING_URL,
  image: toCanonicalUrl("/yo.png"),
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: `$${PRICE_TEXT} CLP`,
  areaServed: { "@type": "Country", name: "Chile" },
  provider: {
    "@type": "Person",
    name: "Gonzalo Pedrosa",
    jobTitle: "Psicólogo clínico",
    identifier: healthProviderIdentifierSchema,
  },
  makesOffer: {
    "@type": "Offer",
    name: "Sesión de terapia cognitivo-conductual online",
    price: String(CLINICAL_STATS.sessionPriceClp),
    priceCurrency: "CLP",
    url: LANDING_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function AdsPsicologoCognitivoConductualOnlinePage() {
  return (
    <>
      <script
        id="tcc-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="tcc-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ClinicalAdsLanding
        eyebrow="Terapia online · enfoque cognitivo-conductual"
        title="Psicólogo cognitivo-conductual online"
        intro="Una terapia con objetivos claros para comprender lo que mantiene tu malestar y trabajar con herramientas que puedas aplicar fuera de la sesión."
        heroBullets={[
          "Atención individual por videollamada",
          "Objetivos definidos desde el inicio",
          "Herramientas prácticas para tu día a día",
          "Agenda directa con tu psicólogo",
        ]}
        position={{
          eyebrow: "Un enfoque práctico",
          title: "Entender el patrón para empezar a cambiarlo",
          text: "La terapia cognitivo-conductual observa cómo se relacionan lo que piensas, lo que sientes y lo que haces. Ese mapa permite trabajar sobre situaciones concretas, medir avances y ajustar el proceso según tus objetivos.",
          callout:
            "No se trata solo de hablar de lo que ocurre. Se trata de comprenderlo y construir formas distintas de responder.",
        }}
        features={[
          {
            icon: "target",
            title: "Objetivos compartidos",
            text: "Acordamos qué quieres trabajar y usamos esos objetivos para orientar las sesiones.",
          },
          {
            icon: "message",
            title: "Conversación con dirección",
            text: "Revisamos situaciones específicas para reconocer pensamientos, emociones y conductas que se repiten.",
          },
          {
            icon: "user",
            title: "Herramientas aplicables",
            text: "Desarrollamos recursos que puedas practicar en los contextos donde aparece la dificultad.",
          },
        ]}
        situationsTitle="Situaciones que podemos trabajar en terapia"
        situationsIntro="No necesitas llegar con un diagnóstico. Podemos comenzar por lo que estás viviendo y definir juntos un foco de trabajo."
        situations={[
          "Ansiedad y preocupación constante",
          "Estrés y sensación de agotamiento",
          "Pensamientos negativos recurrentes",
          "Dificultades para manejar emociones",
          "Problemas de sueño vinculados al malestar",
          "Baja autoestima e inseguridad",
          "Procrastinación y evitación",
          "Decisiones o cambios difíciles",
        ]}
        processEyebrow="Cómo trabajamos"
        processTitle="Un proceso claro desde la primera sesión"
        processIntro="Cada proceso es distinto, pero el punto de partida y la forma de avanzar deben ser comprensibles para ti."
        steps={[
          {
            title: "Comprendemos tu situación",
            text: "Conversamos sobre lo que te está pasando, cuándo aparece y cómo está afectando tu vida cotidiana.",
          },
          {
            title: "Definimos un foco",
            text: "Acordamos objetivos concretos y priorizamos los cambios que hoy serían más útiles para ti.",
          },
          {
            title: "Practicamos nuevas respuestas",
            text: "Trabajamos herramientas, revisamos lo que ocurre entre sesiones y ajustamos el proceso según tus avances.",
          },
        ]}
        profileIntro={`Soy psicólogo clínico con más de ${CLINICAL_STATS.yearsExperience} años de experiencia. Trabajo desde un enfoque cognitivo-conductual, con una atención cercana, directa y orientada a objetivos que tengan sentido para tu vida cotidiana.`}
        profileBullets={[
          "Atención individual y personalizada",
          "Enfoque cognitivo-conductual",
          "Sesiones online desde cualquier región de Chile",
          "Coordinación directa, sin intermediarios",
        ]}
        faqs={faqs}
        closingTitle="Da el primer paso con una conversación directa"
        closingText="Escríbeme por WhatsApp, cuéntame brevemente qué necesitas trabajar y revisamos los horarios disponibles."
        whatsappHref={WHATSAPP_HREF}
        whatsappLabel="ads-tcc"
        ctaText={CTA_TEXT}
      />
    </>
  );
}
