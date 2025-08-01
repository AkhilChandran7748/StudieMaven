import React, { useRef, useEffect } from "react";
import { Row, Nav, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from '../home/Header';
import Footer from '../home/Footer';
import EventSection from "./EventsSection";

// Locomotive scroll fix function
function triggerScrollUpdate() {
  window.dispatchEvent(new Event('pingme-scroll-update'));
}

const EventsPage = () => {
  const pageRef = useRef(null);
  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="bg-vectorTwoo"></div>
      <div className="eventspage-wrapper" ref={pageRef}>
        <Container>
          <EventSection />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;