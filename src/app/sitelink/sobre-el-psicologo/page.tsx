import type { Metadata } from "next";
import Image from "next/image";
import {
  CLINICAL_STATS,
  HEALTH_PROVIDER_REGISTRY_LABEL,
  HEALTH_PROVIDER_REGISTRY_URL,
} from "@/lib/site-config";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre el Psicólogo | Gonzalo Pedrosa",
  description:
    "Gonzalo Pedrosa, psicólogo clínico. Terapia cognitivo-conductual online. Registro de prestador de salud.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20me%20interesa%20agendar%20una%20sesi%C3%B3n%20de%20terapia%20cognitivo-conductual%20online";

export default function SobreElPsicologoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 pt-8 pb-6 md:pt-16 md:pb-10 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
          Sobre el psicólogo que te va a atender
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Antes de agendar, es normal querer saber quién está del otro lado.
          Aquí te cuento cómo trabajo.
        </p>
      </section>

      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <Image
              src="/yo.png"
              alt="Gonzalo Pedrosa, psicólogo clínico"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1 text-center sm:text-left">
                Gonzalo Pedrosa
              </h2>
              <p className="text-gray-600 mb-3 text-center sm:text-left">
                Psicólogo clínico · Terapia Cognitivo-Conductual
              </p>
              <p className="text-sm text-gray-500 text-center sm:text-left">
                {HEALTH_PROVIDER_REGISTRY_LABEL} ·{" "}
                <a
                  href={HEALTH_PROVIDER_REGISTRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Verificar
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Trabajo con terapia cognitivo-conductual, un enfoque práctico y
              basado en evidencia. Más de {CLINICAL_STATS.yearsExperience} años
              de atención clínica y {CLINICAL_STATS.experienceCount} experiencias
              de personas que han trabajado conmigo.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Las sesiones son de {CLINICAL_STATS.sessionMinutes} minutos, por
              videollamada, y se coordinan por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Mi estilo de trabajo
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "Cercano y directo",
                desc: "Te explico lo que estamos haciendo y por qué. Sin lenguaje innecesario.",
              },
              {
                title: "Basado en evidencia",
                desc: "Uso técnicas estudiadas. No se trata de hablar sin rumbo, sino de aplicar herramientas concretas.",
              },
              {
                title: "Enfocado en lo práctico",
                desc: "Cada sesión busca dejarte algo útil para la semana. El ritmo lo vamos ajustando juntos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Confidencialidad
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Todo lo que conversemos en sesión queda entre nosotros. El secreto
            profesional es parte de la práctica. Tus datos de salud se tratan
            de forma confidencial.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:py-14 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            ¿Quieres que trabajemos juntos?
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Escríbeme por WhatsApp. Coordinamos una primera sesión cuando te
            acomode.
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
