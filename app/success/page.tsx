import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rezerwacja potwierdzona — SoCap Bonus',
  description: 'Dziękujemy za rezerwację konsultacji SoCap.',
}

const steps = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    text: 'Sprawdź e-mail — wysłaliśmy potwierdzenie',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4M16 2v4" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
    text: 'Przygotuj dane o strukturze zatrudnienia',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: 'Czekaj na telefon od eksperta SoCap',
  },
]

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand-foreground"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>

      <h1 className="mt-8 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Rezerwacja potwierdzona!
      </h1>
      <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
        Dziękujemy. Nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin
        roboczych.
      </p>

      <ul className="mt-12 w-full max-w-md space-y-4 text-left">
        {steps.map((step) => (
          <li
            key={step.text}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-foreground">
              {step.icon}
            </span>
            <span className="text-sm text-foreground sm:text-base">
              {step.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="mt-12 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        Wróć na stronę główną
      </Link>
    </main>
  )
}
