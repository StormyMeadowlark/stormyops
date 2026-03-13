"use client"

import { useState } from "react"
import Nav from "@/components/marketing/Nav"
import ProjectModal from "@/components/marketing/ProjectModal"
import HeroSection from "@/components/marketing/home/HeroSection"
import FeaturedWorkSection from "@/components/marketing/home/FeaturedWorkSection"
import AboutSection from "@/components/marketing/home/AboutSection"
import CapabilitiesSection from "@/components/marketing/home/CapabilitiesSection"
import ProgressionSection from "@/components/marketing/home/ProgressionSection"
import { heroContent } from "@/content/hero"
import { aboutContent } from "@/content/about"
import { capabilityLanes } from "@/content/capabilities"
import { timelineMilestones } from "@/content/progression"
import { projects } from "@/content/work"
import type { Project } from "@/types/content"

export default function HomePageClient() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <main className="min-h-screen text-white mainbackground-bg mx-auto">
      <Nav />

      <HeroSection content={heroContent} />

      <FeaturedWorkSection
        projects={projects}
        onOpenProject={setActiveProject}
      />

      <div className="relative">
        <div className="absolute inset-0 -z-10 blur-3xl rounded-[48px] bg-gradient-to-br from-blue-500/10 via-slate-950/20 to-violet-500/10" />

        <AboutSection content={aboutContent} />
        <CapabilitiesSection lanes={capabilityLanes} />
        <ProgressionSection milestones={timelineMilestones} />
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </main>
  )
}