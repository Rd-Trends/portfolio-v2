"use client";

import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light" | "system";

const ThemeContext = createContext({
  theme: "system" as Theme,
  switchTheme: (theme: Theme) => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const lsThemeKey = "theme";

const initialThemeState = () => {
  let theme;
  if (typeof window !== "undefined" && window.localStorage) {
    theme = localStorage.getItem(lsThemeKey) ?? "system";
  }
  return theme as Theme;
};

const ThemeProvider = ({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) => {
  const [theme, setTheme] = useState<Theme>(initialThemeState);

  const checkIfUserSystemPrefersDarkTheme = useCallback(() => {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  const switchTheme = useCallback((theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(lsThemeKey, theme);
  }, []);

  useEffect(() => {
    const isDark = checkIfUserSystemPrefersDarkTheme();
    if (theme === "dark" || (theme === "system" && isDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, checkIfUserSystemPrefersDarkTheme]);
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <ThemeInitializationScript code={code} />
      <div className=" bg-main-bg dark:bg-main-bg-dark text-font-color dark:text-font-color-dark transition-colors duration-150">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

const ThemeInitializationScript = memo(
  ({ code }: { code: string }) => {
    return <script dangerouslySetInnerHTML={{ __html: code }} />;
  },
  // ensure it only runs once
  () => true
);

ThemeInitializationScript.displayName = "ThemeInitializationScript";
