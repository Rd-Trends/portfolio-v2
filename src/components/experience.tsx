import SectionTitle from "@/components/section-title";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { workExperience } from "@/constants/work-experience";
import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const WorkExperience = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <SectionTitle text="Career" emphasis="Experience" />
        <div>
          {workExperience.map((experience, index) => {
            const isLast = index === workExperience.length - 1;
            return (
              <AnimateOnScroll key={experience.title} delay={index * 120}>
                <div
                  className={`relative ${isLast ? "" : "pb-10 timeline-connector"}`}
                >
                  <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <FaBriefcase size={14} className="text-primary" />
                  </div>
                  <div className="pl-14 md:pl-16 space-y-3">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                      {experience.date}
                    </span>
                    <h3 className="font-display text-lg md:text-xl font-bold">
                      {experience.title}
                      <span className="text-muted-foreground font-normal">
                        {" "}
                        ·{" "}
                      </span>
                      <Link
                        className="text-primary hover:underline underline-offset-2 font-semibold"
                        href={experience?.Link || "#"}
                      >
                        {experience.company}
                      </Link>
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {experience.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
