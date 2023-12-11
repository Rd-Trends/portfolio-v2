import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Ikoyo",
  description:
    "Daniel Ikoyo is Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dev-rd.vercel.app/",
    images: "https://dev-rd.vercel.app/og",
    title: "Daniel Ikoyo - Full Stack Developer",
    description: `Daniel Ikoyo is Full Stack Developer who thrives on delivering high-quality and scalable solutions that meet the needs of his clients.`,
  },
  twitter: {
    title: "Daniel Ikoyo",
    card: "summary_large_image",
    site: "@Rd_Trendz",
    creator: "@Rd_Trendz",
    images: "https://dev-rd.vercel.app/og",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
