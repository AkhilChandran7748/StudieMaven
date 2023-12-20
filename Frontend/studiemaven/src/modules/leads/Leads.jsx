import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { leadsData } from "./data";
import { columnConfig } from "./studentColumnConfig";
import LeadsActions from "./LeadsActions";
import Status from "./Status";
import Search from "./Search";
import AddStudent from "./AddStudent";
import VisaStatus from "./VisaStatus";
import InTake from "./InTake";
import LeadOwner from "./LeadOwner";
import WithHeader from "../common/WithHeaderHoc";
import IELTS from "./IELTS";
import NotesComponent from "./NotesComponent";
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
                    <Column body={(item) => <LeadOwner leadOwner={item.leadOwner} showlabel={false} />} header="Lead Owner"></Column>
                    <Column body={IELTS} header="IELTS"></Column>
                    <Column body={NotesComponent} header="Notes"></Column>
                    <Column body={LeadsActions} header="Action"></Column>

                    {/* <Column body={LeadOwner} header="Lead Owner"></Column>
                  
                    <Column body={VisaStatus} header="Visa Status"></Column>
                    <Column body={Status} header="Status"></Column>
                    <Column body={TableActions} header="Action"></Column> */}
                </DataTable>
            </div>
        </div>
    </>)
}
export default WithHeader(Leads)