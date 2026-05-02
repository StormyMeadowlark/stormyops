import type { ProgressionContent } from "@/types/progression"

type CurrentLensSectionProps = {
  currentLens: ProgressionContent["currentLens"]
  hiringTakeaway: ProgressionContent["hiringTakeaway"]
}

export default function CurrentLensSection({
  currentLens,
  hiringTakeaway,
}: CurrentLensSectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[1fr_1fr]">
      <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          {currentLens.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
          {currentLens.title}
        </h2>

        <p className="mt-5 leading-8 text-slate-300">{currentLens.body}</p>
      </article>

      <article className="rounded-[2rem] border border-violet-300/20 bg-gradient-to-br from-violet-600/15 via-slate-950 to-blue-600/15 p-8 shadow-xl shadow-black/20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
          Hiring takeaway
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
          {hiringTakeaway.title}
        </h2>

        <p className="mt-5 leading-8 text-slate-300">
          {hiringTakeaway.body}
        </p>
      </article>
    </section>
  )
}