import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export const metadata: Metadata = {
  title: "Psicólogo Online para Adolescentes | Terapia Online",
  description:
    "Terapia online para adolescentes con ansiedad, depresión, pánico o dificultades de conducta. Psicólogo online. Consultá por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Psicólogo Online para Adolescentes | Terapia Online",
    description:
      "Terapia online para adolescentes con ansiedad, depresión, pánico o dificultades de conducta. Psicólogo online especializado.",
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
        text: "Sí. La terapia online para adolescentes ha demostrado ser igual de efectiva que la presencial. Muchos jóvenes se sienten más cómodos en su propio espacio.",
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
        text: "No necesariamente. Dependiendo de la edad y la situación, se puede trabajar solo con el adolescente para respetar su privacidad y fomentar su autonomía.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-4 pt-12 pb-10 md:pt-20 md:pb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AdsProfileImage
              alt="Gonzalo Pedrosa - Psicólogo Online para Adolescentes"
              width={56}
              height={56}
              priority
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Gonzalo Pedrosa</p>
              <p className="text-sm text-gray-500">Psicólogo Online · 281 experiencias</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Psicólogo Online para Adolescentes
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Ansiedad, depresión, pánico, conducta y bullying. Terapia online 
            especializada para adolescentes en un espacio seguro y confidencial. 
            Sesiones de 50 minutos por videollamada.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md"
            >
              Consultar disponibilidad
            </AdsWhatsAppButton>
          </div>

          <p className="text-sm text-green-700 font-medium mb-2">
            ✓ Agenda inicial en menos de 24 horas
          </p>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Respuesta rápida · Horarios flexibles · 100% confidencial
          </p>
        </section>

        {/* Para quién es */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              ¿Esto le está pasando a tu hijo/a?
            </h2>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {[
                "Ansiedad escolar",
                "Cambios de conducta",
                "Aislamiento social",
                "Somatizaciones frecuentes",
                "Baja autoestima",
                "Dificultades para concentrarse",
                "Problemas de sueño",
                "Irritabilidad constante",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3 bg-white rounded-lg text-sm text-gray-700 border border-gray-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
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

        {/* Sobre el profesional */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Sobre el psicólogo
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <AdsProfileImage
                alt="Gonzalo Pedrosa - Psicólogo para Adolescentes Online"
                width={120}
                height={120}
                className="rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Gonzalo Pedrosa
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Soy psicólogo clínico con enfoque cognitivo-conductual, especializado 
                  en trabajo con adolescentes. Trabajo con jóvenes que atraviesan 
                  ansiedad, depresión, ataques de pánico, dificultades de conducta y 
                  situaciones de bullying.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mi objetivo es crear un espacio seguro donde el adolescente pueda 
                  expresarse sin juicios y desarrollar herramientas concretas para 
                  sentirse mejor. La terapia online permite flexibilidad y comodidad, 
                  facilitando el proceso terapéutico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Con qué ayudo */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Situaciones en las que puedo ayudar
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-lg">😰</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Ansiedad y depresión adolescente</h3>
                <p className="text-gray-600 text-sm">
                  Preocupación excesiva, tristeza persistente, pérdida de interés en actividades, 
                  cambios en el estado de ánimo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-lg">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Ataques de pánico</h3>
                <p className="text-gray-600 text-sm">
                  Episodios repentinos de miedo intenso, taquicardia, dificultad para respirar, 
                  sensación de pérdida de control.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-lg">🎭</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Problemas de conducta</h3>
                <p className="text-gray-600 text-sm">
                  Dificultades en el manejo de emociones, impulsividad, conductas desafiantes, 
                  conflictos con padres o pares.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">🛡️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Bullying y acoso escolar</h3>
                <p className="text-gray-600 text-sm">
                  Situaciones de acoso en el colegio, dificultades para relacionarse con pares, 
                  aislamiento social, baja autoestima.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="px-4 py-8 md:py-10 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-green-400 text-xs font-medium uppercase tracking-wider mb-2">
              Cupos limitados
            </p>
            <p className="text-white text-lg font-medium mb-4">
              ¿Buscás ayuda profesional para tu hijo/a?
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Consultá disponibilidad por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Sin lista de espera · Sin compromiso
            </p>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
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
                  Sí. La terapia online para adolescentes ha demostrado ser igual de 
                  efectiva que la presencial. Muchos jóvenes se sienten más cómodos en 
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
                  su autonomía.
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
          <p className="text-green-600 text-sm font-medium mb-3">
            Horarios disponibles para esta semana
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Consultá disponibilidad por WhatsApp
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Si tu hijo/a está atravesando ansiedad, depresión, pánico o dificultades de 
            conducta, la terapia puede ayudar. Escribime y coordinamos una primera sesión.
          </p>

          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg text-base"
          >
            Agendar primera sesión
          </AdsWhatsAppButton>

          <p className="text-sm text-gray-500 mt-4">
            Agenda inicial en menos de 24 horas · Sin lista de espera
          </p>
        </section>

        {/* Footer spacer for sticky CTA */}
        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Sticky CTA Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-green-600 font-medium">Cupos limitados</p>
            <p className="text-xs text-gray-500">Sin lista de espera</p>
          </div>
          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
          >
            Consultar disponibilidad
          </AdsWhatsAppButton>
        </div>
      </main>
    </>
  );
}
