const items = [
  {
    title: 'Wyrok sądowy',
    description:
      'Prawomocny wyrok Sądu Apelacyjnego w Warszawie z 19.02.2025 r., sygn. III AUa 1247/24',
  },
  {
    title: 'Kontrola PIP',
    description:
      'Przeprowadzona kontrola Państwowej Inspekcji Pracy — zero naruszeń',
  },
  {
    title: 'Rejestr MRPiPS',
    description:
      'Model zarejestrowany w Ministerstwie Rodziny, Pracy i Polityki Społecznej, nr DDP-III.6240.266.2026',
  },
]

export function TrustSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold tracking-tight text-brand">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
