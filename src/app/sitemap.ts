import type { MetadataRoute } from "next";
import { getAllCaseStudies, getAllPosts } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/blog"].map((route) => ({
    url: `${site.url}${route}`,
  }));
  const studies = getAllCaseStudies().map((study) => ({
    url: `${site.url}/work/${study.slug}`,
  }));
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  return [...pages, ...studies, ...posts];
}
