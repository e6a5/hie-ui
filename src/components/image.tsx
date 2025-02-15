"use client"

import React from "react"
import { cn } from "@/lib/utils"
import type { BaseProps } from "@/lib/types"

interface ImageProps extends BaseProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function Image({ className, alt, ...props }: ImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        className="object-cover transition-transform duration-300 hover:scale-105"
        alt={alt}
        {...props}
      />
    </div>
  )
}
