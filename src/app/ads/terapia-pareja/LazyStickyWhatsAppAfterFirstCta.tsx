"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StickyWhatsAppAfterFirstCta = dynamic(
  () =>
    import("./StickyWhatsAppAfterFirstCta").then(
      (mod) => mod.StickyWhatsAppAfterFirstCta
    ),
  { ssr: false }
);

type LazyStickyWhatsAppAfterFirstCtaProps = {
  href: string;
  firstCtaId: string;
};

export function LazyStickyWhatsAppAfterFirstCta({
  href,
  firstCtaId,
}: LazyStickyWhatsAppAfterFirstCtaProps) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in globalThis) {
      const id = globalThis.requestIdleCallback(
        () => setCanRender(true),
        { timeout: 2200 }
      );

      return () => globalThis.cancelIdleCallback(id);
    }

    const timeoutId = setTimeout(() => setCanRender(true), 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!canRender) {
    return null;
  }

  return <StickyWhatsAppAfterFirstCta href={href} firstCtaId={firstCtaId} />;
}
