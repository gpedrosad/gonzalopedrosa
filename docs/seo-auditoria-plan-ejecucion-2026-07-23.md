# Auditoría SEO + plan de ejecución — 2026-07-23

| Campo | Valor |
| --- | --- |
| **Sitio** | `https://www.gonzalopedrosa.cl` (propiedad GSC `sc-domain:gonzalopedrosa.cl`) |
| **Alcance** | Web orgánica indexable (79 URLs). Excluye `/ads/**`, `/interno/**`, `/links/**`, `/sitelink/**` |
| **Fuentes** | `npm run seo:audit`, `scripts/gsc-report-md.mjs`, HTML en producción, plan `planes/seo-web-organica.md` |
| **Informe GSC** | [`docs/gsc-informe-2026-07-23.md`](./gsc-informe-2026-07-23.md) |
| **Changelog previo** | [`docs/seo-organico-changelog-2026-05-19.md`](./seo-organico-changelog-2026-05-19.md) |
| **Changelog esta tanda** | [`docs/seo-organico-changelog-2026-07-23.md`](./seo-organico-changelog-2026-07-23.md) |
| **Self-learn (ops corto)** | [`self-learn/seo/INDEX.md`](../self-learn/seo/INDEX.md) |

---

## Resumen ejecutivo

La base técnica orgánica está **sana**: 79/79 rutas con 200, canonical `www` + `https`, `robots.txt` y `sitemap.xml` alineados 1:1 con el inventario. Ads van con `noindex`. El cuello de botella ya no es crawl/canonical: es **visibilidad e indexación efectiva + CTR en money pages + recuperación de páginas que perdieron impresiones**.

| Métrica (28 días) | 11 jun → 9 jul | 25 jun → 23 jul | Lectura |
| --- | ---: | ---: | --- |
| Clics | 9 | **11** | Ligera subida |
| Impresiones | 69 | **103** | Recuperación parcial vs julio temprano; aún bajo |
| CTR | 13,04% | **10,68%** | Sigue alto; hay URLs en 0% |
| Posición media | 7,4 | **10,3** | Empeora (~3 posiciones) |

**Nota global (hoy):** ~**7 / 10** en fundamentos técnicos; ~**4 / 10** en volumen orgánico y cobertura de demanda. El sitio está listo para rankear; falta foco en las 8–12 URLs que ya reciben impresiones y en señales de autoridad local.

### Estado de prioridades (actualizado post-código 23 jul)

| # | Prioridad | Estado |
| --- | --- | --- |
| 1 | Indexación real en GSC (Inspection + reenviar sitemap) | ⬜ Manual post-deploy |
| 2 | Soft duplicate especialista-ansiedad → 301 | ✅ Código (`next.config.ts`) |
| 3 | CTR metas (online, ansiedad, adulto, pareja, alcoholismo) | ✅ Código |
| 4 | Enlazado a ganadoras / online transaccional | ✅ Parcial (adulto + home) |
| 5 | Autoridad local (GBP, reseñas, citaciones) | ⬜ Pendiente (mayor palanca de volumen) |

---

## Hallazgos

### Técnico (impacto alto si falla; hoy mayormente OK)

| Issue | Impacto | Evidencia | Estado |
| --- | --- | --- | --- |
| Canonical / host / HTTPS | Alto | `seo:audit` PASS en 79 rutas; apex → `www` 308 | ✅ Resuelto |
| Sitemap vs inventario | Alto | 79 URLs en XML = inventario; sin Ads | ✅ Resuelto |
| Ads indexables por error | Alto | `/ads/*` sirve `noindex, nofollow` | ✅ OK |
| Sitemap “0 indexadas / 80 enviadas” en API | Medio–Alto | GSC API desde mayo; home sí sale `PASS / Enviada e indexada` | ⚠️ Validar en UI (suele ser desfase/bug de conteo API) |
| Sitemap falso `.../terapia-de-pareja-chillan` | Medio | Presente en informes hasta 9 jul; **ausente** en corte 23 jul | ✅ Parece limpiado; confirmar en UI |
| Soft duplicate ansiedad | Medio | Antes: URL viva con canonical cruzado. Ahora: **301** en `next.config.ts` → `/psicologo-ansiedad-chillan` | ✅ Código (verificar prod) |
| `/psicologo-hombres-chillan` | Bajo–Medio | 301 → `/psicologo-adulto-chillan`, pero aún hay impresiones residuales | ⏳ Propagación |
| Crawl budget en `/ads/` | Bajo | `robots.txt` solo bloquea `/interno/`; Ads se rastrean aunque no indexen | Opcional |

