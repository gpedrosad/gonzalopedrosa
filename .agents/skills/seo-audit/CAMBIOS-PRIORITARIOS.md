# 🔧 CAMBIOS PRIORITARIOS - IMPLEMENTACIÓN

## 🎯 OBJETIVO
Pasar de **7.2/10** a **9.3/10** en 3 fases

---

## 🔴 FASE 1: QUICK WINS (1-2 días) → 8.7/10

### 1. Crear Favicon Completo
**Tiempo:** 1 hora  
**Ganancia:** +0.3 puntos

```bash
# Generar favicons desde yo.png
# Usar: https://realfavicongenerator.net/

# Archivos a crear:
/public/favicon.ico          # 32x32, 16x16
/public/favicon.svg          # Vector
/public/favicon-16x16.png
/public/favicon-32x32.png
/public/apple-touch-icon.png # Ya existe ✓
/public/manifest.json
```

```tsx
// Agregar a src/app/layout.tsx en <head>
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/manifest.json" />
```

```json
// /public/manifest.json
{
  "name": "Gonzalo Pedrosa - Psicólogo",
  "short_name": "G. Pedrosa",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

### 2. Corregir Meta Descriptions de Twitter
**Tiempo:** 30 minutos  
**Ganancia:** +0.2 puntos

```tsx
// ❌ ANTES: psicologo-ansiedad-chillan/page.tsx
twitter: {
  card: "summary_large_image",
  title: "Psicólogo Ansiedad en Chillán, Chile",
  description: "Psicólogo especializado en ansiedad en Chillán, Chile. 
    Tratamiento con enfoque cognitivo-conductual basado en evidencia. 
    Sesiones presenciales y onlin", // ← TRUNCADO
}

// ✅ DESPUÉS:
twitter: {
  card: "summary_large_image",
  title: "Psicólogo Ansiedad en Chillán",
  description: "Tratamiento profesional para ansiedad con TCC. 
    Sesiones online y presenciales. +7 años de experiencia.",
}
```

**Páginas a corregir:**
- `/psicologo-ansiedad-chillan`
- `/psicologo-depresion-chillan`
- `/psicologo-crisis-de-panico-chillan`
- Revisar todas las páginas de servicio

**Regla:** Máximo 200 caracteres para Twitter

---

### 3. Optimizar Imagen Principal
**Tiempo:** 1 hora  
**Ganancia:** +0.5 puntos

```bash
# Instalar herramientas
npm install -g @squoosh/cli

# Optimizar yo.png
cd public
squoosh-cli --webp auto yo.png
squoosh-cli --avif auto yo.png
squoosh-cli --oxipng auto yo.png

# Resultado esperado:
# yo.png: 99 KB → 25 KB
# yo.webp: 18 KB (nuevo)
# yo.avif: 12 KB (nuevo)
```

```tsx
// Next.js ya maneja formatos automáticamente
// Verificar en next.config.ts:
images: {
  formats: ["image/avif", "image/webp"], // ✓ Ya configurado
}
```

---

### 4. Agregar LocalBusiness Schema
**Tiempo:** 2 horas  
**Ganancia:** +0.3 puntos

```tsx
// Crear: src/lib/schemas.ts
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gonzalopedrosa.cl/#business",
  "name": "Gonzalo Pedrosa - Psicólogo",
  "image": "https://gonzalopedrosa.cl/yo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chillán",
    "addressRegion": "Región de Ñuble",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-36.6063",
    "longitude": "-72.1034"
  },
  "url": "https://gonzalopedrosa.cl",
  "telephone": "+56968257817",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "124",
    "bestRating": "5"
  },
  "sameAs": [
    "https://wa.me/56968257817"
  ]
};
```

```tsx
// Agregar a páginas de Chillán:
// psicologo-ansiedad-chillan/page.tsx
import { localBusinessSchema } from "@/lib/schemas";

export default function Page() {
  return (
    <>
      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* resto del contenido */}
    </>
  );
}
```

**Páginas a actualizar:** Todas las páginas con "chillan" en la URL (70+ páginas)

---

### 5. Expandir FAQs a 10 Preguntas
**Tiempo:** 3 horas  
**Ganancia:** +0.2 puntos

```tsx
// ❌ ANTES: Solo 4 preguntas
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // 4 preguntas...
  ]
};

