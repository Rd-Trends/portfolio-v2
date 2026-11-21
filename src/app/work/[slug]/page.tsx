import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import Mdx from "@/components/Mdx";
import PageHeader from "@/components/PageHeader";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { baseOpenGraph } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  const { title, description } = study;
  const url = `/work/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...baseOpenGraph, type: "article", title, description, url },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const studies = getAllCaseStudies();
  const index = studies.findIndex((study) => study.slug === slug);
  if (index === -1) notFound();

  const study = studies[index];
  const next = studies[(index + 1) % studies.length];
  const facts = [
    { label: "Company", value: study.company },
    { label: "Role", value: study.role },
    { label: "Timeline", value: study.timeframe },
    { label: "Stack", value: study.stack.join(", ") },
  ];

  return (
    <article>
      <div className="pt-2">
        <BackLink href="/work">All work</BackLink>
      </div>
      <PageHeader
        eyebrow={`Case study · ${study.readingTime}`}
        title={study.title}
        description={study.description}
      />
      <dl className="mt-10 grid gap-x-6 gap-y-4 border-y border-line py-6 text-sm sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {fact.label}
            </dt>
            <dd className="mt-1">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-10">
        <Mdx source={study.content} />
      </div>
      {next.slug !== study.slug && (
        <Link
          href={`/work/${next.slug}`}
          className="group mt-16 block border-t border-line pt-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Next case study
          </p>
          <p className="mt-2 text-lg font-medium tracking-tight">
            <span className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
              {next.title}
            </span>{" "}
            <span aria-hidden>&rarr;</span>
          </p>
        </Link>
      )}
    </article>
  );
}