### On-page / rendimiento orgánico

| Issue | Impacto | Evidencia | Fix |
| --- | --- | --- | --- |
| CTR 0% con impresiones | Alto | `psicologo-ansiedad-chillan` 0/11 (gap vs CTR esperado ~3,5%); también online 0/13, adulto 0/9, pareja 0/8, alcoholismo/dejar-de-beber 0/6 | Reescribir title + meta + primer bloque |
| Caída pareja | Alto | `terapia-de-pareja-chillan`: ~58 imp. (jun) → 8 imp. (corte actual); −2 clics vs periodo previo | Reforzar contenido + enlaces internos + reindex |
| Online en posición débil | Alto | `psicologo-online-chillan` pos. media ~23 (antes ~5 en corte 9 jul) | Revisar intención vs Ads, enlazado, frescura |
| Ganadoras sin escalar | Medio | Home 4 clics / TOC 3 / EMDR 2 | Intern linking + FAQ/schema ya presentes; pedir indexación de variantes |
| Marca con CTR 0% | Medio | Query `gonzalo pedrosa` pos. ~1,7–4,5 sin clics | Title home/perfil más marca + snippet claro |
| Sin rich results en GSC | Medio | Search appearance vacío en informe | Validar FAQ/LocalBusiness en Rich Results Test |
| Paso 8 del plan orgánico abortado | Bajo–Medio | Changelog 19 may: sin `tsc`/eslint/QA final documentado | Cerrar QA |

### Contenido / autoridad

- Muchas landings locales (~79) con poco tráfico: riesgo de **thin/near-duplicate** ante Google si no hay diferenciación real y enlazado.
- E-E-A-T depende de perfil, reseñas, Google Business Profile y menciones locales (fuera del HTML).
- Cluster alcoholismo ya tiene impresiones (hub + dejar-de-beber) pero **0 clics**: oportunidad de CTR, no de crear más URLs.

---

## Plan de ejecución (pasos a seguir)

### Fase A — Crítico (esta semana, 1–2 días)

#### A1. Indexación en Search Console (manual + API)

**Por qué:** El API sigue reportando 0/80 indexadas en el sitemap; hay que contrastar con la UI y forzar descubrimiento de money pages.

**Ejecutar:**

1. Abrir GSC → Indexación → Sitemaps → confirmar solo `https://www.gonzalopedrosa.cl/sitemap.xml` (Success).
2. Si el sitemap falso de pareja reaparece → `npm run gsc:cleanup:auth` (una vez) y `npm run gsc:cleanup:sitemaps`.
3. URL Inspection (solicitar indexación) para, como mínimo:
   - `/`
   - `/psicologo-ansiedad-chillan`
   - `/psicologo-online-chillan`
   - `/terapia-de-pareja-chillan`
   - `/tratamiento-toc-chillan`
   - `/terapia-emdr-chillan`
   - `/psicologo-adulto-chillan`
   - `/agendar`
4. En Indexación → Páginas: anotar motivos de “no indexadas” para URLs del sitemap.
5. Reenviar sitemap (o “Volver a enviar”) para forzar `lastDownloaded` (hoy sigue en 2026-06-08 según API).

**Hecho cuando:** Home + ≥5 money pages aparecen como “En Google” en URL Inspection; conteo UI de indexadas > 0 (aunque API diga 0).

