import React, { useState } from "react";
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
const VisaStatus = ({ visaStatus, appointmentDate }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const statusList = [
        { name: 'Accepted', code: 'LDN' },
        { name: 'Rejected', code: 'LDsN' },
        { name: 'Appointment Scheduled', code: 'LDssN', hasDate: true },
    ];
    const getSeverity = () => {
        switch (visaStatus) {
            case 'Rejected':
                return 'danger'
            case 'Accepted':
                return 'success';
            default: return '';
        }
    }
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Visa Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={statusList} optionLabel="name"
                    placeholder="Status" className="m-width-220p" />
                {selectedStatus?.hasDate && <Calendar placeholder="Appoinment Date" value={date} onChange={(e) => setDate(e.value)} className="m-width-220p margin-t-20p calender-w" />}

                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <div>
            {appointmentDate && <div className="date-button ">{appointmentDate}</div>}
        <Badge value={visaStatus||'N/A'} onClick={() => setShow(true)} severity={getSeverity()} />
    </div >
       
    </>
    )
}
export default VisaStatus