
import React from "react";
import "./SolarHomeSection1.css";

const SolarHomeSection1 = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="star-decoration"></div>
        <h1 className="title">Welcome to Solar Energy</h1>
        <p className="subtitle">
          We believe in harnessing the power of the sun to create a brighter, cleaner
          future for all. We are dedicated to empowering individuals, businesses, and
          communities to embrace renewable energy and reduce their environmental
          footprint.
        </p>
      </div>

      <div className="services-grid">
        {/* First Row */}
        <div className="service-card">
          <div className="star-icon">✧</div>
          <h2>Renovation and Restoration</h2>
          <p>Experience the fusion of imagination and expertise with Prosolar Vision Architectural Solutions.</p>
        </div>

        <div className="service-card">
          <div className="star-icon">✧</div>
          <h2>Continuous Support</h2>
          <p>Developed trust and loyalty with reliable support services</p>
        </div>

        <div className="service-card">
          <div className="star-icon">✧</div>
          <h2>Commissioning</h2>
          <p>Ensuring that a solar system is installed correctly and operates efficiently.</p>
        </div>

        {/* Second Row */}
        <div className="service-card">
          <div className="star-icon">✧</div>
          <h2>Consulting</h2>
          <p>Get expert guidance to navigate your solar energy journey with confidence.</p>
        </div>

        <div className="service-card">
          <div className="star-icon">✧</div>
          <h2>Project Management</h2>
          <p>Streamline solar project from conception to completion with effective project management.</p>
        </div>

        <div className="service-card">
          <div className="star-icon">✧</div>
          <h2>Architectural Solutions</h2>
          <p>Elevate solar integration with tailored architectural solutions for seamless aesthetics and functionality.</p>
        </div>
      </div>
    </div>
  );
};

export default SolarHomeSection1;