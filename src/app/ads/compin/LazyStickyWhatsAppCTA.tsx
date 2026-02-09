"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StickyWhatsAppCTA = dynamic(
  () => import("./StickyWhatsAppCTA").then((mod) => mod.StickyWhatsAppCTA),
  { ssr: false }
);

export function LazyStickyWhatsAppCTA({ href }: { href: string }) {
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

  return <StickyWhatsAppCTA href={href} />;
}
