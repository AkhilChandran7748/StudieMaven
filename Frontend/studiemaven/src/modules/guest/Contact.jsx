import React from "react";
import WithHeader from "../common/WithHeaderHoc";
const Contact = () => {
    return (<>
        <div id="contact" className="section-bg wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h3>Contact Us</h3>
                </div>

                <div className="row contact-info">
                    <div className="col-md-4">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>Address</h3>
                            <address>
                                <p>

                                    Emgee Square, 1st Floor <br />
                                    Opp Padma Theatre<br />
                                    Mahatma Gandhi Road<br />
                                    Kochi, Kerala <br />
                                    Pin:682035
                                </p>
                            </address>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-phone">
                            <i className="ion-ios-telephone-outline"></i>
                            <h3>Phone Number</h3>
                            <p><a href="tel:+155895548855">+91 9061379595</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-email">
                            <i className="ion-ios-email-outline"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:admissions@studiemaven.com">admissions@studiemaven.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form action="" method="post" role="form" className="contactForm">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                    data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                    data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone Number"
                                    data-rule="minlen:4" data-msg="Please enter valid phone number" />
                                <div className="validation"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required"
                                data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validation"></div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>

                <div className="mapouter">

                    <div className="gmap_canvas">
                        <iframe width="100%" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Emgee%20Square&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                                href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">embedgooglemap.net</a>
                    </div>
                
                </div>

            </div>

        </div>
    </>)
}
export default WithHeader(Contact)