
import { docTypes } from "../student/data";
import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { getDocumentTypes } from "../dataManagement/dataServices";

export default function DocumentTypes({ onChange }) {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null)
    const loadData = () => {
        getDocumentTypes().then(res => {
            if (res?.data?.success) {
                setData(res.data?.data || []);
            }
        })
    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <span className="p-inputtext-sm p-float-label  ">
            <Dropdown inputId="dd-city" value={selected} onChange={(e) => {
                onChange && onChange(e.value.Id)
                setSelected(e.value)
            }} options={data} optionLabel="DocumentTypeName" className="m-width-220p" />
            <label htmlFor="dd-city">Documen Name</label>
        </span>
    )
}