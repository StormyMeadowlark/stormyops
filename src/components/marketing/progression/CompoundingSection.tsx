import type { ProgressionContent } from "@/types/progression"
import ProgressionSectionHeader from "./ProgressionSectionHeader"

type CompoundingSectionProps = {
  content: ProgressionContent["compounding"]
}

export default function CompoundingSection({ content }: CompoundingSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <ProgressionSectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.07]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
              {item.label}
            </p>

            <h3 className="mt-4 text-xl font-black text-white">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}