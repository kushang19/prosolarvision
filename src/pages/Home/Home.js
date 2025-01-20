import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
import SolarHomeSection1 from "./Sections/SolarHomeSection1";
import SolarHomeSection2 from "./Sections/SolarHomeSection2";
import SolarHomeSection3 from "./Sections/SolarHomeSection3";
import Popup from "../../shared/Popup/Popup";

const Home = () => {
  return (
    <div className="home">
      <div id="banner" className="banner" style={{ height: "100vh"}}>
        <h1>A Commitment To Innovation & Sustainability</h1>
        <p className="">
          “Powering Tomorrow, Today: Illuminating Your Path with Solar Energy”
          <br />
          <strong>Join the Solar Revolution with Solar Solutions!</strong>
        </p>
      </div>
      <Popup />
      <SolarHomeSection1 />
      <SolarHomeSection2 />
      <SolarHomeSection3 />
    </div>
  );
};

export default Home;
