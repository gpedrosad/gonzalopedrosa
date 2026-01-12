import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Terapia Ataques de Pánico Online | Psicólogo TCC",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20por%20ataques%20de%20p%C3%A1nico";

export default function PsicologoAtaquesDePanicoOnlinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────────────
          HERO - Above the fold (MOBILE-FIRST)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-12 max-w-3xl mx-auto">
        {/* Trust badge + Disponibilidad */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Cupos esta semana
          </span>
          <span className="text-xs text-gray-500">100% Online</span>
        </div>

        {/* H1 directo */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3 leading-tight">
          Ataques de pánico: terapia 100% online
        </h1>

        {/* Subtítulo empático */}
        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          Si sientes que el corazón se acelera, te falta el aire y aparece un
          miedo intenso sin razón aparente, puedo ayudarte. Trabajo con
          herramientas prácticas para que recuperes el control.
        </p>

        {/* Beneficios clave - formato ultra escaneable */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ Herramientas desde sesión 1
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ Enfoque TCC (basado en evidencia)
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ Videollamada cómoda
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ Confidencial
          </span>
        </div>

        {/* CTA Principal con precio visible */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-600">Sesión online 50 min</p>
              <p className="text-2xl font-bold text-gray-900">
                $35.000 <span className="text-sm font-normal text-gray-500">CLP</span>
              </p>
            </div>
            <Image
              src="/yo.png"
              alt="Gonzalo Pedrosa - Psicólogo"
              width={56}
              height={56}
              className="rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
          >
            Agendar mi sesión
          </WhatsAppButton>
          <p className="text-xs text-gray-500 text-center mt-2">
            Respuesta en menos de 2 horas · Sin compromiso
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          ¿ESTO TE PASA? - Experiencias comunes
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
            ¿Esto te pasa?
          </h2>

          <div className="grid gap-2">
            {[
              "Siento que me falta el aire de repente",
              "El corazón se acelera sin razón",
              "Miedo a desmayarme o perder el control",
              "Sensación de que algo terrible va a pasar",
              "Evito lugares o situaciones por miedo a otra crisis",
              "Vivo pendiente de cuándo vendrá el próximo ataque",
              "A veces pienso que me estoy volviendo loco/a",
              "El miedo a que vuelva es casi peor que el ataque mismo",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400"
              >
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Si te identificas con alguna de estas experiencias,{" "}
            <span className="font-semibold text-gray-900">
              la terapia puede ayudarte a recuperar el control
            </span>
            .
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          QUÉ HAREMOS EN TERAPIA (TCC)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
          Qué haremos en terapia (TCC)
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Un proceso estructurado para resultados concretos
        </p>

        <div className="grid gap-3">
          {[
            {
              step: "1",
              title: "Entender qué dispara y mantiene el pánico",
              desc: "Identificamos patrones y situaciones específicas",
            },
            {
              step: "2",
              title: "Entrenar regulación fisiológica",
              desc: "Técnicas de respiración y manejo de síntomas físicos",
            },
            {
              step: "3",
              title: "Trabajar interpretaciones catastróficas",
              desc: 'Cambiar el "me voy a morir" por pensamientos más realistas',
            },
            {
              step: "4",
              title: "Exposición gradual y segura",
              desc: "Recuperar confianza en situaciones que hoy evitas",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
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

        <p className="mt-4 text-xs text-gray-400 text-center italic">
          Cada proceso es único. Los tiempos varían según cada caso.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          CTA INTERMEDIO
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-10 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white text-lg font-medium mb-4">
            ¿Listo/a para dar el primer paso?
          </p>
          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg"
          >
            Agendar mi sesión
          </WhatsAppButton>
          <p className="text-gray-400 text-sm mt-3">
            Sin compromiso · Respuesta rápida
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          RESULTADOS ESPERABLES
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Resultados que puedes esperar
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: "🧘",
                title: "Menos miedo",
                desc: "A que vuelva el ataque",
              },
              {
                icon: "💪",
                title: "Más control",
                desc: "Durante los síntomas",
              },
              {
                icon: "🚶",
                title: "Volver a hacer",
                desc: "Lo que evitabas",
              },
              {
                icon: "😌",
                title: "Mayor calma",
                desc: "En el día a día",
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl text-center">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center italic">
            Los tiempos varían según cada caso. No hacemos promesas de resultados
            específicos.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          PRUEBA SOCIAL / CONFIANZA
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-6 bg-gray-50 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-4 text-center">
            Experiencias de otras personas
          </p>

          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {[
              {
                text: "Llevaba meses con crisis constantes. Ahora entiendo qué las dispara y tengo herramientas para manejarlas.",
                initials: "LP",
                time: "Hace 3 semanas",
              },
              {
                text: "Pensé que nunca podría volver a subirme al metro. Hoy lo hago sin miedo. El proceso fue gradual pero funcionó.",
                initials: "MR",
                time: "Hace 1 mes",
              },
              {
                text: "Lo más valioso fue entender que no me estaba volviendo loco. Las técnicas de respiración me cambiaron la vida.",
                initials: "AC",
                time: "Hace 2 semanas",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] snap-start bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {testimonial.initials}
                  </div>
                  <span className="text-xs text-gray-400">
                    {testimonial.time}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Chips de confianza */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <span className="text-green-500">✓</span> 100% online
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <span className="text-green-500">✓</span> Enfoque TCC
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <span className="text-green-500">✓</span> Confidencial
            </span>
            <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
              <span className="text-green-500">✓</span> +280 personas atendidas
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          CÓMO ES LA SESIÓN ONLINE
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Cómo es la sesión online
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
              <span className="text-2xl mb-2 block">🎧</span>
              <p className="text-sm font-medium text-gray-900">Auriculares</p>
              <p className="text-xs text-gray-500">Mayor privacidad</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl text-center">
              <span className="text-2xl mb-2 block">🏠</span>
              <p className="text-sm font-medium text-gray-900">Lugar tranquilo</p>
              <p className="text-xs text-gray-500">Desde tu casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          FAQ
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Preguntas frecuentes
          </h2>

          <div className="space-y-2">
            {[
              {
                q: "¿Qué hago si me da un ataque antes de la sesión?",
                a: "Puedes escribirme por WhatsApp y te doy una técnica rápida para ese momento. Si necesitas reprogramar, lo hacemos sin problema.",
              },
              {
                q: "¿Funciona la terapia online para esto?",
                a: "Sí. La TCC online ha demostrado efectividad comparable a la presencial para trastorno de pánico. Lo importante es el trabajo que hacemos juntos.",
              },
              {
                q: "¿Cuántas sesiones suelen ser?",
                a: "Varía según cada persona. Algunos notan cambios desde las primeras sesiones, otros necesitan un proceso más largo. Lo vamos evaluando juntos.",
              },
              {
                q: "¿Cómo agendamos?",
                a: "Me escribes por WhatsApp, coordinamos día y hora que te acomode, y te envío el enlace de videollamada antes de la sesión.",
              },
              {
                q: "¿Formas de pago?",
                a: "Transferencia bancaria antes de la sesión. Te envío los datos al momento de coordinar.",
              },
              {
                q: "¿Es confidencial?",
                a: "Absolutamente. Todo lo que conversamos queda entre nosotros. La confidencialidad es un principio ético fundamental.",
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

      {/* ─────────────────────────────────────────────────────────────────────────
          CTA FINAL
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-10 md:py-14 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-400 text-sm font-medium mb-2">
            ✓ Cupos disponibles esta semana
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Recupera el control de tu vida
          </h2>
          <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">
            Escríbeme ahora y te respondo en menos de 2 horas. Podemos empezar
            esta misma semana.
          </p>

          <div className="bg-gray-800/50 rounded-2xl p-5 max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image
                src="/yo.png"
                alt="Gonzalo Pedrosa"
                width={48}
                height={48}
                className="rounded-full border-2 border-green-500"
              />
              <div className="text-left">
                <p className="text-white font-medium text-sm">Gonzalo Pedrosa</p>
                <p className="text-gray-400 text-xs">Psicólogo · TCC</p>
              </div>
            </div>

            <WhatsAppButton
              href={WHATSAPP_HREF}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg justify-center"
            >
              Agendar mi sesión · $35.000
            </WhatsAppButton>

            <p className="text-gray-500 text-xs mt-3">
              Sin compromiso · Confidencial
            </p>
          </div>
        </div>
      </section>

      {/* Footer spacer for sticky CTA on mobile */}
      <div className="h-20 md:hidden" aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────────────────────
          STICKY CTA MOBILE
          ───────────────────────────────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-500">Sesión online</p>
            <p className="text-lg font-bold text-gray-900">$35.000</p>
          </div>
          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md px-6"
          >
            Agendar ahora
          </WhatsAppButton>
        </div>
      </div>
    </main>
  );
}
