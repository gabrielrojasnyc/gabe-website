"use client"

import Image from "next/image"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/ui/tilt-card"

const projects = [
  {
    title: "Accelerating Search with Two-Tower Models",
    category: "Architecture & Engineering",
    description:
      "Traditional keyword search failed to capture semantic nuance at scale. I led the implementation of a dual-encoder (Two-Tower) architecture to map queries and documents into a shared high-dimensional vector space. The result was a 40% improvement in retrieval relevance and significantly reduced latency for millions of daily queries.",
    tags: ["Machine Learning", "Vector DB", "Search Ops"],
    image: "/portfolio-two-towers.jpg",
  },
  {
    title: "Enterprise AI Strategy: Re-imagining Retail",
    category: "Strategy & Vision",
    description:
      "Designed a comprehensive 'AI-first' roadmap for high-volume retail environments (7-Eleven context). Focused on demand forecasting, cashier-less experiences, and personalized customer journeys. The strategy balanced immediate operational efficiencies with long-term transformational bets.",
    tags: ["Retail", "Forecasting", "UX Strategy"],
    image: "/portfolio-digital-retail.jpg",
  },
  {
    title: "Scalable ML Infrastructure",
    category: "Product Infrastructure",
    description:
      "Architected a robust evaluation pipeline for LLM deployments. Moved the organization from ad-hoc testing to systematic, metrics-driven evaluation, ensuring safety, reducing hallucinations, and building trust in automated customer interactions.",
    tags: ["LLM Ops", "Infrastructure", "Evaluation"],
    image: "/portfolio-ml-core.jpg",
  },
]

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section ref={sectionRef} id="work" className="scroll-mt-20 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          <motion.span className="pixel-marker mb-6" variants={prefersReducedMotion ? {} : itemVariants}>
            04 / WORK
          </motion.span>
          <motion.span className="micro-label mb-4" variants={prefersReducedMotion ? {} : itemVariants}>
            Portfolio
          </motion.span>
          <motion.h2 
            className="font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Selected Work
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-xl text-gray-400"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            A snapshot of projects where technical depth meets business strategy.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={prefersReducedMotion ? {} : cardVariants}
              custom={index}
            >
              <TiltCard
                className="h-full"
                tiltStrength={8}
                glareOpacity={0.1}
              >
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.05]">
                  {/* Project thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-8">
                    <motion.div 
                      className="mb-6 text-xs font-bold uppercase tracking-wider text-rose"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    >
                      {project.category}
                    </motion.div>
                    <h3 className="mb-4 font-sans text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mb-8 text-sm leading-relaxed text-gray-400">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-block rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-gray-300 transition-colors hover:border-rose/30 hover:bg-rose/5"
                          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
