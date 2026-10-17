import type { Metadata } from "next";
import { CLINICAL_STATS } from "@/lib/site-config";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Agendar Terapia Online | TCC",
  description:
    "Agenda tu sesión de terapia cognitivo-conductual online. Videollamada de 50 minutos, confidencial.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20cognitivo-conductual%20online";
const PRICE_TEXT = new Intl.NumberFormat("es-CL").format(
  CLINICAL_STATS.sessionPriceClp,
);

export default function AgendarTerapiaOnlinePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3 leading-tight">
          Agenda tu terapia cognitivo-conductual online
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          Sesiones por videollamada de {CLINICAL_STATS.sessionMinutes} minutos.
          Coordinamos horario por WhatsApp. Todo lo que conversemos es
          confidencial.
        </p>

        <WhatsAppButton
          href={WHATSAPP_HREF}
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
        >
          Agendar sesión online
        </WhatsAppButton>
        <p className="text-sm text-gray-500 mt-3">
          Sesión de {CLINICAL_STATS.sessionMinutes} min por videollamada · $
          {PRICE_TEXT}
        </p>
      </section>

      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Cómo es el proceso de agendar
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "Me escribes por WhatsApp",
                desc: "Cuéntame brevemente lo que estás buscando. No necesitas dar muchos detalles.",
              },
              {
                num: "2",
                title: "Coordinamos día y hora",
                desc: "Buscamos un horario que te acomode. Atiendo de lunes a viernes.",
              },
              {
                num: "3",
                title: "Te envío el enlace de videollamada",
                desc: "El día de la sesión recibes el enlace. Solo necesitas un dispositivo con cámara y un espacio tranquilo.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Qué trabajamos en las primeras sesiones
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Cada proceso es distinto. En general, las primeras sesiones sirven para:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Entender qué te está pasando y qué quieres cambiar",
              "Acordar objetivos concretos para el trabajo",
              "Empezar con herramientas prácticas que puedas usar entre sesiones",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Quieres agendar?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme por WhatsApp y coordinamos tu primera sesión. Puedes
            preguntarme lo que necesites antes de confirmar.
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
