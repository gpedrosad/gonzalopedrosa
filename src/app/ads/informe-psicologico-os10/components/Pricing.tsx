import { AdsWhatsAppButton } from "../../components/AdsWhatsAppButton";
import {
  empleador,
  formatClp,
  metodosPagoTexto,
  precios,
  whatsappEmpresas,
  whatsappParticular,
} from "../content";

export function Pricing() {
  return (
    <section id="precio" className="px-4 py-8 bg-gray-50 scroll-mb-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Precios
        </h2>

        <div className="bg-white rounded-2xl border-2 border-gray-900 p-5 mb-3">
          <p className="text-sm text-gray-500 mb-1">Particular</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            {formatClp(precios.particular)}{" "}
            <span className="text-base font-normal text-gray-500">CLP</span>
          </p>
          <p className="text-[15px] font-medium text-gray-900 mb-2">
            Evaluación + informe OS10
          </p>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Videollamada, informe o certificado en PDF firmado y boleta electrónica.
            Pago por {metodosPagoTexto()}.
          </p>
          {precios.mostrarPrecioCuenta ? (
            <p className="text-sm text-gray-700 mb-4">
              Con cuenta: {formatClp(precios.cuenta)} CLP.
            </p>
          ) : null}
          <AdsWhatsAppButton
            href={whatsappParticular}
            label="ads-os10-precio"
            adsEvent="click_whatsapp"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
          >
            Agendar evaluación por WhatsApp
          </AdsWhatsAppButton>
        </div>

        <div id="empresas" className="bg-white rounded-2xl border border-gray-200 p-5 mb-4 scroll-mb-28">
          <p className="text-sm text-gray-500 mb-1">Empresas</p>
          <p className="text-[15px] font-medium text-gray-900 mb-2">
            Convenio para tu equipo
          </p>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
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

        <div className="p-4 bg-white rounded-xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 text-[15px] mb-2">
            ¿Lo paga el empleador?
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{empleador}</p>
        </div>
      </div>
    </section>
  );
}
