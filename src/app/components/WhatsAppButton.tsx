"use client";

declare global {
  interface Window {
    dataLayer?: object[];
  }
}

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Botón que dispara evento "whatsapp_lead" al dataLayer de GTM y luego redirige.
 * GTM captura este evento para disparar conversiones de Google Ads u otras etiquetas.
 */
export function WhatsAppButton({
  href,
  children,
  className = "",
}: WhatsAppButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Enviar evento al dataLayer para que GTM lo procese
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_lead",
        label: href,
      });
    }

    // Delay para que GTM procese el evento antes de redirigir
    setTimeout(() => {
      window.location.href = href;
    }, 150);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full cursor-pointer transition-all duration-150 ${className}`}
    >
      {children}
    </a>
  );
}

