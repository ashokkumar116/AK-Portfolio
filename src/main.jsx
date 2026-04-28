import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import App from "./App";

/* Register GSAP plugins once at entry */
gsap.registerPlugin(ScrollTrigger);

/* Wait for fonts before rendering to prevent animation flicker */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
