const steps = [
  {
    number: '01',
    title: 'Konsultacja diagnostyczna',
    description:
      'Bezpłatne 60 minut z ekspertem SoCap. Analizujemy strukturę Twojego zespołu i szacujemy konkretną kwotę oszczędności — bez ogólników.',
  },
  {
    number: '02',
    title: 'Wdrożenie modelu',
    description:
      'Nasz zespół konfiguruje cyfrowy benefit pracowniczy. Bez zmiany umów, bez angażowania HR ponad miarę. Typowo zajmuje to 3 tygodnie.',
  },
  {
    number: '03',
    title: 'Niższe koszty co miesiąc',
    description:
      'Pierwsza redukcja kosztów widoczna już w pierwszym miesiącu. Pracownicy dostają więcej netto — pracodawca płaci mniej składek ZUS.',
  },
]

const legalItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6l9-3 9 3v6c0 5.25-3.75 9-9 10.5C6.75 21 3 17.25 3 12V6z" />
      </svg>
    ),
    title: 'Wyrok SA III AUa 1247/24',
    description: 'Prawomocny wyrok Sądu Apelacyjnego w Warszawie z 19.02.2025 r. potwierdza pełną legalność modelu.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Kontrola PIP — 0 naruszeń',
    description: 'Przeprowadzona kontrola Państwowej Inspekcji Pracy nie wykazała żadnych nieprawidłowości.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: 'Rejestr MRPiPS',
    description: 'Model zarejestrowany w Ministerstwie Rodziny, Pracy i Polityki Społecznej, nr DDP-III.6240.266.2026.',
  },
]

export function HowItWorksLegal() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">

        {/* Jak to działa */}
        <h2 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          Jak to działa
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col">
              <span className="text-6xl font-black leading-none text-brand/15 select-none">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Podstawy prawne
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Dokumenty prawne */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {legalItems.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
