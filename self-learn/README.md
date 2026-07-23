# self-learn

Memoria operativa **corta** para agentes y humanos. Objetivo: menos tokens.

## Cómo usarlo (IA)

1. Abrir el `INDEX.md` del dominio.
2. Leer **solo** el archivo listado para la tarea.
3. No cargar `docs/*-informe-*.md` enteros salvo métricas pedidas.
4. Tras un cambio ops: 1 línea en `CHANGELOG.md` + actualizar `STATE.md` si cambia el snapshot.

## Dominios

| Dominio | Entrada |
|---|---|
| Google Ads | [google-ads/INDEX.md](./google-ads/INDEX.md) |
| SEO orgánico | [seo/INDEX.md](./seo/INDEX.md) |
| Skill Ads | [.agents/skills/google-ads/SKILL.md](../.agents/skills/google-ads/SKILL.md) |
| Skill SEO audit | [.agents/skills/seo-audit/SKILL.md](../.agents/skills/seo-audit/SKILL.md) |
| Skill GSC | [.agents/skills/google-search-console/SKILL.md](../.agents/skills/google-search-console/SKILL.md) |

Al agregar otro dominio: misma forma (`INDEX` + archivos chicos + changelog + eval si hay intervención).
