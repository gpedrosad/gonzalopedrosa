export type EntityStatus = "ENABLED" | "PAUSED";

export type AdsManageCampaign = {
  id: string;
  resourceName: string;
  name: string;
  status: EntityStatus;
  budgetResourceName: string;
  budgetName: string;
  budgetAmountMicros: number;
  biddingStrategyType: string;
  targetCpaMicros: number | null;
};

export type AdsManageAdGroup = {
  id: string;
  resourceName: string;
  campaignName: string;
  name: string;
  status: EntityStatus;
  cpcBidMicros: number | null;
};

export type AdsManageKeyword = {
  resourceName: string;
  adGroupName: string;
  text: string;
  matchType: string;
  status: EntityStatus;
  cpcBidMicros: number | null;
  effectiveCpcBidMicros: number | null;
};

export type AdsManageAd = {
  resourceName: string;
  adGroupResourceName: string;
  adGroupName: string;
  status: EntityStatus;
  finalUrls: string[];
  headlines: string[];
  descriptions: string[];
  path1: string;
  path2: string;
};

export type AdsManageData = {
  customerId: string;
  currency: string;
  generatedAt: string;
  campaigns: AdsManageCampaign[];
  adGroups: AdsManageAdGroup[];
  keywords: AdsManageKeyword[];
  ads: AdsManageAd[];
};

export type AdsManageAction =
  | {
      action: "updateBudget";
      budgetResourceName: string;
      amountMicros: number;
    }
  | {
      action: "setStatus";
      entity: "campaign" | "ad_group" | "keyword" | "ad";
      resourceName: string;
      status: EntityStatus;
    }
  | {
      action: "setBid";
      entity: "ad_group" | "keyword";
      resourceName: string;
      cpcBidMicros: number;
    }
  | {
      action: "setTargetCpa";
      campaignResourceName: string;
      targetCpaMicros: number;
    }
  | {
      action: "replaceAd";
      adGroupResourceName: string;
      oldAdResourceName: string;
      finalUrl: string;
      headlines: string[];
      descriptions: string[];
      path1?: string;
      path2?: string;
    };

export type AdsManageResult = {
  ok: boolean;
  message: string;
  validateOnly: boolean;
  details?: unknown;
};

export const microsToUnits = (micros: number) => micros / 1_000_000;

export const formatMoneyInput = (micros: number) => microsToUnits(micros).toFixed(2);
