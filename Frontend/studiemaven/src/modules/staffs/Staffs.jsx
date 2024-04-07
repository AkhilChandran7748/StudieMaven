import React, { useEffect, useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import WithHeader from "../common/WithHeaderHoc";
import { addStaffs, getStaffs } from "./staffService";
import { ManageLocalStorage } from "../../Services/Localstorage";
import ConfirmModal from "../common/ConfirmModal";
import { Toast } from "primereact/toast";
const Staffs = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)

    let userData = ManageLocalStorage.get('userData')
    userData = JSON.parse(userData);
    const { SiteID = {} } = userData || {}
    const getStaffData = () => {
        getStaffs({ SiteID }).then((res) => {
            if (res?.data?.data) {
                setData(res?.data?.data)
            }
        })
    }
    useEffect(() => {
        getStaffData();
    }, [])

    const toast = useRef(null);
    const showToast = (detail) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail });
    };
    const onSubmit = () => {
        if (value.FirstName) {
            if (editId) {
                let editParams = {
                    id: editId,
                    "email": value.EmailID || '',
                    "mobile": value.Mobile || '',
                    "firstname": value.FirstName,
                    "lastname": value.LastName || '',
                }
                addStaffs(editParams).then((res) => {
                    if (res?.data?.success) {
                        getStaffData();
                        showToast('Staff details updated sucessfully');
                    }
                })
            } else {
                let addParams = {
                    "email": value.EmailID || '',
                    "password": "qwerty123",
                    "mobile": value.Mobile || '',
                    "site_id": SiteID,
                    "firstname": value.FirstName,
                    "lastname": value.LastName || '',
                    "logintype": "normal"
                }
                addStaffs(addParams).then((res) => {
                    if (res?.data?.success) {
                        getStaffData();
                        showToast('Staff details added sucessfully');
                    }
                })
            }
            setValue(null);
            setEditId('');
        }
    }

    const TableActions = (item) => {
        const [show, setShow] = useState(false);
        const onDelete = () => {
            setShow(false)

            let addParams = {
                id: item.IdUser,
                delete_status: 1
                
            }
            addStaffs(addParams).then((res) => {
                if (res?.data?.success) {
                    getStaffData();
                    showToast('Staff details deleted sucessfully');
                }
            })
        }
        return (<>
            <Toast ref={toast} />
            <ConfirmModal
                visible={show}
                onClose={() => setShow(false)}
                content={"Are you sure you want to delete?"}
                onConfirm={onDelete}
                header={"Confirm Delete"}
            />
            <span title="Edit" onClick={() => {
                setEditId(item.IdUser);
                setValue(item)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => setShow(item.IdUser)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>

        <div className=" content margin-t-30p h-100">

            <div className="header padding-b-30">Staffs</div>
            <div className="content ">
                <div className="row align-center">
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.FirstName || ''} onChange={(e) => setValue({
                            ...value,
                            FirstName: e.target.value
                        })} />
                        <label htmlFor="username">First Name</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.LastName || ''} onChange={(e) => setValue({
                            ...value,
                            LastName: e.target.value
                        })} />
                        <label htmlFor="username">Last Name</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.EmailID || ''} onChange={(e) => setValue({
                            ...value,
                            EmailID: e.target.value
                        })} />
                        <label htmlFor="username">Email</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.Mobile || ''} onChange={(e) => setValue({
                            ...value,
                            Mobile: e.target.value
                        })} />
                        <label htmlFor="username">Phone</label>
                    </span>
                </div>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p padding-b-30p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue({});
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content card" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="aligin-center" >
                        <Column field="FirstName" header="First Name"></Column>
                        <Column field="LastName" header="Last Name"></Column>
                        <Column field="EmailID" header="Email"></Column>
                        <Column field="Mobile" header="Phone"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default WithHeader(Staffs)