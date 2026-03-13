"use client"

import { useMemo, useState } from "react"
import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"
import FilterPill from "@/components/ui/FilterPill"
import SectionHeader from "@/components/ui/SectionHeader"
import type { CapabilityLane, LaneKey } from "@/types/content"

type CapabilitiesLanesProps = {
  lanes: CapabilityLane[]
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
    <>
      <div className="flex items-end justify-between gap-6">
        <SectionHeader title={title} description={blurb} />

        <div className="hidden text-xs text-slate-500 md:block">
          {lanes.map((l) => l.label).join(" • ")}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {lanes.map((lane) => (
          <FilterPill
            key={lane.key}
            active={lane.key === active}
            onClick={() => setActive(lane.key)}
          >
            {lane.label}
          </FilterPill>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden">
        <Card
          key={activeLane.key}
          className="animate-laneIn p-7 will-change-transform"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white">{activeLane.label}</h4>
              <p className="mt-1 text-sm text-slate-400">{activeLane.subtitle}</p>
            </div>
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500/90" />
          </div>

          <p className="mt-5 text-slate-300 leading-relaxed">{activeLane.summary}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
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
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

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
    </>
  )
}