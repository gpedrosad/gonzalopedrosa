# Landings `/ads/*`

Sitio chileno (`gonzalopedrosa.cl`). **Toda la web** (no solo `/ads/*`) va en español de Chile con tuteo. Fuente: [`README.md`](../../../README.md) § Tono y copy.

## Tono (no negociar)

Misma regla que el resto del sitio. Tú / te / Escríbeme. Sin voseo ni imperativos rioplatenses. Si un draft trae voseo, pasarlo a tuteo antes de publicar.

## Adicción al juego (`/ads/adiccion-al-juego`)

- El alcance (casino, apuestas, online) se dice como **qué se trata**, no como oferta de juego. Evitar chips tipo «Apuestas online y casinos» que parecen promoción.
- Sin escasez falsa: no mezclar «cupos limitados» con «sin lista de espera» ni «disponible esta semana» permanente.
- Prueba del nicho (ludopatía / apuestas), no solo un número genérico de pacientes.
- Campaña Ads `adiccion-al-juego-online` **ENABLED** con budget propio US$1/día (no comparte el de TCC). Revisar ~14d.

## Evaluación bariátrica (`/ads/evaluacion-bariatrica`)

- Tuteo chileno (tú / te / Escríbeme). Sin voseo.
- **$75.000**: 1 sesión de 50 min + certificado el mismo día. Sin «aprobado», «garantizado» ni «te operan seguro».
- Campaña Ads `evaluacion-bariatrica-online` **propia y PAUSED** (US$1/día). No hereda la negativa `bariatr*` de TCC. No ENABLED hasta confirmación.

## Informe psicológico OS10 (`/ads/informe-psicologico-os10`)

- Tuteo chileno. Sin voseo.
- **$40.000**: evaluación online (20–45 min) + informe/certificado PDF incluido. No incluye el curso OS10 ni la credencial.
- No prometer «apto», «aprobado» ni «garantizado». El resultado depende de la evaluación.
- Conversión de puja: clic WhatsApp → `whatsapp_lead` (mismo GTM que el resto de `/ads`). Eventos extra: `view_landing`, `click_whatsapp`, `click_empresas`.
- Copy y precios: `src/app/ads/informe-psicologico-os10/content.ts`. Cómo editar: `README.md` de esa carpeta.
- Campaña Ads `informe-psicologico-os10-online` **propia y PAUSED** (US$1/día). Chile PRESENCE. RSA: `CAMPAIGN.md`.
