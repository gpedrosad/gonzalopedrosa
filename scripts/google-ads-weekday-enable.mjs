#!/usr/bin/env node
/**
 * Reactiva las 3 campañas y limita el horario a lun–vie (sin sáb/dom).
 *
 *   node --env-file=.env.local scripts/google-ads-weekday-enable.mjs
 *   node --env-file=.env.local scripts/google-ads-weekday-enable.mjs --apply
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { enums, GoogleAdsApi } from "google-ads-api";

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
const isApply = process.argv.includes("--apply");

const CAMPAIGNS = [
  { id: "23450445740", name: "psicologo-cognitivo-conductual-online" },
  { id: "24172229213", name: "adiccion-al-juego-online" },
  { id: "24172472867", name: "evaluacion-bariatrica-online" },
];

const WEEKDAYS = [
  enums.DayOfWeek.MONDAY,
  enums.DayOfWeek.TUESDAY,
  enums.DayOfWeek.WEDNESDAY,
  enums.DayOfWeek.THURSDAY,
  enums.DayOfWeek.FRIDAY,
];

const WEEKEND = new Set([enums.DayOfWeek.SATURDAY, enums.DayOfWeek.SUNDAY, 7, 8, "SATURDAY", "SUNDAY"]);

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

const dayKey = (value) => Number(value);

const isFullWeekday = (row) => {
  const schedule = row.campaign_criterion?.ad_schedule ?? {};
  return (
    WEEKDAYS.includes(dayKey(schedule.day_of_week)) &&
    Number(schedule.start_hour) === 0 &&
    Number(schedule.end_hour) === 24
  );
};

async function main() {
  const customer = loadCustomer();
  const ids = CAMPAIGNS.map((c) => c.id).join(",");

  const [campaignRows, scheduleRows] = await Promise.all([
    customer.query(`
      SELECT campaign.id, campaign.name, campaign.status
      FROM campaign
      WHERE campaign.id IN (${ids})
    `),
    customer.query(`
      SELECT campaign.id, campaign.name, campaign_criterion.resource_name,
             campaign_criterion.ad_schedule.day_of_week,
             campaign_criterion.ad_schedule.start_hour,
             campaign_criterion.ad_schedule.end_hour
      FROM campaign_criterion
      WHERE campaign.id IN (${ids})
        AND campaign_criterion.type = 'AD_SCHEDULE'
    `),
  ]);

  const byCampaign = new Map(CAMPAIGNS.map((c) => [c.id, []]));
  for (const row of scheduleRows) {
    const id = String(row.campaign?.id);
    byCampaign.get(id)?.push(row);
  }

  const ops = [];

  for (const campaign of CAMPAIGNS) {
    const live = campaignRows.find((r) => String(r.campaign?.id) === campaign.id)?.campaign;
    const existing = byCampaign.get(campaign.id) ?? [];
    const campaignRn = `customers/${CUSTOMER_ID}/campaigns/${campaign.id}`;

    console.log(`\n${campaign.name} (${campaign.id})`);
    console.log(`  status: ${live?.status ?? "?"}`);
    console.log(`  horarios actuales: ${existing.length}`);

    for (const row of existing) {
      const day = row.campaign_criterion?.ad_schedule?.day_of_week;
      if (WEEKEND.has(day) || WEEKEND.has(dayKey(day))) {
        console.log(`  - quitar fin de semana: ${row.campaign_criterion.resource_name}`);
        ops.push({
          entity: "campaign_criterion",
          operation: "remove",
          resource: row.campaign_criterion.resource_name,
        });
      }
    }

    const weekdayPresent = new Set(
      existing.filter(isFullWeekday).map((row) => dayKey(row.campaign_criterion?.ad_schedule?.day_of_week)),
    );

    for (const day of WEEKDAYS) {
      if (weekdayPresent.has(dayKey(day))) continue;
      console.log(`  + lun–vie 00–24: ${enums.DayOfWeek[day] ?? day}`);
      ops.push({
        entity: "campaign_criterion",
        operation: "create",
        resource: {
          campaign: campaignRn,
          ad_schedule: {
            day_of_week: day,
            start_hour: 0,
            start_minute: enums.MinuteOfHour.ZERO,
            end_hour: 24,
            end_minute: enums.MinuteOfHour.ZERO,
          },
        },
      });
    }

    if (Number(live?.status) !== enums.CampaignStatus.ENABLED && live?.status !== "ENABLED") {
      console.log("  → ENABLED");
      ops.push({
        entity: "campaign",
        operation: "update",
        resource: {
          resource_name: campaignRn,
          status: enums.CampaignStatus.ENABLED,
        },
        update_mask: ["status"],
      });
    }
  }

  if (ops.length === 0) {
    console.log("\nNada que cambiar.");
    return;
  }

  console.log(`\n${ops.length} ops · ${isApply ? "APLICAR" : "DRY-RUN"}`);
  await customer.mutateResources(ops, isApply ? undefined : { validate_only: true });
  console.log(isApply ? "✓ Campañas lun–vie aplicadas" : "✓ validate_only OK");
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
