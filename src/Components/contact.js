import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '@mui/material/Button';
import '../css/ContactForm.css';
import '../css/contact.css';
import aboutImage from '../Asserts/about.png';

const ContactForm = () => {
  const [text, setText] = useState('');
  const fullText = "Do not hesitate to say Hello!";
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

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

  const handleMenuClick = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6lub8b', 'template_d5db06w', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('ERROR');
      });
  };

  return (
    <div className="home-container">
      <div className="con-img">
      <nav className="home-main-nav">
      <div className="home-logo">
        <h1 className="home-logoTxt">Aaruthra Interiors</h1>
      </div>
      <div className={showMediaIcons ? "con-menu-link con-mobile-menu-link" : "con-menu-link"}>
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
        <div className="hamburger-menu">
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
      <div className="contact-form-container">
        <div className="contact-form-info">
          <h2>Contact Us</h2>
          <p>Show Room - No. 136, Nasiyanur Main Road, Veerappampalayam Privu, Erode - 638107.</p>
        </div>
        <div className="contact-form">
          <img src={aboutImage} alt="About Us" style={{ marginTop: '-10vh', height: '60px' }} />
          <h4 className="brandText" style={{ fontSize: '40px' }}>Aaruthra Interiors</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <Button variant="contained" color="primary" type="submit">Send Message</Button>
            {status === 'SUCCESS' && <p className="success-message">Message sent successfully!</p>}
            {status === 'ERROR' && <p className="error-message">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>

      <div className="tagline" style={{ marginTop: '50px', marginLeft: '10vh' }}>
        <h1>~Building Relationships, One Conversation at a Time</h1>
      </div>
    </div>
  );
};

export default ContactForm;
