import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./AboutUsPage.scss";
import { Row, Nav, Col, Container } from 'react-bootstrap';
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
import { Link } from "react-router-dom"; 
import { IoHomeOutline } from "react-icons/io5";  
import Header from '../home/Header';
import Footer from '../home/Footer';

const iconBoxes = [
  { src: aboutUsIcon1, label: "Transparency" },
  { src: aboutUsIcon2, label: "Reliability" },
  { src: aboutUsIcon3, label: "Accountability" },
  { src: aboutUsIcon4, label: "Integrity" },
  { src: aboutUsIcon5, label: "Passion" },
  { src: aboutUsIcon6, label: "Teamwork" }
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

const AboutUsPage = () => {
  const stats = [
    { count: "7,500+", label: "Happy Customers." },
    { count: "15+", label: "Countries" },
    { count: "75+", label: "Universities" }
  ];

  const imageSources = [aboutUsImg1, aboutUsImg2, aboutUsImg3, aboutUsImg4 ];

  return (
    <>
      <Header />
        <div className="bg-vectorThreee"></div>
        <div className="bg-vectorTwoo"></div>
       <div className="aboutus-page-root">
      <Container>
        <div className="pageHeader">
          <div><h4 className="pageTitle">Our Profile</h4></div>
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
                <div className="aboutus-stats-row">
                  {stats.map((stat, idx) => (
                    <StatBox key={stat.label} count={stat.count} label={stat.label} index={idx} />
                  ))}
                </div>
                <p>
                  Santamonica Study Abroad Pvt. Ltd, established in the year 2002 is one of the most revered Study Abroad consultants, headquartered in Kochi, Kerala, India having bestowed with the coveted United Nations Global Excellence award and is an Asia Book of Records and India Book of Records holder. It has bagged many prestigious awards by Foreign Universities and Government bodies and Media groups. Santamonica Study abroad is headed by its founder and Managing Director Mr. Denny Thomas Vattakunnel an astute businessman, illustrious Author, Blogger, philanthropist social worker and a sports administrator. The company offers end to end study abroad facilitation services. It's the authorized representative of 800+ top-notch Universities/ Colleges from over 30+ countries, with branches and associate offices in virtually all districts/ cities of Kerala and key Indian cities and abroad. The brand today has become synonymous with quality and reliability for hand-holding students wishing to study abroad in the best of overseas educational institutions across the globe, paving the way to phenomenal international academic success and rewarding careers for thousands of students which has earned unwavering trust and patronage of students and parents alike.
                </p>
                <p>
                  Complementing the management is a team of highly trained, certified, motivated professionals with years of experience and skill with international exposure. Team Santamonica owes its success to the unwavering dedication, ethics, professional practices, continuous investment in staff training, the use of state of the art technology, and above all to its “client first” policy
                </p>
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
               <h4 className="subTitles">Our Vision</h4>
               <p>To become a dynamic and vibrant overseas education facilitator that meets global competencies in overseas education consultancy and sets the highest benchmarks in tune with the growing aspirations of our clients and partner institutions globally.</p>
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