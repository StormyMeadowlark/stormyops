"use client"

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
    <div className="group relative h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 shadow-2xl transition hover:border-white/20 hover:bg-white/[0.07]">
      
      {/* Accent dot (quick recruiter view) */}
      <button
        type="button"
        onClick={onOpen}
        className="absolute right-5 top-5 h-3 w-3 rounded-full bg-violet-500 hover:scale-125 transition"
        aria-label={`Open quick view for ${title}`}
        title="30-second overview"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>

      {/* Badge Row */}
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-slate-300 leading-relaxed">
        {description}
      </p>

      {/* Subtle Hover Signal */}
      <div className="mt-6 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition">
        Click card for full case study
      </div>
    </div>
  )
}