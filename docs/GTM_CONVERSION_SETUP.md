# Configuración GTM para Conversiones de Google Ads

## Resumen

Este documento describe la configuración correcta de Google Tag Manager para trackear conversiones de clicks en WhatsApp hacia Google Ads.

---

## Arquitectura del Tracking

```
[Usuario hace click en WhatsApp]
         ↓
[WhatsAppButton.tsx intercepta con preventDefault]
         ↓
[Push a dataLayer: { event: "whatsapp_lead", eventCallback, eventTimeout }]
         ↓
[GTM recibe el evento y dispara etiquetas]
         ↓
[Conversion Linker + Google tag + Conversión Google Ads se ejecutan]
         ↓
[GTM llama a eventCallback cuando TODAS las etiquetas terminan]
         ↓
[Se abre WhatsApp en nueva pestaña]
```

---

## Checklist de Configuración en GTM

### 1. Conversion Linker (CRÍTICO)

| Campo | Valor |
|-------|-------|
| **Tipo de etiqueta** | Conversion Linker |
| **Trigger** | `Initialization - All Pages` |
| **Habilitar vinculación entre dominios** | Según necesidad |

> ⚠️ **IMPORTANTE**: El Conversion Linker DEBE disparar en `Initialization`, NO en `Page View`. Esto asegura que esté listo antes de cualquier evento de conversión.

### 2. Google tag (gtag.js / AW-...)

| Campo | Valor |
|-------|-------|
| **Tipo de etiqueta** | Google tag |
| **Tag ID** | `AW-17861931009` |
| **Trigger** | `Initialization - All Pages` |

> ⚠️ **IMPORTANTE**: También debe disparar en `Initialization` para que la configuración de Google Ads esté lista antes de las conversiones.

### 3. Conversión Google Ads – Click WhatsApp

| Campo | Valor |
|-------|-------|
| **Tipo de etiqueta** | Google Ads Conversion Tracking |
| **Conversion ID** | `AW-17861931009` |
| **Conversion Label** | `BLWaCO73vt8bEIHgncVC` |
| **Trigger** | Custom Event: `whatsapp_lead` |

**Configuración del Trigger Custom Event:**

| Campo | Valor |
|-------|-------|
| **Tipo de trigger** | Custom Event |
| **Nombre del evento** | `whatsapp_lead` |
| **Este trigger se activa en** | Todos los eventos personalizados |

---

## Variables de Data Layer (Opcional)

Si quieres capturar datos adicionales:

| Variable | Tipo | Nombre Data Layer |
|----------|------|-------------------|
| DLV - whatsapp_label | Data Layer Variable | `label` |
| DLV - event_id | Data Layer Variable | `event_id` |

---

## Validación en Tag Assistant

### Paso 1: Verificar carga inicial (evento `gtm.js`)

1. Abre Tag Assistant (preview mode) en GTM
2. Navega a cualquier página del sitio
3. En el evento `gtm.js` (o `Initialization`), verifica que aparezcan como **"Succeeded"**:
   - ✅ Conversion Linker
   - ✅ Google tag (AW-17861931009)

### Paso 2: Verificar conversión (evento `whatsapp_lead`)

1. Haz click en el botón de WhatsApp
2. En Tag Assistant, busca el evento `whatsapp_lead`
3. Verifica que aparezca como **"Succeeded"**:
   - ✅ Google Ads Conversion Tracking (o el nombre que le hayas puesto)

### Paso 3: Verificar en Network tab

1. Abre DevTools > Network
2. Filtra por `google` o `ads`
3. Al hacer click en WhatsApp, deberías ver una request a:
   - `googleads.g.doubleclick.net/pagead/conversion/...`
   - Con parámetros `aw_id=17861931009` y `aw_label=BLWaCO73vt8bEIHgncVC`

---

## Troubleshooting

### "La etiqueta de conversión aparece como Fallida"

**Causas comunes:**

1. **Conversion Linker no está en Initialization**
   - Solución: Cambiar trigger a `Initialization - All Pages`

2. **Google tag no está en Initialization**
   - Solución: Cambiar trigger a `Initialization - All Pages`

3. **La página se cierra antes de completar el hit**
   - Solución: Ya está resuelta con `eventCallback` + `eventTimeout`

4. **Bloqueadores de ads**
   - Solución: No hay solución técnica, pero el % de usuarios con bloqueadores es bajo

### "El evento whatsapp_lead no aparece en Tag Assistant"

**Verificar:**

1. Que `window.dataLayer` exista (abrir consola y escribir `dataLayer`)
2. Que el componente `WhatsAppButton` esté siendo usado
3. Que no haya errores de JavaScript en consola

### "WhatsApp no se abre"

**Verificar:**

1. Que el `href` sea válido (ej: `https://wa.me/56968257817`)
2. Que el navegador no esté bloqueando popups
3. Revisar consola por errores

---

## Código del Componente

El componente `WhatsAppButton.tsx` usa las siguientes características de GTM:

```typescript
window.dataLayer.push({
  event: "whatsapp_lead",      // Nombre del evento custom
  label: href,                 // URL de WhatsApp (para debug)
  event_id: generateEventId(), // ID único para deduplicación
  eventCallback: openOnce,     // Se ejecuta cuando GTM termina TODAS las etiquetas
  eventTimeout: 1500,          // Fallback: abre WhatsApp después de 1.5s si GTM no responde
});
```

**¿Cómo funciona `eventCallback`?**

GTM intercepta este campo especial y:
1. Dispara todas las etiquetas asociadas al evento
2. Espera a que TODAS completen (incluyendo requests de red)
3. Ejecuta `eventCallback` cuando todo termina
4. Si pasa `eventTimeout` ms sin terminar, ejecuta `eventCallback` de todas formas

---

## Configuración en Next.js

GTM se carga globalmente en `src/app/layout.tsx`:

```tsx
import { GoogleTagManager } from "@next/third-parties/google";

// En el body:
<GoogleTagManager gtmId="GTM-N3DXMKTR" />
```

Esto usa el componente oficial de Next.js que:
- Carga GTM con `strategy="afterInteractive"` (no bloquea render)
- Inyecta el script de forma optimizada
- Es compatible con App Router

---

## IDs de Referencia

| Recurso | ID |
|---------|-----|
| GTM Container | `GTM-N3DXMKTR` |
| Google Ads Account | `AW-17861931009` |
| Conversion Label | `BLWaCO73vt8bEIHgncVC` |
| Evento Custom | `whatsapp_lead` |
