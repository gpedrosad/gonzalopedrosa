# Informe completo de Google Search Console

- Sitio: `sc-domain:gonzalopedrosa.cl`
- Periodo analizado: `2026-06-11` -> `2026-07-09` (28 dias)
- Periodo comparado: `2026-05-13` -> `2026-06-10`
- Generado: `2026-07-09T20:38:26.124Z`
- Fuente: Search Console API

## Resumen ejecutivo

- Clics: **9** (+12,5% vs periodo anterior)
- Impresiones: **69** (-46,9% vs periodo anterior)
- CTR promedio: **13.04%** (+6,89 pp vs periodo anterior)
- Posicion media ponderada: **7,4** (+0,5 puntos; positivo = mejora)
- Terminos de marca detectados: `gonzalopedrosa`

## Comparacion con informes previos (ventanas de 28 dias)

| Corte | Periodo | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- | --- |
| 2026-05-26 | 04-28 → 05-26 | 6 | 61 | 9.84% | 7,4 |
| 2026-06-01 | 05-04 → 06-01 | 6 | 63 | 9.52% | 8,4 |
| 2026-06-05 | 05-08 → 06-05 | 3 | 74 | 4.05% | 8,4 |
| 2026-06-08 | 05-11 → 06-08 | 6 | 119 | 5.04% | 8,2 |
| 2026-06-14 | 05-17 → 06-14 | 8 | 121 | 6.61% | 7,9 |
| 2026-06-15 | 05-18 → 06-15 | 9 | 125 | 7.20% | 7,9 |
| **2026-07-09** | **06-11 → 07-09** | **9** | **69** | **13.04%** | **7,4** |

### Lectura vs ultimo corte (2026-06-15)

| Metrica | 15 jun | 9 jul | Delta |
| --- | --- | --- | --- |
| Clics | 9 | 9 | 0 |
| Impresiones | 125 | 69 | -56 (-44,8%) |
| CTR | 7.20% | 13.04% | +5,84 pp |
| Posicion | 7,9 | 7,4 | +0,5 (mejora) |
| Hosts con impresiones | www + apex | solo www | resuelto |
| Gap CTR principal | terapia-de-pareja (1.72%) | psicologo-online (0%) | cambio de oportunidad |

### Que mejoro

- Clics se mantienen en el maximo reciente (9), pese a menos impresiones.
- CTR sube fuerte: menos impresiones "vacias" y mejor conversion relativa.
- Posicion media vuelve al mejor nivel visto desde mayo (7,4).
- Host mezclado www/apex ya no aparece en URLs con impresiones (antes era riesgo recurrente).
- `terapia-de-pareja-chillan` mejoro CTR (1.72% → 16.67%) aunque perdio visibilidad (58 → 6 impresiones).
- Home, EMDR y obesidad siguen aportando clics con buen CTR.

### Que empeoro o requiere atencion

- Caida fuerte de impresiones (-45% vs 15 jun). El driver principal es `terapia-de-pareja-chillan` (-52 impresiones).
- `agendar` paso de 2 clics a 0, con mas impresiones (7) y CTR 0%.
- Nueva oportunidad CTR: `psicologo-online-chillan` (12 impresiones, pos ~5, CTR 0%).
- Persistentes: sitemap falso `.../terapia-de-pareja-chillan` con error, y API reportando 0/80 indexadas en `sitemap.xml`.
- Volumen organico sigue siendo bajo (sitio joven / nicho local); cada URL cuenta.

## Cambios urgentes

1. **Revisar sitemaps con errores o advertencias**. Detectados: https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan.
2. **Validar por que el sitemap envia URLs pero no muestra indexacion**. https://www.gonzalopedrosa.cl/sitemap.xml reporta 80 URL(s) enviadas y 0 indexadas. Revisar canonical, indexabilidad real, cobertura y si el API esta devolviendo contenido consistente.
3. **Optimizar titles y meta descriptions en paginas con CTR bajo**. 1 URL(s) con gap relevante. Ejemplo: https://www.gonzalopedrosa.cl/psicologo-online-chillan | CTR 0.00% vs esperado 6.00%.

## Riesgos detectados

- CTR bajo: 1 URL(s) con gap frente al benchmark de primera pagina.
- URL Inspection: 2 muestra(n) senales de problema o respuesta incompleta.
- Sitemaps: hay al menos un sitemap con errores o advertencias.
- Cobertura de sitemap: 1 alerta(s) de indexacion baja o nula en URLs enviadas.

## KPI comparados

