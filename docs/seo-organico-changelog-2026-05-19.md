# Changelog SEO orgánico — 2026-05-19

> **Actualización 2026-07-23:** tanda posterior (301 ansiedad, metas CTR, self-learn) en [`docs/seo-organico-changelog-2026-07-23.md`](./seo-organico-changelog-2026-07-23.md) · ops corto [`self-learn/seo/INDEX.md`](../self-learn/seo/INDEX.md).

Documento de registro de los cambios aplicados según el plan [`planes/seo-web-organica.md`](../planes/seo-web-organica.md).

| Campo | Valor |
| --- | --- |
| **Fecha** | 2026-05-19 |
| **Alcance** | Web orgánica pública indexable |
| **Excluido** | `src/app/ads/**`, `interno/**`, `links/**`, `sitelink/**` |
| **Ejecución** | 9 agentes en paralelo (pasos 1–7 y 9 completados; paso 8 abortado) |
| **Informe GSC** | [`docs/gsc-informe-2026-05-19.md`](./gsc-informe-2026-05-19.md) |
| **Archivos modificados (aprox.)** | ~85 en `src/app/**` + infraestructura |
| **Cambios en Ads** | **0** archivos |

---

## Resumen ejecutivo

Se unificó la base técnica SEO (inventario + sitemap + auditoría), se estandarizó el patrón on-page en ~75 landings orgánicas, se separó la intención «online transaccional» vs «online explicativo», se reforzó el cluster de alcoholismo y se regeneró el informe GSC con una sección de impacto esperado.

**Nota:** Las métricas de tráfico del informe GSC (5 clics / 71 impresiones en 28 días) corresponden al periodo **anterior al deploy** de estos cambios. La mejora en rankings y CTR debe medirse 4–8 semanas después del despliegue.

### Nota antes / después (evaluación interna)

| Momento | Nota global | Comentario |
| --- | :---: | --- |
| **Antes** | **4,5 / 10** | Muchas landings, sitemap manual, audit parcial, metadata/schema desigual, host mezclado en GSC |
| **Después (código)** | **7,5 / 10** | Inventario, audit completo, patrón homogéneo; falta QA final (paso 8) y validación post-deploy |
| **Potencial post-deploy** | **8–8,5** | Si sube indexación del sitemap y CTR en URLs prioritarias |

---

## Estado por paso del plan

| Paso | Descripción | Estado | Skill supervisora |
| --- | --- | --- | --- |
| 1 | Inventario orgánico indexable | ✅ | `seo-audit` |
| 2 | Refactor `sitemap.ts` + ampliación `seo-audit.mjs` | ✅ | `seo-audit` |
| 3 | Verificación canonical / host / robots / sitemap | ✅ PASS | `seo-audit` |
| 4 | Home, Agendar, Perfil, modalidad (7 páginas) | ✅ | `meta-tags-optimizer` |
| 5 | Money pages prioritarias (9 páginas) | ✅ | `meta-tags-optimizer`, `conversion-optimization` |
| 6 | Resto de landings orgánicas (59 páginas) | ✅ | `programmatic-seo` |
| 7 | Cluster alcoholismo (4 URLs, 1 plantilla) | ✅ | `programmatic-seo` |
| 8 | `tsc`, eslint, audit final, checklist | ⏸️ **Abortado** | `seo-audit` |
| 9 | Informe GSC Markdown regenerado | ✅ | `google-search-console` |

---

## 1. Base técnica

### Inventario (`src/lib/organic-routes.ts`)

- **81 rutas** en `ORGANIC_SITEMAP_ENTRIES` / `ORGANIC_INDEXABLE_ROUTES`.
- Exclusiones: prefijos `/ads/`, `/interno/`, `/links/`, `/sitelink/`.
- Exporta: `isOrganicExcludedPath()`, `getOrganicPathsCsv()`.
- Comentario en código documenta reglas de exclusión.

### Sitemap (`src/app/sitemap.ts`)

- Antes: ~490 líneas con URLs listadas a mano.
- Después: ~14 líneas; mapea `ORGANIC_SITEMAP_ENTRIES` con `toCanonicalUrl()` → `https://www.gonzalopedrosa.cl`.

### Auditoría (`scripts/seo-audit.mjs`)

