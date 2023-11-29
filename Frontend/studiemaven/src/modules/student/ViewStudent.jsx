import React from "react";
import WithHeader from "../common/WithHeaderHoc";
import { useParams } from "react-router-dom";
import { student } from "./data";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Avatar } from 'primereact/avatar';

import './student.css'
const ViewStudent = () => {
    const { id } = useParams();
    return (<>
        <div className="content student">
            <div className="card">
                <div className="personal-info padding-30p">
                    <div><h2>{student.name}</h2></div>
                    <Splitter style={{ height: '100px' }} >
                        <SplitterPanel className="flex align-items-center justify-content-center" size={15} minSize={10}>
                            <Avatar className="p-overlay-badge" image="/img/dp.jpg" size="xlarge">
                            </Avatar>
                        </SplitterPanel>
                        <SplitterPanel className="flex align-items-center justify-content-center" size={85}>
                            <div className="padding-t-15p padding-l-20p">
                                <div className="blue" >
                                    <span className="pi pi-envelope grey  margin-r-10" style={{ float: 'left' }} />
                                    <span>  <h5>{student.email}</h5></span>
                                </div>
                                <div >
                                    <span className="pi pi-phone grey  margin-r-10" style={{ float: 'left' }} />
                                    <h5>{student.phone}</h5>
                                </div>
                                <div >
                                    <span className="pi pi-map-marker grey  margin-r-10" style={{ float: 'left' }} />
                                    <h5>{student.address}</h5>
                                </div>
                                
                            </div>
                        </SplitterPanel>
                    </Splitter>

                </div>
            </div>
        </div>
    </>)
}
export default WithHeader(ViewStudent)