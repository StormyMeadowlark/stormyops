import type { ResumePageContent } from "@/types/resume"

type ResumeHighlightsProps = {
  highlights: ResumePageContent["highlights"]
}

export default function ResumeHighlights({ highlights }: ResumeHighlightsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Resume highlights
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          What the resume is built around
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}