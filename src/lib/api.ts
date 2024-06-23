import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import { formatDate } from "@/utils/formatDate";

const postsDirectory = path.join(process.cwd(), "blog-contents");

type Meta = {
  title: string;
  publishedAt: string;
  description: string;
  image: string;
  slug: string;
  readingTime: string;
  tags?: string[];
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return fileContents;
}

export const getBlogMetaAndMDXContent = (fileContent: string) => {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Meta> = {};
  metadata["readingTime"] = readingTime(fileContent).text;

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    //   @ts-ignore
    metadata[key.trim() as keyof Metadata] = value;
  });

  return {
    metadata: {
      ...metadata,
      publishedAt: formatDate(metadata.publishedAt as string),
      tags: JSON.parse((metadata?.tags || "[]") as unknown as string),
    } as Meta,
    content,
  };
};

export const getAllPosts = () => {
  const mdxFiles = getMDXFiles(postsDirectory);
  return mdxFiles.map((file) => {
    const fileContent = readMDXFile(path.join(postsDirectory, file));
    const postDetails = getBlogMetaAndMDXContent(fileContent);
    return postDetails;
  });
};

export const getPostBySlug = (slug: string) => {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.metadata.slug === slug);
};
