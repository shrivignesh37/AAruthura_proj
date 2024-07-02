import React from "react";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>
                Show Room - No. 136, Nasiyanur Main Road, Veerappampalayam Privu, Erode - 638107.
              </p>
              <div className="contact-item" style={{color:'white'}}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a  style={{color:'white'}}href="mailto:aaruthrakarthik@gmail.com">aaruthrakarthik@gmail.com</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span style={{color:'white'}} className="ph">9865343636, 9659597788</span>  
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <a style={{color:'white'}} href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-links">
              <h2>Follow Us</h2>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="quote">
              <p>&ldquo;Quality is our priority.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Aaruthra Interiors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
