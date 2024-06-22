import React, { useEffect, useState } from "react";
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { getVisaStatus } from "../dataManagement/dataServices";

import { addStudent } from "../student/student.services";
import moment from "moment";
const VisaStatus = ({ reload, student }) => {
    const { VisaStatus, ApplicationId } = student
    let visaData = JSON.parse(VisaStatus);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(visaData?.date ? new Date(visaData.date) : null);
    const [data, setData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    useEffect(() => {
        setSelectedStatus(data.find((i) => i.Id === visaData?.visa_id))
        // setDate(new Date(visaData.data))
    }, [data, student])
    const getStatusData = () => {
        getVisaStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    const onSubmit = () => {
        addStudent({
            "application_id": ApplicationId,
            visa_status: {
                "visa_id": selectedStatus.Id,
                "date": date
            }
        }).then((res) => {
            if (res.data.success) {
                setShow(false);
                reload("Student data updated successfully")
            }
        })
    }
    useEffect(() => {
        getStatusData();
    }, [show])
    const ColorComponent = () => {
        const { ColorCode, VisaStatusName } = selectedStatus || {}
        debugger;
        return <span onClick={() => setShow(true)}>
            {visaData?.visa_id ? <span className="color-badge" style={{ backgroundColor: `#${ColorCode || '7a7d88'}` }} >{VisaStatusName}</span> :
                <span className="color-badge" style={{ backgroundColor: `#6366f1` }} >N/A</span>}
        </span>
    }
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Visa Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                {show && <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={data} optionLabel="VisaStatusName"
                    placeholder="Status" className="m-width-220p" />}
                {selectedStatus?.VisaDateEnable && <Calendar placeholder="Appoinment Date" value={date} onChange={(e) => setDate(e.value)} className="m-width-220p margin-t-20p calender-w" />}

                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={onSubmit} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <div>
            <ColorComponent />
            {visaData?.date && <div className="date-button ">{moment(visaData?.date).format(' DD MMM YYYY')}</div>}

        </div >

    </>
    )
}
export default VisaStatus