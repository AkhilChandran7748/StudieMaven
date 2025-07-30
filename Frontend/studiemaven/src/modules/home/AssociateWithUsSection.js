import React, { useState, useRef, useEffect } from "react";
import "./AssociateWithUsSection.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import universityLogo1 from "../../assets/university-logos/1.jpg";
import universityLogo2 from "../../assets/university-logos/2.jpg";
import universityLogo3 from "../../assets/university-logos/3.jpg";
import universityLogo4 from "../../assets/university-logos/4.jpg";
import universityLogo5 from "../../assets/university-logos/5.jpg";
import universityLogo6 from "../../assets/university-logos/6.jpg";
import universityLogo7 from "../../assets/university-logos/7.jpg";
import universityLogo8 from "../../assets/university-logos/8.jpg";
import universityLogo9 from "../../assets/university-logos/9.jpg";
import universityLogo10 from "../../assets/university-logos/10.jpg";

const universityLogos = [
  universityLogo1, universityLogo2, universityLogo3, universityLogo4, universityLogo5,
  universityLogo6, universityLogo7, universityLogo8, universityLogo9, universityLogo10
];

const AUTOPLAY_DELAY = 2800;

const itemVariants = {
  initial: { opacity: 0, scale: 0.8, y: 30 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.48, ease: [0.22, 1, 0.36, 1] }
  }),
  exit: { opacity: 0, scale: 0.8, y: 30, transition: { duration: 0.25 } }
};

function useResponsiveLogosToShow() {
  const [logosToShow, setLogosToShow] = useState(getLogosCount(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setLogosToShow(getLogosCount(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return logosToShow;
}

function getLogosCount(width) {
  if (width <= 600) return 1;        // Mobile
  if (width <= 900) return 3;        // Tablet
  return 5;                          // Desktop
}

const LogoSlider = () => {
  const logosToShow = useResponsiveLogosToShow();
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef();

  const total = universityLogos.length;
  const getIdx = (idx) => (idx + total) % total;
  const visibleLogos = Array.from({ length: logosToShow }, (_, i) => universityLogos[getIdx(startIdx + i)]);

  const handlePrev = () => {
    setDirection(-1);
    setStartIdx((prev) => getIdx(prev - 1));
    resetAutoplay();
  };

  const handleNext = () => {
    setDirection(1);
    setStartIdx((prev) => getIdx(prev + 1));
    resetAutoplay();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line
  }, []);


  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setStartIdx((prev) => getIdx(prev + 1));
    }, AUTOPLAY_DELAY);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };

  }, [logosToShow]);

  return (
    <div className="logo-slider-wrap">
      <button className="logo-slider-arrow left" onClick={handlePrev} aria-label="Previous universities">
        <IoIosArrowBack />
      </button>
      <div className="logo-slider-track">
        <div className="logo-slider-items">
          {visibleLogos.map((logo, i) => (
            <motion.div
              className="logo-slider-item"
              key={logo + startIdx}
              custom={i}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img
                src={logo}
                alt={`University logo ${i + 1}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <button className="logo-slider-arrow right" onClick={handleNext} aria-label="Next universities">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

const AssociateWithUsSection = ({ id }) => {

  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="containerWrapper" id={id}>
      <Container className="associate-section">
        <div className="associate-section-content text-center">
          <div className="associate-section-badge">Our Networks</div>
          <h2 className="associate-section-title">Partner With Us</h2>
          {/* <LogoSlider /> */}
          <Row>
            <Col xs={12} className="text-center">
              <p className="associate-section-desc">
                At Studiemaven Study Abroad, we don’t just guide students toward international education, we walk with them, every step of the way. Now, we’re extending that same spirit of trust and collaboration to those who want to grow with us.<br /><br />
                If you’re a freelancer, sub-agent, study abroad consultant, language training centre, or an educational institution looking to expand your reach and income potential, we welcome you to partner with us. Through our exclusive Sub-Agent Program, you can become a part of a student-first consultancy that’s built on 15+ years of integrity, success, and heartfelt service.<br /><br />
                We believe in transparent processes, fair opportunities, and mutual growth. As a Studiemaven partner, you’ll have the chance to connect aspiring students to top ranked global universities across countries. With access to our expert team and proven systems, you can confidently support students while earning a steady income for every successful referral.<br /><br />
                What makes our partnership different? It’s the values we live by: honesty, empathy, and commitment. We treat every student like family, and we treat every partner like a vital part of our journey. You won’t find inflated promises or hidden agendas here, just a shared mission to change lives through education.<br /><br />
                If you believe in doing things the right way, with heart, transparency, and impact we’d love to welcome you into the Studiemaven family.
              </p>
              <Link to="/contact" className="btn-secondary-cta btn-center">
                Contact Us
                <span className="secondary-btn-arrow">
                  <FaArrowRight />
                </span>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AssociateWithUsSection;