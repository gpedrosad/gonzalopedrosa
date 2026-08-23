import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";
import { LazyStickyWhatsAppCTA } from "./LazyStickyWhatsAppCTA";

export const metadata: Metadata = {
  title: "Evaluación Psicológica Bariátrica | Informe Online",
  description:
    "Pack de evaluación psicológica bariátrica: 2 sesiones online + informe firmado en PDF. $180.000. Consulta por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.gonzalopedrosa.cl/ads/evaluacion-bariatrica",
  },
  openGraph: {
    title: "Evaluación Psicológica Bariátrica | Informe Online",
    description:
      "Pack de evaluación psicológica bariátrica: 2 sesiones online + informe firmado en PDF. $180.000.",
    url: "https://www.gonzalopedrosa.cl/ads/evaluacion-bariatrica",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa - Psicólogo",
      },
    ],
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20el%20pack%20de%20evaluaci%C3%B3n%20bari%C3%A1trica%20de%20%24180.000%20(2%20sesiones%20%2B%20informe).";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la evaluación psicológica bariátrica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El pack único vale $180.000 CLP. Incluye 2 sesiones clínicas de 50 minutos por videollamada, el informe psicológico firmado en PDF y boleta electrónica. No hay precio por sesión suelta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas sesiones incluye el pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dos sesiones clínicas de 50 minutos, ambas online. El consenso clínico (por ejemplo NPCO) apunta a una evaluación de al menos 2 sesiones: no es un informe express de una sola hora.",
      },
    },
    {
      "@type": "Question",
      name: "¿El informe lo acepta cualquier clínica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El informe cubre el certificado de psicólogo que suelen pedir las clínicas y equipos bariátricos. Cumple estándares profesionales. Aun así, el equipo de tu clínica puede pedir su propia evaluación o un formato específico: me adapto si me lo indican.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sirve para Fonasa PAD o Isapre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El informe es el documento psicológico que suelen pedir para manga, bypass, Fonasa PAD o Isapre. No garantizo que Fonasa, la Isapre o la clínica aprueben la cirugía: esa decisión es del equipo bariátrico y del prestador.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto demora el informe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El informe firmado en PDF se entrega al día siguiente de la última sesión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Entregas boleta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El pack incluye boleta electrónica por las 2 sesiones y el informe.",
      },
    },
    {
      "@type": "Question",
      name: "¿La evaluación es 100% online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Las 2 sesiones son por videollamada, desde cualquier región de Chile. Solo necesitas conexión a internet y un lugar tranquilo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si hay una contraindicación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es un rechazo eterno. Si hay algo que trabajar ahora (por ejemplo un trastorno alimentario activo, consumo de alcohol o expectativas poco realistas), lo dejamos por escrito y se puede retomar la evaluación cuando corresponda. El informe describe tu situación actual; no es un pase express ni una aprobación automática.",
      },
    },
  ],
};

const HERO_BULLETS = [
  "2 sesiones clínicas de 50 min, por videollamada",
  "Informe psicológico firmado en PDF",
  "Informe al día siguiente de la última sesión",
  "Boleta electrónica incluida",
];

const PACK_INCLUYE = [
  "2 sesiones clínicas de 50 minutos (online)",
  "Informe psicológico firmado en PDF",
  "Boleta electrónica",
  "Entrega del informe al día siguiente de la última sesión",
];

const PACK_NO_INCLUYE = [
  "La cirugía ni el equipo médico bariátrico",
  "Evaluación nutricional o de nutricionista",
  "Garantía de que la clínica, Fonasa o Isapre aprueben",
];

const PARA_QUIEN = [
  "Manga gástrica",
  "Bypass gástrico",
  "Fonasa PAD (pago asociado a diagnóstico)",
  "Isapre: certificado que suele pedir el prestador",
  "Tu clínica te pidió informe o certificado de psicólogo",
];

const QUE_EVALUA = [
  "Motivación y expectativas realistas sobre la cirugía",
  "Historia de peso y relación con la alimentación",
  "Salud mental actual (ánimo, ansiedad, estrés)",
  "Consumo de alcohol y hábitos que importan al equipo",
  "Trastornos de la conducta alimentaria (TCA)",
  "Red de apoyo familiar y social",
];

const PASOS = [
  {
    step: "1",
    title: "Escríbeme por WhatsApp",
    desc: "Cuéntame si es manga, bypass, Fonasa o Isapre. Te respondo y coordinamos.",
  },
  {
    step: "2",
    title: "Agendamos 2 sesiones online",
    desc: "Videollamada de 50 minutos cada una, en horarios que te acomoden.",
  },
  {
    step: "3",
    title: "Evaluación clínica",
    desc: "Revisamos motivación, historia de peso, salud mental, alcohol, TCA y red de apoyo.",
  },
  {
    step: "4",
    title: "Recibes el informe firmado",
    desc: "PDF al día siguiente de la última sesión, con boleta.",
  },
];

