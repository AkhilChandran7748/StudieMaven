import React from "react";
import WithHeader from "../common/WithHeaderHoc";
import StudentList from "../student/StudentList";
import './admin.css';
const AdminDashboard = () => {
    return (<>
        <div className="content">
            <StudentList />
        </div>

    </>)
}
export default WithHeader(AdminDashboard)