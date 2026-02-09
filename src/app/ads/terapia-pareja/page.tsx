import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";
import { LazyStickyWhatsAppAfterFirstCta } from "./LazyStickyWhatsAppAfterFirstCta";

export const metadata: Metadata = {
  title: "Terapia de Pareja Online | Si todo termina en pelea",
  description:
    "Terapia de pareja online para mejorar comunicación, recuperar acuerdos y abordar conflictos sin ataques. Sesiones por videollamada en un espacio confidencial.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Terapia de Pareja Online | Si todo termina en pelea",
    description:
      "Acompañamiento profesional para parejas que buscan ordenar conflictos, mejorar su comunicación y tomar decisiones con más claridad.",
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
const FIRST_CTA_ID = "ads-terapia-pareja-first-cta";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto dura y cuál es el valor de la sesión de pareja online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión de pareja dura 50 minutos y tiene un valor de $45.000 CLP. Se realiza por videollamada en un espacio confidencial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede hacer una sesión individual primero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Si la pareja lo necesita, podemos coordinar una sesión individual previa para aclarar motivo de consulta y objetivos antes de la sesión de pareja.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si uno habla mucho y el otro poco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión se estructura para dar espacio a ambos. Trabajo con turnos de intervención y foco en objetivos para que las dos voces puedan participar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si estamos al borde de separarnos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "También se puede trabajar en ese escenario. El foco es ordenar el conflicto, entender patrones y tomar decisiones con mayor claridad y menos impulsividad.",
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
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white pb-24 md:pb-0">
        <section className="px-4 pt-7 pb-8 md:pt-14 md:pb-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <AdsProfileImage
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

          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
            Terapia de pareja online · Enfoque TCC
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3 leading-[1.15]">
            Si cada conversación termina en pelea
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
            Esta terapia de pareja online les ayuda a bajar la tensión, hablar
            mejor y tomar decisiones con más claridad, sin seguir en el mismo
            ciclo de discusiones.
          </p>

          <div className="mb-5 space-y-1.5">
            <p className="text-base md:text-lg font-semibold text-gray-900">
              50 min · Online · $45.000 CLP (pareja)
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Opción de 1 sesión individual previa si lo necesitan
            </p>
          </div>

          <div
            id={FIRST_CTA_ID}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-3"
          >
            <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed">
              Escríbeme por WhatsApp para revisar disponibilidad, contarme
              brevemente el motivo y coordinar la primera sesión (pareja o
              individual previa).
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
            >
              Agendar por WhatsApp
            </AdsWhatsAppButton>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {[
              "Videollamada privada",
              "Sesión estructurada",
              "Enfoque TCC",
              "Horarios flexibles",
            ].map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            Respuesta rápida · Espacio profesional · Sin compromisos por mensaje
          </p>
        </section>

        <section className="px-4 py-8 md:py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
              ¿En qué les puede ayudar este proceso?
            </h2>
            <p className="text-gray-600 mb-6">
              El objetivo no es encontrar culpables, sino crear acuerdos que sí
              puedan sostener en la vida real.
            </p>

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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
            ¿Esta terapia es para ustedes?
          </h2>
          <p className="text-gray-600 mb-6">
            Puede servir mucho cuando ambos quieren entender qué está pasando y
            probar una forma distinta de conversar.
          </p>

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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
              ¿Cómo funciona la terapia de pareja online?
            </h2>
            <p className="text-gray-600 mb-6">
              Un proceso claro, paso a paso, para bajar la tensión y avanzar con
              objetivos concretos.
            </p>

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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Dudas frecuentes antes de agendar
          </h2>
          <p className="text-gray-600 mb-6">
            Respuestas claras para tomar una decisión con tranquilidad.
          </p>

          <div className="grid gap-3">
            {[
              {
                question: "¿Y si uno habla mucho y el otro poco?",
                answer:
                  "La sesión se ordena con turnos y objetivos concretos. Así ambas voces tienen espacio y la conversación no queda tomada por una sola parte.",
              },
              {
                question: "¿Y si estamos al borde de separarnos?",
                answer:
                  "También se puede trabajar en ese punto. El objetivo es bajar la intensidad del conflicto y tomar decisiones con más claridad.",
              },
              {
                question: "¿Qué pasa si discutimos en sesión?",
                answer:
                  "Es algo que puede ocurrir. Se interviene para ordenar la conversación y transformar la discusión en trabajo útil para la pareja.",
              },
              {
                question: "¿Se puede hacer una sesión individual primero?",
                answer:
                  "Sí. Si lo necesitan, podemos iniciar con 1 sesión individual para clarificar motivo y objetivos antes de la sesión de pareja.",
              },
              {
                question: "¿Esto garantiza seguir juntos?",
                answer:
                  "No. No se prometen resultados. Se ofrece un proceso profesional para ordenar el conflicto, construir acuerdos y decidir con mayor claridad.",
              },
            ].map((item) => (
              <article
                key={item.question}
                className="bg-white border border-gray-200 rounded-xl p-4"
              >
                <h3 className="font-semibold text-gray-900 mb-1.5">
                  {item.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-8 md:py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Quién les va a acompañar
          </h2>
          <p className="text-gray-600 mb-6">
            Trabajo con enfoque cognitivo-conductual para transformar discusiones
            repetidas en acuerdos más claros y sostenibles.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
            <div className="flex items-start gap-4">
              <AdsProfileImage
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
            <h3 className="text-xl font-semibold text-white mb-3">
              Si quieren empezar a ordenar la relación, conversemos
            </h3>
            <p className="text-gray-300 text-sm mb-5 max-w-xl mx-auto">
              El primer paso puede ser simple: un mensaje para revisar su caso y
              coordinar la primera sesión.
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Escribir por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-xs mt-3">Atención online · Respuesta rápida</p>
          </div>
        </section>
      </main>

      <LazyStickyWhatsAppAfterFirstCta
        href={WHATSAPP_HREF}
        firstCtaId={FIRST_CTA_ID}
      />
    </>
  );
}
