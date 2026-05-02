import type { ProgressionContent } from "@/types/progression"

type TurningPointSectionProps = {
  content: ProgressionContent["turningPoint"]
}

export default function TurningPointSection({
  content,
}: TurningPointSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-600/20 via-slate-950 to-violet-600/20 p-8 shadow-2xl shadow-black/30 lg:p-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            {content.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {content.body}
          </p>
        </div>
      </div>
    </section>
  )
}