import Link from "next/link";
import { AmbientCursor } from "@/components/AmbientCursor";
import { ParallaxForest } from "@/components/ParallaxForest";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts[0];

  return (
    <div className="flex flex-1 flex-col">
      <ScrollProgress />
      <AmbientCursor />

      <section className="relative min-h-[100svh] overflow-hidden">
        <ParallaxForest />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 sm:px-6 sm:pb-20 md:px-10 md:pb-28 md:pt-28">
          <p className="animate-rise font-[family-name:var(--font-display)] text-[2.75rem] leading-none tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            夏树
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[1.35rem] leading-snug tracking-tight text-ink/95 sm:mt-5 sm:text-3xl md:text-4xl">
            在林缘写字，把工程与想法慢慢长出来。
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            这里是关于后端、AIGC 与个人站点建设的公开笔记。
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/#writings"
              className="btn-primary inline-flex min-h-11 items-center bg-accent px-5 py-3 text-sm font-medium text-[#1a1408]"
            >
              阅读文章
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-11 items-center border border-line px-5 py-3 text-sm text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              关于我
            </Link>
          </div>
          <p className="animate-rise-delay-2 mt-10 text-[10px] uppercase tracking-[0.22em] text-muted/70 sm:mt-14 sm:text-xs">
            scroll to explore
          </p>
        </div>
      </section>

      {featured ? (
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16">
            <Reveal>
              <Link
                href={`/writings/${featured.slug}`}
                className="featured-note group block border border-line px-5 py-6 transition md:px-8 md:py-8"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  Featured note
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight transition group-hover:text-accent md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {featured.summary}
                </p>
                <p className="mt-5 text-sm text-muted transition group-hover:text-accent">
                  继续阅读 →
                </p>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section id="writings" className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">Index</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
              Writings
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              按时间排列的短文。主题会在工程与创作之间来回切换。
            </p>
          </Reveal>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <Reveal delayMs={index * 80}>
                  <Link
                    href={`/writings/${post.slug}`}
                    className="post-row group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-7 transition-[padding] duration-300 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-x-8"
                  >
                    <span className="pt-1 font-[family-name:var(--font-display)] text-sm tabular-nums text-accent/80 md:pt-0 md:text-base">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight transition group-hover:text-accent md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                        {post.summary}
                      </p>
                    </div>
                    <time className="col-start-2 shrink-0 text-sm text-muted/80 tabular-nums transition group-hover:text-accent md:col-start-auto">
                      {post.date}
                    </time>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
