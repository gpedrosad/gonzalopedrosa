"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "../../components/WhatsAppButton";

type StickyWhatsAppAfterFirstCtaProps = {
  href: string;
  firstCtaId: string;
};

export function StickyWhatsAppAfterFirstCta({
  href,
  firstCtaId,
}: StickyWhatsAppAfterFirstCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const firstCta = document.getElementById(firstCtaId);
      if (!firstCta) return;

      const firstCtaRect = firstCta.getBoundingClientRect();
      setIsVisible(firstCtaRect.bottom < 0);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [firstCtaId]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <WhatsAppButton
          href={href}
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center"
        >
          Agendar por WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
