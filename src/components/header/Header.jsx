import React from "react";
import "./header.css";
import Hire from "./Hire";
import header from "../../Assets/head.jpeg";
import header2 from "../../Assets/head2.jpeg";
import header3 from "../../Assets/head3.jpeg";
import header4 from "../../Assets/head4.jpeg";
import header5 from "../../Assets/head5.jpeg";
import header6 from "../../Assets/head6.jpeg";
import header7 from "../../Assets/head7.jpeg";
import header8 from "../../Assets/head8.jpeg";
import header9 from "../../Assets/head9.jpeg";
import header10 from "../../Assets/head10.jpeg";
import header11 from "../../Assets/head11.jpeg";
import header12 from "../../Assets/head12.jpeg";
import header13 from "../../Assets/head13.jpeg";
import header14 from "../../Assets/head14.jpeg";
import header15 from "../../Assets/head15.jpeg";
import header16 from "../../Assets/head16.jpeg";
import HeaderSocial from "./HeaderSocial";
//import Swiper core and required modules;
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//Import Swiper styles;
import "swiper/css";
import "swiper/css/navigation";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h5>Hello I'm</h5>
          <h1>Edouard Biwoule</h1>
          <h5 className="text-light">Web Design/Frontend/React Developer</h5>
          <h5>My Website</h5>
          <a href="#portfolio">
            <h2 className="portfolio">PORTFOLIO</h2>
          </a>
          <HeaderSocial />
          <Hire />
          <a href="#contact" className="scroll_down">
            scroll down
          </a>
        </div>
        <Swiper
          className="me"
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide key={1}>
            <img src={header} alt="me" />
            <h3>Building digital product businesses</h3>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <img src={header2} alt="me" />
            <h3>Developing mobile application</h3>
          </SwiperSlide>
          <SwiperSlide key={3}>
            <img src={header3} alt="me" />
            <h3>Android and ios versions</h3>
          </SwiperSlide>
          <SwiperSlide key={4}>
            <img src={header4} alt="me" />
            <h3>Deploying and managing your app on cloud</h3>
          </SwiperSlide>
          <SwiperSlide key={5}>
            <img src={header5} alt="me" />
            <h3>Securing and protecting your data</h3>
          </SwiperSlide>
          <SwiperSlide key={6}>
            <img src={header6} alt="me" />
            <h3>We build it according to your need and requirement</h3>
          </SwiperSlide>
          <SwiperSlide key={7}>
            <img src={header7} alt="me" />
            <h3>Dynamic and professional team</h3>
          </SwiperSlide>
          <SwiperSlide key={8}>
            <img src={header8} alt="me" />
            <h3>Implementing new technologies and innovation on your app</h3>
          </SwiperSlide>
          <SwiperSlide key={9}>
            <img src={header9} alt="me" />
            <h3>We do not just build your app, we coach our clients</h3>
          </SwiperSlide>
          <SwiperSlide key={10}>
            <img src={header10} alt="me" />
            <h3>We commit to satisfy you</h3>
          </SwiperSlide>
          <SwiperSlide key={11}>
            <img src={header11} alt="me" />
            <h3>Implementing new feature or updating the existing</h3>
          </SwiperSlide>
          <SwiperSlide key={12}>
            <img src={header12} alt="me" />
            <h3>We provide you our best design catalog</h3>
          </SwiperSlide>
          <SwiperSlide key={13}>
            <img src={header13} alt="me" />
            <h3>Building from scratch to meet your demand</h3>
          </SwiperSlide>
          <SwiperSlide key={14}>
            <img src={header14} alt="me" />
            <h3>Deployment and managing your website on the net</h3>
          </SwiperSlide>
          <SwiperSlide key={15}>
            <img src={header15} alt="me" />
            <h3>Take your business to another level</h3>
          </SwiperSlide>
          <SwiperSlide key={16}>
            <img src={header16} alt="me" />
            <h3></h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
}

export default Header;
