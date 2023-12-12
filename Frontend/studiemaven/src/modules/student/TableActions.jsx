import React from "react";
import {
    useNavigate,
    Outlet
} from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
const TableActions = ({id}) => {
    const navigate = useNavigate();
    //sttaus check on delete
    return (<>
    
        <span title="View" onClick={()=>{
              navigate(`${RENDER_URL.VIEW_STUDENT}/${id}`);
        }} className="pi pi-external-link margin-r-10 grey" ></span>
        <span title="Edit" className="pi pi-user-edit margin-r-10 grey" ></span>
        <span title="Delete" className="pi pi-trash red" ></span>        
        </>
    )
}
export default TableActions