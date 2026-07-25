import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink transition-colors hover:text-accent md:text-2xl"
        >
          夏树
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted md:gap-8">
          <Link href="/#writings" className="transition-colors hover:text-ink">
            Writings
          </Link>
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
