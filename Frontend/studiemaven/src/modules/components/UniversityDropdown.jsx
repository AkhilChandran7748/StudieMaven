import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { getUniversities } from "../dataManagement/dataServices";

export default function UniversityDropdown({ onChange, value }) {
    const [data, setData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(value);

    useEffect(() => {
        setSelectedCountry(data.find((i) => i.Id === value))
    }, [value, data])
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
            <Dropdown inputId="dd-city" value={selectedCountry} onChange={(e) => {
                setSelectedCountry(e.value)
                onChange && onChange(e.value.Id || '')
            }} options={data} optionLabel="UniversityName" className="m-width-220p" />
            <label htmlFor="dd-city">University</label>
        </span>
    )
}