"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import FeatureCard from "@/components/FeatureCard"
import ProjectModal from "@/components/ProjectModal"
import FlipCard from "@/components/FlipCard"
import CapabilitiesLanes, { Lane } from "@/components/CapabilitiesLanes"
import Timeline, { TimelineMilestone } from "@/components/Timeline"

type Badge = { label: string }

type Project = {
  title: string
  description: string
  badges?: Badge[]
  highlights: any
  owned: string
  stack: string[]
}

const projects: Project[] = [
  {
    title: "Skynetrix",
    description:
      "Multi-tenant SaaS platform managing operational workflows from quote to payment across role-based users.",

    badges: [
      { label: "Multi-Tenant SaaS" },
      { label: "RBAC Architecture" },
      { label: "Payment Orchestration" },
      { label: "Production Deployed" },
    ],

    highlights: [
      {
        title: "Operational Workflow",
        body: "Modeled full lifecycle: quote → ticket → assignment → completion → invoice → payment.",
      },
      {
        title: "Role Architecture",
        body: "Distinct experiences for owner, technician, customer, and super admin.",
      },
      {
        title: "Payment Infrastructure",
        body: "Stripe setup intents, webhook reconciliation, async event handling.",
      },
    ],

    owned:
      "System design, workflow modeling, backend services, RBAC implementation, and Stripe payment orchestration.",

    stack: ["Node", "Express", "MongoDB", "Redis", "Stripe"],
  },

  {
    title: "VIN Vision",
    description:
      "Computer vision service converting vehicle images into structured VIN data to automate intake.",

    badges: [
      { label: "Computer Vision" },
      { label: "Automation Pipeline" },
      { label: "Backend Service" },
    ],

    highlights: [
      {
        title: "Image → Data Pipeline",
        body: "Processed uploaded vehicle images and extracted VIN data into structured backend systems.",
      },
      {
        title: "Error Reduction",
        body: "Reduced manual entry errors and intake friction through automation.",
      },
      {
        title: "Service Architecture",
        body: "Designed modular backend service callable from external systems.",
      },
    ],

    owned:
      "Backend service design, image processing pipeline integration, and structured data validation logic.",

    stack: ["Python", "Computer Vision", "Node", "APIs"],
  },

  {
    title: "HEM Systems",
    description:
      "Sales and inventory management system supporting real vehicle lifecycle transitions.",

    badges: [
      { label: "Admin Dashboard" },
      { label: "Inventory Workflow" },
      { label: "Production Environment" },
    ],

    highlights: [
      {
        title: "Inventory Management",
        body: "CRUD workflows for vehicle intake, listing, and status transitions.",
      },
      {
        title: "Lifecycle States",
        body: "Modeled vehicle state changes: available → pending → sold.",
      },
      {
        title: "Operational Deployment",
        body: "System used in live business environment to manage real inventory.",
      },
    ],

    owned:
      "Frontend dashboard design, backend CRUD services, and operational workflow modeling.",

    stack: ["React", "Node", "MongoDB"],
  },

  {
    title: "Growth Ops",
    description:
      "End-to-end growth and brand system execution across positioning, campaigns, and analytics.",

    badges: [
      { label: "Brand Strategy" },
      { label: "Campaign Execution" },
      { label: "Multi-Channel Growth" },
    ],

    highlights: [
      {
        title: "Brand System",
        body: "Developed messaging framework and visual identity from zero.",
      },
      {
        title: "Campaign Execution",
        body: "Launched and managed social, paid ads, and video initiatives.",
      },
      {
        title: "Operational Consistency",
        body: "Unified messaging across web, content, ads, and offline assets.",
      },
    ],

    owned:
      "Positioning strategy, campaign execution, analytics tracking, and full brand system implementation.",

    stack: ["Strategy", "Content", "Ads", "Analytics"],
  },
]

