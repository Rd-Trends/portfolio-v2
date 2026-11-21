import Link from "next/link";

type Props = {
  title: string;
  href?: string;
  linkLabel?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  href,
  linkLabel,
  className = "",
  children,
}: Props) {
  return (
    <section className={`mt-20 ${className}`}>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          {title}
        </h2>
        {href && (
          <Link
            href={href}
            className="text-sm text-muted transition-colors hover:text-fg print:hidden"
          >
            {linkLabel ?? "View all"} <span aria-hidden>&rarr;</span>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
