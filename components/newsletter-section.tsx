"use client"

import Link from "next/link"
import { ArrowUpRight, BarChart3, Search, Lightbulb, Scale } from "lucide-react"
import Image from "next/image"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "@/components/ui/magnetic-button"

const topics = [
  { icon: BarChart3, label: "LLM Evaluations", detail: "Moving beyond vibes-based development" },
  { icon: Search, label: "Search Architecture", detail: "Two-Tower models and semantic retrieval" },
  { icon: Lightbulb, label: "AI Strategy", detail: "Product roadmaps that actually work" },
  { icon: Scale, label: "Ethics & Economics", detail: "Challenging industry assumptions" },
]

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/5 bg-black px-6 py-24 md:px-12 lg:px-24"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 opacity-30 animated-gradient"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <motion.div 
        className="relative z-10 mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={prefersReducedMotion ? {} : containerVariants}
      >
        <div>
          <motion.span 
            className="pixel-marker mb-6"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            / NEWSLETTER
          </motion.span>
          <motion.span 
            className="micro-label mb-4"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Newsletter
          </motion.span>
          <motion.h2 
            className="mb-6 font-pixel text-3xl font-bold tracking-wide text-white md:text-4xl uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Gabriel Rojas <span className="text-gradient-animated">AI</span>
          </motion.h2>
          <motion.p 
            className="mb-4 max-w-xl text-lg text-gray-300"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            {"The industry is moving fast -- but in the wrong direction."}
          </motion.p>
          <motion.p 
            className="mb-8 max-w-xl text-base text-gray-400 leading-relaxed"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            My newsletter cuts through the noise of corporate jargon and AI theater. I dive deep into what actually
            works: production ML architectures, LLM evaluation frameworks, and product strategies that survive contact
            with reality. No hype cycles. No buzzword bingo. Just technical depth and strategic clarity.
          </motion.p>
          <motion.div 
            className="mb-8 space-y-3"
            variants={prefersReducedMotion ? {} : containerVariants}
          >
            {topics.map((topic, index) => (
              <motion.div 
                key={topic.label} 
                className="flex items-center gap-3 text-sm text-gray-400"
                variants={prefersReducedMotion ? {} : itemVariants}
                custom={index}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <topic.icon className="h-4 w-4 shrink-0 text-rose" />
                </motion.div>
                <span className="text-white font-medium">{topic.label}</span>
                <span className="hidden sm:inline">{"--"}</span>
                <span className="hidden sm:inline">{topic.detail}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
            <MagneticButton
              as="a"
              href="https://gabrielrojasai.substack.com"
              target="_blank"
              className="inline-flex items-center text-lg font-bold text-white decoration-rose underline-offset-4 hover:underline glow-pulse rounded-lg px-1 py-1"
              strength={0.3}
            >
              Subscribe on Substack
              <ArrowUpRight className="ml-2 h-5 w-5 icon-slide-right" />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div 
          className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-2xl group"
          variants={prefersReducedMotion ? {} : imageVariants}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/newsletter-signal-noise.jpg"
            alt="Newsletter Preview"
            fill
            className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          {/* Shimmer overlay on hover */}
          <motion.div 
            className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
