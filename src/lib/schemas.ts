// src/lib/schemas.ts
// Schemas reutilizables para SEO programático

import {
  CLINICAL_STATS,
  healthProviderIdentifierSchema,
  HEALTH_PROVIDER_REGISTRY_NAME,
  toCanonicalUrl,
} from "@/lib/site-config";

export const SITE_URL = "https://www.gonzalopedrosa.cl";

const CHILLAN_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Chillán",
  addressRegion: "Región de Ñuble",
  addressCountry: "CL",
} as const;

/**
 * Persona real del sitio: nombre, registro RNPI y atención en Chillán.
 * Psychologist es el tipo de schema.org para el oficio. Sin sameAs: el repo no
 * publica un perfil social ni una ficha personal del registro, solo la portada.
 */
export const personSchema = {
  "@type": ["Person", "Psychologist"],
  "@id": `${SITE_URL}/#persona`,
  name: "Gonzalo Pedrosa",
  jobTitle: "Psicólogo Clínico",
  description: `Psicólogo clínico en Chillán, con más de ${CLINICAL_STATS.yearsExperience} años de experiencia. ${HEALTH_PROVIDER_REGISTRY_NAME}.`,
  image: `${SITE_URL}/yo.png`,
  url: `${SITE_URL}/`,
  telephone: "+56968257817",
  address: CHILLAN_ADDRESS,
  identifier: healthProviderIdentifierSchema,
  knowsAbout: [
    "Ansiedad",
    "Depresión",
    "Terapia Cognitivo-Conductual",
    "Crisis de pánico",
    "Estrés",
  ],
} as const;

/**
 * LocalBusiness + ProfessionalService.
 * Sin geopin ni sameAs: no hay calle ni perfil social publicados en el repo.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#servicio`,
  name: "Gonzalo Pedrosa - Psicólogo",
  image: `${SITE_URL}/yo.png`,
  url: `${SITE_URL}/`,
  telephone: "+56968257817",
  priceRange: "$35.000",
  address: CHILLAN_ADDRESS,
  identifier: healthProviderIdentifierSchema,
  provider: { "@id": `${SITE_URL}/#persona` },
  areaServed: [
    {
      "@type": "City",
      name: "Chillán",
      "@id": "https://www.wikidata.org/wiki/Q203727",
    },
    { "@type": "Country", name: "Chile" },
  ],
  serviceType: [
    "Psicoterapia individual",
    "Terapia online",
    "Terapia cognitivo-conductual",
  ],
  description:
    "Atención psicológica profesional para ansiedad, depresión, estrés y más. Sesiones online y presenciales en Chillán.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Psicología",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sesión individual",
          description: `Sesión de psicoterapia de ${CLINICAL_STATS.sessionMinutes} minutos, online o presencial`,
        },
        price: String(CLINICAL_STATS.sessionPriceClp),
        priceCurrency: "CLP",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CLINICAL_STATS.ratingValue,
    reviewCount: String(CLINICAL_STATS.reviewCount),
    bestRating: "5",
  },
};

/**
 * Genera BreadcrumbList Schema
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? toCanonicalUrl(item.href) : undefined,
    })),
  };
}

/**
 * Genera Service Schema para servicios específicos
 */
export function getServiceSchema(params: {
  serviceType: string;
  description: string;
  areaServed?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.serviceType,
    url: params.url,
    provider: {
      "@id": `${SITE_URL}/#persona`,
    },
    areaServed: params.areaServed
      ? {
          "@type": "City",
          name: params.areaServed,
        }
      : {
          "@type": "Country",
          name: "Chile",
        },
    description: params.description,
    offers: {
      "@type": "Offer",
      price: String(CLINICAL_STATS.sessionPriceClp),
      priceCurrency: "CLP",
    },
  };
}

/**
 * FAQs expandidas - Base común para todas las páginas
 */
export const baseFAQs = [
  {
    question: "¿Cuánto cuesta cada sesión?",
    answer:
      "$35.000 por sesión de 50 minutos. Emito boleta para reembolso Isapre, donde puedes recuperar entre el 50-80% según tu plan.",
  },
  {
    question: "¿Ofreces atención online?",
    answer:
      "Sí, ofrezco terapia online por videollamada con la misma efectividad que presencial. Puedes elegir la modalidad que prefieras.",
  },
  {
    question: "¿Cuál es tu enfoque terapéutico?",
    answer:
      "Trabajo principalmente con Terapia Cognitivo-Conductual (TCC), el tratamiento con mayor respaldo científico para la mayoría de los trastornos psicológicos.",
  },
  {
    question: "¿Es confidencial la terapia?",
    answer:
      "Sí. Todo lo conversado está protegido por secreto profesional, salvo excepciones legales que se explican al inicio del proceso.",
  },
  {
    question: "¿Qué pasa si no puedo asistir a una sesión?",
    answer:
      "Puedes reagendar con 24 horas de anticipación sin costo. Las cancelaciones con menos de 24 horas tienen un cargo del 50%.",
  },
  {
    question: "¿Trabajas con adolescentes?",
    answer:
      "Sí, trabajo con adolescentes desde 14 años y adultos de todas las edades. Para menores de 14 años, puedo derivar a colegas especializados.",
  },
  {
    question: "¿Cuál es tu formación académica?",
    answer:
      `Psicólogo titulado con especialización en Terapia Cognitivo-Conductual y más de ${CLINICAL_STATS.yearsExperience} años de experiencia en atención clínica.`,
  },
  {
    question: "¿Cómo agendo una sesión?",
    answer:
      "Puedes escribirme por WhatsApp al +56 9 6825 7817 o agendar directamente en el sitio. Respondo en menos de 24 horas.",
  },
  {
    question: "¿Ofreces horarios flexibles?",
    answer:
      "Sí, tengo disponibilidad de lunes a viernes de 9:00 a 19:00, y algunos sábados con cita previa. Puedo ajustarme a tu horario.",
  },
  {
    question: "¿Emites boleta para Isapre?",
    answer:
      "Sí, emito boleta electrónica que puedes presentar a tu Isapre para reembolso. El proceso es simple y te guío en los pasos.",
  },
];

/**
 * Genera FAQPage Schema solo con las FAQs visibles en la página (mejor para rich results).
 */
export function getPageFAQSchema(customFAQs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: customFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Genera WebPage Schema para páginas de servicio.
 */
export function getWebPageSchema(params: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${params.path}#webpage`,
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    isPartOf: { "@id": `${SITE_URL}/#servicio` },
    about: { "@id": `${SITE_URL}/#persona` },
    inLanguage: "es-CL",
  };
}

/** Artículo informativo. No incluye oferta de sesión. */
export function getArticleSchema(params: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    inLanguage: "es-CL",
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    image: `${SITE_URL}/og.png`,
    author: { "@id": `${SITE_URL}/#persona` },
    publisher: { "@id": `${SITE_URL}/#persona` },
    mainEntityOfPage: `${SITE_URL}${params.path}`,
  };
}

/**
 * Genera FAQPage Schema con FAQs personalizadas + base
 */
export function getFAQSchema(customFAQs: Array<{ question: string; answer: string }>) {
  const allFAQs = [...customFAQs, ...baseFAQs];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Metadata optimizada para Twitter (máximo 200 caracteres)
 */
export function getTwitterDescription(description: string, maxLength = 200): string {
  if (description.length <= maxLength) {
    return description;
  }

  // Truncar en el último espacio antes del límite
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated;
}
