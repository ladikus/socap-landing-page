export function CtaSection() {
  return (
    <section
      id="rezerwacja"
      className="bg-foreground text-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          60 minut. 1 złoty. Pełna analiza.
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/70">
          Zarezerwuj call diagnostyczny i dowiedz się dokładnie, ile Twoja firma
          może zaoszczędzić na składkach ZUS — bez żadnych zobowiązań.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Zarezerwuj call — 1 zł
          </a>
        </div>
        <p className="mt-6 text-sm text-background/50">
          Płatność testowa · Termin potwierdzony natychmiast
        </p>
      </div>
    </section>
  )
}
