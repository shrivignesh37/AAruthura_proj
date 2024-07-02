import React from 'react';
import '../css/HollowBricks.css'; // Import CSS file for styling
import image1 from '../Carousle_content/img11.jpg';
import image2 from '../Carousle_content/img3.jpg';
import image3 from '../Carousle_content/img2.jpg';
const HollowBricksInfo = () => {
  return (
    <div className="hollow-bricks-info">
      <h2 className="fade-in gradient-text">Hall Decoring</h2>
      <p className="slide-in">
        A modular living hall features a flexible and customizable design approach, utilizing pre-fabricated units for furniture and decor. This allows for easy reconfiguration and adaptation to various spaces and styles. Emphasizing functionality and aesthetics, modular living halls combine contemporary design with practical storage solutions to create a versatile and harmonious living area.
      </p>
      <div className="image-stack">
        <img src={image1} alt="Example 1" className="stack-image" />
        <img src={image2} alt="Example 2" className="stack-image" />
        <img src={image3} alt="Example 3" className="stack-image" />
      </div>
      <h3 className="fade-in-delay gradient-text">Benefits of Hall Decoring</h3>
      <p className="slide-in-delay">
        Hall Decoring offer several benefits:
      </p>
      <ul className="fade-in-list">
        <li className="fade-in-list-item">Customization: Easily tailored to individual tastes and space requirements, ensuring a perfect fit for any home.</li>
        <li className="fade-in-list-item">Flexibility: Components can be reconfigured or replaced without major renovations, accommodating changing needs and trends.</li>
        <li className="fade-in-list-item">Efficiency: Streamlined installation process reduces time and labor costs.</li>
        <li className="fade-in-list-item">Aesthetic Appeal: Modern designs and finishes enhance the visual appeal of the living area.</li>
        <li className="fade-in-list-item">Space Optimization: Smart storage solutions maximize the use of available space, keeping the area organized and clutter-free.</li>
      </ul>
      <h3 className="fade-in-delay gradient-text">Applications</h3>
      <p className="slide-in-delay">
        Hall Decoring Usage:
      </p>
      <ul className="fade-in-list">
        <li className="fade-in-list-item">Residential Spaces: Perfect for apartments and houses, providing adaptable solutions for living rooms, family rooms, and entertainment areas.</li>
        <li className="fade-in-list-item">Small Homes: Ideal for compact spaces, utilizing modular furniture to maximize functionality and storage.</li>
        <li className="fade-in-list-item">Office Lounges: Enhances comfort and style in corporate settings, offering flexible and professional lounge areas.</li>
        <li className="fade-in-list-item">Hospitality: Used in hotels and serviced apartments to offer stylish, practical, and easy-to-maintain living spaces for guests.</li>
        <li className="fade-in-list-item">Commercial Spaces: Suitable for waiting areas, showrooms, and retail environments, creating welcoming and versatile seating and display areas.</li>
      </ul>
    </div>
  );
};

export default HollowBricksInfo;
