import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from '../home/Header';
import Footer from '../home/Footer';
import monumentsImg from "../../assets/bg-profileImg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Contact.scss";

const initialFormState = { name: "", email: "", phone: "", subject: "", message: "" };
const LOCATION = { lat: 9.976491812408913, lng: 76.28400555749975 };
const getGoogleMapsEmbedUrl = () => `https://maps.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&z=18&output=embed`;

const triggerScrollUpdate = () => {
  window.dispatchEvent(new Event('pingme-scroll-update'));
  // If you have a global locomotive instance:
  if (window.locomotive && typeof window.locomotive.update === "function") {
    window.locomotive.update();
  }
};

const ContactUsPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});
  const pageRef = useRef(null);
  const iframeRef = useRef(null);
  const imgRef = useRef(null);

  function validate(form) {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
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

  // Locomotive Scroll Fix
  useEffect(() => {
    triggerScrollUpdate();
    const timer = setTimeout(triggerScrollUpdate, 500);

    // Observe DOM changes
    const obs = new MutationObserver(() => {
      triggerScrollUpdate();
    });
    if (pageRef.current) {
      obs.observe(pageRef.current, { childList: true, subtree: true, attributes: true, characterData: true });
    }

    // Asset load listeners
    const assetLoad = () => setTimeout(triggerScrollUpdate, 100);
    if (imgRef.current) imgRef.current.addEventListener("load", assetLoad);
    if (iframeRef.current) iframeRef.current.addEventListener("load", assetLoad);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
      if (imgRef.current) imgRef.current.removeEventListener("load", assetLoad);
      if (iframeRef.current) iframeRef.current.removeEventListener("load", assetLoad);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="contactus-root" ref={pageRef}>
        <div className="bg-graphics-left bg-graphics-pic-four bg-graphics-pos11"></div>
        <div className="bg-graphics-right bg-graphics-pic-two bg-graphics-pos7"></div>
        <div className="contactus-main-section">
          <div className="contactus-main-card">
            <motion.img
              ref={imgRef}
              src={monumentsImg}
              alt="Monuments"
              className="contactus-img"
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotate: -8, clipPath: "inset(0 100% 0 0)", filter: "blur(16px)" },
                visible: { opacity: 1, scale: 1, rotate: 0, clipPath: "inset(0 0% 0 0)", filter: "blur(0px)", transition: { duration: 1.6, ease: [0.67, 0, 0.33, 1], type: "spring", bounce: 0.35 } }
              }}
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
              <h4 className="contactus-title"><b>Get in <br />Touch </b>With Us</h4>
              <form noValidate onSubmit={handleSubmit}>
                <div className="contactus-input-grid">
                  <div className="grid-items">
                    <div className="mui-form-group">
                      <input type="text" name="name" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`mui-input ${isActive("name") ? "active" : ""} ${errors.name ? "is-invalid" : ""}`} autoComplete="off" placeholder="" />
                      <label className={`mui-label ${isActive("name") ? "active" : ""}`}>Your Name</label>
                      <span className="mui-input-bar"></span>
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                  <div className="grid-items">
                    <div className="mui-form-group">
                      <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`mui-input ${isActive("email") ? "active" : ""} ${errors.email ? "is-invalid" : ""}`} autoComplete="off" placeholder="" />
                      <label className={`mui-label ${isActive("email") ? "active" : ""}`}>Email</label>
                      <span className="mui-input-bar"></span>
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="grid-items">
                    <div className="mui-form-group">
                      <input type="text" name="phone" value={form.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`mui-input ${isActive("phone") ? "active" : ""} ${errors.phone ? "is-invalid" : ""}`} autoComplete="off" placeholder="" />
                      <label className={`mui-label ${isActive("phone") ? "active" : ""}`}>Phone Number</label>
                      <span className="mui-input-bar"></span>
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                  </div>
                  <div className="grid-items">
                    <div className="mui-form-group">
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`mui-input ${isActive("subject") ? "active" : ""} ${errors.subject ? "is-invalid" : ""}`} autoComplete="off" placeholder="" />
                      <label className={`mui-label ${isActive("subject") ? "active" : ""}`}>Subject</label>
                      <span className="mui-input-bar"></span>
                      {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    </div>
                  </div>
                  <div className="grid-items grid-item-full">
                    <div className="mui-form-group">
                      <textarea name="message" rows={2} value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`mui-input ${isActive("message") ? "active" : ""} ${errors.message ? "is-invalid" : ""}`} placeholder="" />
                      <label className={`mui-label ${isActive("message") ? "active" : ""}`}>Message</label>
                      <span className="mui-input-bar"></span>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                  </div>
                </div>
                <div className="contactus-submit-row">
                  <button type="submit" className="contactus-send-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contactus-map">
          <div style={{ width: "100%", margin: "0 auto", position: "relative", borderRadius: "18px", overflow: "hidden", boxShadow: "0 0 32px #00ffe7, 0 0 8px #1a1a1a" }}>
            <div className="mapLocationTitle"><span role="img" aria-label="location pin">📍</span> Studiemaven Study Abroad</div>
            <iframe ref={iframeRef} src={getGoogleMapsEmbedUrl()} width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Studiemaven Study Abroad Location" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;