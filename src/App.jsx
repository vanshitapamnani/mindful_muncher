import Navbar from "./components/Navbar";
import LandingPage from "./sections/landingPage";
import About from "./sections/about";
import Method from "./sections/method";
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
    </>
  );
}

export default App;
