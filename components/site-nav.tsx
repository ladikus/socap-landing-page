import { BookButton } from '@/components/book-button'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <img
          src="https://socapbonus.com/wp-content/uploads/2023/07/socap-bonus-logo-czarne-768x227.png"
          alt="SoCap Bonus"
          height={36}
          width={122}
          className="h-9 w-auto object-contain"
        />
        <BookButton size="sm">Umów konsultację</BookButton>
      </div>
    </header>
  )
}
