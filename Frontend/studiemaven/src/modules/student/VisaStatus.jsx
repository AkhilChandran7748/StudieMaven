import React, { useEffect, useState } from "react";
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { getVisaStatus } from "../dataManagement/dataServices";

const VisaStatus = ({ visaStatus, appointmentDate }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    const [data, setData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const getStatusData = () => {
        getVisaStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getStatusData();
    }, [])
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Visa Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={data} optionLabel="VisaStatusName"
                    placeholder="Status" className="m-width-220p" />
                {selectedStatus?.VisaDateEnable && <Calendar placeholder="Appoinment Date" value={date} onChange={(e) => setDate(e.value)} className="m-width-220p margin-t-20p calender-w" />}

                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <div>
            {appointmentDate && <div className="date-button ">{appointmentDate}</div>}
        <Badge value={visaStatus||'N/A'} onClick={() => setShow(true)} severity={''} />
    </div >
       
    </>
    )
}
export default VisaStatus