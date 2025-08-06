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

  useEffect(() => {
    // Trigger scroll update on mount
    triggerScrollUpdate();

    // Watch for DOM/content changes and trigger update
    const observer = new MutationObserver(() => {
      setTimeout(triggerScrollUpdate, 60);
    });
    if (pageRef.current) {
      observer.observe(pageRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }

    // Also update after all images are loaded
    const imgs = pageRef.current?.querySelectorAll("img") || [];
    let loaded = 0;
    imgs.forEach(img => {
      if (img.complete) loaded++;
      else img.addEventListener("load", () => {
        loaded++;
        if (loaded === imgs.length) triggerScrollUpdate();
      });
    });
    // In case all are already loaded
    if (loaded === imgs.length) triggerScrollUpdate();

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div className="eventspage-wrapper" ref={pageRef}>
          <EventSection />
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;