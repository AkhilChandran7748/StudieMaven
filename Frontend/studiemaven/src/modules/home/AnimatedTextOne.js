import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedText.scss';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const letter = {
  hidden: { opacity: 0, y: '0.25em' },
  visible: {
    opacity: 1,
    y: '0em',
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      className={`animated-text-wrapper ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letter} className="letter">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
