import Image from "next/image"
import Link from "next/link"
import type { AboutPageContent } from "@/types/about"

type AboutHeroProps = {
  hero: AboutPageContent["hero"]
  image: AboutPageContent["image"]
}

export default function AboutHero({ hero, image }: AboutHeroProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
          {hero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={hero.primaryCta.href}
            className="rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            {hero.primaryCta.label}
          </Link>

          <Link
            href={hero.secondaryCta.href}
            className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-violet-300/50 hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40">
          <Image
            src={image.src}
            alt={image.alt}
            width={720}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}