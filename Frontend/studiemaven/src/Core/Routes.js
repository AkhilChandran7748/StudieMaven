//routing files
import React, { lazy, Suspense, } from "react";
import { RENDER_URL } from "../Utils/Urls";
import RootRouteGuard from "./RootRouteGuard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DataContextProvider from "../modules/common/dataContext";
const GuestDashboard = lazy(() => import("../modules/guest/GuestDashboard"))
const WhyMaven = lazy(() => import("../modules/guest/WhyMaven"))
const Services = lazy(() => import("../modules/guest/Services"))
const Courses = lazy(() => import("../modules/guest/Courses"))
const Countries = lazy(() => import("../modules/guest/Countries"))
const ReferalProgram = lazy(() => import("../modules/guest/ReferalProgram"))
const Contact = lazy(() => import("../modules/guest/Contact"))
const AdminDashboard = lazy(() => import("../modules/admin/Admin"))
const ViewStudent = lazy(() => import("../modules/student/ViewStudent"))
const DataManager = lazy(() => import("../modules/dataManagement/DataManager"))
const Staffs = lazy(() => import("../modules/staffs/Staffs"))
const Leads = lazy(() => import("../modules/leads/Leads"))
const AdminActions = lazy(() => import("../modules/admin/AdminActions"))
const StaffDashBoard = lazy(() => import("../modules/staffs/StaffDashBoard"))
const ResetPassword = lazy(() => import("../modules/login/ResetPassword"))
const University = lazy(() => import("../modules/dataManagement/University"))
const RoutesComponent = ({ history }) => {
    return (
        <DataContextProvider>
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
                        <Route path={RENDER_URL.GUEST_DASHBOARD} element={<GuestDashboard />} />
                        <Route element={<RootRouteGuard />}>
                            <Route path={RENDER_URL.ADMIN_DASHBOARD} element={<AdminDashboard />} />
                            <Route path={RENDER_URL.STAFF_DASHBOARD} element={<StaffDashBoard />} />
                            <Route path={`${RENDER_URL.VIEW_STUDENT}/:id`} element={<ViewStudent />} />
                            <Route path={`${RENDER_URL.RESET_PASSWORD}/:id`} element={<ResetPassword />} />
                            <Route path={RENDER_URL.DATA_MANAGEMENT} element={<DataManager />} />
                            <Route path={RENDER_URL.UNIVERSITY} element={<University />} />
                            <Route path={RENDER_URL.STAFFS} element={<Staffs />} />
                            <Route path={RENDER_URL.LEADS} element={<Leads />} />
                            <Route path={RENDER_URL.ACTIONS} element={<AdminActions />} />
                            {/* Handle other routes */}
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </DataContextProvider>
    );
};

export default RoutesComponent;