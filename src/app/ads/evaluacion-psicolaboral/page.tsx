import type { Metadata } from "next";
import { AdsIcon, type AdsIconName } from "../components/AdsIcon";
import { AdsProfessionalCard } from "../components/AdsProfessionalCard";
import { AdsProfileImage } from "../components/AdsProfileImage";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

const LANDING_URL = "https://www.gonzalopedrosa.cl/ads/evaluacion-psicolaboral";

export const metadata: Metadata = {
  title: "Evaluación Psicolaboral Online | Desde $45.000 por Candidato",
  description:
    "Evaluación psicolaboral online para empresas en todo Chile: entrevista por competencias, pruebas psicométricas e informe con recomendación en 48 horas hábiles. Desde $45.000.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: LANDING_URL,
  },
  openGraph: {
    title: "Evaluación Psicolaboral Online | Desde $45.000 por Candidato",
    description:
      "Entrevista por competencias, pruebas psicométricas e informe en 48 horas hábiles. Todo Chile por videollamada.",
    url: LANDING_URL,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
};

const WHATSAPP_HREF =
  "https://wa.me/56968257817?text=Hola%2C%20quiero%20cotizar%20evaluaciones%20psicolaborales%20para%20mi%20empresa.";

const PRECIOS = [
  {
    cargo: "Operativos y administrativos",
    ejemplo: "Operarios, vendedores, administrativos, atención de público",
    precio: "$45.000",
  },
  {
    cargo: "Técnicos y profesionales",
    ejemplo: "Analistas, técnicos, profesionales sin personas a cargo",
    precio: "$60.000",
  },
  {
    cargo: "Jefaturas y supervisión",
    ejemplo: "Supervisores, jefes de área, coordinadores con equipo",
    precio: "$85.000",
  },
];

const HERO_BULLETS = [
  "Entrevista por competencias por videollamada",
  "Pruebas psicométricas según el cargo",
  "Informe PDF con recomendación en 48 horas hábiles",
  "Boleta electrónica · sin contrato ni mínimo",
];

const INFORME: { icon: AdsIconName; titulo: string; texto: string }[] = [
  {
    icon: "users",
    titulo: "Perfil laboral",
    texto: "Personalidad, estilo de trabajo y relación con otros.",
  },
  {
    icon: "activity",
    titulo: "Competencias del cargo",
    texto: "Las que definas para el puesto, con nivel observado.",
  },
  {
    icon: "shield",
    titulo: "Fortalezas y alertas",
    texto: "Lo que suma y lo que conviene observar en el ingreso.",
  },
  {
    icon: "idea",
    titulo: "Recomendación final",
    texto: "Recomendable, recomendable con observaciones o no recomendable.",
  },
];

const PASOS = [
  {
    step: "1",
    title: "Me envías el cargo",
    desc: "Por WhatsApp o correo: perfil del puesto, competencias clave y datos del candidato.",
  },
  {
    step: "2",
    title: "Coordino con el candidato",
    desc: "Agendo la videollamada directamente con la persona, en un horario que le acomode.",
  },
  {
    step: "3",
    title: "Entrevista y pruebas",
    desc: "Entrevista por competencias y pruebas psicométricas online, en una sola instancia.",
  },
  {
    step: "4",
    title: "Recibes el informe",
    desc: "PDF firmado con recomendación en 48 horas hábiles, junto con la boleta.",
  },
];

const PARA_QUIEN = [
  "Pymes sin área de selección",
  "Equipos de RR.HH.",
  "Consultoras de selección",
  "Cargos con alta rotación",
  "Procesos en regiones",
];

