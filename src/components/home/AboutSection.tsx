import FlipCard from "@/components/FlipCard"
import type { AboutContent } from "@/types/content"

type AboutSectionProps = {
  content: AboutContent
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/15 via-slate-950/30 to-violet-500/15 blur-2xl" />

          <div className="relative rounded-3xl p-6">
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="max-h-[560px] w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">{content.title}</h3>

          <div className="mt-4 text-slate-300 leading-relaxed max-w-2xl space-y-6">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-8">
            {content.cards.map((card) => (
              <FlipCard
                key={card.frontTitle}
                frontTitle={card.frontTitle}
                frontBullets={card.frontBullets}
                backTitle={card.backTitle}
                backBullets={card.backBullets}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}