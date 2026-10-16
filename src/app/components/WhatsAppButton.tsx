"use client";

import { useCallback } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

interface GTMEvent {
  event: string;
  label?: string;
  event_id?: string;
  [key: string]: unknown;
}

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Genera un ID único para deduplicación de eventos.
 * Formato: timestamp-random (ej: 1704067200000-a1b2c3d4)
 */
function generateEventId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 10);
  return `${timestamp}-${random}`;
}

/**
 * Botón de WhatsApp con tracking de conversiones GTM/Google Ads.
 *
 * Funcionamiento:
 * 1. Pushea "whatsapp_lead" al dataLayer en el mismo click
 * 2. No bloquea el link: el <a target="_blank"> abre WhatsApp en el gesto del usuario
 *    (sin popup bloqueado en iOS) y esta pestaña sigue viva para que GTM envíe
 *    la conversión, aunque GTM cargue después del click
 *
 * Configuración requerida en GTM:
 * - Conversion Linker: trigger "Initialization - All Pages"
 * - Google tag (AW-...): trigger "Initialization - All Pages"
 * - Conversión Google Ads: trigger custom event "whatsapp_lead"
 */
export function WhatsAppButton({
  href,
  children,
  className = "",
}: WhatsAppButtonProps) {
  const handleClick = useCallback(() => {
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    const gtmEvent: GTMEvent = {
      event: "whatsapp_lead",
      label: href,
      event_id: generateEventId(),
    };
    dataLayer.push(gtmEvent as Record<string, unknown>);
  }, [href]);

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
