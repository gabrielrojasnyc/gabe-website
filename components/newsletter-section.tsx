import Link from "next/link"
import { ArrowUpRight, BarChart3, Search, Lightbulb, Scale } from "lucide-react"
import Image from "next/image"

const topics = [
  { icon: BarChart3, label: "LLM Evaluations", detail: "Moving beyond vibes-based development" },
  { icon: Search, label: "Search Architecture", detail: "Two-Tower models and semantic retrieval" },
  { icon: Lightbulb, label: "AI Strategy", detail: "Product roadmaps that actually work" },
  { icon: Scale, label: "Ethics & Economics", detail: "Challenging industry assumptions" },
]

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-black px-6 py-24 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-rose">
            Newsletter
          </span>
          <h2 className="mb-6 font-sans text-4xl font-bold text-white md:text-5xl">Gabriel Rojas AI</h2>
          <p className="mb-4 max-w-xl text-lg text-gray-300">{"The industry is moving fast -- but in the wrong direction."}</p>
          <p className="mb-8 max-w-xl text-base text-gray-400 leading-relaxed">
            My newsletter cuts through the noise of corporate jargon and AI theater. I dive deep into what actually
            works: production ML architectures, LLM evaluation frameworks, and product strategies that survive contact
            with reality. No hype cycles. No buzzword bingo. Just technical depth and strategic clarity.
          </p>
          <div className="mb-8 space-y-3">
            {topics.map((topic) => (
              <div key={topic.label} className="flex items-center gap-3 text-sm text-gray-400">
                <topic.icon className="h-4 w-4 shrink-0 text-rose" />
                <span className="text-white font-medium">{topic.label}</span>
                <span className="hidden sm:inline">{"--"}</span>
                <span className="hidden sm:inline">{topic.detail}</span>
              </div>
            ))}
          </div>
          <Link
            href="https://gabrielrojasai.substack.com"
            target="_blank"
            className="inline-flex items-center text-lg font-bold text-white decoration-rose underline-offset-4 hover:underline"
          >
            Subscribe on Substack
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-2xl">
          <Image
            src="/newsletter-signal-noise.jpg"
            alt="Newsletter Preview"
            fill
            className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
