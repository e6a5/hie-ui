import type { BaseProps } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CardProps extends BaseProps {
  padding?: "none" | "small" | "medium" | "large"
}

export function Card({ padding = "medium", className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white",
        {
          "p-0": padding === "none",
          "p-4": padding === "small",
          "p-6": padding === "medium",
          "p-8": padding === "large",
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

