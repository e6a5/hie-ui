"use client"

import { motion } from "framer-motion"
import type { BaseProps } from "@/lib/types"

interface FadeInProps extends BaseProps {
  delay?: number
}

export function FadeIn({ delay = 0, children }: FadeInProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

interface HoverEffectProps extends BaseProps {
  scale?: number
}

export function HoverEffect({ scale = 1.05, children }: HoverEffectProps) {
  return (
    <motion.div whileHover={{ scale }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}

