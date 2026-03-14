"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",")

export default function Nav() {
  const [open, setOpen] = useState(false)

  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const drawerRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }

      if (e.key !== "Tab") return

      const container = drawerRef.current
      if (!container) return

      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1)

      if (focusable.length === 0) {
        e.preventDefault()
        container.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (active === last || !container.contains(active)) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener("keydown", onKeyDown)
      previouslyFocusedRef.current?.focus()
    }
  }, [open])

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-white/5 bg-slate-950/35 backdrop-blur-xl" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <img src="/StormyOps-Logo.png" alt="StormyOps" className="h-16 w-auto" />
          <span className="text-sm font-medium tracking-wide text-white/90">
            StormyOps
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <Link className="transition hover:text-white" href="/work">
            Work
          </Link>
          <Link className="transition hover:text-white" href="/about">
            About
          </Link>
          <Link className="transition hover:text-white" href="/progression">
            Progression
          </Link>
          <Link className="transition hover:text-white" href="/resume">
            Resume
          </Link>

          <a
            href="https://github.com/StormyMeadowlark"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-slate-300 hover:text-white"
            >
              <path d="M12 .5C5.73.5.75 5.69.75 12.1c0 5.2 3.44 9.61 8.2 11.17.6.12.82-.27.82-.6v-2.2c-3.34.75-4.04-1.45-4.04-1.45-.54-1.43-1.32-1.81-1.32-1.81-1.08-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.06 1.9 2.78 1.35 3.46 1.03.11-.79.42-1.35.76-1.66-2.67-.31-5.48-1.38-5.48-6.13 0-1.36.46-2.47 1.23-3.34-.12-.31-.53-1.58.12-3.29 0 0 1.01-.33 3.3 1.27.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.6 3.3-1.27 3.3-1.27.65 1.71.24 2.98.12 3.29.76.87 1.23 1.98 1.23 3.34 0 4.76-2.81 5.82-5.49 6.12.43.38.82 1.13.82 2.28v3.38c0 .33.22.72.83.6 4.75-1.56 8.18-5.97 8.18-11.17C23.25 5.69 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ashlee-herken"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-slate-300 hover:text-white"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.29V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0z" />
            </svg>
          </a>

          <Link className="transition hover:text-white" href="/contact">
            Contact
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="text-slate-300">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        <div
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          tabIndex={-1}
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <img src="/StormyOps-Logo.png" alt="StormyOps" className="h-10 w-auto" />
              <span className="text-sm font-medium tracking-wide text-white/90">
                StormyOps
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <div className="px-5 py-6">
            <div className="grid gap-2 text-base">
              <Link
                onClick={close}
                className="rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5"
                href="/work"
              >
                Work
              </Link>
              <Link
                onClick={close}
                className="rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5"
                href="/about"
              >
                About
              </Link>
              <Link
                onClick={close}
                className="rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5"
                href="/progression"
              >
                Progression
              </Link>
              <Link
                onClick={close}
                className="rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5"
                href="/resume"
              >
                Resume
              </Link>
              <Link
                onClick={close}
                className="rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5"
                href="/contact"
              >
                Contact
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
              <a
                href="https://github.com/StormyMeadowlark"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.75 5.69.75 12.1c0 5.2 3.44 9.61 8.2 11.17.6.12.82-.27.82-.6v-2.2c-3.34.75-4.04-1.45-4.04-1.45-.54-1.43-1.32-1.81-1.32-1.81-1.08-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.06 1.9 2.78 1.35 3.46 1.03.11-.79.42-1.35.76-1.66-2.67-.31-5.48-1.38-5.48-6.13 0-1.36.46-2.47 1.23-3.34-.12-.31-.53-1.58.12-3.29 0 0 1.01-.33 3.3 1.27.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.6 3.3-1.27 3.3-1.27.65 1.71.24 2.98.12 3.29.76.87 1.23 1.98 1.23 3.34 0 4.76-2.81 5.82-5.49 6.12.43.38.82 1.13.82 2.28v3.38c0 .33.22.72.83.6 4.75-1.56 8.18-5.97 8.18-11.17C23.25 5.69 18.27.5 12 .5z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ashlee-herken"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.29V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Tip: Press <span className="text-slate-300">Esc</span> to close.
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}