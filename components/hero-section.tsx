import { BookButton } from '@/components/book-button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover object-center opacity-10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-20 sm:pt-32 sm:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left: text */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8fd299]/40 bg-[#8fd299]/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#8fd299]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2f9e44]">
                Potwierdzone wyrokiem SA III AUa 1247/24
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
              Zatrudniasz 10+ osób?<br />
              <span className="text-[#2f9e44]">Przepłacasz ZUS</span><br />
              co miesiąc.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Model SoCap legalnie obniża koszt zatrudnienia o <strong>do 25%</strong> — 
              bez zmiany umów, bez ryzyka. Pracownik dostaje 
              <strong> do 700 zł więcej netto</strong> co miesiąc.
            </p>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8fd299]/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">do 25% mniej</p>
                  <p className="text-xs text-gray-500">kosztów zatrudnienia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8fd299]/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">700 zł więcej netto</p>
                  <p className="text-xs text-gray-500">dla każdego pracownika</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8fd299]/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">100% legalnie</p>
                  <p className="text-xs text-gray-500">wyrok sądowy + kontrola PIP</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookButton size="lg">
                Sprawdź ile zaoszczędzisz →
              </BookButton>
             <p className="text-sm text-gray-500">
  60 min · konkretna analiza Twojego biznesu · rozmowa z konsultantem · bez zobowiązań
</p>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Spotkanie biznesowe"
                className="h-[520px] w-full object-cover object-top"
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Przykład oszczędności
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Firma 100 osób</p>
                    <p className="text-2xl font-bold text-[#2f9e44]">51 000 zł / mies.</p>
                    <p className="text-xs text-gray-500">potencjalna oszczędność</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8fd299]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
