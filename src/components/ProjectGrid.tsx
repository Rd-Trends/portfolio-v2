import Image from "next/image";
import Link from "next/link";
import { moreProjects, projects } from "@/data/projects";

const linkClass =
  "text-fg underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-accent";

export default function ProjectGrid() {
  return (
    <>
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className={project.featured ? "sm:col-span-2" : ""}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.title}`}
              className="block overflow-hidden rounded-lg border border-line transition-colors hover:border-muted"
            >
              <Image
                src={project.image}
                alt=""
                width={1920}
                height={1200}
                quality={90}
                sizes={
                  project.featured
                    ? "(min-width: 672px) 624px, 100vw"
                    : "(min-width: 640px) 300px, 100vw"
                }
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </a>
            <h3 className="mt-4 font-medium tracking-tight">{project.title}</h3>
            <p className="mt-1 text-muted text-pretty">{project.description}</p>
            {project.stack.length > 0 && (
              <p className="mt-2 font-mono text-xs text-muted">
                {project.stack.join(" · ")}
              </p>
            )}
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                Visit site
              </a>
              {project.caseStudy && (
                <Link href={`/work/${project.caseStudy}`} className={linkClass}>
                  Read case study
                </Link>
              )}
            </p>
          </li>
        ))}
      </ul>
      <ul className="mt-10 space-y-2 border-t border-line pt-6">
        {moreProjects.map((project) => (
          <li key={project.title}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`${linkClass} font-medium`}
            >
              {project.title}
            </a>
            <span className="text-muted"> — {project.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
