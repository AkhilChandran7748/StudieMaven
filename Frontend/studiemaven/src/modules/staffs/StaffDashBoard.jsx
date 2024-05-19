import React from "react";
import WithHeader from "../common/WithHeaderHoc";
import StudentList from "../student/StudentList";
const StaffDashBoard = () => {
    return (<>
        <div className="content">
            <StudentList />
        </div>

    </>)
}
export default WithHeader(StaffDashBoard)