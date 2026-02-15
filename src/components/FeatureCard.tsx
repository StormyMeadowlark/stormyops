"use client"

type FeatureCardProps = {
  title: string
  description: string
  onOpen: () => void
}

export default function FeatureCard({ title, description, onOpen }: FeatureCardProps) {
  return (
    <div className="relative h-full rounded-2xl bg-black/50 border border-black/10 backdrop-blur-md p-5 shadow-2xl">
      {/* Accent dot (only thing that opens modal) */}
      <button
        type="button"
        onClick={onOpen}
        className="absolute right-4 top-4 h-3 w-3 rounded-full bg-violet-500 hover:scale-125 transition"
        aria-label={`Open quick view for ${title}`}
        title="Quick view"
      />

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </div>
  )
}