import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import AddStudent from "./AddStudent";
import { getStudents, searchStudent } from "./student.services";
import { Toast } from "primereact/toast";
import StudentListComponent from "./StudentListComponent";

import './student.css'
import { downloadToExcel } from "../../Utils/Util";
const StudentList = () => {
    const toast = useRef(null);
    const [data, setData] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);
    const getStudentData = (params) => {
        if (params) {

            searchStudent(params).then((res) => {
                if (res?.data?.success) {
                    setData(res?.data?.data)
                }

            }).catch((e) => { console.log(e); })
        } else {
            getStudents().then((res) => {
                if (res?.data?.success) {
                    setData(res?.data?.data)
                }

            }).catch((e) => { console.log(e); })
        }

    }
    const show = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };
    useEffect(() => {
        getStudentData();
    }, [])
    return (<>
        <Toast ref={toast} />
        <div className="content">
            <div className="header padding-b-30">Student List</div>
            <div className="card margin-b-md">
                <Search onSearch={getStudentData} onExport={() => {
                    downloadToExcel(data);
                }} />
            </div>

            <div style={{ textAlign: 'right' }} > <AddStudent reload={(detail) => {
                getStudentData();
                show(detail);
            }} /></div>
            <StudentListComponent
                data={data}
                show={show}
                getStudentData={getStudentData}

            />
            {/* </div> */}
        </div >
    </>)
}
export default StudentList