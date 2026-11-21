import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That page doesn&apos;t exist or has moved.{" "}
        <Link
          href="/"
          className="text-fg underline decoration-accent underline-offset-4"
        >
          Go back home
        </Link>
        .
      </p>
    </div>
  );
}
