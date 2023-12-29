import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { universityList } from "../student/data";
const University = () => {
    const [data, setData] = useState(universityList);
    const [value, setValue] = useState('');
    const [editId, setEditId] = useState(null)
    const onSubmit = () => {
        if (value) {
            if (editId) {
                setData(data.map((item) => {
                    if (item.id === editId) {
                        return ({
                            ...item,
                            universityName: value

                        })
                    }
                    return item
                }))
            } else {
                setData([...data, {
                    id: new Date().getTime(),
                    universityName: value
                }])
            }
            setValue('');
            setEditId('');
        }
    }
    const onDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const TableActions = ({ id, universityName }) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(id);
                setValue(universityName)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={()=>onDelete(id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">University</label>
                </span>
                <div className=" flex flex-wrap justify-content-center gap-3 padding-t-10p">
                    <Button onClick={onSubmit} label="Submit" severity="success" className="small-button" />
                    <Button onClick={() => {
                        setValue('');
                        setEditId('')
                    }} label="Cancel" severity="secondary" className="small-button margin-l-5p" />
                </div>
                <div className="content" style={{ textAlign: "-webkit-center" }}>
                    <DataTable value={data} className="width-350p aligin-center" >
                        <Column field="universityName" header="Document Name"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default University