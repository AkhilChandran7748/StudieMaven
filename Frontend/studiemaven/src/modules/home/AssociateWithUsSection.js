import React from "react";
import "./AssociateWithUsSection.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; 
import CountUp from "react-countup";

import CustomersIcon from "../../assets/customerIcons.png";
import UniversitiesIcon from "../../assets/universityIcons.png";
import CountriesIcon from "../../assets/countriesIcon.png";

const stats = [
  { icon: CustomersIcon, value: 7500, label: "Happy Customers" },
  { icon: UniversitiesIcon, value: 75, label: "Universities" },
  { icon: CountriesIcon, value: 15, label: "Countries" }
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

const AssociateWithUsSection = ({ id }) => {
  // Intersection observer for stats animation
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="containerWrapper" id={id}>
      <Container className="associate-section">
       
        <div className="associate-section-content text-center">
          <div className="associate-section-badge">Our Networks</div>
          <h2 className="associate-section-title">Partner With Us</h2>
           <Row>
          <Col xs={12} className="text-center">
            <section className="stats-counter-section" ref={statsRef}>
              {stats.map((stat, idx) => (
                <StatBox key={idx} {...stat} inView={statsInView} />
              ))}
            </section>
              <p className="associate-section-desc">
            At Studiemaven Study Abroad, we don’t just guide students toward international education, we walk with them, every step of the way. Now, we’re extending that same spirit of trust and collaboration to those who want to grow with us.<br /><br />
            If you’re a freelancer, sub-agent, study abroad consultant, language training centre, or an educational institution looking to expand your reach and income potential, we welcome you to partner with us. Through our exclusive Sub-Agent Program, you can become a part of a student-first consultancy that’s built on 15+ years of integrity, success, and heartfelt service.<br /><br />
            We believe in transparent processes, fair opportunities, and mutual growth. As a Studiemaven partner, you’ll have the chance to connect aspiring students to top ranked global universities across countries. With access to our expert team and proven systems, you can confidently support students while earning a steady income for every successful referral.<br /><br />
            What makes our partnership different? It’s the values we live by: honesty, empathy, and commitment. We treat every student like family, and we treat every partner like a vital part of our journey. You won’t find inflated promises or hidden agendas here, just a shared mission to change lives through education.<br /><br />
            If you believe in doing things the right way, with heart, transparency, and impact we’d love to welcome you into the Studiemaven family.
          </p>
            <Link to="/contact" className="btn-secondary-cta btn-center">
              Contact Us
              <span className="secondary-btn-arrow">
                <FaArrowRight />
              </span>
            </Link>
          </Col>
        </Row>
        
        </div>
      </Container>
    </div>
  );
};

export default AssociateWithUsSection;