// app/api/phrase/route.ts
import { NextResponse } from "next/server";
import activity from "@/lib/data/activity.json";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const RATE_LIMIT = Number(process.env.RATE_LIMIT ?? 60); 
const WINDOW_MS = Number(process.env.RATE_WINDOW_MS ?? 60_000); 

type Bucket = { count: number; reset: number };
type Store = Map<string, Bucket>;

const globalAny = globalThis as unknown as { __rl_store?: Store };
const store: Store = globalAny.__rl_store ?? new Map();
globalAny.__rl_store = store;


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

function rateHeaders(limit: number, remaining: number, resetMs: number) {
  return {
    "X-RateLimit-Limit": String(limit),
    "X-RateLimit-Remaining": String(Math.max(remaining, 0)),
    "X-RateLimit-Reset": String(Math.floor(resetMs / 1000)), 
  };
}

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const rip = req.headers.get("x-real-ip");
  return rip ?? "0.0.0.0";
}

function applyRateLimit(key: string) {
  const now = Date.now();
  const row = store.get(key);

  if (store.size > 10_000 || Math.random() < 0.01) {
    for (const [k, b] of store) if (now > b.reset) store.delete(k);
  }

  if (!row || now > row.reset) {
    const next = { count: 1, reset: now + WINDOW_MS };
    store.set(key, next);
    return { allowed: true, remaining: RATE_LIMIT - 1, reset: next.reset };
  }

  if (row.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0, reset: row.reset };
  }

  row.count += 1;
  return { allowed: true, remaining: RATE_LIMIT - row.count, reset: row.reset };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: { ...corsHeaders, "Content-Length": "0" },
  });
}

export async function GET(req: Request) {
  const ip = getClientIp(req);
  const verdict = applyRateLimit(ip);

  const baseHeaders = {
    ...corsHeaders,
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    ...rateHeaders(RATE_LIMIT, verdict.remaining, verdict.reset),
  };

  if (!verdict.allowed) {
    const seconds = Math.max(1, Math.ceil((verdict.reset - Date.now()) / 1000));
    return new NextResponse(
      JSON.stringify({
        error: "Rate limit excedido. Intenta de nuevo más tarde.",
      }),
      {
        status: 429,
        headers: { ...baseHeaders, "Retry-After": String(seconds) },
      }
    );
  }

  try {
    const randomIndex = Math.floor(Math.random() * activity.length);
    const randomPhrase = activity[randomIndex];
    return new NextResponse(JSON.stringify(randomPhrase), {
      status: 200,
      headers: baseHeaders,
    });
  } catch {
    return new NextResponse(
      JSON.stringify({ error: "Error al leer las actividades" }),
      {
        status: 500,
        headers: baseHeaders,
      }
    );
  }
}
