import React, { useEffect } from "react";
import {
    useNavigate,
    Outlet
} from "react-router-dom";
import { RENDER_URL } from "../Utils/Urls";
const RootRouteGuard = (props) => {
    const navigate = useNavigate();
    console.log(props, 'props in roure');
    useEffect(() => {
        let loginData = localStorage.getItem('userData');
        loginData = loginData && JSON.parse(loginData) || {};
        if (!loginData.token) {

            navigate(RENDER_URL.HOME_URL);
        }
    }, [])

    return (<Outlet />);
};
export default RootRouteGuard