import React from "react";
import WithHeader from "../common/WithHeaderHoc";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { studentData } from "./data";
import { columnConfig } from "./studentColumnConfig";
import TableActions from "./TableActions";
import Status from "./Status";
const StudentList = () => {
    return (<>
        <div className="content">
        <div className="header">Student List</div>
            <div className="card">
                <DataTable value={studentData} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"10"}>
                    {columnConfig.map((col, i) => <Column key={i} field={col.field} header={col.header} />)}
                    <Column body={Status} header="Status"></Column>
                    <Column body={TableActions} header="Action"></Column>
                </DataTable>
            </div>
        </div>
    </>)
}
export default StudentList