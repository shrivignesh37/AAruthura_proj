import React, { useState } from "react";
import image1 from "../Asserts/Shop.png";
import image2 from "../Asserts/Mk1.jpg";
import image3 from "../Asserts/H1.jpg";
import image4 from "../Asserts/D1.jpg";
import image5 from "../Asserts/B1.jpg";

import '../css/slider.css'
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [{ url: image1, title: "shop" },  { url: image2, title: "Kitchen" },{ url: image3, title: "Hall" },{ url: image4, title: "Crafting" },{ url: image5, title: "bedroom" }];

  const containerStyles = {
    width: "100%",
    maxWidth: "1450px", // Set maximum width for larger screens
    height: "650px",
    margin: "0 auto",
    position: "relative", // Added for positioning arrows and dots
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 0.5s ease-in-out",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2rem", // Adjust arrow size for smaller screens
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    borderRadius: "50%",
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: "10px",
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: "10px",
  };

  const dotsContainerStyles = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
  };

  const dotStyle = (index) => {
    return {
      margin: "0 3px",
      cursor: "pointer",
      fontSize: "20px",
      color:
        currentIndex === index
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.3)",
    };
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={containerStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ❮
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ❯
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={dotStyle(index)} // Passing index to dotStyle
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
