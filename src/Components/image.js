import React, { useState } from 'react';
import '../css/ImageGallery.css'; // Import the CSS file for styling

// Import images dynamically
const images = [
  { src: require('../Asserts/wo1.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo2.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo3.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo4.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo5.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo6.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo7.jpg'), alt: 'Image 1' },
  { src: require('../Asserts/wo8.jpg'), alt: 'Image 1' },
];

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState(8);

  const showMoreImages = () => {
    setVisibleImages(prevVisibleImages => Math.min(prevVisibleImages + 4, images.length));
  };

  return (
    <section className="image-gallery">
      <div className="container"> {/* Add heading */}
        <div className="gallery-grid">
          {images.slice(0, visibleImages).map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {visibleImages < images.length && (
          <button className="show-more-button" onClick={showMoreImages}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
