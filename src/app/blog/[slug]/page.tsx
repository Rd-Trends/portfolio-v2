import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import Mdx from "@/components/Mdx";
import PageHeader from "@/components/PageHeader";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/content";
import { baseOpenGraph, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { title, description, image, publishedAt } = post;
  const url = `/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph,
      type: "article",
      title,
      description,
      url,
      publishedTime: publishedAt,
      authors: [site.name],
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    url: `${site.url}/blog/${post.slug}`,
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="pt-2">
        <BackLink href="/blog">All writing</BackLink>
      </div>
      <PageHeader
        eyebrow={
          <>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>{" "}
            &middot; {post.readingTime}
          </>
        }
        title={post.title}
      />
      {post.image && (
        <Image
          src={post.image}
          alt=""
          width={1344}
          height={705}
          priority
          sizes="(min-width: 672px) 624px, 100vw"
          className="mt-10 aspect-video w-full rounded-lg border border-line object-cover"
        />
      )}
      <div className="mt-10">
        <Mdx source={post.content} />
      </div>
    </article>
  );
}
