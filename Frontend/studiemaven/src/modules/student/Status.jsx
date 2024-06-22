import React, { useEffect, useState } from "react";
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { addStudent } from "../student/student.services";
import { getStatus } from "../dataManagement/dataServices";
const Status = ({ reload, student }) => {
    const { Status, ApplicationId } = student
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const [selectedStatus, setSelectedStatus] = useState(null);
    useEffect(() => {
        setSelectedStatus(data.find((i) => i.Id === Status))
    }, [data, student])
    const getStatusData = () => {
        getStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getStatusData();
    }, [show])
    const onSubmit = () => {
        addStudent({
            "application_id": ApplicationId,
            "status": selectedStatus.Id
        }).then((res) => {
            if (res.data.success) {
                setShow(false);
                reload("Student data updated successfully")
            }
        })
    }
    const ColorComponent = () => {
        const { ColorCode, StatusName } = selectedStatus || {}
        return <span onClick={() => setShow(true)}>
            {Status ? <span className="color-badge" style={{ backgroundColor: `#${ColorCode || '7a7d88'}` }} >{StatusName}</span> :
                <span className="color-badge" style={{ backgroundColor: `#6366f1` }} >N/A</span>}
        </span>
    }
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Status" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                {show && <Dropdown value={selectedStatus} onChange={(e) => setSelectedStatus(e.value)} options={data} optionLabel="StatusName"
                    placeholder="Status" className="m-width-220p" />}
                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={onSubmit} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <ColorComponent />
    </>
    )
}
export default Status