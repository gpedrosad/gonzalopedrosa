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
| Transaccional («psicólogo online», reservar) | `/psicologo-online-chillan` |
| Explicativo (cómo funciona) | `/terapia-online` |
| Comparativa | `/terapia-online-vs-presencial-chillan` |
| Conversión | `/agendar` |
| Autoridad | `/perfil` |

No apuntar chips/CTAs «Online» transaccionales a `/terapia-online`.

## Contenido

- No crear decenas de URLs nuevas mientras money pages tengan menos de ~20 imp. o CTR 0% con imp.
- Title ~50–60 · description 140–165 · query al inicio del title.
- Schema: validar en Rich Results Test (no confiar solo en curl/`web_fetch`).

## Ads vs orgánico

- `/ads/**` = `noindex,nofollow` (layout). OK que robots no bloquee Ads salvo decisión explícita de crawl budget.
