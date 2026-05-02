import type { AboutPageContent } from "@/types/about"
import SectionHeader from "./SectionHeader"

type ImplementationLoopProps = {
  content: AboutPageContent["implementationLoop"]
}

export default function ImplementationLoop({
  content,
}: ImplementationLoopProps) {
  return (
    <section id="implementation-loop" className="mx-auto w-full max-w-7xl px-6 py-16">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} />

      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-400 via-violet-400 to-transparent md:block" />

        <div className="grid gap-5">
          {content.steps.map((step) => (
            <article
              key={step.step}
              className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/20 md:ml-14"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-sm font-black text-blue-200 ring-1 ring-blue-300/30 md:absolute md:-left-[4.5rem] md:top-6">
                {step.step}
              </div>

              <h3 className="text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}