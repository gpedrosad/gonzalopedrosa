import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/app/components/Breadcrumb';
import { OrganicSeoScripts } from '@/app/components/OrganicSeoScripts';
import { getTwitterDescription } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'EMDR autoadministrado online | Estimulación bilateral visual',
  description: 'Herramienta de EMDR autoadministrado con estimulación bilateral visual. Ejercicio guiado para procesar emociones de forma segura. No reemplaza terapia profesional. Uso responsable y consciente.',
  alternates: {
    canonical: "/emdr-autoadministrado",
  },
  openGraph: {
    title: 'EMDR autoadministrado online | Estimulación bilateral visual',
    description: 'Herramienta de EMDR autoadministrado con estimulación bilateral visual. Ejercicio guiado para procesar emociones de forma segura.',
    url: 'https://www.gonzalopedrosa.cl/emdr-autoadministrado',
    type: 'website',
    images: [{ url: '/yo.png', width: 1200, height: 630, alt: 'EMDR autoadministrado' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMDR autoadministrado online',
    description: getTwitterDescription(
      'Ejercicio guiado de estimulación bilateral visual. Complemento educativo; no reemplaza terapia EMDR profesional.'
    ),
  },
};


const emdr_autoadministradoFAQs = [
  {
    question: "¿Reemplaza la terapia EMDR presencial?",
    answer:
      "No. Es un recurso educativo complementario. Para trauma complejo o TEPT se recomienda EMDR con psicólogo certificado.",
  },
  {
    question: "¿Es seguro hacerlo solo?",
    answer:
      "Solo para malestar leve y con buena estabilidad emocional. Si aparecen recuerdos abrumadores, detente y busca apoyo profesional.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "EMDR Autoadministrado Chillán" },
];

export default function EmdrAutoadministradoPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={emdr_autoadministradoFAQs}
        serviceType="EMDR Autoadministrado"
        serviceDescription="Herramienta educativa de EMDR autoadministrado con estimulación bilateral visual. No reemplaza terapia profesional."
        areaServed="Chile"
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              EMDR autoadministrado online
            </h1>
            <p className="text-xl text-gray-600">
              Estimulación bilateral visual para procesamiento emocional
            </p>
          </header>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Qué es esta herramienta?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              El EMDR autoadministrado es una adaptación de la técnica de desensibilización y reprocesamiento por movimientos oculares que puedes hacer por tu cuenta. Esta herramienta usa estimulación bilateral visual: un punto que se mueve de izquierda a derecha, para facilitar el procesamiento de experiencias emocionales.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              El recurso puede servir para emociones cotidianas, estrés leve o recuerdos que generan malestar moderado. No reemplaza la terapia profesional, sobre todo si hay trauma complejo, crisis aguda o un trastorno diagnosticado.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
              <p className="text-amber-900 font-medium">
                ⚠️ Advertencia importante: Si experimentas síntomas graves de ansiedad, depresión, trauma complejo o pensamientos de autolesión, consulta con un profesional de salud mental antes de usar esta herramienta.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Requisitos para practicar el ejercicio
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Para obtener mejores resultados, conviene crear las condiciones adecuadas:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Lugar tranquilo:</strong> Busca un espacio privado donde no te interrumpan durante la sesión.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Pantalla adecuada:</strong> Usa un computador, tablet o teléfono con buen tamaño para seguir el movimiento visual con comodidad.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Conexión estable:</strong> Asegúrate de tener internet estable para que el ejercicio funcione sin cortes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Estado emocional apropiado:</strong> No uses el recurso si estás en crisis aguda o con malestar emocional severo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Tiempo suficiente:</strong> Reserva al menos 15-20 minutos para completar varios sets sin apuros.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Cómo funciona el ejercicio?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La sesión se estructura en sets de estimulación bilateral. Un set típico dura unos 30 segundos, aunque puedes ajustar la duración según te acomode (entre 10 y 120 segundos).
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Durante cada set, sigue el punto que se mueve de izquierda a derecha con tus ojos, mientras mantienes en mente la situación o emoción que quieres procesar. Al terminar, toma una pausa breve para notar qué pensamientos, emociones o sensaciones aparecen. Después sigue con el siguiente set.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La velocidad del movimiento también se puede ajustar. Prueba distintas velocidades hasta encontrar la que te resulte más cómoda.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-blue-900">
                💡 <strong>Consejo:</strong> Es normal que durante el ejercicio surjan emociones intensas. Si pasa, puedes pausar, respirar hondo y retomarlo cuando te sientas preparado.
              </p>
            </div>
          </section>

          <div className="text-center mt-12">
            <Link
              href="/emdr-autoadministrado/ejercicio"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Empezar ejercicio
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Al continuar, confirmas que comprendes que esta herramienta no reemplaza atención profesional
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
