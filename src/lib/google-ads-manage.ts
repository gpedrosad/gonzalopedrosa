import { enums } from "google-ads-api";

import {
  getCustomer,
  mutateResources,
  queryRows,
  type AdsCustomer,
} from "./google-ads-client";

export type {
  AdsManageAction,
  AdsManageAd,
  AdsManageAdGroup,
  AdsManageCampaign,
  AdsManageData,
  AdsManageKeyword,
  AdsManageResult,
  EntityStatus,
} from "./google-ads-manage-types";

export { formatMoneyInput, parseMoneyInput } from "./google-ads-manage-format";

import type {
  AdsManageAction,
  AdsManageData,
  AdsManageResult,
  EntityStatus,
} from "./google-ads-manage-types";

const STATUS_LABELS: Record<number, EntityStatus> = {
  2: "ENABLED",
  3: "PAUSED",
};

const MATCH_TYPE: Record<number, string> = {
  2: "EXACT",
  3: "PHRASE",
  4: "BROAD",
};

const BIDDING_STRATEGY: Record<number, string> = {
  2: "Manual CPC",
  3: "Manual CPM",
  4: "Manual CPV",
  5: "Maximize conversions",
  6: "Maximize conversion value",
  7: "Target CPA",
  8: "Target ROAS",
  9: "Target impression share",
  10: "Target CPM",
  11: "Percent CPC",
  12: "Manual CPA",
  13: "Fixed CPM",
  14: "Target CPV",
  15: "Target CPC",
  16: "Commission",
  17: "Invalid",
  18: "Manual CPC enhanced",
};

const labelStatus = (status: number | string | undefined): EntityStatus => {
  const n = Number(status);
  return STATUS_LABELS[n] ?? "PAUSED";
};

const labelMatch = (match: number | string | undefined) =>
  MATCH_TYPE[Number(match)] ?? String(match ?? "-");

const labelBidding = (strategy: number | string | undefined) =>
  BIDDING_STRATEGY[Number(strategy)] ?? String(strategy ?? "-");

const statusEnum = (status: EntityStatus) =>
  status === "ENABLED" ? enums.CampaignStatus.ENABLED : enums.CampaignStatus.PAUSED;

const adGroupStatusEnum = (status: EntityStatus) =>
  status === "ENABLED" ? enums.AdGroupStatus.ENABLED : enums.AdGroupStatus.PAUSED;

const keywordStatusEnum = (status: EntityStatus) =>
  status === "ENABLED" ? enums.AdGroupCriterionStatus.ENABLED : enums.AdGroupCriterionStatus.PAUSED;

const adStatusEnum = (status: EntityStatus) =>
  status === "ENABLED" ? enums.AdGroupAdStatus.ENABLED : enums.AdGroupAdStatus.PAUSED;

