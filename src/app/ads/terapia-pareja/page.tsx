import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Terapia de Pareja Online | Psicólogo para Relaciones",
  description:
    "Terapia de pareja online para mejorar comunicación, recuperar acuerdos y abordar conflictos sin ataques. Sesiones por videollamada en un espacio confidencial.",
  alternates: {
    canonical: "/ads/terapia-pareja",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terapia de Pareja Online | Psicólogo para Relaciones",
    description:
      "Acompañamiento profesional para parejas que quieren ordenar conflictos, mejorar la comunicación y tomar decisiones con más claridad.",
    url: "https://gonzalopedrosa.cl/ads/terapia-pareja",
    type: "website",
    images: [
      {
        url: "/yo.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa - Psicólogo",
      },
    ],
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20de%20pareja%20online";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo funciona la terapia de pareja online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las sesiones son por videollamada en un espacio confidencial. En la primera sesión revisamos el motivo de consulta, objetivos y acuerdos iniciales de trabajo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debemos estar juntos en el mismo lugar para la sesión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. Pueden conectarse desde el mismo lugar o desde ubicaciones distintas, siempre que ambos tengan buena conexión y privacidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué temas se trabajan en terapia de pareja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comunicación, discusiones frecuentes, distancia emocional, celos, confianza, acuerdos de convivencia y toma de decisiones en etapas difíciles de la relación.",
      },
    },
    {
      "@type": "Question",
      name: "¿La terapia de pareja garantiza que sigamos juntos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No se prometen resultados. El objetivo es ofrecer un espacio profesional para comprender el conflicto, mejorar la forma de relacionarse y tomar decisiones con mayor claridad.",
      },
    },
  ],
};

export default function TerapiaParejaAdsPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        <section className="px-4 pt-10 pb-8 md:pt-16 md:pb-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/yo.png"
              alt="Gonzalo Pedrosa - Psicólogo"
              width={56}
              height={56}
              priority
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Gonzalo Pedrosa</p>
              <p className="text-sm text-gray-500">Psicólogo · Terapia online</p>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Terapia de pareja online para recuperar diálogo y claridad
          </h1>

          <p className="text-lg text-gray-600 mb-5 leading-relaxed">
            Si sienten que cada conversación termina en pelea, hay distancia
            emocional o no logran ponerse de acuerdo, este espacio puede ayudar.
            Trabajamos para bajar la tensión, ordenar el conflicto y construir
            conversaciones más útiles.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {[
              "Videollamada confidencial",
              "Sesiones estructuradas",
              "Enfoque práctico",
              "Horarios flexibles",
            ].map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-3">
            <p className="text-sm text-gray-600 mb-3">
              Primera conversación por WhatsApp para revisar disponibilidad y
              resolver dudas antes de agendar.
            </p>
            <WhatsAppButton
              href={WHATSAPP_HREF}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
            >
              Agendar terapia de pareja online
            </WhatsAppButton>
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Respuesta rápida · Espacio profesional · Sin compromisos por mensaje
          </p>
        </section>

        <section className="px-4 py-8 md:py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-5">
              Qué puede aportar este proceso
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  title: "Mejor comunicación",
                  desc: "Aprender a conversar sin escalar discusiones ni quedar en reproches.",
                },
                {
                  title: "Menos desgaste",
                  desc: "Identificar patrones que repiten el conflicto y empezar a cortarlos.",
                },
                {
                  title: "Acuerdos concretos",
                  desc: "Definir pasos claros para convivencia, tiempos y responsabilidades.",
                },
                {
                  title: "Más claridad",
                  desc: "Tomar decisiones con menos impulsividad y más comprensión mutua.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:py-12 max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-5">
            Para quién es y para quién no
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Sí puede ayudar si:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Quieren mejorar la comunicación y bajar discusiones constantes",
                  "Hay distancia emocional y buscan reconectar",
                  "Necesitan ordenar temas sensibles sin atacarse",
                  "Ambos están dispuestos a participar del proceso",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">No es la mejor opción si:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Solo una persona quiere asistir y no hay intención de trabajo conjunto",
                  "Buscan una solución inmediata sin revisar patrones de fondo",
                  "Esperan que el terapeuta decida quién tiene la razón en cada discusión",
                  "Hay una crisis aguda que requiere atención de urgencia inmediata",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-5">
              Cómo funciona la terapia online
            </h2>

            <div className="grid gap-4">
              {[
                {
                  step: "1",
                  title: "Primer contacto por WhatsApp",
                  desc: "Revisamos brevemente motivo de consulta y disponibilidad para la primera sesión.",
                },
                {
                  step: "2",
                  title: "Primera sesión de evaluación",
                  desc: "Escuchamos ambas perspectivas, detectamos dinámicas repetitivas y definimos objetivos de trabajo.",
                },
                {
                  step: "3",
                  title: "Plan de trabajo en sesiones",
                  desc: "Aplicamos herramientas concretas para conversaciones difíciles, acuerdos y regulación emocional.",
                },
                {
                  step: "4",
                  title: "Seguimiento y ajustes",
                  desc: "Revisamos avances, obstáculos y próximos pasos según la etapa que estén viviendo.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:py-12 max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-5">
            Refuerzo de confianza
          </h2>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
            <div className="flex items-start gap-4">
              <Image
                src="/yo.png"
                alt="Gonzalo Pedrosa - Psicólogo"
                width={72}
                height={72}
                className="rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Gonzalo Pedrosa</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  Psicólogo con enfoque cognitivo-conductual y experiencia en
                  procesos online. El trabajo se centra en comprender la dinámica
                  de la relación, crear acuerdos realistas y mejorar la forma de
                  comunicarse.
                </p>
                <p className="text-sm text-gray-500">
                  Sesiones por videollamada en un espacio reservado y
                  confidencial.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-3">
              Si quieren empezar a ordenar la relación, conversemos
            </h2>
            <p className="text-gray-300 text-sm mb-5 max-w-xl mx-auto">
              El primer paso puede ser simple: un mensaje para revisar su caso y
              coordinar la primera sesión.
            </p>
            <WhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Escribir por WhatsApp
            </WhatsAppButton>
            <p className="text-gray-400 text-xs mt-3">Atención online · Respuesta rápida</p>
          </div>
        </section>
      </main>
    </>
  );
}
