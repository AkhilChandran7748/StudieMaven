/**
 * API and Render url defined
 */
export const RENDER_URL = {
    HOME_URL: '/dashboard',
    GUEST_DASHBOARD: '/guest-dashboard',
    LOGIN_URL: "/login",
    REGISTER_URL: "/register",
    CREATE_ARTICLE: "/newarticle",
    ADD_MENU: "/addmenu",
    WHY_MAVEN: '/why-studiemaven',
    SERVICES: '/services',
    COURSES: '/courses',
    COUNTRIES: '/countries',
    REFERAL: '/refereal',
    CONTACT: '/contact',
    ADMIN_DASHBOARD: '/admin-dashboard',
    VIEW_STUDENT: '/student',
    DATA_MANAGEMENT: '/data-management',
    STAFFS: '/staffs',
    LEADS: '/leads',
    ACTIONS: '/actions'
};


export const API_URL = {
    REGISTRATION: "/user/register",
    LOGIN: "/user/login",
    GET_ARTICLES: "/admin/article/getArticlesByStatus",
    ADD_LEAD: "/student/addLeadInfo",
    GET_LEADS: '/student/getAllActiveLeads',
    GET_NOTES: '/student/getLeadNotes',
    ADD_NOTES: '/student/updateLeadNotes',
    UPDATE_IELTS: '/student/updateLeadIELTS',
    GET_STAFFS: '/user/getAllStaffByID',
    ADD_STAFFS: '/user/addStaff',
    UPDATE_LEAD: '/student/updateLeadInfo',
    ADD_COUNTRY: '/document/addCountry',
    GET_COUNTRIES: '/document/getAllCountryList',
    UPDATE_COUNTRY: '/document/updateCountry',
    SEARCH_LEADS: '/student/searchLead',
    CONVERT_LEADS: '/student/convertLead',
    GET_STUDENTS: '/student/getOnGoingApplications',
    GET_PAYMENT_STATUS: '/document/getAllPaymentStatusType',
    ADD_PAYMENT_STATUS: '/document/addPaymentStatusType',
    GET_ALL_COLORS: '/document/getAllColors',
    ADD_COLOR: 'document/addColor',
    UPDATE_COLOR: 'document/updateColor',
    GET_STATUS: '/document/getAllStatusType',
    ADD_STATUS: '/document/addStatus',
    GET_VISA_STATUS: '/document/getAllVisaStatusType',
    ADD_VISA_STATUS: '/document/addVisaStatusType',
    UPDATE_VISA_STATUS: '/document/getAllVisaStatusType',
    GET_AGENTS: '/document/getAllAgent',
    ADD_AGENT: '/document/addAgent',
    UPDATE_AGENT: '/document/getAllVisaStatusType',
    GET_UNIVERSITY: '/document/getAllUni',
    ADD_UNIVERSITY: '/document/addUni',
    UPDATE_UNIVERSITY: '/document/updateUni',
    ADD_STUDENT: '/student/addApplication',


}
