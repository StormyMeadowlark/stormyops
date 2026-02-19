"use client"

import { useMemo, useState } from "react"

export type TimelineMilestone = {
  date: string
  title: string
  detail: string
}

type TimelineProps = {
  milestones: TimelineMilestone[]
  title?: string
  blurb?: string
  defaultActiveIndex?: number
}

export default function Timeline({
  milestones,
  title = "From Science to Systems",
  blurb = "The evolution from scientific analysis to structured system delivery — aligning data, engineering, and adoption.",
  defaultActiveIndex = 0,
}: TimelineProps) {
  const safeDefault = Math.min(
    Math.max(defaultActiveIndex, 0),
    Math.max(milestones.length - 1, 0)
  )

  const [activeIndex, setActiveIndex] = useState(safeDefault)

  const active = useMemo(
    () => milestones[activeIndex] ?? milestones[0],
    [milestones, activeIndex]
  )

  if (!milestones?.length || !active) return null

  return (
    <section id="progression" className="max-w-7xl mx-auto px-6 pb-24">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-400 max-w-2xl">{blurb}</p>

      <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6">
        <div className="relative">
          {/* rail */}
          <div className="absolute left-0 right-0 top-7 h-px bg-white/10" />

          {/* dots row (scrollable on small screens) */}
          <div className="flex gap-10 overflow-x-auto pb-3 pt-2 snap-x snap-mandatory">
            {milestones.map((m, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={`${m.date}-${m.title}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="relative min-w-[150px] snap-start text-left"
                  aria-pressed={isActive}
                >
                  {/* dot */}
                  <div
                    className={[
                      "absolute left-0 top-5 h-4 w-4 rounded-full transition",
                      isActive
                        ? "bg-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.15)]"
                        : "bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                  />

                  {/* labels */}
                  <div className="pl-7">
                    <div className="text-xs text-slate-400">{m.date}</div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {m.title}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* detail panel */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <div key={`${active.date}-${active.title}`} className="animate-timelineIn">
            <div className="text-xs text-slate-400">{active.date}</div>
            <div className="mt-1 text-lg font-semibold text-white">{active.title}</div>
            <div className="mt-2 text-sm text-slate-300 leading-relaxed">
              {active.detail}
            </div>
          </div>

          <style jsx>{`
            @keyframes timelineIn {
              from {
                opacity: 0;
                transform: translateY(6px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-timelineIn {
              animation: timelineIn 220ms ease-out;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-timelineIn {
                animation: none;
              }
            }
          `}</style>
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Tip: click a milestone • swipe horizontally on mobile
      </p>
    </section>
  )
}