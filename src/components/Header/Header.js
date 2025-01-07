import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ProSolarVision</div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/solar-products">Solar Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
