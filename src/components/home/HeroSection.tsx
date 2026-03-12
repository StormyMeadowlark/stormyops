import type { HeroContent } from "@/types/content"

type HeroSectionProps = {
  content: HeroContent
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="stormyops-bg px-6 grid md:grid-cols-2 gap-9 min-h-screen items-center pt-24">
      <div>
        <h1 className="text-xl text-slate-300">{content.eyebrow}</h1>

        <h2 className="text-4xl font-bold">{content.headingLine1}</h2>
        <h2 className="text-4xl font-bold mb-4">{content.headingLine2}</h2>

        <p className="text-xl text-slate-200 mb-8 max-w-xl">{content.intro}</p>

        <p className="text-slate-400 mb-8 max-w-xl">{content.subtext}</p>

        <div className="flex gap-4">
          <a
            href={content.ctaPrimary.href}
            className="bg-[#6B25BC] hover:bg-[#51218F] px-6 py-3 rounded-lg font-semibold transition"
          >
            {content.ctaPrimary.label}
          </a>

          <a
            href={content.ctaSecondary.href}
            download={content.ctaSecondary.download}
            className="border border-slate-600 hover:border-slate-400 px-6 py-3 rounded-lg transition"
          >
            {content.ctaSecondary.label}
          </a>
        </div>

        <div className="mt-8 text-slate-500 text-sm">{content.footerText}</div>
      </div>

      <div className="relative flex justify-center items-end pb-10">
        <div className="absolute -inset-x-6 inset-y-10 rounded-4xl bg-black/30 blur-md" />
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="relative z-10 max-h-[640px] object-contain"
        />
      </div>
    </section>
  )
}