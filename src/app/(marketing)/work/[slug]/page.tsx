import { notFound } from "next/navigation"
import Nav from "@/components/marketing/Nav"
import Badge from "@/components/ui/Badge"
import { projects } from "@/content/work"
import { caseStudies } from "@/content/caseStudies"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((item) => item.slug === slug)
  const caseStudy = caseStudies.find((item) => item.slug === slug)

  if (!project || !caseStudy) notFound()

  return (
    <main className="stormyops-bg min-h-screen text-white">
      <Nav />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32">
        {/* Hero */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-10">
          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {caseStudy.status ? (
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
                  {caseStudy.status}
                </span>
              ) : null}

              {project.badges?.map((badge) => (
                <Badge key={badge.label}>{badge.label}</Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {project.title}
            </h1>

            {project.subtitle ? (
              <p className="mt-3 text-xl font-medium text-violet-200">
                {project.subtitle}
              </p>
            ) : null}

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              {project.description}
            </p>
          </div>
        </section>

        {/* Implementation first */}
        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-violet-400/20 bg-violet-500/10 p-8 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-300">
              Implementation Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              What I implemented
            </h2>

            <p className="mt-5 leading-relaxed text-slate-200">
              {caseStudy.implementation.role}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <InfoBlock title="Problem" body={caseStudy.implementation.problem} />
              <InfoBlock title="Approach" body={caseStudy.implementation.approach} />
            </div>

            {caseStudy.implementation.outcome ? (
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-sm font-semibold text-white">Outcome</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {caseStudy.implementation.outcome}
                </p>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6">
            {project.stack?.length ? (
              <SidePanel title="Stack / Tools">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </SidePanel>
            ) : null}

            {caseStudy.overview ? (
              <SidePanel title="Overview">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-white">What it is</dt>
                    <dd className="mt-1 text-slate-300">
                      {caseStudy.overview.whatItIs}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-white">Who it’s for</dt>
                    <dd className="mt-1 text-slate-300">
                      {caseStudy.overview.whoItIsFor}
                    </dd>
                  </div>
                </dl>
              </SidePanel>
            ) : null}
          </aside>
        </section>

        {/* Constraints / Tradeoffs */}
        {(caseStudy.implementation.constraints?.length ||
          caseStudy.implementation.tradeoffs?.length) && (
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudy.implementation.constraints?.length ? (
              <ListPanel
                title="Constraints"
                items={caseStudy.implementation.constraints}
              />
            ) : null}

            {caseStudy.implementation.tradeoffs?.length ? (
              <ListPanel
                title="Tradeoffs"
                items={caseStudy.implementation.tradeoffs}
              />
            ) : null}
          </section>
        )}

        {/* What I Owned */}
        {caseStudy.overview?.whatIOwned?.length ? (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <SectionTitle eyebrow="Ownership" title="What I owned" />

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {caseStudy.overview.whatIOwned.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Execution */}
        {caseStudy.execution?.length ? (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <SectionTitle
              eyebrow="Execution Breakdown"
              title="How the work was implemented"
            />

            <div className="mt-8 space-y-8">
              {caseStudy.execution.map((section) => (
                <div
                  key={section.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/40 p-6"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>

                  {section.body ? (
                    <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
                      {section.body}
                    </p>
                  ) : null}

                  {section.items?.length ? (
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {section.items.map((item) => (
                        <InfoBlock
                          key={item.title}
                          title={item.title}
                          body={item.body}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Workflows */}
        {caseStudy.workflows?.length ? (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <SectionTitle eyebrow="Workflow" title="System flows" />

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {caseStudy.workflows.map((workflow) => (
                <div
                  key={workflow.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/40 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {workflow.title}
                  </h3>

                  <ol className="mt-5 space-y-3">
                    {workflow.steps.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm text-slate-300">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs font-semibold text-violet-200">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Results */}
        {caseStudy.results?.length ? (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <SectionTitle eyebrow="Results" title="Impact and outcomes" />

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {caseStudy.results.map((result) => (
                <InfoBlock
                  key={result.title}
                  title={result.title}
                  body={result.body}
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* Visuals */}
        {caseStudy.visuals?.length ? (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <SectionTitle eyebrow="Visual Proof" title="Screens and artifacts" />

            <div className="mt-8 space-y-10">
              {caseStudy.visuals.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  {group.description ? (
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
                      {group.description}
                    </p>
                  ) : null}

                  <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {group.images.map((image) => (
                      <figure
                        key={image.src}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="aspect-video w-full object-cover"
                        />

                        {image.caption ? (
                          <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Reflection */}
        {caseStudy.reflection ? (
          <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-8">
            <SectionTitle eyebrow="Reflection" title="What I learned" />

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {caseStudy.reflection.whatWorked?.length ? (
                <ListPanel
                  title="What worked"
                  items={caseStudy.reflection.whatWorked}
                />
              ) : null}

              {caseStudy.reflection.whatIWouldImprove?.length ? (
                <ListPanel
                  title="What I’d improve"
                  items={caseStudy.reflection.whatIWouldImprove}
                />
              ) : null}
            </div>

            {caseStudy.reflection.keyTakeaway ? (
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Key takeaway
                </h3>
                <p className="mt-2 leading-relaxed text-slate-300">
                  {caseStudy.reflection.keyTakeaway}
                </p>
              </div>
            ) : null}
          </section>
        ) : null}
      </div>
    </main>
  )
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-violet-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
    </div>
  )
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
    </div>
  )
}

function SidePanel({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}