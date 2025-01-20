import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SolarHomeSection1 from "./Sections/SolarHomeSection1";
import SolarHomeSection2 from "./Sections/SolarHomeSection2";
import SolarHomeSection3 from "./Sections/SolarHomeSection3";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>A Commitment To Innovation & Sustainability</h1>
        <p className="">
          “Powering Tomorrow, Today: Illuminating Your Path with Solar Energy”
          <br />
          <strong>Join the Solar Revolution with Solar Solutions!</strong>
        </p>
        <Link to="/about-us" className="cta-wrap">
          <span className="cta">About us</span>
        </Link>
      </div>
      <SolarHomeSection1 />
      <SolarHomeSection2 />
      <SolarHomeSection3 />
    </div>
  );
};

export default Home;
