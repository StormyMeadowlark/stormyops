import type { ProgressionTimelineItem } from "@/types/progression"
import ProgressionSectionHeader from "./ProgressionSectionHeader"

type TimelineSectionProps = {
  items: ProgressionTimelineItem[]
}

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <ProgressionSectionHeader
        eyebrow="Timeline"
        title="A nonlinear path, mapped by what each stage taught me."
        intro="This is not a straight ladder. It is a progression of skills that kept compounding: observation, analysis, communication, leadership, research, and implementation."
      />

      <div className="relative">
        <svg
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-24 -translate-x-1/2 text-blue-300/30 md:block"
          viewBox="0 0 100 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M50 0 C20 120, 80 240, 50 360 C20 480, 80 600, 50 720 C20 840, 80 960, 50 1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid gap-8">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <article
                key={`${item.date}-${item.title}`}
                className="grid gap-4 md:grid-cols-[1fr_5rem_1fr] md:items-center"
              >
                <div className={isLeft ? "md:col-start-1" : "md:col-start-3"}>
                  <TimelineCard item={item} />
                </div>

                <div className="hidden justify-center md:col-start-2 md:row-start-1 md:flex">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/30 bg-slate-950 text-sm font-black text-blue-200 shadow-lg shadow-blue-500/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div
                  className={
                    isLeft
                      ? "hidden md:col-start-3 md:block"
                      : "hidden md:col-start-1 md:row-start-1 md:block"
                  }
                >
                  <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                      Connection now
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.connection}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ item }: { item: ProgressionTimelineItem }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.06]">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
        {item.date}
      </p>

      <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>

      <p className="mt-2 text-sm font-semibold text-violet-200">
        {item.subtitle}
      </p>

      <p className="mt-1 text-sm text-slate-500">{item.institution}</p>

      <p className="mt-5 leading-7 text-slate-300">{item.summary}</p>

      {item.details?.length ? (
        <ul className="mt-5 space-y-2">
          {item.details.map((detail) => (
            <li
              key={detail}
              className="flex gap-3 text-sm leading-6 text-slate-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-violet-300/15 bg-violet-500/10 p-4 md:hidden">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
          Connection now
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {item.connection}
        </p>
      </div>
    </div>
  )
}