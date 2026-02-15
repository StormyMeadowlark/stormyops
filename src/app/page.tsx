"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import FeatureCard from "@/components/FeatureCard"
import ProjectModal from "@/components/ProjectModal"

type Project = {
  title: string
  description: string
  impact: string[]
  stack: string[]
}

const projects: Project[] = [
  {
    title: "Skynetrix",
    description:
      "Multi-tenant automotive ops platform with users, shops, vehicles ticketing, payments, and workflow completion.",
    impact: [
      "Built a real operational lifecycle: quote → ticket → completion → payment",
      "Multi-role experience (owner/tech/customer/super-admin)",
      "Payment architecture + Stripe integration patterns",
    ],
    stack: ["Node", "Express", "MongoDB", "Redis", "Stripe"],
  },
  {
    title: "VIN Vision",
    description:
      "Computer vision backend that extracts VIN numbers from images to automate intake.",
    impact: [
      "Image-to-data pipeline for faster vehicle intake",
      "Reduced manual typing errors / mismatches",
      "Backend service design for automation",
    ],
    stack: ["Python", "Computer Vision", "Node", "APIs"],
  },
  {
    title: "HEM Systems",
    description:
      "Vehicle sales + admin dashboard to manage inventory and mark vehicles sold.",
    impact: [
      "Admin CRUD workflows for inventory management",
      "Status transitions (available → sold)",
      "Production deployment supporting real business ops",
    ],
    stack: ["React", "Node", "MongoDB"],
  },
  {
    title: "Growth Ops",
    description:
      "End-to-end marketing + branding execution: social, ads, video, messaging, and positioning.",
    impact: [
      "Built brand + content system from scratch",
      "Campaign execution across multiple channels",
      "Creative + operational consistency across assets",
    ],
    stack: ["Brand Strategy", "Content", "Ads", "Analytics"],
  },
]

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  return (
    <main className="min-h-screen text-white mainbackground-bg mx-auto">
      <Nav />
      <div className="stormyops-bg px-6 grid md:grid-cols-2 gap-9 min-h-screen items-center pt-24">
        
        {/* LEFT SIDE */}
        <div>
          
          <h1 className="text-xl text-slate-300">
            Ashlee Herken
          </h1>

          <h2 className="text-4xl font-bold">
            Operator. Engineer.
          </h2>
          <h2 className="text-4xl font-bold mb-4">
            Implementation Specialist.
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl">
            I design and implement operational systems across software, data, and growth infrastructure.
          </p>

          <p className=" text-slate-400 mb-8 max-w-xl">
            Built SaaS platforms, automation systems, analytics pipelines, and business infrastructure used in real environments
          </p>

          <div className="flex gap-4">
            
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
              View My Work
            </button>

            <button className="border border-slate-600 hover:border-slate-400 px-6 py-3 rounded-lg transition">
              Download Resume
            </button>

          </div>

          <div className="mt-8 text-slate-500 text-sm">
            Skynetrix • VIN Vision • CRM + Sales Systems • Growth + Brand Ops • Data Analytics
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-end pb-10">
  {/* faded square behind portrait */}
  <div className="absolute -inset-x-6 inset-y-10 rounded-4xl bg-black/30 blur-md" />

  <img
    src="/ashlee.png"
    alt="Ashlee Herken"
    className="relative z-10 max-h-[640px] object-contain"
  />
</div>

      </div>
      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-xl font-semibold text-white">Featured Work</h3>
                <p className="mt-2 text-slate-400">
Real systems shipped across SaaS, automation, analytics, and growth infrastructure.
        </p>
        <p className="mt-2 text-slate-400">
Tip — click the purple dot to skim.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <FeatureCard
              key={project.title}
              title={project.title}
              description={project.description}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  )
}
