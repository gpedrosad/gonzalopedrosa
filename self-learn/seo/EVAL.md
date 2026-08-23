# Reevaluación post-metas SEO (2026-07-23)

**Baseline código:** 2026-07-23 (pre-deploy medible en GSC)  
**Revisar desde:** ~2026-08-06 (mín. ~14 días post-deploy) · ideal ~2026-08-20  
Volumen orgánico bajo → no juzgar CTR con menos de ~7 días de datos indexados.

## Cambios hechos (intervención)

| # | Cambio | Fecha |
|---|---|---|
| A2 | 301 especialista-ansiedad → ansiedad | 2026-07-23 |
| A3 | Titles/metas CTR (7 URLs) | 2026-07-23 |
| B1 | Enlazado adulto + alcoholismo en home | 2026-07-23 |

Detalle: `docs/seo-organico-changelog-2026-07-23.md`.

## Baseline GSC (28d al 23 jul · pre-impacto)

Fuente: `docs/gsc-informe-2026-07-23.md`

| Métrica | Valor |
|---|---|
| Clics | 11 |
| Impresiones | 103 |
| CTR | 10,68% |
| Posición media | 10,3 |

CTR 0% con impresiones (objetivo A3):

| URL | Imp | CTR |
|---|---:|---|
| `/psicologo-online-chillan` | 13 | 0% |
| `/psicologo-ansiedad-chillan` | 11 | 0% |
| `/psicologo-adulto-chillan` | 9 | 0% |
| `/terapia-de-pareja-chillan` | 8 | 0% |
| alcoholismo / dejar-de-beber | 6+6 | 0% |

## Efectos esperados

| Esperado | Señal |
|---|---|
| Menos canibalización ansiedad | Imp. en URL especialista ↓; ansiedad estable o ↑ |
| Mejor CTR en URLs A3 | CTR > 0% con ≥10 imp. en online/ansiedad/adulto/pareja |
| Pareja no sigue en caída libre | Imp. pareja no ↓ otro −50% sin causa |
| Home marca | Query «gonzalo pedrosa» con algún clic si hay imp. |
| seo:audit sigue PASS | Incl. 301 especialista (1 hop max) |

**No esperado:** salto a decenas de clics solo por metas (hace falta indexación + autoridad).

## Cómo reevaluar

```bash
npm run seo:audit
node --env-file=.env.local scripts/gsc-report-md.mjs
# Verificar 301:
curl -sI https://www.gonzalopedrosa.cl/psicologo-especialista-ansiedad-chillan | grep -i location
```

| Check | ¿OK? | Nota |
|---|---|---|
| Deploy vivo + 301 especialista | ✅ | 308 → ansiedad (prod 28 jul) |
| A1: money pages «En Google» (UI) | ⬜ | Sitemap no reenviado desde 8 jun |
| CTR online o ansiedad > 0% (≥10 imp.) | ❌ aún | online 18/0% pos~42; ansiedad 12/0% |
| Imp. pareja ≥ baseline o recuperando | ✅ | 8→21 imp · **1 clic** (CTR 4,8%) |
| Hosts solo www | ✅ | solo www en 4 ago |
| seo:audit PASS | ✅ | 2026-08-04 |

## Reevaluación intermedia 2026-07-28

**Ventana post-código:** ~5 días (antes del mínimo ~14d del plan).  
**Veredicto:** **Neutro / temprano** — no juzgar A3 aún; mantener.  
**Fuente:** `docs/gsc-informe-2026-07-28.md`

| Métrica | Baseline 23 jul | 28 jul |
|---|---:|---:|
| Clics | 11 | 11 |
| Impresiones | 103 | 126 |
| CTR | 10,68% | 8,73% |
| Posición | 10,3 | 11,8 |

Señales positivas: pareja recupera; TOC/EMDR/home siguen motor; redirects OK.  
Señales débiles: online más visible pero pos. ~28 y 0 CTR; obesidad sin clics; CTR sitio ↓ por más impresiones profundas.

Próximo cierre formal: ~2026-08-06 / 20.

## Reevaluación intermedia 2026-08-04

**Ventana post-código:** ~12 días (cerca del mínimo ~14d).  
**Veredicto:** **Neutro / parcial** — técnico OK; A3 solo pareja cumple; no cerrar aún.  
**Fuente:** `docs/gsc-informe-2026-08-04.md` · `seo:audit` PASS

| Métrica | Baseline 23 jul | 28 jul | 4 ago |
|---|---:|---:|---:|
| Clics | 11 | 11 | 9 |
| Impresiones | 103 | 126 | 136 |
| CTR | 10,68% | 8,73% | 6,62% |
| Posición | 10,3 | 11,8 | 12,4 |

**A3:** pareja ✅ (1 clic / 21 imp). Online / ansiedad / adulto / alcoholismo ❌ (0% CTR). Online empeora posición (28→42).  
**Motores:** TOC (3 clics, pos 4,6), home, EMDR, obesidad.  
**Decisión:** mantener metas; no nuevas landings; priorizar Inspection + copy online/ansiedad/adulto. Cierre formal ~20 ago.

## Intervención 2026-08-23 (nuevo baseline on-page)

GSC 90d (`docs/gsc-informe-2026-08-23.md`): 28 clics · 406 imp · CTR 6,9%. A3 23 jul **no cerrado** (ansiedad/adulto/online siguen 0% CTR).  
**Código nuevo:** P0+P1 en [OPORTUNIDADES.md](./OPORTUNIDADES.md). Medir impacto ~2–4 sem (no antes del ~6 sep). No crear URLs.

## Criterios orientativos

| Resultado | Criterio |
|---|---|
| **Éxito** | ≥2 URLs A3 con CTR > 0%; 301 OK; clics 28d ≥11 o imp. money pages ↑ |
| **Neutro** | Sin daño; datos aún escasos → mantener |
| **Revisar** | Caída fuerte home/TOC/EMDR; o especialista sigue indexada sin redirect |

## Al cerrar

1. Sección `## Reevaluación YYYY-MM-DD` abajo.
2. Actualizar `STATE.md`.
3. 1 línea en `CHANGELOG.md`.
