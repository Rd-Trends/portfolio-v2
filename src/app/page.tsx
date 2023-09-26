import About from "@/components/About";
import WorkExperience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between py-4 px-4 md:px-12 lg:px-[8rem] max-w-7xl mx-auto">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <footer className=" w-full flex flex-col items-center space-y-4 text-center">
        <span className=" block">&copy; Daniel Ikoyo</span>
      </footer>
    </main>
  );
}
