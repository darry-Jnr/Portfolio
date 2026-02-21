import Image from "next/image";
import Hero from '@/app/components/hero/Hero'
import TechStack from "./components/techstack/TechStack";
import Projects from "./components/projects/Projects";

import Footer from "./components/footer/Footer";
import Cta from "./components/cta/page";
import Testimonials from "./testimonials/page";

export default function Home() {
  return (
  <div>
    <Hero />
    <TechStack/>
    <Projects />
    <Testimonials />
    <Cta />
    <Footer />
    </div>
  );
}