const capabilityLanes: Lane[] = [
  {
    key: "implementation",
    label: "Implementation",
    subtitle: "Kickoff → go-live → adoption",
    summary:
      "I translate messy requirements into structured workflows, clear milestones, and systems users actually adopt.",
    bullets: [
      "Discovery + workflow mapping + success criteria",
      "Milestones, risk tracking, stakeholder coordination",
      "Training, documentation, and go-live stabilization",
    ],
    tags: ["Discovery", "Enablement", "Go-live", "Stakeholders", "QA"],
  },
  {
    key: "engineering",
    label: "Engineering",
    subtitle: "Build the system, not just the UI",
    summary:
      "I design backend services and workflows aligned to real operational needs—not just interfaces.",
    bullets: [
      "API/service design around operations",
      "RBAC + multi-tenant patterns",
      "Automation + observability mindset",
    ],
    tags: ["Node", "REST", "RBAC", "Multi-tenant", "Queues", "Logging"],
  },
  {
    key: "data",
    label: "Data",
    subtitle: "Make decisions measurable",
    summary:
      "I define metrics, capture signals, and build feedback loops that drive iteration.",
    bullets: [
      "Metric definitions + instrumentation planning",
      "Analysis + reporting for decision-making",
      "Baseline → test → improve iteration cycles",
    ],
    tags: ["Python", "SQL", "KPIs", "Dashboards", "Experimentation"],
  },
  {
    key: "growth",
    label: "Growth",
    subtitle: "Positioning → execution → learning",
    summary:
      "I turn positioning into consistent messaging and campaigns backed by performance data.",
    bullets: [
      "Messaging clarity + offer structure",
      "Content, ads, and campaign systems",
      "Performance tracking + optimization loops",
    ],
    tags: ["Messaging", "Content", "Ads", "Video", "Analytics"],
  },
]

const timelineMilestones: TimelineMilestone[] = [
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
    title: "Applied Statistics",
    detail: "Graduate Certificate — advanced stats foundation + analytics tooling",
  },
  {
    date: "May 2023",
    title: "Leadership Program",
    detail: "Graduate Student Leadership Development Program",
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
            
            <button className="bg-[#6B25BC] hover:bg-[#51218F] px-6 py-3 rounded-lg font-semibold transition">
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
  badges={project.badges?.map(b => b.label)}
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
    <div className="relative flex justify-center">

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
    I build and implement real operational systems. My background spans science, analytics, and growth —
    so I’m strongest owning delivery end-to-end: discovery → build → launch → iterate.
  </p>

  <div className="mt-8 grid gap-4">
    <FlipCard
      frontTitle="Scientist"
      frontSubtitle="Hypothesis → evidence"
      backTitle="Analyst"
      bullets={[
        "Stat modeling + experimentation mindset",
        "Turn messy data into decisions",
        "Measure outcomes and iterate",
      ]}
    />

    <FlipCard
      frontTitle="Marketer"
      frontSubtitle="Positioning → execution"
      backTitle="Operator"
      bullets={[
        "Owned campaigns + systems in real environments",
        "Built repeatable processes (not one-offs)",
        "Focused on time-to-value + adoption",
      ]}
    />

    <FlipCard
      frontTitle="Engineer"
      frontSubtitle="Build the system"
      backTitle="Implementer"
      bullets={[
        "Translate requirements into shipped workflows",
        "Docs, training, and launch support",
        "Make it usable, measurable, and scalable",
      ]}
    />
  </div>
</div>

  </div>
</section>
<section id="capabilities" className="max-w-7xl mx-auto px-6 pb-24">
  {/* bridge header */}
<CapabilitiesLanes
  lanes={capabilityLanes}
  title="How I Deliver"
  blurb="Pick a lens. Same operator — different angle depending on what the team needs."
  defaultActiveKey="implementation"
/>
</section>
<section id="progression" className="max-w-7xl mx-auto px-6">
<Timeline milestones={timelineMilestones} defaultActiveIndex={0} />
</section>
</div>
      {/* Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  )
}
