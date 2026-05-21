#!/usr/bin/env node
/**
 * Paso 6: estandariza SEO en landings orgánicas (sin tocar ads).
 * Uso: node scripts/apply-organic-seo-step6.mjs [--dry-run]
 */

import fs from "fs";
import path from "path";

const DRY_RUN = process.argv.includes("--dry-run");
const APP = "src/app";
const EXCLUDE_DIRS = new Set(["ads", "interno", "links", "sitelink", "api", "components"]);
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

const EXTRA_FAQS = {
  "ayuda-psicologica-urgente-chillan": [
    {
      question: "¿Atienden crisis psicológicas el mismo día?",
      answer:
        "Intento priorizar casos urgentes según disponibilidad. Escríbeme por WhatsApp con una breve descripción y te indico el primer horario posible.",
    },
    {
      question: "¿Qué hago si hay riesgo de autolesión?",
      answer:
        "Si hay riesgo vital, llama a Salud Responde (600 360 7777), Fono de la Esperanza (717 200 200) o urgencias (131). La terapia complementa, no reemplaza, atención de emergencia.",
    },
    {
      question: "¿La sesión puede ser online?",
      answer:
        "Sí. En crisis emocional la videollamada suele ser más rápida de coordinar que el desplazamiento presencial.",
    },
  ],
  "terapia-celos-chillan": [
    {
      question: "¿Los celos siempre indican inseguridad?",
      answer:
        "No siempre. A veces reflejan experiencias previas de traición o patrones aprendidos. En terapia distinguimos qué es señal real y qué es interpretación ansiosa.",
    },
    {
      question: "¿Pueden ir en pareja?",
      answer:
        "Sí. Trabajo con parejas y también con personas que consultan por celos recurrentes en distintas relaciones.",
    },
    {
      question: "¿Cuánto dura el proceso?",
      answer:
        "Depende de la historia y objetivos. Muchas parejas notan cambios en comunicación entre 8 y 16 sesiones.",
    },
  ],
  "terapia-control-ira-chillan": [
    {
      question: "¿La ira se puede aprender a regular?",
      answer:
        "Sí. Con técnicas de regulación emocional, identificación de disparadores y comunicación asertiva se reduce la frecuencia e intensidad de los estallidos.",
    },
    {
      question: "¿Necesito medicación?",
      answer:
        "No siempre. La TCC es el primer abordaje. Si hay impulsividad severa, evaluamos derivación a psiquiatra.",
    },
    {
      question: "¿Atienden hombres con problemas de ira?",
      answer:
        "Sí. Es uno de los motivos frecuentes de consulta masculina en Chillán y online.",
    },
  ],
  "emdr-autoadministrado": [
    {
      question: "¿Reemplaza la terapia EMDR presencial?",
      answer:
        "No. Es un recurso educativo complementario. Para trauma complejo o TEPT se recomienda EMDR con psicólogo certificado.",
    },
    {
      question: "¿Es seguro hacerlo solo?",
      answer:
        "Solo para malestar leve y con buena estabilidad emocional. Si aparecen recuerdos abrumadores, detente y busca apoyo profesional.",
    },
  ],
};

function family(slug) {
  if (slug.startsWith("psicologo-")) return "psicologo";
  if (slug.startsWith("terapia-")) return "terapia";
  if (slug.startsWith("tratamiento-")) return "tratamiento";
  if (slug.startsWith("superar-")) return "superar";
  if (slug.startsWith("certificado-")) return "certificado";
  if (slug.startsWith("emdr-")) return "emdr";
  return "otros";
}

function extractFaqs(content) {
  const block = content.match(/const faqSchema\s*=\s*\{[\s\S]*?\n\};/);
  if (!block) return null;

  const faqs = [];
  const qRegex =
    /(?:"name"|name):\s*"((?:\\.|[^"\\])*)"\s*,\s*(?:"acceptedAnswer"|acceptedAnswer):\s*\{\s*(?:"@type"|@type):\s*"Answer",\s*(?:"text"|text):\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = qRegex.exec(block[0])) !== null) {
    faqs.push({
      question: m[1].replace(/\\"/g, '"'),
      answer: m[2].replace(/\\"/g, '"'),
    });
  }
  return faqs.length ? faqs : null;
}

