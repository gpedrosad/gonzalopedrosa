#!/usr/bin/env node

/**
 * Gestión de palabras clave negativas vía Google Ads API.
 *
 * Uso:
 *   npm run google-ads:negatives -- list
 *   npm run google-ads:negatives -- propose
 *   npm run google-ads:negatives -- apply --dry-run
 *   npm run google-ads:negatives -- apply --apply   # escribe en la cuenta
 *   npm run google-ads:negatives -- apply --apply --terms "sexologo,emdr"
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enums, GoogleAdsApi } from "google-ads-api";

const args = process.argv.slice(2);
const command = args[0] ?? "help";
const isDryRun = !args.includes("--apply");
const termsArg = args.find((a) => a.startsWith("--terms="))?.slice("--terms=".length);

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(/-/g, "");
const LOGIN_CUSTOMER_ID = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.replace(/-/g, "") || undefined;
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client-ads.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json",
);

const DAYS = Number(process.env.GOOGLE_ADS_REPORT_DAYS ?? 30);
const duringDays = [7, 14, 30, 90].includes(DAYS) ? DAYS : 30;

/** Términos que NO conviene negativar: son la intención core de la campaña online. */
const PROTECTED_TERMS = new Set([
  "psicologo online",
  "psicólogo online",
  "psicologos online",
  "psicólogos online",
  "terapia online",
  "psicologo en linea",
  "psicólogo en linea",
  "psicologo a distancia",
  "terapia a distancia",
  "psicologo virtual",
  "psicólogo virtual",
]);

/** Sugerencias manuales seguras (servicios que no ofreces o fuera de foco). */
const CURATED_SAFE_NEGATIVES = [
  "sexologo",
  "sexólogo",
  "terapia de familia",
  "psicoanalisis",
  "psicoanálisis",
  "emdr",
  "dbt",
  "adicciones",
  "infantil",
  "bariatrico",
  "bariátrico",
  "gratis",
  "gratuito",
  "ia",
  "inteligencia artificial",
  "santiago",
  "mexico",
  "argentina",
  "conversemos",
  "injuv",
  "linea libre",
];

const normalize = (text) =>
  String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();

const loadCustomer = () => {
  if (!DEVELOPER_TOKEN) throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN");
  if (!existsSync(OAUTH_TOKEN_PATH)) throw new Error("Ejecuta: npm run google-ads:auth");
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: DEVELOPER_TOKEN,
  });
  const options = { customer_id: CUSTOMER_ID, refresh_token: tokens.refresh_token };
  if (LOGIN_CUSTOMER_ID) options.login_customer_id = LOGIN_CUSTOMER_ID;
  return client.Customer(options);
};

const queryRows = async (customer, gaql) => customer.query(gaql);

const fetchExistingNegatives = async (customer) => {
  const [campaignRows, adGroupRows] = await Promise.all([
    queryRows(
      customer,
      `SELECT campaign.id, campaign.name, campaign_criterion.keyword.text, campaign_criterion.keyword.match_type
       FROM campaign_criterion
       WHERE campaign_criterion.type = 'KEYWORD' AND campaign_criterion.negative = TRUE`,
    ),
    queryRows(
      customer,
      `SELECT campaign.id, ad_group.id, ad_group.name, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type
       FROM ad_group_criterion
       WHERE ad_group_criterion.type = 'KEYWORD' AND ad_group_criterion.negative = TRUE`,
    ),
  ]);

  const campaign = campaignRows.map((row) => ({
    level: "campaña",
    campaignId: row.campaign?.id,
    campaignName: row.campaign?.name,
    text: row.campaign_criterion?.keyword?.text,
    matchType: row.campaign_criterion?.keyword?.match_type,
  }));

  const adGroup = adGroupRows.map((row) => ({
    level: "grupo",
    campaignId: row.campaign?.id,
    adGroupId: row.ad_group?.id,
    adGroupName: row.ad_group?.name,
    text: row.ad_group_criterion?.keyword?.text,
    matchType: row.ad_group_criterion?.keyword?.match_type,
  }));

  const allTexts = new Set(
    [...campaign, ...adGroup].map((row) => normalize(row.text)).filter(Boolean),
  );

  return { campaign, adGroup, allTexts };
};

const fetchWastedSearchTerms = async (customer) => {
  const rows = await queryRows(
    customer,
    `SELECT search_term_view.search_term, metrics.clicks, metrics.cost_micros, metrics.conversions
     FROM search_term_view
     WHERE segments.date DURING LAST_${duringDays}_DAYS
     ORDER BY metrics.cost_micros DESC
     LIMIT 80`,
  );

  return rows
    .map((row) => ({
      term: row.search_term_view?.search_term ?? "",
      clicks: Number(row.metrics?.clicks ?? 0),
      cost_micros: Number(row.metrics?.cost_micros ?? 0),
      conversions: Number(row.metrics?.conversions ?? 0),
    }))
    .filter((row) => row.cost_micros > 0 && row.conversions === 0);
};

const getActiveCampaign = async (customer) => {
  const rows = await queryRows(
    customer,
    `SELECT campaign.id, campaign.name, metrics.clicks
     FROM campaign
     WHERE campaign.status = 'ENABLED'
     ORDER BY metrics.clicks DESC
     LIMIT 1`,
  );
  const row = rows[0];
  if (!row?.campaign?.id) throw new Error("No hay campaña ENABLED para aplicar negativas");
  return { id: row.campaign.id, name: row.campaign.name };
};

