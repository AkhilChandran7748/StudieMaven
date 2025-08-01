import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import "./UniversitySlider.scss";

import GermanyUniversityPic from '../../assets/university-pic1.jpg';
import CanadaUniversityPic from '../../assets/university-pic2.jpg';
import UkUniversityPic from '../../assets/university-pic3.jpg';
import LondonUniversityPic from '../../assets/university-pic4.jpg';
import UsUniversityPic from '../../assets/university-pic3.jpg';
import AustraliaUniversityPic from '../../assets/university-pic2.jpg';

const universities = [
  {
    image: GermanyUniversityPic,
    name: "GERMANY",
    code: "DE",
  },
  {
    image: CanadaUniversityPic,
    name: "CANADA",
    code: "CA",
  },
  {
    image: UkUniversityPic,
    name: "UK",
    code: "GB",
  },
  {
    image: LondonUniversityPic,
    name: "ITALY",
    code: "IT", // If IT is not supported, adjust or remove
  },
  {
    image: UsUniversityPic,
    name: "US",
    code: "US", // If US is not supported in tabs, adjust or remove
  },
  {
    image: AustraliaUniversityPic,
    name: "AUSTRALIA",
    code: "AU",
  },
];

const UniversitySlider = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const PrevArrow = ({ onClick, currentSlide }) => (
    <button
      className={`uni-arrow uni-arrow-prev${currentSlide === 0 ? " disabled" : ""}`}
      onClick={onClick}
      aria-label="Previous"
      disabled={currentSlide === 0}
      type="button"
    >
      <span />
    </button>
  );

  const NextArrow = ({ onClick, slideCount, currentSlide }) => (
    <button
      className={`uni-arrow uni-arrow-next${currentSlide === slideCount - 1 ? " disabled" : ""}`}
      onClick={onClick}
      aria-label="Next"
      disabled={currentSlide === slideCount - 1}
      type="button"
    >
      <span />
    </button>
  );

  return (
    <section className="universities-section">
      <div className="bg-vectorOne"></div>
      <div className="container">
        <div className="universities-header">
          <div>
            <h2 className="section-title">
              Tied up with Universities
              <br />
              <span>across various countries</span>
            </h2>
          </div>
          <div className="universities-controls">
            <span
              className={`prev-label${currentSlide === 0 ? " disabled" : ""}`}
              onClick={() => sliderRef.current?.slickPrev()}
            >
              PREV
            </span>
            <span className="uni-progress-bar">
              <span
                className="uni-progress"
                style={{
                  width: `${((currentSlide + 1) / universities.length) * 100}%`
                }}
              />
            </span>
            <span
              className={`next-label${currentSlide >= universities.length - settings.slidesToShow ? " disabled" : ""}`}
              onClick={() => sliderRef.current?.slickNext()}
            >
              NEXT
            </span>
            <a className="view-all-link" href="/universities">
              View all
            </a>
          </div>
        </div>
        <div className="universities-slider-overflow">
          <Slider
            {...settings}
            ref={sliderRef}
            beforeChange={(_, next) => setCurrentSlide(next)}
          >
            {universities.map((u, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900}
                scale={1.06}
                transitionSpeed={650}
                glareEnable={true}
                glareMaxOpacity={0.22}
                glareColor="#ffffff"
                glarePosition="all"
                className="tilt-card"
                onClick={() => u.code && navigate(`/countrytab?tab=${u.code}`)}
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  className="university-card"
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0 16px 48px rgba(28,60,86,0.18)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                >
                  <div className="hover-gradient" />
                  <img src={u.image} alt={u.name} />
                  <div className="card-title">
                    Study in <span>{u.name}</span>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </Slider>
          <PrevArrow
            onClick={() => sliderRef.current?.slickPrev()}
            currentSlide={currentSlide}
          />
          <NextArrow
            onClick={() => sliderRef.current?.slickNext()}
            slideCount={universities.length - settings.slidesToShow + 1}
            currentSlide={currentSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default UniversitySlider;