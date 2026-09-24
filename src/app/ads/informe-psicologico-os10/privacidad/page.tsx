import type { Metadata } from "next";
import { LANDING_PATH, profesional } from "../content";

export const metadata: Metadata = {
  title: "Privacidad | Informe psicológico OS10",
  robots: { index: false, follow: false },
};

export default function PrivacidadOs10Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <article className="max-w-2xl mx-auto text-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Privacidad</h1>
        <p className="leading-relaxed mb-3">
          Esta página no pide tu nombre, teléfono, correo ni ciudad. Para
          agendar escribes por WhatsApp. Los datos de la evaluación se tratan
          en esa atención.
        </p>
        <p className="leading-relaxed mb-3">
          El informe se envía a tu correo cuando corresponde. La boleta la emite
          el profesional a tu nombre.
        </p>
        <p className="leading-relaxed mb-6">
          Si quieres corregir o eliminar un dato de contacto, escribe a{" "}
          {profesional.email}. Este texto resume cómo se usan tus datos en esta evaluación.
        </p>
        <a
          href={LANDING_PATH}
          className="text-sm font-medium underline underline-offset-4"
        >
          Volver
        </a>
      </article>
    </main>
  );
}
