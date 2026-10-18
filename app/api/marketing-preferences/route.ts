import { postToFrappe } from "../../../lib/frappe.ts";

// Updates a Lead's marketing opt-ins by email; Frappe validates and records the change.
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Invalid origin." }, { status: 403 });
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid body." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) return Response.json({ error: "Invalid body." }, { status: 400 });
  if (body.website) return Response.json({ success: true }); // honeypot
  const { email, marketing_email, marketing_phone, version, lang } = body;
  return postToFrappe(request, "update_marketing_preferences", { email, marketing_email, marketing_phone, version, lang });
}
