export const site = {
  name: "Daniel Ikoyo",
  role: "Lead Frontend Developer",
  url: "https://dev-rd.vercel.app",
  description:
    "Daniel Ikoyo is a frontend developer who builds fast, accessible web products. Lead Frontend Developer at Giddaa, where he works on the design system and SEO.",
  email: "dannirolands@gmail.com",
  twitterHandle: "@Rd_Trendz",
  /** Set to true to bring back the Writing link and home page section. The /blog pages stay built either way. */
  showWriting: false,
  links: {
    github: "https://github.com/Rd-Trends",
    linkedin: "https://www.linkedin.com/in/ikoyo-daniel-0334981a6",
    twitter: "https://twitter.com/Rd_Trendz",
    upwork: "https://www.upwork.com/freelancers/~015b468d504d985b0f",
  },
} as const;

/** Shared Open Graph fields. Next.js replaces (not merges) `openGraph` per route, so pages spread this in. */
export const baseOpenGraph = {
  siteName: site.name,
  locale: "en_NG",
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: `${site.name} — ${site.role}`,
    },
  ],
};
