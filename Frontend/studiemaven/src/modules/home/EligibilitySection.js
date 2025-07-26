import React, { useState, useMemo, useEffect, useRef } from "react";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import "./EligibilitySection.scss";
import imgLeft from "../../assets/group-left-men.png";
import imgMiddle from "../../assets/group-middle-men.png";
import imgRight from "../../assets/group-right-men.png";
import { FaArrowRight } from "react-icons/fa";
import succesIcon from "../../assets/success-icon.png";
import notEligibleIcon from "../../assets/not-eligible-icon.png";
import AnimatedPersonImage from "./AnimatedPersonImage";
import { motion, AnimatePresence } from "framer-motion";

function ConfettiPopper({ active }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particles = useRef([]);
  const colors = [
    "#66d5fc", "#46a8fd", "#27e9a1", "#f9cd5a", "#e9514f", "#b793e6", "#79c22d",
    "#ff7fa7", "#ffb86b", "#f8fa5b", "#7fffdf"
  ];

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    particles.current = [];
    const confettiCount = 160;
    for (let i = 0; i < confettiCount; i++) {
      const angle = (Math.PI * 2 * i) / confettiCount;
      const spread = Math.random() * Math.PI / 8 - Math.PI / 16;
      const velocity = 6 + Math.random() * 3;
      particles.current.push({
        x: W / 2,
        y: H / 2,
        r: 4 + Math.random() * 4,
        d: 8 + Math.random() * 8,
        tilt: Math.random() * 12 - 6,
        tiltAngleIncremental: 0.07 * Math.random() + 0.05,
        tiltAngle: 0,
        angle: angle + spread,
        velocity,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        gravity: 0.12 + Math.random() * 0.07,
        drift: Math.random() * 0.7 - 0.35,
        rotate: Math.random() * 360,
        rotateSpeed: Math.random() * 14 - 7,
        tick: 0
      });
    }

    function drawConfetti() {
      ctx.clearRect(0, 0, W, H);
      let done = true;
      for (let p of particles.current) {
        p.x += Math.cos(p.angle) * p.velocity + p.drift;
        p.y += Math.sin(p.angle) * p.velocity + p.gravity * p.tick;
        p.tiltAngle += p.tiltAngleIncremental;
        p.tilt = Math.sin(p.tiltAngle) * 12;
        p.rotate += p.rotateSpeed;
        p.tick++;
        if (p.tick > 42) p.alpha -= 0.018;
        if (p.alpha > 0) done = false;

        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotate * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.d / 2 + p.tilt, -p.r / 2, p.d, p.r);
        ctx.restore();
      }
      particles.current = particles.current.filter((p) => p.alpha > 0);
      if (!done) {
        animationRef.current = requestAnimationFrame(drawConfetti);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    }
    drawConfetti();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      ctx.clearRect(0, 0, W, H);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1100,
        pointerEvents: "none"
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

// Modal always centered
function Modal({ open, onClose, children }) {

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="eligibility-modal-overlay"
          variants={backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.32)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <motion.div
            className="eligibility-modal"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            tabIndex={-1}
            style={{
              minWidth: "400px",
              maxWidth: "95vw",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
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
}

const initialForm = {
  name: "",
  email: "",
  country: null,
  education: "",
  mark: "",
  ielts: "",
};

const EligibilitySection = () => {
  const [modalStep, setModalStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [showEligible, setShowEligible] = useState(true);
  const [popperActive, setPopperActive] = useState(false);
  const checkNowBtnRef = useRef(null);

  const options = useMemo(() => countryList().getData(), []);
  const formatOptionLabel = ({ label, value }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ReactCountryFlag countryCode={value} svg style={{ marginRight: 8 }} />
      <span>{label}</span>
    </div>
  );

  const handleCheckNow = () => {
    if (checkNowBtnRef.current) {
      checkNowBtnRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        setModalStep(1);
        setForm(initialForm);
        setShowEligible(true);
      }, 400);
    } else {
      setModalStep(1);
      setForm(initialForm);
      setShowEligible(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleCountryChange = (selected) => {
    setForm((f) => ({ ...f, country: selected }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.ielts) return;
    setShowEligible(form.ielts === "yes");
    setModalStep(2);
  };

  const handleClose = () => {
    setModalStep(0);
  };

  const trophyVariants = {
    initial: { scale: 0.7, rotate: -12, opacity: 0, filter: "blur(8px)" },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.65, type: "spring", stiffness: 180, damping: 12 }
    }
  };

  useEffect(() => {
    if (modalStep === 2 && showEligible) {
      setPopperActive(false);
      setTimeout(() => setPopperActive(true), 130);
      setTimeout(() => setPopperActive(false), 2600);
    }
  }, [modalStep, showEligible]);

  return (
    <>
      <ConfettiPopper active={popperActive} />

      <Container>
        <div className="eligibility-section-bg">
          <Row className="align-items-center">
            <Col lg="5" md="7">
              <div className="eligibility-section-subtitle">
                Don’t escape your country.<br />Escape your limits.
              </div>
              <div className="eligibility-section-title">
                Check Your Eligibility Now
              </div>
              <button
                className="btn-secondary-cta"
                onClick={handleCheckNow}
                ref={checkNowBtnRef}
              >
                Check Now
                <span className="secondary-btn-arrow">
                  <FaArrowRight />
                </span>
              </button>
            </Col>
            <Col lg="7" md="5">
              <div className="groupImage">
                <AnimatedPersonImage src={imgLeft} alt="First image" className="your-classname" />
                <AnimatedPersonImage src={imgMiddle} alt="Second image" className="your-classname" />
                <AnimatedPersonImage src={imgRight} alt="Third image" className="your-classname" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

 
      <Modal
        open={modalStep === 1}
        onClose={handleClose}
      >
        <div className="eligibility-modal-form-bg">
          <div className="eligibility-modal-form-header" />
          <div className="eligibility-modal-form-content">
            <h2 className="eligibility-modal-form-title">
              Check your eligibility <span className="eligibility-modal-form-title-underline">now</span>
            </h2>
            <form onSubmit={handleFormSubmit}>
              <ul className="eligibility-modal-form-list">
                <li className="eligibility-modal-form-listitem">
                  <label className="eligibility-modal-form-label">
                    1. Which country do you currently live in?
                  </label>
                  <Select
                    options={options}
                    value={form.country}
                    onChange={handleCountryChange}
                    placeholder="Select your Country"
                    formatOptionLabel={formatOptionLabel}
                    isClearable
                    name="country"
                    classNamePrefix="eligibility-country-select"
                  />
                </li>
                <li className="eligibility-modal-form-listitem">
                  <label className="eligibility-modal-form-label">
                    2. What is the highest education?
                  </label>
                  <label className="eligibility-modal-form-radio">
                    <input
                      type="radio"
                      name="education"
                      value="Plus Two"
                      checked={form.education === "Plus Two"}
                      onChange={handleInputChange}
                    />
                    Plus Two
                  </label>
                  <label className="eligibility-modal-form-radio">
                    <input
                      type="radio"
                      name="education"
                      value="Bachelors Degree"
                      checked={form.education === "Bachelors Degree"}
                      onChange={handleInputChange}
                    />
                    Bachelors Degree
                  </label>
                </li>
                <li className="eligibility-modal-form-listitem">
                  <label className="eligibility-modal-form-label">
                    3. What is the mark of your degree?
                  </label>
                  <input
                    type="text"
                    name="mark"
                    value={form.mark}
                    onChange={handleInputChange}
                    placeholder="Enter your marks here in %"
                    required
                    className="eligibility-modal-form-input"
                  />
                </li>
                <li className="eligibility-modal-form-listitem">
                  <label className="eligibility-modal-form-label">
                    4. Did you pass your IELTS?
                  </label>
                  <label className="eligibility-modal-form-radio">
                    <input
                      type="radio"
                      name="ielts"
                      value="yes"
                      checked={form.ielts === "yes"}
                      onChange={handleInputChange}
                      required
                    />
                    Yes
                  </label>
                  <label className="eligibility-modal-form-radio">
                    <input
                      type="radio"
                      name="ielts"
                      value="no"
                      checked={form.ielts === "no"}
                      onChange={handleInputChange}
                      required
                    />
                    No
                  </label>
                </li>
              </ul>
              <div className="d-flex justify-content-center mt-4 mb-4">
                <button
                  type="submit"
                  className="eligibility-modal-form-submitbtn"
                >
                  Check Now
                  <span className="check-btn-arrow2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>


      <Modal
        open={modalStep === 2}
        onClose={handleClose}
      >
        <AnimatePresence mode="wait">
          {showEligible ? (
            <motion.div
              key="success"
              className="eligibility-modal-success"
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 180, damping: 16 } }}
              exit={{ opacity: 0, scale: 0.98, y: 12, transition: { duration: 0.15 } }}
            >
              <motion.div
                className="eligibility-modal-success-icon"
                variants={trophyVariants}
                initial="initial"
                animate="animate"
              >
                <img
                  className="d-block"
                  src={succesIcon}
                  alt="Trophy"
                />
              </motion.div>
              <h2 className="eligibility-modal-success-title">Congratulations!</h2>
              <div className="eligibility-modal-success-desc">
                YOU ARE ELIGIBLE FOR<br />STUDY ABROAD!!
              </div>
              <motion.button
                className="eligibility-modal-success-btn"
                whileHover={{ scale: 1.07, background: "linear-gradient(90deg,#46a8fd 60%,#66d5fc 100%)" }}
                whileTap={{ scale: 0.96 }}
                onClick={handleClose}
              >
                Continue
                <span className="check-btn-arrow2">
                  <FaArrowRight />
                </span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="fail"
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 180, damping: 16 } }}
              exit={{ opacity: 0, scale: 0.98, y: 12, transition: { duration: 0.15 } }}
            >
              <div className="eligibility-modal-fail">
                <div className="eligibility-modal-fail-icon">
                  <img
                    className="d-block"
                    src={notEligibleIcon}
                    alt="Not Eligible"
                  />
                </div>
                <h2 className="eligibility-modal-fail-title">You Are Partially Eligible</h2>
                <div className="eligibility-modal-fail-desc">
               Great news!<br></br> You are partially eligible to study abroad. Please contact Studie Maven immediately to proceed with the next steps and receive the best assistance.
                </div>
                <div className="d-flex justify-content-center">
                    <button
                  type="submit"
                  className="eligibility-modal-form-submitbtn"
                >
                  Contact Now
                  <span className="check-btn-arrow2">
                    <FaArrowRight />
                  </span>
                </button>
                </div>
             
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
};

export default EligibilitySection;