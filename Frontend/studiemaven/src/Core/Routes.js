//routing files
import React, { lazy, Suspense, } from "react";
import { RENDER_URL } from "../Utils/Urls";
import RootRouteGuard from "./RootRouteGuard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const GuestDashboard = lazy(() => import("../modules/guest/GuestDashboard"))
const WhyMaven = lazy(() => import("../modules/guest/WhyMaven"))

const RoutesComponent = ({ history }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GuestDashboard history={history} />} />
                <Route path={RENDER_URL.WHY_MAVEN} element={<WhyMaven history={history} />} />
                <Route
                    path={RENDER_URL.GUEST_DASHBOARD}
                    element={
                        <RootRouteGuard>
                            <GuestDashboard />
                        </RootRouteGuard>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;