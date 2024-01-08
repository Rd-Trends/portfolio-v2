import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const postsDirectory = path.join(process.cwd(), "blog-contents");

type Meta = {
  title: string;
  date: string;
  description: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return fileContents;
}

export const getBlogMetaAndMDXContent = async (fileContents: string) => {
  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        // @ts-expect-error
        rehypePlugins: [[rehypePrettyCode, { keepBackground: false }]],
      },
    },
  });
  return {
    content,
    meta: frontmatter as Meta,
    source: fileContents,
  };
};

export const getAllPosts = async () => {
  const mdxFiles = getMDXFiles(postsDirectory);
  return await Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      const fileContent = readMDXFile(path.join(postsDirectory, file));
      const postDetails = await getBlogMetaAndMDXContent(fileContent);
      return { slug, ...postDetails };
    })
  );
};

export const getPostBySlug = async (slug: string) => {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.slug === slug);
};
