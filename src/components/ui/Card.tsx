import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils/cn"
import { surfaceStyles } from "@/styles/tokens"

type CardVariant = "base" | "elevated" | "subtle"

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  variant?: CardVariant
  interactive?: boolean
}

export default function Card({
  children,
  variant = "base",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        surfaceStyles[variant],
        interactive && surfaceStyles.hover,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}