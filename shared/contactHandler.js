/**
 * Shared lightweight contact forwarder (no DB / no storage).
 */

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;
const hits = new Map();

export function json(data, status = 200, origin = "*") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function corsOrigin(request, env) {
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = request.headers.get("Origin") || "";
  if (!allowed.length) return origin || "*";
  if (allowed.includes(origin)) return origin;
  return allowed[0];
}

function clientIp(request) {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function rateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function handleContact(request, env) {
  const origin = corsOrigin(request, env);

  if (request.method === "OPTIONS") {
    return json({ ok: true }, 200, origin);
  }

  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405, origin);
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return json({ ok: false, error: "Too many requests" }, 429, origin);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400, origin);
  }

  if (body.website) {
    return json({ ok: true }, 200, origin);
  }

  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 160);
  const subject = String(body.subject || "Portfolio contact").trim().slice(0, 160);
  const message = String(body.message || "").trim().slice(0, 4000);

  if (!name || !email || !message || !isEmail(email)) {
    return json({ ok: false, error: "Validation failed" }, 400, origin);
  }

  const to = env.CONTACT_TO_EMAIL;
  const from = env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const apiKey = env.RESEND_API_KEY;

  if (!to || !apiKey) {
    return json(
      { ok: false, error: "Server email is not configured" },
      503,
      origin
    );
  }

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5">
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:8px">${escapeHtml(message)}</pre>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html,
    }),
  });

  if (!res.ok) {
    return json({ ok: false, error: "Email provider error" }, 502, origin);
  }

  return json({ ok: true }, 200, origin);
}
