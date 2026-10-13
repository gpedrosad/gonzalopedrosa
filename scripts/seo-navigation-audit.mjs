#!/usr/bin/env node

// Comprueba enlaces HTML reales y profundidad desde la portada, sin depender de JS.
// Uso: node scripts/seo-navigation-audit.mjs [https://www.gonzalopedrosa.cl]
import { readFileSync } from "node:fs";

const canonicalOrigin = "https://www.gonzalopedrosa.cl";
const baseUrl = new URL(process.argv[2] ?? canonicalOrigin);
const source = readFileSync(new URL("../src/lib/organic-routes.ts", import.meta.url), "utf8");
const routes = [...source.matchAll(/route:\s*"([^"]+)"/g)].map((match) => match[1]);
const inventory = new Set(routes);
const graph = new Map();
const errors = [];

function getOrganicLinks(html, route) {
  const links = new Set();
  // Ignora URLs serializadas en scripts; solo cuenta enlaces del HTML visible.
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  for (const match of markup.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    const href = match[1].replace(/&amp;/g, "&");
    const url = new URL(href, new URL(route, baseUrl));
    if (url.origin !== baseUrl.origin && url.origin !== canonicalOrigin) continue;
    const pathname = url.pathname.replace(/\/$/, "") || "/";
    if (inventory.has(pathname) && pathname !== route) links.add(pathname);
  }
  return links;
}

async function crawl(route) {
  try {
    const response = await fetch(new URL(route, baseUrl), {
      redirect: "manual",
      signal: AbortSignal.timeout(20000),
    });
    if (response.status !== 200) {
      errors.push(`${route}: respuesta ${response.status}, se esperaba 200 sin redirección`);
      return;
    }
    const html = await response.text();
    const canonical = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1];
    if (canonical !== new URL(route, canonicalOrigin).href) {
      // La portada histórica usa el origen sin barra final.
      if (!(route === "/" && canonical === canonicalOrigin)) {
        errors.push(`${route}: canonical incorrecto (${canonical ?? "ausente"})`);
      }
    }
    if (/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
      errors.push(`${route}: noindex en una ruta orgánica`);
    }
    const h1Count = [...html.matchAll(/<h1(?:\s|>)/gi)].length;
    if (h1Count !== 1) errors.push(`${route}: ${h1Count} encabezados H1, se esperaba 1`);
    graph.set(route, getOrganicLinks(html, route));
  } catch (error) {
    errors.push(`${route}: ${error.message}`);
  }
}

// Cuatro peticiones simultáneas como máximo para no saturar el servidor.
let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < routes.length) await crawl(routes[cursor++]);
}));

const depths = new Map([["/", 0]]);
const queue = ["/"];
for (const route of queue) {
  for (const target of graph.get(route) ?? []) {
    if (depths.has(target)) continue;
    depths.set(target, depths.get(route) + 1);
    queue.push(target);
  }
}

const unreachable = routes.filter((route) => !depths.has(route));
const tooDeep = routes.filter((route) => (depths.get(route) ?? 0) > 3);
if (unreachable.length) errors.push(`Sin camino desde la portada: ${unreachable.join(", ")}`);
if (tooDeep.length) errors.push(`A más de 3 clics: ${tooDeep.join(", ")}`);

const direct = [...depths.values()].filter((depth) => depth === 1).length;
console.log(`${baseUrl.origin}: ${graph.size}/${routes.length} páginas comprobadas; ${direct} a un clic; ${depths.size}/${routes.length} alcanzables.`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("PASS: respuestas 200, canónicos, indexabilidad, H1 y navegación a un máximo de 3 clics.");
}
