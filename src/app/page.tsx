import CaseStudyList from "@/components/CaseStudyList";
import PostList from "@/components/PostList";
import ProjectGrid from "@/components/ProjectGrid";
import Section from "@/components/Section";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { getAllCaseStudies, getAllPosts } from "@/lib/content";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  worksFor: {
    "@type": "Organization",
    name: "Giddaa",
    url: "https://giddaa.com",
  },
  sameAs: Object.values(site.links),
};

const linkClass =
  "text-fg underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-accent";

export default function Home() {
  const studies = getAllCaseStudies();
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="pt-10 sm:pt-16 print:pt-0">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Daniel Ikoyo
        </h1>
        <p className="mt-2 text-lg text-muted">
          Lead Frontend Developer at{" "}
          <a
            href="https://giddaa.com"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Giddaa
          </a>
        </p>
        <div className="mt-6 space-y-4 text-pretty leading-relaxed">
          <p>
            I build web interfaces with React, Next.js and TypeScript. I also
            build shared component libraries and AI tools that automate manual
            tasks.
          </p>
          <p>
            At Giddaa, I built the component library used by the buyer site and
            admin app. I also led technical SEO as part of the team’s work that
            helped Giddaa reach the first page of Google for property-for-sale
            searches in Nigeria.
          </p>
          <p>
            I also build{" "}
            <a
              href="https://drip.ng"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              drip.ng
            </a>
            , a streetwear store for a client. Its AI agent turns forwarded
            WhatsApp messages into product listings.
          </p>
          <p className="print:hidden">
            I take on freelance projects too. You can{" "}
            <a
              href={site.links.upwork}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              hire me on Upwork
            </a>{" "}
            or email me directly.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
          </li>
          <li className="print:hidden">
            <a href="/daniel-ikoyo-cv.pdf" className={linkClass}>
              Download CV
            </a>
          </li>
        </ul>
      </div>

      <Section title="Case studies" href="/work" className="print:hidden">
        <CaseStudyList studies={studies} />
      </Section>

      <Section title="Projects" className="print:hidden">
        <ProjectGrid />
      </Section>

      <Section title="Experience">
        <ol className="space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.title}`}
              className="grid gap-x-6 gap-y-1 sm:grid-cols-[9rem_1fr] print:break-inside-avoid"
            >
              <p className="pt-0.5 font-mono text-xs text-muted">
                {job.period}
              </p>
              <div>
                <h3 className="font-medium tracking-tight">
                  {job.title} &middot;{" "}
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className={linkClass}
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <ul className="mt-3 space-y-2 text-muted">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="text-pretty">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-xs text-muted">
                  {job.stack.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Skills" className="print:break-inside-avoid">
        <dl className="space-y-3">
          {skills.map((group) => (
            <div
              key={group.area}
              className="grid gap-x-6 gap-y-1 sm:grid-cols-[9rem_1fr] print:break-inside-avoid"
            >
              <dt className="pt-0.5 font-mono text-xs text-muted">
                {group.area}
              </dt>
              <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {site.showWriting && posts.length > 0 && (
        <Section title="Writing" href="/blog">
          <PostList posts={posts.slice(0, 3)} />
        </Section>
      )}

      <Section title="Selected work" className="hidden print:block">
        <ul className="space-y-3">
          {studies.map((study) => (
            <li key={study.slug} className="break-inside-avoid">
              <h3 className="font-medium">
                <a href={`${site.url}/work/${study.slug}`}>{study.title}</a>
              </h3>
              <p className="text-muted">{study.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
