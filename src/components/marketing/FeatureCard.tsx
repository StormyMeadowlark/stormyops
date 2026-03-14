"use client"

import { useRouter } from "next/navigation"
import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"

type FeatureCardProps = {
  slug: string
  title: string
  description: string
  badges?: string[]
  onOpen: () => void
}

export default function FeatureCard({
  slug,
  title,
  description,
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
      className="group relative h-full cursor-pointer p-6 shadow-2xl hover:-translate-y-0.5 transition-transform"
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

      <div className="pr-8">
        <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>

        {badges.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        )}

        <p className="text-sm leading-relaxed text-slate-300">{description}</p>

        <div className="mt-6 text-xs text-slate-500 opacity-0 transition group-hover:opacity-100">
          Click card for full case study
        </div>
      </div>
    </Card>
  )
}