import Nav from "@/components/marketing/Nav"

export default function StormyOpsProjectsPageMockup() {
  const sections = [
    {
      title: "Featured Systems",
      description:
        "Core systems that show architecture, implementation depth, and product thinking.",
      columns: "lg:grid-cols-2",
      projects: [
        {
          name: "Skynetrix",
          summary:
            "Multi-tenant automotive SaaS platform with RBAC, billing, and workflow orchestration.",
          tags: ["SaaS", "Architecture", "Billing", "Microservices"],
        },
        {
          name: "StormyOps CMS",
          summary:
            "Custom CMS and portfolio platform with admin tooling, scheduling, SEO controls, and content workflows.",
          tags: ["Next.js", "CMS", "Admin UX", "SEO"],
        },
        {
          name: "VIN Vision",
          summary:
            "VIN OCR and decoding pipeline connecting image intake, extraction, and vehicle data enrichment.",
          tags: ["OCR", "Automation", "APIs", "Data Flow"],
        },
        {
          name: "HEM Automotive",
          summary:
            "Operational and marketing system design for an automotive business with web, inventory, and lead flow support.",
          tags: ["Operations", "Web", "Marketing", "Systems"],
        },
      ],
    },
    {
      title: "Product & Platform Builds",
      description:
        "Smaller product experiments, utility builds, and backend-heavy implementation work.",
      columns: "lg:grid-cols-3",
      projects: [
        {
          name: "Resume Generator",
          summary:
            "Tooling for generating tailored resume content with structured data and reusable positioning blocks.",
          tags: ["Automation", "Content", "Tooling"],
        },
        {
          name: "SignalScout",
          summary:
            "Concept for surfacing signals, patterns, and next-step insights from business data and interactions.",
          tags: ["Analytics", "Signals", "Product"],
        },
        {
          name: "Stormy Meadowlark Backend",
          summary:
            "Backend systems supporting content, service delivery, and future platform expansion.",
          tags: ["Backend", "APIs", "Infrastructure"],
        },
      ],
    },
    {
      title: "Websites",
      description:
        "Client-facing sites built to communicate trust, clarify value, and convert visitors into action.",
      columns: "lg:grid-cols-3",
      projects: [
        {
          name: "Chiropractor Site",
          summary:
            "Service website focused on clarity, credibility, and conversion for a local healthcare business.",
          tags: ["Web Design", "UX", "Messaging"],
        },
        {
          name: "HEM Automotive Sites",
          summary:
            "Automotive web experiences designed to support trust, promotions, and operational visibility.",
          tags: ["Automotive", "Marketing", "Frontend"],
        },
        {
          name: "Stormy Meadowlark Site",
          summary:
            "Brand-forward website work balancing positioning, narrative, and service structure.",
          tags: ["Brand", "Strategy", "Website"],
        },
      ],
    },
    {
      title: "Brand Identity / Marketing",
      description:
        "Work centered on positioning, narrative, refreshes, and turning strategy into visible brand systems.",
      columns: "lg:grid-cols-2",
      projects: [
        {
          name: "Solar Athletics Refresh",
          summary:
            "Brand refinement focused on cohesion, presentation quality, and stronger visual consistency.",
          tags: ["Branding", "Visual Identity", "Refresh"],
        },
        {
          name: "HEM Automotive Marketing",
          summary:
            "Messaging and growth work rooted in trust, psychology, and practical service business realities.",
          tags: ["Marketing", "Positioning", "Growth"],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(121,83,255,0.18),transparent_30%),radial-gradient(circle_at_20%_30%,rgba(60,125,255,0.14),transparent_35%),linear-gradient(to_bottom,#060814,#05060c_35%,#04050a_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.14]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <Nav />

        <section className="mt-40 mb-10 rounded-[2rem] border border-white/10 bg-white/6 px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b5a8ff]">
              Project Systems
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Work built across systems, products, websites, and growth.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Each project opens into a deeper case study with context, constraints,
              technical decisions, and execution details.
            </p>
          </div>
        </section>

        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-2xl sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/68 sm:text-base">
                    {section.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#b8abff] transition hover:text-white"
                >
                  View all →
                </a>
              </div>

              <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${section.columns}`}>
                {section.projects.map((project) => (
                  <article
                    key={project.name}
                    className="group rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#8e79ff]/40 hover:shadow-[0_14px_40px_rgba(78,57,179,0.22)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(142,121,255,0.45),rgba(255,255,255,0.03))]" />
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm text-white/70 transition group-hover:border-[#8e79ff]/30 group-hover:text-white">
                        →
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/68 sm:text-[15px]">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-white/74"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/6 px-6 py-8 backdrop-blur-2xl sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b5a8ff]">
                Need More Depth?
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Explore the systems behind the work.
              </h2>
            </div>

            <div className="flex gap-3">
              <button className="rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/12">
                View Resume
              </button>
              <button className="rounded-full bg-[#8e79ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(122,92,255,0.35)] transition hover:translate-y-[-1px] hover:bg-[#9b88ff]">
                Contact Me
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
