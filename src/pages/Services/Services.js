import React from 'react'
import ServicesImage1 from "../../assets/ServicesImage1.png";
import ServicesImage2 from "../../assets/ServicesImage2.png";
import ServicesImage3 from "../../assets/ServicesImage3.png";
import ServicesImage4 from "../../assets/ServicesImage4.png";
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
  return (
    <div className='container-main services'>
      <div className='wrapper'>
        <div className='inner-wrapper'>
          <h1 className='page-header'>Services</h1>
          <div className='content'>
          <p>We offer professional solar panel installation services for residential, commercial, and industrial properties. Our team of certified technicians ensures a seamless installation process from start to finish, optimizing the system for maximum efficiency and energy savings.</p>
          <div className="image-wrapper">
              <ul className="image-inner-wrapper">
                <li>
                  <img width="1036" height="583" alt="" src={ServicesImage1} />
                  <h3>On Grid-Tied Systems</h3>
                  <p>An on-grid solar system, also known as a grid-tied or grid-connected solar system, is designed to work in conjunction with the utility grid. This system allows you to generate your own electricity using solar panels while remaining connected to the local power grid. The energy produced by the solar panels is used to power your home or business, and any excess energy is fed back into the grid.</p>
                  <Link to="/contact-us" className='cta-wrap'>
                    <span className='cta'>Get Started</span>
                  </Link>
                </li>
                <li>
                  <img width="1036" height="583" alt="" src={ServicesImage2} />
                  <h3>Off Grid-Tied Systems</h3>
                  <p>An off-grid solar system, also known as a standalone solar system, operates independently from the local utility grid. This system is designed to generate and store enough energy to meet the needs of your home or business without relying on external power sources. Off-grid systems are ideal for remote locations where grid access is unavailable or for those who prefer complete energy independence.</p>
                  <Link to="/contact-us" className='cta-wrap'>
                    <span className='cta'>Get Started</span>
                  </Link>
                </li>
                <li>
                  <img width="1036" height="583" alt="" src={ServicesImage3} />
                  <h3>Solar Water Heater</h3>
                  <p>A solar water heater system harnesses the power of the sun to heat water for residential, commercial, or industrial use. This eco-friendly technology reduces reliance on traditional energy sources, resulting in significant cost savings and a smaller carbon footprint. Solar water heating systems are effective, sustainable, and can be integrated with existing water heating setups to enhance efficiency.</p>
                  <Link to="/contact-us" className='cta-wrap'>
                    <span className='cta'>Get Started</span>
                  </Link>
                </li>
                <li>
                  <img width="1036" height="583" alt="" src={ServicesImage4} />
                  <h3>Solar AMC Support</h3>
                  <p>Solar Annual Maintenance Contract (AMC) support is a comprehensive service plan designed to ensure the optimal performance and longevity of your solar energy system. Regular maintenance and timely servicing are essential for maximizing the efficiency and lifespan of solar installations. Our AMC support offers a hassle-free solution, providing routine inspections, preventive maintenance, and prompt repairs to keep your solar system running smoothly.</p>
                  <Link to="/contact-us" className='cta-wrap'>
                    <span className='cta'>Get Started</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
