import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const prev = index >= 0 ? posts[index + 1] : undefined;
  const next = index > 0 ? posts[index - 1] : undefined;

  return (
    <>
      <ScrollProgress />
      <main className="relative mx-auto max-w-3xl flex-1 px-5 pb-24 pt-28 md:px-10 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(212,164,90,0.10),transparent_65%)]"
        />
        <Link
          href="/#writings"
          className="text-sm text-muted transition hover:text-accent"
        >
          ← Writings
        </Link>

        <header className="mt-10 border-b border-line pb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="font-[family-name:var(--font-display)] tabular-nums text-accent">
              {index >= 0 ? String(index + 1).padStart(2, "0") : "—"}
            </span>
            <span aria-hidden>·</span>
            <time className="tabular-nums">{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {post.summary}
          </p>
        </header>

        <article
          className="prose-blog prose-editorial mt-12"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <nav className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-2">
          {prev ? (
            <Link
              href={`/writings/${prev.slug}`}
              className="group block transition hover:text-accent"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-muted">
                Older
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-lg tracking-tight">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/writings/${next.slug}`}
              className="group block text-right transition hover:text-accent md:justify-self-end"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-muted">
                Newer
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-lg tracking-tight">
                {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      </main>
    </>
  );
}
