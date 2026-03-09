import Image from "next/image"
import { OrganicBlob } from "@/components/ui/gaudi-visuals"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 relative bg-black px-6 py-24 md:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">
            <OrganicBlob />
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-lg border border-white/10 bg-neutral-900 grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]">
            <Image src="/gabriel-rojas.jpg" alt="Gabriel Rojas" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="mt-6 p-6 max-w-xs mx-auto bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl lg:absolute lg:mt-0 lg:-bottom-6 lg:-right-6 lg:mx-0">
            <p className="text-sm text-gray-300 italic leading-relaxed">
              {"\"Most 'AI strategies' are just expensive theater. I'm here to build the stage, not just perform on it.\""}
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
            About
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl mb-4">
            The <span className="text-blue-400">Operator</span> in the Room.
          </h2>
          <div className="h-px w-16 bg-blue-500 mb-10" />

          <div className="space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              {"I'm "}<span className="text-white font-medium">Gabriel Rojas</span>{". While others are breathless about the *potential* of AI, I'm focused on the *plumbing*."}
            </p>

            <p>
              {"My career has been defined by a simple refusal to accept the \"black box\" excuse. At "}
              <span className="text-white font-medium">ADP Lyric</span>
              {" and beyond, I've proven that AI systems can be transparent, ethical, and ruthlessly effective all at once."}
            </p>

            <div className="pl-6 border-l border-white/10 space-y-4">
              <p>
                <strong className="text-white block mb-0.5 text-sm">Texas Roots.</strong>
                <span className="text-sm">Built on pragmatism and straight talk.</span>
              </p>
              <p>
                <strong className="text-white block mb-0.5 text-sm">NYC Hustle.</strong>
                <span className="text-sm">Forged in the fires of speed and scale.</span>
              </p>
              <p>
                <strong className="text-white block mb-0.5 text-sm">Global Ambition.</strong>
                <span className="text-sm">{"Because this technology doesn't respect borders."}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
