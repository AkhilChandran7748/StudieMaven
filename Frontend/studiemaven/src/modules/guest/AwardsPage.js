import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ModalPortal from "./ModalPortal";
import certificateOne from "../../assets/certificates1.png";
import certificateTwo from "../../assets/certificates2.png";
import certificateThree from "../../assets/certificates3.png";
import certificateFour from "../../assets/certificates4.png";
import certificateFive from "../../assets/certificates5.png";
import certificateSix from "../../assets/certificates6.png";
import certificateSeven from "../../assets/certificates7.png";
import certificateEight from "../../assets/certificates8.png";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import Header from '../home/Header';
import Footer from '../home/Footer';
import "./AwardsPage.scss";

// Modal animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.22 } }
};

const galleryItems = [
  { src: certificateOne, title: "PSB Academy 50th Anniversary memento" },
  { src: certificateTwo, title: "WITT, New Zealand- Top performing agent India Certification" },
  { src: certificateThree, title: "MSM Certificate of Appreciation" },
  { src: certificateFour, title: "Eastern Institute of Technology, NewZealand- Top Agent 2018 certificate" },
  { src: certificateFive, title: "ASBI Award" },
  { src: certificateSix, title: "MSM Certificate of Appreciation" },
  { src: certificateSeven, title: "Eastern Institute of Technology, NewZealand- Top Agent 2018 certificate" },
  { src: certificateEight, title: "PSB Academy 50th Anniversary memento" }
];

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 1 },
  visible: idx => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: idx * 0.05, duration: 0.6, type: "spring" }
  })
};

const titleVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] }
  }
};

const AwardsPage = () => {
  const [modalIdx, setModalIdx] = useState(null);

  const getLocoScroll = () => window.locoScroll || window.locomotive || null;

  useEffect(() => {
    if (modalIdx !== null) {
      document.body.style.overflow = "hidden";
      const loco = getLocoScroll();
      if (loco && typeof loco.stop === "function") loco.stop();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else {
      document.body.style.overflow = "";
      const loco = getLocoScroll();
      if (loco && typeof loco.start === "function") loco.start();
    }
    return () => {
      document.body.style.overflow = "";
      const loco = getLocoScroll();
      if (loco && typeof loco.start === "function") loco.start();
    };
  }, [modalIdx]);

  const showPrev = (e) => {
    e?.stopPropagation();
    setModalIdx((modalIdx - 1 + galleryItems.length) % galleryItems.length);
  };
  const showNext = (e) => {
    e?.stopPropagation();
    setModalIdx((modalIdx + 1) % galleryItems.length);
  };
  const closeModal = () => setModalIdx(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft" && modalIdx !== null) showPrev();
      if (e.key === "ArrowRight" && modalIdx !== null) showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalIdx]);

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="bg-vectorTwoo"></div>
      <div className="awards-page-root" data-scroll-container="true">
        <Container>
          <div className="pageHeader">
            <div><h4 className="pageTitle">Awards and Achievements</h4></div>
            <div className="breadcrumb-container">
              <Nav.Link as={Link} to="/"><IoHomeOutline /> Home </Nav.Link>
              <span className="breadcrumb-separator"> /</span>
              <span>About Us</span>
            </div>
          </div>
          <Row>
            <Col xs={12} >
              <div className="awardsTitle-content">
                <motion.h1
                  className="mainTitles"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={titleVariants}
                >
                  Recognized for <span>Excellence.</span> <br />
                  Trusted by <span>Institutions.</span><br />
                  Celebrated by <span>Students.</span>
                </motion.h1>
              </div>
            </Col>
          </Row>
          <div className="pageTop">
            <p>
              At Studiemaven Study Abroad, our commitment to integrity, transparency, and student success has not only earned us the trust of thousands of families but also the recognition of leading global institutions.
            </p>
            <p>
              Over the years, we’ve been honoured with multiple “Best Performer” awards from top international universities for our consistent results, ethical practices, and the quality of student profiles we represent. Our dedication to placing students in the right courses and countries has also led to numerous accolades, including being named one of the “Best Study Abroad Consultants” at various events.
            </p>
            <p>
              These awards are more than just titles; they reflect the passion, precision, and professionalism that drive everything we do. Each recognition strengthens our resolve to serve students better, raise the bar in the study abroad industry, and remain a trusted name in global education consulting.
            </p>
            <p>
              As we continue to grow and innovate, these milestones remind us of what matters most, the success stories we help create, the lives we impact, and the dreams we help realize.
            </p>
          </div>
          <h4 className="sbTitle">Certified by Top Universities</h4>
          <div className="galleryWrapper">
            {galleryItems.map((item, idx) => (
              <motion.div
                className="galleryItem"
                key={item.title + idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
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
      <ModalPortal>
        <AnimatePresence>
          {modalIdx !== null && (
            <motion.div
              className="galleryModal"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={closeModal}
              style={{
                position: "fixed",
                top: 0, left: 0, width: "100vw", height: "100vh",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 9999,
                background: "rgba(20, 27, 43, 0.88)"
              }}
            >
              <motion.div
                className="galleryModalContent"
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96 }}
                transition={{ duration: 0.23 }}
                onClick={e => e.stopPropagation()}
                style={{
                  maxHeight: "100vh",
                  overflowY: "auto",
                  padding: "20px"
                }}
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
      </ModalPortal>
    </>
  );
};

export default AwardsPage;