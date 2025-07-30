import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AwardsPage.scss";
import { Nav,  Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import certificateOne from "../../assets/certificates1.png";
import certificateTwo from "../../assets/certificates2.png";
import certificateThree from "../../assets/certificates3.png";
import certificateFour from "../../assets/certificates4.png";
import certificateFive from "../../assets/certificates5.png";
import certificateSix from "../../assets/certificates6.png";
import certificateSeven from "../../assets/certificates7.png";
import certificateEight from "../../assets/certificates8.png";
import mockupOne from "../../assets/mockup1.png";

import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import Header from '../home/Header';
import Footer from '../home/Footer';

const galleryItems = [
  {
    src: certificateOne,
    title: "PSB Academy 50th Anniversary memento"
  },
  {
    src: certificateTwo,
    title: "WITT, New Zealand- Top performing agent India Certification"
  },
  {
    src: certificateThree,
    title: "MSM Certificate of Appreciation"
  },
  {
    src: certificateFour,
    title: "Eastern Institute of Technology, NewZealand- Top Agent 2018 certificate"
  },
  {
    src: certificateFive,
    title: "ASBI Award"
  },
  {
    src: certificateSix,
    title: "MSM Certificate of Appreciation"
  },
  {
    src: certificateSeven,
    title: "Eastern Institute of Technology, NewZealand- Top Agent 2018 certificate"
  },
   {
    src: certificateEight,
    title: "PSB Academy 50th Anniversary memento"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: idx => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: idx * 0.12, duration: 0.6, type: "spring" }
  })
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const AwardsPage = () => {
  const [modalIdx, setModalIdx] = useState(null);

  const showPrev = () => setModalIdx((modalIdx - 1 + galleryItems.length) % galleryItems.length);
  const showNext = () => setModalIdx((modalIdx + 1) % galleryItems.length);
  const closeModal = () => setModalIdx(null);

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="bg-vectorTwoo"></div>
      <div className="awards-page-root">
        <Container>
          <div className="pageHeader">
            <div><h4 className="pageTitle">Awards and Acheivements</h4></div>
            <div className="breadcrumb-container">
                  <Nav.Link as={Link} to="/"><IoHomeOutline /> Home </Nav.Link>
                  <span className="breadcrumb-separator"> /</span>
                  <span>About Us</span>
              </div>
          </div>
          <Row>
            <Col xs={12} md={9}>
              <div className="awards-left-content">
                <h1 className="mainTitles">Recognized for <span>Excellence.</span> <br></br>Trusted by <span>Institutions.</span> <br></br> Celebrated by <span>Students.</span></h1>
          
                  </div>
                 </Col>
                 <Col xs={12} md={3}>
                  <div className="awards-right-content">
                    <img src={mockupOne} alt="Awards Mockup" className="awards-mockup" />
                  </div>
                 </Col>
          </Row>
          <div className="pageTop"> 
         
            <p>
              At Studiemaven Study Abroad, our commitment to integrity, transparency, and student success has not only earned us the trust of thousands of families but also the recognition of leading global institutions.  </p><p>

Over the years, we’ve been honoured with multiple “Best Performer” awards from top international universities for our consistent results, ethical practices, and the quality of student profiles we represent. Our dedication to placing students in the right courses and countries has also led to numerous accolades, including being named one of the “Best Study Abroad Consultants” at various events.  </p><p>

These awards are more than just titles they reflect the passion, precision, and professionalism that drive everything we do. Each recognition strengthens our resolve to serve students better, raise the bar in the study abroad industry, and remain a trusted name in global education consulting.  </p><p>
As we continue to grow and innovate, these milestones remind us of what matters most, the success stories we help create, the lives we impact, and the dreams we help realize.
            </p>
          </div>
                        
          <div className="galleryWrapper">
            {galleryItems.map((item, idx) => (
              <motion.div
                className="galleryItem"
                key={item.title + idx}
                initial="hidden"
                animate="visible"
                custom={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(0,0,0,0.19)" }}
                onClick={() => setModalIdx(idx)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.src} alt={item.title} />
                <span className="galleryItemTitle">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />

      <AnimatePresence>
        {modalIdx !== null && (
          <motion.div
            className="galleryModal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className="galleryModalContent"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.23 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={galleryItems[modalIdx].src} alt={galleryItems[modalIdx].title} />
              <span className="galleryModalTitle">{galleryItems[modalIdx].title}</span>
              <button className="galleryModalClose" onClick={closeModal}>&times;</button>
              <button className="galleryModalArrow galleryModalPrev" onClick={showPrev}><FaArrowLeft /></button>
              <button className="galleryModalArrow galleryModalNext" onClick={showNext}><FaArrowRight /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AwardsPage;