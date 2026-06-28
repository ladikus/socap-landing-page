import { BookButton } from '@/components/book-button'

const timeline = [
  { period: 'Miesiąc 1', saving: '58 715 zł', total: '58 715 zł', desc: 'Pierwsza redukcja kosztów' },
  { period: 'Miesiąc 3', saving: '58 715 zł', total: '176 145 zł', desc: 'Zwrot kosztów wdrożenia' },
  { period: 'Miesiąc 6', saving: '58 715 zł', total: '352 290 zł', desc: 'Oszczędności widoczne w bilansie' },
  { period: 'Miesiąc 12', saving: '58 715 zł', total: '704 580 zł', desc: 'Ponad pół miliona w rok' },
  { period: 'Miesiąc 24', saving: '58 715 zł', total: '1 409 160 zł', desc: 'Ponad milion złotych oszczędności' },
]

export function ProblemSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left */}
          <div className="pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#2f9e44]">
              Problem
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Płacisz pełne składki ZUS.<br />
              Mógłbyś płacić <strong className="text-[#2f9e44]">o 25% mniej.</strong>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-600">
              Model SoCap to cyfrowy benefit pracowniczy oparty na{' '}
              <strong className="text-gray-900">
                § 2 ust. 1 pkt 26 Rozporządzenia Ministra Pracy z 18 grudnia 1998 r.
              </strong>
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8fd299]/30">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">
                  <strong className="text-gray-900">Pracodawca</strong> obniża koszt zatrudnienia
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8fd299]/30">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">
                  <strong className="text-gray-900">Pracownik</strong> zyskuje wyższe netto
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8fd299]/30">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">
                  <strong className="text-gray-900">Bez zmiany umów</strong> i struktury zatrudnienia
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8fd299]/30">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">
                  Potwierdzono <strong className="text-gray-900">prawomocnym wyrokiem SA</strong> w Warszawie (sygn. III AUa 1247/24)
                </p>
              </div>
            </div>
            <BookButton>Sprawdź oszczędności dla Twojej firmy →</BookButton>
          </div>

          {/* Right: timeline */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700">
                Skumulowane oszczędności firmy
              </p>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                100 prac. · 5 000 zł netto
              </span>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[88px] top-4 bottom-4 w-px bg-gray-200" />

              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={item.period} className="relative flex items-center gap-4">
                    {/* Period label */}
                    <div className="w-[80px] flex-shrink-0 text-right">
                      <span className="text-xs font-medium text-gray-400">{item.period}</span>
                    </div>

                    {/* Dot */}
                    <div className={[
                      'relative z-10 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2',
                      i === timeline.length - 1
                        ? 'border-[#2f9e44] bg-[#2f9e44]'
                        : 'border-[#8fd299] bg-white'
                    ].join(' ')}>
                      {i === timeline.length - 1 && (
                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </div>

                    {/* Card */}
                    <div className={[
                      'flex-1 rounded-2xl border p-4',
                      i === timeline.length - 1
                        ? 'border-[#8fd299]/40 bg-[#8fd299]/10'
                        : 'border-gray-100 bg-gray-50'
                    ].join(' ')}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                          <p className={[
                            'text-xl font-bold',
                            i === timeline.length - 1 ? 'text-[#2f9e44]' : 'text-gray-900'
                          ].join(' ')}>
                            {item.total}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">/ mies.</p>
                          <p className="text-sm font-semibold text-[#2f9e44]">{item.saving}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              * Przykład dla 100 pracowników ze średnim wynagrodzeniem 5 000 zł netto.
              Twoje liczby oblicz w kalkulatorze poniżej.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
