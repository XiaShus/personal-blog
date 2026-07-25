import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[#0a100d]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-16">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink">
            夏树
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            在林缘写字。公开笔记，关于后端、AIGC 与慢慢建造。
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/#writings" className="footer-link">
                Writings
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/XiaShus/personal-blog"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Source
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Now</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Building in public · Cursor + CI/CD · Notes from the woods
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted/80 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>© {new Date().getFullYear()} 夏树</span>
          <span>Next.js · Vercel · Written slowly</span>
        </div>
      </div>
    </footer>
  );
}
