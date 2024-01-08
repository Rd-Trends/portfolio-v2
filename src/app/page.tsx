import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-4 px-4 md:px-12 lg:px-[8rem] max-w-7xl mx-auto">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Footer />
    </main>
  );
}
