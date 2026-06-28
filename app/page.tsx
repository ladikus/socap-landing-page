import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { MediaCarousel } from '@/components/media-carousel'
import { Calculator } from '@/components/calculator'
import { SocialProof } from '@/components/social-proof'
import { ProblemSection } from '@/components/problem-section'
import { HowItWorksLegal } from '@/components/how-it-works-legal'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { BookingModal } from '@/components/booking-modal'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <StatsBar />
        <MediaCarousel />
        <Calculator />
        <SocialProof />
        <HowItWorksLegal />
        <FaqSection />
        <CtaSection />
      </main>
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-400">
          © 2026 SoCap Bonus · Polityka prywatności · Regulamin
        </div>
      </footer>
      <BookingModal />
    </div>
  )
}
