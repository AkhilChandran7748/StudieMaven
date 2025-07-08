import React from 'react';
import { motion } from 'framer-motion';
import './ServicesGrid.scss';

const SERVICES = [
  { className: 'item1', label: <h3><b>VISA</b><br /> Services</h3> },
  { className: 'item2', label: <h5><b>CAREER</b><br /> COUNSELLING</h5> },
  { className: 'item3', label: <h5>POST<b><br /> TRAVEL ASSISTANCE</b></h5> },
  { className: 'item4', label: <h5><b>IELTS </b><br />TRAINING</h5> },
  { className: 'item5', label: <h5><b>LANGUAGE </b><br />TRAINING</h5> },
  { className: 'item6', label: <h5><b>FOREIGN </b><br />EXCHANGE</h5> },
  { className: 'item7', label: <h5><b>EDUCATIONALLOAN </b><br />ASSISTANCE</h5>},
  { className: 'item8', label: <h5><b>ACCOMADATION</b></h5> },
  { className: 'item9', label: <h5><b>INTERVIEW </b><br />PREPARATION</h5>},
];

// Animation variants for the grid container (stagger children)
const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

// Animation variants for each grid item
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    }
  },
  hover: {
    scale: 1.04,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
    }
  }
};

const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="bg-vectorTwo"></div>
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="services-grid">
          <motion.div
            className="grid-container"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }} // triggers when 22% in view, only once
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className={`item ${s.className} service-card`}
                variants={itemVariants}
                whileHover="hover"
                initial={false}
                // No need for animate="rest" etc, we use variants for entry/hover only
              >
                {/* Light Sweep */}
                <motion.div
                  className="light-sweep"
                  variants={{
                    rest: { left: '-110%', opacity: 0.3 },
                    hover: { left: '105%', opacity: 0.65 }
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  initial="rest"
                />
                {/* Overlay for darken/brighten effect */}
                <motion.div
                  className="hover-overlay"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 0.14 }
                  }}
                  transition={{ duration: 0.3 }}
                  initial="rest"
                />
                {/* Text */}
                <motion.div
                  className="card-content"
                  variants={{
                    rest: { y: 0, filter: "brightness(1)", textShadow: "0 2px 8px #1115" },
                    hover: { y: -2, filter: "brightness(1.05)", textShadow: "0 6px 24px #fff9" }
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 5 }}
                  initial="rest"
                >
                  {s.label}
                  <motion.span
                    className="text-glow"
                    variants={{
                      rest: { opacity: 0, left: "0%" },
                      hover: { opacity: 1, left: "100%" }
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    initial="rest"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;