import { AdsWhatsAppButton } from "../../components/AdsWhatsAppButton";
import {
  empleador,
  formatClp,
  incluye,
  metodosPagoTexto,
  noIncluye,
  pasos,
  precios,
  whatsappEmpresas,
  whatsappParticular,
} from "../content";

/** Precio, qué incluye y cómo funciona en una sola sección. */
export function Offer() {
  return (
    <section id="precio" className="px-4 py-8 bg-gray-50 scroll-mb-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
          Precio y qué incluye
        </h2>

        <div className="bg-white rounded-2xl border-2 border-gray-900 p-5 mb-6">
          <p className="text-sm text-gray-500 mb-1">Particular</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            {formatClp(precios.particular)}{" "}
            <span className="text-base font-normal text-gray-500">CLP</span>
          </p>
          <p className="text-[15px] font-medium text-gray-900 mb-4">
            Evaluación + informe OS10
          </p>
          {precios.mostrarPrecioCuenta ? (
            <p className="text-sm text-gray-700 mb-4">
              Con cuenta: {formatClp(precios.cuenta)} CLP.
            </p>
          ) : null}

          <ul id="que-incluye" className="space-y-2 mb-5 scroll-mb-28">
            {incluye.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-gray-700"
              >
                <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <AdsWhatsAppButton
            href={whatsappParticular}
            label="ads-os10-precio"
            adsEvent="click_whatsapp"
            className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-semibold shadow-md justify-center"
          >
            Agendar por WhatsApp
          </AdsWhatsAppButton>
          <p className="text-[13px] text-gray-600 text-center mt-2">
            Pago por {metodosPagoTexto()} · Boleta electrónica incluida
          </p>
        </div>

        <div id="como-funciona" className="mb-6 scroll-mb-28">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Cómo funciona</h3>
          <ol className="space-y-4">
            {pasos.map((item) => (
              <li key={item.step} className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {item.step}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-[15px] mb-0.5">
                    {item.titulo}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="p-4 bg-white rounded-xl border border-gray-200 mb-4">
          <h3 className="font-semibold text-gray-900 text-[15px] mb-2">Qué no incluye</h3>
          <ul className="space-y-1.5 mb-2">
            {noIncluye.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="text-gray-400 flex-shrink-0" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed">
            El curso y la credencial son trámites aparte, en el instituto y ante la
            autoridad.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-gray-200 mb-4">
          <h3 className="font-semibold text-gray-900 text-[15px] mb-2">
            ¿Lo paga el empleador?
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{empleador}</p>
        </div>

        <div
          id="empresas"
          className="p-4 bg-white rounded-xl border border-gray-200 scroll-mb-28"
        >
          <h3 className="font-semibold text-gray-900 text-[15px] mb-1">
            Empresas: convenio para tu equipo
          </h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            Si necesitas informes OS10 para varias personas, escríbeme y lo
            coordinamos.
          </p>
          <AdsWhatsAppButton
            href={whatsappEmpresas}
            label="ads-os10-empresas"
            adsEvent="click_empresas"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold justify-center"
          >
            Escribir por WhatsApp
          </AdsWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
