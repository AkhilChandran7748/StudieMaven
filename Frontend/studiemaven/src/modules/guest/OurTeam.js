import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OurTeam.scss";
import { IoHomeOutline } from "react-icons/io5"; 
import TeamPic1 from "../../assets/studentVisa4.jpg";
import Header from '../home/Header';
import Footer from '../home/Footer';
const team = [
  {
    name: "Sandeep",
    role: "Founder & CEO",
    img: "https://ideentech.com/wp-content/uploads/2023/12/sandeep.jpg"
  },
  {
    name: "Shyam",
    role: "Head - Sales & Marketing",
    img: "https://ideentech.com/wp-content/uploads/2023/12/shyam.jpg"
  },
  {
    name: "Shivani",
    role: "Business Development Manager",
    img: "https://ideentech.com/wp-content/uploads/2023/12/shivani.jpg"
  },
  {
    name: "Jithin",
    role: "Project Manager",
    img: "https://ideentech.com/wp-content/uploads/2023/12/jithin.jpg"
  },
  {
    name: "Shivani",
    role: "Business Development Manager",
    img: "https://ideentech.com/wp-content/uploads/2023/12/shivani.jpg"
  },
  {
    name: "Jithin",
    role: "Project Manager",
    img: "https://ideentech.com/wp-content/uploads/2023/12/jithin.jpg"
  }
];
const OurTeamPage = () => {

  return (
    <>
    <div className="team-section">
    <Header />
     <Container fluid="md">
       <div className="pageHeader">
            <div><h4 className="pageTitle">Our Team</h4></div>
            <div className="breadcrumb-container">
                  <Nav.Link as={Link} to="/"><IoHomeOutline /> Home </Nav.Link>
                  <span className="breadcrumb-separator"> /</span>
                  <span>About Us</span>
              </div>
          </div>
      <Row>
        <Col xs={12} md={7}>
            <h1 className="team-title-h1">Meet the Team<br></br> Behind Studiemaven</h1>
        </Col>
            <Col xs={12} md={5} className="team-description"><p>At the heart of innovation, our team is the engine that powers everything we do. We’re a dynamic group of tech enthusiasts, creative problem-solvers, and forward-thinkers dedicated to transforming ideas into impactful solutions.<br></br>
            <br></br>
            From visionary developers who bring concepts to life to strategic minds crafting seamless user experiences, every member plays a crucial role in driving our mission forward. We collaborate, we innovate, and we push the boundaries of what’s possible—together.<br></br><br></br>

            Here, talent meets passion. Curiosity fuels creativity. And teamwork makes the magic happen.</p>
            </Col>
      </Row>
        <Row>
        <Col xs={12} md={6} >
            <div className="ceo-wrapper">
                <img src={TeamPic1} alt="Team" className="ceo-image" />
            </div>  
        </Col>
            <Col xs={12} md={6} >
            <div className="ceo-details">
                <h4>Ananthu Vinod</h4>
                <h6>Founder, Chief Executive Officer</h6>
                <p>Driven by a deep sense of curiosity and a constant desire to improve existing systems, Ananthu founded Ideenkreise Tech shortly after completing his college education. Motivated by the question, “What could be better?” and armed with a strong passion for technology, he embarked on this entrepreneurial journey despite having no prior business experience.

                Through determination and a commitment to innovation, he led IdeenTech from its inception into a forward-thinking software company that delivers scalable, value-added solutions. Under his leadership, the company continues to redefine the technology landscape by focusing on impactful, sustainable innovation.

                Today, Ananthu remains inspired by the opportunity to build something enduring alongside a talented team that shares his vision. He is a technology founder who transformed a simple idea into a transformative enterprise—guided by the belief that the future is shaped by those who act with purpose and conviction.</p>
                </div>
            </Col>
      </Row>
       <Row className="flex-column-reverse flex-sm-row">
             <Col xs={12} md={6} >
                <div className="ceo-details">
                <h4>Ananthu Vinod</h4>
                <h6>Founder, Chief Executive Officer</h6>
                <p>Driven by a deep sense of curiosity and a constant desire to improve existing systems, Ananthu founded Ideenkreise Tech shortly after completing his college education. Motivated by the question, “What could be better?” and armed with a strong passion for technology, he embarked on this entrepreneurial journey despite having no prior business experience.

                Through determination and a commitment to innovation, he led IdeenTech from its inception into a forward-thinking software company that delivers scalable, value-added solutions. Under his leadership, the company continues to redefine the technology landscape by focusing on impactful, sustainable innovation.

                Today, Ananthu remains inspired by the opportunity to build something enduring alongside a talented team that shares his vision. He is a technology founder who transformed a simple idea into a transformative enterprise—guided by the belief that the future is shaped by those who act with purpose and conviction.</p>
                </div>
            </Col>
           <Col xs={12} md={6} >
               <div className="ceo-wrapper">
                  <img src={TeamPic1} alt="Team" className="ceo-image" />
                </div>               
           </Col>
      </Row>
      
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={32}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1200: { slidesPerView: 4 }
          }}
          style={{ paddingBottom: "32px" }}
        >
          {team.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="team-card">
                <div className="team-img-wrap">
                     <img src={TeamPic1} alt="Team" className="team-image" />
                </div>
                <div className="team-member-details">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
   
    </Container>
      
 </div>
 <Footer />
 </>
  );
};

export default OurTeamPage;