#!/usr/bin/env node

/**
 * Script para actualizar todas las URLs de gonzalopedrosa.cl a www.gonzalopedrosa.cl
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixCanonicalUrls() {
  const patterns = [
    'src/**/*.{tsx,ts,jsx,js}',
    'scripts/**/*.{tsx,ts,jsx,js}'
  ];

  const files = await glob(patterns, {
    cwd: process.cwd(),
    ignore: ['**/node_modules/**', '**/dist/**', '**/.next/**']
  });

  let totalReplacements = 0;

  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Reemplazar todas las URLs sin www
    content = content.replace(
      /https:\/\/gonzalopedrosa\.cl(?!\/)/g,
      'https://www.gonzalopedrosa.cl'
    );

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      const replacements = (originalContent.match(/https:\/\/gonzalopedrosa\.cl(?!\/)/g) || []).length;
      totalReplacements += replacements;
      console.log(`✓ ${file} - ${replacements} reemplazo(s)`);
    }
  }

  console.log(`\n✅ Total: ${totalReplacements} URLs actualizadas`);
}

fixCanonicalUrls().catch(console.error);