| Metrica | Periodo actual | Periodo anterior | Delta |
| --- | --- | --- | --- |
| Clics | 9 | 8 | +1 |
| Impresiones | 69 | 130 | -61 |
| CTR | 13.04% | 6.15% | +6,89 pp |
| Posicion media | 7,4 | 7,9 | +0,5 |

## Marca vs no marca

| Bucket | Clics | Impresiones | CTR | Posicion | Filas |
| --- | --- | --- | --- | --- | --- |
| Marca | 0 | 0 | 0.00% | 0,0 | 0 |
| No marca | 1 | 8 | 12.50% | 14,1 | 6 |

## Acciones recomendadas

No hay acciones secundarias adicionales.

## URLs con CTR bajo y potencial de mejora

| URL | Clics | Impresiones | CTR actual | CTR esperado | Gap | Clicks extra potenciales |
| --- | --- | --- | --- | --- | --- | --- |
| <https://www.gonzalopedrosa.cl/psicologo-online-chillan> | 0 | 12 | 0.00% | 6.00% | +6,00 pp | 0,7 |

## Hosts observados en URLs con impresiones

| Host | Filas observadas |
| --- | --- |
| www.gonzalopedrosa.cl | 23 |

## Tendencias: consultas

### Consultas en alza
| Consulta | Clics actuales | Clics previos | Delta clics | Delta impresiones |
| --- | --- | --- | --- | --- |
| terapia de pareja chillan | 1 | 0 | +1 | -12 |

### Consultas en baja
| Consulta | Clics actuales | Clics previos | Delta clics | Delta impresiones |
| --- | --- | --- | --- | --- |
| gonzalo pedrosa | 0 | 1 | -1 | 0 |

## Tendencias: paginas

### Paginas en alza
| Pagina | Clics actuales | Clics previos | Delta clics | Delta impresiones |
| --- | --- | --- | --- | --- |
| <https://www.gonzalopedrosa.cl/> | 3 | 2 | +1 | +3 |
| <https://www.gonzalopedrosa.cl/psicologo-obesidad-chillan> | 2 | 1 | +1 | -1 |
| <https://www.gonzalopedrosa.cl/certificado-salud-mental-trabajo-chillan> | 1 | 0 | +1 | -1 |
| <https://www.gonzalopedrosa.cl/psicologo-hombres-chillan> | 0 | 0 | 0 | +8 |
| <https://www.gonzalopedrosa.cl/psicologo-online-chillan> | 0 | 0 | 0 | +5 |

### Paginas en baja
| Pagina | Clics actuales | Clics previos | Delta clics | Delta impresiones |
| --- | --- | --- | --- | --- |
| <https://www.gonzalopedrosa.cl/agendar> | 0 | 2 | -2 | +4 |
| <https://gonzalopedrosa.cl/psicologo-hombres-chillan> | 0 | 1 | -1 | -3 |
| <https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan> | 1 | 1 | 0 | -54 |
| <https://www.gonzalopedrosa.cl/terapia-emdr-chillan> | 2 | 2 | 0 | -8 |
| <https://www.gonzalopedrosa.cl/psicologo-abuso-sexual-chillan> | 0 | 0 | 0 | -6 |

## Top consultas

| Consulta | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- |
| terapia de pareja chillan | 1 | 1 | 100.00% | 14,0 |
| psicólogo para hombres | 0 | 2 | 0.00% | 4,5 |
| terapia erp toc | 0 | 2 | 0.00% | 35,5 |
| gonzalo pedrosa | 0 | 1 | 0.00% | 2,0 |
| psicologo hombre | 0 | 1 | 0.00% | 7,0 |
| psicólogo adulto | 0 | 1 | 0.00% | 10,0 |

## Top paginas

