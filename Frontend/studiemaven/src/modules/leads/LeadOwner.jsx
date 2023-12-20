import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import StaffDropDown from "../components/StaffDropDown";
const LeadOwner = ({ leadOwner }) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(null);
    return (<>
        {show && <Dialog headerClassName="align-center" header="Change Lead Owner" visible={show} style={{ width: '30vw' }} onHide={() => setShow(false)} closable={false} >
            <div className=" align-center ">
                <StaffDropDown showLabel={false}/>
                <div className="padding-t-20p">
                    <span className="padding-r-sm">   <Button onClick={() => setShow(false)} label="Update" severity="success" size="small" /></span>
                    <Button onClick={() => setShow(false)} label="Cancel" severity="danger" size="small" />
                </div>
            </div>
        </Dialog>}
        <span  onClick={() => setShow(true)}>{leadOwner}</span>
    </>
    )
}
export default LeadOwner