import type { AboutPageContent } from "@/types/about"
import SectionHeader from "./SectionHeader"

type PatternSectionProps = {
  content: AboutPageContent["pattern"]
}

export default function PatternSection({ content }: PatternSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/80 via-slate-950 to-violet-950/70 p-8 shadow-2xl shadow-black/30 lg:p-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.body}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}