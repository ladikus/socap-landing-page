'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function BookButton({
  children,
  className,
  size = 'md',
}: {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base sm:text-lg',
  }

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-booking'))}
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-brand font-semibold text-brand-foreground transition-opacity hover:opacity-90',
        sizes[size],
        className,
      )}
    >
      {children}
    </button>
  )
}
