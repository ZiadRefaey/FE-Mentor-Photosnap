import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import DesktopNav from "./components/DesktopNav";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Listen to window resize events and update the screenWidth state
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {screenWidth < 768 ? <MobileNav /> : <DesktopNav />}
        <Routes>
          <Route path="/" element={<Homepage screenWidth={screenWidth} />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
