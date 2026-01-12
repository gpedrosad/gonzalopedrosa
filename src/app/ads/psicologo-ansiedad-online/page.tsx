import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Psicólogo Online para Ansiedad | Terapia Cognitivo-Conductual",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF = "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20online";

export default function PsicologoAnsiedadOnlinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────────────────
          HERO - Above the fold (OPTIMIZADO MOBILE-FIRST)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-12 max-w-3xl mx-auto">
        {/* Trust badge + Disponibilidad */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Disponible esta semana
          </span>
          <span className="text-xs text-gray-500">100% Online</span>
        </div>

        {/* Headline principal - más corto y directo */}
        Trabajo con Terapia Cognitivo-Conductual para ansiedad, 100% online

        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          Soy psicólogo centrado en ansiedad. Te ayudo con herramientas 
          prácticas desde la primera sesión.
        </p>

        {/* Beneficios clave - formato ultra escaneable */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ Terapia Cognitivo-Conductual
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ Videollamada cómoda
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
            ✓ +280 personas atendidas
          </span>
        </div>

        {/* CTA Principal con precio visible */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-600">Sesión online 50 min</p>
              <p className="text-2xl font-bold text-gray-900">$35.000 <span className="text-sm font-normal text-gray-500">CLP</span></p>
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
          SOCIAL PROOF - Testimonios cortos (NUEVO)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-6 bg-gray-50 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-4 text-center">
            Lo que dicen quienes ya trabajaron conmigo
          </p>
          
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {[
              {
                text: "En pocas sesiones aprendí técnicas que uso todos los días. La ansiedad ya no me controla.",
                initials: "MV",
                time: "Hace 2 semanas"
              },
              {
                text: "Primera vez en terapia y me sentí muy cómoda. Gonzalo explica todo de forma clara.",
                initials: "CF",
                time: "Hace 1 mes"
              },
              {
                text: "La terapia online funciona igual de bien. Ahorro tiempo y puedo hacerla desde casa.",
                initials: "RA",
                time: "Hace 3 semanas"
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
                  <span className="text-xs text-gray-400">{testimonial.time}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          ¿ESTO TE PASA? - Problema/Dolor (más visual)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
            ¿Te identificas con esto?
          </h2>

          <div className="grid gap-2">
            {[
              "Mi mente no para de dar vueltas",
              "Siento tensión constante en el cuerpo",
              "Me cuesta dormir o descansar bien",
              "Me preocupo en exceso por todo",
              "Evito situaciones que antes no me costaban",
              "Me siento agotado/a sin motivo",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400"
              >
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-gray-600">
            Si marcaste aunque sea uno,{" "}
            <span className="font-semibold text-gray-900">la terapia puede ayudarte</span>.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          SOBRE MÍ - Más arriba para generar confianza
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/yo.png"
              alt="Gonzalo Pedrosa - Psicólogo"
              width={120}
              height={120}
              className="rounded-full object-cover shadow-lg border-4 border-white mb-4"
            />

            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Gonzalo Pedrosa
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Psicólogo · Especialista en Ansiedad
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
                <span className="text-green-500">✓</span> TCC
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
                <span className="text-green-500">✓</span> +280 pacientes
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-white px-3 py-1.5 rounded-full border border-gray-200">
                <span className="text-green-500">✓</span> 100% online
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Me especializo en tratar ansiedad con un enfoque práctico y basado en 
              evidencia. Mi objetivo es que tengas herramientas concretas para sentirte 
              mejor desde la primera sesión.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          CÓMO TRABAJAMOS - Simplificado
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
          ¿Cómo funciona?
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Proceso simple en 4 pasos
        </p>

        <div className="grid gap-3">
          {[
            {
              step: "1",
              title: "Escríbeme por WhatsApp",
              desc: "Coordinamos día y hora que te acomode",
            },
            {
              step: "2",
              title: "Primera sesión",
              desc: "Conocemos tu situación y definimos objetivos",
            },
            {
              step: "3",
              title: "Aprendes herramientas",
              desc: "Técnicas TCC que puedes aplicar desde el día 1",
            },
            {
              step: "4",
              title: "Ves resultados",
              desc: "La mayoría nota cambios entre la sesión 4 y 8",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          BENEFICIOS - Más visual y escaneable
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            Lo que vas a lograr
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "🧠", title: "Mente más clara", desc: "Menos ruido mental" },
              { icon: "😌", title: "Menos tensión", desc: "Cuerpo relajado" },
              { icon: "💪", title: "Control", desc: "Herramientas prácticas" },
              { icon: "😴", title: "Mejor sueño", desc: "Descanso real" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-gray-800 rounded-xl text-center">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          CÓMO ES UNA SESIÓN ONLINE - Simplificado
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Tu sesión online
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
              <span className="text-2xl mb-2 block">🔒</span>
              <p className="text-sm font-medium text-gray-900">Confidencial</p>
              <p className="text-xs text-gray-500">100% privado</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl text-center">
              <span className="text-2xl mb-2 block">📅</span>
              <p className="text-sm font-medium text-gray-900">Flexible</p>
              <p className="text-xs text-gray-500">Horarios a tu medida</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          FAQ - Formato acordeón más compacto
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Preguntas frecuentes
          </h2>

          <div className="space-y-2">
            {[
              {
                q: "¿Funciona la terapia online?",
                a: "Sí. Estudios demuestran que la TCC online es igual de efectiva que presencial. Lo importante es el trabajo que hacemos juntos."
              },
              {
                q: "¿Es mi primera vez en terapia?",
                a: "No hay problema. Te explico todo el proceso y vamos a tu ritmo. No necesitas preparar nada."
              },
              {
                q: "¿Cuántas sesiones necesito?",
                a: "Depende de cada caso. La mayoría nota cambios significativos entre 8-12 sesiones, pero lo definimos juntos."
              },
              {
                q: "¿Qué formas de pago aceptas?",
                a: "Transferencia bancaria antes de la sesión. Te envío los datos al coordinar la hora."
              },
            ].map((item, i) => (
              <details key={i} className="p-3 bg-white rounded-xl group border border-gray-100">
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
          CTA FINAL - Con más urgencia
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="px-4 py-10 md:py-14 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-400 text-sm font-medium mb-2">
            ✓ Cupos disponibles esta semana
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ¿Listo/a para sentirte mejor?
          </h2>
          <p className="text-gray-400 mb-6 text-sm max-w-md mx-auto">
            Escríbeme ahora y te respondo en menos de 2 horas. 
            Podemos empezar esta misma semana.
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
          STICKY CTA MOBILE - Mejorado con precio y urgencia
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