| Pagina | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- |
| <https://www.gonzalopedrosa.cl/> | 3 | 11 | 27.27% | 2,1 |
| <https://www.gonzalopedrosa.cl/terapia-emdr-chillan> | 2 | 5 | 40.00% | 6,8 |
| <https://www.gonzalopedrosa.cl/psicologo-obesidad-chillan> | 2 | 4 | 50.00% | 2,5 |
| <https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan> | 1 | 6 | 16.67% | 9,7 |
| <https://www.gonzalopedrosa.cl/certificado-salud-mental-trabajo-chillan> | 1 | 1 | 100.00% | 26,0 |
| <https://www.gonzalopedrosa.cl/psicologo-online-chillan> | 0 | 12 | 0.00% | 5,1 |
| <https://www.gonzalopedrosa.cl/psicologo-ansiedad-chillan> | 0 | 8 | 0.00% | 7,9 |
| <https://www.gonzalopedrosa.cl/psicologo-hombres-chillan> | 0 | 8 | 0.00% | 4,8 |
| <https://www.gonzalopedrosa.cl/agendar> | 0 | 7 | 0.00% | 5,7 |
| <https://www.gonzalopedrosa.cl/alcoholismo-chillan> | 0 | 5 | 0.00% | 9,6 |
| <https://www.gonzalopedrosa.cl/perfil> | 0 | 5 | 0.00% | 4,4 |
| <https://www.gonzalopedrosa.cl/psicologo-acoso-laboral-chillan> | 0 | 5 | 0.00% | 10,4 |
| <https://www.gonzalopedrosa.cl/psicologo-abuso-sexual-chillan> | 0 | 4 | 0.00% | 6,0 |
| <https://www.gonzalopedrosa.cl/psicologo-bipolaridad-chillan> | 0 | 4 | 0.00% | 8,5 |
| <https://www.gonzalopedrosa.cl/tratamiento-toc-chillan> | 0 | 4 | 0.00% | 21,8 |
| <https://www.gonzalopedrosa.cl/psicologo-baja-autoestima-chillan> | 0 | 3 | 0.00% | 9,7 |
| <https://www.gonzalopedrosa.cl/dejar-de-beber-chillan> | 0 | 2 | 0.00% | 8,5 |
| <https://www.gonzalopedrosa.cl/psicologo-adulto-chillan> | 0 | 2 | 0.00% | 6,0 |
| <https://www.gonzalopedrosa.cl/psicologo-centro-chillan> | 0 | 2 | 0.00% | 6,5 |
| <https://www.gonzalopedrosa.cl/orientacion-padres-chillan> | 0 | 1 | 0.00% | 1,0 |
| <https://www.gonzalopedrosa.cl/primera-consulta-psicologo-chillan> | 0 | 1 | 0.00% | 10,0 |
| <https://www.gonzalopedrosa.cl/psicologo-depresion-chillan> | 0 | 1 | 0.00% | 7,0 |
| <https://www.gonzalopedrosa.cl/psicologo-particular-chillan> | 0 | 1 | 0.00% | 5,0 |

## Combinaciones consulta + pagina

| Consulta | Pagina | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- | --- |
| terapia de pareja chillan | <https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan> | 1 | 1 | 100.00% | 14,0 |
| psicólogo para hombres | <https://www.gonzalopedrosa.cl/psicologo-hombres-chillan> | 0 | 2 | 0.00% | 4,5 |
| terapia erp toc | <https://www.gonzalopedrosa.cl/tratamiento-toc-chillan> | 0 | 2 | 0.00% | 35,5 |
| gonzalo pedrosa | <https://www.gonzalopedrosa.cl/> | 0 | 1 | 0.00% | 2,0 |
| gonzalo pedrosa | <https://www.gonzalopedrosa.cl/perfil> | 0 | 1 | 0.00% | 5,0 |
| psicologo hombre | <https://www.gonzalopedrosa.cl/psicologo-hombres-chillan> | 0 | 1 | 0.00% | 7,0 |
| psicólogo adulto | <https://www.gonzalopedrosa.cl/psicologo-adulto-chillan> | 0 | 1 | 0.00% | 10,0 |

## Dispositivos

| Dispositivo | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- |
| MOBILE | 7 | 60 | 11.67% | 7,7 |
| DESKTOP | 2 | 9 | 22.22% | 5,7 |

## Paises

| Pais | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- |
| chl | 9 | 68 | 13.24% | 7,4 |
| gtm | 0 | 1 | 0.00% | 11,0 |

## Search appearance

| Tipo | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- |
| - |

## Serie diaria

