# Mapa GSC 90d · aplicado 2026-08-23

Fuente: `docs/gsc-informe-2026-08-23.md` (23 may–20 ago). **Sin URLs nuevas. Sin tocar `src/app/ads/**`.**

## P0 — money pages (titles / H1)

| URL | Qué se aplicó | Por qué |
|---|---|---|
| `/terapia-de-pareja-chillan` | Title con precio; H1 ya era «Terapia de pareja en Chillán» | 97 imp / 3 clics / CTR 3,1% · title anterior no vendía |
| `/psicologo-ansiedad-chillan` | Title «Agenda hoy · $35.000»; H1 «Psicólogo para ansiedad en Chillán» | 28 imp / 0 clics / pos ~8 |
| `/psicologo-online-chillan` | Title/H1 anclan **Chile**; schema `areaServed` = país | 47 imp / 0 clics; GEO real = online Chile. Slug Chillán se mantiene |
| `/psicologo-adulto-chillan` | H1 y title con **hombres**; no se recreó la URL 301 | Queries «psicólogo para hombres» · `/psicologo-hombres-chillan` sigue 301 → adulto |

## P1 — activar páginas que ya existían

| URL | Qué se aplicó | Por qué |
|---|---|---|
| `/psicologo-obesidad-chillan` ↔ `/evaluacion-bariatrica-chillan` | Bloque + enlace cruzado; title bariátrica más query | Bariátrica 0 imp; obesidad 6 clics / 35 imp |
| `/estres-postraumatico-chillan` ↔ `/terapia-emdr-chillan` | H1/title con TEPT; bloque «especialista en TEPT» | Query TEPT caía en EMDR; TEPT 0 filas GSC |
| `/tratamiento-toc-chillan` | H1 «Terapia ERP para TOC»; FAQ ERP = EPR | «terapia erp toc» en pos ~35; no nueva URL |
| `/alcoholismo-chillan` | Title/H1 más CTA + precio | Hub ~21 imp / 0 clics. No se tocó el spoke `/tratamiento-alcoholismo-chillan` |

## No hacer

- Landings por ciudad (0 evidencia GSC).
- Recrear `/psicologo-hombres-chillan`.
- Tercera URL bariátrica o TEPT.
- Certificados / P2 hasta que money pages dejen de tener CTR 0% con impresiones.
