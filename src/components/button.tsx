import React from "react"
import type { ButtonVariant, BaseProps } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ButtonProps extends BaseProps {
  variant?: ButtonVariant
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

export function Button({ variant = "text", onClick, disabled = false, ariaLabel, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center",
        "px-6 py-2 text-sm transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "hover:opacity-80": variant === "text",
          "border border-current hover:bg-primary hover:text-background dark:hover:bg-primary-dark dark:hover:text-background-dark":
            variant === "outline",
          "bg-primary text-background hover:opacity-90 dark:bg-primary-dark dark:text-background-dark":
            variant === "solid",
        },
        className,
      )}
    >
      {children}
    </button>
  )
}

