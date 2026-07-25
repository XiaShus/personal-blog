# 夏树 · personal-blog

个人博客站点：Next.js App Router + Markdown 文章，部署在 Vercel。

## 本地开发

```bash
npm install
npm run dev
```

## 写文章

在 `content/posts/` 新增 `.md` 文件，frontmatter 示例：

```md
---
title: 标题
date: 2026-07-25
summary: 一句话摘要
---
```

## 部署

推送到 `main` 后由 Vercel 自动部署；GitHub Actions 负责 lint + build 检查。
