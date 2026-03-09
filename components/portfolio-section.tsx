import Image from "next/image"

const projects = [
  {
    title: "Accelerating Search with Two-Tower Models",
    category: "Architecture & Engineering",
    description:
      "Traditional keyword search failed to capture semantic nuance at scale. I led the implementation of a dual-encoder (Two-Tower) architecture to map queries and documents into a shared high-dimensional vector space. The result was a 40% improvement in retrieval relevance and significantly reduced latency for millions of daily queries.",
    tags: ["Machine Learning", "Vector DB", "Search Ops"],
    image: "/portfolio-two-towers.jpg",
  },
  {
    title: "Enterprise AI Strategy: Re-imagining Retail",
    category: "Strategy & Vision",
    description:
      "Designed a comprehensive 'AI-first' roadmap for high-volume retail environments (7-Eleven context). Focused on demand forecasting, cashier-less experiences, and personalized customer journeys. The strategy balanced immediate operational efficiencies with long-term transformational bets.",
    tags: ["Retail", "Forecasting", "UX Strategy"],
    image: "/portfolio-digital-retail.jpg",
  },
  {
    title: "Scalable ML Infrastructure",
    category: "Product Infrastructure",
    description:
      "Architected a robust evaluation pipeline for LLM deployments. Moved the organization from ad-hoc testing to systematic, metrics-driven evaluation, ensuring safety, reducing hallucinations, and building trust in automated customer interactions.",
    tags: ["LLM Ops", "Infrastructure", "Evaluation"],
    image: "/portfolio-ml-core.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="scroll-mt-20 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
      <div className="mb-16">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
          Portfolio
        </span>
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Selected Work</h2>
        <p className="mt-4 max-w-xl text-gray-400">
          A snapshot of projects where technical depth meets business strategy.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.05]"
          >
            {/* Added project thumbnail image */}
            <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="p-8">
              <div className="mb-6 text-xs font-bold uppercase tracking-wider text-blue-500">{project.category}</div>
              <h3 className="mb-4 font-heading text-2xl font-bold text-white">{project.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
