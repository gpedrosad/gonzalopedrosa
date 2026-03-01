#!/usr/bin/env node
/**
 * Script para actualizar SEO en todas las páginas de servicios
 * Agrega: Open Graph, Twitter Cards, FAQPage Schema
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../src/app');

// Páginas a ignorar (ya tienen OG o no son de servicios)
const IGNORE = ['page.tsx', 'layout.tsx', 'perfil', 'links', 'agendar', 'api', 'components'];

// Función para extraer FAQs del contenido
function extractFAQs(content) {
  const faqs = [];
  // Buscar patrones de <details> con <summary>
  const detailsRegex = /<details[^>]*>[\s\S]*?<summary[^>]*>([^<]+)<\/summary>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/details>/g;
  let match;
  
  while ((match = detailsRegex.exec(content)) !== null) {
    const question = match[1].trim();
    // Limpiar el texto de la respuesta
    let answer = match[2]
      .replace(/<[^>]+>/g, '') // Quitar tags HTML
      .replace(/\s+/g, ' ')    // Normalizar espacios
      .replace(/&ldquo;|&rdquo;/g, '"')
      .replace(/&nbsp;/g, ' ')
      .trim();
    
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }
  
  return faqs;
}

// Función para extraer metadata existente
function extractMetadata(content) {
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  const canonicalMatch = content.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
  
  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descMatch ? descMatch[1] : '',
    canonical: canonicalMatch ? canonicalMatch[1] : ''
  };
}

// Función para generar el schema de FAQPage
function generateFAQSchema(faqs) {
  if (faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

// Función para actualizar un archivo de página
function updatePage(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(appDir, filePath);
  const folderName = path.dirname(relativePath);
  
  // Verificar si ya tiene openGraph
  if (content.includes('openGraph:') && content.includes('faqSchema')) {
    console.log(`⏭️  Saltando ${folderName} (ya actualizado)`);
    return false;
  }
  
  const metadata = extractMetadata(content);
  const faqs = extractFAQs(content);
  
  if (!metadata.title || !metadata.canonical) {
    console.log(`⚠️  Saltando ${folderName} (sin metadata completo)`);
    return false;
  }
  
  // Crear título corto para Twitter (sin el sufijo)
  const shortTitle = metadata.title.replace(/\s*\|\s*Gonzalo Pedrosa$/i, '').trim();
  
  // Crear descripción corta para Twitter (máx 200 chars)
  const shortDesc = metadata.description.length > 200 
    ? metadata.description.substring(0, 197) + '...'
    : metadata.description;
  
  let updatedContent = content;
  
  // 1. Agregar import de Script si no existe
  if (!content.includes("import Script from")) {
    updatedContent = updatedContent.replace(
      /import type { Metadata } from "next";/,
      'import type { Metadata } from "next";\nimport Script from "next/script";'
    );
  }
  
  // 2. Agregar openGraph y twitter al metadata si no existe
  if (!content.includes('openGraph:')) {
    const ogBlock = `
  openGraph: {
    title: "${metadata.title}",
    description: "${shortDesc.replace(/"/g, '\\"')}",
    url: "https://www.gonzalopedrosa.cl${metadata.canonical}",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${shortTitle}",
    description: "${shortDesc.replace(/"/g, '\\"').substring(0, 150)}",
  },`;
    
    // Insertar después del canonical
    updatedContent = updatedContent.replace(
      /(canonical:\s*["'`][^"'`]+["'`],?\s*\n?\s*\},)/,
      `$1${ogBlock}`
    );
  }
  
  // 3. Agregar FAQSchema si hay FAQs y no existe
  if (faqs.length > 0 && !content.includes('faqSchema')) {
    const faqSchema = generateFAQSchema(faqs);
    const schemaCode = `
// FAQPage Schema para rich snippets en Google
const faqSchema = ${JSON.stringify(faqSchema, null, 2)};
`;
    
    // Insertar antes de la función del componente
    updatedContent = updatedContent.replace(
      /export default function/,
      `${schemaCode}\nexport default function`
    );
    
    // Agregar el Script al componente
    // Buscar el return ( y agregar el fragment
    if (!content.includes('<Script id="faq-schema"')) {
      // Agregar <> al inicio del return y el Script
      updatedContent = updatedContent.replace(
        /return\s*\(\s*\n?\s*<main/,
        `return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main`
      );
      
      // Cerrar el fragment al final
      updatedContent = updatedContent.replace(
        /<\/main>\s*\n?\s*\);?\s*\n?\s*\}/,
        `</main>
    </>
  );
}`
      );
    }
  }
  
  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`✅ Actualizado: ${folderName} (${faqs.length} FAQs)`);
    return true;
  }
  
  return false;
}

// Main
function main() {
  console.log('🔄 Actualizando SEO en páginas de servicios...\n');
  
  let updated = 0;
  let skipped = 0;
  
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (IGNORE.some(i => entry.name.includes(i))) continue;
    
    const pagePath = path.join(appDir, entry.name, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      try {
        if (updatePage(pagePath)) {
          updated++;
        } else {
          skipped++;
        }
      } catch (err) {
        console.error(`❌ Error en ${entry.name}:`, err.message);
      }
    }
  }
  
  console.log(`\n📊 Resumen: ${updated} actualizados, ${skipped} saltados`);
}

main();




