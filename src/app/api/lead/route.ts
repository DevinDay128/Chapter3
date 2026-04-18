import { NextResponse } from "next/server";

// TODO: Wire to CRM (CINC / Follow Up Boss) at launch.
export async function POST(request: Request) {
  const form = await request.formData();
  const payload = Object.fromEntries(form.entries());

  // Placeholder: log to server. Replace with CRM POST + email relay.
  console.log("[lead]", payload);

  const accept = request.headers.get("accept") ?? "";
  if (accept.includes("application/json")) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.redirect(new URL("/thank-you", request.url), { status: 303 });
}
