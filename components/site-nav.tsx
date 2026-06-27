import { BookButton } from '@/components/book-button'

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          SoCap Bonus
        </span>
        <BookButton size="sm">Umów konsultację</BookButton>
      </div>
    </header>
  )
}
