import React, { useEffect } from "react";
import "./LanguageCoursesSection.scss";
import { FaArrowRight } from "react-icons/fa";
import girlsPic from '../../assets/girl-pic1.png';
import Container from 'react-bootstrap/Container';
import iconSet1 from '../../assets/lang-icons1.png';
import iconSet2 from '../../assets/lang-icons2.png';
import iconSet3 from '../../assets/lang-icons3.png';
import iconSet4 from '../../assets/lang-icons4.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; 

function AnimatedImageWithCircle({ girlSrc, circleClass, girlClass }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [inView, controls]);

  const circleVariants = {
    initial: { opacity: 0, scale: 0.7, rotate: -30 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, type: "spring", stiffness: 110 }
    },
  };

  const girlVariants = {
    initial: { opacity: 0, scale: 0.86, y: 60 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2, type: "spring", stiffness: 90 }
    },
    hover: {
      scale: 1.04,
      y: -8,
      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
      transition: { type: "spring", stiffness: 180, damping: 14 }
    }
  };

  return (
    <div className="language-courses-img-wrap" ref={ref}>
      <motion.div
        className={circleClass}
        variants={circleVariants}
        initial="initial"
        animate={controls}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
        }}
      />
      <motion.img
        src={girlSrc}
        alt="Student"
        className={girlClass}
        variants={girlVariants}
        initial="initial"
        animate={controls}
        whileHover=""
        style={{ position: "relative", zIndex: 2 }}
      />
    </div>
  );
}

const LanguageCoursesSection = () => {
  return (
    <div className="language-courses-section">
       <div className="bg-graphics-left bg-graphics-pic-four bg-graphics-pos3"></div>
       <div className="bg-graphics-right bg-graphics-pic-five bg-graphics-pos4"></div>
      <Container>
      <div className="language-courses-header">
        <div className="language-courses-achieve">
          Achieve Your Dream Score &nbsp;with Our Expert with
        </div>
        <div className="language-courses-title">
          JOIN FOR OUR LANGUAGE&nbsp; COURSES
        </div>
      </div>

      <div className="language-courses-content-wrap">

        <div className="language-courses-col language-courses-left">
          <div className="language-courses-ielts-heading">
            <span className="language-courses-ielts-best"></span>
            <span className="language-courses-ielts-title">
              <span className="language-courses-ielts-main">IELTS</span>
            </span>
            <span className="language-courses-ielts-courses">COURSES</span>
          </div>
          <div className="language-courses-feature">
            <span className="language-courses-feature-icon">
                 <img
                  src={iconSet1}
                  alt=""
                />
            </span>
            <span>
               <h6>Proven Results:</h6>
              Join thousands of successful students who have aced their IELTS exams.
            </span>
          </div>
          <div className="language-courses-feature">
            <span className="language-courses-feature-icon">
                <img
                  src={iconSet2}
                  alt=""
                />
            </span>
            <span>
               <h6>Flexible Timings Available:</h6> 
              Study at your own pace with convenient class schedules.
            </span>
          </div>
        </div>

        {/* Center: Animated Girl Image and Circle */}
        <div className="language-courses-col language-courses-image">
          <AnimatedImageWithCircle
            girlSrc={girlsPic}
            girlClass="language-courses-img"
            circleClass="language-courses-img-circle"
          />
        </div>

        {/* Right: German */}
        <div className="language-courses-col language-courses-right">
          <div className="language-courses-german-heading">
            <span className="language-courses-german-title">
                  <span className="language-courses-german-learn"></span>
              <span className="language-courses-german-main">GERMAN</span>
              <span className="language-courses-german-lang">LANGUAGE</span>
            </span>
            <span className="language-courses-german-levels">A1–A2–B1–B2</span>
          </div>
          <div className="language-courses-feature">
            <span className="language-courses-feature-icon">
                <img
                  src={iconSet3}
                  alt=""
                />
            </span>
            <span>
              <h6>Expert Trainers:</h6> 
              Learn from highly qualified instructors with years of experience in guiding students to success.
            </span>
          </div>
          <div className="language-courses-feature">
            <span className="language-courses-feature-icon">
                <img
                  src={iconSet4}
                  alt=""
                />
            </span>
            <span>
              <h6>Real-Time Feedback:</h6>
              Receive timely feedback on your progress, helping you identify strengths.
            </span>
          </div>
        </div>
      </div>

      <div className="language-courses-footer">
         <Link to="/contact" className="btn-secondary-cta btn-center">
            Contact Us
            <span className="secondary-btn-arrow">
                <FaArrowRight />
            </span>
          </Link>
      </div>
        </Container>
    </div>
  );
};


export default  LanguageCoursesSection;