import type { Metadata } from "next";
import { disclaimer, LANDING_PATH, precios, formatClp } from "../content";

export const metadata: Metadata = {
  title: "Términos | Informe psicológico OS10",
  robots: { index: false, follow: false },
};

export default function TerminosOs10Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <article className="max-w-2xl mx-auto text-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Términos</h1>
        <p className="leading-relaxed mb-3">
          El servicio es una evaluación psicológica por videollamada y la emisión
          de un informe o certificado en PDF, con boleta electrónica. El valor
          particular es {formatClp(precios.particular)} CLP, salvo convenio de
          empresa informado antes de pagar.
        </p>
        <p className="leading-relaxed mb-3">{disclaimer}</p>
        <p className="leading-relaxed mb-6">
          El pago se coordina por transferencia o Webpay al agendar. No hay un
          checkout automático en esta página.
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
