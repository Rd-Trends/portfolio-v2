import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Project";

export default async function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
    </main>
  );
}
