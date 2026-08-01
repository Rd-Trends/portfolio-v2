import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import {
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const socials = [
  {
    href: "https://github.com/Rd-Trends",
    label: "GitHub",
    icon: RiGithubFill,
  },
  {
    href: "https://www.linkedin.com/in/ikoyo-daniel-0334981a6",
    label: "LinkedIn",
    icon: AiOutlineLinkedin,
  },
  {
    href: "https://twitter.com/Rd_Trendz",
    label: "Twitter",
    icon: AiOutlineTwitter,
  },
  {
    href: "https://instagram.com/ikoyo_daniel_omovigho",
    label: "Instagram",
    icon: AiOutlineInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Daniel Ikoyo
        </p>

        <ul className="flex items-center gap-4 list-none">
          {socials.map((social) => (
            <li key={social.label}>
              <Link
                target="_blank"
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <social.icon size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
