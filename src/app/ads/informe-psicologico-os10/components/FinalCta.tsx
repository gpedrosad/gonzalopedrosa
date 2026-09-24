import { AdsWhatsAppButton } from "../../components/AdsWhatsAppButton";
import { formatClp, mensajes, precios, whatsappParticular } from "../content";

export function FinalCta() {
  return (
    <section className="px-4 py-8 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-xl font-semibold mb-2">
          Agenda tu evaluación
        </h2>
        <p className="text-gray-300 text-sm mb-5 leading-relaxed">
          {formatClp(precios.particular)}, informe incluido. Escríbeme por
          WhatsApp. El informe no incluye el curso OS10 ni la credencial.
        </p>
        <AdsWhatsAppButton
          href={whatsappParticular}
          label="ads-os10-final"
          adsEvent="click_whatsapp"
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg justify-center py-3.5"
        >
          Agendar evaluación por WhatsApp
        </AdsWhatsAppButton>
        <p className="text-gray-300 text-sm mt-3">“{mensajes.particular}”</p>
      </div>
    </section>
  );
}
