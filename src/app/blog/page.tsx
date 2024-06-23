import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import React from "react";

export default function Page() {
  const posts = getAllPosts().map((post) => ({
    ...post.metadata,
  }));

  return (
    <main>
      {posts.map((post) => {
        return <BlogCard key={post.title} {...post} />;
      })}
    </main>
  );
}
