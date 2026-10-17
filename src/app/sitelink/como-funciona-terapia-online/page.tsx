import type { Metadata } from "next";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cómo Funciona la Terapia Online",
  description: "Conoce cómo es una sesión de terapia por videollamada. Requisitos, proceso y beneficios.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20cognitivo-conductual%20online";

export default function ComoFuncionaTerapiaOnlinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
          Cómo funciona la terapia online
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Si nunca has tenido una sesión por videollamada, es normal tener dudas sobre cómo funciona. 
          Aquí te explico lo que necesitas para conectarte tranquilo.
        </p>
      </section>

      {/* Requisitos básicos */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Lo que necesitas para conectarte
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "📶",
                title: "Conexión a internet",
                desc: "Una conexión estable. No necesita ser ultra rápida, pero sí lo suficiente para una videollamada sin cortes.",
              },
              {
                icon: "💻",
                title: "Dispositivo con cámara",
                desc: "Puede ser computador, tablet o celular. Lo importante es que puedas verte cómodo durante la sesión.",
              },
              {
                icon: "🔇",
                title: "Espacio privado",
                desc: "Un lugar donde puedas hablar tranquilo, sin interrupciones y donde te sientas seguro para expresarte.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 text-center">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo es una sesión típica */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Cómo es una sesión típica
          </h2>

          <div className="space-y-4">
            {[
              {
                time: "Antes",
                title: "Te envío el enlace de videollamada",
                desc: "Unos minutos antes de la hora acordada, recibes el enlace por WhatsApp. Solo tienes que hacer clic para conectarte.",
              },
              {
                time: "Inicio",
                title: "Nos conectamos y verificamos que todo funcione",
                desc: "Revisamos rápidamente que el audio y video estén bien. Si hay algún problema técnico, lo solucionamos juntos.",
              },
              {
                time: "Durante",
                title: "Trabajamos durante 50 minutos",
                desc: "La sesión es igual que si estuviéramos en un consultorio. Conversamos, trabajamos con las herramientas que correspondan, y avanzamos en tu proceso.",
              },
              {
                time: "Cierre",
                title: "Acordamos los próximos pasos",
                desc: "Antes de terminar, resumimos lo que trabajamos y definimos si hay algo para practicar durante la semana.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {item.time}
                  </span>
                </div>
                <div className="border-l border-gray-200 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Beneficios de la modalidad online
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Comodidad",
                desc: "Puedes tomar la sesión desde tu casa, tu oficina o cualquier lugar donde te sientas cómodo.",
              },
              {
                title: "Ahorro de tiempo",
                desc: "No tienes que desplazarte ni perder tiempo en traslados. Eso hace más fácil mantener la constancia.",
              },
              {
                title: "Acceso desde cualquier lugar",
                desc: "No importa dónde vivas. Si tienes internet, podemos trabajar juntos sin importar la distancia.",
              },
              {
                title: "Flexibilidad de horarios",
                desc: "Es más fácil encontrar un horario que te acomode cuando no dependes de llegar a un lugar físico.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidencialidad */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Confidencialidad en el entorno online
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Entiendo que hablar de temas personales por videollamada puede generar dudas sobre 
            la privacidad. Quiero que sepas que tomo esto muy en serio.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Las sesiones no se graban. Lo que conversamos queda entre nosotros.",
              "Uso plataformas seguras para las videollamadas.",
              "Todo está protegido por el secreto profesional, igual que en una sesión presencial.",
              "Te recomiendo que busques un espacio privado donde nadie pueda escucharte.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              La terapia online puede ser tan efectiva como la presencial cuando hay
              compromiso de ambas partes. La modalidad no reemplaza el trabajo de
              sesión.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Quieres probar la terapia online?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme por WhatsApp y coordinamos tu primera sesión. Si tienes alguna 
            duda técnica, podemos resolverla antes de empezar.
          </p>

          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg justify-center"
          >
            Agendar sesión online
          </WhatsAppButton>

          <p className="text-gray-500 text-sm mt-4">Respuesta por WhatsApp</p>
        </div>
      </section>
    </main>
  );
}
