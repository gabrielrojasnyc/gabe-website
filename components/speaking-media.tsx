import { Mic, Youtube, Radio, ExternalLink, Clock } from "lucide-react"

const appearances = [
  {
    type: "Podcast",
    title: "The Future of AI Product Management",
    venue: "Tech Leadership Podcast",
    date: "Coming Soon",
    description:
      "Discussion on bridging the gap between ML engineering and product strategy in enterprise environments.",
    icon: Radio,
    upcoming: true,
  },
  {
    type: "Talk",
    title: "Two-Tower Models in Production",
    venue: "AI Conference 2025",
    date: "TBA",
    description: "Technical deep dive into implementing semantic search at scale with dual-encoder architectures.",
    icon: Mic,
    upcoming: true,
  },
  {
    type: "Interview",
    title: "Rethinking AI Ethics in Product",
    venue: "YouTube Tech Channel",
    date: "Available Now",
    description: "Challenging premium pricing models and advocating for accessible, ethical AI development.",
    icon: Youtube,
    upcoming: false,
  },
]

export function SpeakingMedia() {
  return (
    <section id="speaking" className="scroll-mt-20 border-y border-white/5 bg-neutral-900/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <span className="pixel-marker mb-6">/ SPEAKING</span>
        <span className="micro-label mb-4">Speaking</span>
        <h2 className="mb-4 font-pixel text-2xl font-bold tracking-wide text-white md:text-3xl uppercase">Speaking & Media</h2>
        <p className="mb-16 text-gray-400 max-w-2xl">
          Talks, podcasts, and interviews where I share insights on AI product strategy and technical leadership.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {appearances.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose/10 text-rose">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose">{item.type}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <div className="mb-3 text-sm text-gray-500">
                  {item.venue} -- {item.date}
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
              {item.upcoming ? (
                <div className="mt-6 inline-flex items-center text-sm font-medium text-gray-500">
                  <Clock className="mr-2 h-4 w-4" />
                  Upcoming
                </div>
              ) : (
                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-sm font-medium text-rose hover:text-rose/80 transition-colors"
                >
                  Watch Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-rose/20 bg-rose/5 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-white">Interested in having me speak?</h3>
          <p className="mb-6 text-gray-400">
            {"I'm available for podcasts, conferences, and workshops on AI product strategy and technical leadership."}
          </p>
          <a
            href="mailto:contact@gabrielrojas.com"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-black transition-all hover:bg-gray-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
