"use client"
import React from "react"
import type { BaseProps } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ContainerProps extends BaseProps {
  fluid?: boolean
}

export function Container({ fluid = false, className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-6",
        {
          "max-w-screen-xl": !fluid,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

