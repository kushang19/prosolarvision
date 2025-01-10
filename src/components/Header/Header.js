import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-innerwrap">
        <Link to="/" style={{textDecoration:"none"}}>
        <div className="logo">ProSolarVision</div>
        </Link>

        {/* Hamburger and Navbar */}
        <div
          className={`hamburger-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <button className="hamburger-btn" onClick={toggleMenu}>
            <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <li onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/solar-products">Solar Products</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/projects">Projects</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/about-us">About Us</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
