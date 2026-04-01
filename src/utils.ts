import fs from "fs";
import path from "path";
import readingTime from "reading-time";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  description?: string;
  image?: string;
  tags?: string[];
  readingTime?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let colonIndex = line.indexOf(": ");
    if (colonIndex === -1) return;
    let key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 2).trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove surrounding quotes

    if (key === "tags") {
      try {
        metadata.tags = JSON.parse(value);
      } catch {
        metadata.tags = [];
      }
    } else {
      metadata[key as keyof Metadata] = value as any;
    }
  });

  // Derive summary from description if not set (backward compat with old posts)
  if (!metadata.summary && metadata.description) {
    metadata.summary = metadata.description;
  }

  // Calculate reading time
  metadata.readingTime = readingTime(content).text;

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "src", "posts"));
}

export function formatDate(date: string, includeRelative = true) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let timeDifference = Math.abs(currentDate.getTime() - targetDate.getTime());
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = targetDate.toLocaleString("en-NG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
