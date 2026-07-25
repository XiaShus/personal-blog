"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#writings", label: "Writings", match: "writings" },
  { href: "/about", label: "About", match: "about" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-[#0c1411]/72 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink transition-colors hover:text-accent md:text-2xl"
        >
          夏树
        </Link>
        <nav className="flex items-center gap-1 text-sm text-muted md:gap-2">
          {links.map((link) => {
            const active =
              link.match === "about"
                ? pathname.startsWith("/about")
                : pathname.startsWith("/writings");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative px-3 py-2 transition-colors ${
                  active ? "text-ink" : "hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`nav-underline absolute bottom-1 left-3 right-3 h-px origin-left bg-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
