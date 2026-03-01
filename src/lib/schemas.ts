// src/lib/schemas.ts
// Schemas reutilizables para SEO programático

export const SITE_URL = "https://gonzalopedrosa.cl";

/**
 * LocalBusiness Schema para páginas de Chillán
 * Usar en todas las páginas con servicios locales
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Gonzalo Pedrosa - Psicólogo",
  image: `${SITE_URL}/yo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chillán",
    addressRegion: "Región de Ñuble",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-36.6063",
    longitude: "-72.1034",
  },
  url: SITE_URL,
  telephone: "+56968257817",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "124",
    bestRating: "5",
  },
  sameAs: ["https://wa.me/56968257817"],
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
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.serviceType,
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
      price: "35000",
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
      "Psicólogo titulado con especialización en Terapia Cognitivo-Conductual y más de 7 años de experiencia en atención clínica.",
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
