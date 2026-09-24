# Informe psicológico OS10

Landing: `/ads/informe-psicologico-os10`

Copy, precios y datos del profesional viven en `content.ts`. La página no tiene textos sueltos.

## Cambiar el precio

En `content.ts`, edita `precios.particular` (ancla, hoy 40000). El hero, las cards, el sticky, la meta description y el schema toman ese número.

`precios.cuenta` (20000) solo aparece si pones `mostrarPrecioCuenta: true`. Hoy no hay login, así que queda oculto.

Empresas: la card no muestra precio ni mínimo. Solo contacto por WhatsApp (`mensajes.empresas`).

## WhatsApp

Por defecto usa `56968257817`. Para otro número, en `.env.local`:

```
NEXT_PUBLIC_WHATSAPP=569XXXXXXXX
NEXT_PUBLIC_PHONE=
```

El mensaje prearmado está en `mensajes.particular` y `mensajes.empresas`.

## Nombre, ciudad, RUT, registro, foto

En `profesional`:

- `nombre`, `rol`, `ciudad`, `email`
- `rut` y `registroSuperintendencia`: si los dejas vacíos, el footer no inventa un número. Cuando los completes, se muestran.
- `fotoSrc`: `/yo.png` usa la foto del sitio. Otra ruta de `public/` también sirve.
- `anosAtencionClinica`: años de atención clínica. `null` oculta la cifra.
- `evaluacionesOs10`: `null` oculta “+X evaluaciones”. No pongas un número que no sea real.

## H1 para Ads

En `content.ts`, `h1Variantes.a` y `h1Variantes.b`. La que se ve es `h1Activa` (`"a"` o `"b"`). `view_landing` manda `h1_variant` al dataLayer.

## Conversiones (Google)

El GTM del sitio ya carga en `src/app/layout.tsx` (`GTM-N3DXMKTR`). No agregues otro contenedor.

| Evento | Cuándo | Para qué |
|---|---|---|
| `whatsapp_lead` | Clic en cualquier botón con `data-wa-track` | Conversión primaria de Google Ads (label `sVwoCKLepeEbEIHgncVC`) |
| `click_whatsapp` | Los mismos botones de esta landing, salvo Empresas | Evento extra |
| `click_empresas` | “Cotizar para mi empresa” | También abre WhatsApp y dispara `whatsapp_lead` |
| `view_landing` | Al abrir la página | Incluye `h1_variant` |

`NEXT_PUBLIC_GTM_ID` en `.env.example` es referencia. El ID real sigue en el layout.

## Agenda

No hay formulario. La persona agenda por WhatsApp. La landing no pide nombre, teléfono, correo ni ciudad.

## Deploy

Esta ruta sale con el resto del sitio en Vercel. No es un proyecto aparte.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000/ads/informe-psicologico-os10`.

La landing va con `noindex`, igual que el resto de `/ads`.
