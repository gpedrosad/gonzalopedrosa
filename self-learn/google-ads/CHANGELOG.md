# Changelog Google Ads (ops desde repo)

Formato: `YYYY-MM-DD` · qué · cómo. Una viñeta por cambio.

## 2026-10-17

- **Campaña psicolaboral:** `evaluacion-psicolaboral-online` (`24360933243`) + grupo `evaluacion-psicolaboral` **ENABLED** tras desplegar la landing. Budget US$2/día · Chile PRESENCE · lun–vie · Maximizar conversiones. 14 keywords B2B (PHRASE/EXACT: empresas, precio, valor, online, consultora, informe psicolaboral); sin `evaluacion psicolaboral` sola (la buscan postulantes). 43 negativas BROAD (que es, preguntas, respuestas, como aprobar, wartegg, pdf, trabajo, empleo, os10, bariatrica…). 6 callouts + snippet `Servicios` + precio (operativo $45.000, profesional $60.000, jefatura $85.000). validate_only previo. Script `scripts/google-ads-create-evaluacion-psicolaboral.mjs`.
- **Landing** `/ads/evaluacion-psicolaboral`: B2B, informe en 48 h hábiles, CTA "Cotizar por WhatsApp" (`whatsapp_lead`).

## 2026-10-16

- **Presupuestos + assets** (`scripts/google-ads-budgets-assets.mjs`, validate_only previo): juego US$1 → **2**, bariátrica US$0,5 → **1**, adolescentes US$0,5 → **1** (OS10 sigue en 2; total US$6/día). Cambio de nombre `24298829243` → **PAUSED** (4 impr/30d). Primeros assets de la cuenta en juego, bari, OS10 y adolescentes: 6 callouts + snippet `Servicios` + precio (4 ítems CLP, propio primero).
- **Bariátrica $50.000** (evaluación + informe): landing desplegada antes; RSA nueva ENABLED `199819157735~828278603478` (H1 pin `Evaluación + informe $50.000`); RSA $75.000 `…~825713076380` PAUSED.
- **Tracking WhatsApp:** `whatsapp_lead` sin `preventDefault` ni `eventCallback`: el `<a target="_blank">` abre WhatsApp en el gesto y la landing sigue viva para que GTM envíe la conversión aunque cargue después del click. Script de `/ads/layout.tsx` inline (antes `lazyOnload`: clics tempranos no se medían). Mismo cambio en `WhatsAppButton.tsx`.
- **CSP** (`src/middleware.ts`): `www.google.cl` / `www.google.com.ar` en `img-src` + `connect-src` (hits `1p-conversion` bloqueados); `script-src-elem` con doubleclick y `connect.facebook.net`.
- **Revisión:** 9–15 oct 46 clics / US$39 / **0 conv**. Conversión verificada en producción (label correcto). Sin cambios en la cuenta.

## 2026-10-13

- (Registrado el 16 oct desde `change_event`, vía API) TCC `23450445740` → **PAUSED**. Budgets: juego US$2 → **1**, bariátrica US$1 → **0,5**, adolescentes US$1 → **0,5**. Negativas BROAD adolescentes (13 oct) y juego/bari/OS10/cambio-nombre (14 oct).

## 2026-10-08

- **Campaña adolescentes:** `psicologo-adolescentes-online` (`24334063436`) + grupo (`201829585918`) + RSA `…~827500874357` **ENABLED**. Budget US$1/día · Chile PRESENCE · lun–vie · landing `/ads/adolescentes`. TCC grupo adolescentes PAUSED. TCC + negativas BROAD `adolescentes`, `adolescente`, `juvenil`. validate_only previo.
- **TCC recorte:** PAUSED grupo método `psicologo-cognitivo-conductual-online` (`191937254616`). Agendar: pausadas PHRASE `tomar terapia online`, `psicologo en linea`, `agendar psicologo online`, `agendar terapia online`. Quedan EXACT `a distancia` + grupo adolescentes. Budget US$1. validate_only previo. Juego/OS10/bari/cambio-nombre intactos.
- **TCC sitelinks:** quitado el último ENABLED (`Agendar sesión` `…~323778366505`). TCC sin sitelinks. validate_only previo.
- **TCC limpieza:** budget **US$1/día**. REMOVED grupos ansiedad, pánico y pareja. Sitelinks Sobre/TCC/cómo funciona → fuera; queda **Agendar sesión**. Agendar: pausadas 8 kws 0 impr (videollamada/reservar/iniciar/sesión); quedan EXACT `a distancia` + PHRASE `en linea`, `agendar psicologo/terapia online`, `tomar terapia online`. validate_only previo. Juego/OS10/bari/cambio-nombre intactos.
- **TCC** (`23450445740`): budget **US$1/día** (pedido). Pausados ansiedad `199990977268` y pánico `190222127174` (0 volumen). `psicologo a distancia` PHRASE PAUSED + EXACT ENABLED en agendar. Negativas BROAD `hablemos de todo`, `hablemosdetodo`, `ana galan`. validate_only previo. Juego/OS10/bari/cambio-nombre intactos.

