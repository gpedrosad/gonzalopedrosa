#!/usr/bin/env node
/** Debug: reproduce getAdsDashboardData errors outside Next.js */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { GoogleAdsApi } from "google-ads-api";

const CUSTOMER_ID = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(/-/g, "");
const cwd = process.cwd();

console.log("cwd:", cwd);
console.log("GOOGLE_ADS_DEVELOPER_TOKEN:", process.env.GOOGLE_ADS_DEVELOPER_TOKEN ? "set" : "MISSING");

const tokenPath = resolve(cwd, process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json");
const clientPath = resolve(cwd, process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client-ads.json");
console.log("token exists:", existsSync(tokenPath), tokenPath);
console.log("client exists:", existsSync(clientPath), clientPath);

const raw = JSON.parse(readFileSync(clientPath, "utf8"));
const oauth = raw.installed ?? raw.web ?? raw;
const tokens = JSON.parse(readFileSync(tokenPath, "utf8"));
const client = new GoogleAdsApi({
  client_id: oauth.client_id,
  client_secret: oauth.client_secret,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});
const customer = client.Customer({
  customer_id: CUSTOMER_ID,
  refresh_token: tokens.refresh_token,
  ...(process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID
    ? { login_customer_id: process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/-/g, "") }
    : {}),
});

const formatYmd = (date) => {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};
const days = 30;
const endCurrent = new Date();
endCurrent.setUTCDate(endCurrent.getUTCDate() - 1);
const startCurrent = new Date(endCurrent);
startCurrent.setUTCDate(startCurrent.getUTCDate() - (days - 1));
const endPrevious = new Date(startCurrent);
endPrevious.setUTCDate(endPrevious.getUTCDate() - 1);
const startPrevious = new Date(endPrevious);
startPrevious.setUTCDate(startPrevious.getUTCDate() - (days - 1));
const previousFilter = `segments.date BETWEEN '${formatYmd(startPrevious)}' AND '${formatYmd(endPrevious)}'`;

const queries = [
  ["currency", "SELECT customer.currency_code FROM customer LIMIT 1"],
  ["campaign current", "SELECT campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_30_DAYS LIMIT 1"],
  ["campaign previous", `SELECT campaign.name, metrics.clicks FROM campaign WHERE ${previousFilter} LIMIT 1`],
  ["negatives campaign", "SELECT campaign_criterion.keyword.text FROM campaign_criterion WHERE campaign_criterion.type = 'KEYWORD' AND campaign_criterion.negative = TRUE LIMIT 1"],
];

for (const [name, gaql] of queries) {
  try {
    const rows = await customer.query(gaql);
    console.log(`OK ${name}:`, rows.length, "rows");
  } catch (error) {
    const msg = error?.errors?.[0]?.message ?? error?.message ?? String(error);
    console.error(`FAIL ${name}:`, msg);
    if (error?.errors) console.error(JSON.stringify(error.errors, null, 2));
  }
}
