// SolarHomeSection2.jsx
import React, { useEffect } from 'react';
import './SolarHomeSection2.css';
import solarInstallation from "../../../assets/images/solar-installation.webp"

const SolarHomeSection2 = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  const installSteps = [
    "Connect with our Team",
    "Site Inspection and Feasibility check by our Solar Expert",
    "Documentation & Paper work",
    "Detailed Engineering Visit",
    "Approval from Client",
    "Solar Installation",
    "Net Metering",
    "Cleaning & Maintenance up to 1 year"
  ];

  return (
    <div className="process-container">
      <div className="star-decoration"></div>
      
      <div className="process-header animate-on-scroll">
        <h1>An Array of Process</h1>
        <p>
          Our comprehensive suite of professional services caters to a diverse clientele,
          ranging from homeowners to commercial developers.
        </p>
      </div>

      <div className="process-content">
        <div className="steps-container animate-on-scroll">
          <h2>Steps to install solar.</h2>
          <div className="steps-list">
            {installSteps.map((step, index) => (
              <div 
                key={index} 
                className="step-item animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="check-icon">✓</div>
                <p>{step}</p>
                {index < installSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="image-container animate-on-scroll">
          <img 
            // src="https://prosolarvision.wordpress.com/wp-content/uploads/2024/04/residential-solar-panel-installation-service-500x500-1.webp" 
            src={solarInstallation}
            alt="Solar panel installation" 
            className="process-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default SolarHomeSection2;