- Audita **todo el inventario** (no solo 5 rutas hardcodeadas).
- Por ruta: status 200, ≤1 redirect, canonical self-referential, host `www` + `https`.
- Global: `robots.txt`, `sitemap.xml` alineado 1:1 con inventario, sin rutas excluidas.
- Flag `--print-routes` para exportar CSV del inventario.

```bash
npm run seo:audit
SEO_AUDIT_BASE_URL=http://localhost:3000 npm run seo:audit
node scripts/seo-audit.mjs --print-routes
```

### Verificación paso 3 (producción, corte 2026-05-19)

- **80 rutas** auditadas con PASS (canonical `www`, robots, sitemap coherentes).
- `robots.ts` y `next.config.ts` sin cambios (ya correctos).

### Excepción conocida: URL duplicada de intención

| Ruta | En sitemap | Canonical |
| --- | --- | --- |
| `/psicologo-especialista-ansiedad-chillan` | Sí (inventario 81) | Apunta a `/psicologo-ansiedad-chillan` |

**Acción recomendada antes o justo después del deploy:** sacar del sitemap o consolidar contenido; evita enviar al sitemap una URL que declara canonical a otra.

---

## 2. Patrón SEO aplicado en landings

### Componentes nuevos (solo orgánico)

| Archivo | Rol |
| --- | --- |
| `src/app/components/OrganicSeoScripts.tsx` | Breadcrumb visible + JSON-LD (LocalBusiness, BreadcrumbList, Service, FAQPage) |
| `src/lib/organic-page-seo.ts` | Helpers de metadata orgánica |

### Checklist por página (donde se aplicó)

- [x] `title` (query principal al inicio)
- [x] `description` (140–165 caracteres)
- [x] `canonical` → `www`
- [x] `openGraph`
- [x] `twitter.description` con `getTwitterDescription`
- [x] `Breadcrumb` visible + `BreadcrumbList`
- [x] `Service` + `FAQPage`
- [x] `localBusinessSchema` en páginas de intención local
- [x] CTA a `/agendar` (hero + cierre)
- [x] Bloque de confianza cerca del hero

### Arquitectura de intención (enlazado)

| Tipo | Destino | Uso |
| --- | --- | --- |
| **Transaccional** | `/psicologo-online-chillan` | «Psicólogo online», «Online», «Reservar online» |
| **Explicativo** | `/terapia-online` | «Cómo funciona la terapia online», guías |
| **Conversión** | `/agendar` | CTAs principales |
| **Autoridad** | `/perfil` | Confianza / EEAT |
| **Comparativa** | `/terapia-online-vs-presencial-chillan` | Modalidad vs presencial |

---

## 3. Páginas tocadas por bloque

### Paso 4 — Hub y modalidad (7)

| Ruta |
| --- |
| `/` |
| `/agendar` |
| `/perfil` |
| `/terapia-online` |
| `/psicologo-online-chillan` |
| `/terapia-online-vs-presencial-chillan` |
| `/cuando-ir-al-psicologo-chillan` |

**Destacado GSC:** title de `/psicologo-online-chillan` orientado a CTR (0% CTR, 11 impresiones, pos. ~4,8).

### Paso 5 — Money pages (9)

| Ruta |
| --- |
| `/consulta-psicologica-precio-chillan` |
| `/primera-consulta-psicologo-chillan` |
| `/psicologo-depresion-chillan` |
| `/terapia-de-pareja-chillan` |
| `/terapia-emdr-chillan` |
| `/psicologo-abuso-sexual-chillan` |
| `/mejor-psicologo-chillan-opiniones` |
| `/psicologo-centro-chillan` |
| `/psicologo-ansiedad-chillan` |

### Paso 6 — Resto orgánico (59)

Familias principales:

| Familia | Páginas |
| --- | ---: |
| `psicologo-*` | 38 |
| `tratamiento-*` | 7 |
| Otros (`ayuda-*`, `hora-*`, certificados, etc.) | 6 |
| `certificado-*` | 2 |
| `superar-*` | 2 |
| `terapia-*` (celos, control ira) | 2 |
| `emdr-autoadministrado` | 1 |

Scripts de migración reproducible:

- `scripts/apply-organic-seo-step6.mjs`
- `scripts/fix-transactional-online-links-step6.mjs`

**No modificadas en paso 6** (ya tenían patrón completo): `cuando-ir-al-psicologo-chillan`, `psicologo-hombres-chillan`.

### Paso 7 — Cluster alcoholismo (4 URLs, 1 plantilla)

