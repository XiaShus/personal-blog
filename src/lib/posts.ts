import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function getPostFiles() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));
}

export function getAllPosts(): PostMeta[] {
  return getPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const contentHtml = await marked.parse(content);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    contentHtml,
  };
}
