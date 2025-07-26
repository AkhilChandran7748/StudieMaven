import React from "react";

import { Row, Nav, Col, Container } from 'react-bootstrap';


import { Link } from "react-router-dom"; 
import Header from '../home/Header';
import Footer from '../home/Footer';
import AssociateWithUsSection from "./AssociateWithUsSection";

  
const AssociateWithUsSectionNew = () => {
 

  return (
    <>
      <Header />
        <div className="bg-vectorThreee"></div>
        <div className="bg-vectorTwoo"></div>
       <div className="aboutus-page-root">
      <Container>
        <AssociateWithUsSection />
      </Container>
      </div>
      <Footer />
    </>
  );
};

export default AssociateWithUsSectionNew;