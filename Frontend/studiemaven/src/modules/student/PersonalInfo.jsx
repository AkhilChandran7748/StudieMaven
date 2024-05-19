import React from "react";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Avatar } from 'primereact/avatar';
import IELTS from "../common/IELTS";
import EditPersonalInfo from "./EditPersonalInfo";
import ProfileComponent from "./ProfileComponent";
const ielts = {
    isQualified: true,
    read: 7,
    listen: 8,
    write: 9,
    speak: 4,
    expiryData: '12/12/23'
}
const PersonalInfo = ({ student, reload }) => {
    return (<>
        <div className="personal-info padding-30p">
            <div><h2>{student?.Name}</h2></div>
            <Splitter style={{ height: '100px' }} >
                <SplitterPanel className="flex align-items-center justify-content-center" size={15} minSize={10}>
                    <ProfileComponent application_id={student?.ApplicationId} profileUrl={student?.ProfileUrl} reload={reload} />
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center" size={45}>
                    <div style={{ fontSize: 'small', fontWeight: 500 }} className="padding-t-15p padding-l-20p">
                        <div className="blue" >
                            <span className="pi pi-envelope grey  margin-r-10" style={{ float: 'left' }} />
                            <span>  <h6>{student?.Email}</h6></span>
                        </div>
                        <div className="red" style={{ marginBottom: '10px' }} >
                            <span className="pi pi-envelope red  margin-r-10" style={{ float: 'left' }} />
                            <span>{student?.SecondaryEmail ? <h6>{student.SecondaryEmail}</h6> : '-'} </span>
                        </div>
                        <div >
                            <span className="pi pi-phone grey  margin-r-10" style={{ float: 'left' }} />
                            <h6>{student?.MobileNumber}</h6>
                        </div>
                        <div >
                            {/* <span className="pi pi-map-marker grey  margin-r-10" style={{ float: 'left' }} />
                            <h5>{student.address}</h5> */}
                        </div>

                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                    <div>
                        <div>
                            <span style={{ fontWeight: 500, fontSize: '13px' }}>IELTS</span>     {student && <IELTS
                                HasIelts={student?.HasIelts}
                                IELTS={student?.IELTS}
                                LeadId={student.LeadId}
                                reload={() => {
                                    reload('IELTS data uplated successfully')
                                }}
                                from_application={true}
                                ApplicationId={student?.ApplicationId} />}
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center" size={20}>

                    <div className="padding-t-15p padding-l-20p" style={{ fontWeight: 500, fontSize: '13px' }}>
                        <div style={{ paddingBottom: '5px' }} >

                            APS Status:  <span className={`${student?.APS_Status == 1 ? 'pi pi-check blue' : 'pi pi-times red'}    margin-r-10`} style={{ float: 'right' }} />
                        </div>
                        <div style={{ paddingBottom: '5px' }}  >
                            TEST AS Status:  <span className={`${student?.TAS_Status == 1 ? 'pi pi-check blue' : 'pi pi-times red'}    margin-r-10`} style={{ float: 'right' }} />

                        </div>
                        <div >
                            Campus France : <span className={`${student?.CFS_Status == 1 ? 'pi pi-check blue' : 'pi pi-times red'}    margin-r-10`} style={{ float: 'right' }} />


                        </div>

                    </div>
                </SplitterPanel>
                <SplitterPanel className="flex align-items-center justify-content-center" size={5}>
                    <div className="margin-l-10">
                        {student && <EditPersonalInfo student={student} reload={reload} />}
                    </div>
                </SplitterPanel>
            </Splitter>

        </div></>)
}
export default PersonalInfo