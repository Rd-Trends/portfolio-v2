import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/MdxComponents";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  // fetch data
  const post = getPostBySlug(params.slug);

  if (!post) {
    return;
  }
  const meta = post.metadata;

  const { title, description, image, publishedAt: publishedTime } = meta;

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

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className=" h-full w-full min-h-screen min-w-full py-4">
      <article className=" prose dark:prose-invert lg:prose-lg mx-auto max-w-full">
        <h1 className=" text-center">{post.metadata.title!}</h1>
        {!!post.metadata.image && (
          <Image
            src={post.metadata.image}
            alt={`${post.metadata.title} cover photo`}
            width={500}
            height={200}
            priority
            quality={100}
            className=" object-cover object-center w-full aspect-video"
          />
        )}
        <div className=" max-w-3xl mx-auto md:px-4 flex items-start space-x-8 justify-between not-prose">
          <p className=" text-lg md:text-sm">
            <time dateTime={post.metadata.publishedAt}>
              {post.metadata.publishedAt}
            </time>
          </p>

          <p className=" text-lg md:text-sm">{post.metadata.readingTime}</p>
        </div>
        <div className=" max-w-3xl mx-auto md:px-4 -mt-6">
          <CustomMDX source={post.content} />
        </div>
      </article>
    </div>
  );
}
