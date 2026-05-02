import type { ProgressionContent } from "@/types/progression"

type ProgressionHeroProps = {
  hero: ProgressionContent["hero"]
  intro: ProgressionContent["intro"]
}

export default function ProgressionHero({ hero, intro }: ProgressionHeroProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-14 pt-32">
      <div className="max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
          {hero.eyebrow}
        </p>

        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          {hero.subtitle}
        </p>
      </div>

      <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
          {intro.eyebrow}
        </p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            {intro.title}
          </h2>

          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {intro.body}
          </p>
        </div>
      </div>
    </section>
  )
}