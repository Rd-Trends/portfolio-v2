import Link from "next/link";
import type { CaseStudy } from "@/lib/content";

export default function CaseStudyList({ studies }: { studies: CaseStudy[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {studies.map((study) => (
        <li key={study.slug}>
          <Link href={`/work/${study.slug}`} className="group block py-6">
            <p className="font-mono text-xs text-muted">
              {study.company} &middot; {study.timeframe}
            </p>
            <h3 className="mt-2 text-lg font-medium tracking-tight">
              <span className="underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
                {study.title}
              </span>
            </h3>
            <p className="mt-2 text-muted">{study.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
