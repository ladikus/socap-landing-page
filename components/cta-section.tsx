import { BookButton } from '@/components/book-button'

export function CtaSection() {
  return (
    <section id="rezerwacja" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Sprawdź, ile Twoja firma może zaoszczędzić.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            60-minutowa konsultacja z ekspertem. Konkretna kwota dla Twojej firmy.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <BookButton size="lg">Zarezerwuj konsultację</BookButton>
            <p className="text-sm text-muted-foreground">
              Płatność testowa: 1 zł · Potwierdzenie natychmiast
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
