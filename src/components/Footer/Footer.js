import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-innerwrap">
        <div className="footer-left">
          <Link to="/" style={{textDecoration:"none", color:"#ffffff"}}>
          <h2>ProSolar Vision</h2>
          <p className="slogan">Rakhe Bijlee Bill se Durr</p>
          </Link>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <strong>Privacy</strong>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <strong>Social</strong>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter/X
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
