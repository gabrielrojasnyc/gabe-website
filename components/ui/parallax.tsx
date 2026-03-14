"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number // Negative = slower, Positive = faster
  direction?: "vertical" | "horizontal"
  offset?: [string, string] // Start and end viewport positions
}

export function Parallax({
  children,
  className = "",
  speed = 0.5,
  direction = "vertical",
  offset = ["start end", "end start"],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end" | "end start", "start end" | "end start"],
  })

  // Calculate the transform range based on speed
  const range = 100 * speed
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "vertical" ? [range, -range] : [-range, range]
  )

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        [direction === "vertical" ? "y" : "x"]: transform,
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxLayerProps {
  children: React.ReactNode
  className?: string
  speed?: number
  scale?: [number, number] // Scale from/to values
  opacity?: [number, number] // Opacity from/to values
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.5,
  scale,
  opacity,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const scaleValue = scale
    ? useTransform(scrollYProgress, [0, 0.5, 1], [scale[0], 1, scale[1]])
    : undefined
  const opacityValue = opacity
    ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [opacity[0], 1, 1, opacity[1]])
    : undefined

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        scale: scaleValue,
        opacity: opacityValue,
      }}
    >
      {children}
    </motion.div>
  )
}
