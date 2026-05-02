import Link from "next/link"
import type { AboutPageContent } from "@/types/about"

type AboutCTAProps = {
  content: AboutPageContent["cta"]
}

export default function AboutCTA({ content }: AboutCTAProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-10">
      <div className="rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-600/20 via-slate-950 to-violet-600/20 p-8 shadow-2xl shadow-black/30 lg:p-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            {content.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            {content.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={content.primaryHref}
              className="rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              {content.primaryLabel}
            </Link>

            <Link
              href={content.secondaryHref}
              className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white transition hover:border-violet-300/50 hover:bg-white/10"
            >
              {content.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}