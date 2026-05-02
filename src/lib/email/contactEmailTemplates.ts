type ContactEmailTemplateInput = {
  name: string
  company?: string
  email: string
  subject: string
  message: string
  sentAt: string
  siteUrl: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function paragraphize(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />")
}

function emailButton(url: string, label: string, primary = false) {
  if (primary) {
    return `
      <a href="${url}" style="display:inline-block; margin:0 8px 10px 0; padding:12px 16px; border-radius:14px; background:#3b82f6; color:#ffffff; text-decoration:none; font-weight:700;">
        ${label}
      </a>
    `
  }

  return `
    <a href="${url}" style="display:inline-block; margin:0 8px 10px 0; padding:12px 16px; border-radius:14px; border:1px solid rgba(255,255,255,0.18); color:#ffffff; text-decoration:none; font-weight:700;">
      ${label}
    </a>
  `
}

export function buildOwnerEmailText({
  name,
  company,
  email,
  subject,
  message,
  sentAt,
}: ContactEmailTemplateInput) {
  return [
    "New StormyOps contact form submission",
    "",
    `Sent: ${sentAt}`,
    "",
    "From:",
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    "",
    "Subject:",
    subject,
    "",
    "Message:",
    message,
  ].join("\n")
}

export function buildConfirmationEmailText({
  name,
  company,
  email,
  subject,
  message,
  sentAt,
  siteUrl,
}: ContactEmailTemplateInput) {
  return [
    `Thanks for reaching out, ${name}.`,
    "",
    "I received your message through the StormyOps contact form.",
    "",
    `Sent: ${sentAt}`,
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
    "",
    "Helpful links:",
    `${siteUrl}/work`,
    `${siteUrl}/about`,
    `${siteUrl}/progression`,
    `${siteUrl}/resume`,
    "",
    "Thank you,",
    "Ashlee Herken",
  ].join("\n")
}

export function buildOwnerEmailHtml({
  name,
  company,
  email,
  subject,
  message,
  sentAt,
}: ContactEmailTemplateInput) {
  return `
    <div style="margin:0; padding:0; background:#05060c; font-family:Arial, sans-serif; color:#e5e7eb;">
      <div style="max-width:680px; margin:0 auto; padding:32px 20px;">
        <div style="border:1px solid rgba(255,255,255,0.12); border-radius:24px; overflow:hidden; background:linear-gradient(135deg,#0f172a,#05060c 55%,#1e1b4b);">
          <div style="padding:28px;">
            <p style="margin:0 0 12px; color:#93c5fd; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; font-weight:700;">
              StormyOps Contact Form
            </p>

            <h1 style="margin:0; font-size:28px; line-height:1.2; color:#ffffff;">
              New message received
            </h1>

            <p style="margin:16px 0 0; color:#cbd5e1; line-height:1.7;">
              Sent: <strong style="color:#ffffff;">${escapeHtml(sentAt)}</strong>
            </p>
          </div>

          <div style="padding:0 28px 28px;">
            <div style="border:1px solid rgba(255,255,255,0.10); border-radius:18px; padding:20px; background:rgba(255,255,255,0.04);">
              <h2 style="margin:0 0 14px; color:#ffffff; font-size:18px;">Sender</h2>
              <p style="margin:0; color:#cbd5e1; line-height:1.8;">
                <strong style="color:#ffffff;">Name:</strong> ${escapeHtml(name)}<br />
                <strong style="color:#ffffff;">Company:</strong> ${escapeHtml(company || "Not provided")}<br />
                <strong style="color:#ffffff;">Email:</strong> ${escapeHtml(email)}
              </p>
            </div>

            <div style="height:16px;"></div>

            <div style="border:1px solid rgba(255,255,255,0.10); border-radius:18px; padding:20px; background:rgba(255,255,255,0.04);">
              <h2 style="margin:0 0 14px; color:#ffffff; font-size:18px;">Subject</h2>
              <p style="margin:0; color:#cbd5e1; line-height:1.7;">${escapeHtml(subject)}</p>
            </div>

            <div style="height:16px;"></div>

            <div style="border:1px solid rgba(255,255,255,0.10); border-radius:18px; padding:20px; background:rgba(255,255,255,0.04);">
              <h2 style="margin:0 0 14px; color:#ffffff; font-size:18px;">Message</h2>
              <p style="margin:0; color:#cbd5e1; line-height:1.7;">${paragraphize(message)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export function buildConfirmationEmailHtml({
  name,
  company,
  email,
  subject,
  message,
  sentAt,
  siteUrl,
}: ContactEmailTemplateInput) {
  const workUrl = `${siteUrl}/work`
  const aboutUrl = `${siteUrl}/about`
  const progressionUrl = `${siteUrl}/progression`
  const resumeUrl = `${siteUrl}/resume`
  const contactUrl = `${siteUrl}/contact`

  return `
    <div style="margin:0; padding:0; background:#05060c; font-family:Arial, sans-serif; color:#e5e7eb;">
      <div style="max-width:720px; margin:0 auto; padding:32px 20px;">
        <div style="border:1px solid rgba(255,255,255,0.12); border-radius:28px; overflow:hidden; background:linear-gradient(135deg,#0f172a,#05060c 55%,#312e81);">
          <div style="padding:32px;">
            <p style="margin:0 0 12px; color:#93c5fd; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; font-weight:700;">
              StormyOps
            </p>

            <h1 style="margin:0; font-size:32px; line-height:1.15; color:#ffffff;">
              Thanks for reaching out, ${escapeHtml(name)}.
            </h1>

            <p style="margin:18px 0 0; color:#cbd5e1; font-size:16px; line-height:1.7;">
              I received your message through the StormyOps contact form. This confirmation includes a copy of what you sent and a few helpful links if you want to keep exploring my work.
            </p>
          </div>

          <div style="padding:0 32px 32px;">
            <div style="border:1px solid rgba(147,197,253,0.24); border-radius:20px; padding:20px; background:rgba(59,130,246,0.10);">
              <h2 style="margin:0 0 12px; color:#ffffff; font-size:18px;">Your submission</h2>
              <p style="margin:0; color:#cbd5e1; line-height:1.8;">
                <strong style="color:#ffffff;">Sent:</strong> ${escapeHtml(sentAt)}<br />
                <strong style="color:#ffffff;">Name:</strong> ${escapeHtml(name)}<br />
                <strong style="color:#ffffff;">Company:</strong> ${escapeHtml(company || "Not provided")}<br />
                <strong style="color:#ffffff;">Email:</strong> ${escapeHtml(email)}<br />
                <strong style="color:#ffffff;">Subject:</strong> ${escapeHtml(subject)}
              </p>
            </div>

            <div style="height:16px;"></div>

            <div style="border:1px solid rgba(255,255,255,0.10); border-radius:20px; padding:20px; background:rgba(255,255,255,0.04);">
              <h2 style="margin:0 0 12px; color:#ffffff; font-size:18px;">Message</h2>
              <p style="margin:0; color:#cbd5e1; line-height:1.7;">${paragraphize(message)}</p>
            </div>

            <div style="height:24px;"></div>

            <div style="border-radius:22px; padding:24px; background:rgba(255,255,255,0.06);">
              <h2 style="margin:0 0 12px; color:#ffffff; font-size:20px;">While you’re here</h2>
              <p style="margin:0 0 18px; color:#cbd5e1; line-height:1.7;">
                These are the best places to understand how I think and what I’ve built.
              </p>

              <div>
                ${emailButton(workUrl, "View Case Studies", true)}
                ${emailButton(aboutUrl, "About My Approach")}
                ${emailButton(progressionUrl, "Progression")}
                ${emailButton(resumeUrl, "Resume")}
              </div>
            </div>

            <p style="margin:24px 0 0; color:#94a3b8; font-size:14px; line-height:1.7;">
              If you need to send more details, you can use the contact form again here:
              <a href="${contactUrl}" style="color:#93c5fd;">${contactUrl}</a>
            </p>

            <p style="margin:18px 0 0; color:#cbd5e1; line-height:1.7;">
              Thank you,<br />
              <strong style="color:#ffffff;">Ashlee Herken</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
}