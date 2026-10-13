# Mejoras de SEO orgánico · 13 de octubre de 2026

La principal oportunidad técnica era el enlazado: el recorrido de enlaces HTML
entre páginas del inventario orgánico solo alcanzaba 49 de las 79 URLs desde la
portada. El sitemap ya incluía todas y los canónicos eran correctos. Esta medida
describe navegación interna, no cantidad de páginas indexadas por Google.

## Cambios aplicados

- Portada: directorio de 77 destinos existentes, organizado en nueve temas con
  desplegables nativos. Los enlaces están en el HTML inicial, funcionan sin
  JavaScript y no precargan decenas de páginas. No se crearon nuevas landings.
- Ansiedad: cinco páginas conectadas entre sí (ansiedad, pánico, ansiedad social,
  agorafobia y ansiedad por la salud), con breadcrumbs coherentes en pantalla y
  JSON-LD. Se conservaron los enlaces a otros servicios. El enlace transaccional
  de pánico ahora apunta a la landing de psicólogo online.
- Adultos: cinco motivos de consulta que antes eran texto ahora enlazan a sus
  páginas. Se añadió información sobre la primera sesión, duración, precio,
  modalidades y boleta usando datos existentes del proyecto.
- Confianza: portada, ansiedad, adultos, online y pareja muestran el registro
  profesional 504978, acceso al registro público, perfil y primera consulta.
- Online: navegación y breadcrumbs con alcance Chile, coherente con el servicio.
- Navegación de pareja: se reemplazaron términos técnicos de SEO por textos
  comprensibles para el visitante y se eliminó un enlace duplicado al tema principal.
- Sitemap: `lastModified` específico en las 13 páginas cuyo contenido, navegación
  o breadcrumbs cambiaron. Las demás conservan su fecha previa.
- Robots: los ocho grupos bloquean `/interno`, incluida la ruta raíz. Antes los
  grupos específicos de bots solo declaraban `Allow: /` y no heredaban el bloqueo
  del grupo general.
- Nueva comprobación reproducible: `scripts/seo-navigation-audit.mjs` comprueba
  respuestas sin redirecciones, canónicos, noindex, H1 y profundidad de navegación.

Los enlaces descriptivos y las fechas de actualización corresponden a las
recomendaciones de [Google sobre enlaces rastreables](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
y [fechas lastmod en sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Validación

| Comprobación | Antes, producción | Build limpio con estas mejoras |
|---|---:|---:|
| URLs del inventario y sitemap | 79 | 79 |
| URLs comprobadas | 79 | 79 |
| Destinos con enlace HTML directo desde portada | 18 | 77 |
| URLs alcanzables desde portada por páginas orgánicas | 49 | 79 |
| URLs a más de tres clics | 6 | 0 |
| Respuestas 200, canónicos y H1 únicos | PASS | PASS |

- Build de producción: PASS, también en copia limpia de HEAD con únicamente los
  archivos de esta tanda. No se incluyeron cambios previos de Ads, sitelinks o layout.
- `npx tsc --noEmit`: PASS. Se ejecutó después del build para evitar conflictos
  con la regeneración de `.next/types`.
- `npm run lint`: cero errores; nueve advertencias preexistentes en `1688-helper`.
- Sitemap: 79 URLs; solo 13 con fecha 2026-10-13, las restantes sin cambio.
- Robots: bloqueo de interno en los ocho grupos.
- Ansiedad: enlaces recíprocos y JSON-LD parseable en las cinco páginas.
- Revisión visual en navegador: directorio expandible y enlaces visibles.

Comando para comprobar el resultado publicado:

```bash
node scripts/seo-navigation-audit.mjs
```

Para comprobar una vista previa local:

```bash
node scripts/seo-navigation-audit.mjs http://127.0.0.1:3108
```

## Limitación y medición posterior

La consulta a Search Console falló con `invalid_grant`. El último snapshot
disponible sigue siendo el del 23 de agosto de 2026. Renovar la autorización con
`npm run gsc:auth` permitirá medir impresiones, clics y CTR después del despliegue.
Estos cambios mejoran la navegación y la información disponible; no demuestran
todavía un aumento de posiciones ni tráfico. No se solicitó indexación ni se
validaron resultados enriquecidos con la herramienta de Google en esta tanda.
