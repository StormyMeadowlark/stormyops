import FeatureCard from "@/components/FeatureCard"
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
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <h3 className="text-xl font-semibold text-white">Featured Work</h3>
      <p className="mt-2 text-slate-400">
        Production SaaS systems shipped end-to-end — from architecture to deployment.
      </p>
      <p className="mt-2 text-slate-400">Tip — click the purple dot to skim.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <FeatureCard
            key={project.title}
            title={project.title}
            description={project.description}
            badges={project.badges?.map((badge) => badge.label)}
            onOpen={() => onOpenProject(project)}
          />
        ))}
      </div>
    </section>
  )
}