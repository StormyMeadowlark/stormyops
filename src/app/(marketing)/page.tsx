import Nav from "@/components/marketing/Nav"
import HeroSection from "@/components/marketing/home/HeroSection"
import FeaturedWorkSectionClient from "@/components/marketing/home/FeaturedWorkSectionClient"
import AboutSection from "@/components/marketing/home/AboutSection"
import CapabilitiesSection from "@/components/marketing/home/CapabilitiesSection"
import ProgressionSection from "@/components/marketing/home/ProgressionSection"
import { heroContent } from "@/content/hero"
import { aboutContent } from "@/content/about"
import { capabilityLanes } from "@/content/capabilities"
import { timelineMilestones } from "@/content/progression"
import { projects } from "@/content/work"

const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999))

export default function HomePage() {
  return (
    <main className="mainbackground-bg mx-auto min-h-screen text-white">
      <Nav />
      <HeroSection content={heroContent} />
      <FeaturedWorkSectionClient projects={featuredProjects} />

      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-br from-blue-500/10 via-slate-950/20 to-violet-500/10 blur-3xl" />

        <AboutSection content={aboutContent} />
        <CapabilitiesSection lanes={capabilityLanes} />
        <ProgressionSection milestones={timelineMilestones} />
      </div>
    </main>
  )
}