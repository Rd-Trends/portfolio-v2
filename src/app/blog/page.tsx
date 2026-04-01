import BlogCard from "@/components/blog-card";
import { getBlogPosts, formatDate } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of blog posts on web development.",
};

export default function Page() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 pb-8">
      {posts.map((post, index) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.metadata.title}
          summary={post.metadata.summary}
          image={post.metadata.image}
          publishedAt={formatDate(post.metadata.publishedAt, false)}
          tags={post.metadata.tags}
          readingTime={post.metadata.readingTime}
          preloadImage={index < 3}
        />
      ))}
    </main>
  );
}
