import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Container } from 'react-bootstrap';
import "swiper/css";
import "swiper/css/autoplay";
import "./StudentsWithVisa.scss";
import studentVisa1 from '../../assets/studentWithVisa1.jpg';
import studentVisa2 from '../../assets/studentWithVisa2.jpg';
import studentVisa3 from '../../assets/studentWithVisa3.jpg';
import studentVisa4 from '../../assets/studentWithVisa4.jpg';
import studentVisa5 from '../../assets/studentWithVisa5.jpg';
import studentVisa6 from '../../assets/studentWithVisa6.jpg';
import studentVisa7 from '../../assets/studentWithVisa7.jpg';
import studentVisa8 from '../../assets/studentWithVisa8.jpg';
import studentVisa9 from '../../assets/studentWithVisa9.jpg';
import studentVisa10 from '../../assets/studentWithVisa10.jpg';

import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useInView } from "framer-motion";

const students = [
  { name: "Julia Sarah", country: "UK", image: studentVisa1 },
  { name: "John Mathew", country: "Canada", image: studentVisa2 },
  { name: "Divya S", country: "Germany", image: studentVisa3 },
  { name: "Amar Singh", country: "Australia", image: studentVisa4 },
  { name: "Meena Das", country: "France", image: studentVisa5 },
  { name: "Rahul Roy", country: "Sweden", image: studentVisa6 },
  { name: "Julia Sarah", country: "UK", image: studentVisa7 },
  { name: "John Mathew", country: "Canada", image: studentVisa8 },
  { name: "Divya S", country: "Germany", image: studentVisa9 },
  { name: "Amar Singh", country: "Australia", image: studentVisa10 },
  { name: "Meena Das", country: "France", image: studentVisa5 },
  { name: "Rahul Roy", country: "Sweden", image: studentVisa3 },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }
  }
};

const StudentTestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "40px" });

  return (
    <div className="student-testimonials-section">
      <div className="student-slider-wrap">
        <Container fluid>
          <motion.div
            className="student-slider-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            ref={imgRef}
          >
            <div>Our <b>Proud Students</b></div>
            <div className="student-slider-subtitle">with their visa</div>
          </motion.div>

          {/* Top Layer Slider */}
          <Swiper
            slidesPerView={6}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              991: { slidesPerView: 4 },
              1200: { slidesPerView: 6 }
            }}
            modules={[Autoplay]}
            className="student-swiper student-swiper-top"
            style={{ marginBottom: "26px" }}
          >
            {students.map((student, idx) => (
              <SwiperSlide key={"top-" + idx} className="student-slide">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  className="student-slide-inner"
                >
                  <img src={student.image} alt={student.name} className="student-slide-img" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Center Layer Slider (opposite direction) */}
          <Swiper
            slidesPerView={6}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 2500,
              reverseDirection: true, // this makes the slider go right-to-left
              disableOnInteraction: false
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              991: { slidesPerView: 4 },
              1200: { slidesPerView: 6 }
            }}
            modules={[Autoplay]}
            className="student-swiper student-swiper-middle"
            style={{ marginBottom: "26px" }}
          >
            {students.map((student, idx) => (
              <SwiperSlide key={"center-" + idx} className="student-slide">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  className="student-slide-inner"
                >
                  <img src={student.image} alt={student.name} className="student-slide-img" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Layer Slider */}
          <Swiper
            slidesPerView={6}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              991: { slidesPerView: 4 },
              1200: { slidesPerView: 6 }
            }}
            modules={[Autoplay]}
            className="student-swiper student-swiper-bottom"
          >
            {students.map((student, idx) => (
              <SwiperSlide key={"bottom-" + idx} className="student-slide">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  className="student-slide-inner"
                >
                  <img src={student.image} alt={student.name} className="student-slide-img" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default StudentTestimonialsSection;