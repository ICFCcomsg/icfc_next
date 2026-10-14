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
  // Honeypot from the floating dock form: accept silently, store nothing.
  if (body.website) return Response.json({ success: true });
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries({ name: 140, email: 254, phone: 40, subject: 200, topic: 200, message: 5000, company: 200, country: 100, type: 50, service: 200, page: 500 })) {
    const value = body[key] ?? "";
    if (typeof value !== "string" || value.length > limit) {
      return Response.json({ error: `Invalid ${key}.` }, { status: 400 });
    }
    fields[key] = value.trim();
  }
  if (!fields.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || !fields.message) {
    return Response.json({ error: "Please provide your name, a valid email, and a message." }, { status: 400 });
  }

  const { CRM_API_HOST, CRM_API_KEY, CRM_API_SECRET } = process.env;
  if (!CRM_API_HOST || !CRM_API_KEY || !CRM_API_SECRET) {
    return Response.json({ error: "Contact service is unavailable. Please try again later." }, { status: 503 });
  }
  // Marketing consent evidence (PDPA s43 / DNC): keep what each person agreed to, when, and in which wording version.
  const consent = body.consent && typeof body.consent === "object" ? body.consent : {};
  const marketingEmail = body.marketing_email === true;
  const marketingPhone = body.marketing_phone === true;
  const consentRecord = JSON.stringify({
    at: typeof consent.at === "string" ? consent.at.slice(0, 40) : new Date().toISOString(),
    version: typeof consent.version === "string" ? consent.version.slice(0, 40) : "unknown",
    lang: typeof consent.lang === "string" ? consent.lang.slice(0, 10) : "en",
    pdpa_notice: body.pdpa === "on" || body.pdpa === true,
    marketing_email: marketingEmail,
    marketing_phone: marketingPhone,
    email_text: marketingEmail && typeof consent.email_text === "string" ? consent.email_text.slice(0, 500) : null,
    phone_text: marketingPhone && typeof consent.phone_text === "string" ? consent.phone_text.slice(0, 500) : null,
  });
  const note = [
    fields.type && `Enquiry type: ${fields.type}`,
    fields.service && `Service: ${fields.service}`,
    fields.company && `Company: ${fields.company}`,
    fields.country && `Country: ${fields.country}`,
    fields.page && `Page: ${fields.page}`,
    fields.subject && `Subject: ${fields.subject}`, fields.topic && `Topic: ${fields.topic}`, fields.message]
    .filter(Boolean).join("\n");
  // CRM notes are rich text; escape user input before storing it.
  const escapedNote = note.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
  try {
    const response = await fetch(new URL("/api/resource/Lead", CRM_API_HOST), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${CRM_API_KEY}:${CRM_API_SECRET}`,
      },
      body: JSON.stringify({
        first_name: fields.name,
        lead_name: fields.name,
        email_id: fields.email,
        mobile_no: fields.phone,
        company_name: fields.company || undefined,
        unsubscribed: marketingEmail ? 0 : 1,
        marketing_phone_optin: marketingPhone ? 1 : 0,
        marketing_consent_record: consentRecord,
        status: "Open",
        notes: [{ note: `<pre>${escapedNote}</pre>` }],
      }),
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    });
    if (!response.ok || !(await response.json()).data?.name) {
      return Response.json({ error: "Unable to submit your inquiry. Please try again later." }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to reach the contact service. Please try again later." }, { status: 502 });
  }
}
