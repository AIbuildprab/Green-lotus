import { business, fullAddress } from "../data/siteContent.js";

const SITE_URL = "https://www.greenlotuslandscapes.ca";
const LOTUS_GREEN = "#8bc34a";
const LOTUS_DEEP = "#74a838";
const INK = "#0a0a0a";
const BARK = "#6b5e4e";
const PAPER = "#eef1eb";
const MIST = "#f7f8f5";
const WHITE = "#ffffff";
const FONT = "Arial, Helvetica, sans-serif";

export const EMAIL_LOTUS_CID = "lotus";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fieldRow(label, value, href) {
  const display = escapeHtml(value);
  const content = href
    ? `<a href="${escapeHtml(href)}" style="color:${INK};text-decoration:none;font-weight:700;">${display}</a>`
    : `<span style="color:${INK};font-weight:700;">${display}</span>`;

  return `
    <tr>
      <td style="padding:11px 0;border-bottom:1px solid #e3e7df;width:140px;vertical-align:top;font-family:${FONT};font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:${BARK};">
        ${escapeHtml(label)}
      </td>
      <td style="padding:11px 0;border-bottom:1px solid #e3e7df;font-family:${FONT};font-size:15px;line-height:1.4;">
        ${content}
      </td>
    </tr>`;
}

export function buildQuoteEmail(lead, { logoSrc = `cid:${EMAIL_LOTUS_CID}` } = {}) {
  const text = [
    "New estimate request from the website.",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "(not provided)"}`,
    `Address or area: ${lead.area || "(not provided)"}`,
    `Service: ${lead.service}`,
    `Yard size: ${lead.yardSize}`,
    `Timeline: ${lead.timeline}`,
    "",
    "Message:",
    lead.message || "(none)",
  ].join("\n");

  const emailHref = lead.email ? `mailto:${lead.email}` : undefined;
  const phoneHref = lead.phone ? `tel:${lead.phone.replace(/[^\d+]/g, "")}` : undefined;
  const safeName = escapeHtml(lead.name);

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New estimate request</title>
  </head>
  <body style="margin:0;padding:0;background-color:${PAPER};color:${INK};font-family:${FONT};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      ${safeName} requested an estimate for ${escapeHtml(lead.service)}.
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${PAPER};">
      <tr>
        <td align="center" style="padding:28px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${WHITE};border-radius:8px;overflow:hidden;">
            <tr>
              <td style="height:6px;background-color:${LOTUS_GREEN};font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:22px 28px 18px;background-color:${WHITE};border-bottom:1px solid #e3e7df;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;padding-right:12px;">
                      <img src="${logoSrc}" alt="Green Lotus Landscape" width="72" height="35" style="display:block;border:0;outline:none;width:72px;height:auto;" />
                    </td>
                    <td style="vertical-align:middle;">
                      <p style="margin:0;font-family:${FONT};font-size:18px;font-weight:700;color:${INK};line-height:1.1;">Green Lotus</p>
                      <p style="margin:4px 0 0;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${LOTUS_DEEP};">Landscape</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${LOTUS_DEEP};">Website form</p>
                <h1 style="margin:0 0 10px;font-family:${FONT};font-size:24px;line-height:1.25;color:${INK};">New estimate request</h1>
                <p style="margin:0 0 22px;font-family:${FONT};font-size:15px;line-height:1.6;color:${BARK};">
                  ${safeName} submitted the contact form. Reply to this email or call them back.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow("Name", lead.name)}
                  ${fieldRow("Phone", lead.phone, phoneHref)}
                  ${fieldRow("Email", lead.email || "(not provided)", emailHref)}
                  ${fieldRow("Address", lead.area || "(not provided)")}
                  ${fieldRow("Service", lead.service)}
                  ${fieldRow("Yard size", lead.yardSize)}
                  ${fieldRow("Timeline", lead.timeline)}
                </table>
                <p style="margin:22px 0 8px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BARK};">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${MIST};border-left:4px solid ${LOTUS_GREEN};">
                  <tr>
                    <td style="padding:14px 16px;font-family:${FONT};font-size:15px;line-height:1.6;color:${INK};white-space:pre-wrap;">
                      ${escapeHtml(lead.message || "(none)")}
                    </td>
                  </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                  <tr>
                    <td style="border-radius:6px;background-color:${LOTUS_GREEN};">
                      <a href="${business.phoneHref}" style="display:inline-block;padding:12px 20px;font-family:${FONT};font-size:14px;font-weight:700;color:${WHITE};text-decoration:none;">
                        Call ${business.phoneDisplay}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background-color:${MIST};font-family:${FONT};font-size:12px;line-height:1.6;color:${BARK};">
                ${escapeHtml(business.name)} · ${escapeHtml(fullAddress)}<br />
                <a href="${SITE_URL}" style="color:${LOTUS_DEEP};text-decoration:none;font-weight:700;">greenlotuslandscapes.ca</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { text, html };
}
