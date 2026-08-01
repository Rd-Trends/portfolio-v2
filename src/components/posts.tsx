import { getBlogPosts, formatDate } from "@/lib/utils";
import BlogCard from "@/components/blog-card";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 pb-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, index) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.metadata.title}
            summary={post.metadata.summary}
            image={post.metadata.image}
            publishedAt={formatDate(post.metadata.publishedAt)}
            tags={post.metadata.tags}
            readingTime={post.metadata.readingTime}
            preloadImage={index < 3}
          />
        ))}
    </div>
  );
}
