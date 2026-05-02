import type { AboutPageContent } from "@/types/about"

type CurrentFocusSectionProps = {
  technical: AboutPageContent["technicalPositioning"]
  endUser: AboutPageContent["endUserFocus"]
  focus: AboutPageContent["currentFocus"]
}

export default function CurrentFocusSection({
  technical,
  endUser,
  focus,
}: CurrentFocusSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            {technical.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
            {technical.title}
          </h2>
          <p className="mt-5 leading-8 text-slate-300">{technical.body}</p>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            {endUser.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
            {endUser.title}
          </h2>
          <p className="mt-5 leading-8 text-slate-300">{endUser.body}</p>
        </article>
      </div>

      <div className="mt-6 rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-blue-600/15 via-slate-950 to-violet-600/15 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          {focus.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          {focus.title}
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          {focus.body}
        </p>

        <p className="mt-5 max-w-4xl leading-8 text-slate-400">
          {focus.secondary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {focus.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}