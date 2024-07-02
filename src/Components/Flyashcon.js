import React from 'react';
import '../css/Flyashcon.css';
import image1 from '../Carousle_content/img11.jpg';
import image2 from '../Carousle_content/img3.jpg';
import image3 from '../Carousle_content/img2.jpg';

const FlyAshBricksInfo = () => {
  return (
    <div className="fly-ash-bricks-info">
      <h2 className="fade-in gradient-text">Living Room Interior Design</h2>
      <p className="slide-in highlight-text">
        Bedroom interior design aims to create a comfortable, relaxing, and aesthetically pleasing space for rest and rejuvenation. It involves harmonizing furniture, colors, lighting, and decor elements to reflect personal style while ensuring functionality and tranquility. Key considerations include optimizing space, promoting relaxation, and enhancing the overall ambiance to support a restful sleep environment.
      </p>
      <div className="image-stack">
        <img src={image1} alt="Example 1" className="stack-image" />
        <img src={image2} alt="Example 2" className="stack-image" />
        <img src={image3} alt="Example 3" className="stack-image" />
      </div>
      <h3 className="fade-in-delay gradient-text">Benefits of Living Room Interior Design</h3>
      <ul className="fade-in-list">
        <li className="fade-in-list-item">Comfort: Tailored layout and furniture choices create a cozy and inviting atmosphere.</li>
        <li className="fade-in-list-item">Personalization: Reflects individual tastes and preferences through color schemes, bedding, and decor.</li>
        <li className="fade-in-list-item">Functionality: Maximizes use of space with effective storage solutions and practical layout designs.</li>
        <li className="fade-in-list-item">Aesthetic Appeal: Enhances visual appeal with balanced proportions and pleasing aesthetics.</li>
        <li className="fade-in-list-item">Well-being: Promotes relaxation and reduces stress with soothing colors and lighting choices.</li>
        <li className="fade-in-list-item">Quality Sleep: Optimizes the bedroom environment to support better sleep patterns and overall well-being.</li>
        <li className="fade-in-list-item">Value Addition: Enhances the overall value and appeal of the home for residents and potential buyers.</li>
      </ul>
      <h3 className="fade-in-delay gradient-text">Applications of Living Room Interior Design</h3>
      <p className="slide-in-delay highlight-text">
        Master Bedrooms: Focuses on creating a luxurious retreat for homeowners, incorporating larger beds, seating areas, and ensuite bathrooms.
      </p>
      <p className="slide-in-delay highlight-text">Children's Bedrooms: Designs cater to the needs and preferences of children, providing playful themes and functional storage solutions.</p>
      <p className="slide-in-delay highlight-text">Guest Bedrooms: Balances comfort and functionality to create a welcoming space for visitors, offering sufficient storage and amenities.</p>
      <p className="slide-in-delay highlight-text">Small Bedrooms: Maximizes space with multifunctional furniture, storage under beds, and strategic layout planning.</p>
      <p className="slide-in-delay highlight-text">Teenage Bedrooms: Incorporates study areas, storage for hobbies, and personalized decor to reflect their evolving tastes.</p>
      <p className="slide-in-delay highlight-text">Bedroom Suites: Integrates bedroom with adjoining spaces such as dressing areas, walk-in closets, and sitting rooms for a cohesive and luxurious feel.</p>
      <p className="slide-in-delay highlight-text">Apartment Bedrooms: Adapts designs to fit compact living spaces, emphasizing efficient use of every square foot while maintaining comfort and style.</p>
    </div>
  );
};

export default FlyAshBricksInfo;
