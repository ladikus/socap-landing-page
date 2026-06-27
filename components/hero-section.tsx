import { BookButton } from '@/components/book-button'

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
          Cyfrowy benefit pracowniczy · Wyrok SA III AUa 1247/24
        </p>
        <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Wynagrodzenie na Twoich zasadach.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Do 25% niższy koszt zatrudnienia bez zmiany umów. Pracownik dostaje do
          700 zł więcej netto co miesiąc. Model potwierdzony prawomocnym wyrokiem
          Sądu Apelacyjnego.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <BookButton size="lg">Zarezerwuj konsultację</BookButton>
          <p className="text-sm text-muted-foreground">
            60 minut · Bezpłatna analiza Twojej firmy
          </p>
        </div>
      </div>
    </section>
  )
}
