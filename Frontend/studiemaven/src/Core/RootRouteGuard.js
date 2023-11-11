import React from "react";
import {
    Route,
    Navigate
} from "react-router-dom";
const RootRouteGuard = ({ children, ...xProps }) => {
    const loginData = {
        login: {
            isLoggedIn: true
        }
    };
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, { ...xProps });
        });
    };
    return (
        <Route
            {...xProps}
            render={routeParams => {
                const pathName = routeParams.match.path;
                if (loginData.isLoggedIn) {
                    if (pathName === '/login') {
                        return <Navigate to="/dashboard" />;
                    }
                    return renderChildren();

                    // return <Component {...routeParams} key={routeParams.match.url} />;
                }
                if (
                    pathName === "/unsubcribe" ||
                    pathName === "/about-us" ||
                    pathName === "/contact-us" ||
                    pathName === "/reset-password") {
                    return renderChildren();
                    // return <Component {...routeParams} key={routeParams.match.url} />;
                }
                return <Navigate to="/guest-dashboard" />;
            }}
        />
    );
};
export default RootRouteGuard