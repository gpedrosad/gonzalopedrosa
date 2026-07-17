# Reevaluación post-cambios (2026-07-17)

**Baseline:** 2026-07-17  
**Revisar desde:** ~2026-07-24 (mín. 7 días) · ideal ~2026-07-31 (14 días)  
Budget ~US$2/día → volumen bajo; no juzgar antes de 7 días.

## Cambios hechos (intervención)

| # | Cambio | Fecha |
|---|---|---|
| A | Negativas BROAD: emdr, dbt, betterhelp, unobravo, opción yo terapia, terapi app, red psique, adventista, 24 horas, 24 7 | 2026-07-17 |
| B | RSA final_urls alineadas a landing del grupo (agendar, ansiedad, pánico, pareja, compin) | 2026-07-17 |

Pareja/compin siguen **PAUSED** → B casi no mueve gasto ahí hasta reactivar.

## Baseline (últimos 30d al 17 jul)

Fuente: `docs/google-ads-informe-ads-2026-07-17.md`

| Métrica | Valor |
|---|---|
| Clics | 60 |
| Impresiones | 658 |
| CTR | 9.12% |
| Costo | US$62 |
| Conv (whatsapp_lead) | 4 |
| CPA | US$15 |
| CPC medio | ~US$1 |

Por grupo (mismo informe):

| Grupo | Clics | Costo | Conv | CPA |
|---|---|---|---|---|
| agendar-psicologo-online | 23 | US$32 | 3 | ~US$11 |
| psicologo-adolescentes-online | 32 | US$25 | 1 | US$25 |
| psicologo-cognitivo-conductual-online | 5 | US$5 | 0 | — |
| ansiedad / pánico | ~0 | ~0 | 0 | — |

Landings paid (30d):

| Landing | Clics | Conv | CPA |
|---|---|---|---|
| `/ads/adolescentes` | 32 | 1 | US$25 |
| `/ads/psicologo-cognitivo-conductual-online` | 27 | 3 | US$12 |

## Efectos esperados

### A · Negativas

| Esperado | Señal a mirar |
|---|---|
| Menos impresiones/clics en competidores, EMDR/DBT, “24 horas”, apps | Search terms: esos strings no deberían gastar |
| Costo desperdiciado en esos términos ↓ | Sección “Desperdicio paid” del informe |
| CTR puede subir levemente (tráfico más limpio) | CTR campaña 7–14d post |
| Volumen total puede bajar un poco | Clics/día vs ~2/día histórico |

**No esperado:** caída fuerte de conv. core (no negativamos “psicologo online”).

### B · Landings alineadas

| Esperado | Señal a mirar |
|---|---|
| Clics de **agendar** aterrizan en `/ads/agendar-psicologo-online` (no TCC genérica) | Tabla landings del informe |
| Si ansiedad/pánico ganan volumen: landings propias | Mismo |
| CPA de **agendar** estable o mejor (mensaje ↔ intent) | Conv/CPA grupo agendar |
| Adolescentes sin cambio de URL (ya estaba OK) | CPA adolescentes ≈ baseline salvo ruido |

**Sesgo:** RSA nuevos reinician learning del anuncio; 3–7 días de CTR/CPA ruidoso es normal.

## Cómo reevaluar (checklist)

```bash
npm run google-ads:auth          # si invalid_grant
npm run google-ads:informe
npm run google-ads:align-landings   # debe decir “Nada que cambiar”
npm run google-ads:negatives -- propose
```

Comparar informe nuevo vs baseline arriba. Rellenar:

| Check | ¿OK? | Nota |
|---|---|---|
| Search terms ya no gastan en negativas A | | |
| Landing agendar = `/ads/agendar-…` (no solo TCC) | | |
| CPA campaña ≤ ~US$18 (o mejor que US$15) | | |
| Conv. 7d no colapsaron a 0 con gasto similar | | |
| Adolescentes CPA no empeoró mucho sin causa | | |
| align-landings sin drifts | | |

## Criterios de éxito / fallo (orientativos)

Dado N pequeño (4 conv/30d), usar rangos, no punto único.

| Resultado | Criterio |
|---|---|
| **Éxito** | Desperdicio en términos A ≈ 0; ≥50% clics agendar en landing agendar; CPA 30d ≤ US$18; ≥1 conv en ventana post |
| **Neutro** | Métricas ± ruido, landings OK, sin daño claro → mantener |
| **Revisar / revertir parcial** | CPA > US$25 sostenido o 0 conv con gasto ≥ baseline semanal; o clics siguen yendo a URL genérica (drift RSA) |

## Fuera de esta evaluación

No mezclar con: subir presupuesto, grupo adicción al juego, reactivar pareja/compin, negativas de ciudades. Si se hacen, anotar en CHANGELOG y nueva fila en este archivo.

## Al cerrar la reevaluación

1. Nueva sección `## Reevaluación YYYY-MM-DD` abajo (resultado + cifras).
2. Actualizar `STATE.md` snapshot.
3. 1 línea en `CHANGELOG.md`.

## Reevaluación YYYY-MM-DD

_(vacío — completar en la revisión)_
