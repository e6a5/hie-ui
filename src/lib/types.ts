import type React from "react"
export type TextVariant = "h1" | "h2" | "h3" | "body" | "small"
export type TextAlign = "left" | "center" | "right"
export type ButtonVariant = "text" | "outline" | "solid"
export type GridColumns = 1 | 2 | 3 | 4 | 6 | 12
export type ThemeMode = "light" | "dark"
export type SpacingUnit = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16

export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface ImageProps extends BaseProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  quality?: number
}

