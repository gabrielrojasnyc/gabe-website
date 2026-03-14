"use client"

import { Mic, Youtube, Radio, ExternalLink, Clock } from "lucide-react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

const appearances = [
  {
    type: "Podcast",
    title: "The Future of AI Product Management",
    venue: "Tech Leadership Podcast",
    date: "Coming Soon",
    description:
      "Discussion on bridging the gap between ML engineering and product strategy in enterprise environments.",
    icon: Radio,
    upcoming: true,
  },
  {
    type: "Talk",
    title: "Two-Tower Models in Production",
    venue: "AI Conference 2025",
    date: "TBA",
    description: "Technical deep dive into implementing semantic search at scale with dual-encoder architectures.",
    icon: Mic,
    upcoming: true,
  },
  {
    type: "Interview",
    title: "Rethinking AI Ethics in Product",
    venue: "YouTube Tech Channel",
    date: "Available Now",
    description: "Challenging premium pricing models and advocating for accessible, ethical AI development.",
    icon: Youtube,
    upcoming: false,
  },
]

export function SpeakingMedia() {
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section ref={sectionRef} id="speaking" className="scroll-mt-20 border-y border-white/5 bg-neutral-900/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          <motion.span className="pixel-marker mb-6" variants={prefersReducedMotion ? {} : itemVariants}>
            / SPEAKING
          </motion.span>
          <motion.span className="micro-label mb-4" variants={prefersReducedMotion ? {} : itemVariants}>
            Speaking
          </motion.span>
          <motion.h2 
            className="mb-4 font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Speaking & Media
          </motion.h2>
          <motion.p 
            className="mb-16 text-gray-400 max-w-2xl"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Talks, podcasts, and interviews where I share insights on AI product strategy and technical leadership.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {appearances.map((item, index) => (
            <motion.div
              key={index}
              className="group flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 card-hover-lift"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={prefersReducedMotion ? {} : cardVariants}
              custom={index}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <motion.div 
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose/10 text-rose"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose">{item.type}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <div className="mb-3 text-sm text-gray-500">
                  {item.venue} -- {item.date}
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
              {item.upcoming ? (
                <motion.div 
                  className="mt-6 inline-flex items-center text-sm font-medium text-gray-500"
                  animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Upcoming
                </motion.div>
              ) : (
                <motion.a
                  href="#"
                  className="mt-6 inline-flex items-center text-sm font-medium text-rose hover:text-rose/80 transition-colors group/link"
                  whileHover={prefersReducedMotion ? {} : { x: 3 }}
                >
                  Watch Now
                  <ExternalLink className="ml-2 h-4 w-4 icon-slide-right" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 rounded-lg border border-rose/20 bg-rose/5 p-8 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : ctaVariants}
        >
          <h3 className="mb-2 text-xl font-bold text-white">Interested in having me speak?</h3>
          <p className="mb-6 text-gray-400">
            {"I'm available for podcasts, conferences, and workshops on AI product strategy and technical leadership."}
          </p>
          <motion.a
            href="mailto:contact@gabrielrojas.com"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-black transition-all hover:bg-gray-200 btn-press"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
