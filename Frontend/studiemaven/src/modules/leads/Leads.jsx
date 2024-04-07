import React, { memo, useEffect, useRef, useState } from "react";
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
import moment from "moment";
import { Toast } from "primereact/toast";
const Leads = () => {
    const toast = useRef(null);
    const [leadsData, setleadsData] = useState(null)
    const getLeadsData = (params) => {
        getLeads(params).then((res) => {
            if (res?.data?.data) {
                setleadsData(res?.data?.data)
            }
        })
    }
    const show = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };

    useEffect(() => {
        getLeadsData();
    }, [])
    const ApsStatus = (data) => {
        return <span>{data.APS_Status == 1 ? 'Yes' : 'No'}</span>
    }
    return (<>
        <Toast ref={toast} />
        <div className="content">
            <div className="header padding-b-30">Leads </div>
            <div className="card margin-b-md">
                <Search onSearch={getLeadsData} />
            </div>

            <div style={{ textAlign: 'right' }} > <AddLead reload={(detail) => {
                show(detail)
                getLeadsData()
            }
            } /></div>
            <div className="card">
                <DataTable value={leadsData} size={'normal'} tableStyle={{ minWidth: '50rem' }} paginator rows={"10"}>
                    {columnConfig.map((col, i) => <Column key={i} field={col.field} header={col.header} />)}
                    <Column body={(item) => <span>{moment(item.CreatedDate).format(' DD MMM YYYY')}</span>} header="Date Of Admission"></Column>
                    <Column body={(item) => <LeadOwner reload={() => {
                            show('Lead data updated successfully')
                            getLeadsData()
                        }}  data={item} showlabel={false} />} header="Lead Owner"></Column>
                    <Column body={(item) => <IELTS {...item}
                        reload={() => {
                            show('IELTS details updated successfully')
                            getLeadsData()
                        }} showlabel={false} />} header="IELTS"></Column>
                    <Column body={ApsStatus} header="APS Status"></Column>
                    <Column body={NotesComponent} header="Notes"></Column>
                    <Column body={(item) => <LeadsActions data={item} reload={(detail) => {
                        show(detail)
                        getLeadsData()
                    }} />} header="Action"></Column>

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