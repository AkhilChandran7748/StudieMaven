import React from "react";
import WithHeader from "../common/WithHeaderHoc";
import { useParams } from "react-router-dom";
import { student } from "./data";
import './student.css'
import PersonalInfo from "./PersonalInfo";
import { TabView, TabPanel } from 'primereact/tabview';
import Documents from "./Documents";
const ViewStudent = () => {
    const { id } = useParams();
    return (<>
        <div className="content student">
            <div className="card">
                <PersonalInfo student={student} />
                <TabView className="content">
                    <TabPanel header="Education Info">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TabPanel>
                    <TabPanel header="Payment Info">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Documents">
                       <Documents documents={student.documents}/>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </>)
}
export default WithHeader(ViewStudent)