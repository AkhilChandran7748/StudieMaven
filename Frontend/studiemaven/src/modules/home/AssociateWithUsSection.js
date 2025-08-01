import React, { useRef, useEffect, useState } from "react";
import "./AssociateWithUsSection.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Image imports
import AnimCharacterOne from '../../assets/anim-character1.png';
import AnimCharacterTwo from '../../assets/anim-character2.png';
import AnimCircleFront  from '../../assets/anim-circle1.png'; 
import AnimCircleMiddle  from '../../assets/anim-circle2.png'; 
import AnimCircleBack  from '../../assets/anim-circle3.png'; 
import AnimTextbox1 from '../../assets/anim-textbox1.png';
import AnimTextbox2 from '../../assets/anim-textbox2.png';
import AnimTextbox3 from '../../assets/anim-textbox3.png';
import AnimTextbox4 from '../../assets/anim-textbox4.png';
import AnimTextbox5 from '../../assets/anim-textbox5.png';
import AnimTextbox6 from '../../assets/anim-textbox6.png';
import AnimTextbox7 from '../../assets/anim-textbox7.png';
import AnimTextbox8 from '../../assets/anim-textbox8.png';

// Animation variants based on AboutUsPage style
const circleVariants = {
  initial: { opacity: 0, scale: 0.88, filter: "blur(14px)" },
  animate: custom => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.1 + custom * 0.11,
      duration: 0.9,
      type: "spring",
      stiffness: 120,
      damping: 19
    }
  })
};

const characterVariants = {
  initial: custom => ({
    opacity: 0,
    y: 60 + custom * 10,
    scale: 0.88,
    filter: "blur(15px)",
  }),
  animate: custom => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.33 + custom * 0.12,
      duration: 0.9,
      type: "spring",
      stiffness: 120,
      damping: 19
    }
  })
};

const textboxVariants = {
  initial: custom => ({
    opacity: 0,
    y: 38 + custom * 5,
    scale: 0.92,
    filter: "blur(14px)",
  }),
  animate: custom => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.6 + custom * 0.09,
      duration: 0.7,
      type: "spring",
      stiffness: 120,
      damping: 17
    }
  })
};

export default function AssociateWithUsSection({ id }) {
  const textboxes = [
    { src: AnimTextbox1, alt: "Guiding Students In Every Step" },
    { src: AnimTextbox2, alt: "Welcoming All Partner Types" },
    { src: AnimTextbox3, alt: "Sub-Agent Program" },
    { src: AnimTextbox4, alt: "Transparency & Fairness" },
    { src: AnimTextbox5, alt: "Mutual Growth" },
    { src: AnimTextbox6, alt: "Access to Global Universities" },
    { src: AnimTextbox7, alt: "Changing Lives Through Education" },
    { src: AnimTextbox8, alt: "Support System & Tools" }
  ];

  // In-view animation trigger
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!inView && wrapperRef.current) {
      const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setInView(true);
      }, { threshold: 0.18 });
      observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }
  }, [inView]);

  return (
    <div className="containerWrapper" id={id}>
      <Container className="associate-section">
        <div className="imageWrapper" ref={wrapperRef}>
          {/* Animated Circles */}
          <motion.img
            src={AnimCircleBack}
            alt="Circle Back"
            className="circleBack"
            custom={0}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={circleVariants}
            style={{ zIndex: 0 }}
          />
          <motion.img
            src={AnimCircleMiddle}
            alt="Circle Middle"
            className="circleMiddle"
            custom={1}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={circleVariants}
            style={{ zIndex: 9, position: "absolute" }}
          />
          <motion.img
            src={AnimCircleFront}
            alt="Circle Front"
            className="circleFront"
            custom={2}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={circleVariants}
            style={{ zIndex: 99, position: "absolute" }}
          />
          {/* Animated Characters */}
          <motion.img
            src={AnimCharacterOne}
            alt="Student One"
            className="characterOne"
            custom={0}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={characterVariants}
            style={{ zIndex: 999 }}
          />
          <motion.img
            src={AnimCharacterTwo}
            alt="Student Two"
            className="characterTwo"
            custom={1}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={characterVariants}
            style={{ zIndex: 999 }}
          />
          {/* Animated Textboxes with stagger */}
          {textboxes.map((tb, i) => (
            <motion.img
              key={tb.alt}
              src={tb.src}
              alt={tb.alt}
              className={`textbox${i+1}`}
              custom={i}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={textboxVariants}
              style={{ zIndex: i === 0 ? 999 : 9 }}
            />
          ))}
        </div>
        <div className="associate-section-content text-center">
          <div className="associate-section-badge">Our Networks</div>
          <h2 className="associate-section-title">Partner With Us</h2>
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
}