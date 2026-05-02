import Link from "next/link"
import type { AboutPageContent } from "@/types/about"
import SectionHeader from "./SectionHeader"

type ProofSectionProps = {
  content: AboutPageContent["proof"]
}

export default function ProofSection({ content }: ProofSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro}
        />

        <Link
          href="/work"
          className="w-fit rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-blue-300/50 hover:bg-white/10"
        >
          View all work
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {content.items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.07]"
          >
            <p className="text-sm font-semibold text-blue-300">
              {item.label}
            </p>

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