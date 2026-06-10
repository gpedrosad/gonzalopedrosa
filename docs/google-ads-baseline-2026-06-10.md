# Informe Google Ads (solo paid) — baseline

> **Snapshot para comparar después.** Regenerar con `npm run google-ads:informe -- docs/google-ads-baseline-YYYY-MM-DD.md`

**Cambios aplicados antes de este snapshot (2026-06-10):**
- 19 negativas de campaña (sexología, familia, psicoanálisis, infantil, santiago, etc.; sin `adicciones`, `dbt`, `emdr` sueltos)
- Grupo `psicologo-adolescentes-online` → nuevo RSA a `/ads/adolescentes` (anuncio anterior pausado)
- Landing `/ads/adolescentes` optimizada (copy + CTA alineados a keywords)

> **Alcance:** únicamente campañas de pago en Google Ads. No incluye orgánico (GSC).

- Cuenta: `5930583968`
- Moneda: **USD**
- Periodo: últimos **30** días
- Generado: `2026-06-10T20:54:00.613Z`
- Conversión trackeada: `whatsapp_lead` vía GTM → `AW-17861931009`

## Resumen ejecutivo (paid)

| Métrica | Valor |
| --- | --- |
| Clics | 50 |
| Impresiones | 721 |
| CTR | 6.93% |
| Costo total | US$64 |
| CPC medio | US$1 |
| Conversiones | 4,0 |
| CPA (costo / conversión) | US$16 |

## Ads vs no-ads (dentro del tráfico paid)

Clasificación de **URLs finales** donde aterriza el tráfico de pago:

| Bucket | Qué es | Clics | Impresiones | Costo | Conversiones | CPA |
| --- | --- | --- | --- | --- | --- | --- |
| **Landings `/ads/*`** | URLs de conversión paid (noindex) | 43 | 721 | US$54 | 3,5 | US$15 |
| **Sitelinks `/sitelink/*`** | Extensiones / apoyo, no landings money | 7 | 937 | US$11 | 0,5 | US$21 |

### Lectura rápida

- **86,0%** de los clics paid van a landings `/ads/*` (43 de 50).
- Sitelinks captan **7** clics paid — revisar si compiten con la landing principal.
- Hay paid aterrizando en **host sin www** (3 URL(s)); unificar a `www.gonzalopedrosa.cl`.

## Campañas

| Campaña | Estado | Clics | Impresiones | CTR | Costo | Conv. | CPA |
| --- | --- | --- | --- | --- | --- | --- | --- |
| psicologo-cognitivo-conductual-online | Activa | 50 | 721 | 6.93% | US$64 | 4,0 | US$16 |
| Campaign #1 | Eliminada | 0 | 0 | 0.00% | US$0 | 0,0 | n/d |

## Grupos de anuncios

| Campaña | Grupo | Clics | Impresiones | Costo | Conv. |
| --- | --- | --- | --- | --- | --- |
| psicologo-cognitivo-conductual-online | agendar-psicologo-online | 40 | 632 | US$56 | 4,0 |
| psicologo-cognitivo-conductual-online | psicologo-adolescentes-online | 9 | 78 | US$7 | 0,0 |
| psicologo-cognitivo-conductual-online | psicologo-cognitivo-conductual-online | 1 | 8 | US$1 | 0,0 |
| psicologo-cognitivo-conductual-online | psicologo-ansiedad-online | 0 | 2 | US$0 | 0,0 |
| psicologo-cognitivo-conductual-online | psicologo-ataques-de-panico-online | 0 | 1 | US$0 | 0,0 |
| psicologo-cognitivo-conductual-online | terapia-pareja | 0 | 0 | US$0 | 0,0 |
| psicologo-cognitivo-conductual-online | compin | 0 | 0 | US$0 | 0,0 |

## Palabras clave (puja)

