'use client'
import { useEffect, useRef, useState } from 'react'

const articles = [
  {
    source: 'Gazeta Prawna',
    logo: '⚖️',
    title: 'Wyrok, który zamyka spór — SoCap nie podlega składkom ZUS',
    excerpt: 'Sądy dwóch instancji potwierdziły, że token SoCap nie powinien być wliczany do podstawy wymiaru składek ZUS. Spór wynikał z błędnej interpretacji przepisów przez organ rentowy.',
    url: 'https://prawo.gazetaprawna.pl/artykuly/9949591,wyrok-ktory-zamyka-spor-socap-nie-podlega-skladkom-zus-myli-pojecie.html',
    date: 'luty 2026',
  },
  {
    source: 'Puls Biznesu',
    logo: '📊',
    title: 'SoCap Token poza podstawą wymiaru składek',
    excerpt: 'Wyroki sądów dwóch instancji potwierdziły, że token SoCap nie powinien być wliczany do podstawy wymiaru składek ZUS — ważny przykład interpretacji prawa wobec nowych form benefitów.',
    url: 'https://www.pb.pl/socap-token-poza-podstawa-wymiaru-skladek-1256255',
    date: 'luty 2026',
  },
  {
    source: 'Infor.pl Kadry',
    logo: '📋',
    title: 'Bezpieczna redukcja kosztów pracy w 2026 r.',
    excerpt: 'Jak w 2026 roku — przy rosnącej płacy minimalnej — bezpiecznie obniżyć całkowity koszt pracy o 20–25% w oparciu o prawomocny wyrok SA w Warszawie III AUa 1247/24.',
    url: 'https://kadry.infor.pl/zatrudnienie/umowa-o-prace/7559232,bezpieczna-redukcja-wysokich-kosztow-pracy-w-2026-r-o-2025-wyrok-sadu-apelacyjnego-iii-aua-124724.html',
    date: 'maj 2026',
  },
  {
    source: 'Super Biznes (SE.pl)',
    logo: '💼',
    title: 'Wypłaca część pensji bez gotówki — pracownik zyska nawet 700 zł',
    excerpt: 'Dzięki wyrokowi SA w Warszawie firmy mogą wypłacać część świadczenia w formie cyfrowego benefitu wyłączonego ze składek ZUS — pracownik zyskuje typowo do 700 zł netto miesięcznie.',
    url: 'https://superbiz.se.pl/prawo/wyplaca-czesc-pensji-ale-bez-gotowki-pracownik-zyska-nawet-700-zl-aa-jAbn-ErX2-NJMv.html',
    date: 'maj 2026',
  },
  {
    source: 'Poradnik Przedsiębiorcy',
    logo: '🏢',
    title: 'Cyfrowy benefit pracowniczy obniżający ZUS — praktyczny przewodnik',
    excerpt: 'Szczegółowe wyjaśnienie jak działa Model SoCap, jakie korzyści daje pracodawcy i pracownikowi oraz jak go wdrożyć w firmie zgodnie z polskim Kodeksem pracy.',
    url: 'https://poradnikprzedsiebiorcy.pl/-socap-token-cyfrowy-benefit-pracowniczy-obnizajacy-zus',
    date: 'październik 2025',
  },
  {
    source: 'Nowoczesne Prawo Pracy',
    logo: '📰',
    title: 'Jak obniżyć koszt zatrudnienia o 25% w 2026',
    excerpt: 'Pełna analiza prawna dla pracodawców MŚP — omówienie § 2 ust. 1 pkt 26 Rozp. MPiPS, wyroku SA III AUa 1247/24 oraz opinii dr. hab. Łukasza Pisarczyka z UW.',
    url: 'https://nowoczesneprawopracy.pl/jak-obnizyc-koszt-zatrudnienia-2026/',
    date: 'maj 2026',
  },
]

export function MediaCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % articles.length)
      }, 3500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const visible = [
    articles[current % articles.length],
    articles[(current + 1) % articles.length],
    articles[(current + 2) % articles.length],
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2f9e44]">
              Media o SoCap
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              16 publikacji w mediach Tier 1
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + articles.length) % articles.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#8fd299] hover:text-[#2f9e44]"
              aria-label="Poprzedni"
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % articles.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#8fd299] hover:text-[#2f9e44]"
              aria-label="Następny"
            >
              →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((article, i) => (
            
              key={`${article.source}-${i}`}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-[#8fd299]/50 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{article.logo}</span>
                  <span className="text-sm font-semibold text-gray-900">{article.source}</span>
                </div>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
              <h3 className="mb-3 text-sm font-bold leading-snug text-gray-900 group-hover:text-[#2f9e44] transition-colors">
                {article.title}
              </h3>
              <p className="flex-1 text-xs leading-relaxed text-gray-500">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#2f9e44]">
                Czytaj artykuł <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-1.5">
          {articles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current % articles.length
                  ? 'w-6 bg-[#2f9e44]'
                  : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Przejdź do ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
