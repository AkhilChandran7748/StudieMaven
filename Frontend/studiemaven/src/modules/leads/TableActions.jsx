import React from "react";
import {
    useNavigate,
    Outlet
} from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import EditStudent from "./EditStudent";
const TableActions = (data) => {
    const { id } = data;
    const navigate = useNavigate();
    //sttaus check on delete
    return (<>

        <span title="View" onClick={() => {
            navigate(`${RENDER_URL.VIEW_STUDENT}/${id}`);
        }} className="pi pi-external-link margin-r-10 grey" ></span>

        <EditStudent student={data} />
        <span title="Delete" className="pi pi-trash red" ></span>
    </>
    )
}
export default TableActions