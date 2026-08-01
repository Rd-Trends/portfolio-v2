"use client";

import { cn } from "@/lib/cn";
import { useTheme } from "next-themes";
import Link from "next/link";
import { CiDark, CiLight, CiMonitor } from "react-icons/ci";

const themeConfig = [
  {
    name: "light",
    icon: <CiLight />,
    label: "Switch to light mode",
  },
  {
    name: "system",
    icon: <CiMonitor />,
    label: "Switch to system mode",
  },
  {
    name: "dark",
    icon: <CiDark />,
    label: "Switch to dark mode",
  },

]

export function Navbar() {
  const { theme, setTheme } = useTheme();



  return (
    <header className="flex items-center justify-between py-6 md:py-8">
      <Link
        href="/"
        className="font-display text-lg font-bold tracking-tight hover:text-primary transition-colors duration-200"
      >
        daniel<span className="text-primary">.</span>
      </Link>

      <div className="flex items-center gap-6 md:gap-8">
        <nav>
          <ul className="flex items-center gap-5 md:gap-7 list-none text-sm font-medium">
            <li>
              <Link
                href="/"
                className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-0.5 border border-border rounded-full p-1">
          {themeConfig.map(config => {
            const isActive = theme === config.name;
            return (
              <button
                key={config.name}
                aria-label={config.label}
                onClick={() => setTheme(config.name)}
                // className={`outline-none border-none ${
                //   isActive
                //     ? "bg-primary-muted text-primary"
                //     : "bg-transparent text-muted-foreground"
                // } p-1.5 rounded-full cursor-pointer transition-all duration-200 hover:text-primary`}
                className={cn(
                  "outline-none border-none p-1.5 rounded-full cursor-pointer transition-all duration-200 hover:text-primary",
                  isActive ? "bg-primary-muted text-primary" : "bg-transparent text-muted-foreground"
                )}
              >
                {config.icon}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
