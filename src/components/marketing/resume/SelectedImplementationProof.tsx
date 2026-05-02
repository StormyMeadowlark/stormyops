import Link from "next/link"
import type { ResumePageContent } from "@/types/resume"

type SelectedImplementationProofProps = {
  items: ResumePageContent["selectedImplementations"]
}

export default function SelectedImplementationProof({
  items,
}: SelectedImplementationProofProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
          Implementation proof
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          The work behind the resume
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          The resume summarizes the experience. These case studies show the
          systems, workflows, and implementation decisions behind it.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.06]"
          >
            <p className="text-sm font-semibold text-blue-300">{item.role}</p>

            <h3 className="mt-3 text-2xl font-black text-white">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">{item.body}</p>

            <p className="mt-5 text-sm font-bold text-violet-300 transition group-hover:text-violet-200">
              Read case study →
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}