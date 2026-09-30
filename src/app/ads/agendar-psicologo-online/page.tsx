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

const LANDING_PATH = "/ads/agendar-psicologo-online";
const LANDING_URL = toCanonicalUrl(LANDING_PATH);
const PRICE_TEXT = new Intl.NumberFormat("es-CL").format(
  CLINICAL_STATS.sessionPriceClp,
);
const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP || "56968257817"
).replace(/\D/g, "");
const WHATSAPP_MESSAGE = "Hola, quiero agendar una sesión de psicología online.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
const CTA_TEXT = "Agendar sesión por WhatsApp";

export const metadata: Metadata = {
  title: "Agendar Psicólogo Online | Gonzalo Pedrosa",
  description: `Agenda una sesión individual con psicólogo online. Videollamada de ${CLINICAL_STATS.sessionMinutes} minutos por $${PRICE_TEXT} CLP. Coordinación directa por WhatsApp.`,
  robots: { index: false, follow: false },
  alternates: { canonical: LANDING_URL },
  openGraph: {
    title: "Agenda tu psicólogo online",
    description:
      "Coordina directamente una sesión individual por videollamada, sin formularios ni intermediarios.",
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
    title: "Agenda tu psicólogo online",
    description: `Sesión individual online de ${CLINICAL_STATS.sessionMinutes} minutos por $${PRICE_TEXT} CLP.`,
    images: ["/yo.png"],
  },
};

const faqs = [
  {
    question: "¿Cómo agendo una sesión?",
    answer:
      "Escríbeme por WhatsApp. Te respondo directamente con los horarios disponibles, eliges el que te acomode y te envío la información para conectarte.",
  },
  {
    question: "¿Cuánto cuesta la sesión?",
    answer: `La sesión online cuesta $${PRICE_TEXT} CLP y dura ${CLINICAL_STATS.sessionMinutes} minutos.`,
  },
  {
    question: "¿Hay horarios para hoy?",
    answer:
      "La disponibilidad cambia cada día. Escríbeme por WhatsApp y te compartiré las opciones más próximas para que elijas la que te acomode.",
  },
  {
    question: "¿Qué ocurre en la primera sesión?",
    answer:
      "Conversamos sobre lo que estás viviendo, cómo te está afectando y qué te gustaría cambiar. A partir de eso definimos un primer foco de trabajo.",
  },
  {
    question: "¿La atención es confidencial?",
    answer:
      "Sí. La atención se rige por la confidencialidad profesional. Para cuidar tu privacidad durante la videollamada, procura conectarte desde un lugar tranquilo y usa audífonos si los necesitas.",
  },
  {
    question: "¿Puedo reagendar?",
    answer:
      "Sí. Si necesitas cambiar tu hora, avísame con al menos 24 horas de anticipación y buscamos otra opción.",
  },
] as const satisfies readonly ClinicalFaq[];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Psicología online",
  description: "Atención psicológica individual online por videollamada.",
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
    name: "Sesión individual de psicología online",
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

export default function AdsAgendarPsicologoOnlinePage() {
  return (
    <>
      <script
        id="agendar-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="agendar-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ClinicalAdsLanding
        eyebrow="Psicología online · atención individual"
        title="Agenda tu psicólogo online"
        intro="Coordina directamente conmigo una sesión por videollamada. Te comparto los horarios disponibles y eliges el que mejor te acomode."
        heroBullets={[
          "Sin formularios ni intermediarios",
          "Sesión individual de 50 minutos",
          "Atención online desde cualquier región de Chile",
          "Precio y modalidad claros antes de agendar",
        ]}
        position={{
          eyebrow: "Agendar sin complicaciones",
          title: "Llegar a terapia no debería ser otro trámite",
          text: "Cuando decides pedir ayuda, necesitas saber con quién hablarás, cuánto cuesta y qué ocurrirá después. Por eso coordinas directamente conmigo por WhatsApp y recibes opciones concretas de horario.",
          callout:
            "Tú eliges el horario. Yo te envío el enlace de videollamada y la información necesaria para comenzar.",
        }}
        features={[
          {
            icon: "message",
            title: "Contacto directo",
            text: "Me escribes a mí y yo mismo te respondo para coordinar la sesión.",
          },
          {
            icon: "clock",
            title: "Horarios a tu alcance",
            text: "Revisamos las opciones disponibles y eliges la que mejor se ajuste a tu semana.",
          },
          {
            icon: "video",
            title: "Sesión por videollamada",
            text: "Te conectas desde un lugar privado, sin traslados y desde cualquier región de Chile.",
          },
        ]}
        situationsTitle="Puedes comenzar por lo que hoy te preocupa"
        situationsIntro="No necesitas tener todo claro antes de pedir una hora. La primera sesión sirve para ordenar lo que estás viviendo y acordar un foco."
        situations={[
          "Ansiedad y preocupación constante",
          "Estrés y agotamiento",
          "Desánimo o cambios en el estado de ánimo",
          "Dificultad para manejar emociones",
          "Pensamientos negativos recurrentes",
          "Baja autoestima e inseguridad",
          "Crisis o cambios personales difíciles",
          "Problemas para tomar decisiones",
        ]}
        processEyebrow="Qué pasa después de escribir"
        processTitle="Tu sesión queda coordinada en tres pasos"
        processIntro="Sabrás qué hacer y qué esperar desde el primer mensaje."
        steps={[
          {
            title: "Me escribes por WhatsApp",
            text: "Cuéntame brevemente que quieres agendar una sesión de psicología online.",
          },
          {
            title: "Eliges un horario",
            text: "Te comparto las opciones disponibles y eliges la que mejor te acomode.",
          },
          {
            title: "Recibes el enlace",
            text: "Te envío la información de la sesión y el enlace para conectarnos por videollamada.",
          },
        ]}
        profileIntro={`Soy psicólogo clínico con más de ${CLINICAL_STATS.yearsExperience} años de experiencia y formación en terapia cognitivo-conductual. Atiendo dificultades emocionales, ansiedad, estrés y problemas del estado de ánimo desde un enfoque práctico y cercano.`}
        profileBullets={[
          "Atención individual y personalizada",
          "Formación en terapia cognitivo-conductual",
          "Sesiones online desde cualquier región de Chile",
          "Coordinación directa, sin intermediarios",
        ]}
        faqs={faqs}
        closingTitle="Agenda con información clara desde el inicio"
        closingText="Escríbeme por WhatsApp y te comparto los horarios disponibles para tu primera sesión online."
        whatsappHref={WHATSAPP_HREF}
        whatsappLabel="ads-agendar"
        ctaText={CTA_TEXT}
      />
    </>
  );
}
