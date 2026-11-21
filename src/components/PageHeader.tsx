type Props = {
  eyebrow?: React.ReactNode;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="pt-10 sm:pt-16">
      {eyebrow && <p className="font-mono text-xs text-muted">{eyebrow}</p>}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted text-pretty">{description}</p>
      )}
    </div>
  );
}
