import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getPlaiceholder } from "plaiceholder";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts, formatDate } from "@/lib/utils";
import { baseUrl } from "@/app/sitemap";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);

  if (!post) return undefined;

  const {
    title,
    summary: description,
    image,
    publishedAt: publishedTime,
  } = post.metadata;
  const ogImage = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPosts().find((p) => p.slug === slug);

  if (!post) notFound();

  let blurDataURL: string | undefined;
  if (post.metadata.image) {
    try {
      const imagePath = path.join(process.cwd(), "public", post.metadata.image);
      const buffer = await fs.readFile(imagePath);
      const { base64 } = await getPlaiceholder(buffer);
      blurDataURL = base64;
    } catch {
      // image may not exist locally; skip blur placeholder
    }
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: "Daniel Ikoyo",
            },
          }),
        }}
      />

      <div className="h-full w-full min-h-screen py-4">
        <article className="prose mx-auto max-w-full">
          <h1 className="text-center">{post.metadata.title}</h1>

          {post.metadata.image && (
            <Image
              src={post.metadata.image}
              alt={`${post.metadata.title} cover photo`}
              width={500}
              height={200}
              priority
              quality={100}
              className="object-cover object-center w-full aspect-video rounded-lg"
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
            />
          )}

          <div className="max-w-3xl mx-auto md:px-4 flex items-start space-x-8 justify-between not-prose mt-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <time dateTime={post.metadata.publishedAt}>
                {formatDate(post.metadata.publishedAt)}
              </time>
            </p>
            {post.metadata.readingTime && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {post.metadata.readingTime}
              </p>
            )}
          </div>

          {post.metadata.tags && post.metadata.tags.length > 0 && (
            <div className="max-w-3xl mx-auto md:px-4 flex flex-wrap gap-2 not-prose mt-3">
              {post.metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs py-1 px-3 rounded-full border border-neutral-400 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="max-w-3xl mx-auto md:px-4 mt-6">
            <CustomMDX source={post.content} />
          </div>
        </article>
      </div>
    </section>
  );
}
