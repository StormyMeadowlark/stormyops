"use client"

import Card from "@/components/ui/Card"

type FeatureCardProps = {
  title: string
  description: string
  badges?: string[]
  onOpen: () => void
}

export default function FeatureCard({
  title,
  description,
  badges = [],
  onOpen,
}: FeatureCardProps) {
  return (
    <Card
      interactive
      className="group relative h-full p-6 shadow-2xl"
    >
      <button
        type="button"
        onClick={onOpen}
        className="absolute right-5 top-5 h-3 w-3 rounded-full bg-violet-500 transition hover:scale-125"
        aria-label={`Open quick view for ${title}`}
        title="30-second overview"
      />

      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>

      {badges.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm leading-relaxed text-slate-300">{description}</p>

      <div className="mt-6 text-xs text-slate-500 opacity-0 transition group-hover:opacity-100">
        Click card for full case study
      </div>
    </Card>
  )
}