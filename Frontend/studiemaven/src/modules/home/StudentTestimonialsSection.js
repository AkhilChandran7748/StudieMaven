import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Container, Row, Col } from 'react-bootstrap';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./StudentTestimonialsSection.scss";
import studentVisa1 from '../../assets/studentVisa1.jpg';
import studentVisa2 from '../../assets/studentVisa2.jpg';
import studentVisa3 from '../../assets/studentVisa3.jpg';
import studentVisa4 from '../../assets/studentVisa4.jpg';
import studentVisa5 from '../../assets/studentVisa5.jpg';
import studentWithBaggage from '../../assets/studentsPic1.png';
import peopleFour from '../../assets/people-pic4.jpg';
import peopleFive from '../../assets/people-pic5.jpg';
import peopleSix from '../../assets/people-pic6.jpg';
import googleLogo from '../../assets/googleLogo.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useInView } from "framer-motion";

const students = [
  { name: "Julia Sarah", country: "UK", image: studentVisa1 },
  { name: "John Mathew", country: "Canada", image: studentVisa3 },
  { name: "Divya S", country: "Germany", image: studentVisa2 },
  { name: "Amar Singh", country: "Australia", image: studentVisa4 },
  { name: "Meena Das", country: "France", image: studentVisa5 },
  { name: "Rahul Roy", country: "Sweden", image: studentVisa3 },
];

const testimonial = {
  name: "Liya Sarah",
  avatars: [
    peopleFour,
    peopleFive,
    peopleSix,
  ],
  moreCount: 10,
  review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  reviewer: "Mary Hill",
  rating: 4.9,
  googleRating: 4.7,
  windowImage: "/testimonial-window-girl.png",
};

const StudentTestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, margin: "-100px" });

  return (
    <div className="studentsWrap">
      <Container className="student-testimonials-section">
        {/* Left: 3D Slider */}
        <div className="student-slider-wrap">
          <div className="student-slider-title">
            <div>Our</div>
            <div><b>Proud <br />Students</b></div>
            <div className="student-slider-subtitle">with their visa</div>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="student-swiper"
          >
            {students.map((student, idx) => (
              <SwiperSlide key={idx} className="student-slide">
                <img src={student.image} alt={student.name} className="student-slide-img" />
                <div className="student-slide-caption">
                  <div className="student-slide-name">{student.name}</div>
                  <div className="student-slide-country">{student.country}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right: Testimonial */}
        <div className="testimonial-right-wrap">
          <div className="testimonial-window-img-wrap">
            {/* Animate this image on scroll */}
            <motion.img
              ref={imgRef}
              src={studentWithBaggage}
              alt=""
              className="testimonial-window-img"
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              style={{
                boxShadow: "0 10px 50px rgba(0,0,0,0.12)",
                borderRadius: "24px"
              }}
            />
          </div>
          <div className="testimonial-card">
            <div className="testimonial-badge">Testimonials</div>
            <div className="testimonial-title">What our client says</div>
            <div className="testimonial-user">
              <div className="testimonial-user-name">{testimonial.name}</div>
              <div className="testimonial-user-avatars">
                {testimonial.avatars.map((avatar, idx) => (
                  <img key={idx} src={avatar} alt="" className="testimonial-avatar" />
                ))}
                <div className="testimonial-more">+{testimonial.moreCount} More</div>
              </div>
            </div>
            <div className="testimonial-review">{testimonial.review}</div>
            <div className="testimonial-reviewer">{testimonial.reviewer}</div>
            <div className="testimonial-rating">
              <div className="testimonial-google-rating">
                <span className="testimonial-google-stars">
                  {"★".repeat(5)}
                </span>
                <img src={googleLogo} alt="Google" className="testimonial-google-logo" />
              </div>
              <div className="testimonial-google-rating-alt">
                <Row>
                  <Col xs="5" className="reviewBlock">
                    <span className="testimonial-rating-value">{testimonial.googleRating}</span>
                    <span className="testimonial-google-stars-alt">
                      {"★".repeat(4)}
                      <span style={{ color: "#bdbdbd" }}>★</span>
                    </span>
                  </Col>
                  <Col xs="7">
                    <img src={googleLogo} alt="Google" className="testimonial-google-logo" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StudentTestimonialsSection;