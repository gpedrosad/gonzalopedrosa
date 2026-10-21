# Changelog SEO orgánico (ops desde repo)

Formato: `YYYY-MM-DD` · qué · cómo. Una viñeta por cambio.

## 2026-10-20

- Lote de marca, alcohol consolidado y dos preguntas (depresión y trauma). Detalle: [lote](../../docs/seo-lote-2026-10-20.md).

## 2026-10-18

- Lote apilado sobre el 17 oct: pie con `/guias` y `/preguntas`, tres fichas nuevas (familiar con alcohol, síntomas físicos de la ansiedad, señales de autoestima baja), títulos informativos en páginas con impresiones y 0 clics, y clúster alcohol diferenciado sin 301. Detalle: [lote](../../docs/seo-lote-2026-10-18.md).

## 2026-10-17

- Auditoría técnica: sitemap descubre `page.tsx` nuevas (sin tocar `/guias` ni `/preguntas`); canónico www por metadata y header `Link`; titles ≤60 y metas ≤155; OG en `/og.png`; BreadcrumbList y Person/LocalBusiness con registro RNPI, sin geopin ni sameAs inventados.
- CWV barato: `sizes` en retratos, sin `priority` en avatares chicos, favicon que faltaba, caché de imágenes y migas sin JS de cliente.

## 2026-10-13

- Auditoría inicial en producción: 79 URLs con canónicos correctos; navegación orgánica desde portada alcanza solo 49, con 18 enlaces directos y seis páginas a más de tres clics.
- Directorio por temas en portada: 77 destinos existentes en HTML, sin nuevas landings ni precarga masiva. Build limpio: 79/79 alcanzables, ninguna a más de tres clics.
- Cinco páginas de ansiedad conectadas con breadcrumbs y enlaces recíprocos; adultos enlaza cinco motivos antes sin enlace y amplía información de primera consulta.
- Registro profesional visible en portada y páginas principales; navegación online alineada con Chile; copy de navegación sin terminología técnica de SEO.
- Sitemap con fechas por página (13 actualizadas); robots bloquea interno en todos los grupos de bots.
- QA: build limpio, tsc y lint PASS (advertencias preexistentes). Nuevo `scripts/seo-navigation-audit.mjs` para repetir la comprobación.
- GSC no disponible: OAuth `invalid_grant`, requiere renovar autorización. Detalle: [informe](../../docs/seo-mejoras-2026-10-13.md).

## 2026-08-23

- **GSC 90d:** `docs/gsc-informe-2026-08-23.md` · 28 clics · 406 imp · CTR 6,9% · pos. 10,7.
- Mapa oportunidades: pareja/ansiedad/online/adulto primero; TEPT y bariátrica ya existen y están invisibles. Sin landings por ciudad.
- **Aplicado P0+P1** (sin URLs nuevas, sin `ads/**`): titles/H1 pareja, ansiedad, online (GEO Chile), adulto/hombres; enlaces obesidad↔bariátrica y EMDR↔TEPT; H1/FAQ ERP en TOC; hub alcohol más CTA. Mapa: [OPORTUNIDADES.md](./OPORTUNIDADES.md).

## 2026-08-04

- **GSC:** `docs/gsc-informe-2026-08-04.md` (9 clics · 136 imp. · CTR 6,6% · pos. 12,4).
- vs 28 jul: clics 11→9; imp. +10; CTR ↓ (más impresiones profundas); pareja 1 clic / 21 imp.
- A3 parcial: pareja CTR >0%; online/ansiedad/adulto siguen 0% (online pos. ~42).
- **seo:audit** PASS. Sitemap reenviado 28 jul (API aún «0/79» = ruido).

## 2026-07-28

- **GSC:** renovado OAuth + informe `docs/gsc-informe-2026-07-28.md` (11 clics · 126 imp. · CTR 8,7% · pos. 11,8).
- vs 23 jul: clics planos; impresiones +23; CTR ↓; pareja recupera 1 clic / 16 imp.; online 18 imp. aún 0 CTR.
- **seo:audit** PASS (79 URLs, 301/308 OK).
- Mail «Página con redirección» = esperado (www + especialista/hombres).
- Pendiente: reenviar sitemap (último download GSC 8 jun) + Inspection money pages.

## 2026-07-23

- **Limpieza docs:** borrados históricos no vigentes — `seo-audit/{INFORME,RESUMEN,CAMBIOS-*}.md`, `SEO-MEJORAS-COMPLETADAS.md`, `CANONICAL_URL_FIX.md`. README del skill apunta a `self-learn/seo` + docs vigentes.
- **Auditoría** documentada: `docs/seo-auditoria-plan-ejecucion-2026-07-23.md`.
- **GSC:** `docs/gsc-informe-2026-07-23.md` (11 clics · 103 imp. · CTR 10,7% · pos. 10,3).
- **A2:** 301 `/psicologo-especialista-ansiedad-chillan` → `/psicologo-ansiedad-chillan` (`next.config.ts`).
- **A3:** titles/metas CTR — home, online, ansiedad, adulto (+hombres), pareja, alcoholismo, dejar-de-beber.
- **B1:** adulto → online transaccional + chips TOC/EMDR/pareja/obesidad; home + Alcoholismo.
- **Self-learn:** carpeta `self-learn/seo/` creada.
- Changelog largo: `docs/seo-organico-changelog-2026-07-23.md`.
- Eval post-metas: [EVAL.md](./EVAL.md) (revisar ~6–20 ago).

## 2026-05-19

- Plan orgánico grande: inventario, sitemap, audit, patrón on-page ~75 landings, cluster alcoholismo.
- Detalle: `docs/seo-organico-changelog-2026-05-19.md` · plan `planes/seo-web-organica.md`.
- Paso 8 QA (`tsc`/lint) quedó abortado históricamente.
