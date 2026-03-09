import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { OrganicCurve, MosaicBackground } from "@/components/ui/gaudi-visuals"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <MosaicBackground />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-neural-symphony.jpg"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Pixel marker - slide number per typography system: 9-12px, ALL CAPS, fg4 color */}
        <div className="mb-8 animate-fade-in-up">
          <span className="pixel-marker">01 / 06</span>
        </div>

        {/* Micro-label */}
        <div className="mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose"></span>
            </span>
            Architecting Intelligence
          </span>
        </div>

        {/* Headline -- Geist Bold at display scale with negative tracking */}
        <h1 className="font-sans text-6xl font-bold tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.9] animate-fade-in-up animation-delay-200">
          Structure
          <br />
          from{" "}
          <span className="text-rose">Chaos.</span>
        </h1>

        {/* Subtext -- Geist Regular at body scale */}
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg animate-fade-in-up animation-delay-400">
          {"AI isn't magic -- it's engineering. I bridge the gap between research papers and revenue, building systems that "}
          <span className="text-white font-medium">scale</span>,{" "}
          <span className="text-white font-medium">adapt</span>, and{" "}
          <span className="text-white font-medium">endure</span>.
        </p>

        {/* CTAs -- primary (rose fill) and secondary (text-only link) */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-in-up animation-delay-600">
          <Link
            href="https://gabrielrojasai.substack.com"
            target="_blank"
            className="group inline-flex h-12 items-center justify-center rounded-lg bg-rose px-8 text-sm font-semibold text-white transition-all hover:bg-rose-dark"
          >
            Read My Mind
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#work"
            className="inline-flex h-12 items-center justify-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            See The Evidence
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <OrganicCurve fill="fill-black" className="z-20" />
    </section>
  )
}