function extractMetaDescription(content) {
  const m = content.match(/description:\s*\n?\s*["'`]([\s\S]*?)["'`],?\s*\n\s*alternates/);
  if (m) return m[1].replace(/\s+/g, " ").trim();
  const m2 = content.match(/const description\s*=\s*\n?\s*["'`]([\s\S]*?)["'`];/);
  return m2 ? m2[1].replace(/\s+/g, " ").trim() : "";
}

function slugToVar(slug) {
  return slug.replace(/-/g, "_").replace(/^\d/, "_") + "FAQs";
}

function slugToBreadcrumbLabel(slug) {
  const withoutSuffix = slug.replace(/-chillan$/, "");
  const words = withoutSuffix.split("-").filter(Boolean);
  const map = {
    psicologo: "Psicólogo",
    terapia: "Terapia",
    tratamiento: "Tratamiento",
    online: "Online",
    tcc: "TCC",
    toc: "TOC",
    tlp: "TLP",
    emdr: "EMDR",
    tdah: "TDAH",
    isapre: "Isapre",
    compin: "COMPIN",
  };
  const titled = words.map((w) => {
    const lower = w.toLowerCase();
    return map[lower] ?? lower.charAt(0).toUpperCase() + lower.slice(1);
  });
  return `${titled.join(" ")} Chillán`;
}

function slugToServiceType(slug) {
  const label = slugToBreadcrumbLabel(slug).replace(/ Chillán$/, "");
  if (slug.startsWith("tratamiento-")) return label;
  if (slug.startsWith("terapia-")) return label;
  if (slug.startsWith("psicologo-")) return label.replace(/^Psicólogo /, "Psicología ");
  return label;
}

function formatFaqsArray(faqs, varName) {
  const lines = faqs.map(
    (f) =>
      `  {\n    question: ${JSON.stringify(f.question)},\n    answer:\n      ${JSON.stringify(f.answer)},\n  }`
  );
  return `const ${varName} = [\n${lines.join(",\n")},\n];`;
}

function transformPage(slug, content) {
  if (content.includes("getBreadcrumbSchema") || content.includes("OrganicSeoScripts")) {
    return { changed: false, reason: "already-migrated" };
  }

  let out = content;

  // Fix transactional Online links in related nav
  out = out.replace(
    /\{\s*label:\s*["']Online["'],\s*href:\s*["']\/terapia-online["']\s*\}/g,
    '{ label: "Psicólogo online", href: "/psicologo-online-chillan" }'
  );

  const faqs = extractFaqs(out) ?? EXTRA_FAQS[slug];
  if (!faqs?.length) {
    return { changed: false, reason: "no-faqs" };
  }

  const faqVar = slugToVar(slug);
  const breadcrumbLabel = slugToBreadcrumbLabel(slug);
  const serviceType = slugToServiceType(slug);
  const metaDesc = extractMetaDescription(out);
  const serviceDescription =
    metaDesc.length > 0 && metaDesc.length <= 200
      ? metaDesc
      : `Atención psicológica en Chillán: ${breadcrumbLabel.replace(/ Chillán$/, "")}. Sesiones presenciales y online.`;

  // Remove old inline faqSchema block
  out = out.replace(/\n\/\/ FAQPage Schema[\s\S]*?const faqSchema\s*=\s*\{[\s\S]*?\n\};\n\n?/, "\n");

  // Add imports after next/link if missing
  if (!out.includes("OrganicSeoScripts")) {
    out = out.replace(
      /import Link from "next\/link";\n/,
      `import Link from "next/link";\nimport { Breadcrumb } from "@/app/components/Breadcrumb";\nimport { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";\nimport { getTwitterDescription } from "@/lib/schemas";\n`
    );
  }
  if (!out.includes('import Link from "next/link"')) {
    out = out.replace(
      /import Image from "next\/image";\n/,
      `import Image from "next/image";\nimport Link from "next/link";\nimport { Breadcrumb } from "@/app/components/Breadcrumb";\nimport { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";\nimport { getTwitterDescription } from "@/lib/schemas";\n`
    );
  }

  // Twitter description with getTwitterDescription
  out = out.replace(
    /twitter:\s*\{([^}]*?)description:\s*["'`]([^"'`]+)["'`]([^}]*)\}/s,
    (full, before, desc) => {
      if (full.includes("getTwitterDescription")) return full;
      const shortTitleMatch = out.match(/twitter:\s*\{[\s\S]*?title:\s*["'`]([^"'`]+)["'`]/);
      const twitterTitle = shortTitleMatch?.[1] ?? breadcrumbLabel;
      return `twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(twitterTitle)},
    description: getTwitterDescription(${JSON.stringify(desc)}),
  }`;
    }
  );

  // Insert SEO block before export default
  const seoBlock = `
${formatFaqsArray(faqs, faqVar)}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: ${JSON.stringify(breadcrumbLabel)} },
];

`;

  if (!out.includes("const breadcrumbItems")) {
    out = out.replace(/export default function/, `${seoBlock}export default function`);
  }

  // Replace faq-only Script with OrganicSeoScripts
  out = out.replace(
    /<>\s*\n\s*<Script\s*\n\s*id="faq-schema"[\s\S]*?\/>\s*\n\s*<main/,
    `<>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={${faqVar}}
        serviceType=${JSON.stringify(serviceType)}
        serviceDescription={${JSON.stringify(serviceDescription)}}
      />
      <main`
  );

  // Pages without fragment wrapper
  if (!out.includes("OrganicSeoScripts")) {
    out = out.replace(
      /export default function[^{]+\{\s*\n\s*return \(\s*\n\s*<main/,
      (m) =>
        m.replace(
          "<main",
          `return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={${faqVar}}
        serviceType=${JSON.stringify(serviceType)}
        serviceDescription={${JSON.stringify(serviceDescription)}}
      />
      <main`
        )
    );
    if (!out.includes("</>")) {
      out = out.replace(/\n\s*<\/main>\s*\n\s*\);\s*\n\}/, "\n    </main>\n    </>\n  );\n}");
    }
  }

  // Insert Breadcrumb after <main ...>
  if (!out.includes("<Breadcrumb")) {
    out = out.replace(
      /(<main[^>]*>)\s*\n(\s*)(<div|<section|<p|<h1)/,
      `$1\n$2<Breadcrumb items={breadcrumbItems} />\n$2$3`
    );
  }

  return { changed: true, content: out };
}

const stats = { touched: 0, skipped: 0, byFamily: {} };
const skipped = [];

for (const ent of fs.readdirSync(APP, { withFileTypes: true })) {
  if (!ent.isDirectory() || EXCLUDE_DIRS.has(ent.name)) continue;
  const slug = ent.name;
  if (STEP4.has(slug) || STEP5.has(slug) || ALCOHOL.has(slug)) continue;
  const pagePath = path.join(APP, slug, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;

  const original = fs.readFileSync(pagePath, "utf8");
  const result = transformPage(slug, original);
  if (!result.changed) {
    stats.skipped++;
    skipped.push({ slug, reason: result.reason });
    continue;
  }

  const fam = family(slug);
  stats.byFamily[fam] = (stats.byFamily[fam] ?? 0) + 1;
  stats.touched++;

  if (!DRY_RUN) {
    fs.writeFileSync(pagePath, result.content);
  }
}

console.log(DRY_RUN ? "[dry-run]" : "[applied]", stats);
if (skipped.length) console.log("skipped:", skipped);
