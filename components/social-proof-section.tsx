const reviews = [
  {
    quote:
      'Model SoCap wdrożyliśmy w 3 tygodnie. Oszczędzamy 43 000 zł miesięcznie przy 80 pracownikach.',
    author: 'Marek W.',
    role: 'Prezes, branża produkcyjna',
  },
  {
    quote:
      'Byłem sceptyczny co do legalności. Po rozmowie z prawnikiem SoCap — wdrożyliśmy bez wahania.',
    author: 'Tomasz K.',
    role: 'CFO, firma logistyczna',
  },
  {
    quote:
      'Pracownicy dostają więcej netto, firma płaci mniej. Wszyscy wygrywają.',
    author: 'Anna R.',
    role: 'Dyrektor HR, 120 pracowników',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 na 5 gwiazdek">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-brand"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26 6.9.6-5.2 4.52 1.56 6.72L12 17.27l-6.16 2.83 1.56-6.72-5.2-4.52 6.9-.6L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function SocialProofSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4">
            <div className="flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                />
              </svg>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    5.0
                  </span>
                  <Stars />
                </div>
                <p className="text-xs text-muted-foreground">Ocena w Google</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.author}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {review.author}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {review.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
