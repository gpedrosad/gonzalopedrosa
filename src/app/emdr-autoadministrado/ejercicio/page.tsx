import { Metadata } from 'next';
import Link from 'next/link';
import EmdrBilateralPlayer from './EmdrBilateralPlayer';

export const metadata: Metadata = {
  title: 'Ejercicio EMDR autoadministrado | Estimulación bilateral visual',
  description: 'Ejercicio práctico de EMDR con estimulación bilateral visual. Configura velocidad y duración de sets para tu sesión de procesamiento emocional.',
  alternates: {
    canonical: "/emdr-autoadministrado/ejercicio",
  },
};

export default function EjercicioEmdrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/emdr-autoadministrado"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Volver a información
          </Link>
        </div>

        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ejercicio EMDR autoadministrado
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sigue el punto con tus ojos mientras mantienes en mente la situación que deseas procesar
          </p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 max-w-3xl mx-auto">
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>⚠️ Uso responsable:</strong> Esta herramienta es para autoexploración emocional con experiencias de intensidad leve a moderada. No la uses durante crisis graves, episodios de disociación o si experimentas pensamientos de autolesión. Si el malestar aumenta significativamente, detén el ejercicio y busca apoyo profesional.
          </p>
        </div>

        <EmdrBilateralPlayer />

        <div className="mt-8 max-w-3xl mx-auto bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Instrucciones:</h3>
          <ol className="space-y-2 text-gray-700 text-sm">
            <li><strong>1.</strong> Identifica la situación o emoción que deseas procesar.</li>
            <li><strong>2.</strong> Ajusta la velocidad y duración del set según tu preferencia.</li>
            <li><strong>3.</strong> Presiona &quot;Iniciar&quot; y sigue el punto con tus ojos.</li>
            <li><strong>4.</strong> Al terminar cada set, toma una pausa y observa qué pensamientos o emociones surgen.</li>
            <li><strong>5.</strong> Continúa con el siguiente set cuando estés listo.</li>
            <li><strong>6.</strong> Realiza entre 3-6 sets por sesión, o hasta que sientas alivio.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
