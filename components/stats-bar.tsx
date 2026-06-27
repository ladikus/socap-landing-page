const stats = [
  { value: '127 firm', label: 'wdrożyło system SoCap' },
  { value: '34%', label: 'średnia obniżka kosztów składek' },
  { value: '60 min', label: 'tyle trwa call diagnostyczny' },
]

export function StatsBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col items-center gap-2 px-6 py-10 text-center"
          >
            <span className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
