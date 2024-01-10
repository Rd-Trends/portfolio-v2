import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ThemeProvider from "./provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { minify } from "terser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-rd.vercel.app"),
  title: "Daniel Ikoyo",
  description:
    "Daniel Ikoyo is Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    images: "/og",
    title: "Daniel Ikoyo - Full Stack Developer",
    description: `Daniel Ikoyo is Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.`,
  },
  twitter: {
    title: "Daniel Ikoyo",
    card: "summary_large_image",
    site: "@Rd_Trendz",
    creator: "@Rd_Trendz",
    images: "/og",
    description: `Daniel Ikoyo is Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.`,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const script = await minify(code);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider code={script.code!}>
          <div className="flex min-h-screen flex-col justify-between py-4 px-4 md:px-12 lg:px-[8rem] max-w-7xl mx-auto">
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

const code = `!(function () {
  var currentTheme = "system";
  var userSystemPrefersDarkMode = false;
  if (localStorage.getItem("theme")) {
    currentTheme = localStorage.getItem("theme");
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    userSystemPrefersDarkMode = true;
  }
  if (
    currentTheme === "dark" ||
    (currentTheme === "system" && userSystemPrefersDarkMode)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", currentTheme);
})()
`;
