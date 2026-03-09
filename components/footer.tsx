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
    <footer className="border-t border-white/5 bg-gradient-to-b from-black to-neutral-950 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Top section -- brand statement + navigation grid */}
        <div className="mb-16 grid gap-12 md:grid-cols-12">
          {/* Brand column -- large closing statement */}
          <div className="md:col-span-5 lg:col-span-4">
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
            <Link
              href="https://gabrielrojasai.substack.com"
              target="_blank"
              className="group mt-8 inline-flex items-center gap-3 rounded-lg border border-rose/30 bg-rose/5 px-4 py-2 text-sm font-medium text-rose transition-all hover:border-rose/60 hover:bg-rose/10"
            >
              Subscribe to Newsletter
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            
            {/* Social icons */}
            <div className="mt-8 flex gap-3">
              <Link
                href="https://www.linkedin.com/in/gabrielrojastx"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-rose/50 hover:bg-rose/5 hover:text-rose"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/gabrielrojasnyc"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-rose/50 hover:bg-rose/5 hover:text-rose"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <a
                href="mailto:contact@gabrielrojas.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-rose/50 hover:bg-rose/5 hover:text-rose"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-full min-h-56 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
          </div>

          {/* Navigation sections */}
          <div className="md:col-span-3">
            <span className="micro-label">Navigate</span>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-gray-400 transition-colors hover:text-white hover:text-rose"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div className="md:col-span-3 lg:col-span-3">
            <span className="micro-label">Elsewhere</span>
            <ul className="mt-6 space-y-4">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-rose"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Bottom statement with pixel marker */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="pixel-marker">
            &copy; {new Date().getFullYear()} GABRIEL ROJAS
          </p>
          <span className="pixel-marker-accent">BUILT BY HAND</span>
        </div>
      </div>
    </footer>
  )
}
