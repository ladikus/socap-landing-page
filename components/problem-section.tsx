export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="max-w-xl">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Płacisz pełne składki ZUS. Mógłbyś płacić o 25% mniej.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Model SoCap to cyfrowy benefit pracowniczy oparty na § 2 ust. 1 pkt 26
            Rozporządzenia Ministra Pracy z 18 grudnia 1998 r. Pracodawca obniża
            koszt zatrudnienia. Pracownik zyskuje wyższe netto. Bez zmiany umów.
            Bez zmiany struktury zatrudnienia.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          <p className="text-sm font-semibold tracking-tight text-foreground">
            Przykład: 100 pracowników
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex items-baseline justify-between border-b border-border pb-5">
              <dt className="text-sm text-muted-foreground sm:text-base">
                Koszt zatrudnienia dziś
              </dt>
              <dd className="text-xl font-semibold tabular-nums text-negative sm:text-2xl">
                204 000 zł / mies.
              </dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-5">
              <dt className="text-sm text-muted-foreground sm:text-base">
                Po wdrożeniu SoCap
              </dt>
              <dd className="text-xl font-semibold tabular-nums text-brand sm:text-2xl">
                ~153 000 zł / mies.
              </dd>
            </div>
            <div className="flex items-baseline justify-between rounded-2xl border border-brand/30 bg-brand/10 px-4 py-4">
              <dt className="text-sm font-medium text-foreground sm:text-base">
                Oszczędność firmy
              </dt>
              <dd className="text-2xl font-bold tabular-nums text-brand sm:text-3xl">
                ~51 000 zł / mies.
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm text-muted-foreground">
            Pracownik dostaje tyle samo lub więcej netto
          </p>
        </div>
      </div>
    </section>
  )
}
