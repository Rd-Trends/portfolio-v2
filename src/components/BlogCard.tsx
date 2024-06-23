import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  slug: string;
  tags?: string[];
  readingTime: string;
};

const BlogCard = (props: Props) => {
  return (
    <Link
      href={`/blog/${props.slug}`}
      className=" group no-underline block max-w-sm">
      <div
        className={
          "flex flex-col space-y-4 mb-4 p-4 rounded-xl w-full border border-slate-300 " +
          " dark:border-slate-700 shadow-sm group-hover:border-slate-400 dark:group-hover:border-slate-500 " +
          " hover:shadow-lg"
        }>
        <h3
          className={
            "text-neutral-900 dark:text-neutral-100 text-xl font-bold tracking-tight " +
            " line-clamp-2 "
          }>
          {props.title}
        </h3>

        {props?.tags?.length && (
          <div className=" flex items-center flex-wrap gap-1">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className={
                  "text-neutral-500 dark:text-neutral-300 py-1 px-2 text-sm rounded whitespace-nowrap " +
                  " border border-neutral-400 dark:border-neutral-600"
                }>
                #{tag}
              </span>
            ))}
          </div>
        )}

        <p className=" text-sm text-neutral-600 dark:text-neutral-200">
          {props.publishedAt} • {props.readingTime}
        </p>

        <Image
          src={props.image}
          alt={props.title}
          width={500}
          height={350}
          className="w-full h-auto rounded-xl object-cover object-center"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
