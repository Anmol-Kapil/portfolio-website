import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Cursor from "@/components/Cursor";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import Stats from "@/components/Stats";
import CodingProfiles from "@/components/CodingProfiles";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Background />
      <LoadingScreen />
      <Cursor />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <TechStack />

      <Stats />

      <About />

      <Skills />

      <Projects />
      <CodingProfiles/>
      <Experience />

      <Achievements />

      <Contact />

      <Footer />

    </main>
  );
}