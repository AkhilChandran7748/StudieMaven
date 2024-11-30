import React, { useEffect, useRef, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {
    Link,
} from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import { addStudent, searchStudent } from "../student/student.services";
import ConfirmModal from "../common/ConfirmModal";
import { Toast } from "primereact/toast";
const DeleteRequests = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [showRevoke, setShowRevoke] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const toast = useRef(null);

    const onRevoke = () => {
        addStudent({ application_id: deleteId, delete_status: 0 }).then((res) => {
            if (res.data.success) {
                setShowRevoke(false)
                getStudentData();
                showToast('Delete Request Cancelled successfully');
            }
        })
    }
    const onDelete = () => {
        addStudent({ application_id: deleteId, delete_status: 1 }).then((res) => {
            if (res.data.success) {
                setShow(false)
                getStudentData();
                showToast('Student data deleted successfully');
            }
        })
    }
    const getStudentData = () => {

        searchStudent({ delete_status: 2 }).then((res) => {
            if (res?.data?.success) {
                setData(res?.data?.data)
            }

        }).catch((e) => { console.log(e); })

    }
    useEffect(() => {
        getStudentData();
    }, []
    )

    const showToast = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };
    const TableActions = ({ ApplicationId }) => {
        return (<>
            <Link to={`${RENDER_URL.VIEW_STUDENT}/${ApplicationId}`} target="_blank">
                <span title="View" className="pi pi-external-link margin-r-10 grey" >

                </span>
            </Link>


            <span onClick={() => { setDeleteId(ApplicationId); setShow(true) }} title="Delete" className="pi pi-trash red  margin-r-10" ></span>
            <span onClick={() => { setDeleteId(ApplicationId); setShowRevoke(true) }} title="Cancel Request" className="pi pi-refresh blue" ></span>
        </>)
    }
    return (
        <div className="content" style={{ textAlign: "-webkit-center" }}>
            <Toast ref={toast} />
            <ConfirmModal
                visible={show}
                onClose={() => setShow(false)}
                content={"Are you sure you want to delete?"}
                onConfirm={onDelete}
                header={"Confirm Delete"}
            />
            <ConfirmModal
                visible={showRevoke}
                cancelText={'Close'}
                onClose={() => setShowRevoke(false)}
                content={"Are you sure you want to cancel delete request?"}
                onConfirm={onRevoke}
                header={"Confirm Cancel"}
            />
            <DataTable value={data} className="width-350p aligin-center" >
                <Column field="Name" header="Name"></Column>
                <Column body={TableActions} header="Action"></Column>
            </DataTable>
        </div>
    )
}

export default DeleteRequests
