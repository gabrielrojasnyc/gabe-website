"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface TextScrambleProps {
  text: string
  className?: string
  scrambleSpeed?: number
  revealDelay?: number
  characters?: string
}

export function TextScramble({
  text,
  className = "",
  scrambleSpeed = 30,
  revealDelay = 0,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current || prefersReducedMotion) return
    
    hasAnimated.current = true
    setIsScrambling(true)

    const timeout = setTimeout(() => {
      let iteration = 0
      const totalIterations = text.length * 3

      const interval = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              // Keep spaces as spaces
              if (char === " ") return " "
              
              // Characters that should be revealed
              const revealPoint = index * 3
              if (iteration > revealPoint) {
                return char
              }

              // Random character
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join("")
        })

        iteration += 1

        if (iteration > totalIterations) {
          clearInterval(interval)
          setDisplayText(text)
          setIsScrambling(false)
        }
      }, scrambleSpeed)

      return () => clearInterval(interval)
    }, revealDelay)

    return () => clearTimeout(timeout)
  }, [isInView, text, scrambleSpeed, revealDelay, characters, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  )
}
