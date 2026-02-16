"use client"

import { useEffect } from "react"

type ProjectBadge = { label: string }
type ProjectHighlight = { title: string; body: string }

export type Project = {
  title: string
  description: string
  badges?: ProjectBadge[]
  highlights?: ProjectHighlight[]
  owned?: string
  stack?: string[]
  links?: { label: string; href: string }[]
}

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  const hasBadges = (project.badges?.length ?? 0) > 0
  const hasHighlights = (project.highlights?.length ?? 0) > 0
  const hasOwned = Boolean(project.owned?.trim())
  const hasStack = (project.stack?.length ?? 0) > 0
  const hasLinks = (project.links?.length ?? 0) > 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white-950/90 backdrop-blur-xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} quick view`}
      >
        {/* Header */}
        <div className="flex justify-between items-start gap-6">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-white truncate">
              {project.title}
            </h2>

            {/* Snapshot badges */}
            {hasBadges && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.badges!.map((b) => (
                  <span
                    key={b.label}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200"
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 transition"
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

        {/* One-sentence “what it is / why it matters” */}
        <div className="mt-6">
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Highlights grid (2–4 blocks recommended) */}
        {hasHighlights && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.highlights!.map((h) => (
              <div
                key={h.title}
                className="rounded-xl bg-white/5 border border-white/10 p-4"
              >
                <h3 className="text-sm font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Ownership callout */}
        {hasOwned && (
          <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-white/10 p-5">
            <h3 className="text-sm font-semibold text-white">What I Owned</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {project.owned}
            </p>
          </div>
        )}

        {/* Optional footer: stack + links (small + skimmable) */}
        {(hasStack || hasLinks) && (
          <div className="mt-6 flex flex-col gap-3">
            {hasStack && (
              <div className="flex flex-wrap gap-2">
                {project.stack!.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-full bg-white/5 border border-white/10 px-2 py-1 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {hasLinks && (
              <div className="flex flex-wrap gap-3 text-xs">
                {project.links!.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white underline decoration-white/20 hover:decoration-white/60 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="mt-6 text-xs text-slate-500">
          Quick overview • Press Esc to close
        </p>
      </div>
    </div>
  )
}