import SectionTitle from "@/components/section-title";
import AnimateOnScroll from "@/components/animate-on-scroll";

const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <SectionTitle text="About" emphasis="Who I Am" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <AnimateOnScroll className="lg:col-span-3" delay={100}>
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Frontend is where I thrive. I specialize in building fast,
                accessible, and visually refined web applications using React,
                Next.js, and TypeScript. Accessibility and user experience
                aren&apos;t afterthoughts for me — they&apos;re the starting
                point. I believe great interfaces should work for everyone, and
                I build with that principle at the core.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;ve also built and shipped fullstack applications —
                working with Node.js, PostgreSQL, and cloud infrastructure — so
                I understand the full picture. But my strongest impact is on the
                frontend: obsessing over component architecture, interaction
                quality, and the kind of thoughtful UX details that make a
                product feel right for every user.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-2" delay={200}>
            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-border bg-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Focus Areas
                </p>
                <ul className="space-y-2.5">
                  {[
                    "UI & Component Architecture",
                    "Design System Implementation",
                    "Performance Optimization",
                    "Responsive & Accessible Interfaces",
                    "Fullstack Application Development",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Education
                </p>
                <p className="text-sm text-muted-foreground">
                  Continuously learning through hands-on projects, open-source
                  contributions, and staying up-to-date with the latest in web
                  technologies.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
