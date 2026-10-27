# SEO · reglas

## Alcance

- **Orgánico:** landings públicas indexables del inventario.
- **No tocar** `src/app/ads/**` en planes SEO orgánicos (metadata, copy, CTAs, schema).
- Excluidos del sitemap: `/ads/`, `/interno/`, `/links/`, `/sitelink/`.

## Host y canónicos

- Canónico: `https://www.gonzalopedrosa.cl` (`toCanonicalUrl`).
- Apex → www (308). No mezclar hosts en enlaces internos.
- Una intención primaria por URL. Soft duplicates → **301** (preferido) o `noindex`.

## Intención online

| Rol | URL |
|---|---|
| Hub nacional («terapia online chile», «psicólogo online», «terapia psicológica online») | `/terapia-online` |
| Cómo funciona el proceso | `/preguntas/como-funciona-la-terapia-psicologica-online` |
| Cómo es la hora, paso a paso | `/preguntas/como-es-una-sesion-de-psicologia-online` |
| Si el formato sirve (evidencia citada, sin cifras inventadas) | `/preguntas/la-terapia-online-funciona` |
| Reembolso Isapre de la videollamada, solo con hechos ya publicados | `/preguntas/reembolso-isapre-terapia-online` |
| Comparativa | `/terapia-online-vs-presencial-chillan` |
| Atención local (sala en Chillán) | `/psicologo-online-chillan` |
| Conversión | `/agendar` |
| Autoridad | `/perfil` |

Title/H1 de `/psicologo-online-chillan` anclan **Chillán**. El ancla nacional («terapia online en Chile», «psicólogo online») apunta a `/terapia-online`. No crear landings por ciudad.

No recrear `/psicologo-hombres-chillan` (301 → `/psicologo-adulto-chillan`).

Los chips «Online» de una ficha local pueden seguir a `/psicologo-online-chillan`. No uses esa URL con el ancla «psicólogo online en Chile».

## Contenido

- No crear decenas de URLs nuevas mientras money pages tengan menos de ~20 imp. o CTR 0% con imp.
- Title ~50–60 · description 140–165 · query al inicio del title.
- Schema: validar en Rich Results Test (no confiar solo en curl/`web_fetch`).

## Ads vs orgánico

- `/ads/**` = `noindex,nofollow` (layout). OK que robots no bloquee Ads salvo decisión explícita de crawl budget.
