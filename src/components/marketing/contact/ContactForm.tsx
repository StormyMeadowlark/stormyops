"use client"

import { FormEvent, useState } from "react"
import type { ContactFormState, ContactPageContent } from "@/types/contact"

type ContactFormProps = {
  formContent: ContactPageContent["form"]
  sidePanel: ContactPageContent["sidePanel"]
}

const initialFormState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  subject: "",
  message: "",
  website: "",
}

export default function ContactForm({
  formContent,
  sidePanel,
}: ContactFormProps) {
  const [form, setForm] = useState<ContactFormState>(initialFormState)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  )
  const [errorMessage, setErrorMessage] = useState("")

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))

    if (status === "error") {
      setStatus("idle")
      setErrorMessage("")
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.")
      }

      setStatus("success")
      setForm(initialFormState)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong sending your message.",
      )
    }
  }

  const isSending = status === "sending"

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-24 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 lg:p-8"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Contact form
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
            {formContent.title}
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            {formContent.intro}
          </p>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              required
              autoComplete="name"
              placeholder="Jane Smith"
              onChange={(value) => updateField("name", value)}
            />

            <Field
              label="Company / Organization"
              name="company"
              value={form.company}
              autoComplete="organization"
              placeholder="Company name"
              onChange={(value) => updateField("company", value)}
            />
          </div>

          <Field
            label="Your email"
            name="email"
            type="email"
            value={form.email}
            required
            autoComplete="email"
            placeholder="jane@example.com"
            onChange={(value) => updateField("email", value)}
          />

          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            required
            placeholder="What should we talk about?"
            onChange={(value) => updateField("subject", value)}
          />

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-200"
            >
              Message <span className="text-blue-300">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              required
              rows={9}
              maxLength={5000}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full resize-y rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 hover:border-violet-300/50 focus:border-blue-300 focus:ring-4 focus:ring-blue-300/10"
              placeholder="Write your message like an email..."
            />

            <p className="mt-2 text-xs text-slate-500">
              {form.message.length}/5000 characters
            </p>
          </div>

          {/* Honeypot field. Hidden from real users. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
            />
          </div>

          <div aria-live="polite">
            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-500/10 p-4">
                <p className="font-bold text-emerald-200">
                  {formContent.successTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-100/80">
                  {formContent.successMessage}
                </p>
              </div>
            ) : null}

            {status === "error" ? (
              <div className="rounded-2xl border border-red-300/20 bg-red-500/10 p-4">
                <p className="font-bold text-red-200">Message not sent.</p>
                <p className="mt-2 text-sm leading-6 text-red-100/80">
                  {errorMessage}
                </p>
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-fit rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? formContent.sendingLabel : formContent.submitLabel}
          </button>
        </div>
      </form>

      <aside className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-600/20 via-slate-950 to-violet-600/20 p-8 shadow-2xl shadow-black/30">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            {sidePanel.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
            {sidePanel.title}
          </h2>

          <p className="mt-5 leading-8 text-slate-300">{sidePanel.body}</p>

          <div className="mt-8 grid gap-3">
            {sidePanel.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  value: string
  type?: string
  required?: boolean
  autoComplete?: string
  placeholder?: string
  onChange: (value: string) => void
}

function Field({
  label,
  name,
  value,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-200"
      >
        {label} {required ? <span className="text-blue-300">*</span> : null}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 hover:border-violet-300/50 focus:border-blue-300 focus:ring-4 focus:ring-blue-300/10"
      />
    </div>
  )
}