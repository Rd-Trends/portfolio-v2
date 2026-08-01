import AnimateOnScroll from "@/components/animate-on-scroll";

const Contact = () => {
  return (
    <section className="py-16 md:py-24">
      <AnimateOnScroll>
        <div className="text-center space-y-6 py-12 md:py-16 px-6 rounded-2xl border border-border bg-card">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg">
            Looking for a frontend developer who can bring your designs to life
            — or build the whole thing? I&apos;m always open to new challenges
            and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="mailto:dannirolands@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-300 hover:shadow-lg"
            >
              Send a Message
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
              href="https://wa.me/2348161827754"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Contact;
