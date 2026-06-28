const stats = [
  { value: '25%', label: 'niższy koszt zatrudnienia — potwierdzony wyrokiem SA III AUa 1247/24' },
  { value: '700 zł', label: 'więcej netto miesięcznie dla każdego pracownika' },
  { value: '0', label: 'naruszeń stwierdzonych podczas kontroli PIP' },
]

export function StatsBar() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col items-center gap-2 bg-card px-6 py-10 text-center"
          >
            <span className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
