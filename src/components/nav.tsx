"use client";

import { useTheme } from "@/app/provider";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiDark, CiLight, CiMonitor } from "react-icons/ci";

export function Navbar() {
  const { theme, switchTheme } = useTheme();
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className="flex items-center justify-end py-8 space-x-4 md:space-x-8">
      <nav>
        <ul className="flex items-center space-x-4 md:space-x-8 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-0 border border-primary/70 dark:border-primary/40 rounded-full p-1">
        <button
          aria-label="Switch to light theme"
          onClick={() => switchTheme("light")}
          className={`outline-none border-none ${
            !isSSR && theme === "light" ? "bg-primary/20" : "bg-transparent"
          } p-1 rounded-full cursor-pointer`}
        >
          <CiLight size={20} />
        </button>
        <button
          aria-label="Use system preferred theme"
          onClick={() => switchTheme("system")}
          className={`outline-none border-none ${
            !isSSR && theme === "system" ? "bg-primary/20" : "bg-transparent"
          } p-1 rounded-full cursor-pointer`}
        >
          <CiMonitor size={20} />
        </button>
        <button
          aria-label="Switch to dark theme"
          onClick={() => switchTheme("dark")}
          className={`outline-none border-none ${
            !isSSR && theme === "dark" ? "bg-primary/20" : "bg-transparent"
          } p-1 rounded-full cursor-pointer`}
        >
          <CiDark size={20} />
        </button>
      </div>
    </div>
  );
}
