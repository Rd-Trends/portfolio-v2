import AnimateOnScroll from "@/components/animate-on-scroll";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-[88vh] py-16 md:py-24">
      <div className="space-y-5 md:space-y-7 max-w-3xl">
        {/* Status badge */}
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Available for work
            </span>
          </div>
        </AnimateOnScroll>

        {/* Name */}
        <AnimateOnScroll delay={100}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-extrabold tracking-tight leading-[0.95]">
            Daniel <span className="text-primary">Ikoyo</span>
          </h1>
        </AnimateOnScroll>

        {/* Role */}
        <AnimateOnScroll delay={200}>
          <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
            Frontend Developer
          </p>
        </AnimateOnScroll>

        {/* Description */}
        <AnimateOnScroll delay={300}>
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            I build polished, performant user interfaces and web experiences
            with React and Next.js. I care deeply about accessibility, user
            experience, and writing frontend code that scales — and I'm equally
            comfortable working across the full stack when the project calls for
            it.
          </p>
        </AnimateOnScroll>

        {/* CTAs */}
        <AnimateOnScroll delay={400}>
          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="mailto:dannirolands@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-primary text-primary-foreground text-sm md:text-base font-semibold rounded-lg hover:brightness-110 transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 border border-border rounded-lg text-sm md:text-base font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Work
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m5 12 7 7 7-7" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
