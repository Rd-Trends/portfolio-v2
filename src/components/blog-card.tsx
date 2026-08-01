import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  summary: string;
  image?: string;
  publishedAt: string;
  slug: string;
  tags?: string[];
  readingTime?: string;
  preloadImage?: boolean;
};

export default function BlogCard(props: Props) {
  return (
    <Link href={`/blog/${props.slug}`} className="group no-underline block">
      <article className="flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg">
        {props.image && (
          <div className="overflow-hidden">
            <Image
              src={props.image}
              alt={props.title}
              width={640}
              height={360}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="w-full h-auto object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              priority={props.preloadImage}
            />
          </div>
        )}

        <div className="flex flex-col flex-1 p-5 space-y-3">
          <h3 className="font-display text-lg font-bold tracking-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {props.title}
          </h3>

          {props?.tags && props.tags.length > 0 && (
            <div className="flex items-center flex-wrap gap-1.5">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            {props.publishedAt}
            {props.readingTime ? ` · ${props.readingTime}` : ""}
          </p>
        </div>
      </article>
    </Link>
  );
}
