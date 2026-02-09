import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";
import { LazyStickyWhatsAppCTA } from "./LazyStickyWhatsAppCTA";

export const metadata: Metadata = {
  title: "Informe Psicológico COMPIN | Evaluación Online",
  description:
    "Evaluación clínica e informe psicológico firmado para COMPIN por salud mental laboral. Consulta por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Informe Psicológico COMPIN | Evaluación Online",
    description:
      "Evaluación clínica e informe psicológico firmado para COMPIN por salud mental laboral. Consulta por WhatsApp.",
    url: "https://gonzalopedrosa.cl/ads/compin",
    type: "website",
    images: [
      { url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" },
    ],
  },
};

const WHATSAPP_HREF = "https://wa.me/56968257817?text=Hola%2C%20necesito%20un%20informe%20psicol%C3%B3gico%20para%20COMPIN";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto demora la entrega del informe psicológico para COMPIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El informe se entrega en 24–48 horas según disponibilidad de agenda. Una vez realizada la evaluación clínica, el documento firmado se envía en formato digital.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesito para la evaluación psicológica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo necesitas conexión a internet, un lugar tranquilo para la videollamada y tener a mano antecedentes médicos relevantes (licencias previas, diagnósticos anteriores, si los tienes).",
      },
    },
    {
      "@type": "Question",
      name: "¿Sirve el informe si mi licencia fue rechazada por COMPIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el informe psicológico puede servir como respaldo clínico en casos de reconsideración o apelación de licencias rechazadas. Sin embargo, no garantizo aprobación de COMPIN.",
      },
    },
    {
      "@type": "Question",
      name: "¿Entregas boleta por el servicio de evaluación e informe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, se entrega boleta de honorarios electrónica por la evaluación y el informe psicológico.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Datos estáticos para renderizado server
   ───────────────────────────────────────────────────────────────────────────── */
const BENEFICIOS = [
  "Ansiedad, estrés laboral, burnout, pánico, depresión",
  "Informe firmado por psicólogo",
  "Entrega en 24–48 h (según agenda)",
  "Apto para presentar en COMPIN (sin promesas)",
];

const USOS = [
  "Licencia/Extensión por salud mental",
  "Presentación/revisión en COMPIN",
  "Respaldo clínico en contexto laboral",
  "Apelar licencias rechazadas",
];

const INCLUYE = [
  "Entrevista clínica + evaluación",
  "Síntomas, antecedentes relevantes",
  "Conclusión clínica/impresión diagnóstica (si aplica)",
  "Recomendaciones terapéuticas",
  "Documento firmado + fecha",
];

const PASOS = [
  {
    step: "1",
    title: "WhatsApp: describes tu caso",
    desc: "Cuéntame brevemente tu situación por WhatsApp. Te respondo rápido.",
  },
  {
    step: "2",
    title: "Agendamos evaluación online",
    desc: "Coordinamos un horario que te acomode para la videollamada de evaluación clínica.",
  },
  {
    step: "3",
    title: "Entrego informe firmado",
    desc: "Recibes el documento clínico profesional firmado en 24–48 horas.",
  },
];

const FAQS = [
  {
    q: "¿Cuánto demora?",
    a: "El informe se entrega en 24–48 horas según disponibilidad de agenda. Una vez realizada la evaluación clínica, el documento firmado se envía en formato digital.",
  },
  {
    q: "¿Qué necesito para la evaluación?",
    a: "Solo necesitas conexión a internet, un lugar tranquilo para la videollamada y tener a mano antecedentes médicos relevantes (licencias previas, diagnósticos anteriores, si los tienes).",
  },
  {
    q: "¿Sirve si la licencia fue rechazada?",
    a: "Sí, el informe psicológico puede servir como respaldo clínico en casos de reconsideración o apelación de licencias rechazadas. Sin embargo, no garantizo aprobación de COMPIN.",
  },
  {
    q: "¿Entregas boleta?",
    a: "Sí, se entrega boleta de honorarios electrónica por la evaluación y el informe psicológico.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component - 100% Server Rendered
   ───────────────────────────────────────────────────────────────────────────── */
export default function CompinPage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white pb-24">
        {/* Hero Section - Mobile First */}
        <section className="px-4 pt-8 pb-8 max-w-2xl mx-auto">
          {/* Perfil */}
          <div className="flex items-center gap-3 mb-5">
            <AdsProfileImage
              alt="Gonzalo Pedrosa - Psicólogo"
              width={52}
              height={52}
              priority
              className="rounded-full object-cover ring-2 ring-gray-100"
            />
            <div>
              <p className="font-semibold text-gray-900 text-[15px]">Gonzalo Pedrosa</p>
              <p className="text-sm text-gray-500">Psicólogo · 281 experiencias</p>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-[26px] leading-tight md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Informe Psicológico para COMPIN
          </h1>

          {/* Subtítulo */}
          <p className="text-base text-gray-600 mb-5 leading-relaxed">
            Evaluación clínica + informe firmado (salud mental laboral). Online. Confidencial.
          </p>

          {/* Beneficios */}
          <ul className="space-y-2 mb-6">
            {BENEFICIOS.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Principal */}
          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md mb-3"
          >
            Enviar caso por WhatsApp
          </AdsWhatsAppButton>

          {/* Trust signal */}
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Respuesta rápida · 100% confidencial
          </p>
        </section>

        {/* ¿Para qué sirve? */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              ¿Para qué sirve?
            </h2>
            <ul className="space-y-2">
              {USOS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg text-[15px] text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Qué incluye la evaluación
            </h2>
            <ul className="space-y-2">
              {INCLUYE.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-[15px] text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Cómo funciona
            </h2>
            <div className="space-y-3">
              {PASOS.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-3 p-4 bg-white rounded-xl"
                >
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="px-4 py-8 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-base font-medium mb-4">
              ¿Necesitas un informe psicológico para COMPIN?
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900"
            >
              Consultar por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Respuesta rápida · Sin compromiso
            </p>
          </div>
        </section>

        {/* Importante */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Importante
            </h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                No garantizo aprobación de COMPIN. Evaluación y documento clínico profesional.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Trabajo con confidencialidad y criterios clínicos.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Preguntas frecuentes
            </h2>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="p-4 bg-white rounded-xl border border-gray-200 group"
                >
                  <summary className="cursor-pointer font-medium text-gray-900 text-[15px] flex justify-between items-center gap-2">
                    <span>{faq.q}</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section className="px-4 py-8 text-center">
          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
          >
            Solicitar evaluación por WhatsApp
          </AdsWhatsAppButton>
          <p className="text-sm text-gray-500 mt-3">
            Cupos limitados esta semana
          </p>
        </section>
      </main>

      {/* Sticky CTA - Client Component con tracking GTM */}
      <LazyStickyWhatsAppCTA href={WHATSAPP_HREF} />
    </>
  );
}
