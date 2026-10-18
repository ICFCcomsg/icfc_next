import { postToFrappe } from "../../../lib/frappe.ts";

// Validation, the Lead (with PDPA consent record) and the ICFC notification all happen in Frappe.
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }
  // Honeypot from the floating dock form: accept silently, send nothing.
  if (body.website) return Response.json({ success: true });
  return postToFrappe(request, "submit_enquiry", body);
}