| Fecha | Clics | Impresiones | CTR | Posicion |
| --- | --- | --- | --- | --- |
| 2026-06-11 | 0 | 1 | 0.00% | 5,0 |
| 2026-06-12 | 0 | 1 | 0.00% | 6,0 |
| 2026-06-13 | 1 | 3 | 33.33% | 7,3 |
| 2026-06-14 | 1 | 2 | 50.00% | 7,5 |
| 2026-06-15 | 0 | 2 | 0.00% | 7,0 |
| 2026-06-16 | 0 | 5 | 0.00% | 5,6 |
| 2026-06-17 | 0 | 2 | 0.00% | 6,5 |
| 2026-06-18 | 0 | 1 | 0.00% | 6,0 |
| 2026-06-19 | 1 | 5 | 20.00% | 2,0 |
| 2026-06-20 | 0 | 0 | 0.00% | 0,0 |
| 2026-06-21 | 0 | 0 | 0.00% | 0,0 |
| 2026-06-22 | 1 | 5 | 20.00% | 6,8 |
| 2026-06-23 | 0 | 2 | 0.00% | 11,0 |
| 2026-06-24 | 0 | 0 | 0.00% | 0,0 |
| 2026-06-25 | 0 | 1 | 0.00% | 12,0 |
| 2026-06-26 | 2 | 9 | 22.22% | 4,2 |
| 2026-06-27 | 0 | 0 | 0.00% | 0,0 |
| 2026-06-28 | 0 | 2 | 0.00% | 19,0 |
| 2026-06-29 | 0 | 0 | 0.00% | 0,0 |
| 2026-06-30 | 1 | 6 | 16.67% | 6,7 |
| 2026-07-01 | 1 | 1 | 100.00% | 26,0 |
| 2026-07-02 | 0 | 3 | 0.00% | 7,0 |
| 2026-07-03 | 0 | 2 | 0.00% | 5,0 |
| 2026-07-04 | 0 | 0 | 0.00% | 0,0 |
| 2026-07-05 | 0 | 4 | 0.00% | 15,5 |
| 2026-07-06 | 1 | 6 | 16.67% | 8,2 |
| 2026-07-07 | 0 | 6 | 0.00% | 6,8 |

## Sitemaps

| Path | Tipo | Errores | Warnings | Ultimo submitted | Ultimo downloaded | Contenido |
| --- | --- | --- | --- | --- | --- | --- |
| https://www.gonzalopedrosa.cl/sitemap.xml | sitemap | 0 | 0 | 2026-06-08T15:31:18.201Z | 2026-06-08T15:31:19.574Z | web: 0 indexadas / 80 enviadas |
| https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan | - | 1 | 0 | 2026-06-08T15:30:50.321Z | 2026-07-09T02:00:39.807Z | - |

## Alertas de cobertura en sitemap

| Path | Tipo | Enviadas | Indexadas | Severidad |
| --- | --- | --- | --- | --- |
| https://www.gonzalopedrosa.cl/sitemap.xml | web | 80 | 0 | alta |

## Muestra de URL Inspection

| URL | Verdict | Coverage | Fetch | Canonical usuario | Canonical Google | Error |
| --- | --- | --- | --- | --- | --- | --- |
| <https://gonzalopedrosa.cl/> | NEUTRAL | Página con redirección | SUCCESSFUL | <https://www.gonzalopedrosa.cl/> | <https://www.gonzalopedrosa.cl/> | - |
| <https://gonzalopedrosa.cl/agendar> | NEUTRAL | Rastreada: actualmente sin indexar | SUCCESSFUL | - | - | - |
| <https://www.gonzalopedrosa.cl/> | PASS | Enviada e indexada | SUCCESSFUL | <https://www.gonzalopedrosa.cl/> | <https://www.gonzalopedrosa.cl/> | - |

## Propiedades visibles para la cuenta

| Property | Permiso |
| --- | --- |
| sc-domain:ideamadera.cl | siteOwner |
| sc-domain:agendapp.com.ar | siteOwner |
| sc-domain:gpedrosa.cl | siteOwner |
| sc-domain:gonzalopedrosa.cl | siteOwner |
| sc-domain:mpedrosa.studio | siteOwner |
| sc-domain:katialafono.cl | siteOwner |

## Propuesta de trabajo

### Proximas 72 horas
- Revisar sitemaps con errores o advertencias. Detectados: https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan.
- Validar por que el sitemap envia URLs pero no muestra indexacion. https://www.gonzalopedrosa.cl/sitemap.xml reporta 80 URL(s) enviadas y 0 indexadas. Revisar canonical, indexabilidad real, cobertura y si el API esta devolviendo contenido consistente.
- Optimizar titles y meta descriptions en paginas con CTR bajo. 1 URL(s) con gap relevante. Ejemplo: https://www.gonzalopedrosa.cl/psicologo-online-chillan | CTR 0.00% vs esperado 6.00%.

### Proximas 2 semanas
- Mantener seguimiento y comparar con el siguiente corte.

## Notas y limites

- El bucket marca/no marca es heuristico y depende de los terminos detectados.
- Search Console API no separa AI Overviews de organico en este reporte.
- Los trends comparan el periodo actual contra el inmediatamente anterior de igual largo.
- La inspeccion de URL es una muestra chica por cuota y tiempo de respuesta.
