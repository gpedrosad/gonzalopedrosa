# Changelog Google Ads (ops desde repo)

Formato: `YYYY-MM-DD` · qué · cómo. Una viñeta por cambio.

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
