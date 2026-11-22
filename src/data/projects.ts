type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
  stack: string[];
  caseStudy?: string;
  /** Featured projects take the full width of the grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Giddaa",
    description:
      "Home-buying platform for Nigerians: listings, purchase plans, a mortgage calculator and applications. I lead the frontend.",
    url: "https://giddaa.com",
    image: "/images/projects/giddaa-houses.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    caseStudy: "helping-homebuyers-find-giddaa-on-google",
    featured: true,
  },
  {
    title: "drip.ng",
    description:
      "Streetwear store built end to end for a client: storefront, Paystack checkout, admin, and product creation from WhatsApp.",
    url: "https://drip.ng",
    image: "/images/projects/drip-home.webp",
    stack: ["Next.js", "Payload CMS", "PostgreSQL"],
    caseStudy: "turning-whatsapp-messages-into-products",
    featured: true,
  },
  {
    title: "Giddaa UI system",
    description:
      "About 110 components published to npm and shared by Giddaa’s buyer site and admin app, with documentation, tests and automated releases.",
    url: "https://ui-doc.giddaa.com",
    image: "/images/projects/giddaa-ui.webp",
    stack: ["React", "Base UI", "Tailwind CSS", "Changesets"],
  },
  {
    title: "ChatFlow",
    description:
      "AI chatbot builder for customer support. I built the WhatsApp connection, moved payments from Stripe to Lemon Squeezy, and worked on reliability across the product.",
    url: "https://chat-flow.app/",
    image: "/images/projects/chatflow.webp",
    stack: ["Next.js", "Vercel AI SDK", "PostgreSQL", "Supabase"],
  },
  {
    title: "Easy-AMS",
    description:
      "Attendance management: create sessions, take attendance and generate reports.",
    url: "https://easy-ams.vercel.app/",
    image: "/images/projects/easy-ams.webp",
    stack: ["Next.js", "MongoDB", "Zustand"],
  },
  {
    title: "MovieBox",
    description:
      "Search for movies, browse what is popular and watch trailers.",
    url: "https://rd-hngx-movie-box.vercel.app/",
    image: "/images/projects/movie-box.webp",
    stack: ["Next.js", "React Query", "Tailwind CSS"],
  },
];

export const moreProjects = [
  {
    title: "Shoppingify",
    url: "https://rd-shoppingify.vercel.app/",
    description: "a shopping list app with spending analytics.",
  },
  {
    title: "Drag-and-drop image gallery",
    url: "https://rd-hngx-drag-and-drop-image-gallery.vercel.app/",
    description: "a searchable gallery you can reorder by dragging.",
  },
];
