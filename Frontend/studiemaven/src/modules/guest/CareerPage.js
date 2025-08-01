import React, { useState, useEffect, useContext } from 'react';
import "./CareerPage.scss"; 
import { useNavigate } from "react-router-dom";
import { careers } from "./CareersData";
import Header from '../home/Header';
import Footer from '../home/Footer';
import { Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { LocomotiveScrollContext } from '../home/LocomotiveScrollProvider';

const CareerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locoScrollContext = useContext(LocomotiveScrollContext);
  const locoScroll = locoScrollContext?.locoScroll;

  const triggerScrollUpdate = () => {
    if (locoScroll && typeof locoScroll.update === "function") {
      locoScroll.update();
    }
    window.dispatchEvent(new Event('pingme-scroll-update'));
  };

  useEffect(() => {
    setTimeout(triggerScrollUpdate, 350);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-vectorThreee"></div>
      <div className="page">
        <Container>
          <div className="mainHeader">
            <h1>Join a Purpose Driven Team.<br /> Build a Meaningful Career.</h1>
            <div className="subHeader">
              Can’t find an answer? Call us at <b>+91 8921263070</b> or email <b>admissions@studiemaven.com</b>
            </div>
          </div>
          <div className="career-list-wrapper">
            <h4 className="sbTitle">Find Your Career</h4>
            <div className="career-list">
              {careers.map((job) => (
                <div
                  key={job.id}
                  className="career-card"
                  onClick={() => navigate(`/careers/${job.id}`)}
                  tabIndex={0}
                  role="button"
                >
                  <div className="career-card-content">
                    <h4>{job.title}</h4>
                    <p className='jobDesc'>{job.details}</p>
                    <div className="career-tags">
                      {job.tags.map((tag, i) => (
                        <span className="career-tag" key={i}>
                          {tag.icon} {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="career-card-apply">
                    Apply <span aria-hidden>↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;