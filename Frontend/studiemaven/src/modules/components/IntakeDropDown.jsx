import React, { useEffect, useState } from "react";
import { Calendar } from 'primereact/calendar';
import moment from "moment";
export default function IntakeDropDown({ className, label, onChange, dateValue = null }) {
    const [date, setDate] = useState();
    useEffect(() => {
        setDate(dateValue)
    }, [dateValue])
    return (
        <span className={`p-inputtext-sm p-float-label ${className}`}>
            {/* <Dropdown  inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="m-width-220p" /> */}
            <Calendar className=" m-width-220p" inputId="dd-city" value={date ? new Date(date) : null} onChange={(e) => {
                onChange && onChange(e.value)
                setDate(e.value)
            }} view="month" dateFormat="MM/yy" />
            <label htmlFor="dd-city">{`${label ? label : 'Intake'}`}</label>
        </span>
    )
}