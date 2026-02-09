import type { Metadata } from "next";
import Script from "next/script";
import "./styles.css";

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

// Todas las landings de /ads se generan estáticamente en build time.
export const dynamic = "force-static";

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="ads-lcp-root">{children}</div>

      {/*
        Delegación global para tracking de clics WhatsApp en /ads.
        Evita hidratar cada botón individualmente y conserva eventCallback/eventTimeout.
      */}
      <Script id="ads-whatsapp-tracking" strategy="lazyOnload">
        {`
          (function () {
            if (window.__adsWhatsappTrackingInit) return;
            window.__adsWhatsappTrackingInit = true;

            function generateEventId() {
              return Date.now() + '-' + Math.random().toString(36).slice(2, 10);
            }

            function shouldBypassTracking(event) {
              return (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              );
            }

            document.addEventListener(
              'click',
              function (event) {
                var target = event.target;
                if (!(target instanceof Element)) return;

                var anchor = target.closest('a[data-wa-track="1"]');
                if (!(anchor instanceof HTMLAnchorElement)) return;
                if (shouldBypassTracking(event)) return;

                var href = anchor.href || anchor.getAttribute('href');
                if (!href) return;

                event.preventDefault();

                var opened = false;
                var openOnce = function () {
                  if (opened) return;
                  opened = true;
                  window.open(href, '_blank', 'noopener,noreferrer');
                };

                var dataLayer = (window.dataLayer = window.dataLayer || []);
                dataLayer.push({
                  event: 'whatsapp_lead',
                  label: anchor.dataset.waLabel || href,
                  event_id: generateEventId(),
                  eventCallback: openOnce,
                  eventTimeout: 1500,
                });

                // Fallback adicional si GTM no ejecuta eventCallback.
                window.setTimeout(openOnce, 1600);
              },
              true
            );
          })();
        `}
      </Script>
    </>
  );
}
