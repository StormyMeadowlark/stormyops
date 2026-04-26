import FeatureCard from "@/components/marketing/FeatureCard"
import SectionHeader from "@/components/ui/SectionHeader"
import type { ProjectSummary } from "@/types/content"

type ProjectSectionProps = {
  title: string
  description: string
  projects: ProjectSummary[]
  columns?: "two" | "three" | "four"
}

export default function ProjectSection({
  title,
  description,
  projects,
  columns = "three",
}: ProjectSectionProps) {
  const gridClass =
    columns === "two"
      ? "md:grid-cols-2"
      : columns === "four"
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3"

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
      <SectionHeader title={title} description={description} />

      <div className={`mt-6 grid grid-cols-1 gap-6 ${gridClass}`}>
        {projects.map((project) => (
          <FeatureCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            description={project.cardDescription ?? project.description}
            implementationFocus={project.implementationFocus}
            badges={project.badges?.map((badge) => badge.label)}
          />
        ))}
      </div>
    </section>
  )
}