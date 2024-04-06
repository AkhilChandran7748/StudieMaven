import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { getCountry } from "../dataManagement/dataServices";

export default function CountryDropDown({ onChange, value }) {
    const [data, setData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(value);

    useEffect(() => {
        setSelectedCountry(data.find((i) => i.id === value))
    }, [value])
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

    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <Dropdown inputId="dd-city" value={selectedCountry} onChange={(e) => {
                setSelectedCountry(e.value)
                onChange && onChange(e.value.id || '')
            }} options={data} optionLabel="CountryName" className="m-width-220p" />
            <label htmlFor="dd-city">Country</label>
        </span>
    )
}