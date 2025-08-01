//routing files
import React, { lazy, Suspense, } from "react";
import { RENDER_URL } from "../Utils/Urls";
import RootRouteGuard from "./RootRouteGuard"
import { Routes, Route, Navigate } from "react-router-dom";
import DataContextProvider from "../modules/common/dataContext";
import HomePage from '../modules/home/HomePage';


const GuestDashboard = lazy(() => import("../modules/guest/GuestDashboard"))
const WhyMaven = lazy(() => import("../modules/guest/WhyMaven"))
const Services = lazy(() => import("../modules/guest/ServiceSection"))
const Courses = lazy(() => import("../modules/guest/CoursesSection"))
const Countries = lazy(() => import("../modules/guest/CountryTabsPage"))
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
const AboutUsPage = lazy(() => import("../modules/guest/AboutUsPage"))
const WhyUs = lazy(() => import("../modules/guest/WhyUs"))
const AwardsPage = lazy(() => import("../modules/guest/AwardsPage"))
const OurTeam = lazy(() => import("../modules/guest/OurTeam"))
const AssociateWithUsPage = lazy(() => import("../modules/home/AssociateWithUsPage"));
const FaqPage = lazy(() => import("../modules/guest/FaqPage"));
const CareerPage = lazy(() => import("../modules/guest/CareerPage"));
const JobDetailPage = lazy(() => import("../modules/guest/JobDetailPage"));
const EventsPage = lazy(() => import("../modules/home/EventsPage"));
const RoutesComponent = ({ history }) => {
    return (
        <DataContextProvider>
      
                <Suspense fallback={<div className="displayNone"></div>}>
                    <Routes>
                        <Route path="/" element= {<HomePage />} />
                        <Route path="/" element={<GuestDashboard history={history} />} />
                        <Route path={RENDER_URL.ABOUTUS} element={<AboutUsPage />} />
                        <Route path={RENDER_URL.WHY_US} element={<WhyUs />} />
                        <Route path={RENDER_URL.AWARDSPAGE} element={<AwardsPage />} />
                        <Route path={RENDER_URL.CAREERPAGE} element={<CareerPage />} />
                        <Route path="/careers/:id" element={<JobDetailPage />} />
                        <Route path={RENDER_URL.OURTEAM} element={<OurTeam />} />
                        <Route path={RENDER_URL.SERVICES} element={<Services />} />
                        <Route path={RENDER_URL.EVENTS} element={<EventsPage />} />
                        <Route path={RENDER_URL.COURSES} element={<Courses />} />
                        <Route path={RENDER_URL.COUNTRIES} element={<Countries />} />
                        <Route path={RENDER_URL.FAQ} element={<FaqPage />} />
                        <Route path={RENDER_URL.ASSOCIATE_WITH_US} element={<AssociateWithUsPage />} />
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
    
        </DataContextProvider>
    );
};

export default RoutesComponent;