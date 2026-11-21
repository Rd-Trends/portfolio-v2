import Link from "next/link";
import { formatDate, type Post } from "@/lib/content";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block py-5">
            <p className="font-mono text-xs text-muted">
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>{" "}
              &middot; {post.readingTime}
            </p>
            <h3 className="mt-2 font-medium tracking-tight">
              <span className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
                {post.title}
              </span>
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
