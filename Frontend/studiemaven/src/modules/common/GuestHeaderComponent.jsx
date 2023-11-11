import React from "react";
import { Link } from "react-router-dom";
const GuestHeader = (props) => {
    console.log(props);
    return (<>  <header id="header">
        <div className="container-fluid">
            <div
                id="logo"
                style={{ height: '100%', textAlign: 'center' }}
                className="pull-left"
            >
                <a href="index.html"  style={{ height: '100%' }}
                ><img
                        className="logo-img"
                        src="img/StudieMaven-Logo-white.png"
                        alt=""
                        title=""
                    /></a>
            </div>

            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li className="menu-active"><a href="./index.html">Home</a></li>
                    <li><a href="why-studiemaven.html">Why Studiemaven</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="countries.html">COUNTRIES</a></li>
                    <li><a href="referral-programme.html">Referral programme!</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>)
}
export default GuestHeader