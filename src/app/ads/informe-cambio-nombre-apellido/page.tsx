import type { Metadata } from "next";
import {
  CLINICAL_STATS,
  healthProviderIdentifierSchema,
  toCanonicalUrl,
} from "@/lib/site-config";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsProviderRegistry } from "../components/AdsProviderRegistry";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";
import { AdsLandingEvents } from "./AdsLandingEvents";
import { StickyWhatsAppCTA } from "./StickyWhatsAppCTA";

const LANDING_PATH = "/ads/informe-cambio-nombre-apellido";
const LANDING_URL = toCanonicalUrl(LANDING_PATH);
const PRICE = 45_990;
const PRICE_TEXT = new Intl.NumberFormat("es-CL").format(PRICE);
const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP || "56968257817"
).replace(/\D/g, "");
const WHATSAPP_MESSAGE =
  "Hola, quiero solicitar el informe psicológico para cambio de nombre o apellido por $45.990.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
const CTA_TEXT = "Solicitar informe por WhatsApp";

export const metadata: Metadata = {
  title: "Informe psicológico para cambio de nombre o apellido | Chile",
  description: `Evaluación psicológica online e informe firmado para cambio de nombre o apellido. Entrega el mismo día por $${PRICE_TEXT} CLP.`,
  robots: { index: false, follow: false },
  alternates: { canonical: LANDING_URL },
  openGraph: {
    title: "Informe psicológico para cambio de nombre o apellido",
    description: `Evaluación online e informe firmado, entregado el mismo día por $${PRICE_TEXT} CLP.`,
    url: LANDING_URL,
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa, psicólogo clínico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Informe psicológico para cambio de nombre o apellido",
    description: `Entrega el mismo día por $${PRICE_TEXT} CLP.`,
    images: ["/og.png"],
  },
};

const includes = [
  "Evaluación psicológica por videollamada",
  "Informe psicológico firmado en PDF",
  "Entrega el mismo día de la evaluación",
  "Documento centrado en el impacto asociado a tu nombre o apellido",
] as const;

const usefulFor = [
  {
    title: "Documentar el impacto psicológico",
    text: "Cuando necesitas describir profesionalmente cómo tu nombre o apellido afecta tu bienestar o tu vida cotidiana.",
  },
  {
    title: "Acompañar una solicitud judicial",
    text: "Cuando tu abogado o abogada considera pertinente sumar un antecedente psicológico a la causa.",
  },
  {
    title: "Presentar un antecedente clínico claro",
    text: "Cuando te solicitaron un informe firmado que explique tu situación actual de manera profesional.",
  },
] as const;

const steps = [
  {
    number: "1",
    title: "Escríbeme por WhatsApp",
    text: "Cuéntame que necesitas el informe para cambio de nombre o apellido y coordinamos la evaluación.",
  },
  {
    number: "2",
    title: "Realizamos la evaluación online",
    text: "Conversamos por videollamada sobre tu situación y los antecedentes relevantes para el informe.",
  },
  {
    number: "3",
    title: "Recibes el informe el mismo día",
    text: "Te envío el documento psicológico firmado en PDF una vez finalizada la evaluación.",
  },
] as const;

const faqs = [
  {
    question: "¿Para qué sirve este informe psicológico?",
    answer:
      "Sirve para documentar profesionalmente los efectos psicológicos o emocionales asociados a tu nombre o apellido. Puede acompañar tu solicitud cuando tu abogado, abogada o tribunal lo considere pertinente.",
  },
  {
    question: "¿El informe es obligatorio para cambiar mi nombre o apellido?",
    answer:
      "No necesariamente. Los antecedentes requeridos dependen de la vía y de tu caso. Confirma con tu abogado, abogada o tribunal si un informe psicológico corresponde en tu solicitud.",
  },
  {
    question: "¿Cuándo recibo el informe?",
    answer:
      "El informe psicológico firmado en PDF se entrega el mismo día de la evaluación.",
  },
  {
    question: "¿La evaluación es online?",
    answer:
      "Sí. La evaluación se realiza por videollamada, por lo que puedes conectarte desde cualquier región de Chile.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer: `El valor es $${PRICE_TEXT} CLP e incluye la evaluación psicológica y el informe firmado en PDF.`,
  },
  {
    question: "¿El informe garantiza que aprobarán el cambio?",
    answer:
      "No. El informe es un antecedente psicológico y no reemplaza la asesoría legal. La decisión sobre el cambio corresponde a la autoridad competente.",
  },
  {
    question: "¿Qué necesito para la evaluación?",
    answer:
      "Al escribir por WhatsApp te indicaré los antecedentes necesarios. Si tu abogado o abogada te pidió un formato o punto específico, envíalo antes de la evaluación.",
  },
] as const;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Informe psicológico para cambio de nombre o apellido",
  description: `Evaluación psicológica online e informe firmado en PDF, entregado el mismo día por $${PRICE_TEXT} CLP.`,
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
    name: "Evaluación e informe psicológico para cambio de nombre o apellido",
    price: String(PRICE),
    priceCurrency: "CLP",
    url: LANDING_URL,
    availability: "https://schema.org/InStock",
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

const whatsappButtonClass =
  "w-full bg-[#25D366] font-semibold text-white shadow-md hover:bg-[#20bd5a]";

