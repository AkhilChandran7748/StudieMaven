import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./WhyUs.scss";
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import aboutUsImg1 from "../../assets/aboutUsImg1.jpg";
import aboutUsImg2 from "../../assets/aboutUsImg2.jpg";
import aboutUsImg3 from "../../assets/aboutUsImg3.jpg";
import aboutUsImg4 from "../../assets/aboutUsImg4.jpg";

import aboutUsIcon1 from "../../assets/aboutUsIcon1.png";
import aboutUsIcon2 from "../../assets/aboutUsIcon2.png";
import aboutUsIcon3 from "../../assets/aboutUsIcon3.png";
import aboutUsIcon4 from "../../assets/aboutUsIcon4.png";
import aboutUsIcon5 from "../../assets/aboutUsIcon5.png";
import aboutUsIcon6 from "../../assets/aboutUsIcon6.png";    
import { IoHomeOutline } from "react-icons/io5"; 
import Header from '../home/Header';
import Footer from '../home/Footer';

const iconBoxes = [
  { src: aboutUsIcon1, label: "Transparency in action." },
  { src: aboutUsIcon2, label: "Integrity in advice." },
  { src: aboutUsIcon3, label: "Students at the center." },
  { src: aboutUsIcon4, label: "Commitment without compromise." },
  { src: aboutUsIcon5, label: "Trust that’s earned, not claimed." },
];

const itemBoxVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: idx => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: idx * 0.13, duration: 0.5, type: "spring" }
  })
};

const RevealImageBox = ({ src, index }) => (
  <motion.div
    className="gridbox-preview-cell"
    initial={{ scale: 0.7, opacity: 0, filter: "blur(16px)" }}
    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
    transition={{
      duration: 0.85,
      delay: index * 0.22,
      ease: [0.22, 1, 0.36, 1]
    }}
    style={{ overflow: "hidden" }}
  >
    <motion.div
      className="aboutus-image-bg"
      initial={{ scale: 1.18 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 1.1,
        delay: index * 0.22 + 0.18,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  </motion.div>
);

// Locomotive scroll update trigger
function triggerScrollUpdate() {
  window.dispatchEvent(new Event('pingme-scroll-update'));
}

const WhyUsPage = () => {
  const pageRef = useRef(null);

  // Locomotive scroll fix: Observe DOM mutations for dynamic content
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTimeout(triggerScrollUpdate, 100);
    });
    if (pageRef.current) {
      observer.observe(pageRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
    return () => observer.disconnect();
  }, []);

  const imageSources = [aboutUsImg1, aboutUsImg2, aboutUsImg3, aboutUsImg4 ];

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="bg-vectorTwoo"></div>
      <div className="aboutus-page-root" ref={pageRef}>
        <Container>
          <div className="pageHeader">
            <div><h4 className="pageTitle">Why Studie Maven</h4></div>
            <div className="breadcrumb-container">
              <Nav.Link as={Link} to="/"><IoHomeOutline /> Home </Nav.Link>
              <span className="breadcrumb-separator"> /</span>
              <span>About Us</span>
            </div>
          </div>
          <div className="aboutus-main-card">
            <Row>
              <div className="aboutus-left-col">
                <div className="gridbox-preview-grid">
                  {imageSources.map((src, idx) => (
                    <RevealImageBox src={src} index={idx} key={src} />
                  ))}
                </div>
              </div>
              <motion.div
                className="aboutus-right-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              >
                <div className="aboutus-desc">
                  <h3 className="mainTitle">Why <b>Studie Maven</b> is the right overseas educational facilitator for you?</h3>
                  <p>
                    Overseas education is a complex and confusing process regardless of whether you are looking for a masters, bachelors, or diploma course. The process is highly competitive and requires high commitment and vigilance on your part while choosing an overseas education facilitator. Please brief through to know why we are the best bet if you are looking for a credible overseas education facilitator.
                  </p>
                  <div className="list-items">
                    <ul>
                      <li><span className="tick"></span>23 + years of expertise in Overseas Education facilitation</li>
                      <li><span className="tick"></span>Officially representing over 800 + top-notch institutions worldwide</li>
                      <li><span className="tick"></span>International university trained professional and experienced counselors</li>
                      <li><span className="tick"></span>Thousands of successful student base across the globe</li>
                      <li><span className="tick"></span>The highest visa success rate in South India</li>
                      <li><span className="tick"></span>Hosting direct interviews from University representatives</li>
                      <li><span className="tick"></span>IELTS Registration centre – Top business partner in India, Winner of numerous awards and commendations from foreign Universities and Governments</li>
                      <li><span className="tick"></span>Authorized test centre of Pearson’s Test of English (PTE Academic), ETS TOEFL iBT, GRE and NMC-CBT.</li>
                      <li><span className="tick"></span>Education New Zealand recognized agency (ENZRA)</li>
                      <li><span className="tick"></span>A strong network of branches across India</li>
                      <li><span className="tick"></span>Registration/Booking Partner of PTE, TOEFL, GRE &amp; OET.</li>
                      <li><span className="tick"></span>Coaching on IELTS, PTE, TOEFL, German, OET, GRE.</li>
                      <li><span className="tick"></span>Pre departure briefing &amp; post landing assistance</li>
                      <li><span className="tick"></span>Dedicated travel desk for flight ticket booking at economical rates, forex, insurance on campus &amp; off accommodation assistance, etc</li>
                      <li><span className="tick"></span>Tie-ups with prominent banks for expedited education loans.</li>
                      <li><span className="tick"></span>Organizers of South India’s largest Overseas Education Expo.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </Row>
            <Row>
              <Col className="subContents">
                <h4 className="subTitles">Values we cherish</h4>
                <div className="gridWrapper">
                  {iconBoxes.map((icon, idx) => (
                    <motion.div
                      className="itemBox"
                      key={icon.label}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      custom={idx}
                      variants={itemBoxVariants}
                    >
                      <img src={icon.src} alt={icon.label} />
                      <h6>{icon.label}</h6>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default WhyUsPage;