import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
export const metadata: Metadata = {
  title: "About",
};

const focus = ["Java / Spring", "AIGC 工程", "CI/CD", "Cursor 工作流", "全栈边角"];

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <main className="relative flex-1 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(90,150,110,0.18),transparent_45%),radial-gradient(ellipse_at_85%_10%,rgba(212,164,90,0.12),transparent_40%)]"
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">About</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
              夏树
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              在林缘写代码的人。把后端、AIGC 与个人建造当作长期练习。
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="mt-12 grid gap-4 border-y border-line py-8 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Role</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl">
                  Backend Eng
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Stack</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl">
                  Java · AI
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Mode</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl">
                  Build in public
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={160}>
            <div className="prose-blog mt-10 space-y-5">
              <p>
                日常以 Java
                为主，也会碰一点全栈。工作在 AIGC 相关业务里，对用 AI
                辅助建造产品与工作流很感兴趣。
              </p>
              <p>
                这个站是公开工作台：记录正在做的事、学到的取舍，以及如何用 Cursor、
                CI/CD 把想法更快落到线上。
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={220}>
            <p className="mt-12 text-xs uppercase tracking-[0.18em] text-muted">
              Currently into
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="border border-line px-3 py-1.5 text-sm text-ink/90 transition hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={280}>
            <div className="mt-14 flex flex-wrap gap-3">
              <Link
                href="/#writings"
                className="btn-primary inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-[#1a1408]"
              >
                阅读文章
              </Link>
              <Link
                href="/"
                className="inline-flex items-center border border-line px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                回到首页
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
