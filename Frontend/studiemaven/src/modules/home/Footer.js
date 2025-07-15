import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram , FaTwitter, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import footerLogo from '../../assets/brand-logoFooter.png';


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
        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="#">Visa Guidance</a></li>
            <li><a href="#">Councelling</a></li>
            <li><a href="#">Accomadation</a></li>
            <li><a href="#">Scolarships</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>COURSES</h4>
          <ul>
            <li><a href="#">Under Graduate</a></li>
            <li><a href="#">Post Graduage</a></li>
            <li><a href="#">Language</a></li>
            <li><a href="#">Professional Courses</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>CONTACT</h4>
          <ul>
            <li><FaWhatsapp />   +91 9061379595</li>
            <li><MdOutlineMail /> admissions@studiemaven.com</li>
            <li>
              <IoLocationOutline />Studiemaven<br></br> International Education Emgee Square,<br></br>
              1st Floor, Opp Padma Theatre<br></br>
              Mahatma Gandhi Road<br></br>
              Kochi, Kerala
            </li>
          </ul>
        </div>
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