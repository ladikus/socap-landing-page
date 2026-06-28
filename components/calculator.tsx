'use client'
import { useState, useCallback } from 'react'
import { BookButton } from '@/components/book-button'

function formatPLN(value: number): string {
  return value.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + ' zł'
}

function calculate(employees: number, netSalary: number) {
  const podstawaZUS = netSalary * 0.9612
  const zusEmployer = podstawaZUS * 0.2048
  const prowizja = zusEmployer * 0.4890
  const employerSavingPerEmployee = zusEmployer - prowizja
  const totalCostPerEmployee = netSalary * 1.543076 + prowizja
  const companySavingPerMonth = employerSavingPerEmployee * employees
  const companySavingPerYear = companySavingPerMonth * 12

  return {
    employerSavingPerEmployee,
    totalCostPerEmployee,
    companySavingPerMonth,
    companySavingPerYear,
  }
}

const QUICK_COUNTS = [1, 10, 100, 200]

export function Calculator() {
  const [employees, setEmployees] = useState(100)
  const [netSalary, setNetSalary] = useState(5000)

  const results = calculate(employees, netSalary)

  const handleEmployees = useCallback((val: string) => {
    const n = parseInt(val.replace(/\D/g, ''), 10)
    if (!isNaN(n) && n >= 0) setEmployees(n)
  }, [])

  const handleSalary = useCallback((val: string) => {
    const n = parseInt(val.replace(/\D/g, ''), 10)
    if (!isNaN(n) && n >= 0) setNetSalary(n)
  }, [])

  const handleReset = () => {
    setEmployees(100)
    setNetSalary(5000)
  }

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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

            {/* Liczba pracowników */}
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

            {/* Wynagrodzenie netto */}
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

          {/* Results */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Oszczędność pracodawcy
              </p>
              <p className="text-2xl font-bold text-[#2f9e44]">
                {formatPLN(results.employerSavingPerEmployee)}
              </p>
              <p className="mt-1 text-xs text-gray-400">/ pracownik / mies.</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Całkowity koszt z prowizją
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatPLN(results.totalCostPerEmployee)}
              </p>
              <p className="mt-1 text-xs text-gray-400">/ pracownik / mies.</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#8fd299]/15 p-6 text-center">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#2f9e44]">
                Oszczędność firmy / miesiąc
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatPLN(results.companySavingPerMonth)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {employees} prac. × {formatPLN(results.employerSavingPerEmployee)}
              </p>
            </div>
            <div className="rounded-2xl bg-[#8fd299]/15 p-6 text-center">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#2f9e44]">
                Oszczędność firmy / rok
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {formatPLN(results.companySavingPerYear)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {employees} prac. × 12 mies.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-gray-400">
              * Kalkulacja poglądowa. Dokładną kwotę dla Twojej firmy wyliczymy na konsultacji.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-300"
              >
                ↺ Resetuj
              </button>
              <BookButton>Umów konsultację →</BookButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
