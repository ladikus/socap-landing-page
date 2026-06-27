import { SiteNav } from '@/components/site-nav'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { SocialProof } from '@/components/social-proof'
import { ProblemSection } from '@/components/problem-section'
import { HowItWorks } from '@/components/how-it-works'
import { TrustSection } from '@/components/trust-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { BookingModal } from '@/components/booking-modal'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNav />
      <main>
        <HeroSection />
        <StatsBar />
        <SocialProof />
        <ProblemSection />
        <HowItWorks />
        <TrustSection />
        <FaqSection />
        <CtaSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-muted-foreground">
          © 2026 SoCap Bonus · Polityka prywatności · Regulamin
        </div>
      </footer>
      <BookingModal />
    </div>
  )
}
