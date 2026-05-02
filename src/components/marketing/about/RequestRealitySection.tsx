import type { AboutPageContent } from "@/types/about"
import SectionHeader from "./SectionHeader"

type RequestRealitySectionProps = {
  content: AboutPageContent["requestVsReality"]
}

export default function RequestRealitySection({
  content,
}: RequestRealitySectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {content.items.map((item) => (
          <article
            key={item.project}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.06]"
          >
            <div className="absolute right-5 top-5 rounded-full border border-violet-300/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
              {item.project}
            </div>

            <div className="pr-24">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Asked for
              </p>
              <h3 className="mt-2 text-xl font-black text-white">
                {item.askedFor}
              </h3>
            </div>

            <div className="my-6 h-px bg-gradient-to-r from-blue-400/60 via-violet-400/50 to-transparent" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Found underneath
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                {item.found}
              </p>
            </div>

            <p className="mt-5 leading-7 text-slate-300">{item.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  )
}