"use client"

import { useEffect } from "react"
import Badge from "@/components/ui/Badge"
import { cn } from "@/lib/utils/cn"
import { surfaceStyles } from "@/styles/tokens"
import type { Project } from "@/types/content"

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={cn(
          surfaceStyles.modal,
          "max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto p-8"
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} quick view`}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h2 className="truncate text-2xl font-semibold text-white">
              {project.title}
            </h2>

            {hasBadges && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.badges!.map((b) => (
                  <Badge key={b.label}>{b.label}</Badge>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
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
          <p className="leading-relaxed text-slate-300">{project.description}</p>
        </div>

        {hasHighlights && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.highlights!.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <h3 className="text-sm font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {hasOwned && (
          <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-5">
            <h3 className="text-sm font-semibold text-white">What I Owned</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {project.owned}
            </p>
          </div>
        )}

        {(hasStack || hasLinks) && (
          <div className="mt-6 flex flex-col gap-3">
            {hasStack && (
              <div className="flex flex-wrap gap-2">
                {project.stack!.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
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
                    className="text-slate-300 underline decoration-white/20 transition hover:text-white hover:decoration-white/60"
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