import React from "react";
import projectImage1 from "../../assets/images/ProjetImage1.png" 
import projectImage2 from "../../assets/images/ProjetImage2.png" 
import projectImage3 from "../../assets/images/ProjetImage3.png" 
import projectImage4 from "../../assets/images/ProjetImage4.png" 
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container-main project-page">
      <div className="wrapper">
        <div className="inner-wrapper">
          <h1 className="page-header">Projects</h1>
          <div className="content">
            <h2>Projects of Solar Systems</h2>
            <p>
              This project involves the design, installation, and commissioning
              of a residential and commercial solar power system to provide a
              sustainable and cost-effective energy solution for a single-family
              home/corporate. The primary goal is to reduce the
              household’s/factory dependence on grid electricity, lower energy
              costs, and decrease the carbon footprints.
            </p>
            <div className="image-wrapper">
              <ul className="image-inner-wrapper">
                <li>
                  <img width="1036" height="583" alt="" src={projectImage1} />
                </li>
                <li>
                  <img width="1036" height="583" alt="" src={projectImage2} />
                </li>
                <li>
                  <img width="1036" height="583" alt="" src={projectImage3} />
                </li>
                <li>
                  <img width="1036" height="583" alt="" src={projectImage4} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
