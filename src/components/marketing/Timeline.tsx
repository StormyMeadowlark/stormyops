"use client"

import { useMemo, useState } from "react"
import Card from "@/components/ui/Card"
import SectionHeader from "@/components/ui/SectionHeader"
import type { TimelineMilestone } from "@/types/content"

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
    <>
      <SectionHeader title={title} description={blurb} />

      <Card className="mt-10 p-6">
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 h-px bg-white/10" />

          <div className="flex snap-x snap-mandatory gap-10 overflow-x-auto pb-3 pt-2">
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
                  <div
                    className={[
                      "absolute left-0 top-5 h-4 w-4 rounded-full transition",
                      isActive
                        ? "bg-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.15)]"
                        : "bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                  />

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
      </Card>

      <p className="mt-3 text-xs text-slate-500">
        Tip: click a milestone • swipe horizontally on mobile
      </p>
    </>
  )
}