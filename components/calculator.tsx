'use client'
import { useState, useCallback } from 'react'
import { BookButton } from '@/components/book-button'

function formatPLN(value: number): string {
  return value.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + ' zł'
}

// Verified against SoCap calculator for 5000 zł netto / UoP:
// Podstawa ZUS = netto × 0.9612
// ZUS pracodawcy = podstawaZUS × 0.2048
// Prowizja SoCap = ZUS pracodawcy × 0.4890
// Oszczędność = ZUS pracodawcy - Prowizja
// Koszt pracodawcy = netto × 1.5431 (7715.38 / 5000)
// Koszt z prowizją = koszt + prowizja

function calculate(employees: number, netSalary: number) {
  const podstawaZUS = netSalary * 0.9612
  const zusEmployer = podstawaZUS * 0.2048
  const prowizja = zusEmployer * 0.4890
  const oszczednoscNaPracownika = zusEmployer - prowizja
  const kosztPracodawcy = netSalary * 1.5431
  const kosztZProwizja = kosztPracodawcy + prowizja

  return {
    oszczednoscNaPracownika,
    prowizja,
    kosztZProwizja,
    oszczednoscMies: oszczednoscNaPracownika * employees,
    oszczednoscRok: oszczednoscNaPracownika * employees * 12,
  }
}

const QUICK_COUNTS = [1, 10, 100, 200]

export function Calculator() {
  const [employees, setEmployees] = useState(100)
  const [netSalary, setNetSalary] = useState(5000)

  const r = calculate(employees, netSalary)

  const handleEmployees = useCallback((val: string) => {
    const n = parseInt(val.replace(/\D/g, ''), 10)
    if (!isNaN(n) && n >= 0) setEmployees(n)
  }, [])

  const handleSalary = useCallback((val: string) => {
    const n = parseInt(val.replace(/\D/g, ''), 10)
    if (!isNaN(n) && n >= 0) setNetSalary(n)
  }, [])

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#2f9e44]">
            Kalkulator oszczędności
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sprawdź rzeczywisty zysk z SoCap
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Wpisz dane swojej firmy i zobacz{' '}
            <strong className="text-gray-700">realną różnicę</strong>{' '}
            w zaledwie kilka sekund.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">

          {/* Inputs */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Liczba pracowników
              </label>
              <input
                type="text"
                value={employees}
                onChange={(e) => handleEmployees(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-medium text-gray-900 outline-none focus:border-[#8fd299] focus:ring-2 focus:ring-[#8fd299]/20"
              />
              <div className="mt-3 flex gap-2">
                {QUICK_COUNTS.map((n) => (
                  <button
                    key={n}
                    onClick={() => setEmployees(n)}
                    className={[
                      'rounded-lg border px-4 py-2 text-sm font-semibold transition',
                      employees === n
                        ? 'border-[#8fd299] bg-[#8fd299]/10 text-[#2f9e44]'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-[#8fd299] hover:text-[#2f9e44]',
                    ].join(' ')}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Średnie wynagrodzenie netto (PLN)
              </label>
              <input
                type="text"
                value={netSalary}
                onChange={(e) => handleSalary(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-medium text-gray-900 outline-none focus:border-[#8fd299] focus:ring-2 focus:ring-[#8fd299]/20"
              />
            </div>
          </div>

          {/* Results — только главные числа */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#8fd299]/30 bg-white p-5 text-center shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Oszczędność pracodawcy
              </p>
              <p className="text-2xl font-bold text-[#2f9e44]">
                {formatPLN(r.oszczednoscNaPracownika)}
              </p>
              <p className="mt-1 text-xs text-gray-400">/ pracownik / mies.</p>
            </div>

            <div
