import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre el Psicólogo | Gonzalo Pedrosa",
  description: "Conoce al psicólogo que te acompañará en tu proceso. Formación, experiencia y estilo de trabajo.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20por%20ataques%20de%20p%C3%A1nico";

export default function SobreElPsicologoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
          Sobre el psicólogo que te acompañará
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Antes de iniciar un proceso terapéutico, es natural querer saber quién estará del otro lado. 
          Aquí te cuento un poco sobre mí y cómo trabajo.
        </p>
      </section>

      {/* Presentación */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <Image
              src="/yo.png"
              alt="Gonzalo Pedrosa - Psicólogo"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1 text-center sm:text-left">
                Gonzalo Pedrosa
              </h2>
              <p className="text-gray-600 mb-3 text-center sm:text-left">
                Psicólogo · Terapia Cognitivo-Conductual
              </p>
              <p className="text-gray-700 leading-relaxed">
                Soy psicólogo con formación en Terapia Cognitivo-Conductual, un enfoque basado en 
                evidencia científica que ha demostrado ser especialmente efectivo para trabajar 
                ansiedad y crisis de pánico.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A lo largo de mi práctica profesional, he acompañado a más de 280 personas en sus 
              procesos terapéuticos. Muchas de ellas llegaron con la misma sensación que quizás 
              tú tienes ahora: el miedo constante a las crisis, la sensación de que algo malo 
              va a pasar, la evitación de lugares o situaciones que antes disfrutaban.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Mi experiencia me ha permitido entender que cada persona vive el pánico de manera 
              diferente, y por eso adapto las herramientas y el ritmo del proceso a lo que 
              tú necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Estilo de trabajo */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Mi estilo de trabajo
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "Cercano y directo",
                desc: "Creo que la terapia funciona mejor cuando hay confianza y claridad. No uso lenguaje complicado ni me escondo detrás de tecnicismos. Te explico lo que estamos haciendo y por qué.",
              },
              {
                title: "Basado en evidencia",
                desc: "Trabajo con técnicas que han sido estudiadas y validadas científicamente. No se trata de hablar sin rumbo, sino de aplicar herramientas concretas que sabemos que funcionan.",
              },
              {
                title: "Enfocado en resultados",
                desc: "Mi objetivo es que logres sentirte mejor lo antes posible. Eso no significa apurar el proceso, pero sí asegurarnos de que cada sesión tenga sentido y te aporte algo útil.",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidencialidad */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Confidencialidad y respeto
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Todo lo que conversemos en sesión queda entre nosotros. El secreto profesional 
            es un pilar fundamental de mi práctica, y lo tomo muy en serio.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Además, respeto tus tiempos y tu forma de ver las cosas. No estoy aquí para juzgarte 
            ni para decirte cómo deberías vivir tu vida. Estoy para acompañarte en el proceso de 
            entender qué te pasa y ayudarte a encontrar las herramientas para manejarlo.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Te gustaría que trabajemos juntos?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme por WhatsApp y cuéntame brevemente lo que estás viviendo. 
            Podemos coordinar una primera sesión cuando te acomode.
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
