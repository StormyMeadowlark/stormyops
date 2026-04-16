import Nav from "@/components/marketing/Nav"
import ProjectSection from "@/components/marketing/work/ProjectSection"
import { projects } from "@/content/work"
import type { Project, ProjectCategory } from "@/types/content"

const sectionConfig: Array<{
  key: ProjectCategory
  title: string
  description: string
  columns: "two" | "three"
}> = [
  {
    key: "featured-systems",
    title: "Featured Systems",
    description:
      "Core systems that show architecture, implementation depth, and product thinking.",
    columns: "two",
  },
  {
    key: "product-platform-builds",
    title: "Product & Platform Builds",
    description:
      "Smaller product experiments, utility builds, and backend-heavy implementation work.",
    columns: "three",
  },
  {
    key: "websites",
    title: "Websites",
    description:
      "Client-facing sites built to communicate trust, clarify value, and convert visitors into action.",
    columns: "three",
  },
  {
    key: "brand-marketing",
    title: "Brand Identity / Marketing",
    description:
      "Work centered on positioning, narrative, refreshes, and turning strategy into visible brand systems.",
    columns: "two",
  },
]

function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category)
}

export default function WorkPage() {
  return (
    <main className="stormyops-bg min-h-screen text-white">
      <Nav />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-32">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-slate-400">
              Project Systems
            </p>

            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Work built across systems, products, websites, and growth.
            </h1>

            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              Explore the projects behind my portfolio — from multi-tenant SaaS
              architecture and operational systems to websites, automation, and
              marketing execution.
            </p>
          </div>
        </section>

        <div className="mt-10 space-y-10">
          {sectionConfig.map((section) => {
            const sectionProjects = getProjectsByCategory(section.key)

            if (!sectionProjects.length) return null

            return (
              <ProjectSection
                key={section.key}
                title={section.title}
                description={section.description}
                projects={sectionProjects}
                columns={section.columns}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}