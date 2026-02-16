"use client"

import { useMemo, useState } from "react"

export type LaneKey = string

export type Lane = {
  key: LaneKey
  label: string
  subtitle: string
  summary: string
  bullets: string[]
  tags: string[]
}

type CapabilitiesLanesProps = {
  lanes: Lane[]
  title?: string
  blurb?: string
  defaultActiveKey?: LaneKey
}

export default function CapabilitiesLanes({
  lanes,
  title = "Capabilities",
  blurb = "Pick a lens. Same operator — different angle depending on what the team needs.",
  defaultActiveKey,
}: CapabilitiesLanesProps) {
  const fallbackKey = lanes[0]?.key

  const initialKey =
    (defaultActiveKey && lanes.some((l) => l.key === defaultActiveKey) && defaultActiveKey) ||
    fallbackKey

  const [active, setActive] = useState<LaneKey>(initialKey)
  const activeLane = useMemo(() => lanes.find((l) => l.key === active) ?? lanes[0], [lanes, active])

  if (!lanes.length || !activeLane) return null

  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-slate-400 max-w-2xl">{blurb}</p>
        </div>

        <div className="hidden md:block text-xs text-slate-500">
          {lanes.map((l) => l.label).join(" • ")}
        </div>
      </div>

      {/* Filter buttons */}
      <div className="mt-6 flex flex-wrap gap-2">
        {lanes.map((lane) => {
          const isActive = lane.key === active
          return (
            <button
              key={lane.key}
              type="button"
              onClick={() => setActive(lane.key)}
              className={[
                "rounded-full px-4 py-2 text-sm border transition",
                isActive
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/20",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {lane.label}
            </button>
          )
        })}
      </div>

      {/* Expanded panel (animated) */}
      <div className="mt-8 relative overflow-hidden">
        <div
          key={activeLane.key}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-7 will-change-transform animate-laneIn"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white">{activeLane.label}</h4>
              <p className="mt-1 text-sm text-slate-400">{activeLane.subtitle}</p>
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-violet-500/90 mt-1" />
          </div>

          <p className="mt-5 text-slate-300 leading-relaxed">{activeLane.summary}</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs text-slate-500">What I do</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {activeLane.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs text-slate-500">Tools & signals</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {activeLane.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-white/5 border border-white/10 px-2 py-1 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* local keyframes (safe + scoped-ish) */}
        <style jsx>{`
          @keyframes laneIn {
            from {
              opacity: 0;
              transform: translateX(16px);
            }
            to {
              opacity: 1;
              transform: translateX(0px);
            }
          }
          .animate-laneIn {
            animation: laneIn 240ms ease-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-laneIn {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  )
}