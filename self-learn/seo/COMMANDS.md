# SEO · comandos

```bash
# Auditoría técnica prod (canonical, robots, sitemap = inventario)
npm run seo:audit

# Navegación orgánica: canónicos, H1, noindex y rutas a un máximo de 3 clics
node scripts/seo-navigation-audit.mjs

# Vista previa local (mantiene canónicos de producción)
node scripts/seo-navigation-audit.mjs http://127.0.0.1:3108

# Inventario CSV
node scripts/seo-audit.mjs --print-routes

# GSC consola
npm run gsc:report

# GSC → Markdown en docs/
node --env-file=.env.local scripts/gsc-report-md.mjs

# Limpiar sitemaps erróneos en GSC (scope escritura)
npm run gsc:cleanup:auth
npm run gsc:cleanup:sitemaps

# QA
npx tsc --noEmit
npm run lint
```

Panel: `/interno/gsc` (si hay `GSC_DASHBOARD_SECRET` → `?key=...`).

Inventario fuente: `src/lib/organic-routes.ts` → `src/app/sitemap.ts`.