const FAQS = [
  {
    q: "¿Cuánto cuesta el pack?",
    a: "El pack único vale $180.000 CLP. Incluye 2 sesiones clínicas de 50 minutos por videollamada, el informe psicológico firmado en PDF y boleta electrónica. No hay precio por sesión suelta.",
  },
  {
    q: "¿Cuántas sesiones son?",
    a: "Dos sesiones de 50 minutos, ambas online. El consenso clínico (por ejemplo NPCO) apunta a una evaluación de al menos 2 sesiones: no es un informe express de una sola hora.",
  },
  {
    q: "¿Lo acepta cualquier clínica?",
    a: "El informe cubre el certificado de psicólogo que suelen pedir las clínicas y equipos bariátricos. Cumple estándares profesionales. Aun así, el equipo de tu clínica puede pedir su propia evaluación o un formato específico: me adapto si me lo indican.",
  },
  {
    q: "¿Sirve para Fonasa PAD o Isapre?",
    a: "El informe es el documento psicológico que suelen pedir para manga, bypass, Fonasa PAD o Isapre. No garantizo que Fonasa, la Isapre o la clínica aprueben la cirugía: esa decisión es del equipo bariátrico y del prestador.",
  },
  {
    q: "¿Cuánto demora el informe?",
    a: "El informe firmado en PDF se entrega al día siguiente de la última sesión.",
  },
  {
    q: "¿Entregas boleta?",
    a: "Sí. El pack incluye boleta electrónica por las 2 sesiones y el informe.",
  },
  {
    q: "¿Es 100% online?",
    a: "Sí. Las 2 sesiones son por videollamada, desde cualquier región de Chile. Solo necesitas conexión a internet y un lugar tranquilo.",
  },
  {
    q: "¿Qué pasa si hay una contraindicación?",
    a: "No es un rechazo eterno. Si hay algo que trabajar ahora (por ejemplo un TCA activo, consumo de alcohol o expectativas poco realistas), lo dejamos por escrito y se puede retomar la evaluación cuando corresponda. El informe describe tu situación actual; no es un pase express ni una aprobación automática.",
  },
];

export default function EvaluacionBariatricaAdsPage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white pb-24">
        {/* Hero */}
        <section className="px-4 pt-8 pb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              100% online · todo Chile
            </span>
            <span className="text-xs text-gray-500">Videollamada</span>
          </div>

          <h1 className="text-[26px] leading-tight md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Evaluación psicológica bariátrica: informe para tu cirugía
          </h1>

          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Pack de 2 sesiones clínicas online + informe psicológico firmado.
            Evaluación seria, no un pase express ni una aprobación en 24 horas.
          </p>

          <ul className="space-y-2 mb-5">
            {HERO_BULLETS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-gray-700"
              >
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div
            id="whatsapp"
            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-3"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-600">
                  Pack: 2 sesiones + informe PDF + boleta
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  $180.000{" "}
                  <span className="text-sm font-normal text-gray-500">CLP</span>
                </p>
              </div>
              <AdsProfileImage
                alt="Gonzalo Pedrosa - Psicólogo"
                width={56}
                height={56}
                priority
                className="rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-eval-bariatrica-hero"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
            >
              Consultar pack por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-xs text-gray-500 text-center mt-2">
              Respuesta rápida · Sin compromiso
            </p>
          </div>
        </section>

        {/* El pack */}
        <section id="precio" className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              El pack
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500 mb-1">Precio único</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                $180.000{" "}
                <span className="text-base font-normal text-gray-500">CLP</span>
              </p>
              <p className="text-sm text-gray-600 mb-5">
                2 sesiones + informe firmado + boleta. Sin precio por sesión
                suelta.
              </p>

              <p
                id="que-incluye"
                className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2"
              >
                Qué incluye
              </p>
              <ul className="space-y-2 mb-5">
                {PACK_INCLUYE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] text-gray-700"
                  >
                    <span className="text-green-500 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Qué no incluye
              </p>
              <ul className="space-y-2">
                {PACK_NO_INCLUYE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] text-gray-600"
                  >
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Para quién es
            </h2>
            <ul className="space-y-2">
              {PARA_QUIEN.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-[15px] text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Qué evalúa + profesional */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Qué evalúa
            </h2>
            <ul className="space-y-2 mb-6">
              {QUE_EVALUA.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg text-[15px] text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
              <AdsProfileImage
                alt="Gonzalo Pedrosa - Psicólogo clínico"
                width={56}
                height={56}
                className="rounded-full object-cover ring-2 ring-gray-100"
              />
              <div>
                <p className="font-semibold text-gray-900 text-[15px]">
                  Gonzalo Pedrosa
                </p>
                <p className="text-sm text-gray-500">
                  Psicólogo clínico · TCC · +7 años
                </p>
                <p className="text-sm text-gray-500">4.8 · 281 experiencias</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Cómo funciona
            </h2>
            <div className="space-y-3">
              {PASOS.map((item) => (
                <div key={item.step} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="px-4 py-8 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-base font-medium mb-1">
              ¿Necesitas el informe para tu cirugía bariátrica?
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Pack $180.000 · 2 sesiones + informe firmado
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-eval-bariatrica-mid"
              className="bg-white hover:bg-gray-100 text-gray-900"
            >
              Consultar pack por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Respuesta rápida · Sin compromiso
            </p>
          </div>
        </section>

        {/* Importante / disclaimer */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Importante
            </h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                No se garantiza que la clínica, Fonasa o Isapre aprueben la
                cirugía. El equipo bariátrico puede pedir su propia evaluación.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                El informe cubre el certificado de psicólogo que suelen pedir.
                Es una evaluación clínica seria (mínimo 2 sesiones), no un pase
                express ni una aprobación en 24 horas.
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
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
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
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AdsProfileImage
                alt="Gonzalo Pedrosa"
                width={48}
                height={48}
                className="rounded-full object-cover ring-2 ring-gray-100"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-[15px]">
                  Gonzalo Pedrosa
                </p>
                <p className="text-sm text-gray-500">
                  Psicólogo clínico · TCC · 4.8
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-[15px] mb-4">
              Pack $180.000 · 2 sesiones + informe firmado en PDF
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-eval-bariatrica-final"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
            >
              Consultar pack por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-sm text-gray-500 mt-3">
              100% online · todo Chile · Sin compromiso
            </p>
          </div>
        </section>
      </main>

      <LazyStickyWhatsAppCTA href={WHATSAPP_HREF} />
    </>
  );
}
