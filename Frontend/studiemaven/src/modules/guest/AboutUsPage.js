import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./AboutUsPage.scss";
import { Row, Nav, Col, Container } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import germanyFlag from "../../assets/aboutUsIcon1.png";     
import swedenFlag from "../../assets/aboutUsIcon1.png"; 

import aboutUsIcon1 from "../../assets/aboutUsIcon1.png";
import aboutUsIcon2 from "../../assets/aboutUsIcon2.png";
import aboutUsIcon3 from "../../assets/aboutUsIcon3.png";
import aboutUsIcon4 from "../../assets/aboutUsIcon4.png";
import aboutUsIcon5 from "../../assets/aboutUsIcon5.png";
import aboutUsIcon6 from "../../assets/aboutUsIcon6.png";  

import peopleO1 from '../../assets/bg-vector1.png';
import peopleO2 from '../../assets/bg-vector2.png';
import peopleO3 from '../../assets/bg-vector3.png';
import peopleO4 from '../../assets/bg-vector4.png';
import peopleO5 from '../../assets/bg-vector5.png';
import peopleO6 from '../../assets/bg-vector6.png';
import peopleO7 from '../../assets/bg-vector7.png';
import peopleO8 from '../../assets/bg-vector8.png';
import peopleO9 from '../../assets/bg-vector9.png';
import people10 from '../../assets/bg-vector10.png';

import { Link } from "react-router-dom"; 
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

const gridItemVariants = {
  initial: custom => ({
    opacity: 0,
    y: 90 + custom * 8,
    scale: 0.88,
    filter: "blur(12px)",
  }),
  animate: custom => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.13 + custom * 0.06,
      duration: 0.82,
      type: "spring",
      stiffness: 120,
      damping: 18,
    }
  }),
};

const TABS = [
  {
    key: "mission",
    label: "Our Mission",
    content: (
      <>
        <p>At Studiemaven Study Abroad, our mission is to empower every student to unlock their fullest potential by making global education accessible, transparent, and personalized. We are committed to walking alongside our students and their families with honesty, empathy, and unwavering support — from the first consultation to the moment they begin their new life abroad and beyond.<br></br><br></br>
We believe in creating more than just admissions; we nurture dreams, build confidence, and foster meaningful journeys that transform lives. By prioritizing integrity and putting students’ best interests at the heart of everything we do, we aim to be a beacon of trust and reliability in the complex world of international education.<br></br><br></br>
Our greatest reward is the success stories of our students and the deep relationships we cultivate with them and their families. We take immense pride in being known not just for our expertise, but for the care, transparency, and dedication we bring to every step of their study abroad experience.
        </p>
      </>
    )
  },
  {
    key: "vision",
    label: "Our Vision",
    content: (
      <>
        <p>
          We envision a future where every aspiring student in India sees Studiemaven Study Abroad as their most trusted partner in turning global educational dreams into reality. We strive to be the #1 educational consultancy in India, not just by numbers, but through the genuine trust and respect earned from thousands of students and families across the country. <br></br><br></br>
Our vision goes beyond admissions, we aim to build a supportive community where students thrive academically, culturally, and personally in their new environments worldwide. We will continue to innovate, adapt, and uphold the highest ethical standards, ensuring our services remain student-first and fully transparent. <br></br><br></br>
Word of mouth has been our most powerful ambassador. The heartfelt recommendations from students and families who have experienced our commitment firsthand are the foundation of our reputation. We see every referral as a profound vote of confidence and a responsibility to uphold the trust placed in us.
        </p>
      </>
    )
  }
];

const StatBox = ({ count, label, index }) => {
  const match = count.match(/([\d,]+)(\+)?/);
  const num = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match && match[2] ? "+" : "";

  return (
    <motion.div
      className="aboutus-stat-box"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.14 + 1, type: "spring" }}
    >
      <div className="aboutus-stat-count">
        <CountUp
          start={0}
          end={num}
          duration={1.6}
          separator=","
          delay={index * 0.2}
        />
        {suffix}
      </div>
      <div className="aboutus-stat-label">{label}</div>
    </motion.div>
  );
};

const textRevealParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.28
    }
  }
};

const textRevealChild = {
  hidden: { opacity: 0, y: 32, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 14,
      stiffness: 80
    }
  }
};

function triggerScrollUpdate() {
  window.dispatchEvent(new Event('pingme-scroll-update'));
}

