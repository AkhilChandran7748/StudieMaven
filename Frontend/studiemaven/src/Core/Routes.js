//routing files
import React, { lazy, Suspense, } from "react";
import { RENDER_URL } from "../Utils/Urls";
import RootRouteGuard from "./RootRouteGuard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const GuestDashboard = lazy(() => import("../modules/guest/GuestDashboard"))
const WhyMaven = lazy(() => import("../modules/guest/WhyMaven"))
const Services = lazy(() => import("../modules/guest/Services"))
const Courses= lazy(() => import("../modules/guest/Courses"))
const Countries= lazy(() => import("../modules/guest/Countries"))
const ReferalProgram= lazy(() => import("../modules/guest/ReferalProgram"))
const Contact=lazy(() => import("../modules/guest/Contact"))
const RoutesComponent = ({ history }) => {
    return (
        <BrowserRouter>
          <Suspense fallback={<div className="displayNone"></div>}>
            <Routes>
                <Route path="/" element={<GuestDashboard history={history} />} />
                <Route path={RENDER_URL.WHY_MAVEN} element={<WhyMaven />} />
                <Route path={RENDER_URL.SERVICES} element={<Services />} />
                <Route path={RENDER_URL.COURSES} element={<Courses />} />
                <Route path={RENDER_URL.COUNTRIES} element={<Countries />} />
                <Route path={RENDER_URL.REFERAL} element={<ReferalProgram />} />
                <Route path={RENDER_URL.CONTACT} element={<Contact />} />
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
            </Suspense>
        </BrowserRouter>
    );
};

export default RoutesComponent;