const steps = [
  {
    title: 'Konsultacja diagnostyczna',
    description:
      '60 minut z ekspertem SoCap. Analizujemy strukturę Twojego zespołu i szacujemy konkretną kwotę oszczędności.',
  },
  {
    title: 'Wdrożenie systemu',
    description:
      'Nasz zespół konfiguruje model benefitu. Bez zmiany umów, bez angażowania działu HR ponad miarę.',
  },
  {
    title: 'Niższe koszty co miesiąc',
    description:
      'Pierwsza redukcja kosztów widoczna już w pierwszym miesiącu. Pracownicy dostają więcej netto.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          Jak to działa
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-brand-foreground">
                {i + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
