"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { OrganicCurve, MosaicBackground } from "@/components/ui/gaudi-visuals"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { TextScramble } from "@/components/ui/text-scramble"
import { Parallax } from "@/components/ui/parallax"

export function HeroSection() {
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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const headlineVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  // Simplified variants for reduced motion preference
  const simpleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  }

  const variants = prefersReducedMotion
    ? { container: simpleVariants, item: simpleVariants, headline: simpleVariants }
    : { container: containerVariants, item: itemVariants, headline: headlineVariants }

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <MosaicBackground />

      {/* Background image with parallax */}
      <Parallax speed={-0.2} className="absolute inset-0 z-0">
        <div className="absolute inset-0 scale-110">
          <Image
            src="/hero-neural-symphony.jpg"
            alt=""
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
      </Parallax>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl"
        initial="hidden"
        animate="visible"
        variants={variants.container}
      >
        {/* Pixel marker */}
        <motion.div className="mb-8" variants={variants.item}>
          <span className="pixel-marker">01 / 06</span>
        </motion.div>

        {/* Micro-label */}
        <motion.div className="mb-12" variants={variants.item}>
          <span className="micro-label inline-flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose"></span>
            </span>
            <TextScramble text="Architecting Intelligence" scrambleSpeed={25} revealDelay={300} />
          </span>
        </motion.div>

        {/* Headline with text scramble */}
        <motion.h1
          className="font-pixel text-5xl font-bold tracking-wide text-white md:text-7xl lg:text-8xl leading-[1.1] uppercase"
          variants={variants.headline}
        >
          <TextScramble text="Structure" scrambleSpeed={35} revealDelay={500} />
          <br />
          <span className="text-white">from </span>
          <span className="text-rose">
            <TextScramble text="Chaos." scrambleSpeed={35} revealDelay={800} />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
          variants={variants.item}
        >
          {"AI isn't magic -- it's engineering. I bridge the gap between research papers and revenue, building systems that "}
          <span className="text-white font-medium">scale</span>,{" "}
          <span className="text-white font-medium">adapt</span>, and{" "}
          <span className="text-white font-medium">endure</span>.
        </motion.p>

        {/* CTAs with magnetic effect */}
        <motion.div
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={variants.item}
        >
          <MagneticButton
            as="a"
            href="https://gabrielrojasai.substack.com"
            target="_blank"
            className="group inline-flex h-12 items-center justify-center rounded-lg bg-rose px-8 text-sm font-semibold text-white transition-colors hover:bg-rose-dark"
            strength={0.4}
          >
            Read My Mind
            <ArrowRight className="ml-2 h-4 w-4 icon-slide-right" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#work"
            className="group inline-flex h-12 items-center justify-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
            strength={0.3}
          >
            See The Evidence
            <ArrowRight className="ml-2 h-4 w-4 icon-slide-right" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <OrganicCurve fill="fill-black" className="z-20" />
    </section>
  )
}
