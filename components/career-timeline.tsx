import { Briefcase, Award, Code2 } from "lucide-react"

const timeline = [
  {
    year: "2024 - Present",
    role: "Head of Product AI",
    company: "ADP Lyric",
    description:
      "Leading AI product strategy and execution for a global workforce management platform. Architecting LLM evaluation pipelines, semantic search systems, and AI-first product roadmaps.",
    icon: Briefcase,
    iconBg: "bg-rose",
  },
  {
    year: "2023 - 2024",
    role: "AI Product Strategist",
    company: "Various Consulting Projects",
    description:
      "Advised enterprise clients on AI adoption strategies, including retail transformation initiatives (7-Eleven case study) and ML infrastructure modernization.",
    icon: Code2,
    iconBg: "bg-rose/80",
  },
  {
    year: "2020 - 2023",
    role: "Senior Product Manager",
    company: "Enterprise Tech",
    description:
      "Built and scaled search and recommendation systems using Two-Tower architectures. Led cross-functional teams to deliver ML-powered features to millions of users.",
    icon: Award,
    iconBg: "bg-rose/60",
  },
]

export function CareerTimeline() {
  return (
    <section className="border-y border-white/5 bg-neutral-900/30 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-rose">
          Career
        </span>
        <h2 className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl">Career Journey</h2>
        <p className="mb-16 text-gray-400 max-w-2xl">
          From engineering complex systems to leading AI product strategy, here is how I got here.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-rose via-rose/70 to-rose/40 md:left-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="flex items-start md:w-1/2 md:justify-end md:pr-8">
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black ${item.iconBg}`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                    <div className="mb-2 text-sm font-bold text-rose">{item.year}</div>
                    <h3 className="mb-1 text-xl font-bold text-white">{item.role}</h3>
                    <div className="mb-4 text-sm text-gray-400">{item.company}</div>
                    <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
