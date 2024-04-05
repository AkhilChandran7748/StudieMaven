import React, { useState } from "react";
import {
    useNavigate,
    Outlet
} from "react-router-dom";
import EditStudent from "./EditLead";
import ConfirmModal from "../common/ConfirmModal";
import { updateLEAD } from "./leadServices";
const LeadsActions = ({ data, reload }) => {
    const { LeadId,
        Name,
        MobileNumber,
        APS_Status,
        HigherQualification,
        ReferenceFrom,
        CountryId,
        OwnerId,
    } = data;
    const [show, setShow] = useState(false)
    //sttaus check on delete
    const onDelete = () => {
        let params = {
            id:LeadId,
            delete_status: 1
        }
        updateLEAD(params).then((res) => {
            if (res.data.success) {
                setShow(false);
                reload();
            }
        })
    }
    return (<>
        <ConfirmModal
            visible={show}
            onClose={() => setShow(false)}
            content={"Are you sure you want to delete?"}
            onConfirm={onDelete}
            header={"Confirm Delete"}
        />
        <span title="Convert" className="pi pi-sign-in margin-r-10 grey" ></span >

        <EditStudent student={data} reload={reload} />
        <span onClick={() => setShow(true)} title="Delete" className="pi pi-trash red" ></span>
    </>
    )
}
export default LeadsActions