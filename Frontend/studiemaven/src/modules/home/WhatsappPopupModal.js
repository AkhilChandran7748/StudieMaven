import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WhatsappPopupModal.scss";
import mobileMockups from "../../assets/mockupOne.png";
import mobileMockupsOne from "../../assets/mockupOne-pic1.png";
import mobileMockupsTwo from "../../assets/mockupOne-pic2.png";
import mobileMockupsThree from "../../assets/mockupOne-pic3.png";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER"; // e.g. "919876543210"
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I need some help!");

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50, rotate: -8 },
  visible: { opacity: 1, scale: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 220, damping: 18, delay: 0.15 } }
};

const iconVariants = [
  {
    hidden: { opacity: 0, scale: 0.6, x: -80, y: -60, rotate: -45 },
    visible: { opacity: 1, scale: 1, x: -40, y: -80, rotate: 0, transition: { type: "spring", delay: 0.45, stiffness: 160, damping: 14 } }
  },
  {
    hidden: { opacity: 0, scale: 0.6, x: 90, y: -40, rotate: 45 },
    visible: { opacity: 1, scale: 1, x: 70, y: -100, rotate: 0, transition: { type: "spring", delay: 0.55, stiffness: 160, damping: 14 } }
  },
  {
    hidden: { opacity: 0, scale: 0.6, x: 60, y: 80, rotate: 75 },
    visible: { opacity: 1, scale: 1, x: 90, y: 50, rotate: 0, transition: { type: "spring", delay: 0.65, stiffness: 160, damping: 14 } }
  }
];

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } }
};
const modalContent = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 16 } },
  exit: { opacity: 0, scale: 0.7, y: 60, transition: { duration: 0.18 } }
};

const whatsappBtnVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.07, boxShadow: "0 0 16px #25d36644" }
};

const WhatsappPopupModal = ({ open, onClose }) => {
  const handleWhatsappClick = () => {
    const url = `https://wa.me/${+919061379595}?text=${'Hi, I need some help!'}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="whatsapp-modal-overlay"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="whatsapp-modal-content"
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className="whatsapp-modal-close" onClick={onClose}>
              ×
            </button>
            <div className="whatsapp-modal-body">
              <div className="img-wrapper-div">
                {/* Phone */}
                <motion.img
                  src={mobileMockups}
                  alt="WhatsApp Support"
                  className="whatsapp-modal-img phone"
                  variants={phoneVariants}
                  initial="hidden"
                  animate="visible"
                />
                {/* Icon Orbits */}
                <motion.img
                  src={mobileMockupsOne}
                  alt=""
                  className="whatsapp-modal-img icon icon1"
                  variants={iconVariants[0]}
                  initial="hidden"
                  animate="visible"
                />
                <motion.img
                  src={mobileMockupsTwo}
                  alt=""
                  className="whatsapp-modal-img icon icon2"
                  variants={iconVariants[1]}
                  initial="hidden"
                  animate="visible"
                />
                <motion.img
                  src={mobileMockupsThree}
                  alt=""
                  className="whatsapp-modal-img icon icon3"
                  variants={iconVariants[2]}
                  initial="hidden"
                  animate="visible"
                />
              </div>
              <div className="whatsapp-modal-text">
                <div className="whatsapp-modal-title">Find us on WhatsApp</div>
                <div className="whatsapp-modal-support">
                  <span className="highlight">24x7</span> Support
                </div>
                <motion.button
                  className="btn-whatsappTwo-cta"
                  variants={whatsappBtnVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="rest"
                  onClick={handleWhatsappClick}
                  type="button"
                >
                  Chat Now
                  <span>
                    <FaWhatsapp />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsappPopupModal;