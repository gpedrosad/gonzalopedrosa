import type { Metadata } from "next";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export const metadata: Metadata = {
  title: "Psicólogo Online Chile | Terapia por Videollamada | Gonzalo Pedrosa",
  description:
    "Psicólogo online en Chile. Sesiones de psicoterapia por videollamada de 50 min. Atención psicológica online con horarios flexibles. Agenda tu consulta hoy.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Psicólogo Online Chile | Terapia por Videollamada | Gonzalo Pedrosa",
    description:
      "Psicólogo online en Chile. Sesiones de psicoterapia por videollamada de 50 min. Atención psicológica online con horarios flexibles.",
    url: "https://gonzalopedrosa.cl/ads/psicologo-online",
    type: "website",
    images: [
      { url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo Online Chile" },
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
      name: "¿Cuánto cuesta una sesión con un psicólogo online en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión de psicoterapia online tiene un valor de $35.000 CLP y dura 50 minutos. Incluye atención personalizada por videollamada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona la consulta psicológica online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sesión con psicólogo online es por videollamada. Te envío el enlace antes de la hora acordada. Solo necesitas un lugar tranquilo y conexión a internet.",
      },
    },
    {
      "@type": "Question",
      name: "¿La terapia online es igual de efectiva que la presencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la psicoterapia online ha demostrado efectividad comparable a la presencial en múltiples estudios científicos. El vínculo terapéutico se construye igual de bien por videollamada.",
      },
    },
    {
      "@type": "Question",
      name: "¿La atención psicológica online es confidencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. La confidencialidad es un principio ético fundamental en toda consulta psicológica online. Todo lo conversado queda entre nosotros.",
      },
    },
    {
      "@type": "Question",
      name: "¿El psicólogo online atiende desde cualquier región de Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, como psicólogo en línea puedo atender a personas de cualquier región de Chile. Solo necesitas conexión a internet para tu sesión por videollamada.",
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
              alt="Gonzalo Pedrosa - Psicólogo Online Chile"
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
            Psicólogo Online en Chile
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Atención psicológica online profesional desde cualquier lugar de Chile. 
            Sesiones de terapia por videollamada de 50 minutos, con horarios flexibles 
            que se adaptan a tu rutina. Sin traslados, sin esperas, total privacidad.
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
            Respuesta rápida · Horarios flexibles · 100% confidencial
          </p>
        </section>

        {/* Cómo funciona la terapia online */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Cómo funciona la terapia online
            </h2>

            <div className="grid gap-4">
              {[
                {
                  step: "1",
                  title: "Escríbeme por WhatsApp",
                  desc: "Cuéntame brevemente qué te gustaría trabajar. Te respondo rápido para coordinar tu primera sesión con psicólogo online.",
                },
                {
                  step: "2",
                  title: "Agendamos tu consulta online",
                  desc: "Elegimos un horario que se adapte a ti. Te envío el enlace de videollamada para tu sesión de psicoterapia online.",
                },
                {
                  step: "3",
                  title: "Comenzamos tu proceso",
                  desc: "Sesión de 50 minutos de atención psicológica online enfocada en tus objetivos. Desde la comodidad de tu hogar.",
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

        {/* Sobre el psicólogo */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            Sobre el psicólogo online
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <AdsProfileImage
              alt="Gonzalo Pedrosa - Psicólogo por Videollamada"
              width={120}
              height={120}
              className="rounded-xl object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                Gonzalo Pedrosa
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Soy psicólogo clínico con enfoque cognitivo-conductual. Trabajo 
                100% online atendiendo a personas de todo Chile que buscan 
                apoyo profesional para mejorar su bienestar emocional. Mi 
                objetivo es que logres cambios reales en tu vida.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Como psicólogo en línea, ofrezco consulta psicológica online con 
                la misma calidad que una sesión presencial. Más de 281 personas 
                han confiado en mi trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué elegir terapia online */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Por qué elegir un psicólogo online
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">🏠</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Desde cualquier lugar de Chile</h3>
                  <p className="text-gray-600 text-sm">
                    Accede a atención psicológica online sin importar dónde vivas. 
                    Psicólogo por videollamada disponible para todo el país.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horarios que se adaptan a ti</h3>
                  <p className="text-gray-600 text-sm">
                    Agenda tu sesión con psicólogo online en horarios flexibles. 
                    Coordinamos un momento que funcione para tu rutina.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg">🔒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Privacidad y confidencialidad</h3>
                  <p className="text-gray-600 text-sm">
                    Tu consulta psicológica online es 100% confidencial. 
                    Un espacio seguro para hablar sin que nadie más sepa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-lg">✅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Efectividad comprobada</h3>
                  <p className="text-gray-600 text-sm">
                    La psicoterapia online tiene la misma efectividad que la presencial. 
                    Estudios científicos respaldan la terapia por videollamada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Para quién es */}
        <section className="px-4 py-10 md:py-14 max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            ¿Para quién es la terapia online?
          </h2>

          <p className="text-gray-600 mb-6">
            El servicio de psicólogo online Chile está pensado para personas que buscan 
            apoyo profesional de forma cómoda y accesible:
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {[
              "Personas sin tiempo para traslados",
              "Quienes prefieren la comodidad de su hogar",
              "Personas en regiones sin acceso fácil a psicólogos",
              "Quienes valoran la privacidad total",
              "Personas con horarios complicados",
              "Quienes viajan frecuentemente",
              "Personas que ya probaron terapia y quieren retomar",
              "Quienes buscan su primer acercamiento a la psicoterapia",
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
              ¿Buscas un psicólogo online en Chile?
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
            >
              Reservar mi sesión online
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-sm mt-3">
              Respuesta rápida · Sin compromiso
            </p>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="px-4 py-10 md:py-14 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Preguntas frecuentes sobre psicólogo online
            </h2>

            <div className="space-y-3">
              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuánto cuesta una sesión con psicólogo online?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  La sesión de psicoterapia online tiene un valor de $35.000 CLP y 
                  dura 50 minutos. Incluye atención personalizada por videollamada.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cómo es una consulta psicológica online?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  La sesión con psicólogo online es por videollamada, igual que 
                  una conversación por Zoom o Meet. Te envío el enlace antes de la 
                  hora acordada. Solo necesitas un lugar tranquilo y conexión a internet.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿La terapia online es igual de efectiva?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Sí. Múltiples estudios demuestran que la psicoterapia online 
                  tiene la misma efectividad que la presencial. El vínculo 
                  terapéutico se construye igual de bien por videollamada.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿La atención psicológica online es confidencial?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Absolutamente. La confidencialidad es un principio ético 
                  fundamental. Todo lo conversado en tu consulta psicológica 
                  online queda entre nosotros.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Puedo tomar terapia online desde cualquier región?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Sí. Como psicólogo en línea atiendo a personas de todo Chile. 
                  Ya sea que estés en Santiago, Valparaíso, Concepción o cualquier 
                  otra ciudad, puedes acceder a tus sesiones por videollamada.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Qué necesito para mi sesión con psicólogo online?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Solo necesitas un dispositivo con cámara (computador, tablet o 
                  celular), conexión a internet estable y un lugar tranquilo donde 
                  puedas hablar con privacidad.
                </p>
              </details>

              <details className="p-4 bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer font-medium text-gray-900 flex justify-between items-center">
                  ¿Cuántas sesiones de terapia online necesito?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Depende de tu situación y objetivos. Algunas personas notan 
                  cambios en pocas sesiones de psicoterapia online; otros procesos 
                  son más largos. Lo evaluamos juntos en la primera consulta.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 py-12 md:py-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Agenda tu sesión con psicólogo online
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Da el primer paso hacia tu bienestar. Escríbeme por WhatsApp y 
            coordinamos tu primera sesión de terapia online. Sin presión, sin compromiso.
          </p>

          <AdsWhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg text-base"
          >
            Agendar mi primera sesión online
          </AdsWhatsAppButton>

          <p className="text-sm text-gray-500 mt-4">
            Psicólogo online Chile · Respuesta rápida · Horarios flexibles
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
