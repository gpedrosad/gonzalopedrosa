"use client";

import dynamic from "next/dynamic";

const StickyWhatsAppCTA = dynamic(
  () => import("./StickyWhatsAppCTA").then((mod) => mod.StickyWhatsAppCTA),
  { ssr: false }
);

export function LazyStickyWhatsAppCTA({ href }: { href: string }) {
  return <StickyWhatsAppCTA href={href} />;
}
