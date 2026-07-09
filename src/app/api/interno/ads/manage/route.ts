import { NextRequest, NextResponse } from "next/server";

import {
  executeAdsManageAction,
  getAdsManageData,
  type AdsManageAction,
} from "@/lib/google-ads-manage";
import { formatInternoError, isInternoDashboardAuthorized } from "@/lib/interno-auth";

type ManageRequestBody = {
  key?: string;
  validateOnly?: boolean;
} & AdsManageAction;

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!isInternoDashboardAuthorized(key)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const data = await getAdsManageData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: formatInternoError(error) }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  let body: ManageRequestBody;
  try {
    body = (await request.json()) as ManageRequestBody;
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!isInternoDashboardAuthorized(body.key)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  if (!body.action) {
    return NextResponse.json({ error: "Falta action" }, { status: 400 });
  }

  const { validateOnly, ...action } = body;

  try {
    const result = await executeAdsManageAction(action as AdsManageAction, { validateOnly });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: formatInternoError(error) }, { status: 500 });
  }
}
