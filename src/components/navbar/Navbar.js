import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <div className={`navbar-items ${isOpen ? "active" : ""}`}>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;
