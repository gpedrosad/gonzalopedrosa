// app/api/meta/track/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

// ENV: acepta ambos nombres para mayor compatibilidad
const PIXEL_ID =
  process.env.META_PIXEL_ID ?? process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? "";
const ACCESS_TOKEN =
  process.env.META_ACCESS_TOKEN ?? process.env.FACEBOOK_ACCESS_TOKEN ?? "";
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v19.0";
const ENV_TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;
const ENV_TEST_ENABLED = process.env.META_TEST_EVENTS_ENABLED === "1"; // ← flag global opcional

// === Tipos (front -> server) ===
type CurrencyISO = string; // p.ej. "CLP" | "ARS" | "USD"

interface FrontMeta {
  url?: string;
  referrer?: string;
  fbc?: string;
  fbp?: string;
  [k: string]: string | undefined; // UTM u otros strings
}

interface FrontBody {
  event_name?: string;      // por defecto "InitiateCheckout"
  event_id?: string;        // para deduplicación
  value?: number;
  currency?: CurrencyISO;
  content_ids?: string[];
  content_type?: string;
  source?: string;          // etiqueta propia (inline/sticky/etc.)
  meta?: FrontMeta;         // { url, referrer, utms..., fbc, fbp }
  client_ts?: number;       // timestamp del cliente (ms)
  // PII opcional (se hashea aquí):
  email?: string;
  phone?: string;
  external_id?: string;
  // Test Events (para Events Manager)
  test_event_code?: string;
}

// === Tipos (Graph API) ===
interface UserData {
  client_user_agent?: string;
  client_ip_address?: string;
  fbc?: string;
  fbp?: string;
  em?: string[];        // emails hasheados
  ph?: string[];        // teléfonos hasheados
  external_id?: string; // id externo hasheado
}

interface CustomData {
  currency?: CurrencyISO;
  value?: number;
  content_ids?: string[];
  content_type?: string;
}

interface GraphEvent {
  event_name: string;
  event_time: number; // unix seconds
  event_id?: string;
  action_source: "website";
  event_source_url?: string;
  user_data: UserData;
  custom_data?: CustomData;
}

interface GraphPayload {
  data: GraphEvent[];
  test_event_code?: string;
}

interface GraphResponse {
  events_received?: number;
  fbtrace_id?: string;
  error?: {
    message?: string;
    type?: string;
    code?: number;
    error_subcode?: number;
    fbtrace_id?: string;
  };
  [k: string]: unknown;
}

// === Utils ===
function sha256(v: string): string {
  return crypto.createHash("sha256").update(v.trim().toLowerCase()).digest("hex");
}

function getClientIp(req: NextRequest): string | undefined {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim();
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr.trim();
  const cf = req.headers.get("cf-connecting-ip");
  if (cf) return cf.trim();
  return undefined;
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return typeof v === "object" && v !== null ? (v as Record<string, unknown>) : null;
}

function stringArrayOrUndef(v: unknown): string[] | undefined {
  if (Array.isArray(v) && v.every((x) => typeof x === "string")) return v as string[];
  return undefined;
}

function toFrontBody(raw: unknown): FrontBody {
  const r = asRecord(raw) ?? {};
  const metaRec = asRecord(r.meta) ?? {};
  const meta: FrontMeta = {};
  for (const [k, v] of Object.entries(metaRec)) {
    if (typeof v === "string") meta[k] = v;
  }
  return {
    event_name: typeof r.event_name === "string" ? r.event_name : undefined,
    event_id: typeof r.event_id === "string" ? r.event_id : undefined,
    value: typeof r.value === "number" ? r.value : undefined,
    currency: typeof r.currency === "string" ? (r.currency as string) : undefined,
    content_ids: stringArrayOrUndef(r.content_ids),
    content_type: typeof r.content_type === "string" ? r.content_type : undefined,
    source: typeof r.source === "string" ? r.source : undefined,
    meta,
    client_ts: typeof r.client_ts === "number" ? r.client_ts : undefined,
    email: typeof r.email === "string" ? r.email : undefined,
    phone: typeof r.phone === "string" ? r.phone : undefined,
    external_id: typeof r.external_id === "string" ? r.external_id : undefined,
    test_event_code: typeof r.test_event_code === "string" ? r.test_event_code : undefined,
  };
}

// === Handler ===
export async function POST(req: NextRequest) {
  try {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        { ok: false, error: "Faltan PIXEL_ID o ACCESS_TOKEN en variables de entorno" },
        { status: 500 }
      );
    }

    const body = toFrontBody(await req.json());
    const qs = req.nextUrl.searchParams;

    // Toggle para ver explícitamente “Servidor” en Test Events (evita deduplicación)
    const showServer = qs.get("showServer") === "1";

    // Toggle de Test Events:
    // - ?test=1  → fuerza enviar test_event_code (body > env)
    // - ?test=0  → fuerza NO enviar test_event_code
    // - sin ?test → usa body.test_event_code o (si ENV_TEST_ENABLED) ENV_TEST_EVENT_CODE
    const testParam = qs.get("test");
    let test_event_code: string | undefined;
    if (testParam === "1") {
      test_event_code = body.test_event_code ?? ENV_TEST_EVENT_CODE;
    } else if (testParam === "0") {
      test_event_code = undefined;
    } else {
      test_event_code = body.test_event_code ?? (ENV_TEST_ENABLED ? ENV_TEST_EVENT_CODE : undefined);
    }

    const event_name = body.event_name ?? "InitiateCheckout";
    const original_event_id = body.event_id;
    const event_time = Math.floor(Number(body.client_ts ?? Date.now()) / 1000);

    // Si queremos que NO se deduzca con el del navegador, alteramos el event_id
    const event_id = showServer
      ? (original_event_id
          ? `${original_event_id}-srv`
          : `srv-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`)
      : original_event_id;

    // user_data
    const user_data: UserData = {
      client_user_agent: req.headers.get("user-agent") ?? undefined,
      client_ip_address: getClientIp(req),
      fbc: body.meta?.fbc,
      fbp: body.meta?.fbp,
    };

    // PII opcional hasheada (recomendado por Meta)
    if (body.email) user_data.em = [sha256(body.email)];
    if (body.phone) {
      const digits = body.phone.replace(/[^\d]/g, "");
      if (digits) user_data.ph = [sha256(digits)];
    }
    if (body.external_id) user_data.external_id = sha256(body.external_id);

    // custom_data
    const custom_data: CustomData = {
      currency: body.currency,
      value: typeof body.value === "number" ? body.value : undefined,
      content_ids: body.content_ids,
      content_type: body.content_type,
    };

    const event_source_url = body.meta?.url ?? req.nextUrl.toString();

    const graphEvent: GraphEvent = {
      event_name,
      event_time,
      event_id,
      action_source: "website",
      event_source_url,
      user_data,
      custom_data,
    };

    const payload: GraphPayload = {
      data: [graphEvent],
      ...(test_event_code ? { test_event_code } : {}),
    };

    const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(
      ACCESS_TOKEN
    )}`;

    const fbRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const fbJson = (await fbRes.json()) as GraphResponse;
    const ok = fbRes.ok && (fbJson.events_received ?? 0) >= 1;

    return NextResponse.json(
      {
        ok,
        fb: fbJson,
        sent: {
          event_name,
          event_id,
          event_time,
          source: body.source,
          test_event_code: test_event_code ?? null,
          meta: { ...body.meta, url: event_source_url },
        },
      },
      { status: ok ? 200 : 502 }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}