"use client"

import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

const githubProjects = [
  {
    name: "QA_generation",
    description:
      "A Python application implementing PDF text chunking and question-answering with a web interface. Supports OpenAI's o3, GPT-4, and Anthropic Claude 3.7 with enhanced reasoning capabilities.",
    tech: ["Python", "Flask", "OpenAI API", "Anthropic API", "PyPDF2"],
    stars: 1,
    url: "https://github.com/gabrielrojasnyc/QA_generation",
    highlights: [
      "Extract & chunk PDF documents intelligently",
      "Multi-model LLM support with reasoning flags",
      "Export Q&A pairs to CSV for training data",
    ],
  },
  {
    name: "hr-mcp-server",
    description:
      "A Model Context Protocol (MCP) server for HR operations built for Claude Desktop. Provides structured access to employee data, global leave requests, and HR-aware translation services.",
    tech: ["TypeScript", "Node.js", "MCP SDK", "Zod"],
    stars: 0,
    url: "https://github.com/gabrielrojasnyc/hr-mcp-server",
    highlights: [
      "Employee search & information retrieval",
      "Global leave request management",
      "HR/HCM-aware translation system",
    ],
  },
]

export function GithubProjectsSection() {
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
        delay: i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section ref={sectionRef} id="open-source" className="scroll-mt-20 border-t border-white/5 bg-gradient-to-b from-black to-neutral-950 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={prefersReducedMotion ? {} : containerVariants}
        >
          <motion.span className="pixel-marker mb-6" variants={prefersReducedMotion ? {} : itemVariants}>
            06 / CODE
          </motion.span>
          <motion.span className="micro-label mb-4" variants={prefersReducedMotion ? {} : itemVariants}>
            Open Source
          </motion.span>
          <motion.h2 
            className="font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            GitHub Projects
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl text-gray-400"
            variants={prefersReducedMotion ? {} : itemVariants}
          >
            Building AI tools and infrastructure in the open. From document processing pipelines to enterprise HR systems.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {githubProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 transition-all hover:border-white/20 hover:from-white/[0.05] hover:to-white/[0.02] accent-line-draw"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={prefersReducedMotion ? {} : cardVariants}
              custom={index}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="rounded-lg border border-white/10 bg-black/50 p-2"
                    whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-mono text-xl font-bold text-white">{project.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <Star className="h-3 w-3" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="transition-opacity"
                >
                  <Link href={project.url} target="_blank" className="opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-white" />
                  </Link>
                </motion.div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-gray-400">{project.description}</p>

              <div className="mb-6 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-2 text-sm text-gray-500"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  >
                    <motion.span 
                      className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-rose"
                      whileHover={prefersReducedMotion ? {} : { scale: 2 }}
                    />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="inline-block rounded-md border border-white/5 bg-black/30 px-2.5 py-1 font-mono text-xs text-gray-400 transition-colors hover:border-rose/30 hover:bg-rose/5"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="https://github.com/gabrielrojasnyc"
            target="_blank"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <span>View all repositories on GitHub</span>
            <ExternalLink className="h-4 w-4 icon-slide-right" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
