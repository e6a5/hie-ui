import type { BaseProps, GridColumns } from "@/lib/types"
import { cn } from "@/lib/utils"

interface GridProps extends BaseProps {
  columns?: GridColumns
  gap?: number
}

export function Grid({ columns = 12, gap = 4, className, children }: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-2": columns === 2,
          "grid-cols-3": columns === 3,
          "grid-cols-4": columns === 4,
          "grid-cols-6": columns === 6,
          "grid-cols-12": columns === 12,
        },
        {
          "gap-1": gap === 1,
          "gap-2": gap === 2,
          "gap-4": gap === 4,
          "gap-6": gap === 6,
          "gap-8": gap === 8,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

