import React, { useEffect, useState } from "react";
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { addStatus, updateStatus, getStatus } from "../dataManagement/dataServices";
const Status = ({ status }) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const [selectedStatus, setSelectedStatus] = useState(null);

    const getStatusData = () => {
        getStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getStatusData();
    }, [])
    const getSeverity = () => {
        switch (status) {
            case 'Rejected':
                return 'danger'
            case 'Accepted':
                return 'success';
            default: return '';
        }
    }
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={data} optionLabel="StatusName"
                    placeholder="Status" className="m-width-220p" />
                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <Badge value={status || 'N/A'} onClick={() => setShow(true)} severity={getSeverity()} />
    </>
    )
}
export default Status