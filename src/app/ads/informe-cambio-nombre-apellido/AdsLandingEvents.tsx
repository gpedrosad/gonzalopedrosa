"use client";

import { useEffect } from "react";

const SCROLL_THRESHOLDS = [25, 50, 75, 90] as const;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function pushEvent(payload: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function AdsLandingEvents({ landing }: { landing: string }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const alreadySent = window.dataLayer.some(
      (item) => item.event === "view_landing" && item.landing === landing,
    );

    if (!alreadySent) {
      pushEvent({
        event: "view_landing",
        landing,
        service: "informe_cambio_nombre_apellido",
        price_clp: 45990,
        h1_variant: "a",
      });
    }

    const sentDepths = new Set<number>();

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.round((window.scrollY / scrollable) * 100);
      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (depth < threshold || sentDepths.has(threshold)) return;
        sentDepths.add(threshold);
        pushEvent({ event: "scroll_depth", depth: threshold, landing });
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest("[data-ads-event]");
      if (!(element instanceof HTMLElement)) return;

      const eventName = element.dataset.adsEvent;
      if (!eventName) return;

      pushEvent({
        event: eventName,
        landing,
        cta_position: element.dataset.waLabel || "unknown",
      });
    };

    const onToggle = (event: Event) => {
      const details = event.target;
      if (!(details instanceof HTMLDetailsElement) || !details.open) return;

      pushEvent({
        event: "faq_open",
        landing,
        question: details.dataset.faqQuestion || "unknown",
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, [landing]);

  return null;
}