const proposeNegatives = async (customer) => {
  const [{ allTexts }, wasted] = await Promise.all([
    fetchExistingNegatives(customer),
    fetchWastedSearchTerms(customer),
  ]);

  const fromWaste = wasted
    .map((row) => row.term)
    .filter((term) => {
      const n = normalize(term);
      if (!n) return false;
      if (PROTECTED_TERMS.has(n)) return false;
      if (allTexts.has(n)) return false;
      return true;
    });

  const curated = CURATED_SAFE_NEGATIVES.filter((term) => !allTexts.has(normalize(term)));

  const suggested = [...new Set([...fromWaste, ...curated].map((t) => t.trim()).filter(Boolean))];

  const blocked = wasted
    .filter((row) => PROTECTED_TERMS.has(normalize(row.term)))
    .map((row) => row.term);

  return { suggested, blocked, wasted, existingCount: allTexts.size };
};

const applyNegatives = async (customer, terms, { dryRun }) => {
  const campaign = await getActiveCampaign(customer);
  const { allTexts } = await fetchExistingNegatives(customer);

  const toAdd = terms
    .map((t) => t.trim())
    .filter(Boolean)
    .filter((term) => !allTexts.has(normalize(term)));

  if (toAdd.length === 0) {
    console.log("\nNada que agregar: todas las negativas ya existen.\n");
    return;
  }

  const campaignResource = `customers/${CUSTOMER_ID}/campaigns/${campaign.id}`;
  const operations = toAdd.map((text) => ({
    entity: "campaign_criterion",
    operation: "create",
    resource: {
      campaign: campaignResource,
      negative: true,
      keyword: {
        text,
        match_type: enums.KeywordMatchType.BROAD,
      },
    },
  }));

  console.log(`\nCampaña destino: ${campaign.name} (${campaign.id})`);
  console.log(`Nivel: campaña | Match: BROAD | Modo: ${dryRun ? "DRY-RUN" : "APLICAR"}\n`);
  for (const term of toAdd) console.log(`  + ${term}`);

  if (dryRun) {
    console.log("\nDry-run: no se escribió nada. Usa --apply para enviar a Google Ads.\n");
    return;
  }

  const result = await customer.mutateResources(operations);
  console.log(`\n✓ ${result?.results?.length ?? toAdd.length} negativa(s) creada(s).\n`);
};

const cmdList = async (customer) => {
  const { campaign, adGroup } = await fetchExistingNegatives(customer);
  console.log(`\nNegativas campaña: ${campaign.length}`);
  campaign.slice(0, 25).forEach((row) => console.log(`  [campaña] ${row.text}`));
  if (campaign.length > 25) console.log(`  … y ${campaign.length - 25} más`);

  console.log(`\nNegativas grupo: ${adGroup.length}`);
  adGroup.slice(0, 25).forEach((row) => console.log(`  [${row.adGroupName}] ${row.text}`));
  if (adGroup.length > 25) console.log(`  … y ${adGroup.length - 25} más\n`);
};

const cmdPropose = async (customer) => {
  const { suggested, blocked, wasted, existingCount } = await proposeNegatives(customer);
  console.log(`\nNegativas existentes (únicas): ${existingCount}`);
  console.log(`\nSugeridas para agregar (${suggested.length}):`);
  suggested.forEach((term) => console.log(`  + ${term}`));

  if (blocked.length > 0) {
    console.log("\nNo sugeridas (intención core — mejor optimizar landing/copy, no negativar):");
    blocked.forEach((term) => console.log(`  ⊘ ${term}`));
  }

  console.log("\nDesperdicio paid reciente (costo > 0, 0 conv.):");
  wasted.slice(0, 10).forEach((row) => {
    const cost = (row.cost_micros / 1_000_000).toFixed(2);
    console.log(`  - ${row.term} | ${row.clicks} clics | US$${cost}`);
  });

  console.log("\nAplicar (dry-run): npm run google-ads:negatives -- apply --dry-run");
  console.log("Aplicar (real):    npm run google-ads:negatives -- apply --apply\n");
};

const cmdApply = async (customer) => {
  let terms;
  if (termsArg) {
    terms = termsArg.split(",").map((t) => t.trim());
  } else {
    const { suggested } = await proposeNegatives(customer);
    terms = suggested;
  }
  await applyNegatives(customer, terms, { dryRun: isDryRun });
};

const help = () => {
  console.log(`
google-ads-negatives

  list     Lista negativas actuales (campaña + grupo)
  propose  Propone negativas seguras según search terms + lista curada
  apply    Crea negativas en campaña activa (--dry-run por defecto si no pasas --apply)

Ejemplos:
  npm run google-ads:negatives -- list
  npm run google-ads:negatives -- propose
  npm run google-ads:negatives -- apply --dry-run
  npm run google-ads:negatives -- apply --apply --terms=sexologo,emdr
`);
};

async function main() {
  const customer = loadCustomer();
  switch (command) {
    case "list":
      await cmdList(customer);
      break;
    case "propose":
      await cmdPropose(customer);
      break;
    case "apply":
      await cmdApply(customer);
      break;
    default:
      help();
  }
}

main().catch((error) => {
  const message = error?.errors?.[0]?.message ?? error.message ?? String(error);
  console.error(`\nError: ${message}`);
  if (String(message).includes("DEVELOPER_TOKEN") || String(message).includes("permission")) {
    console.error(
      "Si el token es nivel Test, solo permite escritura en cuentas de prueba. Revisa acceso en Google Ads API Center.",
    );
  }
  process.exit(1);
});
