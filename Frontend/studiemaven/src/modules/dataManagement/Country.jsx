import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { countries } from "../student/data";
import { addCountry, getCountry, updateCountry } from "./dataServices";
const Country = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [editId, setEditId] = useState(null)
    const loadData = () => {
        getCountry().then(res => {
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
                let params = {
                    id: editId,
                    "country_name": value,
                    "country_code": "",
                    "country_flag": ""
                }
                updateCountry(params).then(res => {
                    if (res.data?.success) {
                        loadData();
                    }
                })
            } else {
                let params = {
                    "country_name": value,
                    "country_code": "",
                    "country_flag": ""
                }
                addCountry(params).then(res => {
                    if (res.data?.success) {
                        loadData();
                    }
                })
            }
            setValue('');
            setEditId('');
        }
    }
    const onDelete = (id) => {
        let params = {
            id,
            "country_name": value,
            "country_code": "",
            "country_flag": "",
            delete_status: 1,
        }
        updateCountry(params).then(res => {
            if (res.data?.success) {
                loadData();
            }
        })
    }
    const TableActions = ({ id, CountryName }) => {
        return (<>
            <span title="Edit" onClick={() => {
                setEditId(id);
                setValue(CountryName)
            }} className="pi pi-pencil margin-r-10 grey" ></span>
            <span onClick={() => onDelete(id)} title="Delete" className="pi pi-trash red" ></span>
        </>)
    }
    return (<>
        <div className="content margin-t-30p align-center">
            <div>
                <span className="p-float-label margin-l-10">
                    <InputText className="p-inputtext-sm  m-width-220p" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Country Name</label>
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
                        <Column field="CountryName" header="Document Name"></Column>
                        <Column body={TableActions} header="Action"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </>)
}
export default Country