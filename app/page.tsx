import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Projects from "@/component/Project";
import Skills from "@/component/Skills";
import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}