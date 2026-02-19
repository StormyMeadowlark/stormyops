"use client"

type FlipCardProps = {
  frontTitle: string
  frontBullets: string[]
  backTitle: string
  backBullets: string[]
}

export default function FlipCard({
  frontTitle,
  frontBullets,
  backTitle,
  backBullets,
}: FlipCardProps) {
  const front = frontBullets.slice(0, 3)
  const back = backBullets.slice(0, 3)

  return (
    <div className="group">
      <div className="relative h-48 sm:h-48 rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 [backface-visibility:hidden]">
          <div className="flex items-start justify-between gap-4">
            <div className="text-sm font-semibold text-white">{frontTitle}</div>

            {/* tiny cue */}
            <div className="h-2.5 w-2.5 rounded-full bg-violet-500/90 mt-1" />
          </div>

          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            {front.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-sm font-semibold text-white">{backTitle}</div>

          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            {back.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}