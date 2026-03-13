// src/components/ui/Section.tsx
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils/cn"
import { layoutStyles, sectionStyles } from "@/styles/tokens"

type SectionSpacing = "tight" | "base" | "loose"

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  as?: "section" | "div"
  spacing?: SectionSpacing
  containerClassName?: string
}

export default function Section({
  children,
  as = "section",
  spacing = "base",
  className,
  containerClassName,
  id,
  ...props
}: SectionProps) {
  const Component = as

  return (
    <Component
      id={id}
      className={cn(sectionStyles[spacing], className)}
      {...props}
    >
      <div className={cn(layoutStyles.container, containerClassName)}>{children}</div>
    </Component>
  )
}