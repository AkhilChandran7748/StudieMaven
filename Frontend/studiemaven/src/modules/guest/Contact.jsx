import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from '../home/Header';
import Footer from '../home/Footer';
import monumentsImg from "../../assets/bg-profileImg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Contact.scss";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactUsPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  function validate(form) {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      errs.email = "Email is not valid";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(form.phone)) {
      errs.phone = "Phone number is not valid";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };
  const handleFocus = (e) => setFocus({ ...focus, [e.target.name]: true });
  const handleBlur = (e) => setFocus({ ...focus, [e.target.name]: false });
  const isActive = (key) => focus[key] || !!form[key];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Message sent!");
      setForm(initialFormState);
    }
  };

  // Framer Motion creative reveal animation
  const monumentVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -8,
      clipPath: "inset(0 100% 0 0)", // left to right reveal
      filter: "blur(16px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      clipPath: "inset(0 0% 0 0)",
      filter: "blur(0px)",
      transition: {
        duration: 1.6,
        ease: [0.67, 0, 0.33, 1],
        type: "spring",
        bounce: 0.35,
      },
    },
  };

  return (
    <>
        <Header />
    <div className="contactus-root">
        <div className="bg-vectorFivee"></div>
         <div className="bg-vectorSixx"></div>
      <div className="contactus-main-section">
        <div className="contactus-main-card">
          <motion.img
            src={monumentsImg}
            alt="Monuments"
            className="contactus-img"
            variants={monumentVariants}
            initial="hidden"
            animate="visible"
          />
          <div className="contactus-monuments">
            <div className="contactus-socials">
              <a href="#" aria-label="twitter"><FaTwitter /></a>
              <a href="#" aria-label="facebook"><FaFacebookF /></a>
              <a href="#" aria-label="instagram"><FaInstagram /></a>
            </div>
          </div>
          <div className="contactus-form-section">
            <h4 className="contactus-title">
              <b>Get in <br />Touch </b>With Us
            </h4>
            <form noValidate onSubmit={handleSubmit}>
              <div className="contactus-input-grid">
                <div className="grid-items">
                  <div className="mui-form-group">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`mui-input ${isActive("name") ? "active" : ""} ${errors.name ? "is-invalid" : ""}`}
                      autoComplete="off"
                      placeholder=""
                    />
                    <label className={`mui-label ${isActive("name") ? "active" : ""}`}>Your Name</label>
                    <span className="mui-input-bar"></span>
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>
                <div className="grid-items">
                  <div className="mui-form-group">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`mui-input ${isActive("email") ? "active" : ""} ${errors.email ? "is-invalid" : ""}`}
                      autoComplete="off"
                      placeholder=""
                    />
                    <label className={`mui-label ${isActive("email") ? "active" : ""}`}>Email</label>
                    <span className="mui-input-bar"></span>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                <div className="grid-items">
                  <div className="mui-form-group">
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`mui-input ${isActive("phone") ? "active" : ""} ${errors.phone ? "is-invalid" : ""}`}
                      autoComplete="off"
                      placeholder=""
                    />
                    <label className={`mui-label ${isActive("phone") ? "active" : ""}`}>Phone Number</label>
                    <span className="mui-input-bar"></span>
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>
                <div className="grid-items">
                  <div className="mui-form-group">
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`mui-input ${isActive("subject") ? "active" : ""} ${errors.subject ? "is-invalid" : ""}`}
                      autoComplete="off"
                      placeholder=""
                    />
                    <label className={`mui-label ${isActive("subject") ? "active" : ""}`}>Subject</label>
                    <span className="mui-input-bar"></span>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                </div>
                <div className="grid-items grid-item-full">
                  <div className="mui-form-group">
                    <textarea
                      name="message"
                      rows={2}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className={`mui-input ${isActive("message") ? "active" : ""} ${errors.message ? "is-invalid" : ""}`}
                      placeholder=""
                    />
                    <label className={`mui-label ${isActive("message") ? "active" : ""}`}>Message</label>
                    <span className="mui-input-bar"></span>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                </div>
              </div>
              <div className="contactus-submit-row">
                <button type="submit"
                  className="contactus-send-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contactus-map">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.28120757878224%2C9.981857851709888%2C76.28520757878224%2C9.983857851709888&layer=mapnik"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        />
      </div>
    </div>
       <Footer />
    </>
  );
};

export default ContactUsPage;