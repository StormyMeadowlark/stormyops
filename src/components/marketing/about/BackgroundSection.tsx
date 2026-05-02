import type { AboutPageContent } from "@/types/about"
import SectionHeader from "./SectionHeader"

type BackgroundSectionProps = {
  content: AboutPageContent["background"]
}

export default function BackgroundSection({ content }: BackgroundSectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.body}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {content.items.map((item) => (
          <article
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-violet-300/40 hover:bg-white/[0.07]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
              {item.label}
            </p>
            <p className="mt-4 leading-7 text-slate-300">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  )
}