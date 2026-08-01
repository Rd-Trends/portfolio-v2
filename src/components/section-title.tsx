import AnimateOnScroll from "@/components/animate-on-scroll";

const SectionTitle = ({
  text,
  emphasis,
}: {
  text: string;
  emphasis: string;
}) => {
  return (
    <AnimateOnScroll>
      <div className="flex items-center gap-4 mb-2">
        <div className="h-px flex-1 max-w-[60px] bg-primary" />
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
          {text}
        </p>
      </div>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {emphasis}
      </h2>
    </AnimateOnScroll>
  );
};

export default SectionTitle;
