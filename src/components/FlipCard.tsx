"use client"

type FlipCardProps = {
  frontTitle: string
  frontSubtitle?: string
  backTitle: string
  bullets: string[]
}

export default function FlipCard({
  frontTitle,
  frontSubtitle,
  backTitle,
  bullets,
}: FlipCardProps) {
  return (
    <div className="group [perspective:1200px]">
      <div className="relative h-28 sm:h-32 rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 [backface-visibility:hidden]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">
                {frontTitle}
              </div>
              {frontSubtitle && (
                <div className="mt-1 text-sm text-slate-300">
                  {frontSubtitle}
                </div>
              )}
            </div>

            {/* tiny cue */}
            <div className="h-2.5 w-2.5 rounded-full bg-violet-500/90 mt-1" />
          </div>

          <div className="mt-4 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition">
            Hover to flip
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-sm font-semibold text-white">{backTitle}</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            {bullets.slice(0, 3).map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}