import React from "react";
import "./AssociateWithUsSection.scss";
import Container from 'react-bootstrap/Container';
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; 
import CountUp from "react-countup";

import CustomersIcon from "../../assets/customerIcons.png";
import UniversitiesIcon from "../../assets/universityIcons.png";
import CountriesIcon from "../../assets/countriesIcon.png";

import peopleOne from '../../assets/people-pic1.jpg';
import peopleTwo from '../../assets/people-pic2.jpg';
import peopleThree from '../../assets/people-pic3.jpg';
import peopleFour from '../../assets/people-pic4.jpg';
import peopleFive from '../../assets/people-pic5.jpg';
import peopleSix from '../../assets/people-pic6.jpg';
import peopleSeven from '../../assets/people-pic7.jpg';
import peopleEight from '../../assets/people-pic8.jpg';
import peopleNine from '../../assets/people-pic9.jpg';
import peopleTen from '../../assets/people-pic10.jpg';
import peopleEleven from '../../assets/people-pic11.jpg';

const stats = [
  { icon: CustomersIcon, value: 7500, label: "Happy Customers" },
  { icon: UniversitiesIcon, value: 75, label: "Universities" },
  { icon: CountriesIcon, value: 15, label: "Countries" }
];

const peopleImages = [
  { src: peopleOne, className: "top-level1" },
  { src: peopleTwo, className: "" },
  { src: peopleThree, className: "top-level2" },
  { src: peopleFour, className: "" },
  { src: peopleFive, className: "top-level3" },
  { src: peopleSix, className: "item-6 top-level7" },
  { src: peopleSeven, className: "item-7 top-level2" },
  { src: peopleOne, className: "item-8 top-level4" },
  { src: peopleNine, className: "item-9 top-level1" },
  { src: peopleTen, className: "item-10 top-level5" },
  { src: peopleEleven, className: "top-level4" },
  { src: peopleEight, className: "item-12 top-level6" },
  { src: peopleFive, className: "item-13" },
];

const StatBox = ({ icon, value, label, inView }) => (
  <motion.div
    className="stat-box"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
  >
    <div className="stat-icon">
      <img src={icon} alt="" />
    </div>
    <div className="stat-value">
      <CountUp end={inView ? value : 0} duration={2} />
    </div>
    <div className="stat-label">{label}</div>
  </motion.div>
);

const gridItemVariants = {
  initial: (custom) => ({
    opacity: 0,
    y: 90 + custom * 8,
    scale: 0.88,
    filter: "blur(12px)",
  }),
  animate: (custom) => ({
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

const AssociateWithUsSection = () => {
  // For images grid animation
  const gridControls = useAnimation();
  const [gridRef, gridInView] = useInView({ threshold: 0.18, triggerOnce: true });

  // For stats counter animation (starts after grid animation is finished)
  const [statsStart, setStatsStart] = React.useState(false);

  React.useEffect(() => {
    if (gridInView) {
      gridControls.start((i) => "animate");
      // After last grid item's animation is expected to finish, start stats animation
      // Last item's delay: 0.13 + (peopleImages.length - 1) * 0.06
      // Last item's duration: 0.82
      // So total time: delay + duration
      const totalGridAnimTime = 0.13 + (peopleImages.length - 1) * 0.06 + 0.82;
      setTimeout(() => setStatsStart(true), totalGridAnimTime * 1000);
    }
  }, [gridInView, gridControls]);

  return (
    <div className="containerWrapper">
      <Container className="associate-section">
        <div className="grid-container-two" ref={gridRef}>
          {peopleImages.map((img, idx) => (
            <motion.div
              className={`grid-item ${img.className}`}
              key={idx}
              custom={idx}
              variants={gridItemVariants}
              initial="initial"
              animate={gridControls}
            >
              <img src={img.src} alt="" />
            </motion.div>
          ))}
        </div>
        <div className="associate-section-content text-center">
          <div className="associate-section-badge">Our Networks</div>
          <h2 className="associate-section-title">Associate with us</h2>
          <p className="associate-section-desc">
            We're Networking With Prestigious International Universities With A Mission To Encourage Overseas Education Among Students. With These Collaborations, We Intend To Provide Our Students With An Internationally Accepted Degree. It Is Our Sub-Agent Program To Welcome Those People Who Wish To Partner With Us To Make An Income Through Referrals. Even If You Are A Freelancer Or Sub-Agent You Can Tie Up With Us And Earn By Referring Us.
          </p>
          <section className="stats-counter-section">
            {stats.map((stat, idx) => (
              <StatBox key={idx} {...stat} inView={statsStart} />
            ))}
          </section>
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

export default AssociateWithUsSection;