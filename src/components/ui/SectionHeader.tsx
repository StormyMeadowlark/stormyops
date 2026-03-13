import { cn } from "@/lib/utils/cn"
import { textStyles } from "@/styles/tokens"

type SectionHeaderProps = {
  title: string
  description?: string
  eyebrow?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionHeader({
  title,
  description,
  eyebrow,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium tracking-wide text-slate-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className={textStyles.sectionTitle}>{title}</h2>

      {description ? (
        <p
          className={cn(
            textStyles.sectionDescription,
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}