## 2026-09-30

- **Landings TCC + agendar:** rediseño CRO para tráfico Google Ads con propuesta específica por intención, precio/modalidad visibles, prueba profesional, CTA única por WhatsApp, objeciones y recorrido de 3 pasos; sin cambios de URL ni campaña.
- **TCC keywords:** reactivar EXACT `psicologo cognitivo conductual online` + EXACT/PHRASE `psicologo cognitivo conductual` en grupo `191937254616` (estaban REMOVED). validate_only previo. No se negativó `psicologa` ni `salud mental` (cortarían adolescentes).

## 2026-09-28

- **Precio cambio de nombre $45.000:** landing + RSA nueva ENABLED `203691716634~826307504152` (H1 pin `Informe por $45.000`). RSA $45.990 `…~826307452948` PAUSED. validate_only previo.
- **Campaña cambio de nombre:** `informe-cambio-nombre-apellido-online` (`24298829243`) + grupo (`203691716634`) + RSA `…~826307452948` **ENABLED**. Budget US$1/día · Chile PRESENCE · lun–vie · landing `/ads/informe-cambio-nombre-apellido`. TCC/Juego/Bari/OS10 + negativas BROAD `cambio de nombre`, `cambio de apellido`. validate_only previo en el create.
- **Landing cambio de nombre/apellido:** nueva `/ads/informe-cambio-nombre-apellido`, $45.990, entrega el mismo día y CTA WhatsApp con `whatsapp_lead` + eventos de diagnóstico. Sin cambios en la cuenta de Google Ads.

## 2026-09-24

- **Enable OS10:** `informe-psicologico-os10-online` (`24291587680`) + grupo (`198276616297`) **PAUSED → ENABLED**. Horario lun–vie 00–24. TCC `23450445740` + negativas BROAD `os10`, `control de impulsos`, `guardia de seguridad`, `vigilante privado`, `seguridad privada`, `cctv`. validate_only previo.
- **Campaña OS10:** `informe-psicologico-os10-online` (`24291587680`) + grupo `informe-psicologico-os10` (`198276616297`) + RSA `…~825841016364` creados **PAUSED**. Budget US$1/día · Chile PRESENCE · landing `/ads/informe-psicologico-os10`. validate_only previo.

## 2026-09-22

- **Oferta bariátrica 1 sesión $75.000:** RSA nueva ENABLED `199819157735~825713076380` (H1 pin `Sesión bariátrica $75.000`, certificado el mismo día). RSA pack 2 sesiones `…~825514760379` PAUSED.

- **Precio bariátrica $75.000:** RSA nueva ENABLED `199819157735~825514760379` (H1 pin `Pack bariátrico $75.000`); RSA $120.000 `…~824290569306` y $180.000 `…~821895604719` PAUSED.

## 2026-09-16

- **Negativas BROAD** 11 altas: TCC `23450445740` → `compin`, `peritaje`, `informe pericial`, `juzgado`, `tribunal`, `malla`. Juego `24172229213` → `hipnosis`, `psiquiatras`. Bariátrica `24172472867` → `test psicologico`, `pase`, `express`. validate_only previo.

## 2026-09-11

- **Precio bariátrica $120.000:** RSA nueva ENABLED `199819157735~824290569306` (H1 pin `Pack bariátrico $120.000`); RSA anterior `…~821895604719` PAUSED. Geo juego `24172229213` ya era Chile PRESENCE (2152), sin Argentina.

## 2026-09-10

- **Negativas aprobadas (revisión 30d):** 8 altas nuevas; verificadas las 11 propuestas en BROAD a nivel campaña (3 ya existentes): TCC `23450445740` → terapi, mammoliti, centra online, psicolaria, tolki, psiquiatras, hipnosis, holisticas, holísticas; juego `24172229213` → anónimos, ajuter. API con validate_only previo y lectura posterior; bariátrica sin cambios.

- **Negativas BROAD** 14d: TCC (`23450445740`) `paginas`, `psicolaria`, `recomendaciones`, `en casa`, `terapia de grupo`. Juego (`24172229213`) `en casa`, `centros`, `ajuter`, `anónimos`, `rehabilitacion`. Bariátrica intacta.

## 2026-09-06

