import React, { useState, useRef, useEffect } from "react";
import Header from '../home/Header';
import Footer from '../home/Footer';
import { motion, AnimatePresence } from "framer-motion";
import Container from "react-bootstrap/Container";

import serviceIconOne from "../../assets/service-icon1.png";
import serviceIconTwo from "../../assets/service-icon2.png";
import serviceIconThree from "../../assets/service-icon3.png";
import serviceIconFour from "../../assets/service-icon4.png";
import serviceIconFive from "../../assets/service-icon5.png";
import serviceIconSix from "../../assets/service-icon6.png";
import serviceIconSeven from "../../assets/service-icon7.png";

import { FaBars, FaTimes } from "react-icons/fa";
import "./ServiceSection.scss";

const triggerScrollUpdate = () => {
  window.dispatchEvent(new Event('pingme-scroll-update'));
};

const tabs = [
  {
    key: "visa",
    label: "Visa Services",
    icon: serviceIconOne,
    content: (
      <>
        <h3 className="service-title">Visa Services</h3>
        <h5 className="service-subtitle">across various countries</h5>
        <p>
          Visa is an approval document that permits a person to enter a country other than their home country. There are many types of visas, namely visitor visa, student visa, tourist visa, transit visa etc.
        </p>
        <p>
          Visa application is your next step after receiving the passport on your hands. We provide all kinds of visa services and assist the applicants with each procedure. We have processed thousands of visa applications so far, and we outshine other agencies with a 90% success rate in visa approval.
        </p>
        <p>
          Visa can be defined as an endorsement placed inside the passport of an individual to enter, leave, or stay in a specific country. All countries possess certain limitations and validity periods for the visa as they are part of their official procedures. Upon approval of the visa, you will be granted permission to enter, leave, or stay in the applied country, depending on the requirement. However, it is not an easy task for everyone to get their visa application approved. Don't worry, Pingme Study Abroad is a leader among visa consultants, providing the best visa services for every genuine applicant.
        </p>
        <p>
          The most common visa types include tourist, student, work, and transit. You will have to apply to all types of visa applications before the travel depending on the country you are applying for. However, the mistakes and inappropriate presentation of the applications result in a clear rejection of every single case. But if you are at the right hands when applying for your most important thing for entering a country, you are all set to go. Pingme has been doing visa documentation service successfully for the past few years, with thousands of successful applications.
        </p>
        <div className="service-list">
          <strong>Our specific services:</strong>
          <ul>
            <li>
              <span className="tick"></span> Guidance for German language training
            </li>
            <li>
              <span className="tick"></span> Preparing your documents for submission at the embassy
            </li>
            <li>
              <span className="tick"></span> Guidance for attending the visa interview
            </li>
          </ul>
        </div>
      </>
    )
  },
  {
    key: "loan",
    label: "Education Loan",
    icon: serviceIconTwo,
    content: (
      <div>
        <h3 className="service-title">Education Loan</h3>
        <h5 className="service-subtitle">for your academic dreams</h5>
        <p>We help students obtain hassle-free education loans with minimal documentation and maximum approval rates.</p>
      </div>
    )
  },
  {
    key: "counselling",
    label: "Career Counselling",
    icon: serviceIconThree,
    content: (
      <div>
        <h3 className="service-title">Career Counselling</h3>
        <h5 className="service-subtitle">expert guidance for your future</h5>
        <p>Our certified career counsellors help you make the right choices for your education and career, tailored to your interests and strengths.</p>
      </div>
    )
  },
  {
    key: "ielts",
    label: "IELTS Training",
    icon: serviceIconFour,
    content: (
      <div>
        <h3 className="service-title">IELTS Training</h3>
        <h5 className="service-subtitle">for high band scores</h5>
        <p>Join our IELTS classes and master all four modules with expert trainers and proven strategies.</p>
      </div>
    )
  },
  {
    key: "language",
    label: "Language Training",
    icon:serviceIconFive,
    content: (
      <div>
        <h3 className="service-title">Language Training</h3>
        <h5 className="service-subtitle">for global opportunities</h5>
        <p>We offer language training for German, French, and more, to help you excel in your studies or work abroad.</p>
      </div>
    )
  },
  {
    key: "insurance",
    label: "Travel and Insurance",
    icon: serviceIconSix,
    content: (
      <div>
        <h3 className="service-title">Travel and Insurance</h3>
        <h5 className="service-subtitle">secure your journey</h5>
        <p>Get the best travel and health insurance options for your overseas journey and stay protected always.</p>
      </div>
    )
  },
  {
    key: "exchange",
    label: "Foreign Exchange",
    icon: serviceIconSeven,
    content: (
      <div>
        <h3 className="service-title">Foreign Exchange</h3>
        <h5 className="service-subtitle">at best rates</h5>
        <p>We help you with foreign currency exchange at competitive rates and fast service.</p>
      </div>
    )
  },
];

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState("visa");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTimeout(triggerScrollUpdate, 100);
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setTimeout(triggerScrollUpdate, 350);
    setSidebarOpen(false); 
  };

  return (
    <>
      <Header />
      <div className="bg-vectorSeven"></div>
      <div className="bg-vectorEight"></div>
      <Container>
        <div className="service-section-root" ref={sectionRef}>
          {/* Mobile Sidebar Toggle */}
          <div className="service-sidebar-mobile-header">
            <span className="sidebar-title">Our Services</span>
            <button
              className="sidebar-toggle-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? "Close Menu" : "Open Menu"}
            >
              {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
      
          <AnimatePresence>
            {(sidebarOpen || window.innerWidth > 900) && (
              <motion.div
                className="service-sidebar"
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.34 }}
              >
                <h2 className="sidebar-title d-None-Xs">Our Services</h2>
                <ul className="sidebar-tabs">
                  {tabs.map(tab => (
                    <li key={tab.key}>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.99 }}
                        className={`sidebar-tab-btn${activeTab === tab.key ? " active" : ""}`}
                        onClick={() => handleTabChange(tab.key)}
                        aria-selected={activeTab === tab.key}
                      >
                        <motion.span
                          className="sidebar-icon"
                          initial={false}
                          animate={activeTab === tab.key
                            ? { scale: 1.13 }
                            : { scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        >
                          <img
                            src={tab.icon}
                            alt={`${tab.label} icon`}
                            style={{
                              width: 30,
                              height: 30,
                              marginRight: 0,
                              objectFit: "contain",
                              display: "inline-block",
                              verticalAlign: "middle"
                            }}
                            onLoad={triggerScrollUpdate} // in case image changes height
                          />
                        </motion.span>
                        <span className="sidebar-label">{tab.label}</span>
                        {activeTab === tab.key && (
                          <motion.div
                            className="sidebar-active-bar"
                            layoutId="activeBar"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }}
                          />
                        )}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="service-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="service-content-inner"
                initial={{ opacity: 0, x: 60, scale: 0.98, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -60, scale: 0.97, filter: "blur(10px)" }}
                transition={{ duration: 0.48, type: "spring", bounce: 0.2 }}
              >
                {tabs.find(tab => tab.key === activeTab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ServiceSection;