import type { Metadata } from "next";
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

/*
  Delegación global para tracking de clics WhatsApp en /ads.
  - Script inline: queda activo al parsear el HTML, antes de hidratar o de que cargue GTM.
  - No bloquea el link: el <a target="_blank"> abre WhatsApp en el mismo gesto
    (sin popup bloqueado en iOS) y esta pestaña sigue viva para que GTM envíe
    la conversión, aunque GTM (lazyOnload) cargue después del clic.
*/
const WHATSAPP_TRACKING_SCRIPT = `
(function () {
  if (window.__adsWhatsappTrackingInit) return;
  window.__adsWhatsappTrackingInit = true;

  function generateEventId() {
    return Date.now() + '-' + Math.random().toString(36).slice(2, 10);
  }

  document.addEventListener(
    'click',
    function (event) {
      if (event.defaultPrevented || event.button !== 0) return;

      var target = event.target;
      if (!(target instanceof Element)) return;

      var anchor = target.closest('a[data-wa-track="1"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      var dataLayer = (window.dataLayer = window.dataLayer || []);
      dataLayer.push({
        event: 'whatsapp_lead',
        label: anchor.dataset.waLabel || anchor.href,
        event_id: generateEventId(),
      });
    },
    true
  );
})();
`;

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="ads-whatsapp-tracking"
        dangerouslySetInnerHTML={{ __html: WHATSAPP_TRACKING_SCRIPT }}
      />
      <div className="ads-lcp-root">{children}</div>
    </>
  );
}
