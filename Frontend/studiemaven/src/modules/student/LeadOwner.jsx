import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import StaffDropDown from "../components/StaffDropDown";
import { addStudent } from "./student.services";
const LeadOwner = ({ student, reload }) => {
    const [show, setShow] = useState(false);
    const [ownerId, setOwnerId] = useState(student.OwnerId)
    let loginData = localStorage.getItem('userData');
    loginData = loginData && JSON.parse(loginData) || {};

    const onSubmit = () => {
        let params = {
            owner_id: ownerId,
        }
        ownerId && addStudent({ ...params, application_id: student.ApplicationId }).then((res) => {
            if (res.data.success) {
                setShow(false);
                reload('Student data updated successfully');
            }
        })
        // data.value && show();

        // reset();
    };
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Lead Owner" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <StaffDropDown showLabel={false} onChange={(id) => setOwnerId(id)} />
                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={onSubmit} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <span onClick={() => setShow(loginData.isAdmin ? true : false)}>{student.OwnerName
        }</span>
    </>
    )
}
export default LeadOwner