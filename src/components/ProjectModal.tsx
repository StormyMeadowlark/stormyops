"use client"

import { useEffect } from "react"

type Project = {
  title: string
  description: string
  impact: string[]
  stack: string[]
}

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} quick view`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-slate-300">{project.description}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <h3 className="text-sm font-semibold text-white">Impact</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              {project.impact.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <h3 className="text-sm font-semibold text-white">Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full bg-white/5 border border-white/10 px-2 py-1 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Tip: Press <span className="text-slate-300">Esc</span> to close.
        </p>
      </div>
    </div>
  )
}