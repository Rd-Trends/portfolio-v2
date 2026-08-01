import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <p className="text-primary font-display text-lg font-semibold tracking-wider uppercase">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
        Page Not Found
      </h1>
      <p className="text-muted-foreground text-lg max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}
