import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram , FaTwitter, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import footerLogo from '../../assets/brand-logoFooter.png';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import flagGermany from '../../assets/flag-GE.png';
import flagCanada from '../../assets/flag-Canada.png';
import flagAustralia from '../../assets/flag-Australia.png';
import flagUK from '../../assets/flag-UK.png';
import flagSweden from '../../assets/flag-Sweden.png';


const Footer = () => (
  <footer className="footer-main">
    <div className="footer-bg-circles">
      <div className="footer-bg-circle footer-bg-circle--right"></div>
      <div className="footer-bg-circle footer-bg-circle--left"></div>
    </div>
    <div className="footer-content">
      <div className="footer-logo">
        <div className="studie-maven-logo">
           <img src={footerLogo} alt="Brand Logo" />
        </div>
      </div>
      <div className="footer-links-wrap">
        <Row>
            <Col xs={12} md={4} className="footer-col">
              <h4 className="footerTitle">CONTACT</h4>
              <ul>
                <li><FaWhatsapp />  +91 8921263070</li>
                <li><MdOutlineMail /> admissions@studiemaven.com</li>
              
              </ul>
              
            </Col>
            <Col xs={12} md={4} className="footer-col">
                <ul>
                  <li><h4 className="footerTitle">  <IoLocationOutline />Cochin Office</h4></li>
                <li>
                Studiemaven Study Abroad,<br></br> Sreevalsam, 2nd Floor,<br></br> Mahatma Gandhi Road, <br></br>Opposite Shenoys Theatre, 682011, <br></br>Kochi, Kerala, India
                </li>
          
              </ul>
              
            </Col>
            <Col xs={12} md={4} className="footer-col">
                <ul>           
                <li><h4 className="footerTitle">  <IoLocationOutline /> London Office</h4></li>
                <li>
                Studiemaven Study Abroad, <br></br>Pichelsdorfer Straße 78, 13595,<br></br> Berlin, Germany
                </li>
               <li><FaWhatsapp />  +49 17664322900</li>
              </ul></Col>
          </Row>
      <Row>
        <Col xs={12} md={3} className="footer-col">
          <h4 className="footerTitle">SERVICES</h4>
          <ul>
            <li><a href="#">Visa Guidance</a></li>
            <li><a href="#">Councelling</a></li>
            <li><a href="#">Accomadation</a></li>
            <li><a href="#">Scolarships</a></li>
            <li><a href="#">Student Loans</a></li>

          </ul>
          </Col>
         <Col xs={12} md={3} className="footer-col">
          <h4 className="footerTitle">QUICK LINKS</h4>
          <ul>
            <li><a href="#">Associate with us</a></li>
            <li><a href="#">Our Profile</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
          </Col>
            <Col xs={12} md={3} className="footer-col">
             <h4 className="footerTitle">COURSES</h4>
              <ul>
                <li><a href="#">PG Courses</a></li>
                <li><a href="#">UG Courses</a></li>
                <li><a href="#">Phd Courses</a></li>
                <li><a href="#">Professional Courses</a></li>
              </ul>
              </Col>
               <Col xs={12} md={3} className="footer-col">
             <h4 className="footerTitle">Countries</h4>
              <ul className="countries-list">
                <li><a href="#"><img src={flagGermany} alt=""/>Germany</a></li>
                <li><a href="#"><img src={flagCanada} alt=""/>Canada</a></li>
                <li><a href="#"><img src={flagAustralia} alt=""/>Australia</a></li>
                <li><a href="#"><img src={flagUK} alt=""/>UK</a></li>
                <li><a href="#"><img src={flagSweden} alt=""/>USA</a></li>
              </ul>
              </Col>
            </Row>  
          
          </div>
    </div>
    <div className="footer-bottom">
      <hr />

      <div className="footer-social">
        <a href="#" aria-label="facebook"><FaTwitter /></a>
        <a href="#" aria-label="twitter"><FaFacebookF/></a>
        <a href="#" aria-label="linkedin"><FaInstagram /></a>
        <a href="#" aria-label="linkedin"><FaLinkedinIn /></a>
       
      </div>
      <div className="footer-info">
        <div>© 2025 Studymaven Pvt Ltd.</div>
        <div>Fly high towards your dream career in your dream country.</div>
      </div>
    </div>
  </footer>
);

export default Footer;