import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getUniversities, addUniversity, updateUniversity } from "./dataServices";
const University = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [editId, setEditId] = useState(null)
    const loadData = () => {
        getUniversities().then(res => {
            if (res?.data?.success) {
                setData(res.data?.data || []);
            }
        })
    }
    useEffect(() => {
        loadData();
    }, [])
    const onSubmit = () => {
        if (value) {
            if (editId) {
                updateUniversity({ uni_name: value, uni_id: editId }).then((res) => {
                    if (res.data.success) {
                        loadData();
                    }
                })
            } else {
                addUniversity({ uni_name: value }).then((res) => {
                    if (res.data.success) {
                        loadData();
                    }
                })
            }
            setValue('');
            setEditId('');
        }
    }
    const onDelete = (id) => {

        updateUniversity({ DeleteStatus: 1, id: id }).then((res) => {
            if (res.data.success) {
                loadData();
            }
        })
    }
    const TableActions = ({ Id, UniversityName }) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(Id);
                setValue(UniversityName)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(Id)} title="Delete" className="pi pi-trash red" ></span>
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
                        <Column field="UniversityName" header="Ubiversity Name"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default University