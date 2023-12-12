import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { visaStatusOptions } from "../student/data";
import { Dropdown } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';
import { Checkbox } from 'primereact/checkbox';
const VisaStatus = () => {
    const [data, setData] = useState(visaStatusOptions);
    const [value, setValue] = useState({});
    const [editId, setEditId] = useState(null)
    const colors = [
        { name: 'Red', code: 'red' },
        { name: 'Green', code: 'green' },
        { name: 'Yellow', code: 'yellow' },
        { name: 'Blue', code: 'blue' },
        { name: 'Purple', code: 'purple' },
    ];
    const onSubmit = () => {
        if (value.status) {
            if (editId) {
                setData(data.map((item) => {
                    if (item.id === editId) {
                        return ({
                            ...item,
                            status: value.status,
                            color: value.color,
                            hasDate: value.hasDate

                        })
                    }
                    return item
                }))
            } else {
                setData([...data, {
                    id: new Date().getTime(),
                    status: value.status,
                    color: value.color,
                    hasDate: value.hasDate
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
    const getColorValue = () => {
        return colors.find((i) => i.code === value?.color)
    }
    const BadgeComponent = ({ color }) => {
        return <Badge value={color} className={`${color}-bg`} />
    }
    const EnableDateComponent = ({ hasDate }) => {
        return hasDate ? <i className="pi pi-check"></i> : <></>
    }
    console.log(value);
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
                    <Dropdown inputId="dd-city" value={getColorValue()} onChange={(e) => setValue({
                        ...value,
                        color: e.target.value.code
                    })} options={colors} optionLabel="name" className="m-width-220p" />
                    <label htmlFor="dd-city">Color</label>
                </span>
                <div className=" margin-l-10 ">
                    <div>   Enable date  </div> <Checkbox checked={value?.hasDate} onChange={(e) => {
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
                    <DataTable value={data} className="width-400p aligin-center" >
                        <Column field="status" header="Status"></Column>
                        <Column body={BadgeComponent} header="Badge Color"></Column>
                        <Column body={EnableDateComponent} header="Enable Date"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default VisaStatus