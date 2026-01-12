import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Psicólogo Ataques de Pánico Online | Terapia TCC",
  description: "Psicólogo online especializado en ataques de pánico. Terapia Cognitivo-Conductual 100% por videollamada. Herramientas prácticas desde la primera sesión.",
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
          HERO - Above the fold (OPTIMIZADO)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 pt-6 pb-5 md:pt-14 md:pb-10 max-w-3xl mx-auto">
        {/* Micro-header con disponibilidad */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full border border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Disponible
          </span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs text-gray-500">Terapia 100% online</span>
        </div>

        {/* H1 - Keyword optimizada + empático */}
        <h1 className="text-[1.65rem] md:text-4xl font-bold text-gray-900 tracking-tight mb-2 leading-[1.2]">
          Psicólogo online para ataques de pánico
        </h1>

        {/* Subtítulo corto y directo */}
        <p className="text-base text-gray-600 mb-4">
          Si vives con miedo al próximo ataque, puedo ayudarte con herramientas 
          concretas para recuperar el control.
        </p>

        {/* Card CTA principal - Todo en uno */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/yo.png"
              alt="Gonzalo Pedrosa - Psicólogo"
              width={52}
              height={52}
              className="rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">Gonzalo Pedrosa</p>
              <p className="text-xs text-gray-500">Psicólogo · Terapia Cognitivo-Conductual</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">$35.000</p>
              <p className="text-xs text-gray-400">50 min</p>
            </div>
          </div>
          
          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
          >
            Agendar sesión online
          </WhatsAppButton>
        </div>

        {/* Trust signals compactos */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-green-500">✓</span> +280 pacientes
          </span>
          <span className="flex items-center gap-1">
            <span className="text-green-500">✓</span> Respuesta rápida
          </span>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          SOCIAL PROOF - Subido para generar confianza temprana
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-5 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {[
              {
                text: "Llevaba meses con crisis. Ahora tengo herramientas para manejarlas.",
                initials: "LP",
              },
              {
                text: "Pensé que nunca volvería al metro. Hoy lo hago sin miedo.",
                initials: "MR",
              },
              {
                text: "Las técnicas de respiración me cambiaron la vida.",
                initials: "AC",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[260px] snap-start bg-white p-3 rounded-xl border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {testimonial.initials}
                  </div>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          SÍNTOMAS - Reducido y más visual
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            ¿Te pasa esto?
          </h2>

          <div className="space-y-2">
            {[
              "El corazón se acelera y sientes que te falta el aire",
              "Miedo intenso a perder el control o desmayarte",
              "Evitas lugares por miedo a que pase de nuevo",
              "Vives pendiente de cuándo vendrá el próximo ataque",
              "El miedo anticipatorio es casi peor que la crisis",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-2.5 bg-amber-50/70 rounded-lg"
              >
                <span className="text-amber-500 mt-0.5">•</span>
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-gray-600 text-sm">
            Si te identificas, <strong>la terapia puede ayudarte</strong>.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          QUÉ HAREMOS - Proceso simplificado
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            Cómo te puedo ayudar
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Terapia Cognitivo-Conductual enfocada en resultados
          </p>

          <div className="space-y-3">
            {[
              {
                num: "1",
                title: "Entender qué dispara el pánico",
                desc: "Identificamos patrones y situaciones específicas de tu caso",
              },
              {
                num: "2",
                title: "Técnicas de regulación",
                desc: "Herramientas para manejar los síntomas físicos en el momento",
              },
              {
                num: "3",
                title: "Cambiar pensamientos catastróficos",
                desc: "Trabajar las interpretaciones que alimentan el miedo",
              },
              {
                num: "4",
                title: "Recuperar tu vida",
                desc: "Volver gradualmente a hacer lo que hoy evitas",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          RESULTADOS + SESIÓN - Combinado para reducir secciones
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">
            Lo que puedes lograr
          </h2>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              { icon: "🧘", text: "Menos miedo anticipatorio" },
              { icon: "💪", text: "Control durante los síntomas" },
              { icon: "🚶", text: "Volver a lugares que evitabas" },
              { icon: "😌", text: "Mayor calma en el día a día" },
            ].map((item, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-xl text-center">
                <span className="text-xl block mb-1">{item.icon}</span>
                <p className="text-gray-700 text-xs font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Info sesión inline */}
          <div className="bg-gray-900 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Tu sesión online</p>
            <div className="flex justify-center gap-6 text-white">
              <div>
                <p className="text-lg font-bold">📹</p>
                <p className="text-xs text-gray-400">Videollamada</p>
              </div>
              <div>
                <p className="text-lg font-bold">50&apos;</p>
                <p className="text-xs text-gray-400">Duración</p>
              </div>
              <div>
                <p className="text-lg font-bold">🔒</p>
                <p className="text-xs text-gray-400">Confidencial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          FAQ - Reducido a 4 preguntas clave
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>

          <div className="space-y-2">
            {[
              {
                q: "¿Funciona la terapia online para ataques de pánico?",
                a: "Sí. Estudios demuestran que la TCC online es igual de efectiva que presencial para trastorno de pánico.",
              },
              {
                q: "¿Qué hago si me da un ataque antes de la sesión?",
                a: "Puedes escribirme por WhatsApp y te doy una técnica rápida. Si necesitas reprogramar, lo hacemos sin problema.",
              },
              {
                q: "¿Cuántas sesiones necesito?",
                a: "Varía según cada caso. Algunos notan cambios en las primeras sesiones, otros necesitan más tiempo. Lo evaluamos juntos.",
              },
              {
                q: "¿Cómo pago?",
                a: "Transferencia bancaria antes de la sesión. Te envío los datos al coordinar la hora.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="p-3 bg-white rounded-xl group border border-gray-100"
              >
                <summary className="cursor-pointer font-medium text-gray-900 text-sm flex justify-between items-center gap-2">
                  <span>{item.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs flex-shrink-0">
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
          CTA FINAL - Simplificado
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-10 md:py-12 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            ¿Listo/a para recuperar el control?
          </h2>
          <p className="text-gray-400 mb-5 text-sm">
            Escríbeme y coordinamos tu primera sesión esta semana.
          </p>

          <div className="bg-gray-800/60 rounded-2xl p-4 max-w-xs mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Image
                src="/yo.png"
                alt="Gonzalo Pedrosa"
                width={44}
                height={44}
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
              Agendar · $35.000
            </WhatsAppButton>

            <p className="text-gray-500 text-xs mt-2">
              Sin compromiso · Respuesta en menos de 2h
            </p>
          </div>
        </div>
      </section>

      {/* Footer spacer for sticky CTA on mobile */}
      <div className="h-[72px] md:hidden" aria-hidden="true" />

      {/* ─────────────────────────────────────────────────────────────────────────
          STICKY CTA MOBILE - Más compacto
          ───────────────────────────────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 truncate">Sesión online · 50 min</p>
            <p className="text-base font-bold text-gray-900">$35.000</p>
          </div>
          <WhatsAppButton
            href={WHATSAPP_HREF}
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md px-5 text-sm"
          >
            Agendar
          </WhatsAppButton>
        </div>
      </div>
    </main>
  );
}
