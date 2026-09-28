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
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries({ name: 140, email: 254, phone: 40, subject: 200, topic: 200, message: 5000 })) {
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
  const note = [fields.subject && `Subject: ${fields.subject}`, fields.topic && `Topic: ${fields.topic}`, fields.message]
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
