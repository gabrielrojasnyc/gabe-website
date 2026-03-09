import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CareerTimeline } from "@/components/career-timeline"
import { ExpertiseSection } from "@/components/expertise-section"
import { FeaturedWriting } from "@/components/featured-writing"
import { NewsletterSection } from "@/components/newsletter-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { GithubProjectsSection } from "@/components/github-projects-section"
import { SpeakingMedia } from "@/components/speaking-media"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <AboutSection />
        <CareerTimeline />
        <ExpertiseSection />
        <FeaturedWriting />
        <NewsletterSection />
        <PortfolioSection />
        <GithubProjectsSection />
        <SpeakingMedia />
        <Footer />
      </main>
    </>
  )
}
