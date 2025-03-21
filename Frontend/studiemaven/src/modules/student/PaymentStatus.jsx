import React, { useContext, useEffect, useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { addStudent } from "../student/student.services";
import { DataContext } from "../common/dataContext";
const PaymentStatus = ({ reload, student }) => {
const { payemntData: data } = useContext(DataContext)
    const { ApplicationId, PaymentStatusTypeId } = student
    const [show, setShow] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState({});
    // const getPaymentsStatusData = () => {
    //     getPaymentStatus().then((res) => {
    //         if (res.data.success) {
    //             setData(res.data.data)
    //         }
    //     })
    // }
    useEffect(() => {
        setSelectedStatus(data.find((i) => i.Id === PaymentStatusTypeId))
    }, [PaymentStatusTypeId, data])
    // useEffect(() => {
    //     getPaymentsStatusData();
    // }, [show])
    const onSubmit = () => {
        addStudent({
            "application_id": ApplicationId,
            "payment_status_id": selectedStatus.Id
        }).then((res) => {
            if (res.data.success) {
                setShow(false);
                reload("Student data updated successfully")
            }
        })
    }
    const ColorComponent = () => {
        const { ColorCode, PaymentStatusName } = selectedStatus || {}
        return <span onClick={() => setShow(true)}>
            {PaymentStatusTypeId ? <span className="color-badge" style={{ backgroundColor: `#${ColorCode || '7a7d88'}` }} >{PaymentStatusName}</span> :
                <span className="color-badge" style={{ backgroundColor: `#6366f1` }} >N/A</span>}
        </span>
    }
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Payment Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                {show && <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={data} optionLabel="PaymentStatusName"
                    placeholder="Status" className="m-width-220p" />}

                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={onSubmit} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <div>
            <ColorComponent />
        </div >

    </>
    )
}
export default PaymentStatus