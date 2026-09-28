"use client";

import { useEffect, useState } from "react";
import { AdsWhatsAppButton } from "../components/AdsWhatsAppButton";

export function StickyWhatsAppCTA({ href }: { href: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="border-t border-gray-200 bg-white/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <div className="min-w-0">
            <p className="text-xs text-gray-500">Informe el mismo día</p>
            <p className="font-bold leading-tight text-gray-900">$45.990</p>
          </div>
          <AdsWhatsAppButton
            href={href}
            label="ads-cambio-nombre-sticky"
            adsEvent="click_whatsapp"
            className="min-h-12 flex-1 bg-[#25D366] font-semibold text-white shadow-md hover:bg-[#20bd5a]"
          >
            Solicitar informe por WhatsApp
          </AdsWhatsAppButton>
        </div>
      </div>
    </div>
  );
}
