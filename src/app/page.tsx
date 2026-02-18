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
    title: "Skynetrix: Multi-Tenant SaaS Backend Architecture",
    description:
      "Designed and implemented a backend-first multi-tenant SaaS architecture for automotive shop operations. Built JWT-based RBAC, usage-based billing, Stripe payment orchestration, and Dockerized services with an early-stage Heroku deployment.",

    badges: [
      { label: "Multi-Tenant SaaS" },
      { label: "JWT RBAC" },
      { label: "Usage-Based Billing" },
      { label: "Dockerized Services" },
      { label: "Stripe Integration" },
    ],

    highlights: [
      {
        title: "Tenant & Role Architecture",
        body: "Implemented JWT-based RBAC across Platform Admin, Tenant Admin, Admin, Shop, and User roles with tenant-isolated data modeling and centralized API gateway enforcement.",
      },
      {
        title: "Operational Workflow Modeling",
        body: "Modeled full service lifecycle (job catalog → estimate → quote → repair order → invoice → payment) with vehicle management and shop/group membership structure.",
      },
      {
        title: "Billing & Async Infrastructure",
        body: "Designed usage-based billing for shops using Redis + BullMQ, integrated Stripe for shop subscriptions, customer charges, and refund processing, and containerized services with Docker for structured deployment.",
      },
    ],

    owned:
      "Owned system architecture, API gateway design, RBAC enforcement, billing logic, Stripe integration, Redis/BullMQ usage tracking, Dockerization, and initial Heroku deployment.",

    stack: ["Node", "Express", "MongoDB", "Redis", "BullMQ", "Stripe", "Docker", "Heroku"],
  },

  {
    title: "VIN Vision: VIN OCR & Decode Automation Service",
    description:
      "Built a VIN extraction and decoding service that converts uploaded vehicle images into structured vehicle data using Google Cloud Vision API and the NHTSA VIN Decoder API.",

    badges: [
      { label: "Google Cloud Vision API" },
      { label: "Image Preprocessing" },
      { label: "OCR Automation" },
      { label: "API Integration" },
      { label: "Backend Service" },
    ],

    highlights: [
      {
      title: "Image Preprocessing",
      body: "Implemented image adjustments (noise reduction, contrast enhancement) prior to OCR to improve VIN recognition accuracy. Required correct image orientation for reliable extraction.",
      },
      {
        title: "Image → VIN Extraction",
        body: "Processed uploaded vehicle images using Google Cloud Vision OCR to extract VIN characters.",
      },
      {
        title: "VIN Decoding Pipeline",
        body: "Sent validated VIN to the NHTSA VIN Decoder API to return structured vehicle data including year, make, and model.",
      },
      {
        title: "Service Architecture",
        body: "Built a modular Node.js service using Multer for file uploads, enabling automated intake integration into backend systems.",
      },
    ],

    owned:
      "Image preprocessing pipeline, OCR integration, VIN validation logic, NHTSA API orchestration, Multer file handling, and backend service design.",

    stack: ["JavaScript", "Node", "Google Cloud Vision API", "NHTSA API", "Multer"],
  },

  {
    title: "HEM Systems: Full-Stack Marketing & Inventory Platform",

    description:
      "Designed and deployed a full-stack marketing website and authenticated admin system for managing live vehicle inventory, customer inquiries, and operational workflows.",

    badges: [
    { label: "Full-Stack MERN" },
    { label: "JWT Authentication" },
    { label: "Admin Dashboard" },
    { label: "Live Deployment" },
    { label: "Cloud Storage" },
    ],

    highlights: [
      {
        title: "Marketing Website + Admin System",
        body: "Built a public-facing vehicle sales website with authenticated JWT-based RBAC backend allowing admins to securely log in and manage inventory listings.",
      },
      {
        title: "Vehicle Inventory Workflow",
        body: "Implemented vehicle lifecycle management with CRUD operations, state transitions, and controlled listing updates.",
      },
      {
        title: "Image Upload & Cloud Storage",
        body: "Integrated Multer for file uploads with enforced limits (max 40 files and size restrictions), storing vehicle images on a DigitalOcean Droplet.",
      },
      {
        title: "Contact & Email Automation",
        body: "Built contact form submission pipeline using Nodemailer and SendGrid for transactional messaging and inquiry routing.",
      },
      {
        title: "Deployment & Monitoring",
        body: "Deployed frontend and backend via Heroku and Firebase, integrated Google Analytics for traffic and engagement tracking.",
      },
    ],

    owned:
      "End-to-end system design including frontend UI, backend API development, JWT authentication, file upload handling, cloud storage integration, email automation, analytics tracking, and production deployment.",

    stack: [    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Multer",
    "DigitalOcean",
    "Heroku",
    "Firebase",
    "SendGrid",
    "Nodemailer",
    "Google Analytics"],
  },

  {
  title: "Growth Ops: Full-Funnel Marketing & Revenue Attribution",
  description:
    "Led end-to-end marketing strategy and execution for HEM Automotive, serving as the sole marketing function responsible for brand identity, paid acquisition, content, and revenue tracking.",

  badges: [
    { label: "Paid Acquisition" },
    { label: "Revenue Attribution" },
    { label: "Brand Development" },
    { label: "Full-Funnel Strategy" },
  ],

  highlights: [
    {
      title: "Brand & Positioning",
      body: "Designed company logo, developed brand identity and tagline, wrote all website copy, and established consistent messaging across digital and offline channels.",
    },
    {
      title: "Paid Advertising & Lead Generation",
      body: "Managed Facebook, Google, and Yelp ad campaigns; optimized targeting and messaging to drive inbound calls and service bookings.",
    },
    {
      title: "Revenue Attribution",
      body: "Tracked inbound calls and campaign performance to tie specific advertising efforts to increased shop revenue.",
    },
    {
      title: "Content & Social Execution",
      body: "Produced video content and graphics for YouTube, Facebook, and TikTok; managed social media presence and engagement.",
    },
    {
      title: "Market Research & Planning",
      body: "Conducted competitive market research and developed marketing plans supporting business relocation and growth strategy.",
    },
  ],

  owned:
    "Owned brand development, paid media strategy, copywriting, campaign execution, content production, analytics tracking, competitive research, and revenue attribution.",

  stack: [
    "Facebook Ads",
    "Google Ads",
    "Yelp Ads",
    "Google Analytics",
    "Content Production",
    "Copywriting",
    "Market Research"
  ],
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
            
            <a
            href="#work"
            className="bg-[#6B25BC] hover:bg-[#51218F] px-6 py-3 rounded-lg font-semibold transition">
              View My Work
            </a>

            <a 
            href="/Herken_Resume_Implementation_Specialist.pdf"
            download
            className="border border-slate-600 hover:border-slate-400 px-6 py-3 rounded-lg transition">
              Download Resume
            </a>

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
Production SaaS systems shipped end-to-end — from architecture to deployment.
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
