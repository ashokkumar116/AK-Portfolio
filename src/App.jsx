import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Positioning } from "./components/sections/Positioning";
import { Problem } from "./components/sections/Problem";
import { Services } from "./components/sections/Services";
import { DemoTools } from "./components/sections/DemoTools";
import { CaseStudies } from "./components/sections/CaseStudies";
import { Process } from "./components/sections/Process";
import { TechStack } from "./components/sections/TechStack";
import { About } from "./components/sections/About";
import { Testimonials } from "./components/sections/Testimonials";
import { Stats } from "./components/sections/Stats";
import { FAQ } from "./components/sections/FAQ";
import { CTA } from "./components/sections/CTA";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <Problem />
        <Services />
        <DemoTools />
        <CaseStudies />
        <Process />
        <TechStack />
        <About />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
