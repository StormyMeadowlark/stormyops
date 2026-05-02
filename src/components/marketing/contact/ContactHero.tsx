import type { ContactPageContent } from "@/types/contact"

type ContactHeroProps = {
  hero: ContactPageContent["hero"]
}

export default function ContactHero({ hero }: ContactHeroProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-32">
      <div className="max-w-4xl">
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
    </section>
  )
}