import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { leadsData } from "./data";
import { columnConfig } from "./studentColumnConfig";
import TableActions from "./TableActions";
import Status from "./Status";
import Search from "./Search";
import AddStudent from "./AddStudent";
import VisaStatus from "./VisaStatus";
import InTake from "./InTake";
import LeadOwner from "./LeadOwner";
import WithHeader from "../common/WithHeaderHoc";
const Leads = () => {
    return (<>
        <div className="content">
            <div className="header padding-b-30">Leads </div>
            <div className="card margin-b-md">
                <Search />
            </div>

            <div style={{ textAlign: 'right' }} > <AddStudent /></div>
            <div className="card">
                <DataTable value={leadsData} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"10"}>
                    {columnConfig.map((col, i) => <Column key={i} field={col.field} header={col.header} />)}

                    {/* <Column body={LeadOwner} header="Lead Owner"></Column>
                    <Column body={InTake} header="Intake"></Column>
                    <Column body={VisaStatus} header="Visa Status"></Column>
                    <Column body={Status} header="Status"></Column>
                    <Column body={TableActions} header="Action"></Column> */}
                </DataTable>
            </div>
        </div>
    </>)
}
export default WithHeader(Leads)