import React, { useRef, useState ,useEffect } from 'react';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import 'react-multi-carousel/lib/styles.css';
import Button from '@mui/material/Button';
import aboutImage from '../Asserts/about.png'; 
import Marquee from 'react-fast-marquee';
import { GiHamburgerMenu } from 'react-icons/gi';
import img1 from "../Asserts/Shop.png";
import img2 from "../Asserts/Mk1.jpg";
import img3 from "../Asserts/H1.jpg";
import img7 from "../Asserts/D1.jpg";
import img6 from "../Asserts/B1.jpg";
import img4 from '../Carousle_content/img4.jpg';
import img5 from '../Carousle_content/img5.jpg';
import "../css/About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";
import "../css/Servicepage.css";
import Product from '../Components/products';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

<meta name="viewport" content="width=device-width" />
const Home = () => {

  const [text, setText] = useState('');
  const fullText = "Do not hesitate to say Hello!";
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleMenuClick = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const handleChange = (index) => {
    setCurrentSlide(index);
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


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true,
    beforeChange: (current, next) => handleChange(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='home-container'>
    <nav className="home-main-nav">
    <div className="home-logo">
      <h1 className="home-logoTxt">Aaruthra Interiors</h1>
    </div>
    <div className={showMediaIcons ? "home-menu-link home-mobile-menu-link" : "home-menu-link"}>
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
      <div className="hamburger-menu" style={{marginRight:'1vh'}}>
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
      
      <div className='app12'>
        <Slider ref={sliderRef} {...settings} className="slider1">
          <div>
            <img src={img4} alt="Image 2" className={currentSlide === 0 ? 'active' : ''} />
          </div>
          <div>
            <img src={img5} alt="Image 3" className={currentSlide === 1 ? 'active' : ''} />
          </div>
        </Slider>
      </div>
      
      <div className="homecon">
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-title">
              <h1>Elevate Your</h1>
              <h1>Interiors</h1>
            </div>
            <div className="section-title1">
              <h1>Designing Interiors That Leave a Lasting Impression</h1>
            </div>
            <div className="services-menu">
              <ul>
                <li>+<span>Consultation</span></li>
                <li>+<span>Space Planning</span></li>
                <li>+<span>Concept Development</span></li>
                <li>+<span>Design Development</span></li>
                <li>+<span>Project Management</span></li>
                <li>+<span>Furniture Selection</span></li>
                <li>+<span>Procurement</span></li>
                <li>+<span>Lighting Design</span></li>
                <li>+<span>Custom Design Elements</span></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
      <div className='homecom2'>
        <div className="tagline" style={{ fontSize: '0px' }}>
          <h1>~Building Relationships, One Conversation at a Time</h1>
        </div>
        <div className="infinity-trans12">
          <div className="hom-fixed-grid-container1">
            <Marquee>Interior Design&nbsp;&nbsp;Modern Structures&nbsp;&nbsp;Modern Design&nbsp;&nbsp;Decoration</Marquee>
          </div>
        </div>
      </div>
      
      <div className="container-abt">
        <div className="title2">
          <h1>About Us</h1>
        </div>
        <div className="hometagline">
          <h1>~Where Imagination Meets Interiors</h1>
        </div>
        <div className="carousle_container small-carousel">
          <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={2500} showThumbs={false} className="custom-carousel">
            <div><img src={img1} alt="Carousel 2" className="carousel-image" /></div>
            <div><img src={img2} alt="Carousel 3" className="carousel-image" /></div>
            <div><img src={img3} alt="Carousel 4" className="carousel-image" /></div>
            <div><img src={img6} alt="Carousel 2" className="carousel-image" /></div>
            <div><img src={img7} alt="Carousel 3" className="carousel-image" /></div>
          </Carousel>
        </div>
        <div className="about-content1">
          <div className="text">
            <p>
              Aaruthra Interior Work was established in 2011 and has successfully completed almost 13 years in interior works. We specialize in various types of interior works including residential, commercial shops, showrooms, and office spaces. Our team is known for being prompt and delivering services on time. We have a dedicated workforce of 20 skilled members. Our showroom is located in Erode. Over the years, we have built a reputation for excellence in interior design and execution. Our clients appreciate our attention to detail and commitment to quality. We strive to create aesthetically pleasing and functional spaces. If you have any interior design needs, please contact us. Our showroom is at No. 136, Nasiyanur Main Road, Veerappampalayam Privu, Erode - 638107.
            </p>
          </div>
        </div>
      </div>
      <div className='homecom3'>
      <div className="title2">
      <h2>Our Products</h2>
      </div>
      <Product />
      </div>
      <div className='hometagline1'>
      "Discover Our Passion for Creating Timeless and Innovative Designs"
      </div>
      <div className="homecontent">
      </div>
      
      <div className='minibox'>
      <p> We believe that good design should not only be aesthetically pleasing,
          but also functional and environmentally responsible.
          Our approach to architecture is 
          rooted in a deep understanding of our clients needs and the context in which we are designing.
          We work closely with our clients throughout the entire design process to ensure that their vision is 
          realized and that their space is both beautiful and practical.
          We believe that good design should not only be aesthetically pleasing .
          but also functional and environmentally responsible.
          Our approach to architecture is rooted in a deep understanding of our clients 
          needs and the context in which we are designing. 
          We work closely with our clients throughout the entire design process to 
          ensure that their vision is realized and that their space is both beautiful and practical.</p>

      </div>
      <div className="home-slider"> 
      <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
      </div>
      <div className="title12">
      <h1>Get In Touch</h1>
      </div>
      <div className="tagline12">
        <h1>~Building Relationships, One Conversation at a Time</h1>
      </div>
      <br></br>
      <div className="hom-infinity-trans">
        <div className="hom-fixed-grid-container" style={{marginTop:'-10px'}}>
        <h2>Have a project in mind?</h2>
        </div>  
          <div className="hom-Typerwritter">
          {text}
          </div>
          <br></br>
         <a href="/contact" className="contact-btn">
              <Button variant="outlined" 
              style={{ borderColor: "white", color: "white",fontSize:'20px', fontWeight:'bold',
              marginTop:'25 px',marginBottom:'10px',padding:'10px',borderRadius:'10px',marginLeft:'-20px'
            }}>Contact Us</Button>
            </a>
        </div>
        </div>

  );
};

export default Home;