export const getAdsManageData = async (): Promise<AdsManageData> => {
  const { customer, customerId } = getCustomer();

  type CampaignRow = {
    campaign?: {
      id?: string | number;
      resource_name?: string;
      name?: string;
      status?: number;
      bidding_strategy_type?: number;
      maximize_conversions?: { target_cpa_micros?: number | string };
      target_cpa?: { target_cpa_micros?: number | string };
    };
    campaign_budget?: {
      resource_name?: string;
      name?: string;
      amount_micros?: number | string;
    };
  };

  type AdGroupRow = {
    campaign?: { name?: string };
    ad_group?: {
      id?: string | number;
      resource_name?: string;
      name?: string;
      status?: number;
      cpc_bid_micros?: number | string;
    };
  };

  type KeywordRow = {
    ad_group?: { name?: string };
    ad_group_criterion?: {
      resource_name?: string;
      status?: number;
      cpc_bid_micros?: number | string;
      effective_cpc_bid_micros?: number | string;
      keyword?: { text?: string; match_type?: number };
    };
  };

  type AdRow = {
    ad_group?: { name?: string; resource_name?: string };
    ad_group_ad?: {
      resource_name?: string;
      status?: number;
      ad?: {
        final_urls?: string[];
        responsive_search_ad?: {
          headlines?: Array<{ text?: string; pinned_field?: number }>;
          descriptions?: Array<{ text?: string }>;
          path1?: string;
          path2?: string;
        };
      };
    };
  };

  const [currencyRows, campaigns, adGroups, keywords, ads] = await Promise.all([
    queryRows<{ customer?: { currency_code?: string } }>(
      customer,
      "SELECT customer.currency_code FROM customer LIMIT 1",
    ),
    queryRows<CampaignRow>(
      customer,
      `SELECT
         campaign.id,
         campaign.resource_name,
         campaign.name,
         campaign.status,
         campaign.bidding_strategy_type,
         campaign.maximize_conversions.target_cpa_micros,
         campaign.target_cpa.target_cpa_micros,
         campaign_budget.resource_name,
         campaign_budget.name,
         campaign_budget.amount_micros
       FROM campaign
       WHERE campaign.status != 'REMOVED'
       ORDER BY campaign.name`,
    ),
    queryRows<AdGroupRow>(
      customer,
      `SELECT
         campaign.name,
         ad_group.id,
         ad_group.resource_name,
         ad_group.name,
         ad_group.status,
         ad_group.cpc_bid_micros
       FROM ad_group
       WHERE ad_group.status != 'REMOVED'
       ORDER BY campaign.name, ad_group.name`,
    ),
    queryRows<KeywordRow>(
      customer,
      `SELECT
         ad_group.name,
         ad_group_criterion.resource_name,
         ad_group_criterion.status,
         ad_group_criterion.keyword.text,
         ad_group_criterion.keyword.match_type,
         ad_group_criterion.cpc_bid_micros,
         ad_group_criterion.effective_cpc_bid_micros
       FROM keyword_view
       WHERE ad_group_criterion.status != 'REMOVED'
         AND ad_group_criterion.negative = FALSE
       ORDER BY ad_group.name, ad_group_criterion.keyword.text`,
    ),
    queryRows<AdRow>(
      customer,
      `SELECT
         ad_group.name,
         ad_group.resource_name,
         ad_group_ad.resource_name,
         ad_group_ad.status,
         ad_group_ad.ad.final_urls,
         ad_group_ad.ad.responsive_search_ad.headlines,
         ad_group_ad.ad.responsive_search_ad.descriptions,
         ad_group_ad.ad.responsive_search_ad.path1,
         ad_group_ad.ad.responsive_search_ad.path2
       FROM ad_group_ad
       WHERE ad_group_ad.ad.type = 'RESPONSIVE_SEARCH_AD'
         AND ad_group_ad.status != 'REMOVED'
       ORDER BY ad_group.name, ad_group_ad.status DESC`,
    ),
  ]);

  const currency = currencyRows[0]?.customer?.currency_code ?? "USD";

  return {
    customerId,
    currency,
    generatedAt: new Date().toISOString(),
    campaigns: campaigns.map((row) => {
      const c = row.campaign ?? {};
      const b = row.campaign_budget ?? {};
      const targetCpaRaw =
        c.maximize_conversions?.target_cpa_micros ?? c.target_cpa?.target_cpa_micros;
      const targetCpaMicros =
        targetCpaRaw != null && Number(targetCpaRaw) > 0 ? Number(targetCpaRaw) : null;

      return {
        id: String(c.id ?? ""),
        resourceName: c.resource_name ?? "",
        name: c.name ?? "-",
        status: labelStatus(c.status),
        budgetResourceName: b.resource_name ?? "",
        budgetName: b.name ?? "-",
        budgetAmountMicros: Number(b.amount_micros ?? 0),
        biddingStrategyType: labelBidding(c.bidding_strategy_type),
        targetCpaMicros,
      };
    }),
    adGroups: adGroups.map((row) => {
      const ag = row.ad_group ?? {};
      const bid = ag.cpc_bid_micros;
      return {
        id: String(ag.id ?? ""),
        resourceName: ag.resource_name ?? "",
        campaignName: row.campaign?.name ?? "-",
        name: ag.name ?? "-",
        status: labelStatus(ag.status),
        cpcBidMicros: bid != null && Number(bid) > 0 ? Number(bid) : null,
      };
    }),
    keywords: keywords.map((row) => {
      const crit = row.ad_group_criterion ?? {};
      const kw = crit.keyword ?? {};
      const bid = crit.cpc_bid_micros;
      const effective = crit.effective_cpc_bid_micros;
      return {
        resourceName: crit.resource_name ?? "",
        adGroupName: row.ad_group?.name ?? "-",
        text: kw.text ?? "-",
        matchType: labelMatch(kw.match_type),
        status: labelStatus(crit.status),
        cpcBidMicros: bid != null && Number(bid) > 0 ? Number(bid) : null,
        effectiveCpcBidMicros:
          effective != null && Number(effective) > 0 ? Number(effective) : null,
      };
    }),
    ads: ads.map((row) => {
      const agAd = row.ad_group_ad ?? {};
      const ad = agAd.ad ?? {};
      const rsa = ad.responsive_search_ad ?? {};
      return {
        resourceName: agAd.resource_name ?? "",
        adGroupResourceName: row.ad_group?.resource_name ?? "",
        adGroupName: row.ad_group?.name ?? "-",
        status: labelStatus(agAd.status),
        finalUrls: ad.final_urls ?? [],
        headlines: (rsa.headlines ?? []).map((h) => h.text ?? "").filter(Boolean),
        descriptions: (rsa.descriptions ?? []).map((d) => d.text ?? "").filter(Boolean),
        path1: rsa.path1 ?? "",
        path2: rsa.path2 ?? "",
      };
    }),
  };
};

