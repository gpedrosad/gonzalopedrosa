# Changelog Google Ads (ops desde repo)

Formato: `YYYY-MM-DD` · qué · cómo. Una viñeta por cambio.

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
