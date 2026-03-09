import Link from "next/link"
import { Calendar, ArrowUpRight } from "lucide-react"

const articles = [
  {
    title: "Two-Tower Models: The Architecture Everyone's Using But Few Understand",
    date: "March 2025",
    excerpt:
      "Deep dive into dual-encoder architectures for semantic search and why they're becoming the default choice for retrieval systems at scale.",
    readTime: "12 min read",
    link: "https://gabrielrojasai.substack.com",
  },
  {
    title: "Why LLM Evaluations Are a Product Manager's Superpower",
    date: "February 2025",
    excerpt:
      "Moving beyond vibes-based development. How systematic evaluation frameworks separate production-ready AI from expensive demos.",
    readTime: "8 min read",
    link: "https://gabrielrojasai.substack.com",
  },
  {
    title: "Re-imagining 7-Eleven: An AI-First Retail Strategy",
    date: "January 2025",
    excerpt:
      "From demand forecasting to cashier-less stores, a comprehensive vision for how AI transforms convenience retail at scale.",
    readTime: "15 min read",
    link: "https://gabrielrojasai.substack.com",
  },
]

export function FeaturedWriting() {
  const [lead, ...rest] = articles

  return (
    <section id="writing" className="scroll-mt-20 bg-black px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-rose">
              Writing
            </span>
            <h2 className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl">Featured Writing</h2>
            <p className="text-gray-400 max-w-2xl">
              No fluff, no hype cycles. Just deep technical analysis and forward-thinking product strategy.
            </p>
          </div>
          <Link
            href="https://gabrielrojasai.substack.com"
            target="_blank"
            className="hidden md:inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors shrink-0"
          >
            View All
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Lead article -- larger treatment */}
          <Link
            href={lead.link}
            target="_blank"
            className="group flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-rose/50 hover:bg-white/[0.05] lg:col-span-3"
          >
            <div>
              <div className="mb-3 inline-block rounded-md bg-rose/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose">
                Latest
              </div>
              <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {lead.date}
                </div>
                <span>{"--"}</span>
                <span>{lead.readTime}</span>
              </div>
              <h3 className="mb-4 font-sans text-2xl font-bold text-white group-hover:text-rose transition-colors md:text-3xl text-balance">
                {lead.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-400 max-w-xl">{lead.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center text-sm font-medium text-rose group-hover:text-rose/80">
              Read Article
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>

          {/* Remaining articles -- stacked */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {rest.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                target="_blank"
                className="group flex flex-1 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-rose/50 hover:bg-white/[0.05]"
              >
                <div>
                  <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <span>{"--"}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white group-hover:text-rose transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{article.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-rose group-hover:text-rose/80">
                  Read Article
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="https://gabrielrojasai.substack.com"
            target="_blank"
            className="inline-flex items-center text-rose hover:text-rose/80 transition-colors"
          >
            View All Articles
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
