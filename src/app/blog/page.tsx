import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import React from "react";

export default function Page() {
  const posts = getAllPosts().map((post) => ({
    ...post.metadata,
  }));

  return (
    <main className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 pb-8">
      {posts.map((post, index) => {
        return <BlogCard key={post.title} {...post} preloadImage={index < 3} />;
      })}
    </main>
  );
}
