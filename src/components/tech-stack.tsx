import SectionTitle from "@/components/section-title";
import AnimateOnScroll from "@/components/animate-on-scroll";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiStorybook,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const technologies = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "AWS", icon: FaAws },
  { name: "Storybook", icon: SiStorybook },
  { name: "Git", icon: SiGit },
];

const TechStack = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <SectionTitle text="Skills" emphasis="Tech Stack" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <AnimateOnScroll key={tech.name} delay={index * 60}>
              <div className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-divider dark:border-divider-dark bg-card/40 dark:bg-card-dark/40 hover:border-accent/40 hover:bg-accent-dim transition-all duration-300 cursor-default">
                <tech.icon
                  size={28}
                  className="text-muted dark:text-muted-dark group-hover:text-accent transition-colors duration-300"
                />
                <span className="text-xs font-medium text-muted dark:text-muted-dark group-hover:text-ink dark:group-hover:text-ink-dark transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
