import React, { useEffect, useState } from "react";
import { getUniversities } from "../dataManagement/dataServices";

import { MultiSelect } from 'primereact/multiselect';
export default function UniversityMultiSelect({ onChange, value = [] }) {
    const [data, setData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);

    useEffect(() => {
        if (data.length && value.length) {
            let d = value.map((i) => data.find((e) => e.Id === i))
            setSelectedCountry(d.filter((i) => i))
        }

    }, [data])//eslint-disable-line
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

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <MultiSelect value={selectedCountry} onChange={(e) => {
                setSelectedCountry(e.value)
                onChange(e.value.map((i) => i.Id).join(','))
            }} options={data} optionLabel="UniversityName"
                maxSelectedLabels={1} className=" m-width-220p" />
            {/* <Dropdown inputId="dd-city" value={selectedCountry} onChange={(e) => {
                setSelectedCountry(e.value)
                onChange && onChange(e.value.Id || '')
            }} options={data} optionLabel="UniversityName" className="m-width-220p" /> */}
            <label htmlFor="dd-city">University</label>
        </span>
    )
}