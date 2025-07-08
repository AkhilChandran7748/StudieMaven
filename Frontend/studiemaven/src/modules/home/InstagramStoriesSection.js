import React from "react";
import Slider from "react-slick";
import "./InstagramStoriesSection.scss";
import Container from 'react-bootstrap/Container';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSend } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import insta1 from "../../assets/service-bg6.jpg";
import insta2 from "../../assets/service-bg6.jpg";
import insta3 from "../../assets/service-bg9.jpg";
import insta4 from "../../assets/service-bg2.jpg";

const instagramStories = [
  {
    id: 1,
    image: insta1,
    user: "Notino",
    caption: "",
  },
  {
    id: 2,
    image: insta2,
    user: "Notino",
    caption: "The value of Studying Abroad",
  },
  {
    id: 3,
    image: insta3,
    user: "Notino",
    caption: "Study Abroad\nMake your dream become your reality, with help from our expert advisors",
  },
  {
    id: 4,
    image: insta4,
    user: "Notino",
    caption: "",
  },
];

const Arrow = ({ className, style, onClick, label }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      background: "transparent",
      color: "#e1306c",
      fontWeight: 700,
      fontSize: 16,
      top: "-55px",
      zIndex: 1,
      right: label === "Next" ? 0 : "60px",
      left: label === "Prev" ? 0 : undefined,
      width: "fit-content",
      cursor: "pointer",
      boxShadow: "none",
      border: "none",
    }}
    onClick={onClick}
  >
    {label}
  </div>
);

const InstagramStoriesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow label="NEXT" />,
    prevArrow: <Arrow label="PREV" />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="instagram-stories-section">
        <Container>
      <div className="insta-header-row">
        <div className="insta-title-wrap">
          <span className="insta-pill">Instagram</span>
          <span className="insta-main-title">
            Take a look our <span className="insta-highlight">Instagram</span> stories
          </span>
        </div>
    
      </div>
      <Slider {...settings} className="insta-cards-slider">
        {instagramStories.map((story, idx) => (
          <div key={story.id} className="insta-card">
            <div className="insta-card-header">
              <span className="insta-card-user">{story.user}</span>
              <span className="insta-card-dots">•••</span>
            </div>
            <div className="insta-card-imgwrap">
              <img src={story.image} alt="Story" className="insta-card-img" />
            </div>
         
            <div className="insta-card-footer">

              <span className="insta-icon"><FaRegHeart /></span>
              <span className="insta-icon"><FaRegComment /></span>
              <span className="insta-icon"><BsSend /></span>
            </div>
          </div>
        ))}
      </Slider>
      </Container>
    </section>
  );
}


export default  InstagramStoriesSection;