const FAQS = [
  {
    q: "¿Cuánto cuesta y cómo se paga?",
    a: "Depende del cargo: $45.000 para operativos y administrativos, $60.000 para técnicos y profesionales, y $85.000 para jefaturas. Pagas por transferencia o Webpay y emito boleta electrónica. Desde 5 candidatos te cotizo un precio por volumen.",
  },
  {
    q: "¿Cuánto demora el informe?",
    a: "48 horas hábiles desde la evaluación. Si tienes un proceso urgente, avísame al cotizar y vemos si se puede adelantar.",
  },
  {
    q: "¿Qué pruebas se aplican?",
    a: "Una entrevista por competencias y pruebas psicométricas estandarizadas que elijo según el cargo. Al cotizar te indico cuáles usaré para tu proceso.",
  },
  {
    q: "¿Sirve una evaluación online?",
    a: "Sí. La entrevista es por videollamada y las pruebas se responden en línea, con el mismo informe que una evaluación presencial. Así puedes evaluar candidatos de cualquier región sin traslados.",
  },
  {
    q: "¿Puedo pedirla para un solo candidato?",
    a: "Sí. No hay contrato ni mínimo: puedes pedir una evaluación puntual o varias a lo largo del año.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const H2 = "text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4";

export default function EvaluacionPsicolaboralAdsPage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="px-4 pt-8 pb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-[13px] font-medium px-2.5 py-1 rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              100% online · todo Chile
            </span>
            <span className="text-[13px] text-gray-600">Para empresas</span>
          </div>

          <h1 className="text-[26px] leading-tight md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            Evaluación psicolaboral online para tu empresa
          </h1>

          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Evalúa a tus candidatos con un psicólogo registrado: entrevista por
            competencias, pruebas psicométricas e informe con recomendación clara
            para decidir la contratación.
          </p>

          <ul className="space-y-2 mb-5">
            {HERO_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            id="whatsapp"
            className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-600">Por candidato, informe incluido</p>
                <p className="text-2xl font-bold text-gray-900">
                  Desde $45.000{" "}
                  <span className="text-sm font-normal text-gray-500">CLP</span>
                </p>
              </div>
              <AdsProfileImage
                alt="Gonzalo Pedrosa - Evaluación psicolaboral"
                width={56}
                height={56}
                priority
                className="rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-psicolaboral-hero"
              className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold shadow-md justify-center"
            >
              Cotizar por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-[13px] text-gray-600 text-center mt-2">
              Respuesta el mismo día · Sin contrato ni mínimo
            </p>
          </div>
        </section>

        <AdsProfessionalCard
          role="Psicólogo clínico · Evaluación psicolaboral"
          bio="Evalúo candidatos para empresas de todo Chile por videollamada. Recibes un informe claro, con las competencias que pediste y una recomendación concreta, sin tener que traducir jerga técnica."
          tags={["Informe en 48 h hábiles", "Todo Chile", "Boleta electrónica"]}
        />

        {/* Precios */}
        <section id="precio" className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className={H2}>Precio por candidato</h2>
            <ul className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
              {PRECIOS.map((item) => (
                <li key={item.cargo} className="flex items-start justify-between gap-4 px-4 py-4">
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-[15px]">{item.cargo}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.ejemplo}</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900 whitespace-nowrap">
                    {item.precio}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Incluye entrevista, pruebas, informe PDF firmado y boleta electrónica.
              Desde 5 candidatos, precio por volumen.
            </p>
          </div>
        </section>

        {/* Qué incluye el informe */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className={H2}>Qué incluye el informe</h2>
            <div className="grid grid-cols-2 gap-3">
              {INFORME.map((item) => (
                <div key={item.titulo} className="p-4 bg-gray-50 rounded-xl">
                  <span className="w-10 h-10 mb-2 rounded-full bg-white border border-gray-200 text-green-700 flex items-center justify-center">
                    <AdsIcon name={item.icon} />
                  </span>
                  <h3 className="font-semibold text-gray-900 text-[15px] mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className={H2}>Cómo funciona</h2>
            <ol className="space-y-4">
              {PASOS.map((item) => (
                <li key={item.step} className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-[15px] mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Para quién */}
        <section className="px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 className={H2}>¿Para quién es?</h2>
            <ul className="flex flex-wrap gap-2">
              {PARA_QUIEN.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-800 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200"
                >
                  <span className="text-green-600" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className={H2}>Preguntas frecuentes</h2>
            <div className="space-y-2">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="p-4 bg-white rounded-xl border border-gray-200 group"
                >
                  <summary className="cursor-pointer font-medium text-gray-900 text-[15px] flex justify-between items-center gap-2">
                    {faq.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section className="px-4 py-10 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Cotiza tu próxima evaluación
            </h2>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
              Cuéntame el cargo y cuántos candidatos tienes. Te respondo el mismo día
              con el valor y los próximos horarios.
            </p>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-psicolaboral-final"
              className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold shadow-lg justify-center"
            >
              Cotizar por WhatsApp
            </AdsWhatsAppButton>
            <p className="text-gray-400 text-[13px] mt-3">
              Desde $45.000 por candidato · Sin contrato ni mínimo
            </p>
          </div>
        </section>

        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Sticky CTA mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[13px] text-gray-600 leading-tight">Por candidato</p>
              <p className="text-lg font-bold text-gray-900 leading-tight">Desde $45.000</p>
            </div>
            <AdsWhatsAppButton
              href={WHATSAPP_HREF}
              label="ads-psicolaboral-sticky"
              className="bg-[#15803D] hover:bg-[#166534] text-white font-semibold shadow-md"
            >
              Cotizar
            </AdsWhatsAppButton>
          </div>
        </div>
      </main>
    </>
  );
}
