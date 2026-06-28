import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rezerwacja potwierdzona — SoCap Bonus',
  description: 'Dziękujemy za rezerwację konsultacji SoCap.',
}

export default function SuccessPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-20">

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">

        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-brand/20" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand/30">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-foreground"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
        </div>

        <h1 className="mt-10 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Gotowe. Do zobaczenia
          <br />
          <span className="text-brand">na konsultacji.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Twoja rezerwacja jest potwierdzona. Nasz ekspert odezwie się do Ciebie
          w ciągu <strong className="text-foreground">24 godzin</strong> —
          żeby ustalić dokładny termin i przesłać krótkie pytania przed rozmową.
        </p>

        <div className="mt-12 w-full max-w-lg rounded-3xl border border-border bg-card p-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Co będzie dalej
          </p>

          <div className="mt-6 space-y-6">

            <div className="flex gap-4">
              <span className="mt-0.5 text-2xl">🌐</span>
              <div>
                <p className="font-semibold text-foreground">Dowiedz się więcej</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Zajrzyj na naszą stronę — znajdziesz tam więcej informacji o systemie SoCap.
                </p>
                <a href="https://socapbonus.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-brand">
                  socapbonus.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-0.5 text-2xl">📞</span>
              <div>
                <p className="font-semibold text-foreground">Czekaj na kontakt</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ekspert SoCap zadzwoni lub napisze żeby potwierdzić termin
                  i dowiedzieć się więcej o Twojej firmie przed rozmową.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="mt-0.5 text-2xl">💡</span>
              <div>
                <p className="font-semibold text-foreground">Przygotuj jedną liczbę</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ile osób zatrudniasz na umowę o pracę? To wystarczy żeby
                  na konsultacji pokazać Ci konkretną kwotę oszczędności.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <p>Masz pytanie przed rozmową?</p>
          <a href="mailto:administracja@socapbonus.com" className="font-medium text-brand">
            administracja@socapbonus.com
          </a>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          Wróć na stronę główną
        </Link>

      </div>
    </main>
  )
}
