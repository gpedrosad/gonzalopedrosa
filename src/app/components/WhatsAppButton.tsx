"use client";

import { IoLogoWhatsapp } from "react-icons/io5";

declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function WhatsAppButton({
  href,
  children,
  className = "",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    // Tracking GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_lead",
      label: href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full cursor-pointer transition-all duration-150 ${className}`}
    >
      <IoLogoWhatsapp className="w-5 h-5" />
      {children}
    </a>
  );
}
