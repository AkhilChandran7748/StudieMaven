import React, { useEffect, useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { getStatus } from "../dataManagement/dataServices";
export default function StatusDropDown({ value, onChange }) {
    const [data, setData] = useState([]);
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
    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <MultiSelect value={value} onChange={(e) => {
                onChange(e.value)
            }} options={data} optionLabel="StatusName"
                maxSelectedLabels={1} className=" m-width-220p" />
            <label htmlFor="dd-city">Status</label>
        </span>
    )
}