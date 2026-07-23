# Changelog SEO orgánico — 2026-07-23

| Campo | Valor |
| --- | --- |
| **Fecha** | 2026-07-23 |
| **Alcance** | Web orgánica (+ redirect consolidación ansiedad) |
| **Excluido** | `src/app/ads/**` (0 archivos) |
| **Auditoría / plan** | [`docs/seo-auditoria-plan-ejecucion-2026-07-23.md`](./seo-auditoria-plan-ejecucion-2026-07-23.md) |
| **GSC** | [`docs/gsc-informe-2026-07-23.md`](./gsc-informe-2026-07-23.md) |
| **Self-learn** | [`self-learn/seo/INDEX.md`](../self-learn/seo/INDEX.md) |
| **Previo** | [`docs/seo-organico-changelog-2026-05-19.md`](./seo-organico-changelog-2026-05-19.md) |

---

## Resumen

Tras auditoría técnica + GSC (11 clics / 103 imp. / 28d), se aplicaron los pasos de código **A2, A3 y B1 parcial**: redirect del soft duplicate de ansiedad, titles/metas CTR en money pages con impresiones y 0 clics, y enlazado interno hacia ganadoras / online transaccional.

**No se tocó Ads.** A1 (URL Inspection / reenviar sitemap) queda **manual en GSC** post-deploy.

### Nota antes / después (código)

| Momento | Técnico | Volumen / CTR | Comentario |
| --- | :---: | :---: | --- |
| Pre-cambio (corte GSC) | 7/10 | 4/10 | Audit PASS; soft duplicate; metas flojas en URLs con imp. |
| Post-código (sin deploy medido) | 8/10 | n/d | Redirect + metas + enlazado; impacto GSC en 2–4 semanas |

---

## Cambios aplicados

### A2 — Soft duplicate ansiedad

| Antes | Después |
| --- | --- |
| `/psicologo-especialista-ansiedad-chillan` 200, `index`, canonical → ansiedad | **301 permanente** → `/psicologo-ansiedad-chillan` |

Archivo: `next.config.ts` (junto al redirect existente de `/psicologo-hombres-chillan`).

### A3 — Titles / meta descriptions (CTR)

| Ruta | Title nuevo (aprox.) |
| --- | --- |
| `/` | Gonzalo Pedrosa \| Psicólogo en Chillán · Online y presencial |
| `/psicologo-online-chillan` | Psicólogo Online Chillán \| $35.000 · Videollamada e Isapre |
| `/psicologo-ansiedad-chillan` | Psicólogo para Ansiedad Chillán \| TCC · Online o presencial |
| `/psicologo-adulto-chillan` | Psicólogo para Adultos y Hombres Chillán \| TCC |
| `/terapia-de-pareja-chillan` | Terapia de Pareja Chillán \| Psicólogo · Online o presencial |
| `/alcoholismo-chillan` | Alcoholismo en Chillán \| Ayuda psicológica · Empieza hoy |
| `/dejar-de-beber-chillan` | Dejar de Beber en Chillán \| Terapia online · Plan concreto |

Archivos: `src/app/page.tsx`, landings citadas, `src/lib/alcoholism-pages.ts` (hub + dejar-de-beber).

### B1 — Enlazado interno

| Cambio | Dónde |
| --- | --- |
| Chip «Psicólogo online» → `/psicologo-online-chillan` (antes `/terapia-online`) | `psicologo-adulto-chillan` |
| Chips TOC / EMDR / pareja / obesidad | `psicologo-adulto-chillan` |
| Área «Alcoholismo» en hub home | `src/app/page.tsx` |

---

## Estado del plan (checklist)

| Paso | Estado |
| --- | --- |
| A1 Indexación GSC (Inspection + reenviar sitemap) | ⬜ Manual post-deploy |
| A2 301 especialista-ansiedad | ✅ |
| A3 Titles/metas CTR | ✅ |
| B1 Enlazado ganadoras / online | ✅ parcial |
| B2 Contenido profundo pareja | ⬜ |
| B3 Rich Results Test | ⬜ |
| B4 QA `tsc` / lint / `seo:audit` | ⬜ |
| C1 GBP / reseñas / citaciones | ⬜ |
| C4 Informe GSC cada 14 días | ⬜ (próximo ~6 ago) |

---

## Baseline GSC (pre-deploy de estos cambios)

Periodo `2026-06-25` → `2026-07-23` (ver informe):

| Métrica | Valor |
| --- | ---: |
| Clics | 11 |
| Impresiones | 103 |
| CTR | 10,68% |
| Posición media | 10,3 |
| URLs inventario / sitemap | 79 |

Top páginas por clics: home (4), TOC (3), EMDR (2).  
Oportunidad CTR 0%: online, ansiedad, adulto, pareja, alcoholismo.

---

## Criterios de aceptación de esta tanda

| Criterio | Estado |
| --- | --- |
| Soft duplicate ansiedad consolidado con 301 | ✅ en código (verificar en prod post-deploy) |
| Metas CTR en URLs con imp. y 0 clics | ✅ |
| Online transaccional en adulto | ✅ |
| Cero cambios en `src/app/ads/**` | ✅ |
| Impacto medible en GSC | ⏳ 2–4 semanas post-deploy |

---

## Comandos

```bash
npm run seo:audit
node --env-file=.env.local scripts/gsc-report-md.mjs
npx tsc --noEmit
```

---

*Registro de la tanda 2026-07-23. Memoria corta ops: `self-learn/seo/`.*