#### A2. Cerrar soft duplicate de ansiedad

**Por qué:** Dos URLs compiten por la misma intención; una ya canibaliza con canonical externo.

**Ejecutar (elegir una, preferida 1):**

1. **Preferido:** redirect 301 en `next.config.ts`  
   `/psicologo-especialista-ansiedad-chillan` → `/psicologo-ansiedad-chillan`
2. Alternativa: `robots: { index: false }` + quitar enlaces internos a la URL vieja.
3. Alinear Open Graph `url` con el canonical final (hoy apunta a la URL especialista).

**No crear** nuevas landings de ansiedad.

#### A3. Quick wins de CTR (titles + meta)

Prioridad por impresiones y 0 clics (corte 25 jun–23 jul):

| URL | Imp. | Acción |
| --- | ---: | --- |
| `/psicologo-online-chillan` | 13 | Title más clickable (precio/Isapre/hoy); meta con CTA |
| `/psicologo-ansiedad-chillan` | 11 | Query al inicio; beneficio + modalidad; evitar genérico |
| `/psicologo-adulto-chillan` | 9 | Incluir “hombres/adulto” sin keyword stuffing (absorbe redirect) |
| `/terapia-de-pareja-chillan` | 8 | Recuperar CTR; mencionar Chillán + online/presencial |
| `/alcoholismo-chillan` + `/dejar-de-beber-chillan` | 6+6 | Meta orientada a intención “dejar de beber / ayuda” |

Reglas: title ~50–60 chars; description 140–165; H1 = intención; primer párrafo responde la query.

Skills: `meta-tags-optimizer` / título-meta del repo. **No tocar** `src/app/ads/**`.

---

### Fase B — Alto impacto (próximas 2 semanas)

#### B1. Reforzar ganadoras (contenido + enlaces)

Páginas a potenciar (ya convierten clics):

- `/` (4 clics)
- `/tratamiento-toc-chillan` (3)
- `/terapia-emdr-chillan` (2)
- `/psicologo-obesidad-chillan` (1)
- `/agendar`, `/perfil` (confianza)

**Ejecutar:**

1. Desde home y hub de servicios, enlaces con ancla descriptiva a TOC, EMDR, obesidad, ansiedad, pareja, online.
2. En cada money page: bloque “También te puede ayudar” → 3–5 spokes relacionados + `/agendar`.
3. Cluster alcoholismo: enlaces hub↔spoke ya existentes; revisar anclas y CTA.

#### B2. Recuperar terapia de pareja

**Ejecutar:**

1. Revisar title/H1/primer bloque vs SERP “terapia de pareja Chillán”.
2. Asegurar FAQ útiles + schema (ya hay patrón `OrganicSeoScripts`).
3. Enlaces desde home, adulto, ansiedad, agendar.
4. Tras deploy: URL Inspection → solicitar indexación.

#### B3. Validar schema / rich results

**Ejecutar** (no confiar solo en curl/`web_fetch`):

