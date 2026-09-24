"use client";

import { useEffect } from "react";

let viewLandingSent = false;

/**
 * view_landing al montar.
 * click_whatsapp y click_empresas vía data-ads-event.
 * El clic de WhatsApp además dispara whatsapp_lead en src/app/ads/layout.tsx
 * (conversión primaria de Google Ads, GTM-N3DXMKTR).
 */
export function AdsEvents({
  landing,
  h1Variant,
}: {
  landing: string;
  h1Variant: string;
}) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    if (!viewLandingSent) {
      viewLandingSent = true;
      window.dataLayer.push({
        event: "view_landing",
        landing,
        h1_variant: h1Variant,
      });
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const el = target.closest("[data-ads-event]");
      if (!(el instanceof HTMLElement)) return;

      const name = el.dataset.adsEvent;
      if (!name) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: name,
        label: el.dataset.waLabel || el.getAttribute("href") || name,
        landing,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [landing, h1Variant]);

  return null;
}
