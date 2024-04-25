import React, { useEffect, useState } from "react";
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
import { getStudents } from "./student.services";
const StudentList = () => {
    const [data, setData] = useState([])
    const getStudentData = () => {
        getStudents().then((res) => {
            if (res?.data?.success) {
                setData(res?.data?.data)
            }

        }).catch((e) => { console.log(e); })
    }
    useEffect(() => {
        getStudentData();
    }, [])
    console.log(data);
    return (<>
        <div className="content">
            <div className="header padding-b-30">Student List</div>
            <div className="card margin-b-md">
                <Search />
            </div>

            <div style={{ textAlign: 'right' }} > <AddStudent /></div>
            <div className="card">
                <DataTable value={data} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"10"}>
                    {columnConfig.map((col, i) => <Column key={i} body={(item) => <span>{item[col.field]|| '-'}</span>} field={col.field} header={col.header} />)}

                    <Column body={InTake} header="InTake"></Column>
                    <Column body={PaymentStatus} header="Payment Status"></Column>
                    <Column body={VisaStatus} header="Visa Status"></Column>
                    <Column body={Status} header="Status"></Column>
                    <Column body={TableActions} header="Action"></Column>
                </DataTable>
            </div>
        </div>
    </>)
}
export default StudentList