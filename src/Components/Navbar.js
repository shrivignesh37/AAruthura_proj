import React, { useState } from "react";
// import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Import FaPhoneAlt icon
import { GiHamburgerMenu } from "react-icons/gi";
// import logoImage from "./about.png"; // Import your logo image
import "../css/Navbar.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleMenuClick = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          {/* <img src={logoImage} alt="Logo" className="logo-image" /> */}
          <h1 className="logoTxt">Aaruthra Interiors</h1>
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
            {/* <li>
              <a href="https://api.whatsapp.com/send?phone=9865343636" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="whatsapp" />WhatsApp
              </a>
            </li>
            <li>
              <a href="tel:+919865343636">
                <FaPhoneAlt className="phone" /> Call
              </a>
            </li> */}
          </ul>
        </div>

        <div className="social-media">
          <div className="hamburger-menu">
            <button onClick={handleMenuClick} aria-label="Toggle Menu">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