- **Conv + sitelinks:** solo **WhatsApp click** (`7451799330`, label `sVwoCKLepeEbEIHgncVC`) queda primary + en métrica + `CONTACT~WEBSITE` biddable. `Submit lead form` y `MensajeWs` → `primary_for_goal=false`. Goals `SIGNUP~WEBSITE`, `SUBMIT_LEAD_FORM~WEBSITE` y `SUBMIT_LEAD_FORM~GOOGLE_HOSTED` → `biddable=false`. Lead form hosted no admite mutate de action. 4 sitelinks apex → `www` (`322990089258`, `323778366496`, `323778366499`, `323778366502`).

## 2026-09-05

- **Remove** grupo `compin` (`194636445489`) en TCC: PAUSED → **REMOVED**. 0 clics históricos. Landing `/ads/compin` intacta.
- **Reactivar post-vacaciones** las 3 campañas PAUSED → ENABLED + ad schedule **lun–vie 00–24** (sin sáb/dom): `psicologo-cognitivo-conductual-online` (`23450445740`), `adiccion-al-juego-online` (`24172229213`), `evaluacion-bariatrica-online` (`24172472867`). Script `scripts/google-ads-weekday-enable.mjs`. No sirven hasta el lunes 7.

## 2026-08-28

- **Pausa vacaciones** las 3 campañas ENABLED → PAUSED: `psicologo-cognitivo-conductual-online` (`23450445740`), `adiccion-al-juego-online` (`24172229213`), `evaluacion-bariatrica-online` (`24172472867`). Grupos intactos. Reactivar al volver.

## 2026-08-27

- **Snapshot** monitoreo: `docs/google-ads-informe-ads-2026-08-27.md` (30d) + `…-7d-2026-08-27.md`. 30d: 100 clics · 8 conv · US$67 · CPA **US$8**. 7d: 39 clics · **3 conv** · US$21 · CPA **US$7**. Hoy (parcial): 4 clics · US$2.81 · 0 conv. Juego ya convierte (11/1, CPA US$4). Bariátrica 6/0, gasto US$3. Agendar 7d 9/2. Sin acción obligatoria.

## 2026-08-26

- **Negativa** `evaluacion-bariatrica-online` (`24172472867`): `fonasa` BROAD. RSA y precio intactos. TCC y juego no se tocaron.

## 2026-08-25

- **Geo** `adiccion-al-juego-online` (`24172229213`): quitada Argentina; Chile **PRESENCE**. Negativas BROAD (solo esa campaña): `anonimos`, `numero de ayuda`, `numero de telefono`, `dejar solo`, `linea de ayuda`. TCC y bariátrica intactas. Script `scripts/google-ads-juego-chile-presence.mjs`.
- **Negativas** juego: `telefono de ayuda`, `lineas de ayuda`, `senda`, `12 pasos`, `juego responsable`, `autoexclusion`, `residencial`. Solo `24172229213`.

## 2026-08-23

- **Activada** `evaluacion-bariatrica-online` (`24172472867`) + grupo `evaluacion-bariatrica`: **ENABLED**, US$1/día, Chile PRESENCE, landing `/ads/evaluacion-bariatrica`.
- **Campaña** `evaluacion-bariatrica-online` (`24172472867`) creada **PAUSED**: budget US$1/día, Chile PRESENCE, grupo `evaluacion-bariatrica` (`199819157735`) PAUSED, RSA → `/ads/evaluacion-bariatrica`, 14 kws, 26 negativas propias. No ENABLED.
- **Campaña** `adiccion-al-juego-online` (`24172229213`) creada **PAUSED**: budget US$2/día, Chile, Search only, Maximize conv., grupo `adiccion-al-juego`, RSA 15/4 → `/ads/adiccion-al-juego`, 11 keywords (exención HEALTH), 444 negativas copiadas. Script `google-ads:create-adiccion-juego`.
- **Activada** `adiccion-al-juego-online` + grupo: budget **US$1/día**. TCC intacta (US$2). Test 14d.
- **Geo** juego: Chile + **Argentina** (presencia o interés). Negativa de keyword `argentina` se mantiene (bloquea queries con esa palabra, no el país).
- **Landing** `/ads/adiccion-al-juego`: tuteo chileno (sin voseo), chip de alcance «Casino, apuestas y online», sin escasez falsa, prueba específica de ludopatía. Regla en `src/app/ads/README.md`.
- **Snapshot** monitoreo: `docs/google-ads-informe-ads-2026-08-23.md` (30d) + `…-7d-2026-08-23.md`. 30d: 76 clics · 6 conv · US$59 · CPA **US$10**. 7d: 22 clics · 1 conv · US$16 · CPA US$16. Adolescentes lidera volumen (49/3); agendar sigue convirtiendo (7d 7/1). Landings OK. Sin acción obligatoria.

## 2026-08-04