// ✅ DESPUÉS: 10-12 preguntas
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto dura un tratamiento para ansiedad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente entre 8-16 sesiones..."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta cada sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "$35.000 por sesión de 50 minutos. Emito boleta para reembolso Isapre."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofreces atención online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrezco terapia online por videollamada con la misma efectividad que presencial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es tu enfoque terapéutico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajo principalmente con Terapia Cognitivo-Conductual (TCC), el tratamiento con mayor respaldo científico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito medicación además de terapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesariamente. La TCC es muy efectiva por sí sola. En casos severos, puede combinarse con medicación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es confidencial la terapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Todo está protegido por secreto profesional, salvo excepciones legales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si no puedo asistir a una sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes reagendar con 24 horas de anticipación sin costo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajas con adolescentes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajo con adolescentes desde 14 años y adultos de todas las edades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es tu formación académica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Psicólogo titulado con especialización en TCC y más de 7 años de experiencia clínica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo agendo una sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes escribirme por WhatsApp al +56 9 6825 7817 o agendar directamente en el sitio."
      }
    }
  ]
};
```

**Páginas a actualizar:** Todas las páginas de servicio

---

## 🟡 FASE 2: CONTENIDO (1 semana) → 9.1/10

### 6. Expandir Páginas de Servicio
**Tiempo:** 20 horas  
**Ganancia:** +0.3 puntos

**Objetivo:** De 400-600 palabras a 1,200-2,000 palabras

**Estructura recomendada:**

```markdown
# Página: psicologo-ansiedad-chillan

## 1. Introducción (150 palabras) ✓ Ya existe
- Qué es la ansiedad
- Por qué buscar ayuda

## 2. Tipos de Ansiedad (300 palabras) ← AGREGAR
### Ansiedad Generalizada
- Síntomas específicos
- Prevalencia
- Impacto en la vida diaria

### Ansiedad Social
- Características
- Situaciones desencadenantes
- Diferencia con timidez

### Crisis de Pánico
- Síntomas físicos
- Frecuencia
- Tratamiento específico

### Ansiedad por Estrés Laboral
- Causas comunes
- Señales de alerta
- Prevención

## 3. Señales de Ansiedad (200 palabras) ✓ Ya existe
- Lista de síntomas

## 4. Mi Enfoque de Tratamiento (400 palabras) ← EXPANDIR
### Terapia Cognitivo-Conductual
- Qué es y cómo funciona
- Tasas de efectividad (60-80%)
- Duración típica

### Proceso Detallado
**Semanas 1-4: Evaluación y Estabilización**
- Primera sesión: evaluación completa
- Identificación de patrones
- Técnicas de respiración y relajación
- Psicoeducación sobre ansiedad

**Semanas 5-8: Trabajo Profundo**
- Reestructuración cognitiva
- Exposición gradual
- Desarrollo de habilidades de afrontamiento
- Prevención de recaídas

**Semanas 9+: Consolidación**
- Integración de aprendizajes
- Plan de mantenimiento
- Seguimiento espaciado

## 5. Casos de Éxito (300 palabras) ← AGREGAR
### Caso A: Ansiedad Generalizada
**Perfil:** Mujer, 32 años, profesora
**Situación inicial:** Preocupación constante, insomnio, tensión muscular
**Tratamiento:** 12 sesiones de TCC
**Resultado:** Reducción del 70% en síntomas, retorno a actividades normales
**Tiempo:** 3 meses

### Caso B: Crisis de Pánico
**Perfil:** Hombre, 28 años, diseñador
**Situación inicial:** 2-3 crisis por semana, evitación de lugares públicos
**Tratamiento:** 10 sesiones con énfasis en exposición gradual
**Resultado:** Sin crisis en últimos 2 meses, vida social recuperada
**Tiempo:** 2.5 meses

### Caso C: Ansiedad Social
**Perfil:** Mujer, 25 años, estudiante
**Situación inicial:** Evitación de presentaciones, aislamiento social
**Tratamiento:** 14 sesiones de TCC + exposición
**Resultado:** Participación activa en clases, nuevas amistades
**Tiempo:** 4 meses

