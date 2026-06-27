export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="max-w-xl">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Składki ZUS rosną co roku. Twoja marża nie.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Przy zespole liczącym 100 osób koszty składek przekraczają 200 tysięcy
            złotych miesięcznie. To pieniądze, które nie budują Twojej firmy —
            znikają zanim trafią do pracownika.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            System tokenów SoCap przebudowuje strukturę wynagrodzeń w pełni
            zgodnie z prawem, przenosząc część kosztów do modelu, który realnie
            obniża obciążenia składkowe — bez obniżania wynagrodzeń netto.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Przykładowa kalkulacja
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            100 pracowników
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex items-baseline justify-between border-b border-border pb-6">
              <dt className="text-base text-muted-foreground">Koszt ZUS</dt>
              <dd className="text-2xl font-semibold tabular-nums text-negative">
                204 000 zł
              </dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-6">
              <dt className="text-base text-muted-foreground">Po SoCap</dt>
              <dd className="text-2xl font-semibold tabular-nums text-positive">
                ~135 000 zł
              </dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="text-base font-medium text-foreground">
                Oszczędność
              </dt>
              <dd className="text-3xl font-semibold tabular-nums text-foreground">
                ~69 000 zł
                <span className="text-base font-normal text-muted-foreground">
                  {' '}
                  / mies.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
