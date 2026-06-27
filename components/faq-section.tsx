const faqs = [
  {
    q: 'Czy to legalne?',
    a: 'Tak. Model oparty jest na § 2 ust. 1 pkt 26 Rozp. MPiPS. Potwierdzony prawomocnym wyrokiem SA Warszawa III AUa 1247/24 oraz kontrolą PIP bez naruszeń.',
  },
  {
    q: 'Czy pracownicy stracą na wynagrodzeniu?',
    a: 'Nie. Wynagrodzenie netto pracownika pozostaje takie samo lub wyższe. Typowo pracownik zyskuje do 700 zł netto miesięcznie.',
  },
  {
    q: 'Ile trwa wdrożenie?',
    a: 'Od pierwszego calla do uruchomienia systemu mija zwykle 4–6 tygodni.',
  },
  {
    q: 'Dla jak dużej firmy to ma sens?',
    a: 'Model jest opłacalny od kilkunastu pracowników. Największy efekt skali widać od 50 osób wzwyż.',
  },
]

export function FaqSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          Najczęstsze pytania
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {faq.q}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
