"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import SectionTitle from "@/components/section-title";
import AnimateOnScroll from "@/components/animate-on-scroll";
import {
  featuredProjects,
  type FeaturedProject,
} from "@/constants/featured-projects";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProject | null>(null);

  return (
    <Sheet
      open={selectedProject !== null}
      onOpenChange={(open) => {
        if (!open) {
          setSelectedProject(null);
        }
      }}>
      <section id="projects" className="py-16 md:py-24">
        <div className="space-y-8 md:space-y-12">
          <SectionTitle text="Portfolio" emphasis="Featured Work" />
          <div className="space-y-20 md:space-y-28">
            {featuredProjects.map((project, index) => (
              <AnimateOnScroll key={project.title} delay={index * 100}>
                <ProjectRow
                  project={project}
                  index={index}
                  onOpen={() => setSelectedProject(project)}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {selectedProject ? (
        <SheetContent
          side="right"
          className="flex flex-col w-full sm:max-w-full">
          <SheetHeader>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {selectedProject.subtitle}
            </p>
            <SheetTitle>{selectedProject.title}</SheetTitle>
            <SheetDescription>
              {selectedProject.role} · {selectedProject.duration}
            </SheetDescription>
          </SheetHeader>

          <div className="px-6 pb-6 space-y-6">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                Overview
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                Tech Stack
              </h4>
              <ul className="flex flex-wrap gap-1.5">
                {selectedProject.tools.map((tool) => (
                  <li
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {(selectedProject.liveUrl || selectedProject.repoUrl) && (
              <div className="flex items-center gap-3 pt-2">
                {selectedProject.liveUrl && (
                  <Link
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                    <FaExternalLinkAlt size={12} />
                    Live Site
                  </Link>
                )}
                {selectedProject.repoUrl && (
                  <Link
                    href={selectedProject.repoUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-semibold rounded-lg hover:border-primary hover:text-primary transition-all">
                    <FaGithub size={14} />
                    Source Code
                  </Link>
                )}
              </div>
            )}
          </div>
        </SheetContent>
      ) : null}
    </Sheet>
  );
};

const ProjectRow = ({
  project,
  index,
  onOpen,
}: {
  project: FeaturedProject;
  index: number;
  onOpen: () => void;
}) => {
  const number = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;

  return (
    <article
      className={cn(
        "group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-start md:items-center",
        !isEven && "md:[direction:rtl]",
      )}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-border aspect-4/3 bg-card",
          !isEven && "md:[direction:ltr]",
        )}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-primary/10 to-transparent" />
        )}

        <span className="absolute top-4 left-4 md:top-5 md:left-5 font-display text-xs font-bold tracking-wider text-primary/60 bg-background/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
          {number}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col justify-center space-y-4 md:space-y-5 md:py-2",
          !isEven && "md:[direction:ltr]",
        )}>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {project.subtitle}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {project.role}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {project.duration}
          </span>
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5 pt-1">
          {project.tools.slice(0, 5).map((tool) => (
            <li
              key={tool}
              className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground">
              {tool}
            </li>
          ))}
          {project.tools.length > 5 && (
            <li className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground">
              +{project.tools.length - 5}
            </li>
          )}
        </ul>

        <div className="pt-2">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-all cursor-pointer">
            Read more
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedWork;
