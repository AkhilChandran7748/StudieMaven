import React from "react";
import { Link, useMatch } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import LogoutButton from "./LogOutButton";
const StaffHeader = (props) => {
    return (<>  <header id="header">
        <div className="container-fluid">
            <div
                id="logo"
                style={{ height: '100%', textAlign: 'center' }}
                className="pull-left"
            >
                <a href={RENDER_URL.STAFF_DASHBOARD} style={{ height: '100%' }}
                ><img
                        className="logo-img"
                        src="/img/StudieMaven-Logo-white.png"
                        alt=""
                        title=""
                    /></a>
            </div>

            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    {/* <li className={`${useMatch('/') ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.ADMIN_DASHBOARD
                        }>
                            Home</Link>
                    </li> */}
                    <li className={`${useMatch(RENDER_URL.STAFF_DASHBOARD) ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.STAFF_DASHBOARD
                        }>
                            Student List</Link>
                    </li>
                    <li className={`${useMatch(RENDER_URL.LEADS) ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.LEADS
                        }>
                            Leads</Link>
                    </li>
                    <li className={`${useMatch(RENDER_URL.DATA_MANAGEMENT) ? 'menu-active' : ''}`} >
                        <Link to={
                            RENDER_URL.DATA_MANAGEMENT
                        }>
                            Data Manangement</Link>
                    </li>
                    <li >
                        {/* <HeaderMenu /> */}
                    </li>
                    <li >
                    <LogoutButton />
                    </li>


                </ul>
            </nav>
        </div>
    </header>
    </>)
}
export default StaffHeader