| Keyword | Match | Clics | Impresiones | Costo | Conv. |
| --- | --- | --- | --- | --- | --- |
| psicologo a distancia | PHRASE | 35 | 546 | US$46 | 4,0 |
| terapia emocional adolescentes | PHRASE | 5 | 62 | US$4 | 0,0 |
| psicologo en linea | PHRASE | 3 | 53 | US$5 | 0,0 |
| sesion terapia online | PHRASE | 2 | 33 | US$5 | 0,0 |
| psicologo conducta adolescente | EXACT | 0 | 6 | US$0 | 0,0 |
| terapia cognitivo conductual online | EXACT | 1 | 4 | US$1 | 0,0 |
| psicologo adolescentes online | EXACT | 2 | 4 | US$2 | 0,0 |
| ansiedad adolescente psicologo | EXACT | 2 | 4 | US$1 | 0,0 |
| terapia tcc online | EXACT | 0 | 3 | US$0 | 0,0 |
| psicologo online ataques de panico | EXACT | 0 | 1 | US$0 | 0,0 |
| psicologo tcc online | EXACT | 0 | 1 | US$0 | 0,0 |
| psicologo para adolescentes online | PHRASE | 0 | 1 | US$0 | 0,0 |
| terapia para adolescentes online | EXACT | 0 | 1 | US$0 | 0,0 |
| terapia online para ansiedad | EXACT | 0 | 1 | US$0 | 0,0 |
| psicologo ansiedad online | EXACT | 0 | 1 | US$0 | 0,0 |
| psicólogo matrimonial online | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| psicoterapia de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia matrimonial online | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapeuta de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia de pareja virtual | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia de pareja a distancia | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia de pareja por videollamada | PHRASE | 0 | 0 | US$0 | 0,0 |
| problemas de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| ayuda problemas de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| psicólogo para parejas online | PHRASE | 0 | 0 | US$0 | 0,0 |
| psicólogo de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| especialista en terapia de pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia de pareja infidelidad online | PHRASE | 0 | 0 | US$0 | 0,0 |
| terapia conyugal online | PHRASE | 0 | 0 | US$0 | 0,0 |
| psicólogo de pareja por videollamada | PHRASE | 0 | 0 | US$0 | 0,0 |
| problemas de pareja psicólogo online | PHRASE | 0 | 0 | US$0 | 0,0 |
| conflictos de pareja terapia online | PHRASE | 0 | 0 | US$0 | 0,0 |
| psicólogo infidelidad pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| psicólogo pareja urgente online | PHRASE | 0 | 0 | US$0 | 0,0 |
| crisis de pareja ayuda online | PHRASE | 0 | 0 | US$0 | 0,0 |
| peleas constantes pareja ayuda online | PHRASE | 0 | 0 | US$0 | 0,0 |
| salvar mi relación online | PHRASE | 0 | 0 | US$0 | 0,0 |
| superar infidelidad pareja online | PHRASE | 0 | 0 | US$0 | 0,0 |
| ayuda pareja urgente online | PHRASE | 0 | 0 | US$0 | 0,0 |

## Términos de búsqueda reales (search terms)

| Término | Clics | Impresiones | Costo | Conv. |
| --- | --- | --- | --- | --- |
| psicologo online | 2 | 66 | US$2 | 0,0 |
| psicólogo online | 4 | 45 | US$7 | 0,0 |
| terapia online | 2 | 29 | US$5 | 0,0 |
| psicólogos online | 1 | 15 | US$1 | 0,0 |
| psicologos online | 1 | 12 | US$1 | 0,0 |
| ayuda psicologica en linea | 0 | 7 | US$0 | 0,0 |
| psicologo en linea | 0 | 6 | US$0 | 0,0 |
| psicologa online | 0 | 5 | US$0 | 0,0 |
| psicologo de adicciones online | 0 | 5 | US$0 | 0,0 |
| psicólogo adicciones online | 0 | 5 | US$0 | 0,0 |
| terapia dbt online | 0 | 5 | US$0 | 0,0 |
| psicologia en linea | 0 | 4 | US$0 | 0,0 |
| psicologo adicciones online | 0 | 4 | US$0 | 0,0 |
| psicologo remoto | 0 | 4 | US$0 | 0,0 |
| psicólogo infantil online | 0 | 4 | US$0 | 0,0 |
| psicólogo especialista adolescentes | 0 | 4 | US$0 | 0,0 |
| emdr terapia online | 0 | 3 | US$0 | 0,0 |
| tu apoyo online | 0 | 3 | US$0 | 0,0 |
| terapia para adolescentes con problemas emocionales | 0 | 3 | US$0 | 0,0 |
| elizabeth clapes psicologa | 0 | 2 | US$0 | 0,0 |
| linea libre chile | 0 | 2 | US$0 | 0,0 |
| psicologo de parejas online | 0 | 2 | US$0 | 0,0 |
| psicologo online santiago | 0 | 2 | US$0 | 0,0 |
| psicologo sexologo en linea | 1 | 2 | US$2 | 0,0 |
| psicologos en linea | 0 | 2 | US$0 | 0,0 |
| psicólogo bariátrico online | 0 | 2 | US$0 | 0,0 |
| psicólogo especialista en adicciones online | 0 | 2 | US$0 | 0,0 |
| psicólogo on line | 1 | 2 | US$2 | 0,0 |
| psicólogo videollamada | 0 | 2 | US$0 | 0,0 |
| psicólogo virtual | 0 | 2 | US$0 | 0,0 |
| psicólogos en linea | 0 | 2 | US$0 | 0,0 |
| psicólogos online recomendados | 1 | 2 | US$1 | 0,0 |
| terapia alcoholismo online | 0 | 2 | US$0 | 0,0 |
| terapia de familia online | 1 | 2 | US$3 | 0,0 |
| terapia emdr online | 1 | 2 | US$0 | 0,0 |
| videollamada psicología | 0 | 2 | US$0 | 0,0 |
| terapia dbt adolescentes | 0 | 2 | US$0 | 0,0 |
| psicologo tcc online | 0 | 1 | US$0 | 0,0 |
| terapia cognitivo conductual online | 0 | 1 | US$0 | 0,0 |
| atencion psicologica online | 0 | 1 | US$0 | 0,0 |
| consulta psicologica online | 0 | 1 | US$0 | 0,0 |
| conversemos cl | 0 | 1 | US$0 | 0,0 |
| hablemosdetodo injuv gob cl | 0 | 1 | US$0 | 0,0 |
| hora psicólogo online | 0 | 1 | US$0 | 0,0 |
| psico digital | 0 | 1 | US$0 | 0,0 |
| psico virtual | 0 | 1 | US$0 | 0,0 |
| psicoanálisis online | 1 | 1 | US$1 | 0,0 |
| psicologa online chile | 0 | 1 | US$0 | 0,0 |
| psicologia atencion teleconsulta teleorientacion | 0 | 1 | US$0 | 0,0 |
| psicologia infantil online grátis | 0 | 1 | US$0 | 0,0 |
| psicologia online chile | 0 | 1 | US$0 | 0,0 |
| psicologo clinico online | 0 | 1 | US$0 | 0,0 |
| psicologo infantil online | 0 | 1 | US$0 | 0,0 |
| psicologo telemedicina | 0 | 1 | US$0 | 0,0 |
| psicologo virtual | 0 | 1 | US$0 | 0,0 |
| psicoterapia online | 0 | 1 | US$0 | 0,0 |
| psicóloga online | 0 | 1 | US$0 | 0,0 |
| psicóloga sexóloga online | 0 | 1 | US$0 | 0,0 |
| psicólogo en linea | 0 | 1 | US$0 | 0,0 |
| psicólogo online ia | 0 | 1 | US$0 | 0,0 |

