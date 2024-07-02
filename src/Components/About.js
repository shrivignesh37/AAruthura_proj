import React from "react";
import '../css/About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h1>Elevate Your</h1>
          <h1>Interiors</h1>
        </div>
        <div className="section-title1">
          <h1>Designing Interiors That Leave a Lasting Impression</h1>
        </div>
          <div className="services-menu">
            <ul>
              <li>+<span>Consultation</span></li>
              <li>+<span>Space Planning</span></li>
              <li>+<span>Concept Development</span></li>
              <li>+<span>Design Development</span></li>
              <li>+<span>Project Management</span></li>
              <li>+<span>Furniture selection</span></li>
              <li>+<span>Procurement</span></li>
              <li>+<span>Lighting Design</span></li>
              <li>+<span>Custom Design Elements</span></li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
