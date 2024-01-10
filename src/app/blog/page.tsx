import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const posts = (await getAllPosts()).map((post) => ({
    slug: post.slug,
    ...post.meta,
  }));

  return (
    <main>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        );
      })}
    </main>
  );
}
