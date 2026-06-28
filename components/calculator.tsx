'use client'
import { useState, useCallback } from 'react'
import { BookButton } from '@/components/book-button'

function formatPLN(value: number): string {
  return value.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + ' zł'
}

function calculate(employees: number, netSalary: number, raisePercent: number) {
  // Gross salary from net (UoP, approx)
  const grossSalary = netSalary / 0.7048
  // ZUS employer cost (~20.48%)
  const zusEmployer = grossSalary * 0.2048
  // SoCap benefit amount (based on ZUS savings)
  const socapBenefit = zusEmployer * 0.9
  // Employer savings per employee
  const employerSavingPerEmployee = socapBenefit * (1 - raisePercent / 100)
  // Employee raise (part of savings passed to employee)
  const employeeRaise = socapBenefit * (raisePercent / 100)
  // Total cost per employee after SoCap
  const totalCostPerEmployee = grossSalary + zusEmployer - employerSavingPerEmployee + 50 // 50 zł prowizja
  // Company savings
  const companySavingPerMonth = employerSavingPerEmployee * employees
  const companySavingPerYear = companySavingPerMonth * 12

  return {
    employerSavingPerEmployee,
    employeeRaise,
    totalCostPerEmployee,
    companySavingPerMonth,
    companySavingPerYear,
  }
}

const QUICK_COUNTS = [1, 5, 10, 50, 200]

export function Calculator() {
  const [employees, setEmployees] = useState(100)
  const [netSalary, setNetSalary] = useState(5000)
  const [raisePercent, setRaisePercent] = useState(0)

  const results = calculate(employees, netSalary, raisePercent)

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
    setRaisePercent(0)
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#2f9e44]">
            Kalkulator oszczędności
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sprawdź rzeczywisty zysk z SoCap
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Wpisz dane swojej firmy i zobacz <strong className="text-gray-700">realną różnicę</strong> w zaledwie kilka sekund.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
          {/* Inputs grid */}
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
                      'rounded-lg border px-3 py-1.5 text-sm font-medium transition',
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

            {/* Slider */}
            <div className="sm:col-span-2">
              <label className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-700">
                <span>Procent benefitu przeznaczony na podwyżkę pracownika</span>
                <span className="text-[#2f9e44]">{raisePercent}%</span>
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={raisePercent}
                onChange={(e) => setRaisePercent(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#2f9e44]"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>0% — max oszczędności firmy</span>
                <span>100% — max podwyżka pracownika</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                Podwyżka pracownika
              </p>
              <p className="text-2xl font-bold text-blue-600">
                +{formatPLN(results.employeeRaise)}
              </p>
              <p className="mt-1 text-xs text-gray-400">netto / mies.</p>
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

          {/* Big savings */}
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

          {/* Footer */}
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-gray-400">
              * Kalkulacja poglądowa na podstawie UoP. Dokładną kwotę wyliczymy na konsultacji.
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
