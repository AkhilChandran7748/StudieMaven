import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.28 } },
  exit: { opacity: 0, transition: { duration: 0.18 } }
};

const modalVariants = {
  initial: { opacity: 0, scale: 0.92, y: 60 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 240, damping: 20, duration: 0.45 }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: { type: "spring", stiffness: 210, damping: 30, duration: 0.22 }
  }
};

const Modal = () => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="eligibility-modal-overlay"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ zIndex: 1000, position: "fixed", inset: 0 }}
        >
          <motion.div
            className="eligibility-modal"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            tabIndex={-1}
          >
            <button
              className="eligibility-modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
            <div className="eligibility-modal-scroll">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;