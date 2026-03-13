import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils/cn"
import { buttonStyles } from "@/styles/tokens"

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles.base,
        buttonStyles.size[size],
        buttonStyles.variant[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}