export default function InformeCambioNombreApellidoPage() {
  return (
    <>
      <script
        id="cambio-nombre-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="cambio-nombre-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AdsLandingEvents landing={LANDING_PATH} />

      <main className="min-h-screen bg-white pb-24">
        <section className="mx-auto max-w-2xl px-4 pb-8 pt-8">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-800">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              100% online · todo Chile
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
              Informe firmado en PDF
            </span>
          </div>

          <h1 className="mb-3 text-[29px] font-bold leading-[1.12] tracking-tight text-gray-950 md:text-4xl">
            Informe psicológico para cambio de nombre o apellido
          </h1>
          <p className="mb-5 text-base leading-relaxed text-gray-600 md:text-lg">
            Evaluación online e informe psicológico firmado, entregado el mismo
            día por ${PRICE_TEXT} CLP.
          </p>

          <ul className="mb-6 space-y-2.5">
            {includes.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-gray-700"
              >
                <span className="mt-0.5 shrink-0 font-semibold text-green-600">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            id="solicitar-informe"
            className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-4 shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-600">
                  Evaluación + informe el mismo día
                </p>
                <p className="text-3xl font-bold tracking-tight text-gray-950">
                  ${PRICE_TEXT}{" "}
                  <span className="text-sm font-normal text-gray-500">CLP</span>
                </p>
              </div>
              <AdsProfileImage
                alt="Gonzalo Pedrosa, psicólogo clínico"
                width={60}
                height={60}
                priority
                className="rounded-full border-2 border-white object-cover shadow-md"
              />
            </div>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-cambio-nombre-hero"
              adsEvent="click_whatsapp"
              className={whatsappButtonClass}
            >
              {CTA_TEXT}
            </AdsWhatsAppButton>
            <p className="mt-2 text-center text-xs text-gray-500">
              Primero revisamos si este informe corresponde a tu caso
            </p>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Qué recibes
            </h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-gray-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-sm leading-relaxed text-gray-600">
                  El informe describe los antecedentes psicológicos evaluados.
                  No reemplaza la asesoría de un abogado o abogada.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-950">
              Un antecedente profesional para explicar tu situación
            </h2>
            <p className="mb-5 text-[15px] leading-relaxed text-gray-600">
              El informe puede aportar cuando necesitas dejar por escrito el
              impacto que tiene tu nombre o apellido en tu vida.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {usefulFor.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-4"
                >
                  <h3 className="mb-2 text-[15px] font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-gray-50 px-4 py-8 scroll-mb-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Cómo funciona
            </h2>
            <ol className="space-y-3">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="flex gap-3 rounded-xl border border-gray-100 bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-semibold text-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-1 text-[15px] font-semibold text-gray-950">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-gray-950 p-5 text-white md:p-6">
              <p className="mb-1 text-sm text-gray-300">Valor único</p>
              <p className="mb-1 text-3xl font-bold tracking-tight">
                ${PRICE_TEXT}{" "}
                <span className="text-base font-normal text-gray-400">CLP</span>
              </p>
              <p className="mb-5 text-sm leading-relaxed text-gray-300">
                Incluye la evaluación online y el informe psicológico firmado en
                PDF, entregado el mismo día.
              </p>
              <AdsWhatsAppButton
                href={WHATSAPP_HREF}
                label="ads-cambio-nombre-precio"
                adsEvent="click_whatsapp"
                className="w-full bg-white font-semibold text-gray-950 shadow-md hover:bg-gray-100"
              >
                {CTA_TEXT}
              </AdsWhatsAppButton>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Quién realiza la evaluación
            </h2>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
              <AdsProfileImage
                alt="Gonzalo Pedrosa, psicólogo clínico"
                width={72}
                height={72}
                className="rounded-full object-cover ring-2 ring-gray-100"
              />
              <div>
                <p className="font-semibold text-gray-950">Gonzalo Pedrosa</p>
                <p className="text-sm text-gray-600">Psicólogo clínico</p>
                <AdsProviderRegistry className="mt-1 text-sm text-gray-500" withVerifyLink />
                <p className="mt-1 text-sm text-gray-500">
                  {CLINICAL_STATS.yearsExperience} años de experiencia clínica ·{" "}
                  {CLINICAL_STATS.ratingValue}/5 en {CLINICAL_STATS.reviewCount}{" "}
                  reseñas
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Preguntas frecuentes
            </h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  data-faq-question={faq.question}
                  className="group rounded-xl border border-gray-200 bg-white p-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-sm text-[15px] font-medium text-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2">
                    <span>{faq.question}</span>
                    <span
                      className="shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-50 px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-[15px] font-semibold text-gray-950">
              Importante
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Este servicio corresponde a una evaluación psicológica y a la
              emisión de un informe profesional. No constituye asesoría legal,
              no reemplaza el patrocinio de un abogado o abogada y no garantiza
              que la autoridad apruebe el cambio de nombre o apellido.
            </p>
          </div>
        </section>

        <section className="px-4 py-10 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-950">
              Solicita tu informe psicológico
            </h2>
            <p className="mb-5 text-[15px] text-gray-600">
              Evaluación online · informe firmado · entrega el mismo día · ${PRICE_TEXT}
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-cambio-nombre-final"
              adsEvent="click_whatsapp"
              className="bg-[#25D366] font-semibold text-white shadow-lg hover:bg-[#20bd5a]"
            >
              {CTA_TEXT}
            </AdsWhatsAppButton>
            <p className="mt-3 text-xs text-gray-500">
              Te respondo por WhatsApp para revisar tu caso y coordinar
            </p>
          </div>
        </section>
      </main>

      <StickyWhatsAppCTA href={WHATSAPP_HREF} />
    </>
  );
}
