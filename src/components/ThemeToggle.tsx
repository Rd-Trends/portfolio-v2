"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="-mr-2 inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
    >
      <FiSun className="hidden size-4 dark:block" aria-hidden />
      <FiMoon className="size-4 dark:hidden" aria-hidden />
    </button>
  );
}
