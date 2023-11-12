import React from "react";
import WithHeader from "../common/WithHeaderHoc";
const Services = () => {
    return (<>
     <div className="services">
        <div id="intro">
            <div className="intro-container h-100" >
                <div
                    id="introCarousel"
                    className="carousel  slide carousel-fade h-100"
                    data-ride="carousel"
                >
                    <div className="carousel-inner h-100" role="listbox" >
                        <div className="carousel-item active h-100" >
                            <div className="carousel-background h-100" >
                                <img src="img/services2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="featured-services" className="pt-15 pb-15">
            <div className="container">
                <div className="row just-center">
                    <h2><b>SERVICES</b></h2>
                </div>
            </div>
        </div>

        <main id="main">
            <div id="services">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-duration="1.4s">
                            <div className=" box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">VISA SERVICES</h4>
                                <p className="description card-body">
                                    We ensure that your Visa Procedures are taken care of by the
                                    right hands! Starting from the application to the
                                    documentation to the Visa procurement, we will be with you
                                    throughout. With the help of individual Visa Consultants for
                                    each student, we also ensure that we provide you guidance with
                                    interview procedures for all kinds of Visas like Jobseeker
                                    visa, understudy Visa, Spouse Visa and much more.
                                </p>
                            </div>
                        </div>

                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-duration="1.4s">
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">EDUCATIONAL LOAN ASSISTANCE</h4>
                                <p className="description card-body">
                                    We promise to ensure that we will guide you in completing all
                                    bank procedures starting from credit application to loan
                                    procurement. We understand that bank procedures can be a
                                    tedious task, which is why we can help you out. Our close tie-
                                    ups with some of the major banks help in speeding up the
                                    process and prompt bank services.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12 "
                            data-wow-duration="1.4s"
                        >
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">CAREER COUNSELLING</h4>
                                <p className="description card-body">
                                    Studie Maven is all about providing you with the complete
                                    career solution to lay the foundation of your dream career at
                                    a country you choose. We help you in landing the right career
                                    choice based on your interests, educational background, and
                                    your potential skills. With the help of our consulting
                                    sessions, you can now realise your passion and develop your
                                    expertise in the field.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12 " data-wow-delay="0.1s" data-wow-duration="1.4s"
                        >
                            <div className=" box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">IELTS TRAINING</h4>
                                <p className="description card-body">
                                    IELTS (International English Language Testing System) is one
                                    of the major milestones to be cracked, and it is an
                                    international standardised test on the English language
                                    proficiency. Our consulting team can help you in guiding you
                                    with the examination module by realising your personal
                                    strengths and weaknesses. WIth IELTS, you gain access to some
                                    of the best countries like Australia, Canada, New Zealand and
                                    much more.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12 " data-wow-delay="0.1s" data-wow-duration="1.4s"
                        >
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">LANGUAGE TRAINING</h4>
                                <p className="description card-body">
                                    Apart from IELTS, we ensure that we give you a proper language
                                    learning platform based on your country choice. With an
                                    efficient consulting team like ours, we promise to give you
                                    the best language courses available. Studie Maven can easily
                                    achieve this due to strong tie-ups with various language
                                    institutes globally.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-delay="0.1s" data-wow-duration="1.4s"
                        >
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">TRAVEL AND INSURANCE</h4>
                                <p className="description card-body">
                                    When it comes to travelling abroad for education, travel
                                    facilities and insurance are a must! We have prominent tie-ups
                                    with various public and private health insurance services in
                                    order to guide our prospective students in acquiring
                                    insurance. Further, we assist our students in booking flights
                                    as per budget, comfort, and time.
                                </p>
                            </div>
                        </div>

                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-delay="0.1s" data-wow-duration="1.4s"
                        >
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">ACCOMMODATION</h4>
                                <p className="description card-body">
                                    Again, accommodation is a general concern when you shift to
                                    another country! We help our students get the most
                                    comfortable, affordable and safest accommodation possible. Our
                                    accommodation ranges from university dorms to private homes,
                                    all assured by us.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-delay="0.1s" data-wow-duration="1.4s"
                        >
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">POST TRAVEL ASSISTANCE</h4>
                                <p className="description card-body">
                                    We ensure that you feel like home once you set foot in your
                                    dream country for your dream education. The entire transit
                                    process will be taken care by us starting from airport pickup,
                                    to setting up your personal phone number. We also ensure that
                                    your entire stay period is taken care of by us in terms of any
                                    assistance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-delay="0.1s" data-wow-duration="1.4s">
                            <div className="box wow bounceInUp card text-white bg-primary mb-3">
                                <h4 className="title card-header">FOREIGN EXCHANGE</h4>
                                <p className="description card-body">
                                    Foreign exchange may also seem a bit confusing to a few, which
                                    is why our experts exist. Our team will counsel our guests on
                                    exchange rates, forex cards, and other currency exchange
                                    requirements.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-wow-delay="0.1s" data-wow-duration="1.4s">
                            <div className="box wow bounceInUp card text-white bg-primary mb-3 ">
                                <h4 className="title card-header">INTERVIEW PREPARATION</h4>
                                <p className="description card-body">
                                    Studie Madie ensures that our prospective students fly in high
                                    colours during interviews! Our team of experts hail from a
                                    strong background and can guide our guests in terms of the
                                    scope and nature of questions. We also further ensure that
                                    mock interviews and other required training is provided to
                                    crack interviews.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div >
</>)
}
export default  WithHeader(Services);