import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { getStaffs } from "../staffs/staffService";
import { ManageLocalStorage } from "../../Services/Localstorage";

export default function StaffDropDown({ label, showLabel = true, onChange, value }) {
    const [data, setData] = useState([]);
    let userData = ManageLocalStorage.get('userData')
    userData = JSON.parse(userData);
    const { SiteID = {} } = userData || {}
    const getStaffData = () => {
        getStaffs({ SiteID }).then((res) => {
            if (res?.data?.data) {
                setData(res?.data?.data)
            }
        })
    }
    useEffect(() => {
        getStaffData();
    }, [])
    const [selectedStaff, setSelectedStaff] = useState(value);

    useEffect(() => {
        setSelectedStaff(data.find((i) => i.IdUser === value))
    }, [value])
    return (
        <span className="p-inputtext-sm p-float-label  margin-l-10 ">
            <Dropdown
                placeholder="Lead Owner"
                inputId="dd-city"
                value={selectedStaff}
                valueTemplate={(option) => {
                    if (option) return <span>{option.FirstName} {option.LastName}</span>
                    return ''
                }}
                itemTemplate={(option) => {
                    if (option) return <span>{option.FirstName} {option.LastName}</span>
                    return ''
                }}
                onChange={(e) => {
                    onChange && onChange(e.value?.IdUser || '')
                    setSelectedStaff(e.value)
                }}
                options={data}
                optionLabel="FirstName"
                // className="w-full md:w-14rem"
                className="m-width-220p  min-h-40p" />
            {showLabel && <label htmlFor="dd-city">{label ? label : 'Lead Owner'}</label>}
        </span>
    )
}