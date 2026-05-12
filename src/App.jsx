import Navbar from "./components/Navbar";
import LandingPage from "./sections/LandingPage";
import About from "./sections/About";
import Method from "./sections/Method";
import ForYou from "./sections/Foryou";
import Programs from "./sections/Program";
import FAQ from "./sections/FAQ";
import Footer from "./components/Footer";

import { useEffect, useRef } from "react";

import "./styles/index.css";
function App() {
  const dotRef = useRef(null);
  useEffect(() => {
    console.log("App mounted");

    const moveCursor = (e) => {
      console.log(e.clientX, "moving");
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <Navbar />
      <LandingPage />
      <About />
      <Method />
      <ForYou />
      <Programs />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
//on clicking book a call btn - calendify will open to book a call
// on clicking any plan it will redirect to whatsapp to communicate
