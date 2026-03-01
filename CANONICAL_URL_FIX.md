# Corrección de URLs Canónicas - Error de Google Search Console

## Problema Identificado

Google Search Console reportaba el error **"Página alternativa con etiqueta canónica adecuada"** para todas las páginas del sitio.

### Causa del Error

El sitio estaba siendo accedido con `www.gonzalopedrosa.cl`, pero las etiquetas canonical apuntaban a `gonzalopedrosa.cl` (sin www). Esto creaba una discrepancia que Google interpretaba como:

- La página `https://www.gonzalopedrosa.cl/` es una alternativa de `https://gonzalopedrosa.cl/`
- Google no sabía cuál versión indexar como principal

## Solución Implementada

### 1. Actualización de la URL Canónica Base

**Archivo: `src/lib/site-config.ts`**
```typescript
// ANTES
export const CANONICAL_ORIGIN = "https://gonzalopedrosa.cl";

// DESPUÉS
export const CANONICAL_ORIGIN = "https://www.gonzalopedrosa.cl";
```

### 2. Actualización de JSON-LD Estructurado

**Archivo: `src/app/layout.tsx`**

Todas las URLs en el schema estructurado ahora usan `www`:
- `@id`: `https://www.gonzalopedrosa.cl/#persona`
- `url`: `https://www.gonzalopedrosa.cl/`
- `image`: `https://www.gonzalopedrosa.cl/yo.png`

### 3. Actualización de Todas las Páginas

Se actualizaron **76 páginas** con URLs hardcodeadas en sus metadatos OpenGraph:

```typescript
// ANTES
openGraph: {
  url: "https://gonzalopedrosa.cl/terapia-de-pareja-chillan",
}

// DESPUÉS
openGraph: {
  url: "https://www.gonzalopedrosa.cl/terapia-de-pareja-chillan",
}
```

### 4. Redirección Permanente (301)

**Archivo: `src/middleware.ts`**

Se agregó una redirección 301 para forzar el uso de `www`:

```typescript
// Si la petición viene de gonzalopedrosa.cl (sin www), redirigir a www
if (hostname === "gonzalopedrosa.cl" && CANONICAL_HOST === "www.gonzalopedrosa.cl") {
  const url = request.nextUrl.clone();
  url.host = CANONICAL_HOST;
  return NextResponse.redirect(url, { status: 301 });
}
```

### 5. Actualización de Schemas Reutilizables

**Archivo: `src/lib/schemas.ts`**
```typescript
// ANTES
export const SITE_URL = "https://gonzalopedrosa.cl";

// DESPUÉS
export const SITE_URL = "https://www.gonzalopedrosa.cl";
```

## Archivos Modificados

1. `src/lib/site-config.ts` - URL canónica base
2. `src/lib/schemas.ts` - Schemas reutilizables
3. `src/app/layout.tsx` - JSON-LD estructurado
4. `src/middleware.ts` - Redirección 301
5. `src/app/*/page.tsx` - 76 páginas con metadatos OpenGraph
6. `scripts/update-seo.js` - Script de actualización SEO
7. `src/app/links/page.tsx` - Página de links

## Verificación

### Build Exitoso
```bash
npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (95/95)
```

### URLs Canónicas Actualizadas

Todas las páginas ahora tienen:
```html
<link rel="canonical" href="https://www.gonzalopedrosa.cl/[ruta]"/>
```

### Redirección Funcionando

Las peticiones a `gonzalopedrosa.cl` ahora redirigen automáticamente a `www.gonzalopedrosa.cl` con código 301 (permanente).

## Próximos Pasos

1. **Desplegar los cambios** a producción
2. **Esperar 24-48 horas** para que Google reindexe las páginas
3. **Solicitar reindexación** en Google Search Console:
   - Ir a "Inspección de URLs"
   - Ingresar algunas URLs clave
   - Hacer clic en "Solicitar indexación"
4. **Monitorear** el informe de cobertura en Search Console

## Resultado Esperado

Después del despliegue y reindexación:
- ✅ Todas las páginas indexadas con `www.gonzalopedrosa.cl`
- ✅ Error "Página alternativa con etiqueta canónica adecuada" resuelto
- ✅ URLs sin `www` redirigen automáticamente a versión con `www`
- ✅ Consistencia total en todas las etiquetas canonical, OpenGraph y JSON-LD

## Fecha de Implementación

1 de marzo de 2026
