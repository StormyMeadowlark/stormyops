"use client"

import { useState } from "react"
import FeaturedWorkSection from "@/components/marketing/home/FeaturedWorkSection"
import ProjectModal from "@/components/marketing/ProjectModal"
import type { ProjectSummary } from "@/types/content"

type FeaturedWorkSectionClientProps = {
  projects: ProjectSummary[]
}

export default function FeaturedWorkSectionClient({
  projects,
}: FeaturedWorkSectionClientProps) {
  const [activeProject, setActiveProject] = useState<ProjectSummary | null>(null)

  return (
    <>
      <FeaturedWorkSection
        projects={projects}
        onOpenProject={setActiveProject}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}