import Link from "next/link";
import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/work", label: "Work" },
  ...(site.showWriting ? [{ href: "/blog", label: "Writing" }] : []),
];

export default function Nav() {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href="/" className="font-medium tracking-tight">
        Daniel Ikoyo
      </Link>
      <nav aria-label="Main" className="flex items-center gap-5 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted transition-colors hover:text-fg"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
