import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export const metadata: Metadata = {
  title: "Tratamiento Adicción al Juego Online | Psicólogo TCC",
  description:
    "Terapia online para ludopatía y adicción al juego. Recuperá el control con terapia cognitivo-conductual. Sesiones por videollamada. Agenda por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Tratamiento Adicción al Juego Online | Psicólogo TCC",
    description:
      "Terapia online para ludopatía y adicción al juego. Recuperá el control con terapia cognitivo-conductual.",
    url: "https://www.gonzalopedrosa.cl/ads/adiccion-al-juego",
    type: "website",
    images: [
      {
        url: "/yo.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa - Psicólogo Online Adicción al Juego",
      },
    ],
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20online%20para%20adicci%C3%B3n%20al%20juego";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La adicción al juego es realmente una adicción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La ludopatía está reconocida como un trastorno adictivo. El cerebro responde al juego de forma similar a como lo hace con sustancias adictivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Incluye apuestas online y casinos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El tratamiento cubre casinos, apuestas deportivas online, tragamonedas, póker o cualquier forma de juego con dinero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona la terapia online para ludopatía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La terapia cognitivo-conductual online es efectiva para la adicción al juego. Trabajamos impulsos, pensamientos distorsionados y prevención de recaídas por videollamada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una sesión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión tiene un valor de $35.000 CLP y dura 50 minutos. Incluye atención personalizada por videollamada.",
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
        {/* Hero */}
        <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Disponible esta semana
            </span>
            <span className="text-xs text-gray-500">100% Online</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3 leading-tight">
            Tratamiento psicológico online para adicción al juego
          </h1>

          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Recuperá el control con terapia cognitivo-conductual. Trabajamos
            impulsos, mentiras, deudas y el ciclo de la ludopatía — sin juicios,
            con herramientas concretas desde la primera sesión.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
              ✓ Terapia Cognitivo-Conductual
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
              ✓ Apuestas online y casinos
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
              ✓ 100% confidencial
            </span>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-600">Sesión online 50 min</p>
                <p className="text-2xl font-bold text-gray-900">
                  $35.000{" "}
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
              label="ads-adiccion-juego-hero"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
            >
              Agendar mi sesión
            </AdsWhatsAppButton>
            <p className="text-xs text-gray-500 text-center mt-2">
              Respuesta en menos de 2 horas · Sin compromiso
            </p>
          </div>
        </section>

        {/* Señales / dolor */}
        <section className="px-4 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
              ¿Te identificas con esto?
            </h2>

            <div className="grid gap-2">
              {[
                "Necesito apostar cada vez más para sentir lo mismo",
                "Me irrito o me angustio cuando intento dejar de jugar",
                "Ya intenté parar varias veces y no pude",
                "Pienso en el juego casi todo el día",
                "Juego para escapar de problemas o emociones",
                "Miento sobre cuánto juego o cuánto perdí",
                "Tengo deudas o problemas familiares por el juego",
                "Pido plata prestada para seguir apostando",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400"
                >
                  <p className="text-gray-800 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-gray-600">
              Si marcaste aunque sea uno,{" "}
              <span className="font-semibold text-gray-900">
                la terapia puede ayudarte a recuperar el control
              </span>
              .
            </p>
          </div>
        </section>

        {/* Sobre el profesional */}
        <section className="px-4 py-8 md:py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <AdsProfileImage
                alt="Gonzalo Pedrosa - Psicólogo Adicción al Juego"
                width={120}
                height={120}
                className="rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />

              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Gonzalo Pedrosa
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Psicólogo · Enfoque cognitivo-conductual
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <span className="text-green-500">✓</span> TCC
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <span className="text-green-500">✓</span> +280 pacientes
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <span className="text-green-500">✓</span> 100% online
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Trabajo con personas que quieren dejar de jugar y no saben cómo.
                Sin moralina: identificamos el ciclo de la adicción, manejamos
                impulsos y armamos un plan realista para no recaer.
              </p>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-8 md:py-12 max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
            ¿Cómo funciona el tratamiento?
          </h2>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Proceso claro, paso a paso
          </p>

          <div className="grid gap-3">
            {[
              {
                step: "1",
                title: "Escríbime por WhatsApp",
                desc: "Coordinamos día y hora que te acomode",
              },
              {
                step: "2",
                title: "Evaluación inicial",
                desc: "Entendemos tu patrón de juego, triggers y consecuencias",
              },
              {
                step: "3",
                title: "Herramientas TCC",
                desc: "Manejo de impulsos, pensamientos distorsionados y prevención de recaídas",
              },
              {
                step: "4",
                title: "Recuperás el control",
                desc: "Reconstruís finanzas, relaciones y rutinas sin el juego al centro",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qué trabajamos */}
        <section className="px-4 py-8 md:py-12 bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Lo que vamos a trabajar
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: "🧠",
                  title: "Pensamientos",
                  desc: "Creencias sobre “recuperar lo perdido”",
                },
                {
                  icon: "⚡",
                  title: "Impulsos",
                  desc: "Frenar el urge antes de apostar",
                },
                {
                  icon: "🛡️",
                  title: "Recaídas",
                  desc: "Plan concreto para no volver",
                },
                {
                  icon: "🏠",
                  title: "Vida real",
                  desc: "Finanzas, familia y rutinas",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-800 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="px-4 py-8 md:py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-green-700 text-xs font-medium uppercase tracking-wider mb-2">
              Cupos limitados
            </p>
            <p className="text-gray-900 text-lg font-medium mb-4">
              El primer paso es pedir ayuda. El resto lo trabajamos juntos.
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-adiccion-juego-mid"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md"
            >
              Agendar sesión online
            </AdsWhatsAppButton>
            <p className="text-gray-500 text-sm mt-3">
              Sin lista de espera · Sin compromiso
            </p>
          </div>
        </section>

        {/* Sesión online */}
        <section className="px-4 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Tu sesión online
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <span className="text-2xl mb-2 block">📹</span>
                <p className="text-sm font-medium text-gray-900">Videollamada</p>
                <p className="text-xs text-gray-500">Sin descargar nada</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <span className="text-2xl mb-2 block">⏱️</span>
                <p className="text-sm font-medium text-gray-900">50 minutos</p>
                <p className="text-xs text-gray-500">Sesión completa</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <span className="text-2xl mb-2 block">🔒</span>
                <p className="text-sm font-medium text-gray-900">Confidencial</p>
                <p className="text-xs text-gray-500">100% privado</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl text-center">
                <span className="text-2xl mb-2 block">📅</span>
                <p className="text-sm font-medium text-gray-900">Flexible</p>
                <p className="text-xs text-gray-500">Horarios a tu medida</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-8 md:py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Preguntas frecuentes
            </h2>

            <div className="space-y-2">
              {[
                {
                  q: "¿Es realmente una adicción?",
                  a: "Sí. La ludopatía está reconocida como un trastorno adictivo. El cerebro responde al juego de forma similar a como lo hace con sustancias adictivas.",
                },
                {
                  q: "¿Incluye apuestas online y casinos?",
                  a: "Sí. El tratamiento cubre casinos, apuestas deportivas online, tragamonedas, póker o cualquier forma de juego con dinero.",
                },
                {
                  q: "¿Funciona la terapia online para esto?",
                  a: "Sí. La TCC online es efectiva para adicción al juego. Lo importante es el trabajo entre sesiones: manejar triggers, impulsos y el plan de prevención de recaídas.",
                },
                {
                  q: "¿Puede participar mi familia?",
                  a: "Sí, en muchos casos es útil. La ludopatía afecta a todo el entorno y el apoyo familiar puede ser clave en la recuperación.",
                },
                {
                  q: "¿Cuántas sesiones se necesitan?",
                  a: "Depende de cada caso. Algunas personas notan cambios en pocas semanas; otros procesos son más largos. Lo evaluamos juntos en la primera consulta.",
                },
                {
                  q: "¿Qué formas de pago aceptás?",
                  a: "Transferencia bancaria antes de la sesión. Te envío los datos al coordinar la hora.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="p-3 bg-white rounded-xl group border border-gray-100"
                >
                  <summary className="cursor-pointer font-medium text-gray-900 text-sm flex justify-between items-center">
                    {item.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-4 py-10 md:py-14 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-green-400 text-sm font-medium mb-2">
              ✓ Cupos disponibles esta semana
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              ¿Listo/a para recuperar el control?
            </h2>
            <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">
              Escribime ahora y te respondo en menos de 2 horas. Podemos empezar
              esta misma semana.
            </p>

            <div className="bg-gray-800/50 rounded-2xl p-5 max-w-sm mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AdsProfileImage
                  alt="Gonzalo Pedrosa"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-green-500"
                />
                <div className="text-left">
                  <p className="text-white font-medium text-sm">
                    Gonzalo Pedrosa
                  </p>
                  <p className="text-gray-400 text-xs">Psicólogo · TCC</p>
                </div>
              </div>

              <AdsWhatsAppButton
                href={WHATSAPP_HREF}
                label="ads-adiccion-juego-final"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg justify-center"
              >
                Agendar mi sesión · $35.000
              </AdsWhatsAppButton>

              <p className="text-gray-500 text-xs mt-3">
                Sin compromiso · Confidencial
              </p>
            </div>
          </div>
        </section>

        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Sticky CTA mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-gray-500">Sesión online</p>
              <p className="text-lg font-bold text-gray-900">$35.000</p>
            </div>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-adiccion-juego-sticky"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md px-6"
            >
              Agendar ahora
            </AdsWhatsAppButton>
          </div>
        </div>
      </main>
    </>
  );
}
