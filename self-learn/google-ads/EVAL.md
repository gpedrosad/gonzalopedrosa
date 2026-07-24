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
| Search terms ya no gastan en negativas A | ✅ 7d | Gasto A≈0 post-cambio; restos en 30d = ventana rodante pre-17 |
| Landing agendar = `/ads/agendar-…` (no solo TCC) | ✅ | 7d 24 jul: 7/10 clics → agendar; 2 conv ahí |
| CPA campaña ≤ ~US$18 (o mejor que US$15) | ✅ | 30d US$10 · 7d US$6 |
| Conv. 7d no colapsaron a 0 con gasto similar | ✅ | 2 conv / US$12 en 7d |
| Adolescentes CPA no empeoró mucho sin causa | ✅ | 30d US$19; 7d 2 clics / US$1 |
| align-landings sin drifts | ✅ | “Nada que cambiar” (2026-07-24) |

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

## Reevaluación 2026-07-23

**Ventana post-cambio:** ~6 días (casi el mínimo de 7).  
**Veredicto:** **Éxito temprano** — mantener intervención; cierre formal ~31 jul.  
**Fuentes:** `docs/google-ads-informe-ads-2026-07-23.md` (30d) · `docs/google-ads-informe-ads-7d-2026-07-23.md` (7d)

### Comparativa 30d (baseline 17 jul → hoy)

| Métrica | 17 jul | 23 jul | Δ |
|---|---|---|---|
| Clics | 60 | 57 | −3 |
| Impresiones | 658 | 571 | −87 |
| CTR | 9.12% | 9.98% | +0.86 pp |
| Costo | US$62 | US$60 | −2 |
| Conv | 4 | 6 | +2 |
| CPA | US$15 | US$10 | −US$5 |

### Post-intervención (últimos 7d · proxy ~17–23 jul)

| Métrica | Valor |
|---|---|
| Clics | 10 |
| Costo | US$13 |
| Conv | 2 |
| CPA | US$7 |
| CTR | 9.90% |

Landings 7d (clave para B):

| Landing | Clics | Conv | CPA |
|---|---|---|---|
| `/ads/agendar-psicologo-online` | 6 | 2 | US$4 |
| `/ads/adolescentes` | 2 | 0 | — |
| `/ads/psicologo-cognitivo-conductual-online` | 2 | 0 | — |

→ El tráfico de **agendar** ya no cae en la landing TCC genérica; las 2 conv. de la semana son en `/ads/agendar-…`.

Grupos 7d: agendar 7 clics / 2 conv · adolescentes 2 / 0 · TCC 1 / 0.

### Lectura por intervención

**A · Negativas**  
En 7d no hay gasto en betterhelp, unobravo, opción yo terapia, terapi app, red psique, emdr, dbt, adventista, 24h.  
En 30d aún aparece `opción yo terapia` (US$1) → residual de antes del 17 (ventana rodante).  
Impresiones residuales sin clic (p. ej. unobravo, terapi app) = OK.

**B · Landings**  
Cumple el criterio de éxito: mayoría del gasto post-cambio en landing del grupo; RSA ENABLED sin drift (`align-landings` limpio).  
Agendar 30d: 26 clics / 5 conv (grupo) · landing agendar ya mide 6 clics / 2 conv (el resto del rolling 30d aún mezcla pre-cambio en TCC).

### Riesgos / ruido

- N sigue bajo (budget US$2/día).
- `propose` sigue sugiriendo términos **no seguros** (TCC core, adolescentes, adicciones) — **no aplicar** ciego.
- Desperdicio 7d restante: `psicoterapia online`, `psicologos online` (core/protegidos o afilables) — no negativar genéricos.
- Sitelinks sin `www` siguen en impresiones (0 clics 7d).

### Decisión

| Acción | Estado |
|---|---|
| Mantener negativas A | Sí |
| Mantener landings alineadas | Sí |
| Revertir algo | No |
| Próxima revisión formal | ~2026-07-31 |
| Nuevas acciones ahora | Ninguna obligatoria; pendientes fuera de eval siguen en STATE |

### Checklist relleno

Ver tabla “Cómo reevaluar” arriba (actualizada 24 jul).

## Reevaluación 2026-07-24

**Ventana post-cambio:** ~7 días (mínimo del plan).  
**Veredicto:** **Éxito a día 7** — confirmar y mantener; cierre formal ~31 jul.  
**Fuentes:** `docs/google-ads-informe-ads-2026-07-24.md` (30d) · `docs/google-ads-informe-ads-7d-2026-07-24.md` (7d)

### Comparativa 30d (baseline 17 jul → hoy)

| Métrica | 17 jul | 23 jul | 24 jul | Δ vs baseline |
|---|---|---|---|---|
| Clics | 60 | 57 | 57 | −3 |
| Impresiones | 658 | 571 | 579 | −79 |
| CTR | 9.12% | 9.98% | 9.84% | +0.72 pp |
| Costo | US$62 | US$60 | US$61 | −1 |
| Conv | 4 | 6 | 6 | +2 |
| CPA | US$15 | US$10 | US$10 | −US$5 |

### Post-intervención (últimos 7d · ~17–24 jul)

| Métrica | 23 jul | 24 jul |
|---|---|---|
| Clics | 10 | 10 |
| Costo | US$13 | US$12 |
| Conv | 2 | 2 |
| CPA | US$7 | US$6 |
| CTR | 9.90% | 8.00% |

Landings 7d (clave para B):

| Landing | Clics | Conv | CPA |
|---|---|---|---|
| `/ads/agendar-psicologo-online` | 7 | 2 | US$5 |
| `/ads/adolescentes` | 2 | 0 | — |
| `/ads/psicologo-cognitivo-conductual-online` | 1 | 0 | — |

→ **70%** de los clics 7d van a landing agendar; ambas conv. ahí (criterio ≥50% cumplido con margen).

Grupos 7d: agendar 7 clics / 2 conv · adolescentes 2 / 0 · TCC 1 / 0.

### Lectura por intervención

**A · Negativas**  
En 7d: sin gasto en betterhelp, unobravo, opción yo terapia, terapi app, red psique, emdr, dbt, adventista, 24h.  
En 30d aún `opción yo terapia` (US$1) y impresiones residuales `unobravo` / `terapia dbt` = ventana rodante pre-17.  
Desperdicio 7d restante: `psicoterapia online`, `psicologos online`, `terapia cognitivo conductual adolescentes` — core/protegidos; **no** aplicar `propose` ciego.

**B · Landings**  
Mejora vs 23 jul: 7/10 clics en `/ads/agendar-…` (antes 6/10). `align-landings` limpio.  
30d landings aún mezclan pre-cambio (TCC 24 clics / 3 conv; agendar 7 / 2).

### Checks

| Acción | Resultado |
|---|---|
| `align-landings` | Nada que cambiar |
| `negatives propose` | 12 sugeridas (TCC/adolescentes/adicciones) — **no aplicar** |

### Decisión

| Acción | Estado |
|---|---|
| Mantener negativas A | Sí |
| Mantener landings alineadas | Sí |
| Revertir algo | No |
| Próxima revisión formal | ~2026-07-31 |
| Nuevas acciones ahora | Ninguna; pendientes fuera de eval en STATE |
