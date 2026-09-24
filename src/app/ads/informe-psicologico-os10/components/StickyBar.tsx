import { AdsWhatsAppButton } from "../../components/AdsWhatsAppButton";
import { formatClp, precios, whatsappParticular } from "../content";

export function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <div className="min-w-0">
            <p className="text-xs text-gray-500">Evaluación + informe</p>
            <p className="font-bold text-gray-900 leading-tight">
              {formatClp(precios.particular)}
            </p>
          </div>
          <AdsWhatsAppButton
            href={whatsappParticular}
            label="ads-os10-sticky"
            adsEvent="click_whatsapp"
            className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center min-h-12"
          >
            WhatsApp
          </AdsWhatsAppButton>
        </div>
      </div>
    </div>
  );
}
