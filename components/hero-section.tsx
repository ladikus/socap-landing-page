export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-3xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Dla CEO i CFO firm 50–300 pracowników
        </p>
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Twoja firma płaci za dużo ZUS.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground">
          System tokenów SoCap pozwala legalnie obniżyć koszty składek o 30–50%.
          Dowiedz się w 60 minut, czy to działa w Twojej firmie.
        </p>
        <div className="mt-10">
          <a
            href="#rezerwacja"
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Zarezerwuj call — 1 zł
          </a>
        </div>
      </div>
    </section>
  )
}
