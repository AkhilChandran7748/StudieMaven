import React, { useEffect, useRef, useState } from "react";
import WithHeader from "../common/WithHeaderHoc";
import { useParams } from "react-router-dom";
import { student } from "./data";
import './student.css'
import PersonalInfo from "./PersonalInfo";
import { TabView, TabPanel } from 'primereact/tabview';
import Documents from "../documents/Documents";
import VisaDocuments from "../documents/VisaDocuments";
import { searchStudent } from "./student.services";
import { Toast } from 'primereact/toast';
const ViewStudent = () => {
    const { id } = useParams();
    const toast = useRef(null);
    const [studentData, setStudentData] = useState(null)
    const show = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };
    const getStudentDetails = () => {
        searchStudent({ application_id: id }).then((res) => {
            if (res?.data?.success) {
                setStudentData(res?.data?.data[0])
            }

        }).catch((e) => { console.log(e); })
    }
    useEffect(() => {
        getStudentDetails();
    }, [])
    return (<>
        <Toast ref={toast} />
        <div className="content student">
            <div className="card">
                <PersonalInfo reload={(detail) => {
                    show(detail);
                    getStudentDetails();
                }} student={studentData} />
                <TabView className="content">
                    <TabPanel header="Documents">
                        <Documents documents={student.documents} />
                    </TabPanel>
                    <TabPanel header="Payment Info">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Visa Documents">
                        <VisaDocuments documents={student.documents} />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </>)
}
export default WithHeader(ViewStudent)