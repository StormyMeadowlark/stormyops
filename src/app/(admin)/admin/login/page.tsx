"use client"

import { useMemo, useState } from "react"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormState = "idle" | "invalid" | "submitting" | "error" | "success"

export default function StormyOpsAdminLoginMock() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [formError, setFormError] = useState("")

  const emailError = useMemo(() => {
    if (!emailTouched || !email) return ""
    return emailRegex.test(email)
      ? ""
      : "Enter a valid email address in the format name@domain.com."
  }, [email, emailTouched])

  const passwordError = useMemo(() => {
    if (!passwordTouched || !password) return ""
    return password.length >= 8
      ? ""
      : "Password must be at least 8 characters."
  }, [password, passwordTouched])

  const isFormValid = emailRegex.test(email) && password.length >= 8

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEmailTouched(true)
    setPasswordTouched(true)
    setFormError("")

    if (!isFormValid) {
      setFormState("invalid")
      return
    }

    setFormState("submitting")

    await new Promise((resolve) => setTimeout(resolve, 1200))

    const loginSucceeded = false

    if (!loginSucceeded) {
      setFormState("error")
      setFormError("We couldn’t sign you in with those credentials. Check your email and password and try again.")
      return
    }

    setFormState("success")
  }

  const buttonLabel =
    formState === "submitting"
      ? "Signing In..."
      : formState === "error"
        ? "Try Again"
        : formState === "success"
          ? "Success"
          : "Sign In"

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,103,196,0.35),transparent_34%),radial-gradient(circle_at_top_right,rgba(113,71,255,0.22),transparent_30%),linear-gradient(90deg,#132f66_0%,#071121_38%,#050816_58%,#1a1240_100%)]" />

      <div className="relative grid min-h-screen lg:grid-cols-[1.15fr_0.85fr]">
        <section className="hidden lg:flex flex-col justify-between border-r border-white/10 px-12 py-10 xl:px-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(91,122,255,0.15)]">
                <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 41c0-8.1 6.6-14.7 14.7-14.7 1.5 0 2.9.2 4.3.6C30.1 20 36.7 16 44.2 16 54 16 62 24 62 33.8c0 2.3-.4 4.5-1.3 6.5" stroke="white" strokeWidth="2.6" strokeLinecap="round"/>
                  <path d="M14 48.5h37" stroke="white" strokeWidth="2.6" strokeLinecap="round"/>
                  <path d="M33 22 22 39h9l-5 13 16-20h-9l8-10Z" fill="white"/>
                  <circle cx="16" cy="48" r="4.2" stroke="white" strokeWidth="2.4"/>
                  <circle cx="25" cy="24" r="4.2" stroke="white" strokeWidth="2.4"/>
                  <circle cx="50" cy="39" r="4.2" stroke="white" strokeWidth="2.4"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-wide">StormyOps</p>
                <p className="text-sm text-white/55">Admin Portal</p>
              </div>
            </div>

            <div className="mt-20 max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#8aa8ff]">
                Calm interface. Operator-grade access.
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight xl:text-6xl">
                Publish, manage, and refine your portfolio system.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
                The admin side should feel like the same brand universe as the public site, but more focused,
                more controlled, and less performative.
              </p>
            </div>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-4">
            {[
              {
                label: "Posts",
                value: "Draft, publish, update",
              },
              {
                label: "Media",
                value: "Asset library and uploads",
              },
              {
                label: "Settings",
                value: "Profile, site, access",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm shadow-[0_10px_50px_rgba(0,0,0,0.22)]"
              >
                <div className="mb-4 h-2.5 w-2.5 rounded-full bg-[#9d6bff]" />
                <p className="text-base font-semibold">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative flex min-h-screen items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/5 to-transparent lg:hidden" />

          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,32,0.94)_0%,rgba(6,10,22,0.94)_100%)] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8">
            <div className="lg:hidden mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 41c0-8.1 6.6-14.7 14.7-14.7 1.5 0 2.9.2 4.3.6C30.1 20 36.7 16 44.2 16 54 16 62 24 62 33.8c0 2.3-.4 4.5-1.3 6.5" stroke="white" strokeWidth="2.6" strokeLinecap="round"/>
                  <path d="M14 48.5h37" stroke="white" strokeWidth="2.6" strokeLinecap="round"/>
                  <path d="M33 22 22 39h9l-5 13 16-20h-9l8-10Z" fill="white"/>
                  <circle cx="16" cy="48" r="4.2" stroke="white" strokeWidth="2.4"/>
                  <circle cx="25" cy="24" r="4.2" stroke="white" strokeWidth="2.4"/>
                  <circle cx="50" cy="39" r="4.2" stroke="white" strokeWidth="2.4"/>
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold">StormyOps</p>
                <p className="text-xs text-white/50">Admin Portal</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8b6fff]/30 bg-[#8b6fff]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#cab7ff]">
                Secure access
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Welcome back.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base">
                Sign in to manage posts, media, and site settings.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (formState !== "idle") setFormState("idle")
                    if (formError) setFormError("")
                  }}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="ashlee@stormyops.com"
                  aria-invalid={Boolean(emailError)}
                  aria-describedby={emailError ? "email-error" : undefined}
                  className={`h-13 w-full rounded-2xl px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 ${
                    emailError
                      ? "border border-rose-400/70 bg-rose-500/10 focus:border-rose-300"
                      : "border border-white/10 bg-white/[0.045] focus:border-[#8aa8ff] focus:bg-[#121d36]"
                  }`}
                />
                {emailError ? (
                  <p id="email-error" className="text-sm text-rose-300">
                    {emailError}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-sm font-medium text-white/80" htmlFor="password">
                    Password
                  </label>
                  <button type="button" className="text-xs font-medium text-[#9db7ff] transition hover:text-white">
                    Forgot password?
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (formState !== "idle") setFormState("idle")
                    if (formError) setFormError("")
                  }}
                  onBlur={() => setPasswordTouched(true)}
                  placeholder="Enter your password"
                  aria-invalid={Boolean(passwordError)}
                  aria-describedby={passwordError ? "password-error" : undefined}
                  className={`h-13 w-full rounded-2xl px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 ${
                    passwordError
                      ? "border border-rose-400/70 bg-rose-500/10 focus:border-rose-300"
                      : "border border-white/10 bg-white/[0.045] focus:border-[#8aa8ff] focus:bg-[#121d36]"
                  }`}
                />
                {passwordError ? (
                  <p id="password-error" className="text-sm text-rose-300">
                    {passwordError}
                  </p>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <label className="flex items-center gap-3 text-sm text-white/70">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent" />
                  Keep me signed in
                </label>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  Protected
                </span>
              </div>

              {formError ? (
                <div
                  className="rounded-2xl border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm leading-6 text-rose-200"
                  role="alert"
                >
                  {formError}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className={`group relative h-14 w-full overflow-hidden rounded-2xl text-base font-semibold text-white transition ${
                  formState === "submitting"
                    ? "cursor-wait bg-[#6d91d8] shadow-[0_14px_40px_rgba(109,145,216,0.28)]"
                    : formState === "error"
                      ? "bg-rose-500 shadow-[0_14px_40px_rgba(244,63,94,0.28)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(244,63,94,0.34)]"
                      : formState === "success"
                        ? "bg-emerald-500 shadow-[0_14px_40px_rgba(16,185,129,0.3)]"
                        : "bg-[#4f8dff] shadow-[0_14px_40px_rgba(79,141,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(79,141,255,0.42)]"
                }`}
              >
                <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.08))] opacity-60 transition group-hover:translate-x-6" />
                <span className="relative inline-flex items-center gap-2">
                  {formState === "submitting" ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  ) : null}
                  {buttonLabel}
                </span>
              </button>
            </form>

            <div className="mt-8 rounded-2xl border border-white/8 bg-[#0c1326]/90 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">Admin access only</p>
              <p className="mt-2 text-sm leading-6 text-white/58">
                This area is for content and system management. Keep the screen minimal, fast, and operational.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
