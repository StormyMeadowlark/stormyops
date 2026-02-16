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
      <section id= "work" className="max-w-7xl mx-auto px-6 py-24">
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
      <div className="relative">
  <div className="absolute inset-0 -z-10 blur-3xl rounded-[48px] bg-gradient-to-br from-blue-500/10 via-slate-950/20 to-violet-500/10" />
<section id="about" className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT: Image */}
    <div className="relative flex justify-center lg:justify-start">

      {/* glow panel */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/15 via-slate-950/30 to-violet-500/15 blur-2xl" />

      {/* glass card */}
      <div className="relative rounded-3xl p-6">
        <img
          src="/ashlee-seated.png"
          alt="Ashlee Herken"
          className="max-h-[560px] w-auto object-contain"
        />
      </div>

    </div>

    {/* RIGHT: Text */}
    <div>
      <h3 className="text-2xl font-semibold text-white">About</h3>

      <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">
        I started in science and statistics, moved into data analytics, then became the sole marketer for a real business—
        and eventually built the software systems those operations needed. I’m strongest when I can own delivery end-to-end:
        discovery → build → launch → iterate.
      </p>

      <div className="mt-8 grid gap-4">

        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5">
          <div className="text-sm font-semibold text-white">
            Scientist → Analyst
          </div>
          <div className="mt-1 text-sm text-slate-300">
            Research, statistical modeling, and analytical thinking applied to real-world systems.
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5">
          <div className="text-sm font-semibold text-white">
            Marketer → Operator
          </div>
          <div className="mt-1 text-sm text-slate-300">
            Owned brand, marketing, and operational execution for a real business environment.
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5">
          <div className="text-sm font-semibold text-white">
            Engineer → Implementer
          </div>
          <div className="mt-1 text-sm text-slate-300">
            Build SaaS platforms, automation systems, and operational infrastructure used in production.
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
<section id="capabilities" className="max-w-7xl mx-auto px-6 pb-24">
  {/* bridge header */}
  <div className="flex items-end justify-between gap-6">
    <div>
      <h3 className="text-2xl font-semibold text-white">Capabilities</h3>
      <p className="mt-2 text-slate-400 max-w-2xl">
        I can own delivery end-to-end — from discovery and implementation to analytics, growth, and systems design.
      </p>
    </div>

    <div className="hidden md:block text-xs text-slate-500">
      Implementation • Engineering • Data • Marketing
    </div>
  </div>

  {/* capability grid */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        title: "Implementation",
        subtitle: "Get from kickoff → go-live",
        items: [
          "Discovery + requirements intake",
          "Milestones, risk tracking, coordination",
          "Documentation + training + handoff",
        ],
      },
      {
        title: "Software Engineering",
        subtitle: "Build the system, not just the UI",
        items: [
          "API design + backend services",
          "Auth/RBAC + multi-tenant patterns",
          "Operational workflows + automation",
        ],
      },
      {
        title: "Data & Analytics",
        subtitle: "Make systems measurable",
        items: [
          "Python/R analysis + reporting",
          "Metrics + dashboards + insights",
          "Experiment + iteration mindset",
        ],
      },
      {
        title: "Marketing & Branding",
        subtitle: "Positioning → execution",
        items: [
          "Messaging + offer clarity",
          "Content, ads, video production",
          "Brand systems + consistency",
        ],
      },
    ].map((cap) => (
      <div
        key={cap.title}
        className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">{cap.title}</h4>
            <p className="mt-1 text-xs text-slate-400">{cap.subtitle}</p>
          </div>

          {/* little accent dot */}
          <div className="h-2.5 w-2.5 rounded-full bg-violet-500/90 mt-1" />
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {cap.items.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
<section id="progression" className="max-w-7xl mx-auto px-6 py-24">
  <h3 className="text-2xl font-semibold text-white">Progress</h3>
  <p className="mt-2 text-slate-400 max-w-2xl">
    My trajectory from science → analytics → leadership → engineering — and the work I’m building now.
  </p>

  <div className="mt-10 grid gap-4">
    {[
      {
        date: "Jul 2014",
        title: "Highland Community College",
        detail: "Associate of Arts — General Studies",
      },
      {
        date: "May 2018",
        title: "Washburn University",
        detail: "B.S. — Molecular Biology & Biotechnology",
      },
      {
        date: "Aug 2021",
        title: "Applied Statistics Graduate Certificate",
        detail: "Advanced stats foundation + analytics tooling",
      },
      {
        date: "May 2023",
        title: "Graduate Student Leadership Development Program",
        detail: "Leadership, communication, and execution under pressure",
      },
      {
        date: "Aug 2023",
        title: "Kansas State University",
        detail: "Doctoral coursework and research",
      },
      {
        date: "Nov 2023",
        title: "Stormy Meadowlark",
        detail: "Founded — systems, marketing, and engineering delivery for real clients",
      },
    ].map((item, idx, arr) => (
      <div
        key={`${item.date}-${item.title}`}
        className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6"
      >
        {/* left rail */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-white/10" />

        {/* node */}
        <div className="absolute left-[19px] top-7 h-4 w-4 rounded-full bg-violet-500/90 shadow-[0_0_0_4px_rgba(139,92,246,0.15)]" />

        <div className="pl-10">
          <div className="text-xs text-slate-400">{item.date}</div>
          <div className="mt-1 text-white font-semibold">{item.title}</div>
          <div className="mt-1 text-slate-300 text-sm">{item.detail}</div>
        </div>

        {/* fade the rail at the end */}
        {idx === arr.length - 1 && (
          <div className="absolute left-6 bottom-6 h-10 w-px bg-gradient-to-b from-white/10 to-transparent" />
        )}
      </div>
    ))}
  </div>
</section>
</div>
      {/* Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  )
}
