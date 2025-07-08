import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const personVariants = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    filter: "blur(12px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
  hover: {
    scale: 1.2,
    y: -55,
    boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};

const AnimatedPersonImage = ({ src, alt, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce:true,  // Animate only the first time
    threshold: .3,     // 20% visible before triggering
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      variants={personVariants}
      initial="initial"
      animate={controls}
      whileHover=""
    />
  );
};

export default AnimatedPersonImage;