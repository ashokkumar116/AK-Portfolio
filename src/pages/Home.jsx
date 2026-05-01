import { Hero } from "../components/sections/Hero";
import { Positioning } from "../components/sections/Positioning";
import { Problem } from "../components/sections/Problem";
import { Services } from "../components/sections/Services";
import { Process } from "../components/sections/Process";
import { TechStack } from "../components/sections/TechStack";
import { About } from "../components/sections/About";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";
import { DemoTools } from "../components/sections/DemoTools";

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <Problem />
      <Services />
      <DemoTools />
      <Process />
      <TechStack />
      <About />
      <FAQ />
      <CTA />
    </main>
  );
}
