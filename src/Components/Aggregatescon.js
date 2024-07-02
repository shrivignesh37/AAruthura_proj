import React from 'react';
import '../css/Aggregates.css'; // Import CSS file for styling
import image1 from '../Carousle_content/img11.jpg';
import image2 from '../Carousle_content/img3.jpg';
import image3 from '../Carousle_content/img2.jpg';

const AggregatesInfo = () => {
  return (
    <div className="aggregates-info">
      <h2 className="fade-in gradient-text" style={{fontSize:'3vh'}} >Wardrobes & Cupboards</h2>
      <p className="slide-in highlight-text" style={{fontSize:'2vh'}}>
        Wardrobe and cupboard interior design focuses on creating functional and aesthetically pleasing storage solutions for clothing, accessories, and household items. These designs combine style and practicality, incorporating various materials, finishes, and configurations to suit different spaces and preferences. From built-in wardrobes to standalone cupboards, the designs can be customized to optimize storage and complement the overall interior decor.
      </p>
      <div className="image-stack">
      <img src={image1} alt="Example 1" className="stack-image" />
      <img src={image2} alt="Example 2" className="stack-image" />
      <img src={image3} alt="Example 3" className="stack-image" />
    </div>
      <h3 className="fade-in-delay gradient-text" style={{fontSize:'3vh'}}>Benefits of Wardrobes & Cupboards</h3>
      <ul className="fade-in-list" style={{fontSize:'2vh'}}>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Organization: Provides ample storage space with dedicated compartments, shelves, and drawers to keep belongings neatly organized.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Customization: Tailored to individual needs and space constraints, ensuring a perfect fit and functionality.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Aesthetic Appeal: Enhances the visual appeal of a room with stylish designs, materials, and finishes.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Space Optimization: Maximizes the use of available space, especially in small rooms or awkwardly shaped areas.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Durability: High-quality materials and craftsmanship ensure long-lasting and reliable storage solutions.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Versatility: Suitable for various rooms and purposes, from bedroom wardrobes to kitchen cupboards.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Value Addition: Well-designed wardrobes and cupboards can increase the overall value of a home by improving its functionality and appearance.</li>
      </ul>
      <h3 className="fade-in-delay gradient-text" style={{fontSize:'3vh'}}>Applications of Wardrobes & Cupboards</h3>
      <ul className="fade-in-list" style={{fontSize:'2vh'}}>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Bedrooms: Custom wardrobes with hanging space, shelves, and drawers for clothing, shoes, and accessories.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Kitchens: Cupboards and cabinets for organized storage of kitchen utensils, cookware, and pantry items.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Living Rooms: Stylish cupboards for storing books, electronics, and decorative items, blending seamlessly with the decor.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Bathrooms: Waterproof cupboards and vanities for storing toiletries, towels, and cleaning supplies.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Hallways: Built-in or standalone cupboards for coats, shoes, and other outerwear, keeping entryways clutter-free.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Home Offices: Storage solutions for office supplies, documents, and equipment, maintaining a tidy and efficient workspace.</li>
        <li className="fade-in-list-item" style={{fontSize:'2vh'}}>Garages and Utility Rooms: Robust cupboards for tools, cleaning supplies, and other household items, ensuring organized storage and easy access.</li>
      </ul>
    </div>
  );
}

export default AggregatesInfo;
