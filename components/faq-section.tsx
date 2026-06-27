const faqs = [
  {
    q: 'Czy to jest legalne?',
    a: 'Tak. System tokenów SoCap działa w pełni zgodnie z polskim prawem podatkowym i ubezpieczeniowym. Każde wdrożenie jest poparte indywidualną opinią prawną.',
  },
  {
    q: 'Czy pracownicy stracą na wynagrodzeniu?',
    a: 'Nie. Model jest tak skonstruowany, aby wynagrodzenie netto pracownika pozostało takie samo lub wyższe. Obniżeniu ulegają wyłącznie koszty składkowe po stronie firmy.',
  },
  {
    q: 'Ile trwa wdrożenie?',
    a: 'Od pierwszego calla do uruchomienia systemu mija zwykle 4–6 tygodni, w zależności od wielkości i struktury organizacji.',
  },
  {
    q: 'Dlaczego call kosztuje tylko 1 zł?',
    a: 'Symboliczna opłata potwierdza Twoją gotowość do rozmowy i rezerwuje termin w kalendarzu naszego eksperta. Cała analiza odbywa się podczas calla.',
  },
]

export function FaqSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
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
    </section>
  )
}
