type Job = {
  title: string;
  company: string;
  url?: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    title: "Lead Frontend Developer",
    company: "Giddaa",
    url: "https://giddaa.com",
    period: "Jan 2025 – Present",
    highlights: [
      "Designed and built the company design system: about 110 components published to npm, with docs, tests and automated releases. The buyer site and the admin app both run on it.",
      "Led technical SEO for giddaa.com: server-rendered lists, programmatic browse pages, structured data and sitemaps. This contributed to the team’s work that helped Giddaa reach the first page of Google for property-for-sale searches in Nigeria.",
      "Migrated about 1,100 TypeScript files in the buyer site onto the design system in 13 phases. Ran validation checks throughout while continuing feature work.",
      "Built the agents' mobile app in React Native, with in-app calling, real-time messaging and offline storage.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    title: "Full Stack Developer",
    company: "LifeBeyondClass",
    url: "https://lifebeyondclass.com/",
    period: "Sep 2023 – Feb 2024",
    highlights: [
      "Built core features of a learning management platform with a small team. Worked across the interface, API and database.",
    ],
    stack: ["Next.js", "TypeScript", "AdonisJS", "PostgreSQL", "AWS"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Handiwoker Tech",
    period: "Mar – Sep 2023",
    highlights: [
      "Built reusable, accessible components and the web and mobile interfaces that used them.",
    ],
    stack: ["React", "TypeScript", "Styled Components", "Storybook"],
  },
];
