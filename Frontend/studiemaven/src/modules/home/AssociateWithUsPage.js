import React, { useRef, useEffect } from "react";
import { Row, Nav, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from '../home/Header';
import Footer from '../home/Footer';
import AssociateWithUsSection from "./AssociateWithUsSection";

// Locomotive scroll fix function
function triggerScrollUpdate() {
  window.dispatchEvent(new Event('pingme-scroll-update'));
}

const AssociateWithUsSectionNew = () => {
  const pageRef = useRef(null);

  // Observe DOM mutations to trigger scroll update (for dynamic content)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTimeout(triggerScrollUpdate, 100);
    });
    if (pageRef.current) {
      observer.observe(pageRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="bg-vectorTwoo"></div>
      <div className="aboutus-page-root" ref={pageRef}>
        <Container>
          <AssociateWithUsSection id="partnerPage"/>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AssociateWithUsSectionNew;