const AboutUsPage = () => {
  const gridRef = useRef(null);
  const pageRef = useRef(null);
  const [gridInView, setGridInView] = useState(false);

  // For h3 animation
  const [mainTitleRef, mainTitleInView] = useInView({ threshold: 0.15, triggerOnce: true });

  const [activeTab, setActiveTab] = useState("mission");

  const titleText = "Welcome to Studiemaven";
  const subtitle = "Study Abroad";
  const titleWords = titleText.split(" ");

  // Animate grid when in view
  useEffect(() => {
    if (!gridInView && gridRef.current) {
      const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setGridInView(true);
      }, { threshold: 0.18 });
      observer.observe(gridRef.current);
      return () => observer.disconnect();
    }
  }, [gridInView]);

  // Locomotive scroll fix for dynamic content
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
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="bg-vectorTwoo"></div>
      <div className="aboutus-page-root" ref={pageRef}>
        <Container>
          <div className="pageHeader">
            <div>
              <h4 className="pageTitle">Our Profile</h4>
            </div>
            <div className="breadcrumb-container">
              <Nav.Link as={Link} to="/"><IoHomeOutline /> Home </Nav.Link>
              <span className="breadcrumb-separator"> /</span>
              <span>About Us</span>
            </div>
          </div>

          <div className="aboutus-main-card">
            <Row>
              <div className="aboutus-left-col">
                <div className="imageGroups" ref={gridRef}>
                  {[peopleO1, peopleO2, peopleO3, peopleO4, peopleO5, peopleO6, peopleO7, peopleO8, peopleO9, people10].map((imgSrc, idx) => (
                    <motion.img
                      key={idx}
                      src={imgSrc}
                      alt=""
                      className={`bgPic bg-vector${idx + 1 < 10 ? `0${idx + 1}` : idx + 1}`}
                      custom={idx}
                      initial="initial"
                      animate={gridInView ? "animate" : "initial"}
                      variants={gridItemVariants}
                      style={{ position: "absolute" }}
                      onLoad={triggerScrollUpdate}
                    />
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
                 
                  <h3 className="mainTitles"> Welcome to Studiemaven<br></br>
                  <span>Study Abroad </span></h3>
                  <p> At <b>Studiemaven Study Abroad</b>, we are more than just a consultancy. We are your trusted partner in shaping global futures. Based in Kochi, Kerala, we are proud to be recognized as a <b>transparent, ethical, and student-first educational consultancy</b>, with over <b>15 years of expertise</b> in the international education industry.<br /><br />
                  We have helped <b>more than 2500 students</b> successfully secure admission to leading universities worldwide by the Summer Semester of 2025. Our success is measured by the lives we've changed, the dreams we've helped realize, the careers we've launched across the globe, and the deep trust we have earned from students and families who continue to recommend us as their most reliable educational partner.<br /><br />      
                  </p>
                </div>
              </motion.div>
            </Row>
            <Row>
              <Col>
                <h5 className="subTitless">Who We Are</h5>
                <p>At our core, we are a team of passionate professionals who believe that <b>trust is earned through honesty, consistency, and results.</b> We don't believe in shortcuts or empty promises. Every consultation, every suggestion, and every step we take is driven by a clear purpose: to do what’s genuinely right for the student. Our process is <b>completely transparent</b> , we keep students and parents informed, involved, and empowered from the first conversation to the final departure.<br /><br />
                But our support doesn’t stop once a student boards a flight. We stand by our students long after they reach their destination, whether it’s <b>Germany, Austria, France, UK, Canada, or beyond</b>. We continue to guide and assist them as they<b>adapt, settle, and build their new lives abroad</b>. From academic and cultural transitions to career pathways and residency planning, we’re there every step of the way because success isn’t just about admission; it’s about building a meaningful life in a new country.<br /><br />
                We understand that choosing to study abroad is one of the most important decisions a student will ever make. That’s why we approach each student’s journey with care, empathy, and meticulous attention to detail. Whether it's selecting the ideal course, identifying the right university, managing application timelines, or securing a visa, we provide honest, straightforward guidance every step of the way.<br /><br />
                What sets us apart isn’t just our experience, it’s the trust we’ve earned from the families we’ve served, the transparency we uphold in all our processes, and the genuine relationships we build with every student who walks through our doors. We don’t just send students abroad; we walk with them, supporting their journey from aspiration to achievement.</p>
              </Col>
            </Row>
            <Row>
              <div className="mv-card">
                <div className="mv-tabs">
                  {TABS.map(tab => (
                    <button
                      key={tab.key}
                      className={`mv-tab${activeTab === tab.key ? " active" : ""}`}
                      onClick={() => setActiveTab(tab.key)}
                      type="button"
                      tabIndex={0}
                    >
                      {activeTab === tab.key && <span className="mv-dot">•</span>}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
                <div className="mv-divider" aria-hidden="true"></div>
                <div className="mv-content-wrap">
                  {TABS.map(tab =>
                    activeTab === tab.key ? (
                      <div className="mv-content show" key={tab.key}>
                        {tab.content}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
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
                      onLoad={triggerScrollUpdate}
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

export default AboutUsPage;