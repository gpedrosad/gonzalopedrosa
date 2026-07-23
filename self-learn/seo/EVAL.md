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
| Deploy vivo + 301 especialista | ⬜ | |
| A1: money pages «En Google» (UI) | ⬜ | Manual |
| CTR online o ansiedad > 0% (≥10 imp.) | ⬜ | |
| Imp. pareja ≥ baseline o recuperando | ⬜ | |
| Hosts solo www | ⬜ | |
| seo:audit PASS | ⬜ | |

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
