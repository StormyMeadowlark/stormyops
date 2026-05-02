"use client"

import { useEffect, useState } from "react"
import type { ResumePageContent } from "@/types/resume"

type ResumeViewerProps = {
  resume: ResumePageContent["primaryResume"]
  fitSummary: ResumePageContent["fitSummary"]
}

export default function ResumeViewer({
  resume,
  fitSummary,
}: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-600/20 via-slate-950 to-violet-600/20 p-8 shadow-2xl shadow-black/30">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                {resume.title}
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                {resume.role}
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                {resume.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                >
                  {resume.previewLabel}
                </button>

                <a
                  href={resume.file}
                  download
                  className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-violet-300/50 hover:bg-white/10"
                >
                  {resume.downloadLabel}
                </a>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
              Fit summary
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              {fitSummary.title}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {fitSummary.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {fitSummary.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close resume preview"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-10 flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Resume Preview
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {resume.role}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={resume.file}
                  download
                  className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-400"
                >
                  Download
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 bg-slate-900">
              <iframe
                src={`${resume.file}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Ashlee Herken resume preview"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}