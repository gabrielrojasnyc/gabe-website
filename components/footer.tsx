"use client"

import Link from "next/link"
import { Linkedin, Mail, Github, ArrowUpRight } from "lucide-react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Open Source", href: "#open-source" },
  { label: "Speaking", href: "#speaking" },
]

const externalLinks = [
  { label: "Substack", href: "https://gabrielrojasai.substack.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabrielrojastx" },
  { label: "GitHub", href: "https://github.com/gabrielrojasnyc" },
]

const socialIcons = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/gabrielrojastx", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/gabrielrojasnyc", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@gabrielrojas.com", label: "Email" },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-50px" })
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

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const linkHoverVariants = {
    rest: { x: 0 },
    hover: { x: 3 },
  }

  return (
    <footer ref={footerRef} className="border-t border-white/5 bg-gradient-to-b from-black to-neutral-950 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <motion.div 
          className="mb-16 grid gap-12 md:grid-cols-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          {/* Brand column */}
          <motion.div 
            className="md:col-span-5 lg:col-span-4"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            <div className="mb-6">
              <span className="micro-label">The AI Executive</span>
            </div>
            <Link href="/" className="inline-block font-pixel text-2xl md:text-3xl font-bold tracking-wider text-white uppercase">
              Gabriel Rojas<span className="text-rose">.</span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-400">
              Building AI systems that scale, adapt, and endure. Engineering the infrastructure behind intelligence at global scale.
            </p>
            
            {/* CTA */}
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Link
                href="https://gabrielrojasai.substack.com"
                target="_blank"
                className="group mt-8 inline-flex items-center gap-3 rounded-lg border border-rose/30 bg-rose/5 px-4 py-2 text-sm font-medium text-rose transition-all hover:border-rose/60 hover:bg-rose/10"
              >
                Subscribe to Newsletter
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
            
            {/* Social icons */}
            <div className="mt-8 flex gap-3">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={prefersReducedMotion ? {} : socialIconVariants}
                  custom={index}
                >
                  <Link
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-rose/50 hover:bg-rose/5 hover:text-rose"
                    aria-label={social.label}
                  >
                    <motion.div
                      whileHover={prefersReducedMotion ? {} : { scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="hidden md:block md:col-span-1"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            <div className="h-full min-h-56 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
          </motion.div>

          {/* Navigation sections */}
          <motion.div 
            className="md:col-span-3"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            <span className="micro-label">Navigate</span>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                >
                  <motion.a 
                    href={link.href} 
                    className="text-sm font-medium text-gray-400 transition-colors hover:text-rose"
                    variants={prefersReducedMotion ? {} : linkHoverVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* External links */}
          <motion.div 
            className="md:col-span-3 lg:col-span-3"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            <span className="micro-label">Elsewhere</span>
            <ul className="mt-6 space-y-4">
              {externalLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-rose"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-white/5"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ originX: 0 }}
        />

        {/* Bottom statement */}
        <motion.div 
          className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="pixel-marker">
            &copy; {new Date().getFullYear()} GABRIEL ROJAS
          </p>
          <motion.span 
            className="pixel-marker-accent"
            animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            BUILT BY HAND
          </motion.span>
        </motion.div>
      </div>
    </footer>
  )
}
