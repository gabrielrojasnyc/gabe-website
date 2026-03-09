import Link from "next/link"
import { Linkedin, Mail, Github, ArrowUpRight } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Top section -- brand statement + navigation grid */}
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block font-heading text-2xl font-bold tracking-tight text-white">
              Gabriel Rojas<span className="text-blue-400">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Building AI systems that scale, adapt, and endure. Head of Product AI at ADP Lyric.
            </p>
            {/* Social icons */}
            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.linkedin.com/in/gabrielrojastx"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-colors hover:border-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/gabrielrojasnyc"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-colors hover:border-white/20 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <a
                href="mailto:contact@gabrielrojas.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-colors hover:border-white/20 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
              Navigate
            </span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External column */}
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
              Elsewhere
            </span>
            <ul className="space-y-3">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group inline-flex items-center text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-gray-600 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Gabriel Rojas. All rights reserved.</p>
          <p className="font-mono tracking-wider">Built with conviction.</p>
        </div>
      </div>
    </footer>
  )
}
