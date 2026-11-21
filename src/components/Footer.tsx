import { site } from "@/lib/site";

const links = [
  { href: `mailto:${site.email}`, label: "Email" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.upwork, label: "Upwork" },
  { href: site.links.twitter, label: "X" },
];

export default function Footer() {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 text-sm text-muted">
      <span>&copy; {new Date().getFullYear()} Daniel Ikoyo</span>
      <ul className="flex items-center gap-5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition-colors hover:text-fg"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
