# Daniel Ikoyo — portfolio

Personal site built with Next.js (App Router), React, Tailwind CSS and MDX.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
npm run cv      # regenerate public/daniel-ikoyo-cv.pdf (run after build)
```

## Editing content

- **Case studies:** `content/work/*.mdx`. Frontmatter: `title`, `description`, `slug`, `company`, `role`, `timeframe`, `stack` (JSON array), `order`.
- **Blog posts:** `content/blog/*.mdx`. Frontmatter: `title`, `description`, `slug`, `publishedAt` (`YYYY-MM-DD`), `image`, `tags` (JSON array).
- **Experience and side projects:** `src/data/`.
- **Name, links, site URL:** `src/lib/site.ts`.
- **Skills:** `src/data/skills.ts`.
- **CV:** the PDF is the home page printed with the print styles in `globals.css`. Re-run `npm run cv` after changing home page content.