const buildReplaceAdOperations = (
  input: Extract<AdsManageAction, { action: "replaceAd" }>,
) => {
  const headlines = input.headlines.map((text) => ({ text: text.trim() })).filter((h) => h.text);
  const descriptions = input.descriptions
    .map((text) => ({ text: text.trim() }))
    .filter((d) => d.text);

  if (headlines.length < 3) {
    throw new Error("Un RSA requiere al menos 3 headlines.");
  }
  if (descriptions.length < 2) {
    throw new Error("Un RSA requiere al menos 2 descriptions.");
  }
  if (!input.finalUrl.trim()) {
    throw new Error("La URL final es obligatoria.");
  }

  const responsiveSearchAd: Record<string, unknown> = { headlines, descriptions };
  if (input.path1?.trim()) responsiveSearchAd.path1 = input.path1.trim();
  if (input.path2?.trim()) responsiveSearchAd.path2 = input.path2.trim();

  return [
    {
      entity: "ad_group_ad",
      operation: "create",
      resource: {
        ad_group: input.adGroupResourceName,
        status: enums.AdGroupAdStatus.ENABLED,
        ad: {
          final_urls: [input.finalUrl.trim()],
          responsive_search_ad: responsiveSearchAd,
        },
      },
    },
    {
      entity: "ad_group_ad",
      operation: "update",
      resource: {
        resource_name: input.oldAdResourceName,
        status: enums.AdGroupAdStatus.PAUSED,
      },
      update_mask: ["status"],
    },
  ];
};

export const buildManageOperations = (action: AdsManageAction): Record<string, unknown>[] => {
  switch (action.action) {
    case "updateBudget":
      if (action.amountMicros < 1_000_000) {
        throw new Error("El presupuesto mínimo es 1 unidad de moneda.");
      }
      return [
        {
          entity: "campaign_budget",
          operation: "update",
          resource: {
            resource_name: action.budgetResourceName,
            amount_micros: action.amountMicros,
          },
          update_mask: ["amount_micros"],
        },
      ];

    case "setStatus":
      switch (action.entity) {
        case "campaign":
          return [
            {
              entity: "campaign",
              operation: "update",
              resource: {
                resource_name: action.resourceName,
                status: statusEnum(action.status),
              },
              update_mask: ["status"],
            },
          ];
        case "ad_group":
          return [
            {
              entity: "ad_group",
              operation: "update",
              resource: {
                resource_name: action.resourceName,
                status: adGroupStatusEnum(action.status),
              },
              update_mask: ["status"],
            },
          ];
        case "keyword":
          return [
            {
              entity: "ad_group_criterion",
              operation: "update",
              resource: {
                resource_name: action.resourceName,
                status: keywordStatusEnum(action.status),
              },
              update_mask: ["status"],
            },
          ];
        case "ad":
          return [
            {
              entity: "ad_group_ad",
              operation: "update",
              resource: {
                resource_name: action.resourceName,
                status: adStatusEnum(action.status),
              },
              update_mask: ["status"],
            },
          ];
        default:
          throw new Error("Entidad no soportada.");
      }

    case "setBid":
      if (action.cpcBidMicros < 10_000) {
        throw new Error("La puja mínima es 0,01 unidades de moneda.");
      }
      if (action.entity === "ad_group") {
        return [
          {
            entity: "ad_group",
            operation: "update",
            resource: {
              resource_name: action.resourceName,
              cpc_bid_micros: action.cpcBidMicros,
            },
            update_mask: ["cpc_bid_micros"],
          },
        ];
      }
      return [
        {
          entity: "ad_group_criterion",
          operation: "update",
          resource: {
            resource_name: action.resourceName,
            cpc_bid_micros: action.cpcBidMicros,
          },
          update_mask: ["cpc_bid_micros"],
        },
      ];

    case "setTargetCpa":
      if (action.targetCpaMicros < 10_000) {
        throw new Error("El CPA objetivo mínimo es 0,01 unidades de moneda.");
      }
      return [
        {
          entity: "campaign",
          operation: "update",
          resource: {
            resource_name: action.campaignResourceName,
            maximize_conversions: {
              target_cpa_micros: action.targetCpaMicros,
            },
          },
          update_mask: ["maximize_conversions.target_cpa_micros"],
        },
      ];

    case "replaceAd":
      return buildReplaceAdOperations(action);

    default:
      throw new Error("Acción no soportada.");
  }
};

export const executeAdsManageAction = async (
  action: AdsManageAction,
  opts?: { validateOnly?: boolean },
): Promise<AdsManageResult> => {
  const { customer } = getCustomer();
  const operations = buildManageOperations(action);
  const validateOnly = opts?.validateOnly ?? false;

  const result = await mutateResources(
    customer,
    operations,
    validateOnly ? { validate_only: true } : undefined,
  );

  const actionLabel: Record<AdsManageAction["action"], string> = {
    updateBudget: "Presupuesto actualizado",
    setStatus: "Estado actualizado",
    setBid: "Puja actualizada",
    setTargetCpa: "CPA objetivo actualizado",
    replaceAd: validateOnly ? "Anuncio validado (dry-run)" : "Anuncio reemplazado",
  };

  return {
    ok: true,
    message: validateOnly ? `${actionLabel[action.action]} (simulación OK)` : actionLabel[action.action],
    validateOnly,
    details: result,
  };
};

export const getAdsCustomer = (): AdsCustomer => getCustomer().customer;
