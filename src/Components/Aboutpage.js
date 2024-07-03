  import React,{ useEffect, useState } from "react";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; 
  import 'react-multi-carousel/lib/styles.css';
  import { Carousel } from "react-responsive-carousel";
  import '../css/Aboutpage.css';
  import aboutImage from '../Asserts/about.png'; 
  import { GiHamburgerMenu } from "react-icons/gi";
  import img2 from '../Carousle_content/img11.jpg';
  import img3 from '../Carousle_content/img3.jpg';
  import img4 from '../Carousle_content/img2.jpg';
  import Button from '@mui/material/Button';


  const AboutSection = () => {
    
    const [showMediaIcons, setShowMediaIcons] = React.useState(false);
    const [text, setText] = useState('');
    const fullText = "Do not hesitate to say Hello!";
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
      <div className="home-container">
      <div className="serv-img">
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
        <div className="container-abt">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="tagline">
            <h1>~Where Imagination Meets Interiors</h1>
          </div>
          <div className="carousle_container small-carousel">
          <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={2500} showThumbs={false} className="custom-carousel">
          <div><img src={img2} alt="Carousel 2" className="carousel-image" /></div>
              <div><img src={img3} alt="Carousel 3" className="carousel-image" /></div>
              <div><img src={img4} alt="Carousel 4" className="carousel-image" /></div>
            </Carousel>
          </div>

          <div className="about-content">
            <div className="text">
              <p>
                Aaruthra Interior Work was established in 2011 and has successfully completed almost 13 years in interior works. We specialize in various types of interior works including residential, commercial shops, showrooms, and office spaces.
                Our team is known for being prompt and delivering services on time. We have a dedicated workforce of 20 skilled members. Our showroom is located in Erode.
                Over the years, we have built a reputation for excellence in interior design and execution. Our clients appreciate our attention to detail and commitment to quality. We strive to create aesthetically pleasing and functional spaces.
                If you have any interior design needs, please contact us. Our showroom is at No. 136, Nasiyanur Main Road, Veerappampalayam Privu, Erode - 638107.
              </p>
            </div>
            <div className="projects-timeline">
            <h2>Our Projects</h2>
            <div className="timeline">
            <div className="timeline-item">
              <h3>Residential Luxury Apartment</h3>
              <p>
                Completed in 2022, this project involved the interior design of a high-end apartment in the city center. The design focused on modern aesthetics with an emphasis on luxury and comfort. Key features included bespoke furniture, high-quality materials, and advanced lighting solutions.
              </p>
            </div>
            <div className="timeline-item">
              <h3>Corporate Office Space</h3>
              <p>
                This project, completed in 2021, transformed a traditional office space into a contemporary and vibrant work environment. The design incorporated open-plan workspaces, collaborative zones, and ergonomic furniture to enhance productivity and employee well-being.
              </p>
            </div>
            <div className="timeline-item">
            <h3>Retail Showroom</h3>
              <p>
                In 2020, we completed the interior design for a flagship retail showroom for a well-known fashion brand. The project emphasized creating an inviting and immersive shopping experience, featuring custom display units, ambient lighting, and stylish decor.
                </p>
            </div>
            <div className="timeline-item">
            <h3>Modern Kitchen Renovation</h3>
            <p>
            Completed in 2019, this kitchen renovation project focused on creating a functional yet aesthetically pleasing space. The design included high-end appliances, smart storage solutions, and a sleek, modern look with a touch of elegance.
              </p>
              </div>
            <div className="timeline-item">
            <h3>Luxury Hotel Suite</h3>
            <p>
            In 2018, we designed a luxury hotel suite that combined comfort with sophistication. The suite featured a cohesive design theme with plush furnishings, rich textures, and state-of-the-art amenities, providing guests with a lavish experience.
            </p>
            </div>
            </div>
        </div>
        
        <div className="showcase-section">
        <h2>Showcase</h2>
        <div className="showcase-content">
          <div className="showcase-item animate__animated animate__fadeInLeft">
            <img src={img2} alt="Showcase 1" />
            <p>
            <strong>Elegant Living Room</strong><br />
            This living room design showcases a perfect blend of modern and classic elements. The use of neutral tones, luxurious fabrics, and statement lighting creates an inviting and sophisticated space.
            </p>
          </div>
          <div className="showcase-item animate__animated animate__fadeInRight">
          <img src={img3} alt="Showcase 2" />
          <p>
          <strong>Minimalist Kitchen</strong><br />
              A minimalist kitchen featuring sleek cabinetry, a clean color palette, and high-end appliances. The design emphasizes functionality while maintaining a contemporary aesthetic.
              </p>
              </div>
              <div className="showcase-item animate__animated animate__fadeInLeft">
              <img src={img4} alt="Showcase 3" />
              <p>
              <strong>Luxury Bedroom</strong><br />
              This luxury bedroom design incorporates rich textures, elegant furnishings, and ambient lighting to create a serene and opulent retreat. The use of soft, warm colors adds to the comfort and relaxation.
            </p>
            </div>
            <div className="showcase-item animate__animated animate__fadeInLeft">
            <img src={img2} alt="Showcase 4" />
            <p>
            <strong>Contemporary Office</strong><br />
              A contemporary office space designed to boost productivity and creativity. The open layout, ergonomic furniture, and vibrant decor elements create an inspiring work environment.
              </p>
              </div>
          <div className="showcase-item animate__animated animate__fadeInRight">
          <img src={img3} alt="Showcase 5" />
            <p>
            <strong>Modern Bathroom</strong><br />
              This modern bathroom features clean lines, high-quality materials, and a monochromatic color scheme. The design includes a spacious shower area, a sleek vanity, and elegant fixtures.
            </p>
          </div>
          <div className="showcase-item animate__animated animate__fadeInLeft">
            <img src={img4} alt="Showcase 6" />
            <p>
              <strong>Chic Dining Room</strong><br />
              A chic dining room designed for both functionality and style. The space includes a statement dining table, stylish chairs, and sophisticated lighting to create a perfect setting for dining experiences.
            </p>
          </div>
        </div>
        </div>
        
        
      <div className="about-image">
      <img src={aboutImage} alt="About Us" />
      </div>
      <h1 className="brandText">Aaruthra Interiors</h1>
      </div>
      </div>
      <div className="title1">
      <h1>Get In Touch</h1>
      </div>
      <div className="tagline">
        <h1>~Building Relationships, One Conversation at a Time</h1>
      </div>
      <br></br>
      <div className="infinity-trans">
        <div className="fixed-grid-container">
        <h2>Have a project in mind?</h2>
        </div>  
          <div className="Typerwritter">
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

  export default AboutSection;
