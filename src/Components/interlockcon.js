import React from 'react';
import '../css/Interlocking.css'; // Import CSS file for styling
import image1 from '../Carousle_content/img11.jpg';
import image2 from '../Carousle_content/img3.jpg';
import image3 from '../Carousle_content/img2.jpg';

const InterlockingBricksInfo = () => {
  return (
    <div className="interlocking-bricks-info">
      <h2 className="fade-in gradient-text">Modular Kitchen</h2>
      <p className="slide-in highlight-text">
        A modular kitchen is a modern kitchen layout that incorporates pre-fabricated cabinets, drawers, and units designed for maximum efficiency and functionality. These kitchens are built from standardized modules or units, which can be easily customized and assembled to fit the specific dimensions and needs of any kitchen space. With a focus on contemporary aesthetics and practical design, modular kitchens offer a streamlined and organized cooking environment.
      </p>
      <div className="image-stack">
        <img src={image1} alt="Example 1" className="stack-image" />
        <img src={image2} alt="Example 2" className="stack-image" />
        <img src={image3} alt="Example 3" className="stack-image" />
      </div>
      <h3 className="fade-in-delay gradient-text">Benefits of Modular Kitchen</h3>
      <p className="slide-in-delay highlight-text">Several benefits of Modular Kitchen:</p>
      <ul className="fade-in-list">
        <li className="fade-in-list-item">Customization: Tailored to individual preferences and kitchen layouts, ensuring a perfect match for any home.</li>
        <li className="fade-in-list-item">Efficiency: Optimizes space with smart storage solutions, making every inch of the kitchen usable.</li>
        <li className="fade-in-list-item">Ease of Installation: Pre-fabricated units simplify and speed up the installation process.</li>
        <li className="fade-in-list-item">Maintenance: Modular units are easier to clean and maintain due to their smooth surfaces and accessible design.</li>
        <li className="fade-in-list-item">Aesthetic Appeal: Offers a wide range of designs, colors, and finishes to match any interior decor.</li>
        <li className="fade-in-list-item">Flexibility: Modules can be easily reconfigured or replaced, allowing for updates and changes without extensive remodeling.</li>
        <li className="fade-in-list-item">Cost-Effective: Modular kitchens often prove more economical than traditional kitchens due to standardized manufacturing processes.</li>
      </ul>
      <h3 className="fade-in-delay gradient-text">Applications</h3>
      <p className="slide-in-delay highlight-text">Modular Kitchen usage:</p>
      <ul className="fade-in-list">
        <li className="fade-in-list-item">Residential Homes: Ideal for apartments and houses, providing efficient and stylish kitchen solutions.</li>
        <li className="fade-in-list-item">Small Apartments: Maximizes space in compact areas with smart storage and multifunctional units.</li>
        <li className="fade-in-list-item">Vacation Homes: Quick installation makes it perfect for secondary homes or rental properties.</li>
        <li className="fade-in-list-item">Commercial Spaces: Used in office kitchenettes and break rooms, offering functional and easy-to-maintain solutions.</li>
        <li className="fade-in-list-item">Hospitality Industry: Perfect for hotels and serviced apartments, offering guests modern and well-equipped kitchenettes.</li>
        <li className="fade-in-list-item">Custom Homes: Provides personalized design options to suit bespoke home layouts and preferences.</li>
        <li className="fade-in-list-item">Rental Properties: Enhances the appeal and functionality of rental units, attracting tenants with modern kitchen amenities.</li>
      </ul>
    </div>
  );
};

export default InterlockingBricksInfo;
