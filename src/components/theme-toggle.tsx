"use client"

import { useEffect, useState } from "react"
import React from "react"
import { Button } from "./button"
import type { BaseProps } from "@/lib/types"

interface ThemeToggleProps extends BaseProps {
  lightIcon: React.ReactNode
  darkIcon: React.ReactNode
}

export function ThemeToggle({ lightIcon, darkIcon }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark")
    setTheme(newTheme)
  }

  return (
    <Button variant="text" onClick={toggleTheme} ariaLabel={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
      {theme === "light" ? lightIcon : darkIcon}
    </Button>
  )
}