- **Snapshot** monitoreo: `docs/google-ads-informe-ads-2026-08-04.md` (30d) + `…-7d-2026-08-04.md`.
- 30d: 62 clics · 6 conv · US$57 · CPA **US$10** (estable vs 1 ago).
- 7d: 18 clics · **2 conv** · US$12 · CPA **US$6** (mejor que 1 ago: 14/1/US$13).
- Agendar 30d: 5 conv · Adolescentes 30d: 1 conv (ruido rolling; 7d OK).
- 7d landings limpios; desperdicio ~0. Sin acción obligatoria.

## 2026-08-01

- **Negativas campaña** (BROAD): `opción yo`, `bamsemocional`, `psimammoliti`, `terapia act`.
- **Snapshot métricas** post-cierre eval: `docs/google-ads-informe-ads-2026-08-01.md` (30d) + `…-7d-2026-08-01.md`.
- 30d: 58 clics · 6 conv · US$58 · CPA **US$10** · CTR 8.9% (vs baseline 17 jul: CPA 15→10).
- 7d: 14 clics · 1 conv · US$13 · CPA US$13; conv en **adolescentes** (landing OK).
- Adolescentes 30d: 1→**2** conv · CPA landing ~US$10.
- `align-landings` limpio. Negativas A sin gasto nuevo en 7d. `propose` core — no aplicar.

## 2026-07-28

- **Reevaluación ~11d:** veredicto **éxito sostenido** — ciclo eval A+B **cerrado** (`EVAL.md`).
- Informes: `docs/google-ads-informe-ads-2026-07-28.md` (30d) + `…-7d-2026-07-28.md`.
- 30d vs baseline 17 jul: Conv 4→6 · CPA US$15→10 · clics 60→54.
- 7d: 1 conv / US$13 (CPA US$13); agendar 8/12 clics y la única conv.
- `align-landings` limpio. Negativas A + pack 24 jul sin gasto nuevo en 7d.
- `propose` core — no aplicar. Opcional futuro: bamsemocional / psimammoliti.

## 2026-07-24

- **Negativas campaña** (BROAD): `eurekka`, `psynder`, `redgesam`, `ifeel`, `mentulia`, `terapia online cl`.
- **Reevaluación a día ~7:** veredicto **éxito** en `EVAL.md` (confirma 23 jul).
- Informes: `docs/google-ads-informe-ads-2026-07-24.md` (30d) + `…-7d-2026-07-24.md`.
- 30d vs baseline 17 jul: Conv 4→6 · CPA US$15→10 · CTR 9.1%→9.8%.
- 7d: 2 conv / US$12 (CPA US$6); landings agendar 7/10 clics y ambas conv.
- `align-landings`: sin drift. Negativas A sin gasto nuevo en 7d.
- `propose` sigue sugiriendo core (TCC/adolescentes/adicciones) — no aplicar.
- Próximo cierre formal: ~31 jul.

## 2026-07-23

- **Revisión post-cambios (~6d):** veredicto **éxito temprano** en `EVAL.md`.
- Informes: `docs/google-ads-informe-ads-2026-07-23.md` (30d) + `…-7d-2026-07-23.md`.
- 30d vs baseline 17 jul: Conv 4→6 · CPA US$15→10 · CTR 9.1%→10.0%.
- 7d: 2 conv / US$13 (CPA US$7); landings agendar reciben 6/10 clics y ambas conv.
- `align-landings`: sin drift. Negativas A sin gasto nuevo en 7d.
- Próximo cierre formal: ~31 jul.

## 2026-07-17

- **Auth:** renovado OAuth (`invalid_grant` → `npm run google-ads:auth`).
- **Informe:** regenerado `docs/google-ads-informe-ads-2026-07-17.md` (30d: 60 clics, 4 conv, US$62, CPA US$15).
- **Negativas campaña** (BROAD): `emdr`, `dbt`, `betterhelp`, `unobravo`, `opción yo terapia`, `terapi app`, `red psique`, `adventista`, `24 horas`, `24 7`.  
  No tocadas: genéricos online ni `adicciones`.
- **Landings RSA:** script `scripts/google-ads-align-landings.mjs` + `npm run google-ads:align-landings -- --apply`.  
  Reemplazo create+pause en: agendar, ansiedad, pánico, terapia-pareja, compin → landings propias. Adolescentes/TCC ya OK.
- **Docs:** carpeta `self-learn/google-ads/` + skill `.agents/skills/google-ads/`.
- **Eval:** hipótesis y checklist en `self-learn/google-ads/EVAL.md` (revisar ~24–31 jul).

## 2026-06 (histórico breve)

- Baseline / revisiones en `docs/google-ads-*.md` (10–16 jun).
- Landing adolescentes vía `google-ads:adolescentes-landing` (precedente de align-landings).
