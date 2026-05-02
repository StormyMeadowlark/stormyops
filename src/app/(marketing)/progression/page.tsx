import type { Metadata } from "next"
import Nav from "@/components/marketing/Nav"
import ProgressionHero from "@/components/marketing/progression/ProgressionHero"
import TimelineSection from "@/components/marketing/progression/TimelineSection"
import TurningPointSection from "@/components/marketing/progression/TurningPointSection"
import CompoundingSection from "@/components/marketing/progression/CompoundingSection"
import CurrentLensSection from "@/components/marketing/progression/CurrentLensSection"
import ProgressionCTA from "@/components/marketing/progression/ProgressionCTA"
import { progressionContent } from "@/content/progressionPage"

export const metadata: Metadata = {
  title: "Progression | Ashlee Herken",
  description:
    "Explore Ashlee Herken's nonlinear progression from science, statistics, communication, and research into technical implementation, systems thinking, and product delivery.",
}

export default function ProgressionPage() {
  return (
    <main className="stormyops-bg min-h-screen text-white">
      <Nav />

      <ProgressionHero
        hero={progressionContent.hero}
        intro={progressionContent.intro}
      />

      <TimelineSection items={progressionContent.timeline} />

      <TurningPointSection content={progressionContent.turningPoint} />

      <CompoundingSection content={progressionContent.compounding} />

      <CurrentLensSection
        currentLens={progressionContent.currentLens}
        hiringTakeaway={progressionContent.hiringTakeaway}
      />

      <ProgressionCTA content={progressionContent.cta} />
    </main>
  )
}