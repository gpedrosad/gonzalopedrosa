# SEO · comandos

```bash
# Auditoría técnica prod (canonical, robots, sitemap = inventario)
npm run seo:audit

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
