import React from "react";
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
const StudentList = () => {
    return (<>
        <div className="content">
            <div className="header padding-b-30">Student List</div>
            <div className="card margin-b-md">
                <Search />
            </div>

            <div style={{ textAlign: 'right' }} > <AddStudent /></div>
            <div className="card">
                <DataTable value={studentData} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"10"}>
                    {columnConfig.map((col, i) => <Column key={i} field={col.field} header={col.header} />)}
                    
                    <Column body={LeadOwner} header="Lead Owner"></Column>
                    <Column body={InTake} header="Intake"></Column>
                    <Column body={VisaStatus} header="Visa Status"></Column>                    
                    <Column body={Status} header="Status"></Column>
                    <Column body={TableActions} header="Action"></Column>
                </DataTable>
            </div>
        </div>
    </>)
}
export default StudentList