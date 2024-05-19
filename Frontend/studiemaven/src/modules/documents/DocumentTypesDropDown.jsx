
import { docTypes } from "../student/data";
import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { getDocumentTypes } from "../dataManagement/dataServices";

export default function DocumentTypes({ onChange, visDocument }) {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null)
    const loadData = () => {
        getDocumentTypes().then(res => {
            if (res?.data?.success) {
                let docData = [...res.data.data]
                setData(docData.filter((i) =>
                    visDocument ? i.IsVisaDocument === 1 : i.IsVisaDocument !== 1));
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