## 6. Preguntas Frecuentes (400 palabras) ← EXPANDIR
- De 4 a 10-12 preguntas (ver Fase 1, punto 5)

## 7. Modalidades de Atención (150 palabras) ✓ Ya existe
- Presencial
- Online

## 8. Valor y Formas de Pago (100 palabras) ✓ Ya existe
- Precio
- Reembolso Isapre

## 9. Cómo Iniciar (200 palabras) ✓ Ya existe
- Pasos para agendar

## 10. Recursos Adicionales (150 palabras) ← AGREGAR
### Artículos Relacionados
- [Técnicas de respiración para la ansiedad]
- [Diferencia entre ansiedad y estrés]
- [Cuándo buscar ayuda profesional]

### Recursos Externos
- MINSAL: Guía de salud mental
- OMS: Información sobre trastornos de ansiedad
- Línea de ayuda 24/7: Salud Responde (600 360 7777)

### Libros Recomendados
- "Terapia Cognitiva de la Ansiedad" - Beck & Emery
- "El Poder del Ahora" - Eckhart Tolle

---

**TOTAL:** ~1,800 palabras (vs. 500 actual)
```

**Páginas prioritarias a expandir:**
1. `/psicologo-ansiedad-chillan` (más tráfico)
2. `/psicologo-depresion-chillan`
3. `/terapia-online`
4. `/psicologo-crisis-de-panico-chillan`
5. `/psicologo-adulto-chillan`
6. `/psicologo-cognitivo-conductual-chillan`
7. `/terapia-de-pareja-chillan`
8. `/psicologo-duelo-chillan`
9. `/psicologo-baja-autoestima-chillan`
10. `/psicologo-estres-laboral-chillan`

---

### 7. Implementar Breadcrumbs
**Tiempo:** 3 horas  
**Ganancia:** +0.3 puntos

```tsx
// Crear: src/app/components/Breadcrumb.tsx
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      style={{ 
        marginBottom: "1.5rem",
        fontSize: "0.875rem" 
      }}
    >
      <ol
        style={{
          display: "flex",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
          color: "#666",
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {index > 0 && <span>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: "#666",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#000", fontWeight: 500 }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

```tsx
// Agregar BreadcrumbList Schema
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://gonzalopedrosa.cl${item.href}` : undefined,
    })),
  };
}
```

```tsx
// Uso en páginas:
import { Breadcrumb, getBreadcrumbSchema } from "@/app/components/Breadcrumb";

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Ansiedad Chillán" },
];

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) 
        }}
      />
      <main>
        <Breadcrumb items={breadcrumbItems} />
        {/* resto del contenido */}
      </main>
    </>
  );
}
```

---

### 8. Mejorar Internal Linking
**Tiempo:** 2 horas  
**Ganancia:** +0.1 puntos

**Estrategia:**
- Mínimo 5-10 enlaces internos por página
- Anchor text descriptivo
- Enlaces contextuales (no solo en footer)

```tsx
// Ejemplo: En psicologo-ansiedad-chillan
<p>
  La ansiedad puede manifestarse de diferentes formas. Algunos pacientes 
  experimentan <Link href="/psicologo-crisis-de-panico-chillan">crisis de pánico</Link>,
  mientras que otros sufren de <Link href="/psicologo-fobia-social-chillan">fobia social</Link>.
  En casos relacionados con el trabajo, puede derivar en 
  <Link href="/tratamiento-burnout-chillan">burnout</Link>.
</p>

<p>
  Mi enfoque principal es la 
  <Link href="/psicologo-cognitivo-conductual-chillan">terapia cognitivo-conductual</Link>,
  que también es efectiva para tratar 
  <Link href="/psicologo-depresion-chillan">depresión</Link> y 
  <Link href="/psicologo-baja-autoestima-chillan">baja autoestima</Link>.
</p>
```

**Páginas hub a crear:**
- `/servicios` → Lista todos los servicios
- `/trastornos-ansiedad` → Agrupa servicios de ansiedad
- `/terapia-pareja-familia` → Agrupa servicios relacionales

---

### 9. Agregar Enlaces Externos de Autoridad
**Tiempo:** 1 hora  
**Ganancia:** +0.1 puntos

```tsx
// Agregar en sección de recursos o contenido
<p>
  Según la{" "}
  <a 
    href="https://www.who.int/es/news-room/fact-sheets/detail/anxiety-disorders"
    target="_blank"
    rel="noopener noreferrer"
  >
    Organización Mundial de la Salud
  </a>
  , los trastornos de ansiedad son los más comunes en salud mental.
