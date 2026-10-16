import type { Metadata } from "next";
import { AdsIcon, type AdsIconName } from "../components/AdsIcon";
import { AdsProfessionalCard } from "../components/AdsProfessionalCard";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export const metadata: Metadata = {
  title: "Psicólogo para Adolescentes Online | Terapia por Videollamada",
  description:
    "Psicólogo para adolescentes online: ansiedad, depresión, pánico y conducta. Terapia por videollamada desde 14 años. Agenda por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Psicólogo para Adolescentes Online | Terapia por Videollamada",
    description:
      "Terapia emocional online para adolescentes con ansiedad, depresión, pánico o cambios de conducta. Psicólogo online por videollamada.",
    url: "https://www.gonzalopedrosa.cl/ads/adolescentes",
    type: "website",
    images: [
      { url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo Online para Adolescentes" },
    ],
  },
};

const WHATSAPP_HREF = "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20online%20para%20adolescente";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo funciona la terapia online para adolescentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión es por videollamada, en un espacio privado y confidencial. El adolescente puede conectarse desde un lugar cómodo de su casa. Trabajamos con técnicas adaptadas a su edad.",
      },
    },
    {
      "@type": "Question",
      name: "¿La terapia online es efectiva para adolescentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La terapia online tiene buenos resultados en ansiedad y depresión adolescente, y muchos jóvenes se sienten más cómodos conversando desde su propio espacio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una sesión de terapia para adolescentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión tiene un valor de $35.000 CLP y dura 50 minutos. Incluye atención personalizada por videollamada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los padres deben estar presentes en la sesión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. Dependiendo de la edad y la situación, se puede trabajar solo con el adolescente para respetar su privacidad y fomentar su autonomía. Cuando es útil, coordinamos un espacio con la madre, padre o tutor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué se les cuenta a los padres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo que el adolescente conversa en sesión es confidencial. A los padres les comparto el plan de trabajo y los avances generales. Si hay un riesgo para su seguridad, se les informa siempre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito autorizar la terapia de mi hijo/a?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En menores de 18 años, la madre, padre o tutor coordina la primera sesión y autoriza la atención. Puedes escribirme tú por WhatsApp para partir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se paga? ¿Entregas boleta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pagas por transferencia o Webpay antes de la sesión. Entrego boleta electrónica, que puedes presentar a tu Isapre o seguro para pedir reembolso según tu plan.",
      },
    },
  ],
};

const HERO_BULLETS = [
  "Sesiones de 50 min por videollamada",
  "Enfoque cognitivo-conductual adaptado a su edad",
  "Confidencial, con avances generales para los padres",
  "Boleta electrónica para reembolso según tu plan",
];

const SITUACIONES: { icon: AdsIconName; title: string; desc: string }[] = [
  {
    icon: "heart",
    title: "Ansiedad y depresión adolescente",
    desc: "Preocupación excesiva, tristeza persistente, pérdida de interés en actividades, cambios en el estado de ánimo.",
  },
  {
    icon: "bolt",
    title: "Ataques de pánico",
    desc: "Episodios repentinos de miedo intenso, taquicardia, dificultad para respirar, sensación de pérdida de control.",
  },
  {
    icon: "activity",
    title: "Problemas de conducta",
    desc: "Dificultades en el manejo de emociones, impulsividad, conductas desafiantes, conflictos con padres o pares.",
  },
  {
    icon: "shield",
    title: "Bullying y acoso escolar",
    desc: "Situaciones de acoso en el colegio, dificultades para relacionarse con pares, aislamiento social, baja autoestima.",
  },
];

