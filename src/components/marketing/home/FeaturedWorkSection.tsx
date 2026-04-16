import Section from "@/components/ui/Section"
import SectionHeader from "@/components/ui/SectionHeader"
import FeatureCard from "@/components/marketing/FeatureCard"
import type { Project } from "@/types/content"

type FeaturedWorkSectionProps = {
  projects: Project[]
  onOpenProject: (project: Project) => void
}

export default function FeaturedWorkSection({
  projects,
  onOpenProject,
}: FeaturedWorkSectionProps) {
  return (
    <Section id="work">
      <SectionHeader
        title="Featured Work"
        description="Production SaaS systems shipped end-to-end — from architecture to deployment."
      />

      <p className="mt-2 text-sm text-slate-500">
        Tip — click the card for the full case study or the purple dot to skim.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <FeatureCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.cardDescription ?? project.description}
            badges={project.badges?.map((badge) => badge.label)}
            onOpen={() => onOpenProject(project)}
          />
        ))}
      </div>
    </Section>
  )
}