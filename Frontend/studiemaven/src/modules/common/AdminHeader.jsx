import React from "react";
import { Link, useMatch } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import LoginButton from "../login/LoginButton";
const AdminHeader = (props) => {
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
                    <li className={`${useMatch( RENDER_URL.ADMIN_DASHBOARD) ? 'menu-active' : ''}`}>
                        <Link to={
                            RENDER_URL.ADMIN_DASHBOARD
                        }>
                            Student List</Link>
                    </li>
                    <li >
                        <Link to={
                            RENDER_URL.ADMIN_DASHBOARD
                        }>
                            Staff Manangement</Link>
                    </li>
                    <li >
                        <LoginButton />
                    </li>

                </ul>
            </nav>
        </div>
    </header>
    </>)
}
export default AdminHeader