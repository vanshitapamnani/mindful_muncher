import { useState } from "react";
import "../styles/navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">Mindful Muncher</div>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}>
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}>
              About
            </a>
          </li>

          <li>
            <a
              href="#pro"
              className={active === "program" ? "active" : ""}
              onClick={() => setActive("program")}>
              Programs
            </a>
          </li>

          {/* <li>
            <a
              href="#recipes"
              className={active === "recipes" ? "active" : ""}
              onClick={() => setActive("recipes")}>
              Recipes
            </a>
          </li> */}

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="cta-btn"
          onClick={() =>
            window.open("https://calendly.com/pamnanivanshita/15min", "_blank")
          }>
          BOOK FREE CALL
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
