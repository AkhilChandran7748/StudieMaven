import React from "react";
import WithHeader from "../common/WithHeaderHoc";
const WhyMaven = () => {
    return (
        <>
            <div >
                <div className="why-style">
                    <div id="intro">
                        <div className="intro-container  " >
                            <div
                                id="introCarousel"
                                className="carousel  slide carousel-fade"
                                data-ride="carousel"
                            >

                                <div className="carousel-inner " role="listbox" >
                                    <div className="carousel-item active" style={{ height: '160 %' }}>
                                        <div className="carousel-background " >
                                            <img src="img/banner-inner-2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services">

                    <div id="featured-services" className="pt-15 pb-15">
                        <div className="container">
                            <div className="row just-center">
                                <h2><b>Why Studie Maven</b></h2>
                            </div>
                        </div>
                    </div>

                    <main id="main">
                        <div id="why-studie-maven">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 box wow bounceInUp card mb-3 p-20"
                                        data-wow-duration="1.4s"
                                    >
                                        <p className="description card-body">
                                            Studie Maven was formed by an education enthusiast, who once upon a time, was a migrated student from India. After completing his education in Germany, he endeavoured to create a platform for students to easily access international education. Being a student himself a few years back, he along with his team, easily understands the procedures, formalities, and other challenges faced by students.
                                        </p>
                                        <p className="description card-body">With individual focus given to each student, Studie Maven houses a consulting team to guide the students starting from understanding their background to providing them with travel assistance. Every course selected and every student placed is based on various consultations and coaching services. This enables the team to understand the potential of each student which further helps in guiding the prospective student.
                                        </p>
                                        <p className="description card-body">Studie Maven is further enabled with various tie-ups with a vast number of universities, banks and other facilities like travel and stay, globally. Further, the Studie Maven hails from an expertise background in the field of education. Looking forward to helping you with chasing your dream!</p>
                                    </div>
                                </div>
                                <div className="row about-cols">

                                    <div className="col-md-3 wow fadeInUp disp-flex" >
                                        <div className="about-col">
                                            <div className="img">
                                                <img src="img/ourMoto//about-mission.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <h2 className="title"><a> 100% Transparent</a></h2>
                                            <p>We ensure complete transparency in terms of our operations.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 wow fadeInUp disp-flex" data-wow-delay="0.1s" >
                                        <div className="about-col">
                                            <div className="img">
                                                <img src="img/ourMoto/Global-connectivity.png" alt="" className="img-fluid" />
                                            </div>
                                            <h2 className="title"><a>Global connectivity</a></h2>
                                            <p>We ensure our students land where they dream of with our worldwide connectivity.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 wow fadeInUp disp-flex" data-wow-delay="0.2s" >
                                        <div className="about-col">
                                            <div className="img">
                                                <img src="img/about-vision-2.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <h2 className="title"><a>Free services</a></h2>
                                            <p>We ensure that no additional costs are involved with our services.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 wow fadeInUp disp-flex" data-wow-delay="0.2s" >
                                        <div className="about-col">
                                            <div className="img">
                                                <img src="img/about-vision.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <h2 className="title"><a>Proper Facilities</a></h2>
                                            <p>We ensure that the right facilities are provided to our students. </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main>
                </div></div>
        </>)
}

export default WithHeader(WhyMaven)