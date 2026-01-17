import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EMDR autoadministrado online | Estimulación bilateral visual',
  description: 'Herramienta de EMDR autoadministrado con estimulación bilateral visual. Ejercicio guiado para procesar emociones de forma segura. No reemplaza terapia profesional. Uso responsable y consciente.',
};

export default function EmdrAutoadministradoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'EMDR autoadministrado online',
    description: 'Plataforma de EMDR autoadministrado con estimulación bilateral visual para procesamiento emocional responsable',
    about: {
      '@type': 'Thing',
      name: 'EMDR autoadministrado',
      description: 'Técnica de estimulación bilateral visual para autoaplicación consciente',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
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
              ¿Qué es el EMDR autoadministrado?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              El EMDR autoadministrado es una adaptación de la técnica de desensibilización y reprocesamiento por movimientos oculares que puedes realizar por tu cuenta. Esta herramienta de EMDR autoadministrado utiliza estimulación bilateral visual mediante un punto que se mueve de izquierda a derecha, activando ambos hemisferios cerebrales para facilitar el procesamiento de experiencias emocionales.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              El EMDR autoadministrado puede ser útil para trabajar con emociones cotidianas, estrés leve o recuerdos que generan malestar moderado. Sin embargo, es fundamental comprender que el EMDR autoadministrado no reemplaza la terapia profesional, especialmente en casos de trauma complejo, crisis agudas o trastornos diagnosticados.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
              <p className="text-amber-900 font-medium">
                ⚠️ Advertencia importante: Si experimentas síntomas graves de ansiedad, depresión, trauma complejo o pensamientos de autolesión, consulta con un profesional de salud mental antes de usar esta herramienta de EMDR autoadministrado.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Requisitos para practicar EMDR autoadministrado
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Para obtener los mejores resultados con el EMDR autoadministrado, es importante crear las condiciones adecuadas:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Lugar tranquilo:</strong> Busca un espacio privado donde no seas interrumpido durante la sesión de EMDR autoadministrado.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Pantalla adecuada:</strong> Utiliza una pantalla de computadora, tablet o teléfono con buen tamaño para seguir el movimiento visual cómodamente.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Conexión estable:</strong> Asegúrate de tener una conexión a internet estable para que el ejercicio funcione sin interrupciones.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Estado emocional apropiado:</strong> No practiques EMDR autoadministrado si te encuentras en crisis aguda o con malestar emocional severo.</span>
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
              La sesión de EMDR autoadministrado se estructura en sets de estimulación bilateral. Un set típico dura aproximadamente 30 segundos, aunque puedes ajustar la duración según tu comodidad (entre 10 y 120 segundos).
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Durante cada set, sigue el punto que se mueve de izquierda a derecha con tus ojos, mientras mantienes en mente la situación o emoción que deseas procesar. Al finalizar cada set, toma una pausa breve para notar qué pensamientos, emociones o sensaciones surgen. Luego continúa con el siguiente set.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La velocidad del movimiento también es ajustable. Experimenta con diferentes velocidades hasta encontrar la que te resulte más cómoda y efectiva para tu práctica de EMDR autoadministrado.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-blue-900">
                💡 <strong>Consejo:</strong> Es normal que durante el EMDR autoadministrado surjan emociones intensas. Si esto ocurre, puedes pausar el ejercicio, respirar profundamente y retomarlo cuando te sientas preparado.
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
