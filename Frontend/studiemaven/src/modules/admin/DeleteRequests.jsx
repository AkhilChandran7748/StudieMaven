import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { studentData } from "../student/data";
import {
    Link,
    useNavigate
} from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
const DeleteRequests = () => {
    const [data, setData] = useState(studentData.filter((i) => i.deleteStatus === 'Pending'))
    const navigate = useNavigate();
    const TableActions = ({ id, countryName }) => {
        return (<>
            <Link to={`${RENDER_URL.VIEW_STUDENT}/${id}`} target="_blank">
                <span title="View" className="pi pi-external-link margin-r-10 grey" >

                </span>
            </Link>


            <span onClick={() => { }} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (
        <div className="content" style={{ textAlign: "-webkit-center" }}>
            <DataTable value={data} className="width-350p aligin-center" >
                <Column field="name" header="Name"></Column>
                <Column body={TableActions} header="Action"></Column>
            </DataTable>
        </div>
    )
}

export default DeleteRequests
