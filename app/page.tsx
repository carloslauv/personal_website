import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import KuriosWorkflows from "@/components/KuriosWorkflows";
import Experience from "@/components/Experience";
import Recognition from "@/components/Recognition";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <KuriosWorkflows />
        <Experience />
        <Recognition />
      </main>
      <Footer />
    </>
  );
}
