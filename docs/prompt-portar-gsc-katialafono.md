# Prompt: portar Google Search Console a katialafono.cl

Copia todo el bloque de abajo y pégalo en Cursor en el repositorio de **katialafono.cl**.

---

## Prompt (copiar desde aquí)

```markdown
# Integrar Google Search Console como en gonzalopedrosa — katialafono.cl

## Objetivo
Portar al 100% la integración GSC del repo de referencia `/Users/gonzalo/gonzalopedrosa` a ESTE repositorio (katialafono.cl), con la misma cuenta de Google Cloud y el mismo Gmail de Search Console. Mismo flujo: OAuth local, scripts CLI, informe Markdown en `docs/`, panel interno Next.js en `/interno/gsc`.

**No usar MCP.** No cambiar landings públicas ni SEO on-page salvo que yo lo pida después.

## Propiedad GSC objetivo
- Dominio: **katialafono.cl**
- Variable: `GSC_SITE_URL=sc-domain:katialafono.cl`
- Si `npm run gsc:report` lista otra URL (p. ej. `https://www.katialafono.cl/`), usar exactamente la que devuelva la API en `.env.local`.

## Referencia (copiar/adaptar desde gonzalopedrosa)
Lee y replica estos archivos del repo referencia:

### Scripts
- `scripts/gsc-report.mjs`
- `scripts/gsc-report-md.mjs`

### Librerías
- `src/lib/gsc.ts`
- `src/lib/gsc-analysis.ts`
- `src/lib/gsc-dashboard-copy.ts`
- `src/lib/gsc-skill-helpers.ts`

### Panel interno
- `src/app/interno/page.tsx` (redirect a `/interno/gsc`)
- `src/app/interno/gsc/page.tsx`
- `src/app/interno/gsc/layout.tsx`
- `src/app/interno/gsc/loading.tsx`
- `src/app/interno/gsc/components/*` (todos los componentes Gsc*)

### Skill agente
- `.agents/skills/google-search-console/SKILL.md` (copiar tal cual)

### Config
- Crear `.env.example` con el bloque de abajo
- Asegurar `.secrets/` en `.gitignore` (como en referencia: línea `.secrets/`)

### Dependencia
En `package.json`:
- Añadir `"googleapis": "^171.4.0"` en dependencies si no existe
- Añadir scripts:

```json
"gsc:auth": "node --env-file=.env.local scripts/gsc-report.mjs --auth",
"gsc:report": "node --env-file=.env.local scripts/gsc-report.mjs",
"gsc:report:md": "node --env-file=.env.local scripts/gsc-report-md.mjs"
```

## Credenciales (misma cuenta Google — reutilizar, no duplicar proyecto)
El Gmail que administra GSC ya autorizó OAuth en gonzalopedrosa. En este repo:

**Opción A (recomendada): symlink**
```bash
ln -sf /Users/gonzalo/gonzalopedrosa/.secrets .secrets
```

**Opción B:** copiar solo estos archivos a `.secrets/`:
- `gcp-oauth-client.json`
- `gsc-oauth-token.json`
- (opcional) `gcp-service-account.json` si se usa modo service_account

No commitear `.secrets/` ni `.env.local`.

## `.env.example` (crear en la raíz de katialafono)
```env
# Copia a .env.local

GSC_AUTH_MODE=oauth
GOOGLE_OAUTH_CLIENT_PATH=.secrets/gcp-oauth-client.json
GSC_OAUTH_TOKEN_PATH=.secrets/gsc-oauth-token.json
GSC_SITE_URL=sc-domain:katialafono.cl

# Informes y panel (28 días por defecto)
GSC_DASHBOARD_DAYS=28
GSC_REPORT_DAYS=28
# GSC_BRAND_TERMS=katialafono

# Panel /interno/gsc — en producción usar clave en URL
# GSC_DASHBOARD_SECRET=genera-una-clave-larga-aleatoria

# Opcional: otro puerto si 53682 está ocupado al hacer auth
# GSC_OAUTH_PORT=53683
```

Crear `.env.local` copiando `.env.example` con los valores reales.

## Ajustes obligatorios al portar
1. En `scripts/gsc-report.mjs` y `scripts/gsc-report-md.mjs`, cambiar el fallback por defecto de `GSC_SITE_URL` de `gonzalopedrosa.cl` a `sc-domain:katialafono.cl` (por si falta `.env.local`).
2. En `src/lib/gsc.ts`, mismo cambio en el fallback de `getGscDashboardData` → `sc-domain:katialafono.cl`.
3. No dejar strings hardcodeados de gonzalopedrosa en UI del panel.
4. `robots` del layout `/interno/gsc`: `index: false` (ya viene en referencia).

## Verificación (ejecutar en orden)
```bash
npm install
# Si no hay token aún (symlink/copia debería bastar):
npm run gsc:auth
npm run gsc:report
npm run gsc:report:md
```

- `gsc:report` debe mostrar resumen, top queries/páginas y sitemaps de **katialafono.cl**.
- `gsc:report:md` debe generar `docs/gsc-informe-YYYY-MM-DD.md` con estructura igual al informe de referencia (`docs/gsc-informe-2026-05-19.md` en gonzalopedrosa): resumen ejecutivo, KPIs, marca vs no marca, CTR bajo, sitemaps, URL inspection, plan de acción.

Luego:
```bash
npm run dev
```
Abrir `http://localhost:3000/interno/gsc` (o `?key=...` si `GSC_DASHBOARD_SECRET` está definido).

## Skill y primer informe
1. Leer `.agents/skills/google-search-console/SKILL.md` antes de redactar el informe.
2. Tras el primer `gsc:report:md` exitoso, revisar el Markdown y corregir si falta alguna sección respecto al informe de referencia.

## Criterios de aceptación
- [ ] `npm run gsc:report` sin error y con datos de katialafono.cl
- [ ] `npm run gsc:report:md` genera informe en `docs/`
- [ ] `/interno/gsc` carga dashboard con mismas secciones que referencia
- [ ] `.secrets/` y `.env.local` ignorados por git
- [ ] Cero commits de secretos
- [ ] `npx tsc --noEmit` pasa (arreglar imports `@/` si el alias difiere en este repo)

## Alcance explícito
- SÍ: infra GSC (scripts, lib, panel, env example, skill, scripts npm)
- NO: MCP, cambios masivos de contenido SEO, páginas ads, sitemap del sitio (salvo que yo lo pida en otro paso)

## Entregable final
Resumen en español: archivos creados, comandos ejecutados, URL de propiedad GSC usada, ruta del informe generado, y cómo abrir el panel en local/producción.
```

---

## Notas (no copiar al otro repo)

| Tema | Detalle |
|------|---------|
| Misma cuenta | Con `ln -sf .../.secrets .secrets` no hace falta volver a `gsc:auth` si el token sigue válido y el Gmail ve la propiedad katialafono.cl en Search Console. |
| Propiedad en GSC | Debe existir `sc-domain:katialafono.cl` o `https://www.katialafono.cl/` en la misma cuenta; si falla, `gsc:report` lista las URLs disponibles. |
| Marca | Sin `GSC_BRAND_TERMS`, el análisis infiere `katialafono` del dominio. |
| Producción | Define `GSC_DASHBOARD_SECRET` y entra con `https://www.katialafono.cl/interno/gsc?key=...` |

## Referencia cruzada

- Informe ejemplo: [`docs/gsc-informe-2026-05-19.md`](./gsc-informe-2026-05-19.md)
- Repo origen: `/Users/gonzalo/gonzalopedrosa`