export default function Page() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="px-4 pt-8 pb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              100% online · todo Chile
            </span>
            <span className="text-xs text-gray-500">Desde 14 años</span>
          </div>

          <h1 className="text-[26px] leading-tight md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Psicólogo para adolescentes online
          </h1>

          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Terapia para adolescentes con ansiedad, depresión, pánico, cambios de
            conducta o dificultades escolares. Videollamada privada, enfoque
            cognitivo-conductual y un espacio seguro para tu hijo/a.
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

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-600">Sesión online de 50 min</p>
                <p className="text-2xl font-bold text-gray-900">
                  $35.000{" "}
                  <span className="text-sm font-normal text-gray-500">CLP</span>
                </p>
              </div>
              <AdsProfileImage
                alt="Gonzalo Pedrosa - Psicólogo para adolescentes"
                width={56}
                height={56}
                priority
                className="rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-adolescentes-hero"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
            >
              Agendar sesión online
            </AdsWhatsAppButton>
            <p className="text-xs text-gray-500 text-center mt-2">
              Respuesta el mismo día · Sin lista de espera
            </p>
          </div>
        </section>

        <AdsProfessionalCard
          role="Psicólogo clínico · Enfoque cognitivo-conductual"
          bio="Trabajo con adolescentes que atraviesan ansiedad, depresión, ataques de pánico, dificultades de conducta o bullying. Mi objetivo es que tu hijo/a tenga un espacio seguro para expresarse sin juicios y herramientas concretas para sentirse mejor."
          tags={["Adolescentes desde 14 años", "TCC", "100% online"]}
        />

        {/* Para quién es */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
              ¿Tu hijo/a necesita terapia emocional online?
            </h2>

            <ul className="flex flex-wrap gap-2">
              {[
                "Ansiedad escolar",
                "Cambios de conducta",
                "Aislamiento social",
                "Somatizaciones frecuentes",
                "Baja autoestima",
                "Dificultades para concentrarse",
                "Problemas de sueño",
                "Irritabilidad constante",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 text-sm text-gray-800 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
            Cómo funciona la terapia para adolescentes
          </h2>

          <div className="grid gap-4">
            {[
              {
                step: "1",
                title: "Evaluación inicial",
                desc: "Primera sesión para conocer la situación del adolescente, sus dificultades y establecer objetivos claros de trabajo.",
              },
              {
                step: "2",
                title: "Plan de trabajo personalizado",
                desc: "Diseñamos un plan adaptado a la edad y necesidades específicas. Uso de técnicas cognitivo-conductuales efectivas para jóvenes.",
              },
              {
                step: "3",
                title: "Seguimiento semanal",
                desc: "Sesiones regulares de 50 minutos por videollamada. El adolescente desarrolla herramientas para manejar sus emociones y situaciones difíciles.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 p-4 bg-gray-50 rounded-xl shadow-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-xl border border-blue-100">
            <strong className="text-gray-900">Modalidad 100% online por videollamada.</strong> El adolescente 
            puede conectarse desde la comodidad de su hogar, en un espacio donde se sienta seguro.
          </p>
        </section>

        {/* Con qué ayudo */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
            Situaciones en las que puedo ayudar
          </h2>

          <div className="space-y-4">
            {SITUACIONES.map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 text-green-700 rounded-full flex items-center justify-center">
                  <AdsIcon name={item.icon} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="px-4 py-8 md:py-10 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-green-400 text-xs font-medium uppercase tracking-wider mb-2">
              Sin lista de espera
            </p>
            <p className="text-white text-lg font-medium mb-4">
              ¿Buscas ayuda profesional para tu hijo/a?
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-adolescentes-mid"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Agendar sesión online
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Respuesta el mismo día · Sin compromiso
            </p>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
              Preguntas frecuentes
            </h2>

            <div className="space-y-3">
              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cómo funciona la terapia online para adolescentes?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  La sesión es por videollamada, en un espacio privado y confidencial. 
                  El adolescente puede conectarse desde un lugar cómodo de su casa. 
                  Trabajamos con técnicas adaptadas a su edad.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿La terapia online es efectiva para adolescentes?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Sí. La terapia online tiene buenos resultados en ansiedad y depresión 
                  adolescente, y muchos jóvenes se sienten más cómodos conversando desde 
                  su propio espacio.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuánto cuesta una sesión?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  La sesión tiene un valor de $35.000 CLP y dura 50 minutos. Incluye 
                  atención personalizada por videollamada.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Los padres deben estar presentes en la sesión?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  No necesariamente. Dependiendo de la edad y la situación, se puede 
                  trabajar solo con el adolescente para respetar su privacidad y fomentar 
                  su autonomía. Cuando es útil, coordinamos un espacio con la madre, padre 
                  o tutor.
                </p>
              </details>
              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Qué se les cuenta a los padres?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Lo que el adolescente conversa en sesión es confidencial. A los padres les
                  comparto el plan de trabajo y los avances generales. Si hay un riesgo para
                  su seguridad, se les informa siempre.
                </p>
              </details>
              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Necesito autorizar la terapia de mi hijo/a?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Sí. En menores de 18 años, la madre, padre o tutor coordina la primera
                  sesión y autoriza la atención. Puedes escribirme tú por WhatsApp para partir.
                </p>
              </details>
              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cómo se paga? ¿Entregas boleta?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Pagas por transferencia o Webpay antes de la sesión. Entrego boleta
                  electrónica, que puedes presentar a tu Isapre o seguro para pedir reembolso
                  según tu plan.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Qué pasa si mi hijo/a no quiere hacer terapia?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Es importante conversar con el adolescente sobre los beneficios de la 
                  terapia. En la primera sesión trabajo para generar confianza y un espacio 
                  donde se sienta cómodo/a.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuántas sesiones se necesitan?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Depende de la situación y objetivos. Algunas situaciones requieren pocas 
                  sesiones; otros procesos son más largos. Lo evaluamos juntos en la primera 
                  consulta.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 py-12 md:py-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Consulta disponibilidad por WhatsApp
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Si tu hijo/a está atravesando ansiedad, depresión, pánico o dificultades de 
            conducta, la terapia puede ayudar. Escríbeme y coordinamos una primera sesión.
          </p>

          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            label="ads-adolescentes-final"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg text-base"
          >
            Agendar sesión online
          </AdsWhatsAppButton>

          <p className="text-sm text-gray-500 mt-4">
            Respuesta el mismo día · Sin lista de espera
          </p>
        </section>

        {/* Footer spacer for sticky CTA */}
        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Sticky CTA Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-700 font-medium">Sesión online · $35.000</p>
            <p className="text-xs text-gray-500">Sin lista de espera</p>
          </div>
          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            label="ads-adolescentes-sticky"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
          >
            Agendar sesión online
          </AdsWhatsAppButton>
        </div>
      </main>
    </>
  );
}
