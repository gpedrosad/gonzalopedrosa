# SEO Changelog — gonzalopedrosa.cl

Historial anterior de lotes CTR en docs/seo/ctr-tracking.md.

## 2026-11-28 — Contenido nuevo: ataque de ansiedad vs. ataque de pánico + refuerzo de ERP para el TOC

### `/preguntas/ataque-de-ansiedad-o-ataque-de-panico` (nueva)
- Ficha informativa que responde la comparación que hoy ninguna URL cubre. Las queries caían en `/preguntas/sintomas-fisicos-de-la-ansiedad`, que no la responde (GSC, 90 d al 26/11/2026):
  - "ataque de ansiedad es lo mismo que ataque de panico": 4 impr, pos 28,2
  - "ataque de panico y ansiedad es lo mismo": 3 impr, pos 24,3
  - "ataque de panico y ataque de ansiedad es lo mismo": 3 impr, pos 26,0
  - "ataque de ansiedad y panico es lo mismo": 2 impr, pos 25,5
  - "ataque de panico ataque de ansiedad": 1 impr, pos 23,0
  - "ansiedad generalizada con ataques de panico": 3 impr, pos 26,0
  - "ataque de panico por ansiedad": 1 impr, pos 16,0
- Estructura: answer directa (término clínico vs. expresión de uso común), 6 secciones (qué es un ataque de pánico, qué suele querer decir "ataque de ansiedad", diferencias en bullets, síntomas en común, ansiedad generalizada y pánico, qué hacer en el momento), 5 FAQs alineadas con las queries, safety (131 / urgencia / *4141) y fuentes NICE CG113 + DIPRECE.
- Anticanibalización: no repite la definición extensa de `/preguntas/que-es-un-ataque-de-panico`, ni el listado de `/preguntas/sintomas-fisicos-de-la-ansiedad`, ni el paso a paso de `/guias/ataque-de-panico-que-hacer`; enlaza a las tres y a `/preguntas/ansiedad-o-estres`. Sin enlaces a páginas locales.
- Agregada a `src/lib/organic-routes.ts` (priority 0.72, lastModified 2026-11-28).
- Enlaces entrantes: related de `/preguntas/sintomas-fisicos-de-la-ansiedad` y de `/preguntas/que-es-un-ataque-de-panico`.

### `/preguntas/que-es-la-erp-para-el-toc` (refuerzo)
- GSC 28 d: 56 impr, pos 11,9 (crecimiento x5,6). Queries 90 d: "terapia erp toc" 8 impr pos 33,2; "erp toc" 3 pos 14,0; "erp psicologia" 2 pos 35,0; "terapia erp" 2 pos 6,0; "terapia para toc" 1 pos 30,0; "what does erp stand for therapy" 1 pos 6,0.
- Sin cambios en title, h1, description ni answer (rutina CTR aparte).
- 2 secciones nuevas: "ERP en distintos tipos de TOC" (contaminación, comprobación, simetría/orden, obsesiones de pensamiento puro con exposición imaginada o escrita y rituales mentales) y "ERP y terapia cognitivo-conductual" (ERP como forma de TCC, coherente con NICE CG31; enlaces a TCC y a obsesiones y compulsiones).
- 3 FAQs nuevas: significado de ERP en psicología (Exposure and Response Prevention), ERP vs. TCC, ERP cuando las obsesiones son solo pensamientos.
- updated y lastModified: 2026-10-30 → 2026-11-28.

Medir: 2026-12-12 (14 d) y 2026-12-26 (28 d)

## 2026-11-26 — Contenido nuevo: boost de /preguntas/que-hace-un-especialista-en-estres-postraumatico

Hoy no se crea página nueva: todas las intenciones con demanda real en GSC ya tienen URL.

### `src/lib/informational-content.ts` → `/preguntas/que-hace-un-especialista-en-estres-postraumatico`

- GSC 28 d: 70 impresiones, posición 17,2, con un ritmo ~7x mayor que el previo.
- Queries 90 d de esta URL: "especialista en estres postraumatico" (36 impr, pos 15,0), "especialista en tept" (22 impr, pos 12,4), "psicologo estres postraumatico" (15 impr, pos 26,4), "psicologo tept" (10 impr, pos 19,5).
- A nivel sitio: "especialista en tept" suma 65 impr, pos 15,4, y a veces la toma /terapia-emdr-chillan (página local). "psicologo tept" suma 32 impr, pos 36. El boost da a la ficha informativa cobertura explícita de la variante "psicólogo".
- Nueva sección "Psicólogo o psiquiatra para el estrés postraumático": diferencia general de roles (el psiquiatra es médico y puede indicar fármacos; el psicólogo evalúa y hace psicoterapia; a veces trabajan en conjunto). Enlaza a /guias/psicologo-o-psiquiatra. Sin cifras.
- Nueva sección "Qué preguntar al buscar un psicólogo para estrés postraumático": preguntas informativas para cualquier profesional (formación en terapias centradas en el trauma, evaluación, preparación antes de trabajar el recuerdo, qué pasa si hay desborde, videollamada con lugar privado). No recomienda a nadie ni al sitio.
- 3 FAQs nuevas: «¿Un psicólogo puede tratar el estrés postraumático?», «¿Psicólogo o psiquiatra para el TEPT?», «¿Cómo sé si un psicólogo trabaja con trauma?».
- Related: se suman /guias/psicologo-o-psiquiatra y /preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia.
- `updated` pasa a "2026-11-26". No se tocan title, h1, description ni answer (rutina CTR). No se tocan /ads ni /sitelink.

Medir: 2026-12-10 (14 d) y 2026-12-24 (28 d). Revisar la posición de "psicologo estres postraumatico" y "psicologo tept" en esta URL, y si "especialista en tept" se consolida aquí en vez de /terapia-emdr-chillan.

### `/guias/psicologo-o-psiquiatra`
- Enlace nuevo en relatedGuides hacia /preguntas/que-hace-un-especialista-en-estres-postraumatico (enlace interno al boost; sin cambios de texto ni fecha).
