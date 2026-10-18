// Calls the website's guest API on the Frappe backend (icfc_or_evidence/api/website). No key or secret.
const BASE = "icfc_or_evidence.api.website.";

/** POSTs a form to a guest method, forwarding the visitor's IP for Frappe's rate limits. */
export async function postToFrappe(request: Request, method: string, body: unknown): Promise<Response> {
  const host = process.env.CRM_API_HOST;
  if (!host) return Response.json({ error: "Service unavailable. Please try again later." }, { status: 503 });
  try {
    const res = await fetch(new URL(`/api/method/${BASE}${method}`, host), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    });
    if (res.ok) return Response.json({ success: true });
    if (res.status === 429) return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    if (res.status === 417) {
      // Frappe validation message (frappe.throw), double-encoded in _server_messages.
      const messages = (await res.json().catch(() => ({})))._server_messages;
      const message = messages ? JSON.parse(JSON.parse(messages)[0]).message : "Invalid request.";
      return Response.json({ error: message }, { status: 400 });
    }
    return Response.json({ error: "Unable to submit. Please try again later." }, { status: 502 });
  } catch {
    return Response.json({ error: "Unable to reach the service. Please try again later." }, { status: 502 });
  }
}

/** GETs a guest method's result, cached for an hour. Throws on failure. */
export async function getFromFrappe<T>(method: string): Promise<T> {
  const host = process.env.CRM_API_HOST;
  if (!host) throw new Error("CRM_API_HOST is not set");
  const res = await fetch(new URL(`/api/method/${BASE}${method}`, host), {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(10000),
    redirect: "error",
  });
  if (!res.ok) throw new Error(`${method}: HTTP ${res.status}`);
  return (await res.json()).message;
}
