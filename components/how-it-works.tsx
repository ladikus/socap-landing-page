const steps = [
  {
    title: 'Call diagnostyczny',
    description:
      'W 60 minut analizujemy strukturę Twojego zespołu i wynagrodzeń. Pokazujemy konkretną kwotę potencjalnych oszczędności.',
  },
  {
    title: 'Propozycja wdrożenia',
    description:
      'Otrzymujesz indywidualny plan wdrożenia systemu tokenów wraz z opinią prawną i harmonogramem.',
  },
  {
    title: 'Wdrożenie i oszczędności',
    description:
      'Wdrażamy system w Twojej firmie i monitorujemy efekty. Oszczędności widoczne już w pierwszym miesiącu.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Jak to działa
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-lg font-semibold text-background">
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
