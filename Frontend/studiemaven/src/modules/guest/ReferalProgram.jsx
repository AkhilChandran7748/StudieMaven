import React from "react";
import WithHeader from "../common/WithHeaderHoc";
const ReferalProgram = () => {
return(<>
    <div className="services">

      <div id="intro">
        <div className="intro-container" >
          <div
            id="introCarousel"
            className="carousel  slide carousel-fade"
            data-ride="carousel"
            
          >

            <div className="carousel-inner" role="listbox" >
              <div className="carousel-item active" >
                <div className="carousel-background" >
                  <img src="img/referral.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="featured-services" className="pt-15 pb-15">
        <div className="container">
          <div className="row just-center">
            <h2><b>Referral Programme</b></h2>
          </div>
        </div>
      </div>

      <main id="main">
        <div id="why-studie-maven">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="img-box">
                  <img src="img/ref-1.jpg" />
                </div>

              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 bounceInUp"
                data-wow-duration="1.4s"
              >
              <div className="section-header wow fadeInUp align-left">
                <h3 className="txt-align-left">The Studie Maven Referral programme!</h3>
                <p className="txt-align-left">
                    Get to leverage a fair income with the Studie Maven Referral Initiative by helping us expand our overseas education across the globe.
                    To know more details, </p>                     
                  <a href="contact.html" className="btn green-btn pull-left">Contact us now</a>                 
              </div>
              <div className="section-header wow fadeInUp align-left" >
                <h3 className="txt-align-left pull-left">Our Partners</h3>
                <h4 className="pull-left" >University of Applied Sciences Europe</h4>
                <div className="ptnr-logo">
                  <img src="img/UE-Logo.png"/>
                </div>
                <p className="txt-align-left pull-left">
                    UE is one of the top ten reputed universities in Germany which is known for its quality of teaching. Our collaboration with UE enables a fast track application process for students who apply to UE compared to other consultancies.
                </p>                     
              </div>

              </div>  
            </div>
           
          </div>
        </div>
      </main>
    </div>
</>)
}
export default WithHeader(ReferalProgram)