import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { staffs } from "../student/data";
import { Badge } from 'primereact/badge';
import WithHeader from "../common/WithHeaderHoc";
import { getStaffs } from "./staffService";
import { ManageLocalStorage } from "../../Services/Localstorage";
const Staffs = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    let userData = ManageLocalStorage.get('userData')
    userData = JSON.parse(userData);
    const { SiteID = {} } = userData || {}
    const getStaffData = () => {
        getStaffs({ SiteID }).then((res) => {
           if(res?.data?.data){
            setData(res?.data?.data)
           }
        })
    }
    useEffect(() => {
        getStaffData();
    }, [])
    const onSubmit = () => {
        if (value.FirstName) {
            if (editId) {
                setData(data.map((item) => {
                    if (item.id === editId) {
                        return ({
                            ...item,
                            FirstName: value.FirstName,
                            EmailId: value.EmailId,
                            Mobile: value.Mobile,

                        })
                    }
                    return item
                }))
            } else {
                setData([...data, {
                    id: new Date().getTime(),
                    FirstName: value.FirstName,
                    EmailId: value.EmailId,
                    Mobile: value.Mobile,
                }])
            }
            setValue(null);
            setEditId('');
        }
    }
    const onDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const TableActions = (item) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(item.id);
                setValue(item)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(item.id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>
        <div className=" content margin-t-30p h-100">

            <div className="header padding-b-30">Staffs</div>
            <div className="content ">
                <div className="row align-center">
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.name || ''} onChange={(e) => setValue({
                            ...value,
                            name: e.target.value
                        })} />
                        <label htmlFor="username">First Name</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.name || ''} onChange={(e) => setValue({
                            ...value,
                            name: e.target.value
                        })} />
                        <label htmlFor="username">Last Name</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.email || ''} onChange={(e) => setValue({
                            ...value,
                            email: e.target.value
                        })} />
                        <label htmlFor="username">Email</label>
                    </span>
                    <span className="p-float-label margin-l-10">
                        <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.phone || ''} onChange={(e) => setValue({
                            ...value,
                            phone: e.target.value
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
                        <Column field="Lastname" header="Last Name"></Column>
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