1. [Rich Results Test](https://search.google.com/test/rich-results) en home, ansiedad, TOC, pareja, online.
2. Corregir errores críticos de FAQ / LocalBusiness / Breadcrumb.
3. Revisar GSC → Mejoras tras 1–2 semanas.

#### B4. Cerrar paso 8 del plan orgánico (QA)

```bash
npx tsc --noEmit
npm run lint
npm run seo:audit
```

Muestreo manual: home, agendar, online, terapia-online, una `psicologo-*`, una `tratamiento-*`, alcoholismo.

---

### Fase C — Crecimiento (2–6 semanas)

#### C1. Autoridad y local (fuera del código, crítico para volumen)

1. Google Business Profile: categorías, descripción, posts, fotos, UTM a money pages.
2. Pedir reseñas reales (estrellas ayudan CTR en local pack).
3. NAP consistente (dirección/teléfono) entre web, GBP y directorios.
4. 5–10 menciones/enlaces locales (directorios salud, colegios, blogs Chillán/Ñuble).

#### C2. No crear más URLs hasta saturación de las actuales

Umbral sugerido antes de programmatic nuevo: **≥30–40 clics orgánicos / 28 días** o **≥10 money pages con ≥20 impresiones**. Mientras tanto, mejorar profundidad de las existentes.

#### C3. Opcional: ahorrar crawl en Ads

En `robots.ts`, valorar `disallow: ["/interno/", "/ads/"]` (Ads ya son `noindex`). Solo si no afecta herramientas de preview de Ads que necesiten fetch.

#### C4. Monitoreo quincenal

```bash
npm run gsc:report
node --env-file=.env.local scripts/gsc-report-md.mjs
npm run seo:audit
```

Comparar contra este documento y `docs/gsc-informe-2026-07-23.md`.

KPIs a vigilar:

- Clics e impresiones (28 días)
- Impresiones de pareja, online, ansiedad
- CTR de URLs con ≥10 impresiones
- Hosts (solo `www`)
- Errores de sitemap

---

## Orden exacto de trabajo (checklist)

- [ ] **A1** GSC: sitemaps limpios + URL Inspection money pages + reenviar sitemap *(manual en Search Console)*
- [x] **A2** 301 `/psicologo-especialista-ansiedad-chillan` → `/psicologo-ansiedad-chillan` *(2026-07-23, `next.config.ts`)*
- [x] **A3** Titles/metas: home, online, ansiedad, adulto, pareja, alcoholismo + dejar-de-beber *(2026-07-23)*
- [x] **B1** Enlazado: adulto → ganadoras + online transaccional; home + alcoholismo *(2026-07-23)*
- [ ] **B2** Contenido/recuperación pareja *(más allá del meta)*
- [ ] **B3** Rich Results Test + fixes schema
- [ ] **B4** `tsc` + lint + `seo:audit` (cerrar paso 8)
- [ ] **C1** GBP + reseñas + citaciones
- [ ] **C4** Informe GSC cada 14 días

### Cambios de código aplicados 2026-07-23

| Área | Archivos |
| --- | --- |
| Redirect soft duplicate | `next.config.ts` |
| CTR metas | `page.tsx` (home), `psicologo-online-chillan`, `psicologo-ansiedad-chillan`, `psicologo-adulto-chillan`, `terapia-de-pareja-chillan`, `src/lib/alcoholism-pages.ts` |
| Enlazado | `psicologo-adulto-chillan` (online → `/psicologo-online-chillan` + TOC/EMDR/pareja/obesidad), home (+ Alcoholismo) |

---

## Fuera de alcance (explícito)

- No modificar landings ni layout de `src/app/ads/**` en este plan orgánico.
- No “arreglar” el conteo 0 indexadas del API sin contrastar la UI de GSC.
- No lanzar decenas de landings nuevas mientras el índice efectivo y el CTR de las actuales estén flojos.

---

## Comandos de referencia

```bash
# Auditoría técnica producción
npm run seo:audit

# Inventario CSV
node scripts/seo-audit.mjs --print-routes

# GSC consola + Markdown
npm run gsc:report
node --env-file=.env.local scripts/gsc-report-md.mjs

# Limpiar sitemaps erróneos (scope escritura)
npm run gsc:cleanup:auth
npm run gsc:cleanup:sitemaps
```

Panel interno: `/interno/gsc` (si `GSC_DASHBOARD_SECRET` está activo, usar `?key=...`).

---

## Impacto esperado (realista)

| Horizonte | Resultado plausible |
| --- | --- |
| 2 semanas | Indexación clara de money pages; menos canibalización ansiedad; +CTR en 2–3 URLs |
| 4–8 semanas | 15–30 clics / 28 días si se sostienen TOC/EMDR/home y recuperan pareja/online/ansiedad |
| 3 meses | Depende más de GBP/reseñas/enlaces que de más landings |

Baseline actual: **11 clics / 103 impresiones / 28 días** (`docs/gsc-informe-2026-07-23.md`).
