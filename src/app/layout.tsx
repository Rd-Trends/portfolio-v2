import "./global.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ThemeProvider from "@/app/provider";
import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "@/app/sitemap";
import { minify } from "terser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Daniel Ikoyo",
    template: "%s | Daniel Ikoyo",
  },
  description:
    "Daniel Ikoyo is a Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    images: "/og",
    title: "Daniel Ikoyo - Full Stack Developer",
    description:
      "Daniel Ikoyo is a Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.",
    siteName: "Daniel Ikoyo",
  },
  twitter: {
    title: "Daniel Ikoyo",
    card: "summary_large_image",
    site: "@Rd_Trendz",
    creator: "@Rd_Trendz",
    images: "/og",
    description:
      "Daniel Ikoyo is a Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  const script = await minify(themeScript);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider code={script.code!}>
          <div className="flex min-h-screen flex-col justify-between py-4 px-4 md:px-12 lg:px-[8rem] max-w-7xl mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const themeScript = `!(function () {
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
})()`;
