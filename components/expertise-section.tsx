import { Brain, Search, Code, BarChart } from "lucide-react"

const expertise = [
  {
    title: "AI Product Strategy",
    description:
      "Defining the 'Why' and 'How' of AI adoption. Transforming abstract capabilities into concrete roadmaps that drive revenue and user value.",
    icon: Brain,
    stat: "5+",
    statLabel: "Products shipped",
  },
  {
    title: "Technical Leadership",
    description:
      "Bridging the gap between engineering and business. Fluent in the language of Transformers, RAG pipelines, and cloud infrastructure.",
    icon: Code,
    stat: "10+",
    statLabel: "Years experience",
  },
  {
    title: "LLM Evaluations & Ops",
    description:
      "Moving beyond 'vibes-based' development. Establishing rigorous evaluation frameworks to measure model performance, bias, and accuracy.",
    icon: BarChart,
    stat: "40%",
    statLabel: "Relevance gains",
  },
  {
    title: "Large Scale Search",
    description:
      "Deep expertise in semantic retrieval and recommendation systems, including the deployment of Two-Tower architectures for enterprise data.",
    icon: Search,
    stat: "M+",
    statLabel: "Queries per day",
  },
]

export function ExpertiseSection() {
  return (
    <section className="bg-neutral-900/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="pixel-marker mb-6">05 / SKILLS</span>
          <span className="micro-label mb-4">Expertise</span>
          <h2 className="font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase">Core Expertise</h2>
          <p className="mt-4 max-w-xl text-gray-400">
            Where deep technical knowledge meets product intuition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-rose/30 hover:bg-white/[0.06]"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 font-sans text-7xl font-bold text-white/[0.03] select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-rose/10 text-rose transition-colors group-hover:bg-rose/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-sans text-2xl font-bold text-rose">{item.stat}</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
