/* Global Styles */
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Home Component Styles */
.homecom3 {
  margin-top: 20vh;
}


.homecon {
  margin-top: -50px;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: relative;
}

.about-content1 {
  display: flex;
  margin-left: -7vh;
  flex-direction: column;
  align-items: center;
}

.fixed-grid-container1 {
  font-size: 6vw;
  margin-left: 1vh;
  margin-top: 15vh;
  color: transparent; /* Makes the text transparent */
  -webkit-text-stroke: 1px #ffffff; /* Adds a white outline */
  text-stroke: 1px #ffffff; /* Fallback for non-webkit browsers */
}

.title2 {
  font-size: 4vw;
  border-bottom: 0.1px solid rgb(236, 236, 236);
  border-radius: 10px;
  color: #073842;
  margin-right: 55vw;
  margin-top: -5vh;
}




.swiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 4vw;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-image: url('../Carousle_content/img2.jpg');
  background-size: cover;
}

.swiper-slide:nth-child(2n) {
  background-image: url('../Carousle_content/img3.jpg');
  background-size: cover;
}

.swiper-slide:nth-child(3n) {
  background-image: url('../Carousle_content/img4.jpg');
  background-size: cover;
}

.swiper-slide:nth-child(4n) {
  background-image: url('../Carousle_content/img5.jpg');
  background-size: cover;
}

.swiper-slide:nth-child(5n) {
  background-image: url('../Carousle_content/img6.jpg');
  background-size: cover;
}

.swiper-slide:nth-child(6n) {
  background-image: url('../Carousle_content/img11.jpg');
  background-size: cover;
}

.hometagline {
  font-weight: bold;
  font-size: 1.5vw;
  color: #073842;
  margin-left: -30vw;
  margin-top: -2vh;
}

.homecontent {
  font-size: 4vw;
  color: #073842;
  margin-left: 5vw;
  margin-top: 5vh;
  text-align: justify;
}

.minibox {
  font-size: 2vw;
  text-align: justify;
  color: #073842;
  height: auto;
  width: 90vw;
  margin-left: 5vw;
}

.title12 {
  font-size: 3vw;
  border-bottom: 0.1px solid rgb(236, 236, 236);
  border-radius: 10px;
  color: #073842;
  margin-right: 55vw;
  margin-top: 18vh;
}

.tagline12 {
  font-size: 1vw;
  color: #073842;
  margin-left: 5vw;
  margin-top: 2vh;
}

.hom-fixed-grid-container1 {
  font-size: 10vw;
  margin-left: 1vh;
  margin-top: 15vh;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  text-stroke: 1px #ffffff;
}

.hom-infinity-trans {
  background-image: url('./about_us_page.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 10vh 0;
  height: 60vh;
  position: relative;
}

.hom-fixed-grid-container {
  font-size: 3vw;
  margin-left: 2vh;
  margin-bottom: 5%;
  color: #ffffff;
}

.homecom2 {
  height: 79vh;
  width: 100vw;
  margin-top: -20vh;
  z-index: 100;
  display: block;
  position: relative;
  overflow: hidden;
}

.home-container {
  width: 100vw;
  height: fit-content;
  overflow: hidden;
}

.infinity-trans12 {
  background-image: linear-gradient(180deg, #0A0A0A91 100%, #F2295B00 100%), url('./scrollhome.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 10vh 0;
  height: 70vh;
  width: 100vw;
  position: relative;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  opacity: 0.94;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.hom-Typerwritter {
  color: #e9ecef;
  margin-left: 15vw;
  font-size: 6vw;
  margin-top: -2vh;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  width: fit-content;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

.home-img {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  text-stroke: 1px #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  opacity: 0.94;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  background-image: linear-gradient(180deg, #0A0A0A91 100%, #F2295B00 100%);
}

.app12 {
  margin-top: -13vh;
  width: 100vw;
  height: 110vh;
  display: block;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.slider1 {
  width: 100vw;
  height: 100vh;
}

.slider1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomInOut 15s infinite alternate;
}

@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
}

.home-logoTxt {
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}

.home-menu-link {
  grid-column: 3 / 4;
}

.home-menu-link ul {
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home-menu-link ul li {
  font-size: 1.8rem;
}

.home-menu-link ul li a {
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.5s;
  font-weight: 600;
}

.home-menu-link ul li:hover > a {
  font-weight: bold;
  background-color: #22bad8;
  border-radius: 10px;
  color: rgb(250, 250, 250);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: fillBackground 0.3s forwards;
}

@keyframes fillBackground {
  0% {
    background-color: transparent;
    height: 0;
  }
  100% {
    background-color: #073842;
    height: 100%;
  }
}

.home-main-nav {
  width: 100%;
  height: 9rem;
  display: grid;
  font-size: 1.7rem;
  grid-template-columns: 10rem 3fr 40rem 1fr 1rem;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}

.home-logo {
  display: grid;
  grid-column: 2 / 3;
  justify-content: start;
  align-items: center;
}

.home-logoTxt {
  margin-bottom: 0.5rem;
  margin-left: 1rem;
}

.home-menu-link {
  grid-column: 3 / 4;
}

.home-menu-link ul {
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home-menu-link ul li {
  font-size: 1.8rem;
}

.home-menu-link ul li a {
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.5s;
  font-weight: 600;
}

.home-menu-link ul li:hover > a {
  font-weight: bold;
  background-color: #22bad8;
  border-radius: 10px;
  color: rgb(250, 250, 250);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3
} 

/* Media Queries for Responsive Design */
@media (max-width: 1200px) {
  .fixed-grid-container1 {
    font-size: 5vw;
  }

  .title2, .title12 {
    font-size: 5vw;
    margin-right: 15vw;
  }

  .hometagline, .homecontent, .tagline12, .minibox {
    font-size: 3.5vw;
  }

  .hom-Typerwritter {
    font-size: 5vw;
    margin-left: 10vw;
  }

  .home-menu-link ul li {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .fixed-grid-container1 {
    font-size: 4vw;
  }

  .title2, .title12 {
    font-size: 4.5vw;
    margin-right: 10vw;
  }

  .hometagline, .homecontent, .tagline12, .minibox {
    font-size: 3vw;
  }

  .hom-Typerwritter {
    font-size: 4.5vw;
    margin-left: 5vw;
  }

  .home-menu-link ul li {
    font-size: 1.2rem;
  }

  .home-menu-link ul {
    flex-direction: column;
    align-items: flex-start;
  }

  .home-main-nav {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .home-logo, .home-menu-link {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .fixed-grid-container1 {
    font-size: 3vw;
  }

  .title2, .title12 {
    font-size: 4vw;
    margin-right: 5vw;
  }

  .hometagline, .homecontent, .tagline12, .minibox {
    font-size: 2.5vw;
  }

  .hom-Typerwritter {
    font-size: 4vw;
    margin-left: 2vw;
  }

  .home-menu-link ul li {
    font-size: 1rem;
  }

  .home-menu-link ul {
    flex-direction: column;
    align-items: flex-start;
  }

  .home-main-nav {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .home-logo, .home-menu-link {
    grid-column: 1 / -1;
  }
}


.hometagline1{
  font-weight: bold;
  font-size: 2.5vw;
  color: #073842;
  margin-left: 0vw;
  margin-top: -2vh;
}