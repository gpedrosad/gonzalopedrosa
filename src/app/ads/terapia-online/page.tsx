import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export const metadata: Metadata = {
  title: "Psicólogo Cognitivo Conductual Online | Gonzalo Pedrosa",
  description:
    "Terapia cognitivo conductual online con psicólogo. Sesiones de 50 min por videollamada. Horarios flexibles, espacio privado. Escríbeme por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Psicólogo Cognitivo Conductual Online | Gonzalo Pedrosa",
    description:
      "Terapia cognitivo conductual online con psicólogo. Sesiones de 50 min por videollamada. Horarios flexibles, espacio privado.",
    url: "https://gonzalopedrosa.cl/ads/terapia-online",
    type: "website",
    images: [
      { url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" },
    ],
  },
};

const WHATSAPP_HREF = "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20online";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una sesión de terapia cognitivo conductual online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión online tiene un valor de $35.000 CLP y dura 50 minutos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funcionan las sesiones online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las sesiones son por videollamada. Te envío el enlace antes de la hora acordada. Solo necesitas un lugar tranquilo y conexión a internet.",
      },
    },
    {
      "@type": "Question",
      name: "¿La terapia online es igual de efectiva que la presencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la terapia cognitivo-conductual online ha demostrado efectividad comparable a la presencial en múltiples estudios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis datos y lo que hablemos es confidencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. La confidencialidad es un principio ético fundamental. Todo lo conversado queda entre nosotros.",
      },
    },
  ],
};

export default function AdsTerapiaOnlinePage() {
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
              alt="Gonzalo Pedrosa - Psicólogo"
              width={56}
              height={56}
              priority
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Gonzalo Pedrosa</p>
              <p className="text-sm text-gray-500">Psicólogo · 281 experiencias</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Psicólogo Cognitivo Conductual Online
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Si sientes que tus pensamientos te agobian, que la ansiedad no te deja
            avanzar o que te cuesta manejar ciertas situaciones, la terapia
            cognitivo-conductual puede ayudarte. Desde donde estés, en un espacio
            privado y a tu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md"
            >
              Agendar sesión online
            </AdsWhatsAppButton>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Respuesta rápida · Coordinamos horario · Confidencial
          </p>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Cómo funciona
            </h2>

            <div className="grid gap-4">
              {[
                {
                  step: "1",
                  title: "Escríbeme por WhatsApp",
                  desc: "Cuéntame brevemente tu situación. Te respondo rápido para coordinar.",
                },
                {
                  step: "2",
                  title: "Agendamos tu sesión",
                  desc: "Elegimos un horario que te acomode. Te envío el enlace de videollamada.",
                },
                {
                  step: "3",
                  title: "Comenzamos a trabajar",
                  desc: "Sesión de 50 minutos enfocada en tus objetivos. Sin salir de tu casa.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
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
          </div>
        </section>

        {/* Para qué ayuda */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            La terapia cognitivo-conductual ayuda con
          </h2>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {[
              "Ansiedad y preocupación excesiva",
              "Estrés y agotamiento",
              "Pensamientos negativos recurrentes",
              "Dificultad para tomar decisiones",
              "Problemas de sueño",
              "Baja autoestima",
              "Procrastinación",
              "Manejo de emociones",
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="px-4 py-8 md:py-10 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-lg font-medium mb-4">
              ¿Listo para dar el primer paso?
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Escribir por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Sin compromiso · Conversemos primero
            </p>
          </div>
        </section>

        {/* Por qué conmigo */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Por qué trabajar conmigo
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">⭐</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">4.8 de valoración</h3>
                <p className="text-gray-600 text-sm">
                  Basado en 281 experiencias de personas que han trabajado conmigo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Enfoque práctico</h3>
                <p className="text-gray-600 text-sm">
                  Trabajo con objetivos claros. La idea es que notes cambios reales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">💻</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">100% online</h3>
                <p className="text-gray-600 text-sm">
                  Sesiones por videollamada desde donde estés. Horarios flexibles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-lg">🔒</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Espacio privado y seguro</h3>
                <p className="text-gray-600 text-sm">
                  Confidencialidad total. Un espacio para hablar sin juicios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Preguntas frecuentes
            </h2>

            <div className="space-y-3">
              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuánto cuesta una sesión?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  La sesión online tiene un valor de $35.000 CLP y dura 50 minutos.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cómo son las sesiones online?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Las sesiones son por videollamada. Te envío el enlace antes de la
                  hora acordada. Solo necesitas un lugar tranquilo y conexión a
                  internet.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿La terapia online es efectiva?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Sí. La terapia cognitivo-conductual online ha demostrado
                  efectividad comparable a la presencial en múltiples estudios. Lo
                  importante es el trabajo que hacemos juntos, no el medio.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Es confidencial?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Absolutamente. La confidencialidad es un principio ético
                  fundamental. Todo lo conversado queda entre nosotros.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuántas sesiones necesito?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Depende de tu situación y objetivos. Algunas personas notan
                  cambios en pocas sesiones; otros procesos son más largos. Lo
                  conversamos en la primera sesión.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 py-12 md:py-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Comienza tu proceso hoy
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Escríbeme y conversemos. Sin presión, sin compromiso. El primer paso
            es el más importante.
          </p>

          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg text-base"
          >
            Agendar mi primera sesión
          </AdsWhatsAppButton>

          <p className="text-sm text-gray-500 mt-4">
            Respuesta rápida · Confidencial · Horarios flexibles
          </p>
        </section>

        {/* Footer spacer for sticky CTA */}
        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Sticky CTA Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
          >
            Agendar sesión online
          </AdsWhatsAppButton>
        </div>
      </main>
    </>
  );
}
