import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { addStatus, getStatus } from "./dataServices";
import ColorsDropdown from "../common/ColorDropDown";
const Status = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null);
 
       
    const getStatusData = () => {
        getStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getStatusData();
    }, [])
    const onSubmit = () => {
        if (value.status_name) {
            if (editId) {
                addStatus({...value, status_id: editId,  status_value:100}).then((res) => {
                    if (res.data.success) {
                        getStatusData();
                    }
                })
            } else {
                addStatus({...value, status_value:100}).then((res) => {
                    if (res.data.success) {
                        getStatusData();
                    }
                })
            }
            setValue(null);
            setEditId('');
        }
    }
    const onDelete = (id) => {
        addStatus({delete_status: 1, status_id: id}).then((res) => {
            if (res.data.success) {
                getStatusData();
            }
        })
    }
    const TableActions = (item) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(item.Id);
                setValue({
                    status_name: item.StatusName,
                    color_id: item.Id
                })
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(item.Id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    const ColorComponent = ({ ColorName, ColorCode }) => {
        return <span className="color-badge" style={{ backgroundColor: `#${ColorCode}` }} >{ColorName}</span>
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.status_name || ''} onChange={(e) => setValue({
                        ...value,
                        status_name: e.target.value
                    })} />
                    <label htmlFor="username">Status</label>
                </span>
                <span className="p-inputtext-sm p-float-label  margin-l-10 ">
                <ColorsDropdown value={value?.color_id} onChange={(e) => setValue({
                        ...value,
                        color_id: e.Id
                    })} />
                </span>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue({});
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-350p aligin-center" >
                        <Column field="StatusName" header="Status"></Column>
                        <Column body={ColorComponent} header="Color"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default Status