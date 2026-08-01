import Hero from "@/components/hero";
import About from "@/components/about";
import WorkExperience from "@/components/experience";
import FeaturedWork from "@/components/featured-work";
import Projects from "@/components/project";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <WorkExperience />
      <FeaturedWork />
      <Projects />
      <Contact />
    </main>
  );
}
