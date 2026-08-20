import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";
import { business } from "@/data/siteContent";
import { buildQuoteEmail, EMAIL_LOTUS_CID } from "@/lib/quoteEmail";

const LIMITS = {
  name: 120,
  phone: 40,
  email: 120,
  area: 200,
  service: 120,
  yardSize: 80,
  timeline: 80,
  message: 4000,
  company: 200,
};

function clip(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

async function sendWithResend({ apiKey, from, to, replyTo, subject, text, html, lotusPng }) {
  const body = {
    from,
    to: [to],
    subject,
    text,
    html,
    attachments: [
      {
        filename: "lotus.png",
        content: Buffer.from(lotusPng).toString("base64"),
        content_id: EMAIL_LOTUS_CID,
      },
    ],
  };

  if (replyTo) {
    body.reply_to = replyTo;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = result.message || result.error || `Resend returned ${response.status}`;
    return { error: message };
  }

  return { error: null };
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (clip(body.company, LIMITS.company)) {
      return NextResponse.json({ ok: true });
    }

    const lead = {
      name: clip(body.name, LIMITS.name),
      phone: clip(body.phone, LIMITS.phone),
      email: clip(body.email, LIMITS.email),
      area: clip(body.area, LIMITS.area),
      service: clip(body.service, LIMITS.service),
      yardSize: clip(body.yardSize, LIMITS.yardSize),
      timeline: clip(body.timeline, LIMITS.timeline),
      message: clip(body.message, LIMITS.message),
    };

    if (!lead.name || !lead.phone || !lead.service || !lead.yardSize || !lead.timeline) {
      return NextResponse.json({ error: "Please fill in the required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Estimate requests are temporarily unavailable." }, { status: 500 });
    }

    const to = process.env.QUOTE_TO_EMAIL || business.email;
    const from = process.env.QUOTE_FROM_EMAIL || "Green Lotus Landscape <quotes@greenlotuslandscapes.ca>";
    const { text, html } = buildQuoteEmail(lead);
    const lotusPng = readFileSync(join(process.cwd(), "public/images/email-lotus.png"));

    const { error } = await sendWithResend({
      apiKey,
      from,
      to,
      replyTo: lead.email || undefined,
      subject: `Estimate request from ${lead.name}`,
      text,
      html,
      lotusPng,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your estimate request. Please call us instead." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote form failed:", error);
    return NextResponse.json({ error: "Could not send your estimate request. Please call us instead." }, { status: 502 });
  }
}
