#!/usr/bin/env node
/** Enlaces transaccionales "Online" → /psicologo-online-chillan (Paso 6). */

import fs from "fs";
import path from "path";

const EXCLUDE = new Set(["ads", "interno", "links", "sitelink", "api", "components"]);
const STEP4 = new Set([
  "agendar",
  "perfil",
  "terapia-online",
  "terapia-online-vs-presencial-chillan",
  "psicologo-online-chillan",
]);
const STEP5 = new Set([
  "consulta-psicologica-precio-chillan",
  "primera-consulta-psicologo-chillan",
  "psicologo-depresion-chillan",
  "terapia-de-pareja-chillan",
  "terapia-emdr-chillan",
  "psicologo-abuso-sexual-chillan",
  "mejor-psicologo-chillan-opiniones",
  "psicologo-centro-chillan",
  "psicologo-ansiedad-chillan",
]);
const ALCOHOL = new Set([
  "alcoholismo-chillan",
  "dejar-de-beber-chillan",
  "tratamiento-alcoholismo-chillan",
  "psicologo-alcoholismo-chillan",
]);

let fixed = 0;

for (const ent of fs.readdirSync("src/app", { withFileTypes: true })) {
  if (!ent.isDirectory() || EXCLUDE.has(ent.name)) continue;
  const slug = ent.name;
  if (STEP4.has(slug) || STEP5.has(slug) || ALCOHOL.has(slug)) continue;
  const pagePath = path.join("src/app", slug, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, "utf8");
  const before = content;

  // Pill / nav con texto "Online" (transaccional)
  content = content.replace(
    /href="\/terapia-online"([\s\S]*?)>\s*Online\s*<\/Link>/g,
    'href="/psicologo-online-chillan"$1>Psicólogo online</Link>'
  );

  // href suelto en bloques CTA tipo "Consultar online" (sin anchor explicativo)
  content = content.replace(
    /href="\/terapia-online"([\s\S]*?)>\s*Consultar online\s*<\/Link>/gi,
    'href="/psicologo-online-chillan"$1>Consultar online</Link>'
  );

  if (content !== before) {
    fs.writeFileSync(pagePath, content);
    fixed++;
    console.log("fixed:", slug);
  }
}

console.log("total fixed:", fixed);
