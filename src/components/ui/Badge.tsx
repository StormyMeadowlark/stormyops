// src/components/ui/Badge.tsx
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils/cn"
import { badgeStyles } from "@/styles/tokens"

type BadgeVariant = "neutral" | "strong"

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: BadgeVariant
}

export default function Badge({
  children,
  variant = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeStyles.base, badgeStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}