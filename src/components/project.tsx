import SectionTitle from "@/components/section-title";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <SectionTitle text="Projects" emphasis="Other Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 100}>
              <div className="group relative flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl">
                {/* Image */}
                <Link
                  href={project.link}
                  aria-label={`Visit ${project.title}`}
                  className="block overflow-hidden"
                >
                  <Image
                    src={project.preview}
                    alt={project.title}
                    width={600}
                    height={340}
                    quality={90}
                    className="w-full aspect-video object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        href={project.link}
                        target="_blank"
                        aria-label="Visit the site"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={14} />
                      </Link>
                      <Link
                        href={project.linkToRepo}
                        target="_blank"
                        aria-label="View source code"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <FaGithub size={16} />
                      </Link>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {project.tools.map((tool, i) => (
                      <li
                        key={tool + i}
                        className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
