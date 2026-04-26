"use client"

import { useEffect, useRef } from "react"
import Badge from "@/components/ui/Badge"
import { cn } from "@/lib/utils/cn"
import { surfaceStyles } from "@/styles/tokens"
import type { ProjectSummary } from "@/types/content"

type ProjectModalProps = {
  project: ProjectSummary | null
  onClose: () => void
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",")

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!project) return

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key !== "Tab") return

      const container = modalRef.current
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
      } else if (active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocusedRef.current?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  const hasBadges = (project.badges?.length ?? 0) > 0
  const hasHighlights = (project.highlights?.length ?? 0) > 0
  const hasOwned = Boolean(project.owned?.trim())
  const hasStack = (project.stack?.length ?? 0) > 0
  const hasLinks = (project.links?.length ?? 0) > 0
  const hasImplementationFocus = Boolean(project.implementationFocus?.trim())

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6 backdrop-blur-sm"
      onClick={onClose}
      aria-hidden={false}
    >
      <div
        ref={modalRef}
        className={cn(
          surfaceStyles.modal,
          "max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto p-8 outline-none"
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h2
              id="project-modal-title"
              className="text-2xl font-semibold text-white"
            >
              {project.title}
            </h2>

            {project.subtitle ? (
              <p className="mt-1 text-sm font-medium text-slate-400">
                {project.subtitle}
              </p>
            ) : null}

            {hasBadges ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.badges!.map((b) => (
                  <Badge key={b.label}>{b.label}</Badge>
                ))}
              </div>
            ) : null}
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <p className="leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>

        {hasImplementationFocus ? (
          <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
              Implementation Focus
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              {project.implementationFocus}
            </p>
          </div>
        ) : null}

        {hasHighlights ? (
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Key Work
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {project.highlights!.map((h) => (
                <div
                  key={h.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <h4 className="text-sm font-semibold text-white">
                    {h.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {hasOwned ? (
          <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-5">
            <h3 className="text-sm font-semibold text-white">What I Owned</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {project.owned}
            </p>
          </div>
        ) : null}

        {(hasStack || hasLinks) ? (
          <div className="mt-6 flex flex-col gap-3">
            {hasStack ? (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Stack / Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack!.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            ) : null}

            {hasLinks ? (
              <div className="flex flex-wrap gap-3 text-xs">
                {project.links!.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 underline decoration-white/20 transition hover:text-white hover:decoration-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <p className="mt-6 text-xs text-slate-500">
          Quick overview • Press Esc to close
        </p>
      </div>
    </div>
  )
}