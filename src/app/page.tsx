import Link from "next/link";
import { AmbientCursor } from "@/components/AmbientCursor";
import { HeroField } from "@/components/HeroField";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-1 flex-col">
      <ScrollProgress />
      <AmbientCursor />

      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroField />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-28 md:px-10 md:pb-28">
          <p className="animate-rise font-[family-name:var(--font-display)] text-5xl tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            夏树
          </p>
          <h1 className="animate-rise-delay mt-5 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug tracking-tight text-ink/95 sm:text-3xl md:text-4xl">
            在林缘写字，把工程与想法慢慢长出来。
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            这里是关于后端、AIGC 与个人站点建设的公开笔记。
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#writings"
              className="btn-primary inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-[#1a1408]"
            >
              阅读文章
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center border border-line px-5 py-3 text-sm text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              关于我
            </Link>
          </div>
          <p className="animate-rise-delay-2 mt-14 text-xs uppercase tracking-[0.22em] text-muted/70">
            scroll to explore
          </p>
        </div>
      </section>

      <section id="writings" className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
              Writings
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              按时间排列的短文。主题会在工程与创作之间来回切换。
            </p>
          </Reveal>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <Reveal delayMs={index * 80}>
                  <Link
                    href={`/writings/${post.slug}`}
                    className="post-row group flex flex-col gap-2 py-7 transition-[padding] duration-300 md:flex-row md:items-baseline md:justify-between md:gap-10"
                  >
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight transition group-hover:text-accent md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                        {post.summary}
                      </p>
                    </div>
                    <time className="shrink-0 text-sm text-muted/80 tabular-nums transition group-hover:text-accent">
                      {post.date}
                    </time>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted md:px-10">
          <span>© {new Date().getFullYear()} 夏树</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
