import NextImage from "next/image"
import { cn } from "@/lib/utils"
import type { ImageProps } from "@/lib/types"

export function Image({ className, alt, ...props }: ImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <NextImage
        className="object-cover transition-transform duration-300 hover:scale-105"
        alt={alt}
        quality={90}
        {...props}
      />
    </div>
  )
}

