# Reglas (no negociar sin pedir)

## Negativas

**No negativar** (intención core / protegidas en script):

- psicologo online (+ variantes acento/plural)
- terapia online, psicologo en linea, psicologo a distancia, psicologo virtual

**No negativar** `adicciones` / ludopatía / juego — landing `/ads/adiccion-al-juego`.

**Sí seguras** (competidores, otro enfoque, expectativa incorrecta): emdr, dbt, betterhelp, unobravo, apps, adventista, 24/7, sexologo, psicoanalisis, gratis/IA, etc.

Negativas se aplican a **nivel campaña**, match BROAD.

## Landings

Mapa canónico (www). RSA con URL incorrecta → `align-landings` (no UPDATE de final_urls).

| Grupo | Landing |
|---|---|
| agendar-psicologo-online | `/ads/agendar-psicologo-online` |
| psicologo-ansiedad-online | `/ads/psicologo-ansiedad-online` |
| psicologo-ataques-de-panico-online | `/ads/psicologo-ataques-de-panico-online` |
| psicologo-cognitivo-conductual-online | `/ads/psicologo-cognitivo-conductual-online` |
| psicologo-adolescentes-online | `/ads/adolescentes` |
| terapia-pareja | `/ads/terapia-pareja` |
| compin | `/ads/compin` |
| *(pendiente grupo)* | `/ads/adiccion-al-juego` |

Host: siempre `https://www.gonzalopedrosa.cl` (no apex sin www).

## Escritura

1. Dry-run / validate_only antes de `--apply`.
2. Confirmar con usuario si presupuesto > cambio chico o pausa de grupo con gasto.
3. Tras cambios: 1 línea en [CHANGELOG.md](./CHANGELOG.md).
4. No hace falta MCP Ads: CLI del repo ya lee y escribe. Oficial Google Ads MCP = solo lectura.

## Conversión

`whatsapp_lead` → GTM → `AW-17861931009`. Detalle: `docs/GTM_CONVERSION_SETUP.md`.
