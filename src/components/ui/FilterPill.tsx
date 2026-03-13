import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils/cn"
import { pillStyles } from "@/styles/tokens"

type FilterPillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  active?: boolean
}

export default function FilterPill({
  children,
  active = false,
  className,
  ...props
}: FilterPillProps) {
  return (
    <button
      type="button"
      className={cn(
        pillStyles.base,
        active ? pillStyles.active : pillStyles.inactive,
        className
      )}
      aria-pressed={active}
      {...props}
    >
      {children}
    </button>
  )
}