"use client"

import { Brain, Search, Code, BarChart } from "lucide-react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

const expertise = [
  {
    title: "AI Product Strategy",
    description:
      "Defining the 'Why' and 'How' of AI adoption. Transforming abstract capabilities into concrete roadmaps that drive revenue and user value.",
    icon: Brain,
    stat: "5+",
    statLabel: "Products shipped",
  },
  {
    title: "Technical Leadership",
    description:
      "Bridging the gap between engineering and business. Fluent in the language of Transformers, RAG pipelines, and cloud infrastructure.",
    icon: Code,
    stat: "10+",
    statLabel: "Years experience",
  },
  {
    title: "LLM Evaluations & Ops",
    description:
      "Moving beyond 'vibes-based' development. Establishing rigorous evaluation frameworks to measure model performance, bias, and accuracy.",
    icon: BarChart,
    stat: "40%",
    statLabel: "Relevance gains",
  },
  {
    title: "Large Scale Search",
    description:
      "Deep expertise in semantic retrieval and recommendation systems, including the deployment of Two-Tower architectures for enterprise data.",
    icon: Search,
    stat: "M+",
    statLabel: "Queries per day",
  },
]

export function ExpertiseSection() {
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
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section ref={sectionRef} className="bg-neutral-900/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          <motion.span className="pixel-marker mb-6" variants={prefersReducedMotion ? {} : itemVariants}>
            05 / SKILLS
          </motion.span>
          <motion.span className="micro-label mb-4" variants={prefersReducedMotion ? {} : itemVariants}>
            Expertise
          </motion.span>
          <motion.h2 
            className="font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Core Expertise
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-xl text-gray-400"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Where deep technical knowledge meets product intuition.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-rose/30 hover:bg-white/[0.06] card-hover-lift"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={prefersReducedMotion ? {} : cardVariants}
              custom={index}
              whileHover={prefersReducedMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 font-sans text-7xl font-bold text-white/[0.03] select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <motion.div 
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-rose/10 text-rose transition-colors group-hover:bg-rose/20"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="h-7 w-7" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-sans text-2xl font-bold text-rose">{item.stat}</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
