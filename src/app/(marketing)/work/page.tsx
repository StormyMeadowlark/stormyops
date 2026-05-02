import type { Metadata } from "next"
import Nav from "@/components/marketing/Nav"
import ProjectSection from "@/components/marketing/work/ProjectSection"
import { projects } from "@/content/work"
import type { ProjectCategory, ProjectSummary } from "@/types/content"

export const metadata: Metadata = {
  title: "Work | Ashlee Herken",
  description:
    "Explore Ashlee Herken's technical implementation, workflow systems, and product delivery case studies.",
}

const sectionConfig: Array<{
  key: ProjectCategory
  title: string
  description: string
  columns: "two" | "three"
}> = [
  {
    key: "systems-architecture",
    title: "Systems Architecture",
    description:
      "Backend-heavy systems, workflow logic, integrations, and scalable platform foundations.",
    columns: "two",
  },
  {
    key: "implementation-operations",
    title: "Implementation & Operations",
    description:
      "Projects that translate messy business needs into working systems, workflows, and measurable execution.",
    columns: "two",
  },
  {
    key: "product-tools",
    title: "Product Tools",
    description:
      "Focused tools that turn manual, high-friction workflows into guided, repeatable systems.",
    columns: "three",
  },
  {
    key: "client-websites",
    title: "Client Websites",
    description:
      "Custom sites built to clarify positioning, communicate trust, and support real business goals.",
    columns: "three",
  },
  {
    key: "brand-validation",
    title: "Brand & Product Validation",
    description:
      "Work focused on positioning, visual identity, customer discovery, and early product direction.",
    columns: "two",
  },
]

function getProjectsByCategory(category: ProjectCategory): ProjectSummary[] {
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
              Work built across systems, implementation, products, and growth.
            </h1>

            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              Explore the projects behind my portfolio — from multi-tenant SaaS
              architecture and operational workflows to product tools, client
              sites, brand systems, and validation work.
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