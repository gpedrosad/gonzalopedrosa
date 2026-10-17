import type { Metadata } from "next";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Método Cognitivo Conductual | Terapia TCC",
  description:
    "Cómo funciona la terapia cognitivo-conductual online: pensamientos, emociones y conductas, con herramientas prácticas.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20cognitivo-conductual%20online";

export default function MetodoCognitivoConductualPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
          Método cognitivo conductual en tu proceso
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          La Terapia Cognitivo-Conductual (TCC) es el enfoque con el que trabajo.
          Aquí te explico de forma simple qué es y cómo se usa en sesión.
        </p>
      </section>

      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            ¿Qué es la Terapia Cognitivo-Conductual?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            La TCC parte de una idea concreta: la forma en que piensas una
            situación influye en cómo te sientes y en lo que haces.
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
            Cuando vemos esa relación, podemos cambiar los pensamientos y las
            conductas que mantienen el problema. No se trata de “pensar
            positivo”, sino de pensar de forma más realista y útil.
          </p>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            En qué se usa en la práctica
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            En sesión trabajamos con lo que te está costando hoy. Suele incluir:
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                title: "Identificar patrones",
                desc: "Ver qué pensamientos, situaciones o hábitos están alimentando el malestar.",
              },
              {
                title: "Trabajar con pensamientos que no ayudan",
                desc: "Cuestionar interpretaciones rígidas o catastróficas y probar lecturas más ajustadas a los hechos.",
              },
              {
                title: "Herramientas concretas",
                desc: "Técnicas que puedes usar entre sesiones: registro, exposición gradual, regulación o planificación, según el caso.",
              },
              {
                title: "Cambiar la evitación",
                desc: "Si dejas de hacer cosas por miedo o agotamiento, avanzamos paso a paso para recuperarlas.",
              },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4">
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

      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Un enfoque práctico y estructurado
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            La TCC no es solo hablar de lo que te pasa. Es un proceso activo:
            aprendes herramientas que puedes usar en tu día a día.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Las sesiones tienen estructura: revisamos la semana, trabajamos algo
            específico y te llevas algo para practicar. El avance no depende
            solo de la hora de sesión.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Quieres ver si este enfoque te sirve?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme y conversamos. Te explico cómo lo aplicaríamos en tu caso.
          </p>

          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg justify-center"
          >
            Agendar sesión online
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
