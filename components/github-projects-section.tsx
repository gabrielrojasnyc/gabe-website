import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"

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
  return (
    <section id="open-source" className="scroll-mt-20 border-t border-white/5 bg-gradient-to-b from-black to-neutral-950 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
      <div className="mb-16">
        <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-rose">
          Open Source
        </span>
        <h2 className="font-sans text-3xl font-bold text-white md:text-4xl">GitHub Projects</h2>
        <p className="mt-4 max-w-2xl text-gray-400">
          Building AI tools and infrastructure in the open. From document processing pipelines to enterprise HR
          systems.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {githubProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 transition-all hover:border-white/20 hover:from-white/[0.05] hover:to-white/[0.02]"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 h-1 w-0 bg-rose transition-all duration-500 group-hover:w-full" />

            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-black/50 p-2">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-bold text-white">{project.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <Star className="h-3 w-3" />
                    <span>{project.stars}</span>
                  </div>
                </div>
              </div>
              <Link href={project.url} target="_blank" className="opacity-0 transition-opacity group-hover:opacity-100">
                <ExternalLink className="h-5 w-5 text-gray-400 hover:text-white" />
              </Link>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">{project.description}</p>

            <div className="mb-6 space-y-2">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-rose" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-md border border-white/5 bg-black/30 px-2.5 py-1 font-mono text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="https://github.com/gabrielrojasnyc"
          target="_blank"
          className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <span>View all repositories on GitHub</span>
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      </div>
    </section>
  )
}
