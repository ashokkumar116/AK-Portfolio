import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import AllTools from "./pages/AllTools";
import ToolDetail from "./pages/ToolDetail";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-tools" element={<AllTools />} />
        <Route path="/tool/:id" element={<ToolDetail />} />
        <Route path="/book-audit" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}
