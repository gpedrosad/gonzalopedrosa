"use client";

import { useCallback } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

/* ─────────────────────────────────────────────────────────────────────────────
   Typing para eventos GTM con eventCallback/eventTimeout
   - eventCallback: función que GTM ejecuta cuando TODAS las etiquetas terminan
   - eventTimeout: tiempo máximo (ms) antes de ejecutar callback aunque no termine
   ───────────────────────────────────────────────────────────────────────────── */
interface GTMEvent {
  event: string;
  label?: string;
  event_id?: string;
  eventCallback?: () => void;
  eventTimeout?: number;
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
 * Abre WhatsApp en nueva pestaña.
 * Usa window.open con noopener,noreferrer por seguridad.
 */
function openWhatsApp(href: string): void {
  window.open(href, "_blank", "noopener,noreferrer");
}

/**
 * Botón de WhatsApp con tracking robusto de conversiones GTM/Google Ads.
 *
 * Funcionamiento:
 * 1. Intercepta el click con preventDefault
 * 2. Pushea evento "whatsapp_lead" al dataLayer con:
 *    - eventCallback: se ejecuta cuando GTM confirma que TODAS las etiquetas dispararon
 *    - eventTimeout: fallback de 1500ms si GTM no responde
 *    - event_id: ID único para deduplicación
 * 3. Abre WhatsApp solo después de que GTM confirme (o timeout)
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
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // Flag para evitar doble apertura (eventCallback + eventTimeout race)
      let hasOpened = false;

      const openOnce = () => {
        if (hasOpened) return;
        hasOpened = true;
        openWhatsApp(href);
      };

      // Inicializa dataLayer si no existe (SSR safety)
      if (typeof window !== "undefined") {
        const dataLayer = (window.dataLayer = window.dataLayer || []);

        const gtmEvent: GTMEvent = {
          event: "whatsapp_lead",
          label: href,
          event_id: generateEventId(),
          // GTM ejecuta esto cuando TODAS las etiquetas asociadas al evento terminan
          eventCallback: openOnce,
          // Fallback: si GTM no responde en 1500ms, abre WhatsApp de todas formas
          eventTimeout: 1500,
        };

        dataLayer.push(gtmEvent as Record<string, unknown>);
      } else {
        // Fallback extremo: si window no existe, abre directo
        openWhatsApp(href);
      }
    },
    [href]
  );

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
