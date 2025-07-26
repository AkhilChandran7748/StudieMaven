import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AwardsPage.scss";
import { Nav,  Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import aboutUsImg1 from "../../assets/aboutUsImg1.jpg";
import aboutUsImg2 from "../../assets/aboutUsImg2.jpg";
import aboutUsImg3 from "../../assets/aboutUsImg3.jpg";
import aboutUsImg4 from "../../assets/aboutUsImg4.jpg";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import Header from '../home/Header';
import Footer from '../home/Footer';

const galleryItems = [
  {
    src: aboutUsImg1,
    title: "PSB Academy 50th Anniversary memento"
  },
  {
    src: aboutUsImg2,
    title: "WITT, New Zealand- Top performing agent India Certification"
  },
  {
    src: aboutUsImg3,
    title: "MSM Certificate of Appreciation"
  },
  {
    src: aboutUsImg4,
    title: "Eastern Institute of Technology, NewZealand- Top Agent 2018 certificate"
  },
  {
    src: aboutUsImg2,
    title: "ASBI Award"
  },
  {
    src: aboutUsImg3,
    title: "MSM Certificate of Appreciation"
  },
  {
    src: aboutUsImg4,
    title: "Eastern Institute of Technology, NewZealand- Top Agent 2018 certificate"
  },
   {
    src: aboutUsImg1,
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
            <div><h4 className="pageTitle">Our Profile</h4></div>
            <div className="breadcrumb-container">
                  <Nav.Link as={Link} to="/"><IoHomeOutline /> Home </Nav.Link>
                  <span className="breadcrumb-separator"> /</span>
                  <span>Awards and Acheivements</span>
              </div>
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