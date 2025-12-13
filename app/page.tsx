import Image from "next/image";
import Hero from '@/app/components/hero/Hero'
import TechStack from "./components/techstack/TechStack";
import Projects from "./components/projects/Projects";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
  <div>
    <Hero />
    <TechStack/>
    <Projects />
    <Cta />
    <Footer />
    </div>
  );
}
