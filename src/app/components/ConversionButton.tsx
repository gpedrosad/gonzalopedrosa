"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ConversionButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

/**
 * Botón que dispara un evento de conversión de Google Ads antes de redirigir.
 * Usa el snippet de conversión "Submit lead form".
 */
export function ConversionButton({
  href,
  children,
  variant = "primary",
}: ConversionButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 150ms ease",
    cursor: "pointer",
    border: "none",
  };

  const variants: Record<"primary" | "secondary", React.CSSProperties> = {
    primary: {
      ...baseStyles,
      backgroundColor: "#000",
      color: "#fff",
      border: "1px solid #000",
    },
    secondary: {
      ...baseStyles,
      backgroundColor: "transparent",
      color: "#000",
      border: "1px solid #e5e5e5",
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Si gtag no está disponible, redirigir directamente
    if (typeof window === "undefined" || !window.gtag) {
      window.location.href = href;
      return;
    }

    // Callback que redirige después de enviar el evento
    const callback = () => {
      window.location.href = href;
    };

    // Disparar evento de conversión de Google Ads
    window.gtag("event", "conversion", {
      send_to: "AW-17861931009/BLWaCO73vt8bEIHgncVC",
      value: 1.0,
      currency: "CLP",
      event_callback: callback,
    });

    // Fallback: si el callback no se ejecuta en 1s, redirigir igual
    setTimeout(callback, 1000);
  };

  return (
    <a href={href} onClick={handleClick} style={variants[variant]}>
      {children}
      {variant === "primary" && (
        <span aria-hidden="true" style={{ marginLeft: "0.25rem" }}>
          →
        </span>
      )}
    </a>
  );
}

