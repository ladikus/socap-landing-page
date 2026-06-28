import { BookButton } from '@/components/book-button'

export function ProblemSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#2f9e44]">
              Problem
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Płacisz pełne składki ZUS.<br />
              Mógłbyś płacić o 25% mniej.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-600">
              Model SoCap to cyfrowy benefit pracowniczy oparty na{' '}
              <span className="font-medium text-gray-900">
                § 2 ust. 1 pkt 26 Rozporządzenia Ministra Pracy z 18 grudnia 1998 r.
              </span>{' '}
              Pracodawca obniża koszt zatrudnienia. Pracownik zyskuje wyższe netto.
            </p>
            <p className="mb-8 text-base leading-relaxed text-gray-600">
              Bez zmiany umów. Bez zmiany struktury zatrudnienia. Potwierdzono
              prawomocnym wyrokiem Sądu Apelacyjnego w Warszawie{' '}
              <span className="font-medium text-gray-900">(sygn. III AUa 1247/24)</span>.
            </p>
            <BookButton>Sprawdź oszczędności dla Twojej firmy →</BookButton>
          </div>

          {/* Right: calculator card */}
          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Przykładowa kalkulacja
            </p>
            <p className="mb-6 text-base font-bold text-gray-900">
              100 pracowników · średnie wynagrodzenie netto 5 000 zł
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
                <div>
                  <p className="text-xs text-gray-500">Całkowity koszt zatrudnienia dziś</p>
                  <p className="text-sm font-medium text-gray-700">100 os. × brutto + ZUS pracodawcy</p>
                </div>
                <p className="text-lg font-bold text-red-500">234 860 zł<span className="text-xs font-normal text-gray-400"> /mies.</span></p>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
                <div>
                  <p className="text-xs text-gray-500">Po wdrożeniu Modelu SoCap</p>
                  <p className="text-sm font-medium text-gray-700">część świadczenia jako benefit</p>
                </div>
                <p className="text-lg font-bold text-gray-700">176 145 zł<span className="text-xs font-normal text-gray-400"> /mies.</span></p>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#8fd299]/20 p-4">
                <div>
                  <p className="text-xs font-semibold text-[#2f9e44]">Oszczędność firmy miesięcznie</p>
                  <p className="text-xs text-gray-600">Pracownik dostaje tyle samo lub więcej netto</p>
                </div>
                <p className="text-2xl font-bold text-[#2f9e44]">58 715 zł</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white p-4 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Skąd ta kwota?</p>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Składki ZUS pracodawcy (20.48%)</span>
                  <span className="font-medium">wyłączone z podstawy</span>
                </div>
                <div className="flex justify-between">
                  <span>Podstawa prawna</span>
                  <span className="font-medium">§ 2 ust. 1 pkt 26 Rozp. MPiPS</span>
                </div>
                <div className="flex justify-between">
                  <span>Potwierdzenie sądowe</span>
                  <span className="font-medium text-[#2f9e44]">SA Warszawa III AUa 1247/24</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              * Kalkulacja poglądowa. Dokładną kwotę dla Twojej firmy wyliczymy na konsultacji.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
