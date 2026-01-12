import type { Metadata } from "next";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Método Cognitivo Conductual | Terapia TCC",
  description: "Conoce cómo el enfoque cognitivo conductual puede ayudarte a superar las crisis de pánico.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20por%20ataques%20de%20p%C3%A1nico";

export default function MetodoCognitivoConductualPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
          Método cognitivo conductual en tu proceso
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Si estás buscando ayuda para las crisis de pánico, probablemente hayas escuchado sobre 
          la Terapia Cognitivo-Conductual (TCC). Aquí te explico de forma simple qué es y por qué 
          puede ayudarte.
        </p>
      </section>

      {/* Qué es la TCC */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            ¿Qué es la Terapia Cognitivo-Conductual?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            La TCC parte de una idea simple pero poderosa: la forma en que pensamos sobre 
            una situación influye directamente en cómo nos sentimos y cómo actuamos.
          </p>

          <div className="bg-white rounded-xl p-5 border border-gray-100 mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <div className="bg-gray-100 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-500 mb-1">Pensamientos</p>
                <p className="font-medium text-gray-900">Lo que piensas</p>
              </div>
              <span className="text-gray-400 text-xl hidden sm:block">→</span>
              <span className="text-gray-400 text-xl sm:hidden">↓</span>
              <div className="bg-gray-100 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-500 mb-1">Emociones</p>
                <p className="font-medium text-gray-900">Lo que sientes</p>
              </div>
              <span className="text-gray-400 text-xl hidden sm:block">→</span>
              <span className="text-gray-400 text-xl sm:hidden">↓</span>
              <div className="bg-gray-100 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-500 mb-1">Conductas</p>
                <p className="font-medium text-gray-900">Lo que haces</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Cuando entendemos esta relación, podemos trabajar en modificar los pensamientos 
            y conductas que mantienen el problema. No se trata de &ldquo;pensar positivo&rdquo;, sino de 
            aprender a pensar de forma más realista y útil.
          </p>
        </div>
      </section>

      {/* Cómo se aplica a crisis de pánico */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Cómo se aplica cuando hay crisis de pánico
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            En el caso de las crisis de pánico, la TCC ayuda a trabajar en varios frentes:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: "Identificar disparadores",
                desc: "Entender qué situaciones, pensamientos o sensaciones físicas suelen desencadenar una crisis. A veces hay patrones que no son evidentes hasta que los analizamos juntos.",
              },
              {
                title: "Trabajar con pensamientos catastróficos",
                desc: "Durante una crisis, es común pensar cosas como \"me voy a morir\" o \"voy a perder el control\". Aprendemos a cuestionar estos pensamientos y verlos de forma más realista.",
              },
              {
                title: "Manejar los síntomas físicos",
                desc: "Técnicas de respiración, relajación y otras herramientas concretas que puedes usar en el momento para regular lo que pasa en tu cuerpo.",
              },
              {
                title: "Enfrentar la evitación",
                desc: "Cuando evitamos lugares o situaciones por miedo, el problema suele empeorar. Trabajamos de forma gradual para que puedas retomar actividades que hoy evitas.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-medium text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque práctico */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Un enfoque práctico y estructurado
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Una de las cosas que más valoran las personas que trabajan conmigo es que la TCC 
            no es solo &ldquo;hablar de lo que te pasa&rdquo;. Es un proceso activo donde aprendes 
            herramientas concretas que puedes usar en tu día a día.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Las sesiones tienen estructura: revisamos cómo te fue en la semana, trabajamos 
            en algo específico, y te llevas tareas o ejercicios para practicar. Así el avance 
            no depende solo de la hora de sesión, sino de lo que aplicas entre sesiones.
          </p>

          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              La investigación científica ha demostrado que la TCC es uno de los tratamientos 
              más efectivos para el trastorno de pánico, con resultados que suelen mantenerse 
              en el tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Quieres saber si este enfoque es para ti?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme y conversemos sobre tu situación. Puedo explicarte cómo aplicaríamos 
            estas herramientas en tu caso particular.
          </p>

          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg justify-center"
          >
            Agendar sesión online
          </WhatsAppButton>

          <p className="text-gray-500 text-sm mt-4">
            Respuesta en menos de 2 horas
          </p>
        </div>
      </section>
    </main>
  );
}
