import type { Metadata } from "next";

/**
 * Layout específico para landing pages de Google Ads.
 * - Sin header/footer para maximizar conversión
 * - noindex por defecto (se hereda a las páginas hijas)
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
