"use client"

import { useRouter } from "next/navigation"
import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"

type FeatureCardProps = {
  slug: string
  title: string
  subtitle?: string
  description: string
  implementationFocus?: string
  badges?: string[]
  onOpen?: () => void
}

export default function FeatureCard({
  slug,
  title,
  subtitle,
  description,
  implementationFocus,
  badges = [],
  onOpen,
}: FeatureCardProps) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/work/${slug}`)
  }

  return (
    <Card
      interactive
      className="group relative h-full cursor-pointer p-6 shadow-2xl transition-transform hover:-translate-y-0.5"
      role="link"
      tabIndex={0}
      onClick={handleNavigate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleNavigate()
        }
      }}
      aria-label={`View full case study for ${title}`}
    >
      {onOpen ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
          className="absolute right-5 top-5 z-20 h-3 w-3 rounded-full bg-violet-500 transition hover:scale-125 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          aria-label={`Open quick view for ${title}`}
          title="30-second overview"
        />
      ) : null}

      <div className={onOpen ? "pr-8" : ""}>
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        {subtitle ? (
          <p className="mt-1 text-sm font-medium text-slate-400">
            {subtitle}
          </p>
        ) : null}

        {badges.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        ) : null}

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          {description}
        </p>

        {implementationFocus ? (
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
              Implementation Focus
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {implementationFocus}
            </p>
          </div>
        ) : null}

        <div className="mt-6 text-xs text-slate-500 opacity-0 transition group-hover:opacity-100">
          Click card for full case study
        </div>
      </div>
    </Card>
  )
}