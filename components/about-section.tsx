"use client"

import Image from "next/image"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { OrganicBlob } from "@/components/ui/gaudi-visuals"
import { Parallax } from "@/components/ui/parallax"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "grayscale(100%)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "grayscale(100%)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const quoteVariants = {
    hidden: { opacity: 0, x: 30, rotateY: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="scroll-mt-20 relative bg-black px-6 py-24 md:px-12 lg:px-24 overflow-hidden"
    >
      <motion.div 
        className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:gap-24 items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={prefersReducedMotion ? {} : containerVariants}
      >
        <div className="relative order-2 lg:order-1">
          {/* Parallax organic blob background */}
          <Parallax speed={0.3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
            <OrganicBlob />
          </Parallax>

          <motion.div 
            className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-lg border border-white/10 bg-neutral-900 transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
            variants={prefersReducedMotion ? {} : imageVariants}
            whileHover={{ filter: "grayscale(0%)", scale: 1.02 }}
          >
            <Image src="/gabriel-rojas.jpg" alt="Gabriel Rojas" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            className="mt-6 p-6 max-w-xs mx-auto bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl lg:absolute lg:mt-0 lg:-bottom-6 lg:-right-6 lg:mx-0"
            variants={prefersReducedMotion ? {} : quoteVariants}
            whileHover={prefersReducedMotion ? {} : { 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(201, 65, 84, 0.15)"
            }}
          >
            <p className="text-sm text-gray-300 italic leading-relaxed">
              {"\"Most 'AI strategies' are just expensive theater. I'm here to build the stage, not just perform on it.\""}
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="order-1 lg:order-2"
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          <motion.span className="pixel-marker mb-6" variants={prefersReducedMotion ? {} : itemVariants}>
            / ABOUT
          </motion.span>
          <motion.span className="micro-label mb-4" variants={prefersReducedMotion ? {} : itemVariants}>
            About
          </motion.span>
          <motion.h2 
            className="font-pixel text-3xl font-bold tracking-wide text-white md:text-4xl mb-4 uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            The <span className="text-rose">Operator</span> in the Room.
          </motion.h2>
          <motion.div 
            className="h-px w-16 bg-rose mb-10"
            variants={prefersReducedMotion ? {} : itemVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          />

          <motion.div 
            className="space-y-6 text-base leading-relaxed text-gray-400"
            variants={prefersReducedMotion ? {} : containerVariants}
          >
            <motion.p variants={prefersReducedMotion ? {} : itemVariants}>
              {"I'm "}<span className="text-white font-medium">Gabriel Rojas</span>{". While others are breathless about the *potential* of AI, I'm focused on the *plumbing*."}
            </motion.p>

            <motion.p variants={prefersReducedMotion ? {} : itemVariants}>
              {"My career has been defined by a simple refusal to accept the \"black box\" excuse. At "}
              <span className="text-white font-medium">ADP Lyric</span>
              {" and beyond, I've proven that AI systems can be transparent, ethical, and ruthlessly effective all at once."}
            </motion.p>

            <motion.div 
              className="pl-6 border-l border-white/10 space-y-4"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              {[
                { title: "Texas Roots.", desc: "Built on pragmatism and straight talk." },
                { title: "NYC Hustle.", desc: "Forged in the fires of speed and scale." },
                { title: "Global Ambition.", desc: "Because this technology doesn't respect borders." },
              ].map((item, index) => (
                <motion.p 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                >
                  <strong className="text-white block mb-0.5 text-sm">{item.title}</strong>
                  <span className="text-sm">{item.desc}</span>
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
