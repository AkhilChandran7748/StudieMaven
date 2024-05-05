import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import VisaStatus from "./VisaStatus";
import InTake from "./InTake";
import LeadOwner from "./LeadOwner";
import PaymentStatus from "./PaymentStatus";
import { studentData } from "./data";
import { columnConfig } from "./studentColumnConfig";
import TableActions from "./TableActions";
import Status from "./Status";
import React from "react";
const StudentListComponent = ({ data, show, getStudentData }) => {
    return (<>
        <div className="card content">
            <DataTable value={data} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"25"}>
                {columnConfig.map((col, i) => <Column key={i} body={(item) => <span>{item[col.field] || '-'}</span>} field={col.field} header={col.header} />)}

                <Column body={(item) => {
                    return <LeadOwner student={item} reload={(detail) => {
                        show(detail)
                        getStudentData();
                    }} />
                }}
                    header="	
                        Owner Name" ></Column>
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
    </>)
}
export default StudentListComponent