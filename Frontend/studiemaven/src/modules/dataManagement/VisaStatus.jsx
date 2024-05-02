import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { visaStatusOptions } from "../student/data";
import { Dropdown } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';
import { Checkbox } from 'primereact/checkbox';
import ColorsDropdown from "../common/ColorDropDown";
import { getVisaStatus, addVisaStatus } from "./dataServices";
const VisaStatus = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    const getStatusData = () => {
        getVisaStatus().then((res) => {
            if (res.data.success) {
                setData(res.data.data)
            }
        })
    }
    useEffect(() => {
        getStatusData();
    }, [])
    const onSubmit = () => {
        if (value.status) {
            if (editId) {
                addVisaStatus({
                    visa_status_type_id: editId,
                    "visa_status_type_name": value.status,
                    "visa_enable_date": value.hasDate,
                    "color_id": value.color,
                }).then((res) => {
                    if (res.data.success) {
                        getStatusData();
                    }
                })
            } else {
                addVisaStatus({
                    "visa_status_type_name": value.status,
                    "visa_enable_date": value.hasDate,
                    "color_id": value.color,
                }).then((res) => {
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
        addVisaStatus({
            visa_status_type_id: id,
            "delete_status": 1,
        }).then((res) => {
            if (res.data.success) {
                getStatusData();
            }
        })
    }
    const TableActions = (item) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(item.Id);
                setValue({status: item.VisaStatusName,hasDate: item.VisaDateEnable, color: item.ColorId})
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(item.Id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    const EnableDateComponent = ({ VisaDateEnable }) => {
        return VisaDateEnable ? <i className="pi pi-check"></i> : <></>
    }
    const ColorComponent = ({ ColorName, ColorCode }) => {
        return <span className="color-badge" style={{ backgroundColor: `#${ColorCode}` }} >{ColorName}</span>
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value?.status || ''} onChange={(e) => setValue({
                        ...value,
                        status: e.target.value
                    })} />
                    <label htmlFor="username">Visa Status</label>
                </span>
                <span className="p-inputtext-sm p-float-label  margin-l-10 ">
                    <ColorsDropdown value={value?.color} onChange={(e) => setValue({
                        ...value,
                        color: e.Id
                    })} />
                    <label htmlFor="dd-city">Color</label>
                </span>
                <div className=" margin-l-10 ">
                    <div>   Enable date  </div> <Checkbox checked={value?.hasDate === 1|| value?.hasDate === true} onChange={(e) => {
                        setValue({
                            ...value,
                            hasDate: e.checked
                        })
                    }} />
                </div>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue({});
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-500p aligin-center" >
                        <Column field="VisaStatusName" header="Status"></Column>
                        <Column body={ColorComponent} header="Badge Color"></Column>
                        <Column body={EnableDateComponent} header="Enable Date"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default VisaStatus