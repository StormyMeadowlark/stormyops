import Button from "@/components/ui/Button"
import type { HeroContent } from "@/types/content"

type HeroSectionProps = {
  content: HeroContent
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="stormyops-bg grid min-h-screen items-center gap-9 px-6 pt-24 md:grid-cols-2">
      <div>
        <h1 className="text-xl text-slate-300">{content.eyebrow}</h1>

        <h2 className="text-4xl font-bold">{content.headingLine1}</h2>
        <h2 className="mb-4 text-4xl font-bold">{content.headingLine2}</h2>

        <p className="mb-8 max-w-xl text-xl text-slate-200">{content.intro}</p>
        <p className="mb-8 max-w-xl text-slate-400">{content.subtext}</p>

        <div className="flex gap-4">
          <a href={content.ctaPrimary.href}>
            <Button variant="primary" size="lg">
              {content.ctaPrimary.label}
            </Button>
          </a>

          <a href={content.ctaSecondary.href} download={content.ctaSecondary.download}>
            <Button variant="secondary" size="lg">
              {content.ctaSecondary.label}
            </Button>
          </a>
        </div>

        <div className="mt-8 text-sm text-slate-500">{content.footerText}</div>
      </div>

      <div className="relative flex items-end justify-center pb-10">
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