#!/usr/bin/env node
/**
 * Gestión de campaña Google Ads (CLI interno).
 *
 *   npm run google-ads:manage -- list
 *   npm run google-ads:manage -- budget --amount=15 [--apply]
 *   npm run google-ads:manage -- status --entity=campaign --resource=... [--paused] [--apply]
 *   npm run google-ads:manage -- bid --entity=ad_group --resource=... --amount=1.50 [--apply]
 *   npm run google-ads:manage -- target-cpa --resource=... --amount=15 [--apply]
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enums, GoogleAdsApi } from "google-ads-api";

const args = process.argv.slice(2);
const command = args[0] ?? "help";
const isApply = args.includes("--apply");

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

const getArg = (name) => args.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const moneyMicros = (value) =>
  Math.round(Number.parseFloat(String(value).replace(",", ".")) * 1_000_000);

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

const mutate = async (customer, operations, validateOnly) =>
  customer.mutateResources(operations, validateOnly ? { validate_only: true } : undefined);

const fetchManageSnapshot = async (customer) => {
  const [currencyRows, campaigns, adGroups, keywords, ads] = await Promise.all([
    queryRows(customer, "SELECT customer.currency_code FROM customer LIMIT 1"),
    queryRows(
      customer,
      `SELECT campaign.id, campaign.resource_name, campaign.name, campaign.status,
              campaign.bidding_strategy_type, campaign.maximize_conversions.target_cpa_micros,
              campaign_budget.resource_name, campaign_budget.amount_micros
       FROM campaign WHERE campaign.status != 'REMOVED' ORDER BY campaign.name`,
    ),
    queryRows(
      customer,
      `SELECT campaign.name, ad_group.resource_name, ad_group.name, ad_group.status, ad_group.cpc_bid_micros
       FROM ad_group WHERE ad_group.status != 'REMOVED' ORDER BY campaign.name, ad_group.name`,
    ),
    queryRows(
      customer,
      `SELECT ad_group.name, ad_group_criterion.resource_name, ad_group_criterion.status,
              ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type,
              ad_group_criterion.cpc_bid_micros, ad_group_criterion.effective_cpc_bid_micros
       FROM keyword_view
       WHERE ad_group_criterion.status != 'REMOVED' AND ad_group_criterion.negative = FALSE
       ORDER BY ad_group.name`,
    ),
    queryRows(
      customer,
      `SELECT ad_group.name, ad_group_ad.resource_name, ad_group_ad.status, ad_group_ad.ad.final_urls
       FROM ad_group_ad
       WHERE ad_group_ad.ad.type = 'RESPONSIVE_SEARCH_AD' AND ad_group_ad.status != 'REMOVED'`,
    ),
  ]);

  return {
    currency: currencyRows[0]?.customer?.currency_code ?? "USD",
    campaigns,
    adGroups,
    keywords,
    ads,
  };
};

const help = () => {
  console.log(`
google-ads-manage

  list
  budget --amount=15 [--apply]
  status --entity=campaign|ad_group|keyword|ad --resource=RESOURCE [--paused] [--apply]
  bid --entity=ad_group|keyword --resource=RESOURCE --amount=1.50 [--apply]
  target-cpa --resource=CAMPAIGN_RESOURCE --amount=15 [--apply]

Panel web: /interno/ads/manage?key=TU_SECRETO
`);
};

async function main() {
  const customer = loadCustomer();

  switch (command) {
    case "list": {
      const data = await fetchManageSnapshot(customer);
      console.log(`\nCuenta ${CUSTOMER_ID} · ${data.currency}\n`);
      console.log("=== CAMPAÑAS ===");
      for (const row of data.campaigns) {
        const c = row.campaign;
        const b = row.campaign_budget;
        console.log(`- ${c.name} [${c.status}] ${(Number(b.amount_micros) / 1e6).toFixed(2)}/día`);
        console.log(`  ${c.resource_name}`);
        console.log(`  budget: ${b.resource_name}`);
      }
      console.log("\n=== GRUPOS ===");
      for (const row of data.adGroups) {
        const g = row.ad_group;
        const bid = g.cpc_bid_micros ? (Number(g.cpc_bid_micros) / 1e6).toFixed(2) : "auto";
        console.log(`- ${row.campaign.name} / ${g.name} [${g.status}] puja ${bid}`);
        console.log(`  ${g.resource_name}`);
      }
      console.log("\n=== KEYWORDS (top 30) ===");
      for (const row of data.keywords.slice(0, 30)) {
        const k = row.ad_group_criterion;
        console.log(`- [${row.ad_group.name}] ${k.keyword.text} · ${k.resource_name}`);
      }
      console.log("\n=== RSA ===");
      for (const row of data.ads) {
        console.log(`- [${row.ad_group.name}] ${row.ad_group_ad.ad.final_urls?.[0] ?? "—"}`);
        console.log(`  ${row.ad_group_ad.resource_name}`);
      }
      console.log("");
      break;
    }

    case "budget": {
      const amount = getArg("amount");
      if (!amount) throw new Error("Falta --amount=");
      const data = await fetchManageSnapshot(customer);
      const row =
        data.campaigns.find((r) => r.campaign.status === 2 || r.campaign.status === "ENABLED") ??
        data.campaigns[0];
      const ops = [
        {
          entity: "campaign_budget",
          operation: "update",
          resource: {
            resource_name: row.campaign_budget.resource_name,
            amount_micros: moneyMicros(amount),
          },
          update_mask: ["amount_micros"],
        },
      ];
      console.log(`Campaña: ${row.campaign.name} → ${amount}/día (${isApply ? "APLICAR" : "DRY-RUN"})`);
      await mutate(customer, ops, !isApply);
      console.log(isApply ? "✓ Presupuesto actualizado" : "✓ validate_only OK");
      break;
    }

    case "status": {
      const entity = getArg("entity");
      const resource = getArg("resource");
      const status = args.includes("--paused")
        ? enums.CampaignStatus.PAUSED
        : enums.CampaignStatus.ENABLED;
      if (!entity || !resource) throw new Error("Faltan --entity= y --resource=");

      const entityMap = {
        campaign: "campaign",
        ad_group: "ad_group",
        keyword: "ad_group_criterion",
        ad: "ad_group_ad",
      };
      const statusField =
        entity === "campaign"
          ? status
          : entity === "ad_group"
            ? args.includes("--paused")
              ? enums.AdGroupStatus.PAUSED
              : enums.AdGroupStatus.ENABLED
            : entity === "keyword"
              ? args.includes("--paused")
                ? enums.AdGroupCriterionStatus.PAUSED
                : enums.AdGroupCriterionStatus.ENABLED
              : args.includes("--paused")
                ? enums.AdGroupAdStatus.PAUSED
                : enums.AdGroupAdStatus.ENABLED;

      await mutate(
        customer,
        [
          {
            entity: entityMap[entity],
            operation: "update",
            resource: { resource_name: resource, status: statusField },
            update_mask: ["status"],
          },
        ],
        !isApply,
      );
      console.log(isApply ? "✓ Estado actualizado" : "✓ validate_only OK");
      break;
    }

    case "bid": {
      const entity = getArg("entity");
      const resource = getArg("resource");
      const amount = getArg("amount");
      if (!entity || !resource || !amount) throw new Error("Faltan --entity= --resource= --amount=");
      const entityName = entity === "ad_group" ? "ad_group" : "ad_group_criterion";
      await mutate(
        customer,
        [
          {
            entity: entityName,
            operation: "update",
            resource: { resource_name: resource, cpc_bid_micros: moneyMicros(amount) },
            update_mask: ["cpc_bid_micros"],
          },
        ],
        !isApply,
      );
      console.log(isApply ? "✓ Puja actualizada" : "✓ validate_only OK");
      break;
    }

    case "target-cpa": {
      const resource = getArg("resource");
      const amount = getArg("amount");
      if (!resource || !amount) throw new Error("Faltan --resource= y --amount=");
      await mutate(
        customer,
        [
          {
            entity: "campaign",
            operation: "update",
            resource: {
              resource_name: resource,
              maximize_conversions: { target_cpa_micros: moneyMicros(amount) },
            },
            update_mask: ["maximize_conversions.target_cpa_micros"],
          },
        ],
        !isApply,
      );
      console.log(isApply ? "✓ CPA objetivo actualizado" : "✓ validate_only OK");
      break;
    }

    default:
      help();
  }
}

main().catch((error) => {
  console.error(`\nError: ${error?.errors?.[0]?.message ?? error.message ?? error}`);
  process.exit(1);
});
