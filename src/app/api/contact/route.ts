import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import {
  buildConfirmationEmailHtml,
  buildConfirmationEmailText,
  buildOwnerEmailHtml,
  buildOwnerEmailText,
} from "@/lib/email/contactEmailTemplates"

export const runtime = "nodejs"

type ContactPayload = {
  name?: string
  company?: string
  email?: string
  subject?: string
  message?: string
  website?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function formatSentAt() {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Chicago",
  }).format(new Date())
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const name = body.name?.trim()
    const company = body.company?.trim()
    const email = body.email?.trim().toLowerCase()
    const subject = body.subject?.trim()
    const message = body.message?.trim()

    // Honeypot field. Real users should never fill this.
    if (body.website) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      )
    }

    if (name.length > 120) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 },
      )
    }

    if (company && company.length > 160) {
      return NextResponse.json(
        { error: "Company name is too long." },
        { status: 400 },
      )
    }

    if (subject.length > 160) {
      return NextResponse.json(
        { error: "Subject is too long." },
        { status: 400 },
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long. Please keep it under 5,000 characters." },
        { status: 400 },
      )
    }

    const apiKey = process.env.SENDGRID_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const fromName = process.env.CONTACT_FROM_NAME ?? "StormyOps"
    const replyToEmail = process.env.CONTACT_REPLY_TO_EMAIL ?? fromEmail
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stormyops.com"

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing contact email environment variables")

      return NextResponse.json(
        { error: "Contact form is not configured yet." },
        { status: 500 },
      )
    }

    const sentAt = formatSentAt()

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: "apikey",
        pass: apiKey,
      },
    })

    const emailInput = {
      name,
      company,
      email,
      subject,
      message,
      sentAt,
      siteUrl,
    }

    await Promise.all([
      transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject: `StormyOps Contact: ${subject}`,
        text: buildOwnerEmailText(emailInput),
        html: buildOwnerEmailHtml(emailInput),
      }),

      transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: email,
        replyTo: replyToEmail,
        subject: "I received your message — StormyOps",
        text: buildConfirmationEmailText(emailInput),
        html: buildConfirmationEmailHtml(emailInput),
      }),
    ])

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      { error: "Something went wrong sending your message." },
      { status: 500 },
    )
  }
}