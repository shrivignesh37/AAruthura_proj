import React, { useState, useEffect } from 'react';
import Carousel from '../Components/products'; // Import the Carousel component
import '../css/Servicepage.css'; // Import the CSS file for your service page
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '@mui/material/Button';
import aboutImage from '../Asserts/about.png'; 

const ServicePage = () => {
  const [text, setText] = useState('');
  const fullText = "Do not hesitate to say Hello!";
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleMenuClick = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home-container'>
      <div className="serv-img">
        <nav className="home-main-nav">
          <div className="home-logo">
            <h1 className="home-logoTxt">Aaruthra Interiors</h1>
          </div>
          <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
              <li>
                <a href="/" onClick={handleMenuClick}>Home</a>
              </li>
              <li>
                <a href="/About" onClick={handleMenuClick}>About</a>
              </li>
              <li>
                <a href="/service" onClick={handleMenuClick}>Services</a>
              </li>
              <li>
                <a href="/contact" onClick={handleMenuClick}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <div className="hamburger-menu" style={{backgroundColor:'white',color:'red',marginRight:'1vh'}}>
              <button onClick={handleMenuClick} aria-label="Toggle Menu">
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          {showMediaIcons && (
            <div className="home-mobile-menu-overlay">
              <button className="close-btn" onClick={handleMenuClick} aria-label="Close Menu">✖</button>
              <ul>
                <li>
                  <a href="/" onClick={handleMenuClick}>Home</a>
                </li>
                <li>
                  <a href="/About" onClick={handleMenuClick}>About</a>
                </li>
                <li>
                  <a href="/service" onClick={handleMenuClick}>Services</a>
                </li>
                <li>
                  <a href="/contact" onClick={handleMenuClick}>Contact</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className="service-page">
        <div className="ser-title">
          <h1>Our Services</h1>
        </div>
        <div className="ser-tagline">
          <h1>~Explore our range of products and services</h1>
        </div>
        <Carousel />
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      <h1 className="brandText">Aaruthra Interiors</h1>
      <div className="title34">
        <h1>Get In Touch</h1>
      </div>
      <div className="tagline" style={{fontSize:'0px'}}>
        <h1>~Building Relationships, One Conversation at a Time</h1>
      </div>
      <br />
      <div className="ser-infinity-trans">
        <div className="fixed-grid-container">
          <h2>Have a project in mind?</h2>
        </div>
        <div className="Typerwritter">
          {text}
        </div>
        <br />
        <a href="/contact" className="contact-btn">
          <Button variant="outlined" 
            style={{ 
              borderColor: "white", 
              color: "white",
              fontSize: '20px', 
              fontWeight: 'bold',
              marginTop: '25px',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '10px',
              marginLeft: '-20px'
            }}>
            Contact Us
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ServicePage;
