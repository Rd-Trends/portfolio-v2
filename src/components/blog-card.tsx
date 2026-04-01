import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  summary: string
  image?: string
  publishedAt: string
  slug: string
  tags?: string[]
  readingTime?: string
  preloadImage?: boolean
}

export default function BlogCard(props: Props) {
  return (
    <Link
      href={`/blog/${props.slug}`}
      className="group no-underline block max-w-sm"
    >
      <div
        className={
          'flex flex-col space-y-4 mb-4 p-4 rounded-xl w-full border border-slate-300 ' +
          'dark:border-slate-700 shadow-sm group-hover:border-slate-400 dark:group-hover:border-slate-500 ' +
          'hover:shadow-lg transition-shadow'
        }
      >
        <h3
          className={
            'text-neutral-900 dark:text-neutral-100 text-xl font-bold tracking-tight ' +
            'line-clamp-2'
          }
        >
          {props.title}
        </h3>

        {props?.tags && props.tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-1">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className={
                  'text-neutral-500 dark:text-neutral-300 py-1 px-2 text-sm rounded whitespace-nowrap ' +
                  'border border-neutral-400 dark:border-neutral-600'
                }
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-neutral-600 dark:text-neutral-200">
          {props.publishedAt}
          {props.readingTime ? ` • ${props.readingTime}` : ''}
        </p>

        {props.image && (
          <Image
            src={props.image}
            alt={props.title}
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="w-full h-auto rounded-xl object-cover object-center"
            priority={props.preloadImage}
          />
        )}
      </div>
    </Link>
  )
}
