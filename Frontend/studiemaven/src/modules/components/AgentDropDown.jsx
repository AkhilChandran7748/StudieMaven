import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { getAgents } from '../dataManagement/dataServices'
export default function AgentDropDown({ onChange, value = null }) {
    const [selectedCity, setSelectedCity] = useState(value);
    const [data, setData] = useState([]);
    useEffect(() => {
        setSelectedCity(data.find((i) => i.Id === value))
    }, [value, data])
    const loadData = () => {
        getAgents().then(res => {
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
            <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => {
                onChange && onChange(e.value.Id)
                setSelectedCity(e.value)
            }} options={data} optionLabel="AgentName" className="m-width-220p" />
            <label htmlFor="dd-city">Agent</label>
        </span>
    )
}