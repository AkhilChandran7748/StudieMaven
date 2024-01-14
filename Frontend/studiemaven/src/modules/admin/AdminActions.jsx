import React from "react";
import WithHeader from "../common/WithHeaderHoc";
import { TabView, TabPanel } from 'primereact/tabview';
import './admin.css'
import DeleteRequests from "./DeleteRequests";
import VerifyDocuments from "./VerifyDocuments";
const AdminActions = () => {
    return (
        <div className="admin">
            <TabView>
                <TabPanel header="Delete Requests">
                    <DeleteRequests/>
                </TabPanel>
                <TabPanel header="Verify Documents">
                    <VerifyDocuments/>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default WithHeader(AdminActions)
