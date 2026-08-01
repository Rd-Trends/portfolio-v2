export type FeaturedProject = {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  role: string;
  duration: string;
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  tools: string[];
  highlights: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Acme Dashboard",
    subtitle: "Enterprise Analytics Platform",
    description:
      "A real-time analytics dashboard for enterprise teams to monitor KPIs, visualize data trends, and generate reports.",
    fullDescription:
      "Led the frontend development of an enterprise analytics platform serving 500+ daily active users. Built a complex dashboard system with real-time data visualization, customizable widgets, and role-based access control. Focused heavily on performance optimization — achieving sub-second load times through code splitting, virtual scrolling for large datasets, and efficient re-render strategies. Implemented comprehensive keyboard navigation and screen reader support to meet WCAG 2.1 AA standards.",
    role: "Lead Frontend Developer",
    duration: "6 months",
    liveUrl: "#",
    repoUrl: "#",
    image: "/images/placeholder-1.jpg",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Recharts",
      "React Query",
      "Zustand",
    ],
    highlights: [
      "Built 20+ reusable chart components with responsive layouts",
      "Achieved 95+ Lighthouse accessibility score across all pages",
      "Reduced initial bundle size by 40% through strategic code splitting",
      "Implemented real-time data updates with optimistic UI patterns",
    ],
  },
  {
    title: "Nomad",
    subtitle: "Travel Booking Platform",
    description:
      "A modern travel booking experience with search, filtering, and a seamless checkout flow for flights and accommodations.",
    fullDescription:
      "Designed and built the entire frontend for a travel booking platform from scratch. Created a sophisticated search interface with multi-parameter filtering, date range selection, and instant results. The checkout flow was built as a multi-step form with real-time validation, saved progress, and accessibility-first form controls. Worked closely with the design team to implement smooth page transitions and micro-interactions that made the booking process feel intuitive.",
    role: "Frontend Developer",
    duration: "4 months",
    liveUrl: "#",
    repoUrl: "#",
    image: "/images/placeholder-2.jpg",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    highlights: [
      "Designed a multi-step checkout with 92% completion rate",
      "Implemented complex search with debounced filtering and URL state sync",
      "Built accessible date picker and form components from scratch",
      "Delivered pixel-perfect responsive design across all breakpoints",
    ],
  },
  {
    title: "Pulse",
    subtitle: "Team Communication App",
    description:
      "A real-time team messaging app with channels, threads, rich text editing, and file sharing.",
    fullDescription:
      "Built the frontend for a real-time team communication application handling concurrent users across multiple channels. Implemented a rich text editor with markdown support, mentions, and emoji reactions. The message list uses virtualized rendering to handle channels with 10k+ messages without performance degradation. Designed the notification system and unread indicators, and ensured the entire app is fully navigable via keyboard with proper ARIA live regions for real-time message announcements.",
    role: "Frontend Developer",
    duration: "5 months",
    liveUrl: "#",
    image: "/images/placeholder-3.jpg",
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Tiptap",
      "Socket.io",
      "React Virtual",
      "Zustand",
    ],
    highlights: [
      "Rendered 10k+ messages efficiently with virtualized scrolling",
      "Built a custom rich text editor with markdown and mentions support",
      "Implemented ARIA live regions for accessible real-time message updates",
      "Achieved 60fps scroll performance with optimized re-render boundaries",
      "Rendered 10k+ messages efficiently with virtualized scrolling",
      "Built a custom rich text editor with markdown and mentions support",
      "Implemented ARIA live regions for accessible real-time message updates",
      "Achieved 60fps scroll performance with optimized re-render boundaries",
    ],
  },
];
