import React from "react";
import { Link, useMatch } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
const GuestHeader = (props) => {
    return (<>  <header id="header">
        <div className="container-fluid">
            <div
                id="logo"
                style={{ height: '100%', textAlign: 'center' }}
                className="pull-left"
            >
                <a href="index.html" style={{ height: '100%' }}
                ><img
                        className="logo-img"
                        src="img/StudieMaven-Logo-white.png"
                        alt=""
                        title=""
                    /></a>
            </div>

            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li className={`${useMatch('/') ? 'menu-active' : ''}`}><a href="./index.html">Home</a></li>
                    <li className={`${useMatch(RENDER_URL.WHY_MAVEN) ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.WHY_MAVEN
                        }>
                            Why Studiemaven</Link></li>
                    <li className={`${useMatch(RENDER_URL.SERVICES) ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.SERVICES
                        }>
                            Services</Link></li>
                    <li className={`${useMatch(RENDER_URL.COURSES) ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.COURSES
                        }>
                            Courses</Link></li>
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