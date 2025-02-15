"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { BaseProps } from "@/lib/types"
import { cn } from "@/lib/utils"

interface NavbarProps extends BaseProps {
  logo?: React.ReactNode
  items?: Array<{
    label: string
    href: string
  }>
}

export function Navbar({ logo, items = [], className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-white", className)}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-6">
        {logo}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div
          className={cn(
            "fixed inset-x-0 top-16 bg-white p-4 md:relative md:top-0 md:block md:p-0",
            isOpen ? "block" : "hidden",
          )}
        >
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:opacity-80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

