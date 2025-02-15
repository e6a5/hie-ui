"use client"

import React from "react"
import { cn } from "@/lib/utils"
import type { TextVariant, TextAlign, BaseProps } from "@/lib/types"

interface TextProps extends BaseProps {
  variant?: TextVariant
  align?: TextAlign
  as?: keyof JSX.IntrinsicElements
  color?: string
}

export function Text({ variant = "body", align = "left", as: Component = "p", className, children, color }: TextProps) {
  return (
    <Component
      className={cn(
        `text-${color || "primary"} dark:text-${color || "primary-dark"} transition-colors`,
        "font-normal leading-relaxed tracking-normal",
        {
          "text-4xl md:text-5xl lg:text-6xl font-light tracking-tight": variant === "h1",
          "text-3xl md:text-4xl font-light tracking-tight": variant === "h2",
          "text-2xl md:text-3xl font-normal": variant === "h3",
          "text-base md:text-lg": variant === "body",
          "text-sm": variant === "small",
        },
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

