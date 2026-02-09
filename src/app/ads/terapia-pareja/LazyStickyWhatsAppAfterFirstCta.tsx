"use client";

import dynamic from "next/dynamic";

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
  return <StickyWhatsAppAfterFirstCta href={href} firstCtaId={firstCtaId} />;
}
