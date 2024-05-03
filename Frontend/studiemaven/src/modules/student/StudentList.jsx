import React, { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { studentData } from "./data";
import { columnConfig } from "./studentColumnConfig";
import TableActions from "./TableActions";
import Status from "./Status";
import Search from "./Search";
import AddStudent from "./AddStudent";
import VisaStatus from "./VisaStatus";
import InTake from "./InTake";
import LeadOwner from "./LeadOwner";
import PaymentStatus from "./PaymentStatus";
import { getStudents, searchStudent } from "./student.services";
import { Toast } from "primereact/toast";
const StudentList = () => {
    const toast = useRef(null);
    const [data, setData] = useState([])
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
                <Search onSearch={getStudentData} />
            </div>

            <div style={{ textAlign: 'right' }} > <AddStudent reload={(detail)=>{
                getStudentData();
                show(detail);
            }} /></div>
            <div className="card">
                <DataTable value={data} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"25"}>
                    {columnConfig.map((col, i) => <Column key={i} body={(item) => <span>{item[col.field] || '-'}</span>} field={col.field} header={col.header} />)}

                    <Column body={InTake} header="InTake"></Column>
                    <Column body={(item) => {
                        return <PaymentStatus student={item} reload={(detail) => {
                            show(detail)
                            getStudentData();
                        }} />
                    }}
                        header="Payment Status" ></Column>
                    <Column
                        body={(item) => {
                            return <VisaStatus student={item} reload={(detail) => {
                                show(detail)
                                getStudentData();
                            }} />
                        }}
                        header="Visa Status"></Column>
                    <Column
                        body={(item) => {
                            return <Status student={item} reload={(detail) => {
                                show(detail)
                                getStudentData();
                            }} />
                        }} header="Status"></Column>
                    <Column body={(item) => {
                        return <TableActions data={item} reload={(detail) => {
                            show(detail)
                            getStudentData();
                        }} />
                    }} header="Action"></Column>
                </DataTable>
            </div>
        </div >
    </>)
}
export default StudentList