import fs from "node:fs";
import path from "node:path";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

type Frontmatter = Record<string, string | string[]>;

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
  tags: string[];
  readingTime: string;
  content: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  company: string;
  role: string;
  timeframe: string;
  stack: string[];
  order: number;
  readingTime: string;
  content: string;
};

const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*/;

function parseFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = frontmatterRegex.exec(raw);
  if (!match) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  const data: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    data[key] = value.startsWith("[")
      ? (JSON.parse(value) as string[])
      : value.replace(/^(['"])(.*)\1$/, "$2");
  }

  const content = raw.slice(match[0].length).trim();
  return { data, content, readingTime: readingTime(content).text };
}

function readCollection(collection: string) {
  const dir = path.join(contentDirectory, collection);
  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => parseFile(path.join(dir, file)));
}

const text = (value: string | string[] | undefined) =>
  typeof value === "string" ? value : "";
const list = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value : [];

export function getAllPosts(): Post[] {
  return readCollection("blog")
    .map(({ data, content, readingTime }) => ({
      slug: text(data.slug),
      title: text(data.title),
      description: text(data.description),
      publishedAt: text(data.publishedAt),
      image: text(data.image) || undefined,
      tags: list(data.tags),
      readingTime,
      content,
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return readCollection("work")
    .map(({ data, content, readingTime }) => ({
      slug: text(data.slug),
      title: text(data.title),
      description: text(data.description),
      company: text(data.company),
      role: text(data.role),
      timeframe: text(data.timeframe),
      stack: list(data.stack),
      order: Number(text(data.order)) || 0,
      readingTime,
      content,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug: string) {
  return getAllCaseStudies().find((study) => study.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
