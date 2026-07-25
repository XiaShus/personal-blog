import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main className="mx-auto max-w-3xl flex-1 px-6 pb-24 pt-32 md:px-10">
      <Link
        href="/#writings"
        className="text-sm text-muted transition hover:text-accent"
      >
        ← Writings
      </Link>
      <time className="mt-8 block text-sm text-muted tabular-nums">
        {post.date}
      </time>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 text-lg text-muted">{post.summary}</p>
      <article
        className="prose-blog mt-12"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
