import type { Metadata } from "next"
import Nav from "@/components/marketing/Nav"
import AboutHero from "@/components/marketing/about/AboutHero"
import RequestRealitySection from "@/components/marketing/about/RequestRealitySection"
import PatternSection from "@/components/marketing/about/PatternSection"
import BackgroundSection from "@/components/marketing/about/BackgroundSection"
import ImplementationLoop from "@/components/marketing/about/ImplementationLoop"
import ProofSection from "@/components/marketing/about/ProofSection"
import CurrentFocusSection from "@/components/marketing/about/CurrentFocusSection"
import AboutCTA from "@/components/marketing/about/AboutCTA"
import { aboutPageContent } from "@/content/aboutPage"

export const metadata: Metadata = {
  title: "About | Ashlee Herken",
  description:
    "Learn how Ashlee Herken approaches technical implementation, workflow systems, data validation, SaaS onboarding, and product delivery.",
}

export default function AboutPage() {
  return (
    <main className="stormyops-bg min-h-screen text-white">
      <Nav />

      <AboutHero
        hero={aboutPageContent.hero}
        image={aboutPageContent.image}
      />

      <RequestRealitySection content={aboutPageContent.requestVsReality} />

      <PatternSection content={aboutPageContent.pattern} />

      <BackgroundSection content={aboutPageContent.background} />

      <ImplementationLoop content={aboutPageContent.implementationLoop} />

      <ProofSection content={aboutPageContent.proof} />

      <CurrentFocusSection
        technical={aboutPageContent.technicalPositioning}
        endUser={aboutPageContent.endUserFocus}
        focus={aboutPageContent.currentFocus}
      />

      <AboutCTA content={aboutPageContent.cta} />
    </main>
  )
}