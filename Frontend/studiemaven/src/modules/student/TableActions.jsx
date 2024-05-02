import React, { useState } from "react";
import {
    useNavigate,
    Outlet
} from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import EditStudent from "./EditStudent";
import ConfirmModal from "../common/ConfirmModal";
import { addStudent } from "./student.services";
const TableActions = ({ data, reload }) => {
    let loginData = localStorage.getItem('userData');
    loginData = loginData && JSON.parse(loginData) || {};
    const [show, setShow] = useState(false)
    // loginData.isAdmin
    const { ApplicationId } = data;
    const navigate = useNavigate();
    //sttaus check on delete
    const onDelete = () => {
        addStudent({ application_id: data.ApplicationId, delete_status: loginData.isAdmin ? 1 : 2 }).then((res) => {
            if (res.data.success) {
                setShow(false)
                reload('Student data deleted successfully');
            }
        })
    }
    const DeleteButton = () => {
        if (data.DeleteStatus === 0)
            return <span title="Delete" onClick={() => setShow(true)} className="pi pi-trash red" ></span>
        return <span  title="Pending for admin approval" className="pi pi-trash blue" ></span>
    }
    return (<>
        <ConfirmModal
            visible={show}
            onClose={() => setShow(false)}
            content={"Are you sure you want to delete?"}
            onConfirm={onDelete}
            header={"Confirm Delete"}
        />
        <div style={{ minWidth: '100px' }}>

            <span title="View" onClick={() => {
                navigate(`${RENDER_URL.VIEW_STUDENT}/${ApplicationId}`);
            }} className="pi pi-external-link margin-r-10 grey" ></span>

            <EditStudent student={data} reload={reload} />
            <DeleteButton/>

        </div>
    </>
    )
}
export default TableActions