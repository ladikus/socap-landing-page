export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-foreground"
        >
          SoCap
        </a>
        <a
          href="#rezerwacja"
          className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Zarezerwuj call — 1 zł
        </a>
      </nav>
    </header>
  )
}
