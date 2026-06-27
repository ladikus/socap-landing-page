import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { ProblemSection } from '@/components/problem-section'
import { HowItWorks } from '@/components/how-it-works'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNav />
      <main>
        <HeroSection />
        <StatsBar />
        <ProblemSection />
        <HowItWorks />
        <FaqSection />
        <CtaSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <span className="font-semibold text-foreground">SoCap</span>
          <span>© {new Date().getFullYear()} SoCap. Wszelkie prawa zastrzeżone.</span>
        </div>
      </footer>
    </div>
  )
}
