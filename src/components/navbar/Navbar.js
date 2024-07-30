import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}

export default Navbar;
