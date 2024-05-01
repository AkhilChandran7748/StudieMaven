import React, { useEffect, useState } from "react";
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { getPaymentStatus } from "../dataManagement/dataServices";
const PaymentStatus = ({ paymentStatus }) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const getPaymentsStatusData = () => {
        getPaymentStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getPaymentsStatusData();
    }, [])
    const getSeverity = () => {
        switch (paymentStatus) {
            case 'Rejected':
                return 'danger'
            case 'Accepted':
                return 'success';
            default: return '';
        }
    }
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Payment Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={data} optionLabel="PaymentStatusName"
                    placeholder="Status" className="m-width-220p" />

                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <div>
            <Badge value={paymentStatus|| 'N/A'} onClick={() => setShow(true)} severity={getSeverity()} />
        </div >

    </>
    )
}
export default PaymentStatus