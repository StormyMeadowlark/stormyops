type ProgressionSectionHeaderProps = {
  eyebrow?: string
  title: string
  intro?: string
  align?: "left" | "center"
}

export default function ProgressionSectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: ProgressionSectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 max-w-3xl"
      }
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {intro ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  )
}