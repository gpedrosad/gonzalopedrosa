import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export const metadata: Metadata = {
  title: "Agendar Psicólogo Online | Sesión hoy o mañana",
  description:
    "Agenda tu hora con psicólogo online. Trabajo ansiedad, estrés y dificultades emocionales. Sesiones por videollamada. Respuesta inmediata por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Agendar Psicólogo Online | Gonzalo Pedrosa",
    description:
      "Agenda tu sesión con psicólogo online. Horarios disponibles hoy. Respuesta inmediata.",
    url: "https://www.gonzalopedrosa.cl/ads/agendar-psicologo-online",
    type: "website",
    images: [
      { url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" },
    ],
  },
};

const WHATSAPP_HREF = "https://wa.me/56968257817?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20online";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo puedo agendar una sesión con psicólogo online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Escríbeme por WhatsApp, te respondo en minutos y coordinamos un horario que te acomode. Es simple y rápido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay horarios disponibles hoy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dependiendo del día, suelo tener disponibilidad en el mismo día o al día siguiente. Escríbeme para confirmar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la sesión online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión online tiene un valor de $35.000 CLP y dura 50 minutos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesito para la sesión online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo necesitas un lugar tranquilo y conexión a internet. Te envío el enlace de videollamada antes de la sesión.",
      },
    },
  ],
};

export default function AdsAgendarPsicologoOnlinePage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section - Enfocado en agendar rápido */}
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
              <p className="text-sm text-gray-500">Psicólogo · +6 años de experiencia</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Agenda tu sesión con psicólogo online
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Trabajo con dificultades emocionales, ansiedad, estrés y problemas
            del estado de ánimo. Sesiones por videollamada desde donde estés.
            Escríbeme y agendamos en el horario que mejor te acomode.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md"
            >
              Agendar ahora
            </AdsWhatsAppButton>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              Respuesta inmediata
            </span>
            <span>·</span>
            <span>Horarios flexibles</span>
            <span>·</span>
            <span>$35.000 CLP</span>
          </div>
        </section>

        {/* 3 pasos simples */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Agenda en 3 pasos
            </h2>

            <div className="grid gap-4">
              {[
                {
                  step: "1",
                  title: "Escríbeme por WhatsApp",
                  desc: "Toca el botón y envíame un mensaje. Te respondo rápido.",
                },
                {
                  step: "2",
                  title: "Elegimos horario",
                  desc: "Te doy opciones de horarios disponibles. Tú eliges.",
                },
                {
                  step: "3",
                  title: "Sesión confirmada",
                  desc: "Te envío el enlace de videollamada. Listo, nos vemos.",
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

        {/* Beneficios de agendar online */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Te puedo ayudar con
          </h2>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {[
              "Ansiedad y preocupación",
              "Estrés y agotamiento",
              "Problemas del ánimo",
              "Dificultades emocionales",
              "Pensamientos negativos",
              "Manejo de emociones",
              "Crisis y momentos difíciles",
              "Autoestima y confianza",
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
              ¿Listo para agendar?
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Agendar mi hora
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Te respondo en minutos
            </p>
          </div>
        </section>

        {/* Sobre mí - breve */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Tu psicólogo
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
                <span className="text-blue-600 text-lg">🎓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">+6 años de experiencia</h3>
                <p className="text-gray-600 text-sm">
                  Psicólogo con formación en terapia cognitivo-conductual. Enfoque práctico y orientado a resultados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-lg">🧠</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Especialidad</h3>
                <p className="text-gray-600 text-sm">
                  Dificultades emocionales, ansiedad, estrés y problemas del estado de ánimo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">💬</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Comunicación directa</h3>
                <p className="text-gray-600 text-sm">
                  Me escribes, te respondo yo. Sin intermediarios.
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
                  ¿Cómo agendo una sesión?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Toca el botón de WhatsApp, envíame un mensaje y coordinamos.
                  Te respondo rápido con horarios disponibles.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Hay horarios disponibles hoy?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Dependiendo del día, suelo tener disponibilidad el mismo día
                  o al día siguiente. Escríbeme para confirmar.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuánto cuesta la sesión?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  La sesión online tiene un valor de $35.000 CLP y dura 50
                  minutos.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Qué necesito para la sesión online?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Solo un lugar tranquilo y conexión a internet. Te envío el
                  enlace de videollamada antes de la hora.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Puedo cancelar o reagendar?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Sí, avísame con al menos 24 horas de anticipación y buscamos
                  otro horario sin problema.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 py-12 md:py-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Agenda tu sesión ahora
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Escríbeme por WhatsApp y en minutos tienes tu hora confirmada.
            Simple, rápido y sin complicaciones.
          </p>

          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg text-base"
          >
            Agendar mi sesión
          </AdsWhatsAppButton>

          <p className="text-sm text-gray-500 mt-4">
            Respuesta inmediata · Horarios flexibles · $35.000 CLP
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
            Agendar ahora
          </AdsWhatsAppButton>
        </div>
      </main>
    </>
  );
}