| Ruta | Rol |
| --- | --- |
| `/alcoholismo-chillan` | Hub |
| `/psicologo-alcoholismo-chillan` | Spoke |
| `/tratamiento-alcoholismo-chillan` | Spoke |
| `/dejar-de-beber-chillan` | Spoke |

**Archivos:** `src/app/components/AlcoholismLandingPage.tsx`, `src/lib/alcoholism-pages.ts`.

**Plantilla compartida con Ads:** No. `AlcoholismLandingPage` solo la usan las 4 rutas orgánicas.

---

## 4. Informe GSC (paso 9)

- Regenerado: `docs/gsc-informe-2026-05-19.md` (`2026-05-19T22:44:46Z`).
- Nueva sección: **«Impacto esperado post-plan SEO orgánico»** (palancas ↔ hallazgos GSC).
- Scripts: `scripts/gsc-report.mjs`, `scripts/gsc-report-md.mjs` (`npm run gsc:report`).

### Contexto GSC al momento del cambio (baseline)

| Métrica | Valor (28 días) |
| --- | --- |
| Clics | 5 (−54,5% vs periodo anterior) |
| Impresiones | 71 (−46,2%) |
| CTR | 7,04% |
| Posición media | 6,1 |
| Sitemap enviado | 81 URLs, **0 indexadas** (API) |
| Hosts en impresiones | `www` + apex sin `www` |

---

## 5. Archivos nuevos y de infraestructura

### Creados (principales)

```
src/lib/organic-routes.ts
src/lib/organic-page-seo.ts
src/app/components/OrganicSeoScripts.tsx
scripts/apply-organic-seo-step6.mjs
scripts/fix-transactional-online-links-step6.mjs
scripts/gsc-report.mjs
scripts/gsc-report-md.mjs
docs/gsc-informe-2026-05-19.md
docs/seo-organico-changelog-2026-05-19.md   ← este archivo
planes/seo-web-organica.md
```

### Modificados (principales)

```
src/app/sitemap.ts
scripts/seo-audit.mjs
src/app/components/AlcoholismLandingPage.tsx
src/lib/alcoholism-pages.ts
~75× src/app/**/page.tsx (landings orgánicas)
```

### Sin tocar (regla de alcance)

```
src/app/ads/**          → 0 archivos modificados
```

---

## 6. Criterios de aceptación del plan

| Criterio | Estado |
| --- | --- |
| Ninguna URL orgánica indexable fuera de sitemap | ✅ (inventario 81; revisar especialista-ansiedad) |
| Ninguna URL excluida dentro de sitemap | ✅ |
| Canonical `www` en landings indexables | ✅ |
| Roles de intención separados (online transaccional vs explicativo) | ✅ |
| Enlaces «Online» transaccionales → `/psicologo-online-chillan` | ✅ |
| Cero cambios en `src/app/ads/**` | ✅ |
| QA final (`tsc`, eslint, audit) documentado | ⏸️ Paso 8 no ejecutado |

---

## 7. Pendiente post-changelog

> Varios ítems se cerraron o movieron el **2026-07-23** (ver changelog de esa fecha). Lo que sigue vigente:

1. **Retomar paso 8** (`tsc` / lint / `seo:audit`) — sigue abierto.
2. ~~Resolver soft duplicate especialista-ansiedad~~ → **301** aplicado 23 jul (verificar en prod tras deploy).
3. **A1 GSC** post-deploy: URL Inspection money pages + reenviar sitemap.
4. **Monitoreo GSC** post-metas (~14–28 días): CTR online/ansiedad/adulto/pareja; imp. pareja; hosts solo `www`.
5. Autoridad local (GBP / reseñas) — fuera de código.

---

## 8. Comandos útiles

```bash
# Auditoría SEO completa
npm run seo:audit

# Informe GSC Markdown
node --env-file=.env.local scripts/gsc-report-md.mjs

# TypeScript
npx tsc --noEmit
```

---

## Referencias

- Plan: [`planes/seo-web-organica.md`](../planes/seo-web-organica.md)
- Informe GSC: [`docs/gsc-informe-2026-05-19.md`](./gsc-informe-2026-05-19.md)
- Inventario: [`src/lib/organic-routes.ts`](../src/lib/organic-routes.ts)

---

*Generado el 2026-05-19 como registro del trabajo SEO orgánico. Actualizar este archivo si se completan el paso 8, el deploy o correcciones posteriores.*
