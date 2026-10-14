// Updates a Lead's marketing opt-ins by email. Opt-outs and opt-ins are both recorded with a timestamp.
// ponytail: no email verification, so anyone can change a Lead's flags by knowing the address; add a signed link if abused.
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Invalid origin." }, { status: 403 });
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid body." }, { status: 400 });
  }
  if (!body || typeof body !== "object") return Response.json({ error: "Invalid body." }, { status: 400 });
  if (body.website) return Response.json({ success: true }); // honeypot
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Invalid email." }, { status: 400 });
  const mEmail = body.marketing_email === true;
  const mPhone = body.marketing_phone === true;

  const { CRM_API_HOST, CRM_API_KEY, CRM_API_SECRET } = process.env;
  if (!CRM_API_HOST || !CRM_API_KEY || !CRM_API_SECRET) return Response.json({ error: "Service unavailable." }, { status: 503 });
  const headers = { "Content-Type": "application/json", Authorization: `token ${CRM_API_KEY}:${CRM_API_SECRET}` };
  const record = JSON.stringify({
    at: new Date().toISOString(),
    version: typeof body.version === "string" ? body.version.slice(0, 40) : "unknown",
    lang: typeof body.lang === "string" ? body.lang.slice(0, 10) : "en",
    source: "marketing-preferences",
    marketing_email: mEmail,
    marketing_phone: mPhone,
  });
  try {
    const find = await fetch(
      new URL(`/api/resource/Lead?filters=${encodeURIComponent(JSON.stringify([["email_id", "=", email]]))}&fields=${encodeURIComponent('["name"]')}`, CRM_API_HOST),
      { headers, signal: AbortSignal.timeout(15000), redirect: "error" },
    );
    if (!find.ok) return Response.json({ error: "Lookup failed." }, { status: 502 });
    const leads: { name: string }[] = (await find.json()).data ?? [];
    // Same reply whether or not the address exists, so the form cannot be used to probe the list.
    for (const l of leads) {
      const res = await fetch(new URL(`/api/resource/Lead/${encodeURIComponent(l.name)}`, CRM_API_HOST), {
        method: "PUT",
        headers,
        body: JSON.stringify({ unsubscribed: mEmail ? 0 : 1, marketing_phone_optin: mPhone ? 1 : 0, marketing_consent_record: record }),
        signal: AbortSignal.timeout(15000),
        redirect: "error",
      });
      if (!res.ok) return Response.json({ error: "Update failed." }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to reach the service." }, { status: 502 });
  }
}