## Desperdicio paid (clics sin conversión)

Términos con **costo > 0** y **0 conversiones** en el periodo:

| Término | Clics | Costo |
| --- | --- | --- |
| psicólogo online | 4 | US$7 |
| terapia online | 2 | US$5 |
| terapia de familia online | 1 | US$3 |
| psicologo sexologo en linea | 1 | US$2 |
| psicologo online | 2 | US$2 |
| psicólogo on line | 1 | US$2 |
| psicólogos online | 1 | US$1 |
| psicólogos online recomendados | 1 | US$1 |
| psicoanálisis online | 1 | US$1 |
| psicologos online | 1 | US$1 |
| terapia emdr online | 1 | US$0 |

## Landings `/ads/*` (canon paid)

| URL ads | Clics | Impresiones | Costo | Conv. | CPA | En inventario |
| --- | --- | --- | --- | --- | --- | --- |
| https://www.gonzalopedrosa.cl/ads/psicologo-cognitivo-conductual-online | 43 | 721 | US$54 | 3,5 | US$15 | sí |

## Paid fuera de `/ads/*` (fugas / sitelinks)

| URL | Tipo | Clics | Impresiones | Costo | Conv. |
| --- | --- | --- | --- | --- | --- |
| https://gonzalopedrosa.cl/sitelink/como-funciona-terapia-online | sitelink | 4 | 276 | US$8 | 0,5 |
| https://gonzalopedrosa.cl/sitelink/sobre-el-psicologo | sitelink | 3 | 269 | US$3 | 0,0 |
| https://gonzalopedrosa.cl/sitelink/metodo-cognitivo-conductual | sitelink | 0 | 202 | US$0 | 0,0 |
| https://www.gonzalopedrosa.cl/sitelink/agendar-terapia-online | sitelink | 0 | 190 | US$0 | 0,0 |

## Dispositivos (paid)

| Dispositivo | Clics | Impresiones | Costo | Conv. |
| --- | --- | --- | --- | --- |
| Escritorio | 9 | 116 | US$9 | 1,0 |
| Móvil | 41 | 604 | US$55 | 3,0 |
| Tablet | 0 | 1 | US$0 | 0,0 |

## Acciones recomendadas (solo Ads)

1. Revisar negativas para términos con gasto y 0 conversiones (top: «psicólogo online»).
2. Evaluar extensiones de sitelink: mucho gasto fuera de `/ads/*`.
3. Forzar URLs finales y sitelinks solo con `https://www.gonzalopedrosa.cl/ads/...`.
4. Intención paid es **online genérica**, no local Chillán — alinea copy de anuncios y landing con esa intención.

## Inventario de landings ads en el repo

- `/ads/psicologo-cognitivo-conductual-online`
- `/ads/psicologo-online`
- `/ads/psicologo-ansiedad-online`
- `/ads/psicologo-ataques-de-panico-online`
- `/ads/agendar-psicologo-online`
- `/ads/terapia-online`
- `/ads/terapia-pareja`
- `/ads/adolescentes`
- `/ads/compin`

## Notas

- Este informe **no** sustituye al de Search Console; son canales distintos.
- `/ads/*` lleva `noindex` y está pensado solo para paid.
- `/sitelink/*` también es noindex; si recibe mucho paid, revisar extensiones y URLs finales.
- Regenerar: `npm run google-ads:informe`

