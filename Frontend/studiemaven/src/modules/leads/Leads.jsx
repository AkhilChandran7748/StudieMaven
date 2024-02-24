import React, { memo, useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { leadsData } from "./data";
import { columnConfig } from "./studentColumnConfig";
import LeadsActions from "./LeadsActions";
import Status from "./Status";
import Search from "./Search";
import AddLead from "./AddLead";
import LeadOwner from "./LeadOwner";
import WithHeader from "../common/WithHeaderHoc";
import IELTS from "../common/IELTS";
import NotesComponent from "./NotesComponent";
import { getLeads } from "./leadServices";
const Leads = () => {
    console.log(`render test`);
    const [leadsData, setleadsData] = useState(null)
    useEffect(()=>{
        getLeads().then((res)=>{
           if(res?.data?.data) {
            setleadsData(res?.data?.data)
           }
        })
    }, [])
    const ApsStatus = (data) =>{
        return <span>{data.APS_Status? 'Yes': 'No'}</span>
    }
    return (<>
        <div className="content">
            <div className="header padding-b-30">Leads </div>
            <div className="card margin-b-md">
                <Search />
            </div>

            <div style={{ textAlign: 'right' }} > <AddLead /></div>
            <div className="card">
                <DataTable value={leadsData} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"10"}>
                    {columnConfig.map((col, i) => <Column key={i} field={col.field} header={col.header} />)}
                    <Column body={(item) => <LeadOwner leadOwner={item.LeadOwner} showlabel={false} />} header="Lead Owner"></Column>
                    <Column body={IELTS} header="IELTS"></Column>
                    <Column body={ApsStatus} header="APS Status"></Column>
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
const leadsWithMemo = memo(Leads)
export default WithHeader(leadsWithMemo)