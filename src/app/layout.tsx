import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import { baseUrl } from "@/app/sitemap";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Daniel Ikoyo",
    template: "%s | Daniel Ikoyo",
  },
  description:
    "Daniel Ikoyo is a Full Stack Developer who builds high-quality, scalable web applications with modern technologies.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    images: "/og",
    title: "Daniel Ikoyo — Full Stack Developer",
    description:
      "Daniel Ikoyo is a Full Stack Developer who builds high-quality, scalable web applications with modern technologies.",
    siteName: "Daniel Ikoyo",
  },
  twitter: {
    title: "Daniel Ikoyo",
    card: "summary_large_image",
    site: "@Rd_Trendz",
    creator: "@Rd_Trendz",
    images: "/og",
    description:
      "Daniel Ikoyo is a Full Stack Developer who builds high-quality, scalable web applications with modern technologies.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise" aria-hidden="true" />
          <div className="relative flex min-h-screen flex-col justify-between max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
