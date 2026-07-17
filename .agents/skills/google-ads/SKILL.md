---
name: google-ads
description: >-
  Manage and review Google Ads for gonzalopedrosa via repo CLI/API (not GSC).
  Use when the user mentions Google Ads, campañas paid, negativas, presupuesto Ads,
  RSA, final URLs, landings /ads/*, CPA, whatsapp_lead, google-ads:informe,
  google-ads:manage, align-landings, or adicción al juego en Ads.
  For organic Search Console use google-search-console.
---

# Google Ads (repo)

**Antes de improvisar:** leer `self-learn/google-ads/INDEX.md` y abrir **un** archivo de esa carpeta.

## Flujo

1. `INDEX.md` → elegir archivo.
2. Cambios de cuenta: dry-run → confirmar si es destructivo → `--apply`.
3. Registrar en `self-learn/google-ads/CHANGELOG.md` (1 línea).
4. Actualizar `STATE.md` solo si cambió estructura (grupos/budget/landings).

## Archivos (progressive disclosure)

| Necesitas | Leer |
|---|---|
| Comandos | `self-learn/google-ads/COMMANDS.md` |
| Prohibiciones / mapa landings | `self-learn/google-ads/RULES.md` |
| Snapshot | `self-learn/google-ads/STATE.md` |
| Historial ops | `self-learn/google-ads/CHANGELOG.md` |
| Reevaluar cambios 17 jul | `self-learn/google-ads/EVAL.md` |
| Métricas 30d | `npm run google-ads:informe` → `docs/google-ads-informe-ads-*.md` |

No pegar informes enteros en el chat. Resumir cifras clave.

## Capacidades locales

- Lectura: informe, `manage list`, dashboard `/interno/ads`.
- Escritura: budget, status, bid, target-cpa, negativas, replace RSA / align-landings.
- Landings Next: `src/app/ads/*/page.tsx`.

**No instalar MCP Ads** salvo pedido: CLI del repo ya escribe; MCP oficial Google = read-only.

## Defaults

- Customer `5930583968`, USD, conv `whatsapp_lead`.
- Host landings: `https://www.gonzalopedrosa.cl/ads/...`
- Negativas core: ver RULES (no aplicar propose ciego).
