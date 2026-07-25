import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-6 pb-24 pt-32 md:px-10">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">About</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        夏树
      </h1>
      <div className="prose-blog mt-10">
        <p>
          后端工程师，日常以 Java 为主，也会碰一点全栈。工作在 AIGC
          相关业务里，对用 AI 辅助建造产品与工作流很感兴趣。
        </p>
        <p>
          这个站是我的公开工作台：记录正在做的事、学到的取舍，以及如何用 Cursor、
          CI/CD 把想法更快落到线上。
        </p>
      </div>
      <Link
        href="/#writings"
        className="mt-12 inline-flex border border-line px-5 py-3 text-sm transition hover:border-accent hover:text-accent"
      >
        回到文章
      </Link>
    </main>
  );
}
