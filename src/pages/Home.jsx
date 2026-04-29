import { Hero } from "../components/sections/Hero";
import { Positioning } from "../components/sections/Positioning";
import { Problem } from "../components/sections/Problem";
import { Services } from "../components/sections/Services";
import { Process } from "../components/sections/Process";
import { TechStack } from "../components/sections/TechStack";
import { About } from "../components/sections/About";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <Problem />
      <Services />
      <Process />
      <TechStack />
      <About />
      <FAQ />
      <CTA />
    </main>
  );
}
