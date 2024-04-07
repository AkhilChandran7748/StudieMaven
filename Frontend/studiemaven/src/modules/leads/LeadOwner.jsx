import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import StaffDropDown from "../components/StaffDropDown";
import { updateLEAD } from "./leadServices";
const LeadOwner = ({ data, reload }) => {
    const [show, setShow] = useState(false);
    const [ownerId, setOwnerId] = useState()
    let { LeadOwner } = data
    const onSubmit = () => {
        let params = {
            id: data.LeadId,
            email: data.Email,
            name: data.Name,
            mobile: data.MobileNumber,
            aps_status: data.APS_Status,
            qualification: data.HigherQualification,
            country_id: data.CountryId,
            owner_id: ownerId,
        }
        ownerId && updateLEAD(params).then((res) => {
            if (res?.data?.success) {
                reload();
                setShow(false);;
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
        <span onClick={() => setShow(true)}>{LeadOwner}</span>
    </>
    )
}
export default LeadOwner