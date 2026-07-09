import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { GoogleAdsApi } from "google-ads-api";

export type AdsCustomer = ReturnType<GoogleAdsApi["Customer"]>;

export const microsToUnits = (micros: number) => micros / 1_000_000;

export const unitsToMicros = (units: number) => Math.round(units * 1_000_000);

export const getCustomer = (): { customer: AdsCustomer; customerId: string } => {
  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  if (!developerToken) throw new Error("Falta GOOGLE_ADS_DEVELOPER_TOKEN en .env.local");

  const oauthClientPath = resolve(
    process.cwd(),
    process.env.GOOGLE_ADS_OAUTH_CLIENT_PATH ?? ".secrets/gcp-oauth-client-ads.json",
  );
  const oauthTokenPath = resolve(
    process.cwd(),
    process.env.GOOGLE_ADS_OAUTH_TOKEN_PATH ?? ".secrets/google-ads-oauth-token.json",
  );

  if (!existsSync(oauthTokenPath)) {
    throw new Error("No hay token OAuth. Ejecuta: npm run google-ads:auth");
  }

  const raw = JSON.parse(readFileSync(oauthClientPath, "utf8"));
  const oauth = raw.installed ?? raw.web ?? raw;
  const tokens = JSON.parse(readFileSync(oauthTokenPath, "utf8"));
  if (!tokens.refresh_token) throw new Error("Token sin refresh_token. Ejecuta: npm run google-ads:auth");

  const customerId = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? "5930583968").replace(/-/g, "");
  const loginCustomerId = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.replace(/-/g, "");

  const client = new GoogleAdsApi({
    client_id: oauth.client_id,
    client_secret: oauth.client_secret,
    developer_token: developerToken,
  });

  const options: {
    customer_id: string;
    refresh_token: string;
    login_customer_id?: string;
  } = {
    customer_id: customerId,
    refresh_token: tokens.refresh_token,
  };
  if (loginCustomerId) options.login_customer_id = loginCustomerId;

  return { customer: client.Customer(options), customerId };
};

export const queryRows = async <T>(customer: AdsCustomer, gaql: string) =>
  (await customer.query(gaql)) as T[];

export const mutateResources = async (
  customer: AdsCustomer,
  operations: Record<string, unknown>[],
  opts?: { validate_only?: boolean },
) =>
  customer.mutateResources(
    operations as Parameters<AdsCustomer["mutateResources"]>[0],
    opts,
  );
