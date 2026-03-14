import FlipCard from "@/components/marketing/FlipCard"
import Section from "@/components/ui/Section"
import SectionHeader from "@/components/ui/SectionHeader"
import type { AboutContent } from "@/types/content"
import Image from "next/image"

type AboutSectionProps = {
  content: AboutContent
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/15 via-slate-950/30 to-violet-500/15 blur-2xl" />

          <div className="relative rounded-3xl p-6">
            <Image
              src={content.image.src}
              alt={content.image.alt} width={420} height={560}
              className="max-h-[560px] w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <SectionHeader title={content.title} />

          <div className="mt-4 max-w-2xl space-y-6 text-slate-300 leading-relaxed">
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
    </Section>
  )
}