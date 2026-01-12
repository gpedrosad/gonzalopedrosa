import type { Metadata } from "next";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Agendar Terapia Online | Crisis de Pánico",
  description: "Agenda tu sesión de terapia online para trabajar crisis de pánico. Proceso simple y confidencial.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20por%20ataques%20de%20p%C3%A1nico";

export default function AgendarTerapiaOnlinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full border border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Disponible esta semana
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3 leading-tight">
          Agenda tu terapia online para crisis de pánico
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          Si estás pasando por momentos difíciles con las crisis de pánico, dar el paso de agendar 
          una sesión es el primer avance hacia recuperar tu tranquilidad. Las sesiones son por 
          videollamada, duran 50 minutos, y todo lo que conversemos es completamente confidencial.
        </p>

        <WhatsAppButton
          href={WHATSAPP_HREF}
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
        >
          Agendar sesión online
        </WhatsAppButton>
      </section>

      {/* Cómo es el proceso de agendar */}
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
                desc: "Cuéntame brevemente lo que estás viviendo. No necesitas dar muchos detalles, solo lo que quieras compartir.",
              },
              {
                num: "2",
                title: "Coordinamos día y hora",
                desc: "Buscaremos un horario que te acomode. Tengo disponibilidad de lunes a viernes, y algunos sábados en la mañana.",
              },
              {
                num: "3",
                title: "Te envío el enlace de videollamada",
                desc: "El día de la sesión recibirás el enlace para conectarnos. Solo necesitas un dispositivo con cámara y un espacio tranquilo.",
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

      {/* Qué trabajaremos en las primeras sesiones */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Qué trabajaremos en las primeras sesiones
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Cada proceso es único, pero en general las primeras sesiones suelen enfocarse en:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Conocer tu historia y entender qué está pasando contigo",
              "Identificar qué situaciones disparan las crisis y cómo las vives",
              "Darte herramientas concretas para manejar los síntomas físicos cuando aparecen",
              "Empezar a trabajar con los pensamientos que alimentan el miedo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <p className="text-gray-700 leading-relaxed">
              La idea es que desde la primera sesión te lleves algo útil. No tienes que esperar 
              semanas para empezar a notar cambios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Listo/a para dar el primer paso?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme por WhatsApp y coordinamos tu primera sesión. Sin compromiso, 
            puedes preguntarme lo que necesites antes de agendar.
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
