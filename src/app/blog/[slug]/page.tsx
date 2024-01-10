import Footer from "@/components/Footer";
import Image from "next/image";
import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  // fetch data
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return;
  }
  const meta = post.meta;

  const { title, description, image, date: publishedTime } = meta;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://dev-rd.vercel.app/blog/${title}`,
      images: [
        {
          url: `https://dev-rd.vercel.app${image}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://dev-rd.vercel.app${image}`],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback="loading">
      <div className=" h-full w-full min-h-screen min-w-full py-4">
        <article className=" prose dark:prose-invert lg:prose-lg mx-auto max-w-full">
          <h1 className=" text-center">{post.meta.title!}</h1>
          {!!post.meta.image && (
            <Image
              src={post.meta.image}
              alt={`${post.meta.title} cover photo`}
              width={500}
              height={200}
              priority
              quality={100}
              className=" object-cover object-center w-full aspect-video"
            />
          )}
          <div className=" max-w-3xl mx-auto md:px-4">{post.content}</div>
        </article>
      </div>
    </Suspense>
  );
}
