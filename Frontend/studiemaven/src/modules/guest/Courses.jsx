import React from "react";
import WithHeader from "../common/WithHeaderHoc";
const Courses = () => {
    return (<>
        <div className="courses">
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
                                    <img src="img/service.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio" className="section-bg">
                <div className="container">
                    <header className="section-header">
                        <h3 className="section-title">STUDY</h3>
                        <h4><a href="">BACHELORS</a></h4>
                        <span
                        >Our partner universities Bachelor degree courses are immense which can be
                            chosen based on your personal and educational skills!</span
                        >
                    </header>

                    <div className="row portfolio-container mt-10">
                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Business Management & Commerce</a></h4>
                                    <p>
                                        Get insight into the world of Business and Commerce from the
                                        top universities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Information Technology</a></h4>
                                    <p>
                                        Get ahead of the world with IT, communications and
                                        information studies with the help of computing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Agricultural & Environmental Studies</a></h4>
                                    <p>
                                        Plough into the world of agriculture, production and
                                        environment by using research and analysis with economics,
                                        sociology, and the market.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Arts & Design</a></h4>
                                    <p>
                                        Let out your creativity in writing, designing, filming and
                                        much more with Arts & Design.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Sports and Event Management</a></h4>
                                    <p>
                                        Learn how to be the brain behind events with Sports and
                                        Event Management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Criminology and Law</a></h4>
                                    <p>
                                        Get a deeper understanding of crime and crime law around the
                                        world with Criminology and Law.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Architecture and Building</a></h4>
                                    <p>
                                        If you are passionate about designing from a small family
                                        home to a skyscraper, Architecture is the right choice for
                                        you!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Engineering and Technology</a></h4>
                                    <p>
                                        Influence the global engineering economy by developing your
                                        passion and skills in engineering and technology.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Food & Hospitality</a></h4>
                                    <p>
                                        Explore the world of food and hospitality by developing your
                                        personal and hospitality skills.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Health-</a></h4>
                                    <p>
                                        Get an insight into the world of global health and other
                                        health related aspects all around the globe.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                        >
                            <div className="portfolio-wrap">
                                <div className="portfolio-info">
                                    <h4><a>Media and psychology</a></h4>
                                    <p>
                                        Mark your place in the world of media and Psychology with
                                        the best colleges available in the field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course-header">
                        <h4><a href="">MASTER DEGREE COURSES</a></h4>
                        <p>
                            A Master Degree Course is a key decision to be made as it is based
                            on your set of professional skills, based on which our consulting
                            team can help you finalise on a course and where.
                        </p>

                        <h5>Our partner universities Master Degree Courses are as follows</h5>

                        <div className="row portfolio-container mt-10">
                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Business Management & Commerce</a></h4>
                                        <p>
                                            Get insight into the world of Business and Commerce from
                                            the top universities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Information Technology</a></h4>
                                        <p>
                                            Get ahead of the world with IT, communications and
                                            information studies with the help of computing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Agricultural & Environmental Studies</a></h4>
                                        <p>
                                            Plough into the world of agriculture, production and
                                            environment by using research and analysis with economics,
                                            sociology, and the market.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Arts & Design</a></h4>
                                        <p>
                                            Let out your creativity in writing, designing, filming and
                                            much more with Arts & Design.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Sports and Event Management</a></h4>
                                        <p>
                                            Learn how to be the brain behind events with Sports and
                                            Event Management.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Criminology and Law</a></h4>
                                        <p>
                                            Get a deeper understanding of crime and crime law around
                                            the world with Criminology and Law.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Architecture and Building</a></h4>
                                        <p>
                                            If you are passionate about designing from a small family
                                            home to a skyscraper, Architecture is the right choice for
                                            you!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Engineering and Technology</a></h4>
                                        <p>
                                            Influence the global engineering economy by developing
                                            your passion and skills in engineering and technology.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Food & Hospitality</a></h4>
                                        <p>
                                            Explore the world of food and hospitality by developing
                                            your personal and hospitality skills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Health-</a></h4>
                                        <p>
                                            Get an insight into the world of global health and other
                                            health related aspects all around the globe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Media and psychology</a></h4>
                                        <p>
                                            Mark your place in the world of media and Psychology with
                                            the best colleges available in the field.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Pre-Master Program</a></h4>
                                        <p>We also offer a pre-masters programme for you to shift to your dream career choice. You may not have chosen the ideal course for you to pursue your dream masters programme, which is why the Pre-Masters programme ensures you are able to pursue it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-9 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Foundation Year Programs</a></h4>
                                        <p>
                                            Foundation year programmes are a program scheme provided
                                            by countries abroad for students who have not achieved
                                            complete clearance. You may have not cracked the IELTS, or
                                            scored enough marks for graduation! Worry not with these
                                            foundation programmes. You may also have interest to start
                                            studies in Germany after your secondary education, but
                                            don’t have a current direct access to german university??
                                            Once again, don’t worry, we can help with a solution !!
                                            Studienkolleg, also known as a foundation year program is
                                            a 1 year pre-studies programme which enables a student to
                                            gain accessibility to quality education in a German
                                            University. Studie Maven helps you to prepare for the
                                            final examination, known as “Feststellungsprüfung”, which
                                            further enables your accessibility to your dream course at
                                            your desired German Public University.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-header">
                            <h4>PHd and Other Doctorate Courses</h4>
                            <p>
                                Ignite your passion by taking your next step with our PHd
                                and Other Doctorate Courses. Our partner universities have immense opportunities
                                when it comes to PHd, which you can choose based on your
                                Masters.
                            </p>
                        </div>
                        <div className="row portfolio-container mt-10">
                            <div
                                className="col-lg-9 col-md-4 portfolio-item filter-app wow fadeInUp"
                            >
                                <div className="portfolio-wrap">
                                    <div className="portfolio-info">
                                        <h4><a>Foundation Year Programs</a></h4>
                                        <p>
                                            Foundation year programmes are a program scheme provided
                                            by countries abroad for students who have not achieved
                                            complete clearance. You may have not cracked the IELTS, or
                                            scored enough marks for graduation! Worry not with these
                                            foundation programmes. You may also have interest to start
                                            studies in Germany after your secondary education, but
                                            don’t have a current direct access to german university??
                                            Once again, don’t worry, we can help with a solution !!
                                            Studienkolleg, also known as a foundation year program is
                                            a 1 year pre-studies programme which enables a student to
                                            gain accessibility to quality education in a German
                                            University. Studie Maven helps you to prepare for the
                                            final examination, known as “Feststellungsprüfung”, which
                                            further enables your accessibility to your dream course at
                                            your desired German Public University.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default WithHeader(Courses)