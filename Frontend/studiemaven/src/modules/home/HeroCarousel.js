import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AnimatedText from './AnimatedTextOne';
import WhatsappPopupModal from "./WhatsappPopupModal";
import { motion } from "framer-motion";
import "./AnimatedGroup.scss";
import bgGreen from "../../assets/slider-pic-bg_comp1.png";
import bgRed from "../../assets/slider-pic-bg_comp2.png";
import bgYellow from "../../assets/slider-pic-bg_comp3.png";
import bgRedTwo from "../../assets/slider-pic-bg_comp4.png";
import bgGrey from "../../assets/slider-pic-bg_comp5.png";
import bgYellowTwo from "../../assets/slider-pic-bg_comp6.png";
import bgGreyTwo from "../../assets/slider-pic-bg_comp7.png";
import bgLine1 from "../../assets/slider-pic-bg_comp8.png";
import bgLine2 from "../../assets/slider-pic-bg_comp9.png";
import personLeft from "../../assets/slider-left-men.png";
import personMiddle from "../../assets/slider-middle-men.png";
import personRight from "../../assets/slider-right-girl.png";

const vectorVariants = {
  initial: (custom) => ({
    rotate: custom.startRot,
    scale: .5,
    opacity: 0,
    y: custom.startY,
    x: custom.startX,
    filter: "blur(18px)",
  }),
  animate: (custom) => ({
    rotate: 0,
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.22, 1, 0.36, 1],
      type: "tween",
    },
  }),
};

const personVariants = {
  initial: (custom) => ({
    opacity: 0,
    y: 80,
    scale: 0.92,
    filter: "blur(8px)",
  }),
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      delay: custom.delay,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
  hover: {
    scale: 1.05,
    y: -8,
    boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};

const HeroCarousel = () => {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="heroSlider">
      <Carousel fade className="vh-100">
        {/* Slide 1 */}
        <Carousel.Item className="vh-100">
          <div className="animated-group-root">
            {/* --- Animated Background Vectors --- */}
            <motion.img
              src={bgGreen}
              className="bg-shape bg-green"
              alt=""
              custom={{
                startRot: -100,
                startY: -120,
                startX: -80,
                delay: 0.05,
                duration: 1.1,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "60% 55%" }}
            />
            <motion.img
              src={bgRed}
              className="bg-shape bg-red"
              alt=""
              custom={{
                startRot: 70,
                startY: -40,
                startX: 40,
                delay: 0.17,
                duration: 1.1,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "40% 20%" }}
            />
            <motion.img
              src={bgYellow}
              className="bg-shape bg-yellow"
              alt=""
              custom={{
                startRot: -110,
                startY: 60,
                startX: -70,
                delay: 0.22,
                duration: 1.2,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "30% 80%" }}
            />
            <motion.img
              src={bgRedTwo}
              className="bg-shape bg-redtwo"
              alt=""
              custom={{
                startRot: -120,
                startY: -60,
                startX: -80,
                delay: 0.29,
                duration: 1.1,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "70% 80%" }}
            />
            <motion.img
              src={bgGrey}
              className="bg-shape bg-grey"
              alt=""
              custom={{
                startRot: 100,
                startY: -30,
                startX: 100,
                delay: 0.36,
                duration: 1.15,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "85% 35%" }}
            />
            <motion.img
              src={bgYellowTwo}
              className="bg-shape bg-yellowtwo"
              alt=""
              custom={{
                startRot: 30,
                startY: 30,
                startX: -30,
                delay: 0.43,
                duration: 1.22,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "15% 90%" }}
            />
            <motion.img
              src={bgGreyTwo}
              className="bg-shape bg-greyTwo"
              alt=""
              custom={{
                startRot: 90,
                startY: 50,
                startX: 60,
                delay: 0.51,
                duration: 1.18,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "80% 90%" }}
            />
            <motion.img
              src={bgLine1}
              className="bg-shape bg-line1"
              alt=""
              custom={{
                startRot: -60,
                startY: -30,
                startX: 0,
                delay: 0.61,
                duration: 1.18,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "50% 10%" }}
            />
            <motion.img
              src={bgLine2}
              className="bg-shape bg-line2"
              alt=""
              custom={{
                startRot: 80,
                startY: 40,
                startX: 0,
                delay: 0.68,
                duration: 1.15,
              }}
              variants={vectorVariants}
              initial="initial"
              animate="animate"
              style={{ transformOrigin: "90% 20%" }}
            />

            {/* --- Animated People --- */}
            <motion.img
              src={personLeft}
              className="person-img person-left"
              alt=""
              custom={{ delay: 0.65 }}
              variants={personVariants}
              initial="initial"
              animate="animate"
              whileHover=""
            />
            <motion.img
              src={personMiddle}
              className="person-img person-middle"
              alt=""
              custom={{ delay: 0.55 }}
              variants={personVariants}
              initial="initial"
              animate="animate"
              whileHover=""
            />
            <motion.img
              src={personRight}
              className="person-img person-right"
              alt=""
              custom={{ delay: 0.65 }}
              variants={personVariants}
              initial="initial"
              animate="animate"
              whileHover=""
            />
          </div>
          <Carousel.Caption className="sliderCaption">
            {isMobile ? (
              <h1 className="disable-animation">From classrooms to continents.</h1>
            ) : (
              <h1>
                <AnimatedText text="From classrooms to continents." />
              </h1>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="whatsappLink">
        <Button className="btn-whatsapp-cta" onClick={() => setShowWhatsappModal(true)}>
          Contact Us Now
        </Button>
        <span>
          <b>24x7 </b>Support
        </span>
      </div>
      <WhatsappPopupModal
        open={showWhatsappModal}
        onClose={() => setShowWhatsappModal(false)}
      />
    </div>
  );
};

export default HeroCarousel;