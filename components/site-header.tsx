"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Open Source", href: "#open-source" },
  { label: "Speaking", href: "#speaking" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
        when: "afterChildren",
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.05,
      }
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      }
    },
  }

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 180, scale: 1 },
    exit: { rotate: 0, scale: 1 },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        height: scrolled ? 56 : 64,
      }}
      transition={{ 
        y: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        height: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] },
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12">
        <motion.div
          animate={{ scale: scrolled ? 0.95 : 1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Link href="/" className="font-pixel text-base tracking-wider text-white uppercase">
            GR<span className="text-rose">.</span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative text-sm text-gray-400 transition-colors hover:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: prefersReducedMotion ? 0 : 0.1 + index * 0.05,
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="https://gabrielrojasai.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-lg bg-rose px-4 text-sm font-medium text-white transition-colors hover:bg-rose-dark btn-press"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: prefersReducedMotion ? 0 : 0.4,
              duration: 0.4,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                variants={prefersReducedMotion ? {} : iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                variants={prefersReducedMotion ? {} : iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav 
            className="overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl px-6 md:hidden"
            aria-label="Mobile navigation"
            variants={prefersReducedMotion ? {} : mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col gap-4 py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-gray-300 transition-colors hover:text-white"
                  variants={prefersReducedMotion ? {} : mobileItemVariants}
                  custom={index}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://gabrielrojasai.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-rose px-4 text-sm font-medium text-white transition-colors hover:bg-rose-dark"
                variants={prefersReducedMotion ? {} : mobileItemVariants}
              >
                Subscribe
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