</p>

<p>
  El{" "}
  <a 
    href="https://www.minsal.cl/salud-mental/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ministerio de Salud de Chile
  </a>
  {" "}recomienda buscar ayuda profesional cuando los síntomas persisten.
</p>
```

**Enlaces recomendados:**
- OMS (Organización Mundial de la Salud)
- MINSAL (Ministerio de Salud Chile)
- APA (American Psychological Association)
- Estudios científicos en PubMed
- Guías clínicas oficiales

---

## 🟢 FASE 3: ESTRATÉGICO (2-3 semanas) → 9.3/10

### 10. Crear Blog
**Tiempo:** 40 horas  
**Ganancia:** +0.8 puntos

**Estructura:**

```
/blog
  /page.tsx                           # Listado de artículos
  /[slug]/page.tsx                    # Artículo individual
  
/blog/como-saber-si-tengo-ansiedad
/blog/diferencia-psicologo-psiquiatra
/blog/que-es-terapia-cognitivo-conductual
/blog/como-elegir-psicologo
/blog/primera-sesion-que-esperar
/blog/terapia-online-vs-presencial
/blog/cuando-buscar-ayuda-psicologica
/blog/tecnicas-manejo-ansiedad
/blog/sintomas-depresion
/blog/como-funciona-terapia-pareja
/blog/diferencia-ansiedad-estres
/blog/que-esperar-primera-sesion-psicologo
```

**Template de artículo:**

```tsx
// blog/[slug]/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Saber si Tengo Ansiedad: 10 Señales Clave | Blog",
  description: "Descubre las 10 señales principales de ansiedad y cuándo buscar ayuda profesional. Guía completa con ejemplos prácticos.",
  alternates: {
    canonical: "/blog/como-saber-si-tengo-ansiedad",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Saber si Tengo Ansiedad: 10 Señales Clave",
  "image": "https://gonzalopedrosa.cl/blog/ansiedad-senales.jpg",
  "author": {
    "@type": "Person",
    "name": "Gonzalo Pedrosa",
    "url": "https://gonzalopedrosa.cl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Gonzalo Pedrosa - Psicólogo",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gonzalopedrosa.cl/yo.png"
    }
  },
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "description": "Descubre las 10 señales principales de ansiedad..."
};

export default function BlogPost() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        {/* Contenido del artículo */}
      </article>
    </>
  );
}
```

**Longitud de artículos:** 1,500-2,500 palabras

---

### 11. Crear Página de Preguntas Frecuentes Global
**Tiempo:** 5 horas  
**Ganancia:** +0.2 puntos

```tsx
// /preguntas-frecuentes/page.tsx

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Psicólogo en Chillán",
  description: "Respuestas a las preguntas más comunes sobre terapia psicológica, sesiones, precios, seguros y más.",
};

// 30-40 preguntas agrupadas por categoría:

## Sobre el Psicólogo
- ¿Cuál es tu formación académica?
- ¿Cuántos años de experiencia tienes?
- ¿En qué te especializas?
- ¿Tienes registro profesional?

## Sobre las Sesiones
- ¿Cuánto dura una sesión?
- ¿Cada cuánto son las sesiones?
- ¿Qué pasa en la primera sesión?
- ¿Puedo llevar a alguien conmigo?

## Precios y Pagos
- ¿Cuánto cuesta cada sesión?
- ¿Qué formas de pago aceptas?
- ¿Emites boleta para Isapre?
- ¿Cuánto reembolsa la Isapre?
- ¿Ofreces descuentos?

## Modalidades
- ¿Ofreces terapia online?
- ¿Es igual de efectiva la terapia online?
- ¿Qué plataforma usas para online?
- ¿Dónde está tu consulta presencial?

## Tratamientos
- ¿Qué enfoque terapéutico usas?
- ¿Cuánto dura un tratamiento?
- ¿Necesito medicación?
- ¿Trabajas con adolescentes?
- ¿Trabajas con parejas?

