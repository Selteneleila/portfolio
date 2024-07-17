import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo-img" src={Logo} alt="logo" />
      </div>
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
