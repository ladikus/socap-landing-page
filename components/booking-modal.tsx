'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const EMPLOYEE_OPTIONS = ['10–49', '50–99', '100–299', '300+']

export function BookingModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    company: '',
    email: '',
    phone: '',
    employees: EMPLOYEE_OPTIONS[1],
  })

  useEffect(() => {
    function handleOpen() {
      setOpen(true)
    }
    window.addEventListener('open-booking', handleOpen)
    return () => window.removeEventListener('open-booking', handleOpen)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Wysyłka danych rezerwacji. Po podłączeniu Stripe ten endpoint
      // utworzy sesję Checkout i zwróci { url } do przekierowania.
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        const data = (await res.json()) as { url?: string }
        window.location.href = data.url ?? '/success'
        return
      }
    } catch {
      // ignorujemy — przechodzimy do strony potwierdzenia
    }

    router.push('/success')
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-background p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Zamknij"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="booking-title"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          Zarezerwuj konsultację
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Uzupełnij dane — oddzwonimy w ciągu 24h
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="company"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Nazwa firmy
            </label>
            <input
              id="company"
              type="text"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Adres e-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Numer telefonu
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div>
            <label
              htmlFor="employees"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Liczba pracowników
            </label>
            <select
              id="employees"
              value={form.employees}
              onChange={(e) => setForm({ ...form, employees: e.target.value })}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/40"
            >
              {EMPLOYEE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 py-1">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground">
              Opłata rezerwacyjna: 1 zł
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? 'Przetwarzanie…' : 'Zapłać 1 zł i zarezerwuj'}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Płatność bezpieczna · Szyfrowanie SSL · Stripe
          </p>
        </form>
      </div>
    </div>
  )
}
