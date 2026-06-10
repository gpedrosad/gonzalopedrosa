#!/usr/bin/env node
/**
 * Crea un RSA nuevo con landing /ads/adolescentes y pausa el anuncio anterior.
 * final_urls es inmutable en UPDATE — hay que crear anuncio nuevo.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enums, GoogleAdsApi } from "google-ads-api";

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(/-/g, "");
const AD_GROUP_NAME = "psicologo-adolescentes-online";
const NEW_FINAL_URL = "https://www.gonzalopedrosa.cl/ads/adolescentes";
const isDryRun = !process.argv.includes("--apply");

const loadCustomer = () => {
  const oauthPath = resolve(process.cwd(), process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client-ads.json");
  const tokenPath = resolve(process.cwd(), process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json");
  const raw = JSON.parse(readFileSync(oauthPath, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(tokenPath, "utf8"));
  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
  });
  return client.Customer({ customer_id: CUSTOMER_ID, refresh_token: tokens.refresh_token });
};

const mapHeadline = (h) => {
  const item = { text: h.text };
  if (h.pinned_field != null) item.pinned_field = h.pinned_field;
  return item;
};

async function main() {
  const customer = loadCustomer();
  const rows = await customer.query(`
    SELECT
      ad_group.resource_name,
      ad_group_ad.resource_name,
      ad_group_ad.ad.responsive_search_ad.headlines,
      ad_group_ad.ad.responsive_search_ad.descriptions,
      ad_group_ad.ad.responsive_search_ad.path1,
      ad_group_ad.ad.responsive_search_ad.path2
    FROM ad_group_ad
    WHERE ad_group.name = '${AD_GROUP_NAME}'
      AND ad_group_ad.status = 'ENABLED'
    LIMIT 1
  `);

  const row = rows[0];
  if (!row) throw new Error(`No hay anuncio ENABLED en ${AD_GROUP_NAME}`);

  const adGroup = row.ad_group.resource_name;
  const oldAdGroupAd = row.ad_group_ad.resource_name;
  const rsa = row.ad_group_ad.ad.responsive_search_ad;
  const headlines = (rsa?.headlines ?? []).map(mapHeadline);
  const descriptions = (rsa?.descriptions ?? []).map((d) => ({ text: d.text }));

  const responsiveSearchAd = { headlines, descriptions };
  if (rsa?.path1) responsiveSearchAd.path1 = rsa.path1;
  if (rsa?.path2) responsiveSearchAd.path2 = rsa.path2;

  const operations = [
    {
      entity: "ad_group_ad",
      operation: "create",
      resource: {
        ad_group: adGroup,
        status: enums.AdGroupAdStatus.ENABLED,
        ad: {
          final_urls: [NEW_FINAL_URL],
          responsive_search_ad: responsiveSearchAd,
        },
      },
    },
    {
      entity: "ad_group_ad",
      operation: "update",
      resource: {
        resource_name: oldAdGroupAd,
        status: enums.AdGroupAdStatus.PAUSED,
      },
      update_mask: ["status"],
    },
  ];

  console.log(`Grupo: ${AD_GROUP_NAME}`);
  console.log(`Nueva URL: ${NEW_FINAL_URL}`);
  console.log(`Pausar: ${oldAdGroupAd}`);
  console.log(`Modo: ${isDryRun ? "DRY-RUN" : "APLICAR"}\n`);

  if (isDryRun) {
    await customer.mutateResources(operations, { validate_only: true });
    console.log("validate_only OK. Ejecuta con --apply para aplicar.\n");
    return;
  }

  const result = await customer.mutateResources(operations);
  console.log("✓ Anuncio creado y anterior pausado.");
  console.log(JSON.stringify(result?.results ?? result, null, 2));
}

main().catch((error) => {
  console.error(error?.errors?.[0]?.message ?? error.message ?? error);
  process.exit(1);
});
