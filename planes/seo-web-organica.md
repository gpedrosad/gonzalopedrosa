# Plan SEO integral para toda la web orgánica (excluyendo completamente `src/app/ads/**`)

## Resumen
Objetivo: mejorar CTR, consistencia técnica, arquitectura de intención y enlazado interno de toda la web orgánica pública, usando el informe de GSC y el estado actual del repo, **sin tocar ninguna landing dentro de `src/app/ads/**`**.

Regla de alcance obligatoria:
- **No editar ningún archivo dentro de `src/app/ads/**`.**
- **No cambiar metadatos, copy, CTAs, links, schemas, layouts ni comportamiento de ninguna landing de Ads.**
- **No modificar componentes/helpers compartidos si eso puede alterar el render o metadata de Ads.**
- Si una mejora orgánica requiere tocar una abstracción compartida usada por Ads, el implementador debe **evitarlo** y mover esa mejora a capas orgánicas específicas.

## Cambios de implementación
### 1. Base técnica orgánica, con exclusión explícita de Ads
- Crear un inventario único de rutas **orgánicas indexables** y usarlo como fuente de verdad para auditoría y sitemap.
- El inventario debe **excluir explícitamente**:
  - `src/app/ads/**`
  - `src/app/interno/**`
  - `src/app/links/**`
  - `src/app/sitelink/**`
- Rehacer `src/app/sitemap.ts` para salir de ese inventario orgánico y asegurar:
  - host `www`
  - protocolo `https`
  - solo rutas indexables
  - cero rutas Ads
- Extender `scripts/seo-audit.mjs` para auditar únicamente el inventario orgánico:
  - 200 final
  - máximo 1 redirect hop
  - canonical self-referential
  - host `www`
  - `robots.txt` correcto
  - `sitemap.xml` sin rutas excluidas
- Mantener `www.gonzalopedrosa.cl` como host canónico.
- No tocar `src/app/ads/layout.tsx` ni ninguna página de Ads para resolver esto.

### 2. Estandarización SEO de todas las landings orgánicas
- Aplicar el patrón SEO completo a todas las páginas orgánicas públicas de servicio/condición:
  - `title`
  - `description`
  - `canonical`
  - `openGraph`
  - `twitter.description` con `getTwitterDescription`
  - `Breadcrumb` visible
  - `BreadcrumbList`
  - `Service`
  - `FAQPage`
  - `localBusinessSchema` cuando la intención sea local
- Reusar `src/lib/schemas.ts` y `src/app/components/Breadcrumb.tsx` donde ya corresponde.
- No modificar helpers compartidos si están consumidos por Ads; si una mejora necesita una variante, implementarla desde las rutas orgánicas.
- Tratar el cluster de alcoholismo por su plantilla compartida, pero **verificar antes** que esa plantilla no sea usada por Ads. Si solo la usa orgánico, sí entra en alcance.

### 3. Reorganización de intención y enlazado interno orgánico
- Definir roles canónicos de intención:
  - `/psicologo-online-chillan` = landing transaccional orgánica de “psicólogo online”
  - `/terapia-online` = página explicativa de modalidad
  - `/terapia-online-vs-presencial-chillan` = comparativa
  - `/agendar` = conversión
  - `/perfil` = autoridad/confianza
- Cambiar en páginas orgánicas los enlaces “Online” de intención transaccional para que apunten a `/psicologo-online-chillan`, no a `/terapia-online`.
- Mantener `/terapia-online` para anchors explicativos, no transaccionales.
- Ajustar navegación orgánica de alto peso:
  - Home
  - `/agendar`
  - páginas money prioritarias
- No agregar, quitar ni retocar links dentro de `src/app/ads/**`.

### 4. Programa de copy y CTR para todo el sitio orgánico
- Reescritura prioritaria de páginas orgánicas de más valor:
  - `/`
  - `/agendar`
  - `/psicologo-online-chillan`
  - `/terapia-online`
  - `/terapia-online-vs-presencial-chillan`
  - `/consulta-psicologica-precio-chillan`
  - `/primera-consulta-psicologo-chillan`
  - `/psicologo-depresion-chillan`
  - `/terapia-de-pareja-chillan`
  - `/terapia-emdr-chillan`
  - `/psicologo-abuso-sexual-chillan`
  - `/mejor-psicologo-chillan-opiniones`
  - `/psicologo-centro-chillan`
  - `/psicologo-ansiedad-chillan`
- Reglas editoriales para todas las landings orgánicas:
  - query principal al inicio del `title`
  - `description` concreta, 140-165 caracteres
  - respuesta directa a la intención en el primer bloque
  - CTA a `/agendar` arriba y al cierre
  - bloque de confianza cerca del hero
  - contenido mobile-first y escaneable
- No crear nuevas URLs en esta fase.
- No replicar ninguno de estos cambios en las páginas de Ads.

### 5. Orden exacto de ejecución
- Paso 1: inventario de rutas orgánicas indexables.
- Paso 2: refactor de `sitemap.ts` y ampliación de `seo-audit.mjs`, excluyendo Ads.
- Paso 3: verificación de canonical/host/robots/sitemap.
- Paso 4: Home, Agendar, Perfil y páginas de modalidad.
- Paso 5: money pages orgánicas prioritarias.
- Paso 6: resto de páginas orgánicas por familia.
- Paso 7: cluster de alcoholismo si su plantilla no toca Ads.
- Paso 8: corrida final de TypeScript, lint y auditoría SEO.
- Paso 9: regenerar informe GSC Markdown y documentar impacto esperado.

## Test plan
- `npx tsc --noEmit`
- `eslint` sobre archivos tocados
- `scripts/seo-audit.mjs` sobre el inventario orgánico completo
- Verificación manual por muestreo de:
  - Home
  - Agendar
  - Online transaccional
  - Online explicativa
  - Comparativa
  - una `psicologo-*`
  - una `terapia-*`
  - una `tratamiento-*`
  - una del cluster alcoholismo
- Criterios de aceptación:
  - ninguna URL orgánica indexable fuera de sitemap
  - ninguna URL excluida dentro de sitemap
  - canonical `www` en todas las páginas orgánicas indexables
  - roles de intención separados entre páginas orgánicas
  - enlaces “Online” transaccionales apuntando a `/psicologo-online-chillan`
  - **cero archivos modificados en `src/app/ads/**`**
  - **cero cambios funcionales o de metadata en landings Ads**

## Supuestos y defaults
- “Toda la web” significa toda la web **orgánica pública indexable**, no Ads ni áreas internas/noindex.
- `src/app/ads/**` queda totalmente congelado.
- Si una mejora orgánica requiere tocar un componente compartido usado por Ads, esa mejora debe reubicarse a una capa orgánica específica o posponerse.
- `www` sigue siendo la única variante canónica.
