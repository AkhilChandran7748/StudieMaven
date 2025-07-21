import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
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
  const [bannerHeight, setBannerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setBannerHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    setBannerHeight(window.innerHeight);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="heroSlider" style={{ height: bannerHeight }}>
      <Carousel fade className="hc-banner" style={{ height: "100%" }}>
        <Carousel.Item className="hc-banner" style={{ height: bannerHeight }}>
          <div className="animated-group-root" style={{ height: "100%" }}>    
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
      <motion.div
        className="whatsappLink"
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.button
          className="btn-whatsapp-cta"
          onClick={() => setShowWhatsappModal(true)}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 16, delay: 1.3 }}
        >
          <svg width="178" height="179" viewBox="0 0 178 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M129.93 107.093C127.724 105.99 116.882 100.656 114.86 99.9208C112.839 99.1853 111.369 98.8173 109.899 101.024C108.429 103.231 104.203 108.197 102.916 109.668C101.63 111.139 100.344 111.324 98.1385 110.22C95.9332 109.117 88.8277 106.789 80.4046 99.2777C73.8489 93.4326 69.423 86.2126 68.1364 84.0056C66.8502 81.7986 67.9995 80.6057 69.1038 79.5064C70.0954 78.5191 71.3087 76.9319 72.4113 75.6444C73.514 74.3569 73.8815 73.4374 74.6166 71.9664C75.3517 70.4949 74.9842 69.2074 74.4326 68.1039C73.8815 67.0004 69.4714 56.1495 67.6336 51.7355C65.8438 47.4368 64.0255 48.0185 62.6719 47.951C61.387 47.887 59.9155 47.8735 58.4453 47.8735C56.9751 47.8735 54.5863 48.4254 52.5645 50.632C50.5432 52.839 44.8464 58.1729 44.8464 69.0234C44.8464 79.8744 52.7485 90.3574 53.8512 91.8288C54.9538 93.3003 69.4014 115.568 91.523 125.117C96.7844 127.388 100.892 128.744 104.095 129.761C109.378 131.438 114.185 131.202 117.985 130.634C122.222 130.001 131.032 125.301 132.87 120.151C134.707 115.002 134.707 110.588 134.156 109.668C133.605 108.749 132.135 108.197 129.93 107.093ZM89.692 162.015H89.6624C76.4993 162.01 63.5889 158.476 52.3263 151.794L49.6475 150.204L21.8838 157.485L29.2945 130.424L27.55 127.65C20.2071 115.974 16.329 102.479 16.3345 88.6231C16.3506 48.1902 49.2583 15.2952 89.7213 15.2952C109.315 15.3028 127.733 22.9408 141.583 36.8017C155.432 50.6629 163.056 69.0879 163.048 88.6824C163.031 129.118 130.124 162.015 89.692 162.015ZM152.124 26.2691C135.461 9.59203 113.301 0.403305 89.6912 0.393982C41.045 0.393982 1.4528 39.971 1.4333 88.6175C1.42694 104.168 5.49075 119.347 13.2139 132.726L0.693115 178.447L47.4799 166.178C60.3708 173.207 74.8845 176.911 89.656 176.917H89.692H89.6925C138.334 176.917 177.93 137.335 177.95 88.6879C177.958 65.1131 168.787 42.9457 152.124 26.2691Z" fill="white"/>
          </svg>
          Whatsapp <span>Now</span>
        </motion.button>
        <motion.span
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <b>24x7 </b>Support
        </motion.span>
      </motion.div>
      <WhatsappPopupModal
        open={showWhatsappModal}
        onClose={() => setShowWhatsappModal(false)}
      />
    </div>
  );
};

export default HeroCarousel;