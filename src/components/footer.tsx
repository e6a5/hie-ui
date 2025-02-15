"use client"

import React from "react"
import type { BaseProps } from "@/lib/types"
import { cn } from "@/lib/utils"

interface FooterProps extends BaseProps {
  copyright?: string
}

export function Footer({ copyright, className, children }: FooterProps) {
  return (
    <footer className={cn("border-t py-8", className)}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        {children}
        {copyright && <p className="mt-8 text-sm text-muted-foreground">{copyright}</p>}
      </div>
    </footer>
  )
}

