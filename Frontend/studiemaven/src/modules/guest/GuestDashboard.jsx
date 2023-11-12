import React from "react";
import GuestHeader from "../common/GuestHeaderComponent";
import Footer from "../common/FooterComponent";
import { Splitter, SplitterPanel } from 'primereact/splitter';
const GuestDashboard = (props) => {
    return (<>
        <GuestHeader history={props.history}/>
        <div id="intro">
            <div className="intro-container">
                <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                        <h3 className="banner-text">Destination to reach your dreams</h3>

                        <div className="carousel-item active">
                            <div className="carousel-background"><img src="img/clg3.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <main id="main">
            <div id="featured-services">
                <div className="container">
                    <Splitter style={{ minHeight: '300px', background: 'red' }}>
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-4 box fadeInUp">
                                <h4 className="title"><a>YOUR OWN CAREER CHANNEL!</a></h4>
                                <p className="description">Our career network consisting of HR personnel, companies, and other relevant connections helps in providing students the complete career solution. </p>
                            </div>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-4 box box-bg fadeInUp">
                                <h4 className="title"><a >YOUR NOT ON YOUR OWN!</a></h4>
                                <p className="description">Schedule an appointment with your companion. Find a companion from the country you choose for you to connect and guide you.</p>
                                <a href="contact.html" className="btn green-btn pull-left m-t-10">Contact</a>
                            </div>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-4 box fadeInUp">
                                <h4 className="title"><a >WORK PROCESS</a></h4>
                                <div className="description">
                                    <div><b>Plan - </b>Let us help you plan out your course, university and country</div>
                                    <div><b>IELTS- </b>Bag your place in the IELTS rank list.</div>
                                    <div><b>VISA Formalities -</b> Let us help you out with your Visa Processing procedures</div>
                                    <div><b>Fly High - </b>Fly high towards your dream career in your dream country.</div>
                                </div>
                            </div>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </main> */}
        <main id="main">
            <div id="featured-services">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-4 col-md-4 box fadeInUp">
                            <h4 className="title"><a>YOUR OWN CAREER CHANNEL!</a></h4>
                            <p className="description">Our career network consisting of HR personnel, companies, and other relevant connections helps in providing students the complete career solution. </p>
                        </div>

                        <div className="col-lg-4 col-md-4 box box-bg fadeInUp">
                            <h4 className="title"><a >YOUR NOT ON YOUR OWN!</a></h4>
                            <p className="description">Schedule an appointment with your companion. Find a companion from the country you choose for you to connect and guide you.</p>
                            <a href="contact.html" className="btn green-btn pull-left m-t-10">Contact</a>
                        </div>

                        <div className="col-lg-4 col-md-4 box fadeInUp">
                            <h4 className="title"><a >WORK PROCESS</a></h4>
                            <div className="description">
                                <div><b>Plan - </b>Let us help you plan out your course, university and country</div>
                                <div><b>IELTS- </b>Bag your place in the IELTS rank list.</div>
                                <div><b>VISA Formalities -</b> Let us help you out with your Visa Processing procedures</div>
                                <div><b>Fly High - </b>Fly high towards your dream career in your dream country.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        <Footer />

    </>)
}
export default GuestDashboard