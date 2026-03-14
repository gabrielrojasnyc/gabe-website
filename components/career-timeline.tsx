"use client"

import { Briefcase, Award, Code2 } from "lucide-react"
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"

const timeline = [
  {
    year: "2024 - Present",
    role: "Head of Product AI",
    company: "ADP Lyric",
    description:
      "Leading AI product strategy and execution for a global workforce management platform. Architecting LLM evaluation pipelines, semantic search systems, and AI-first product roadmaps.",
    icon: Briefcase,
    iconBg: "bg-rose",
  },
  {
    year: "2023 - 2024",
    role: "AI Product Strategist",
    company: "Various Consulting Projects",
    description:
      "Advised enterprise clients on AI adoption strategies, including retail transformation initiatives (7-Eleven case study) and ML infrastructure modernization.",
    icon: Code2,
    iconBg: "bg-rose/80",
  },
  {
    year: "2020 - 2023",
    role: "Senior Product Manager",
    company: "Enterprise Tech",
    description:
      "Built and scaled search and recommendation systems using Two-Tower architectures. Led cross-functional teams to deliver ML-powered features to millions of users.",
    icon: Award,
    iconBg: "bg-rose/60",
  },
]

export function CareerTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  // Scroll-linked animation for the timeline line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const timelineItemVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  return (
    <section ref={sectionRef} className="border-y border-white/5 bg-neutral-900/30 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          <motion.span className="pixel-marker mb-6" variants={prefersReducedMotion ? {} : itemVariants}>
            02 / JOURNEY
          </motion.span>
          <motion.span className="micro-label mb-4" variants={prefersReducedMotion ? {} : itemVariants}>
            Career
          </motion.span>
          <motion.h2 
            className="mb-4 font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Career Journey
          </motion.h2>
          <motion.p 
            className="mb-16 text-gray-400 max-w-2xl"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            From engineering complex systems to leading AI product strategy, here is how I got here.
          </motion.p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Static timeline line background */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent md:left-1/2" />
          
          {/* Animated timeline line overlay */}
          {!prefersReducedMotion && (
            <motion.div 
              className="absolute left-8 top-0 w-px bg-gradient-to-b from-rose via-rose/70 to-rose/40 md:left-1/2 origin-top"
              style={{ height: lineHeight }}
            />
          )}
          
          {/* Fallback for reduced motion */}
          {prefersReducedMotion && (
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-rose via-rose/70 to-rose/40 md:left-1/2" />
          )}

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={prefersReducedMotion ? {} : timelineItemVariants}
                  custom={isEven}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {/* Icon */}
                  <div className="flex items-start md:w-1/2 md:justify-end md:pr-8">
                    <motion.div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black ${item.iconBg}`}
                      variants={prefersReducedMotion ? {} : iconVariants}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                    <motion.div 
                      className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 card-hover-lift"
                      whileHover={prefersReducedMotion ? {} : { y: -4 }}
                    >
                      <motion.div 
                        className="mb-2 text-sm font-bold text-rose"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        {item.year}
                      </motion.div>
                      <h3 className="mb-1 text-xl font-bold text-white">{item.role}</h3>
                      <div className="mb-4 text-sm text-gray-400">{item.company}</div>
                      <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