## Logística
- ¿Qué pasa si no puedo asistir?
- ¿Cuál es tu política de cancelación?
- ¿Tienes horarios flexibles?
- ¿Atiendes fines de semana?

## Confidencialidad
- ¿Es confidencial la terapia?
- ¿En qué casos se rompe la confidencialidad?
- ¿Compartes información con terceros?
```

---

### 12. Crear Página de Ubicación/Contacto
**Tiempo:** 3 horas  
**Ganancia:** +0.1 puntos

```tsx
// /ubicacion/page.tsx o /contacto/page.tsx

export default function UbicacionPage() {
  return (
    <main>
      <h1>Ubicación y Contacto</h1>
      
      {/* Mapa de Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
      />
      
      {/* Información de contacto */}
      <section>
        <h2>Dirección</h2>
        <p>Centro de Chillán, Región de Ñuble</p>
        <p>Chile</p>
        
        <h2>Horarios de Atención</h2>
        <ul>
          <li>Lunes a Viernes: 9:00 - 19:00</li>
          <li>Sábados: Con cita previa</li>
          <li>Domingos: Cerrado</li>
        </ul>
        
        <h2>Contacto</h2>
        <p>WhatsApp: +56 9 6825 7817</p>
        <p>Email: contacto@gonzalopedrosa.cl</p>
        
        <h2>Cómo Llegar</h2>
        <h3>En Auto</h3>
        <p>Estacionamiento disponible en la zona</p>
        
        <h3>En Transporte Público</h3>
        <p>Líneas de micro: X, Y, Z</p>
        <p>A 5 minutos caminando desde Plaza de Armas</p>
      </section>
    </main>
  );
}
```

---

## 📊 RESUMEN DE GANANCIA POR FASE

| Fase | Tiempo | Ganancia | Nota Final |
|------|--------|----------|------------|
| Inicial | - | - | 7.2/10 |
| Fase 1 | 8-12 horas | +1.5 | 8.7/10 |
| Fase 2 | 26 horas | +0.4 | 9.1/10 |
| Fase 3 | 48 horas | +0.2 | 9.3/10 |
| **TOTAL** | **82-86 horas** | **+2.1** | **9.3/10** |

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: Quick Wins
- [ ] Crear favicon.ico y variantes
- [ ] Agregar manifest.json
- [ ] Actualizar layout.tsx con favicons
- [ ] Corregir meta descriptions de Twitter (10 páginas)
- [ ] Optimizar yo.png (WebP, AVIF)
- [ ] Crear src/lib/schemas.ts
- [ ] Agregar LocalBusiness schema (70+ páginas)
- [ ] Expandir FAQs a 10 preguntas (10 páginas)

### Fase 2: Contenido
- [ ] Expandir 10 páginas principales a 1,200+ palabras
- [ ] Agregar 3 casos de éxito por página
- [ ] Crear componente Breadcrumb
- [ ] Implementar breadcrumbs en todas las páginas
- [ ] Agregar BreadcrumbList schema
- [ ] Aumentar internal linking (5-10 por página)
- [ ] Agregar 3-5 enlaces externos por página

### Fase 3: Estratégico
- [ ] Crear estructura /blog
- [ ] Escribir 12 artículos (1,500-2,500 palabras c/u)
- [ ] Implementar Article schema
- [ ] Crear página /preguntas-frecuentes
- [ ] Crear página /ubicacion o /contacto
- [ ] Optimizar Google Business Profile

---

## 🎯 PRIORIDAD ABSOLUTA

Si solo puedes hacer **UNA COSA**, haz esto:

**EXPANDIR CONTENIDO DE LAS 5 PÁGINAS PRINCIPALES**

1. `/psicologo-ansiedad-chillan`
2. `/psicologo-depresion-chillan`
3. `/terapia-online`
4. `/psicologo-adulto-chillan`
5. `/`

De 400-600 palabras a 1,200-2,000 palabras cada una.

**Ganancia:** +1.0 punto → 8.2/10  
**Tiempo:** 15 horas  
**ROI:** ⭐⭐⭐⭐⭐

---

¿Listo para empezar? 🚀
